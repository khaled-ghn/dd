"""
Generates assets/js/vanex_cities.js from vanex_delivery_pricing.json
Run once: python generate_cities_js.py
"""
import json, os

base_dir = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(base_dir, "vanex_delivery_pricing.json")
dst = os.path.join(base_dir, "assets", "js", "vanex_cities.js")

with open(src, encoding="utf-8") as f:
    data = json.load(f)

# Merge both categories ("main city" and "other") into one ordered list of regions
PRIORITY_REGIONS = ["TIP", "BEN", "MSR", "SBH"]

regions_map = {}

for category_key, category in data.get("categories", {}).items():
    for region_code, region_data in category.items():
        if region_code not in regions_map:
            regions_map[region_code] = {
                "code": region_code,
                "name_ar": region_data.get("region_name_ar", region_code),
                "name_en": region_data.get("region_name_en", region_code),
                "cities": []
            }
        # De-duplicate cities within region by (name, price) combo
        existing_names = {(c["name"], c["price"]) for c in regions_map[region_code]["cities"]}
        for city in region_data.get("cities", []):
            name = city.get("city_name_ar", "").strip()
            price = city.get("price_lyd", 0)
            if name and (name, price) not in existing_names:
                regions_map[region_code]["cities"].append({
                    "name": name,
                    "price": price,
                    "id": city.get("city_id")
                })
                existing_names.add((name, price))

# Sort: priority regions first, then alphabetical
def sort_key(code):
    idx = PRIORITY_REGIONS.index(code) if code in PRIORITY_REGIONS else 9999
    return (idx, code)

sorted_regions = sorted(regions_map.values(), key=lambda r: sort_key(r["code"]))

# Build JS content
js_lines = [
    "// Auto-generated from vanex_delivery_pricing.json — DO NOT EDIT MANUALLY",
    "// Vanex Delivery Pricing for Libya (all cities)",
    "const VANEX_REGIONS = ["
]

for region in sorted_regions:
    cities_json = json.dumps(region["cities"], ensure_ascii=False)
    js_lines.append(f'  {{"code":"{region["code"]}","name":"{region["name_ar"]}","cities":{cities_json}}},')

js_lines.append("];")
js_lines.append("")
js_lines.append("// For backward compat: flat array of all cities with region label")
js_lines.append("const LIBYA_CITIES = [];")
js_lines.append("VANEX_REGIONS.forEach(r => r.cities.forEach(c => LIBYA_CITIES.push({...c, region: r.name, regionCode: r.code})));")

output = "\n".join(js_lines)

os.makedirs(os.path.dirname(dst), exist_ok=True)
with open(dst, "w", encoding="utf-8") as f:
    f.write(output)

print(f"✅ Generated {dst}")
print(f"   Regions: {len(sorted_regions)}")
print(f"   Total cities: {sum(len(r['cities']) for r in sorted_regions)}")

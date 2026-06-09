import json
import sys

with open("vanex_delivery_pricing.json", "r", encoding="utf-8") as f:
    data = json.load(f)

output = []
output.append("Categories:")
for cat_name, cat_data in data.get("categories", {}).items():
    output.append(f"  - {cat_name}:")
    for region_code, region_data in cat_data.items():
        region_ar = region_data.get("region_name_ar", region_data.get("region_name_en", region_code))
        cities = region_data.get("cities", [])
        output.append(f"    * {region_code} ({region_ar}): {len(cities)} cities")

with open("scratch/pricing_summary.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print("Done inspecting pricing!")

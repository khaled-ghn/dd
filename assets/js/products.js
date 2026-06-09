const DEFAULT_PRODUCTS = {
  "ankle-sleeve": {
    name: "جوارب مشد الكاحل الرياضي",
    price: 159,
    wasPrice: 260,
    image: "ankle-sleeve/Main.png",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    upsellProduct: "wrist-support",
    badge: "🆕 وصل حديثاً",
    description: "مشد الكاحل الرياضي القابل للارتداء مع دعم قوي وتثبيت متوازن لتقليل الالتواءات وآلام المفاصل أثناء الحركة اليومية أو التمرين.",
    gallery: ["Main.png", "New Project (39).png", "New Project (36).png", "New Project (41).png", "New Project (42).png", "New Project (43).png"],
    highlights: ["تثبيت الكاحل", "ضغط متوازن", "خفيف الوزن", "تنشيط الدورة الدموية"]
  },
  "knee-support-jb8006": {
    name: "مشد الركبة المفتوح JB-8006",
    price: 239,
    wasPrice: 380,
    image: "knee-support-jb8006/Main.png",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    upsellProduct: "ankle-sleeve",
    badge: "🦴 دعم الركبة",
    description: "مشد ركبة مفتوح مريح مع فتحة مخصصة للصابونة، يوفر تثبيتاً ممتازاً وخفيفة الوزن أثناء الجري أو التمرين.",
    gallery: ["Main.png"],
    highlights: ["فتحة مريحة", "تثبيت قوي", "مرن", "مناسب للتمارين"]
  },
  "knee-support-vb8350b": {
    name: "مشد الركبة الداعم ذو الـ 4 أحزمة",
    price: 239,
    wasPrice: 380,
    image: "knee-support-vb8350b/Main.png",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    upsellProduct: "ankle-sleeve",
    badge: "💪 دعم رباعي الأحزمة",
    description: "مشد ركبة داعم من أربعة أحزمة يوزع الضغط بشكل متكامل ويمنحك حماية إضافية للركبة أثناء الحركة والرياضة.",
    gallery: ["Main.png"],
    highlights: ["أربعة أحزمة", "ثبات متقدم", "دعم جانبي", "مناسب للرفع"]
  },
  "sweat-vest": {
    name: "سترة الساونا وشد الجسم للرجال",
    price: 219,
    wasPrice: 350,
    image: "sweat-vest/Main.png",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    upsellProduct: "waist-trimmer",
    badge: "🔥 ساونا رياضي",
    description: "سترة ساونا رياضية تساعد على زيادة التعرق وسحب الجسم مع دعم لطيف للصدر والبطن أثناء التمرين أو الكارديو.",
    gallery: ["Main.png"],
    highlights: ["زيادة التعرق", "شد الجسم", "مناسب للكارديو", "قفل قوي"]
  },
  "waist-trimmer": {
    name: "حزام تخسيس ودعم الخصر VAOSI",
    price: 199,
    wasPrice: 320,
    image: "waist-trimmer/Main.png",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    upsellProduct: "wrist-support",
    badge: "🧍 دعم الخصر",
    description: "حزام دعم وتخسيس للظهر والخصر يضيف تثبيتاً ممتازاً ويزيد التعرق أثناء التمارين أو الحركة اليومية.",
    gallery: ["Main.png"],
    highlights: ["دعم الخصر", "شد الظهر", "تعرق موضعي", "مريح"]
  },
  "wrist-support": {
    name: "مشد معصم اليد الرياضي JINGBA",
    price: 119,
    wasPrice: 199,
    image: "wrist-support/Main.png",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    upsellProduct: "ankle-sleeve",
    badge: "✋ دعم الرسغ",
    description: "مشد معصم رياضي يوفّر تثبيتاً ممتازاً للرسغ أثناء رفع الأثقال أو التمرين، مع راحة ومرونة عالية.",
    gallery: ["Main.png"],
    highlights: ["حماية الرسغ", "ضغط متوازن", "مريح", "مناسب للتمارين"]
  }
};

const DEFAULT_BUNDLES = {
  "knee-active": {
    name: "باقة حماية الركبة المزدوجة 📦",
    products: ["knee-support-jb8006", "knee-support-vb8350b"],
    price: 379,
    wasPrice: 478,
    description: "مشد الركبة المفتوح JB-8006 + مشد الركبة الداعم ذو الـ 4 أحزمة"
  },
  "athletic-joint": {
    name: "باقة المفاصل الرياضية 📦",
    products: ["ankle-sleeve", "wrist-support"],
    price: 219,
    wasPrice: 278,
    description: "جوارب مشد الكاحل الرياضي + مشد معصم اليد JINGBA"
  },
  "fitness-burn": {
    name: "باقة التخسيس وحرق الدهون 📦",
    products: ["sweat-vest", "waist-trimmer"],
    price: 329,
    wasPrice: 418,
    description: "سترة الساونا للرجال + حزام دعم الخصر VAOSI"
  }
};

const savedProducts = typeof localStorage !== 'undefined' ? localStorage.getItem('storeProducts') : null;
const savedBundles = typeof localStorage !== 'undefined' ? localStorage.getItem('storeBundles') : null;

const PRODUCTS = savedProducts ? JSON.parse(savedProducts) : DEFAULT_PRODUCTS;
const BUNDLES = savedBundles ? JSON.parse(savedBundles) : DEFAULT_BUNDLES;

window.PRODUCTS = PRODUCTS;
window.BUNDLES = BUNDLES;
window.DEFAULT_PRODUCTS = DEFAULT_PRODUCTS;
window.DEFAULT_BUNDLES = DEFAULT_BUNDLES;

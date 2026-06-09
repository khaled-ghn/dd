// Libya Cities Shipping Database (extracted from Vanex Delivery Pricing)
const LIBYA_CITIES = [
  {
    "name": "أبو قرين",
    "price": 30,
    "region": "أبو قرين"
  },
  {
    "name": "أبو كماش",
    "price": 40,
    "region": "أبو كماش"
  },
  {
    "name": "إجخرة",
    "price": 45,
    "region": "إجخرة"
  },
  {
    "name": "إجدابيا",
    "price": 30,
    "region": "اجدابيا"
  },
  {
    "name": "الأبرق",
    "price": 35,
    "region": "الأبرق"
  },
  {
    "name": "الابيار",
    "price": 35,
    "region": "الابيار"
  },
  {
    "name": "الاصابعة",
    "price": 35,
    "region": "الاصابعة"
  },
  {
    "name": "البردي",
    "price": 50,
    "region": "البردي"
  },
  {
    "name": "البريقة",
    "price": 35,
    "region": "البريقة"
  },
  {
    "name": "البيضاء",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "البيضاء الوسط",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "الحمامة",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "الحنية",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "الغريقة",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "الفايدية",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "الوسيطة",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "سلتونة",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "صفصاف",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "مراوة",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "مسة",
    "price": 35,
    "region": "البيضاء"
  },
  {
    "name": "الجفرة",
    "price": 35,
    "region": "الجفرة"
  },
  {
    "name": "الجميل",
    "price": 30,
    "region": "الجميل"
  },
  {
    "name": "الجوش",
    "price": 45,
    "region": "الجوش"
  },
  {
    "name": "الحرابة",
    "price": 45,
    "region": "الحرابة"
  },
  {
    "name": "الحوامد",
    "price": 45,
    "region": "الحوامد"
  },
  {
    "name": "الخمس",
    "price": 20,
    "region": "الخمس"
  },
  {
    "name": "الرابطة",
    "price": 35,
    "region": "الرابطة"
  },
  {
    "name": "الرجبان",
    "price": 45,
    "region": "الرجبان"
  },
  {
    "name": "الرحيبات",
    "price": 45,
    "region": "الرحيبات"
  },
  {
    "name": "الرياينة",
    "price": 45,
    "region": "الرياينة"
  },
  {
    "name": "الزاوية",
    "price": 25,
    "region": "الزاوية"
  },
  {
    "name": "الزنتان",
    "price": 45,
    "region": "الزنتان"
  },
  {
    "name": "السبيعة",
    "price": 25,
    "region": "السبيعة"
  },
  {
    "name": "سوق الخميس مسيحل",
    "price": 25,
    "region": "السبيعة"
  },
  {
    "name": "السواني",
    "price": 20,
    "region": "السواني"
  },
  {
    "name": "الشويرف",
    "price": 35,
    "region": "الشويرف"
  },
  {
    "name": "العجيلات",
    "price": 30,
    "region": "العجيلات"
  },
  {
    "name": "العوينية",
    "price": 45,
    "region": "العوينية"
  },
  {
    "name": "القبة",
    "price": 40,
    "region": "القبة"
  },
  {
    "name": "القره بوللي",
    "price": 20,
    "region": "القره بوللي"
  },
  {
    "name": "القويعة",
    "price": 20,
    "region": "القره بوللي"
  },
  {
    "name": "غوط الرمان",
    "price": 20,
    "region": "القره بوللي"
  },
  {
    "name": "القطرون",
    "price": 55,
    "region": "القطرون"
  },
  {
    "name": "القلعة",
    "price": 45,
    "region": "القلعة"
  },
  {
    "name": "أبو ترابة",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "البنية",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "البياضة",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "المدني",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "المرج",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "المرج الوسط",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "المليطانية",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "برسس",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "بطة",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "تاكنس",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "توكرة",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "جردس",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "دريانة",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "سي بوزيد",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "طلميثة",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "مدور الزيتون",
    "price": 35,
    "region": "المرج"
  },
  {
    "name": "أم الارانب",
    "price": 45,
    "region": "ام الارانب"
  },
  {
    "name": "امساعد",
    "price": 50,
    "region": "امساعد"
  },
  {
    "name": "أوباري",
    "price": 45,
    "region": "أوباري"
  },
  {
    "name": "أوجلة",
    "price": 50,
    "region": "أوجلة"
  },
  {
    "name": "أولاد محمود",
    "price": 45,
    "region": "أولاد محمود"
  },
  {
    "name": "بئر الأشهب",
    "price": 50,
    "region": "بئر الأشهب"
  },
  {
    "name": "بئر غنم",
    "price": 35,
    "region": "بئر غنم"
  },
  {
    "name": "بئر معمر",
    "price": 35,
    "region": "بئر معمر"
  },
  {
    "name": "بئر هويسة",
    "price": 35,
    "region": "بئر هويسة"
  },
  {
    "name": "بدر",
    "price": 45,
    "region": "بدر"
  },
  {
    "name": "براك الشاطئ",
    "price": 40,
    "region": "براك الشاطئ"
  },
  {
    "name": "بن جواد",
    "price": 35,
    "region": "بن جواد"
  },
  {
    "name": "بن وليد",
    "price": 30,
    "region": "بن وليد"
  },
  {
    "name": "ارض الحراسة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "أرض لملوم",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الابيار",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "البركة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الحدائق",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الرجمة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الرجمة",
    "price": 35,
    "region": "بنغازي"
  },
  {
    "name": "الرحبة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الرويسات - بنغازي",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "السلماني",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "السيدة عائشة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الصابري",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الفعكات",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الفويهات",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "القوارشة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الكويفية",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الكيش",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الليثي",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الماجوري",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "المساكن",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "المقزحة",
    "price": 35,
    "region": "بنغازي"
  },
  {
    "name": "الهواري",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "الوحيشي",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بلعون",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بنغازي",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بنينا",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بو دزيرة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بو مريم",
    "price": 35,
    "region": "بنغازي"
  },
  {
    "name": "بوزغيبة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بوصنيب",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بوعطني",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بوهادي",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "بوهديمة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "توكرة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "ثاكنس",
    "price": 35,
    "region": "بنغازي"
  },
  {
    "name": "جردينة",
    "price": 35,
    "region": "بنغازي"
  },
  {
    "name": "حي الدولار",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "حي الزيتونه",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "حي السلام",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "حي الفاتح",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "حي قطر",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "دقادوستا",
    "price": 25,
    "region": "بنغازي"
  },
  {
    "name": "راس عبيدة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "سلوق",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "سوق الفحم",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "سيدي حسين",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "سيدي خليفة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "سيدي فرج",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "سيدي يونس",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "شارع الفحم",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "شارع دبي",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "شارع سوريا",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "شارع فينيسيا",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "شارع لبنان",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "شبنة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "طابلينو",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "طريق المطار",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "طريق النهر",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "طلميثة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "عمارات 602",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "قاريونس",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "قمينس",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "قنفوذة",
    "price": 30,
    "region": "بنغازي"
  },
  {
    "name": "البيفي",
    "price": 20,
    "region": "تاجوراء"
  },
  {
    "name": "القلب",
    "price": 20,
    "region": "تاجوراء"
  },
  {
    "name": "تاجوراء",
    "price": 20,
    "region": "تاجوراء"
  },
  {
    "name": "مصنع النجمة",
    "price": 20,
    "region": "تاجوراء"
  },
  {
    "name": "تازربو",
    "price": 50,
    "region": "تازربو"
  },
  {
    "name": "تراغن",
    "price": 45,
    "region": "تراغن"
  },
  {
    "name": "ترهونة",
    "price": 30,
    "region": "ترهونة"
  },
  {
    "name": "تكويت",
    "price": 45,
    "region": "تكويت"
  },
  {
    "name": "تيجي",
    "price": 45,
    "region": "تيجي"
  },
  {
    "name": "جادو",
    "price": 45,
    "region": "جادو"
  },
  {
    "name": "جالو",
    "price": 50,
    "region": "جالو"
  },
  {
    "name": "جنزور",
    "price": 20,
    "region": "جنزور"
  },
  {
    "name": "التميمي",
    "price": 45,
    "region": "درنة"
  },
  {
    "name": "العزيات",
    "price": 45,
    "region": "درنة"
  },
  {
    "name": "الفتائح",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "ام الرزم",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "حي القاعدة الجوية",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "خليج البمبة",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "درنة",
    "price": 40,
    "region": "درنة"
  },
  {
    "name": "درنة الوسط",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "رأس التين",
    "price": 45,
    "region": "درنة"
  },
  {
    "name": "سي خالد",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "سيدي عون",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "كرسة",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "لاثرون",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "مرتوبة",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "وادي الناقة",
    "price": 35,
    "region": "درنة"
  },
  {
    "name": "راس لانوف",
    "price": 35,
    "region": "راس لانوف"
  },
  {
    "name": "رأس هلال",
    "price": 40,
    "region": "رأس هلال"
  },
  {
    "name": "رقدالين",
    "price": 30,
    "region": "رقدالين"
  },
  {
    "name": "زلة",
    "price": 45,
    "region": "زلة"
  },
  {
    "name": "زلطن",
    "price": 35,
    "region": "زلطن"
  },
  {
    "name": "زليتن",
    "price": 20,
    "region": "زليتن"
  },
  {
    "name": "زوارة",
    "price": 30,
    "region": "زوارة"
  },
  {
    "name": "سبها",
    "price": 30,
    "region": "سبها"
  },
  {
    "name": "سرت",
    "price": 30,
    "region": "سرت"
  },
  {
    "name": "سمنو",
    "price": 35,
    "region": "سمنو"
  },
  {
    "name": "سوسة",
    "price": 40,
    "region": "سوسة"
  },
  {
    "name": "سوكنة",
    "price": 35,
    "region": "سوكنة"
  },
  {
    "name": "شحات",
    "price": 35,
    "region": "شحات"
  },
  {
    "name": "شكشوك",
    "price": 45,
    "region": "شكشوك"
  },
  {
    "name": "صبراتة",
    "price": 25,
    "region": "صبراتة"
  },
  {
    "name": "صرمان",
    "price": 25,
    "region": "صرمان"
  },
  {
    "name": "طبرق",
    "price": 45,
    "region": "طبرق"
  },
  {
    "name": "11 يونيو",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "أبوسليم",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الحشان",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الحي الجامعي",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الدريبي",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الرياضية",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "السبعة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "السدرة",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "السراج",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "السياحية",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الظهرة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الغرارات",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الفرناج",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الفلاح",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الكيزة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "المنصورة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "النوفليين",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الهاني",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الهضبة البدري",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الهضبة الخضراء",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الهضبة الشرقية",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "الهضبة المشروع",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "الهضبة طول",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "باب بن غشير",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "بن عاشور",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "بوابة الجبس",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "بوستة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "جامع الصقع",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "حرف الـT",
    "price": 10,
    "region": "طرابلس"
  },
  {
    "name": "حي اسطنبول",
    "price": 10,
    "region": "طرابلس"
  },
  {
    "name": "حي الأكواخ",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "حي الأندلس",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "حي الزهور",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "حي دمشق",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "خزانات النفظ",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "خلة الفرجان",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "راس حسن",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "زاوية الدهماني",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "زناتة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "سوق الجمعة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "سيدي المصري",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع الاسلاك",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع البلدية",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع الجرابة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع الجمهورية",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع الزاوية",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع الصريم",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع الظل",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع المقريف",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع النصر",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع اول سبتمبر",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "شارع ميزران",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "صلاح الدين",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "طرابلس",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "طريق السور",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "طريق الشط",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "طريق الشوك",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "طريق المشتل",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "طريق المطار",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "طريق المطبات",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "عرادة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "عمر المختار",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "عين زارة",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "غابة النصر",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "غرغور",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "غوط الشعال",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "فشلوم",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "قدح",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "قرجي",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "قرقارش",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "كشلاف",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "معيتيقة",
    "price": 15,
    "region": "طرابلس"
  },
  {
    "name": "ولي العهد",
    "price": 20,
    "region": "طرابلس"
  },
  {
    "name": "طمزين",
    "price": 45,
    "region": "طمزين"
  },
  {
    "name": "غات",
    "price": 50,
    "region": "غات"
  },
  {
    "name": "تغسات",
    "price": 25,
    "region": "غريان"
  },
  {
    "name": "غريان",
    "price": 25,
    "region": "غريان"
  },
  {
    "name": "قصر الاخيار",
    "price": 20,
    "region": "قصر الاخيار"
  },
  {
    "name": "قصربن غشير",
    "price": 20,
    "region": "قصربن غشير"
  },
  {
    "name": "الطلحية",
    "price": 30,
    "region": "قمينس"
  },
  {
    "name": "المقرون",
    "price": 30,
    "region": "قمينس"
  },
  {
    "name": "النواقية",
    "price": 30,
    "region": "قمينس"
  },
  {
    "name": "تيكا",
    "price": 30,
    "region": "قمينس"
  },
  {
    "name": "جروثة",
    "price": 30,
    "region": "قمينس"
  },
  {
    "name": "كاباو",
    "price": 45,
    "region": "كاباو"
  },
  {
    "name": "ككلة",
    "price": 35,
    "region": "ككلة"
  },
  {
    "name": "كمبوت",
    "price": 50,
    "region": "كمبوت"
  },
  {
    "name": "مرزق",
    "price": 45,
    "region": "مرزق"
  },
  {
    "name": "مزدة",
    "price": 30,
    "region": "مزدة"
  },
  {
    "name": "مسلاتة",
    "price": 30,
    "region": "مسلاتة"
  },
  {
    "name": "إقزير",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الثقيل",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الجامع العالي",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الجزيرة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الجهانات",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الحيارشة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الخروبة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الدافنية",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الرعيضات",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الرملة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الرويسات - مصراتة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الزروق",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الزوابى",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "السكت",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "السِكت",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "السكيرات",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "السواطي",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "السواوة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الشراكسة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الشواهدة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الصوالح",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الغيران",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "القدارية",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الكراريم",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الكراوده",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "المغدر",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "المقاصبة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "المقاوبة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الملايطة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "المنقوش",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "النباك",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "الهباره",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "أولاد بعيو",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "بوروية",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "جزيرة النهر",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "دائري إقزير",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "راس التوتة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "راس السايح",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "راس علي",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "راس علي",
    "price": 20,
    "region": "مصراتة"
  },
  {
    "name": "راس فريدغ",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "زاوية المحجوب",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "زريق",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "زمورة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "سور سعود",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع الاذاعة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع الدم",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع المطبات",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع الهلال",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع بازينة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع بنغازي",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع سعدون",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع سناء محيدلي",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع طرابلس",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "شارع مالطا",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "طريق البحر",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "طريق المطار",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "طريق رقم 8",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "طمينة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "عباد",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "قرارة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "قصر حمد",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "كرزاز",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "مصراتة",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "يدر",
    "price": 25,
    "region": "مصراتة"
  },
  {
    "name": "مطرد",
    "price": 25,
    "region": "مطرد"
  },
  {
    "name": "نالوت",
    "price": 45,
    "region": "نالوت"
  },
  {
    "name": "هون",
    "price": 35,
    "region": "هون"
  },
  {
    "name": "وادي الربيع",
    "price": 20,
    "region": "وادي الربيع"
  },
  {
    "name": "وازن",
    "price": 50,
    "region": "وازن"
  },
  {
    "name": "ودان",
    "price": 35,
    "region": "ودان"
  },
  {
    "name": "الماية",
    "price": 20,
    "region": "ورشفانة الزهراء"
  },
  {
    "name": "ورشفانة الزهراء",
    "price": 20,
    "region": "ورشفانة الزهراء"
  },
  {
    "name": "ورشفانة الساعدية",
    "price": 20,
    "region": "ورشفانة الساعدية"
  },
  {
    "name": "ورشفانة العزيزية",
    "price": 20,
    "region": "ورشفانة العزيزية"
  },
  {
    "name": "يفرن",
    "price": 45,
    "region": "يفرن"
  }
];

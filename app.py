from flask import Flask, render_template, request, jsonify, session, send_from_directory, abort
import json
import os
import sqlite3
from pathlib import Path

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'dev-secret-change-me')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'admin123')
DATABASE = 'store.db'


def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                sizes TEXT,
                image_url TEXT,
                description TEXT,
                badge TEXT,
                was_price REAL DEFAULT 0,
                related_product_ids TEXT,
                in_stock INTEGER DEFAULT 1,
                gallery TEXT,
                highlights TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        existing = {row['name'] for row in conn.execute('PRAGMA table_info(products)')}
        if 'description' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN description TEXT')
        if 'badge' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN badge TEXT')
        if 'was_price' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN was_price REAL DEFAULT 0')
        if 'related_product_ids' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN related_product_ids TEXT')
        if 'in_stock' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN in_stock INTEGER DEFAULT 1')
        if 'gallery' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN gallery TEXT')
        if 'highlights' not in existing:
            conn.execute('ALTER TABLE products ADD COLUMN highlights TEXT')
        conn.execute('''
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_name TEXT,
                customer_address TEXT,
                delivery_method TEXT,
                delivery_price REAL,
                total REAL,
                items TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.execute('''
            CREATE TABLE IF NOT EXISTS bundles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                was_price REAL DEFAULT 0,
                description TEXT,
                products TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()

        count = conn.execute('SELECT COUNT(*) FROM products').fetchone()[0]
        if count == 0:
            conn.executemany(
                'INSERT INTO products (name, price, sizes, image_url, description, badge, was_price, related_product_ids, in_stock, gallery, highlights) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    ('جوارب مشد الكاحل الرياضي', 159.00, json.dumps(['S', 'M', 'L', 'XL']), 'ankle-sleeve/Main.png', 'مشد الكاحل الرياضي القابل للارتداء مع دعم قوي وتثبيت متوازن لتقليل الالتواءات وآلام المفاصل أثناء الحركة اليومية أو التمرين.', '🆕 وصل حديثاً', 260.00, json.dumps(['wrist-support']), 1, json.dumps(["Main.png", "New Project (39).png", "New Project (36).png", "New Project (41).png", "New Project (42).png", "New Project (43).png"]), json.dumps(["تثبيت الكاحل", "ضغط متوازن", "خفيف الوزن", "تنشيط الدورة الدموية"])),
                    ('مشد الركبة المفتوح JB-8006', 239.00, json.dumps(['S', 'M', 'L', 'XL']), 'knee-support-jb8006/Main.png', 'مشد ركبة مفتوح مريح مع فتحة مخصصة للصابونة، يوفر تثبيتاً ممتازاً وخفيفة الوزن أثناء الجري أو التمرين.', '🦴 دعم الركبة', 380.00, json.dumps(['ankle-sleeve']), 1, json.dumps(["Main.png", "New Project (16).png", "New Project (31).png", "New Project (33).png", "New Project (34).png", "New Project (37).png", "New Project (38).png"]), json.dumps(["فتحة مريحة", "تثبيت قوي", "مرن", "مناسب للتمارين"])),
                    ('مشد الركبة الداعم ذو الـ 4 أحزمة', 239.00, json.dumps(['S', 'M', 'L', 'XL']), 'knee-support-vb8350b/Main.png', 'مشد ركبة داعم من أربعة أحزمة يوزع الضغط بشكل متكامل ويمنحك حماية إضافية للركبة أثناء الحركة والرياضة.', '💪 دعم رباعي الأحزمة', 380.00, json.dumps(['ankle-sleeve']), 1, json.dumps(["Main.png", "New Project (11).png", "New Project (15).png", "New Project (27).png", "New Project (28).png", "New Project (29).png", "New Project (30).png"]), json.dumps(["أربعة أحزمة", "ثبات متقدم", "دعم جانبي", "مناسب للرفع"])),
                    ('سترة الساونا وشد الجسم للرجال', 219.00, json.dumps(['S', 'M', 'L', 'XL']), 'sweat-vest/Main.png', 'سترة ساونا رياضية تساعد على زيادة التعرق وسحب الجسم مع دعم لطيف للصدر والبطن أثناء التمرين أو الكارديو.', '🔥 ساونا رياضي', 350.00, json.dumps(['waist-trimmer']), 1, json.dumps(["Main.png", "New Project (12).png", "New Project (13).png", "New Project (14).png", "New Project (24).png", "New Project (3).png", "New Project (5).png", "New Project (7).png", "New Project (8).png", "New Project.png"]), json.dumps(["زيادة التعرق", "شد الجسم", "مناسب للكارديو", "قفل قوي"])),
                    ('حزام تخسيس ودعم الخصر VAOSI', 199.00, json.dumps(['S', 'M', 'L', 'XL']), 'waist-trimmer/Main.png', 'حزام دعم وتخسيس للظهر والخصر يضيف تثبيتاً ممتازاً ويزيد التعرق أثناء التمارين أو الحركة اليومية.', '🧍 دعم الخصر', 320.00, json.dumps(['wrist-support']), 1, json.dumps(["Main.png", "New Project (1).png", "New Project (10).png", "New Project (17).png", "New Project (20).png", "New Project (4).png", "New Project (6).png"]), json.dumps(["دعم الخصر", "شد الظهر", "تعرق موضعي", "مريح"])),
                    ('مشد معصم اليد الرياضي JINGBA', 119.00, json.dumps(['S', 'M', 'L', 'XL']), 'wrist-support/Main.png', 'مشد معصم رياضي يوفّر تثبيتاً ممتازاً للرسغ أثناء رفع الأثقال أو التمرين، مع راحة ومرونة عالية.', '✋ دعم الرسغ', 199.00, json.dumps(['ankle-sleeve']), 1, json.dumps(["Main.png", "New Project (21).png", "New Project (22).png", "New Project (23).png", "New Project (25).png", "New Project (26).png"]), json.dumps(["حماية الرسغ", "ضغط متوازن", "مريح", "مناسب للتمارين"]))
                ]
            )
        else:
            # Check and update existing products to have highlights and gallery
            products_update_data = {
                'جوارب مشد الكاحل الرياضي': {
                    'gallery': json.dumps(["Main.png", "New Project (39).png", "New Project (36).png", "New Project (41).png", "New Project (42).png", "New Project (43).png"]),
                    'highlights': json.dumps(["تثبيت الكاحل", "ضغط متوازن", "خفيف الوزن", "تنشيط الدورة الدموية"])
                },
                'مشد الركبة المفتوح JB-8006': {
                    'gallery': json.dumps(["Main.png", "New Project (16).png", "New Project (31).png", "New Project (33).png", "New Project (34).png", "New Project (37).png", "New Project (38).png"]),
                    'highlights': json.dumps(["فتحة مريحة", "تثبيت قوي", "مرن", "مناسب للتمارين"])
                },
                'مشد الركبة الداعم ذو الـ 4 أحزمة': {
                    'gallery': json.dumps(["Main.png", "New Project (11).png", "New Project (15).png", "New Project (27).png", "New Project (28).png", "New Project (29).png", "New Project (30).png"]),
                    'highlights': json.dumps(["أربعة أحزمة", "ثبات متقدم", "دعم جانبي", "مناسب للرفع"])
                },
                'سترة الساونا وشد الجسم للرجال': {
                    'gallery': json.dumps(["Main.png", "New Project (12).png", "New Project (13).png", "New Project (14).png", "New Project (24).png", "New Project (3).png", "New Project (5).png", "New Project (7).png", "New Project (8).png", "New Project.png"]),
                    'highlights': json.dumps(["زيادة التعرق", "شد الجسم", "مناسب للكارديو", "قفل قوي"])
                },
                'حزام تخسيس ودعم الخصر VAOSI': {
                    'gallery': json.dumps(["Main.png", "New Project (1).png", "New Project (10).png", "New Project (17).png", "New Project (20).png", "New Project (4).png", "New Project (6).png"]),
                    'highlights': json.dumps(["دعم الخصر", "شد الظهر", "تعرق موضعي", "مريح"])
                },
                'مشد معصم اليد الرياضي JINGBA': {
                    'gallery': json.dumps(["Main.png", "New Project (21).png", "New Project (22).png", "New Project (23).png", "New Project (25).png", "New Project (26).png"]),
                    'highlights': json.dumps(["حماية الرسغ", "ضغط متوازن", "مريح", "مناسب للتمارين"])
                }
            }
            for name, extra in products_update_data.items():
                conn.execute('UPDATE products SET gallery = ?, highlights = ? WHERE name = ? AND (gallery IS NULL OR highlights IS NULL)', (extra['gallery'], extra['highlights'], name))

        bundle_count = conn.execute('SELECT COUNT(*) FROM bundles').fetchone()[0]
        if bundle_count == 0:
            conn.executemany(
                'INSERT INTO bundles (name, price, was_price, description, products) VALUES (?, ?, ?, ?, ?)',
                [
                    ('باقة المفاصل الرياضية 📦', 219.00, 278.00, 'حزمة مميزة تشمل مشد الكاحل ومشد المعصم بسعر مخفض.', json.dumps(['ankle-sleeve', 'wrist-support'])),
                    ('باقة حماية الركبة المزدوجة 📦', 379.00, 478.00, 'فريق دعم قوي للركبتين مع خصم إضافي عند الشراء.', json.dumps(['knee-support-jb8006', 'knee-support-vb8350b'])),
                    ('باقة التخسيس والشد 📦', 329.00, 418.00, 'سترة ساونا + حزام تخسيس للأداء الرياضي والرشاقة.', json.dumps(['sweat-vest', 'waist-trimmer'])),
                ]
            )
        conn.commit()


@app.route('/api/products')
def get_products():
    db = get_db()
    products = db.execute('SELECT * FROM products ORDER BY id DESC').fetchall()
    result = []
    for p in products:
        result.append({
            'id': p['id'],
            'name': p['name'],
            'price': p['price'],
            'was_price': p['was_price'],
            'sizes': json.loads(p['sizes']) if p['sizes'] else None,
            'image_url': p['image_url'],
            'description': p['description'],
            'badge': p['badge'],
            'slug': (p['image_url'] or '').split('/')[0] if p['image_url'] else str(p['id']),
            'related_product_ids': json.loads(p['related_product_ids']) if p['related_product_ids'] else [],
            'in_stock': bool(p['in_stock']),
            'gallery': json.loads(p['gallery']) if p['gallery'] else [],
            'highlights': json.loads(p['highlights']) if p['highlights'] else []
        })
    return jsonify(result)


@app.route('/api/products', methods=['POST'])
def add_product():
    if not session.get('admin'):
        return jsonify({'error': 'Unauthorized'}), 401

    data = request.get_json()
    name = data['name']
    price = float(data['price'])
    sizes = json.dumps(data.get('sizes')) if data.get('sizes') else None
    image_url = data.get('image_url', '')
    description = data.get('description', '')
    badge = data.get('badge', 'متوفر')
    was_price = float(data.get('was_price', 0) or 0)
    related_product_ids = json.dumps(data.get('related_product_ids') or [])
    in_stock = 1 if data.get('in_stock', True) else 0
    gallery = json.dumps(data.get('gallery') or [])
    highlights = json.dumps(data.get('highlights') or [])

    db = get_db()
    db.execute('INSERT INTO products (name, price, sizes, image_url, description, badge, was_price, related_product_ids, in_stock, gallery, highlights) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
               (name, price, sizes, image_url, description, badge, was_price, related_product_ids, in_stock, gallery, highlights))
    db.commit()
    return jsonify({'success': True}), 201


@app.route('/api/products/<int:product_id>', methods=['PUT'])
def edit_product(product_id):
    if not session.get('admin'):
        return jsonify({'error': 'Unauthorized'}), 401

    data = request.get_json()
    gallery = json.dumps(data.get('gallery') or [])
    highlights = json.dumps(data.get('highlights') or [])

    db = get_db()
    db.execute('UPDATE products SET name=?, price=?, sizes=?, image_url=?, description=?, badge=?, was_price=?, related_product_ids=?, in_stock=?, gallery=?, highlights=? WHERE id=?',
               (data.get('name'), float(data.get('price')), json.dumps(data.get('sizes')) if data.get('sizes') else None,
                data.get('image_url', ''), data.get('description', ''), data.get('badge', 'متوفر'),
                float(data.get('was_price', 0) or 0), json.dumps(data.get('related_product_ids') or []),
                1 if data.get('in_stock', True) else 0, gallery, highlights, product_id))
    db.commit()
    return jsonify({'success': True})


@app.route('/api/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    if not session.get('admin'):
        return jsonify({'error': 'Unauthorized'}), 401

    db = get_db()
    db.execute('DELETE FROM products WHERE id=?', (product_id,))
    db.commit()
    return jsonify({'success': True})


@app.route('/api/bundles')
def get_bundles():
    db = get_db()
    bundles = db.execute('SELECT * FROM bundles ORDER BY id').fetchall()
    return jsonify([{
        'id': b['id'],
        'name': b['name'],
        'price': b['price'],
        'was_price': b['was_price'],
        'description': b['description'],
        'products': json.loads(b['products']) if b['products'] else []
    } for b in bundles])


@app.route('/api/orders', methods=['POST'])
def place_order():
    data = request.get_json()
    db = get_db()
    db.execute('''
        INSERT INTO orders (customer_name, customer_address, delivery_method, delivery_price, total, items)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['name'],
        data['address'],
        data['delivery_method'],
        float(data['delivery_price']),
        float(data['total']),
        json.dumps(data['items'])
    ))
    db.commit()
    return jsonify({'success': True})


@app.route('/api/orders', methods=['GET'])
def get_orders():
    if not session.get('admin'):
        return jsonify({'error': 'Unauthorized'}), 401

    db = get_db()
    orders = db.execute('SELECT * FROM orders ORDER BY created_at DESC').fetchall()
    result = []
    for o in orders:
        result.append({
            'id': o['id'],
            'customer_name': o['customer_name'],
            'customer_address': o['customer_address'],
            'delivery_method': o['delivery_method'],
            'delivery_price': o['delivery_price'],
            'total': o['total'],
            'items': json.loads(o['items']),
            'created_at': o['created_at']
        })
    return jsonify(result)


@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    if data.get('password') == ADMIN_PASSWORD:
        session['admin'] = True
        return jsonify({'success': True})
    return jsonify({'error': 'Wrong password'}), 401


@app.route('/api/admin/logout', methods=['POST'])
def admin_logout():
    session.pop('admin', None)
    return jsonify({'success': True})


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/checkout.html')
def checkout():
    return render_template('checkout.html')


@app.route('/thank-you.html')
def thankyou():
    return render_template('thank-you.html')


@app.route('/admin.html')
def admin_page():
    return render_template('admin.html')


@app.route('/product/<string:slug_or_id>')
def product_detail(slug_or_id):
    return render_template('product.html', slug_or_id=slug_or_id)


@app.route('/<path:path>')
def serve_root_file(path):
    if path.startswith('api/') or path.endswith('.html'):
        abort(404)
    if os.path.isfile(path):
        return send_from_directory('.', path)
    abort(404)


if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)

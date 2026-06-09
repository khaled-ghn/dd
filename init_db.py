import sqlite3
import json

conn = sqlite3.connect('store.db')
conn.execute('''CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    sizes TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
conn.execute('''CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    customer_address TEXT,
    delivery_method TEXT,
    delivery_price REAL,
    total REAL,
    items TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')

sample = [
    ('جوارب مشد الكاحل الرياضي', 159.00, json.dumps(['S', 'M', 'L', 'XL']), 'ankle-sleeve/Main.png'),
    ('مشد الركبة المفتوح JB-8006', 239.00, json.dumps(['S', 'M', 'L', 'XL']), 'knee-support-jb8006/Main.png'),
    ('مشد الركبة الداعم ذو الـ 4 أحزمة', 239.00, json.dumps(['S', 'M', 'L', 'XL']), 'knee-support-vb8350b/Main.png'),
]
for p in sample:
    conn.execute('INSERT INTO products (name, price, sizes, image_url) VALUES (?,?,?,?)', p)

conn.commit()
conn.close()
print('Database initialized.')

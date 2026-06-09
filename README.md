# بازار بلس - Bazaar Plus Store

A professional e-commerce storefront built with Flask, SQLite, and responsive web design. Support for product catalog, dynamic bundles, size selection, and order management.

## Features

✨ **Professional Storefront**
- Dynamic product catalog with detailed descriptions
- Related products recommendations
- Special bundle offers with discount pricing
- Responsive design for mobile, tablet, and desktop

🛒 **Shopping Experience**
- Add/remove products to cart with live badge notification
- Size selection for products
- Bundle purchasing with integrated cart
- Toast notifications for user actions

📦 **Product Management**
- Admin panel for product CRUD operations
- Support for descriptions, badges, pricing history
- Related product linking
- Bundle creation and management

🎨 **User Interface**
- Arabic RTL (Right-to-Left) layout
- Modern card-based design
- Smooth animations and transitions
- Accessibility-focused styling

## Tech Stack

- **Backend**: Flask 3.1.3 (Python)
- **Database**: SQLite
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Responsive CSS with Cairo font
- **Direction**: RTL (Right-to-Left) support

## Project Structure

```
├── app.py                 # Flask application and API routes
├── requirements.txt       # Python dependencies
├── store.db              # SQLite database (generated)
├── static/
│   ├── cart.js           # Shopping cart logic and notifications
│   ├── global.css        # Responsive styling
│   └── Logo.png          # Store logo
├── templates/
│   ├── index.html        # Homepage with products and bundles
│   ├── product.html      # Product detail page
│   ├── checkout.html     # Shopping cart and checkout
│   ├── admin.html        # Admin panel
│   └── thank-you.html    # Order confirmation
├── products/             # Product images
└── [product-folders]/    # Individual product directories with images
```

## Installation

### Prerequisites
- Python 3.7+
- pip (Python package manager)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/bazaar-plus.git
cd bazaar-plus
```

2. **Create a virtual environment (optional but recommended)**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the application**
```bash
python app.py
```

5. **Access the store**
Open your browser and go to: `http://127.0.0.1:5000/`

## Usage

### Customer Features
1. **Browse Products**: View all products on the homepage
2. **View Details**: Click "عرض التفاصيل" to see full product information
3. **Select Size**: Choose available sizes for products
4. **Add to Cart**: Click "أضف إلى السلة" to add items
5. **View Cart**: Click the cart badge to see items
6. **Checkout**: Fill in shipping details and complete your order

### Admin Features
1. **Access Admin**: Go to `http://127.0.0.1:5000/admin.html`
2. **Login**: Use password: `admin123` (change in production!)
3. **Manage Products**:
   - Add new products with details
   - Edit existing products
   - Delete products
   - Set descriptions, badges, and related items
4. **View Orders**: See all customer orders with details

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product (admin)
- `PUT /api/products/<id>` - Update product (admin)
- `DELETE /api/products/<id>` - Delete product (admin)

### Bundles
- `GET /api/bundles` - Get all bundle offers

### Orders
- `GET /api/orders` - Get all orders (admin)
- `POST /api/orders` - Create new order

### Admin
- `POST /api/admin/login` - Login to admin
- `POST /api/admin/logout` - Logout from admin

## Database Schema

### Products Table
```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  sizes TEXT,
  image_url TEXT,
  description TEXT,
  badge TEXT,
  was_price REAL,
  related_product_ids TEXT,
  in_stock INTEGER,
  created_at TIMESTAMP
);
```

### Orders Table
```sql
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_name TEXT,
  customer_address TEXT,
  delivery_method TEXT,
  delivery_price REAL,
  total REAL,
  items TEXT (JSON),
  created_at TIMESTAMP
);
```

### Bundles Table
```sql
CREATE TABLE bundles (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  was_price REAL,
  description TEXT,
  products TEXT (JSON),
  created_at TIMESTAMP
);
```

## Configuration

### Environment Variables
Set these in a `.env` file or system environment:

```env
ADMIN_PASSWORD=your_secure_password
SECRET_KEY=your_secret_key
FLASK_ENV=production
```

## Security Notes

⚠️ **Important for Production**:
1. Change the default admin password
2. Set a strong `SECRET_KEY`
3. Enable HTTPS/SSL
4. Use a production WSGI server (Gunicorn, uWSGI)
5. Implement proper authentication
6. Add CSRF protection
7. Validate and sanitize all inputs

## Deployment

### Using Gunicorn (Recommended)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Using Docker
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

## License

MIT License - feel free to use this for commercial or personal projects.

## Support

For issues, questions, or suggestions, please create an issue on GitHub.

---

**Made with ❤️ for professional e-commerce stores**

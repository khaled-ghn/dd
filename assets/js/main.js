// E-Commerce Store Shared Logic

// Configurations (User can customize these placeholders)
const CONFIG = {
  WHATSAPP_NUMBER: "218910000000", // Placeholder WhatsApp number for Libya
  EMAILJS_SERVICE_ID: "service_placeholder",
  EMAILJS_TEMPLATE_ID: "template_placeholder",
  EMAILJS_PUBLIC_KEY: "user_placeholder",
  META_PIXEL_ID: "1659868495312826"
};

const PRODUCTS = window.PRODUCTS || {};
const BUNDLES = window.BUNDLES || {};

function renderHomeProducts() {
  const container = document.getElementById('homeProductsGrid');
  if (!container) return;

  container.innerHTML = Object.entries(PRODUCTS).map(([id, product]) => `
    <div class="grid-product-card outer-bezel">
      <a href="/product/${id}" class="grid-product-card-link">
        <div class="inner-core" style="height: 100%; display: flex; flex-direction: column;">
          <span class="grid-badge">${product.inStock ? '🆕 متوفر الآن' : '⏳ قريباً'}</span>
          <div class="grid-image-wrapper">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="grid-info" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 class="grid-title">${product.name}</h3>
              <p style="font-size: 0.85rem; color: var(--color-gray-400); margin-top: 4px; line-height: 1.4; height: 60px; overflow: hidden;">${product.sizes ? 'متوفر بأحجام متعددة - اختر المقاس المناسب لك.' : 'منتج مميز بجودة عالية وسعر مناسب.'}</p>
            </div>
            <div>
              <div class="grid-price-row">
                <span class="grid-price-now">${product.price} د.ل</span>
                <span class="grid-price-was">${product.wasPrice} د.ل</span>
              </div>
              <span class="btn-primary" style="padding: 10px; font-size: 0.95rem;">اطلب الآن</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  `).join('');
}

function renderBundles() {
  const container = document.getElementById('homeBundlesGrid');
  if (!container) return;

  container.innerHTML = Object.entries(BUNDLES).map(([id, bundle]) => `
    <div class="grid-product-card outer-bezel">
      <a href="checkout.html?bundle=${id}" class="grid-product-card-link">
        <div class="inner-core" style="height: 100%; display: flex; flex-direction: column;">
          <span class="grid-badge">📦 باقة مميزة</span>
          <div class="grid-image-wrapper">
            <img src="${PRODUCTS[bundle.products[0]].image}" alt="${bundle.name}">
          </div>
          <div class="grid-info" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <h3 class="grid-title">${bundle.name}</h3>
              <p style="font-size: 0.85rem; color: var(--color-gray-400); margin-top: 4px; line-height: 1.4; height: 60px; overflow: hidden;">${bundle.description}</p>
            </div>
            <div>
              <div class="grid-price-row">
                <span class="grid-price-now">${bundle.price} د.ل</span>
                <span class="grid-price-was">${bundle.wasPrice} د.ل</span>
              </div>
              <span class="btn-primary" style="padding: 10px; font-size: 0.95rem;">اطلب الباقة الآن</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  `).join('');
}

// --- Meta Pixel Helper Functions ---
function initMetaPixel() {
  if (window.fbq) return; // Already initialized
  
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  fbq('init', CONFIG.META_PIXEL_ID);
  fbq('track', 'PageView');
}

// Track Product ViewContent
function trackViewContent(productId, value) {
  if (typeof fbq === 'function') {
    fbq('track', 'ViewContent', {
      content_ids: [productId],
      content_type: 'product',
      value: parseFloat(value),
      currency: 'LYD'
    });
    console.log(`[Pixel] ViewContent tracked for ${productId} (Value: ${value} LYD)`);
  }
}

// Track InitiateCheckout
function trackInitiateCheckout(productId, value) {
  if (typeof fbq === 'function') {
    fbq('track', 'InitiateCheckout', {
      content_ids: [productId],
      content_type: 'product',
      value: parseFloat(value),
      currency: 'LYD'
    });
    console.log(`[Pixel] InitiateCheckout tracked for ${productId} (Value: ${value} LYD)`);
  }
}

// Track Lead (Success sale)
function trackLead(productId, value, upsellId = null, upsellValue = 0) {
  if (typeof fbq === 'function') {
    const ids = [productId];
    if (upsellId) ids.push(upsellId);
    fbq('track', 'Lead', {
      content_ids: ids,
      content_type: 'product',
      value: parseFloat(value) + parseFloat(upsellValue),
      currency: 'LYD'
    });
    console.log(`[Pixel] Lead tracked for ${ids.join(', ')} (Total Value: ${parseFloat(value) + parseFloat(upsellValue)} LYD)`);
  }
}

// Initialize Pixel on page load
document.addEventListener('DOMContentLoaded', () => {
  initMetaPixel();
  renderHomeProducts();
  renderBundles();
});


// --- Countdown Timer Ticker ---
function startCountdownTimers() {
  const hourEl = document.getElementById('timerHour');
  const minEl = document.getElementById('timerMin');
  const secEl = document.getElementById('timerSec');

  if (!hourEl || !minEl || !secEl) return;

  // Initial values: 3 hours, 22 minutes, 45 seconds
  let hours = 3;
  let minutes = 22;
  let seconds = 45;

  const timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          clearInterval(timer);
        }
      }
    }
    
    // Safety check in case elements are removed
    if (document.getElementById('timerHour')) {
      secEl.childNodes[0].textContent = String(seconds).padStart(2, '0');
      minEl.childNodes[0].textContent = String(minutes).padStart(2, '0');
      hourEl.childNodes[0].textContent = String(hours).padStart(2, '0');
    } else {
      clearInterval(timer);
    }
  }, 1000);
}


// --- Accordion FAQ Controls ---
function setupFaqs() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close other accordions
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}


// --- Carousel Slide Highlights ---
function setupCarousels() {
  const slider = document.getElementById('imageSlider');
  const dots = document.querySelectorAll('.dot');
  if (!slider || dots.length === 0) return;

  const totalSlides = dots.length;
  let currentIndex = 0;
  let autoScrollInterval = null;

  function getActiveIndex() {
    const scrollPosition = slider.scrollLeft;
    const slideWidth = slider.clientWidth || 1;
    return Math.round(Math.abs(scrollPosition) / slideWidth);
  }

  function scrollToSlide(index) {
    const slideWidth = slider.clientWidth;
    const isRtl = document.dir === 'rtl' || getComputedStyle(slider).direction === 'rtl';
    const targetScroll = isRtl ? -index * slideWidth : index * slideWidth;
    slider.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      currentIndex = getActiveIndex();
      currentIndex = (currentIndex + 1) % totalSlides;
      scrollToSlide(currentIndex);
    }, 3000); // Auto-scroll every 3 seconds
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
  }

  slider.addEventListener('scroll', () => {
    const index = getActiveIndex();
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });

  // Start auto scrolling
  startAutoScroll();

  // Interactivity pause
  slider.addEventListener('touchstart', stopAutoScroll, { passive: true });
  slider.addEventListener('touchend', startAutoScroll, { passive: true });
  slider.addEventListener('mouseenter', stopAutoScroll);
  slider.addEventListener('mouseleave', startAutoScroll);
}

// --- Dynamic Reviews Carousel Slider (RTL) ---
function renderDynamicReviews(productId) {
  const reviewsContainer = document.getElementById('reviewsSlider');
  const dotsContainer = document.getElementById('reviewsDots');
  if (!reviewsContainer || !dotsContainer || typeof PRODUCT_REVIEWS === 'undefined') return;

  const reviews = PRODUCT_REVIEWS[productId];
  if (!reviews || reviews.length === 0) return;

  reviewsContainer.innerHTML = '';
  dotsContainer.innerHTML = '';

  // Helper to render star rating text
  function getStarsHtml(rating) {
    if (rating === 5) return '⭐⭐⭐⭐⭐';
    if (rating === 4.5) return '⭐⭐⭐⭐½';
    if (rating === 4) return '⭐⭐⭐⭐☆';
    return '⭐⭐⭐⭐⭐';
  }

  // Divide reviews into groups of 3
  const groupSize = 3;
  const slidesCount = Math.ceil(reviews.length / groupSize);

  for (let s = 0; s < slidesCount; s++) {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'reviews-slide';

    const startIdx = s * groupSize;
    const endIdx = Math.min(startIdx + groupSize, reviews.length);

    for (let i = startIdx; i < endIdx; i++) {
      const rev = reviews[i];
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div class="review-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="reviewer-name" style="font-weight: 700; font-size: 0.95rem; color: var(--color-light);">${rev.name} (${rev.city})</span>
          <span class="review-stars" style="color: var(--color-accent); font-size: 0.85rem;">${getStarsHtml(rev.stars)}</span>
        </div>
        <p class="review-text" style="font-size: 0.88rem; color: var(--color-gray-400); line-height: 1.6;">${rev.text}</p>
        <span class="reviewer-status" style="font-size: 0.72rem; color: var(--color-success); margin-top: 8px; display: flex; align-items: center; gap: 4px;">✓ زبون مؤكد</span>
      `;
      slideDiv.appendChild(card);
    }
    reviewsContainer.appendChild(slideDiv);

    // Create dot
    const dot = document.createElement('span');
    dot.className = 'dot reviews-dot';
    if (s === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  }

  // Setup auto scroll for reviews
  const rDots = dotsContainer.querySelectorAll('.reviews-dot');
  let rIndex = 0;
  let rInterval = null;

  function getActiveReviewIndex() {
    const scrollPosition = reviewsContainer.scrollLeft;
    const slideWidth = reviewsContainer.clientWidth || 1;
    return Math.round(Math.abs(scrollPosition) / slideWidth);
  }

  function scrollToReviewSlide(index) {
    const slideWidth = reviewsContainer.clientWidth;
    const isRtl = document.dir === 'rtl' || getComputedStyle(reviewsContainer).direction === 'rtl';
    const targetScroll = isRtl ? -index * slideWidth : index * slideWidth;
    reviewsContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }

  function startReviewsAutoScroll() {
    stopReviewsAutoScroll();
    rInterval = setInterval(() => {
      rIndex = getActiveReviewIndex();
      rIndex = (rIndex + 1) % slidesCount;
      scrollToReviewSlide(rIndex);
    }, 4500); // Scroll reviews every 4.5 seconds
  }

  function stopReviewsAutoScroll() {
    if (rInterval) {
      clearInterval(rInterval);
    }
  }

  reviewsContainer.addEventListener('scroll', () => {
    const idx = getActiveReviewIndex();
    rDots.forEach((dot, dIdx) => {
      if (dIdx === idx) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });

  // Start auto scroll
  startReviewsAutoScroll();

  // Pause on interaction
  reviewsContainer.addEventListener('touchstart', stopReviewsAutoScroll, { passive: true });
  reviewsContainer.addEventListener('touchend', startReviewsAutoScroll, { passive: true });
  reviewsContainer.addEventListener('mouseenter', stopReviewsAutoScroll);
  reviewsContainer.addEventListener('mouseleave', startReviewsAutoScroll);
}


// --- Sticky Bottom CTA Bar ---
function setupStickyFooter() {
  const stickyFooter = document.getElementById('stickyFooter');
  if (!stickyFooter) return;

  const heroSection = document.querySelector('.hero-section') || document.querySelector('.hero-image-container');

  window.addEventListener('scroll', () => {
    const threshold = heroSection ? heroSection.clientHeight : 300;
    if (window.scrollY > threshold) {
      stickyFooter.classList.add('visible');
    } else {
      stickyFooter.classList.remove('visible');
    }
  });
}


// --- Checkout Page Controller ---
let currentCheckoutProduct = null;
let currentCheckoutBundle = null;
let currentUpsellProduct = null;
let upsellAccepted = false;
let quantity = 1;
let currentSelectedSize = '';
let selectedCitiesShippingPrice = 0;
let checkedBundleProducts = []; // Array of product IDs checked in custom bundle builder

function initCheckoutPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product');
  const bundleId = params.get('bundle');
  
  if (bundleId && BUNDLES[bundleId]) {
    currentCheckoutBundle = BUNDLES[bundleId];
    currentSelectedSize = '';
    currentCheckoutBundle.id = bundleId;
    
    // Hide custom bundle builder since they already bought a preset bundle
    const builderSection = document.getElementById('bundleBuilderSection');
    if (builderSection) builderSection.style.display = 'none';
    
    // Hide upsell modal triggers since they already bought a bundle
    currentUpsellProduct = null;
    
    // Set up summary
    document.getElementById('summaryTitle').textContent = currentCheckoutBundle.name;
    const firstProdId = currentCheckoutBundle.products[0];
    document.getElementById('summaryImage').src = PRODUCTS[firstProdId].image;
  } else if (productId && PRODUCTS[productId]) {
    currentCheckoutProduct = PRODUCTS[productId];
    currentCheckoutProduct.id = productId;
    currentSelectedSize = params.get('size') || (currentCheckoutProduct.sizes && currentCheckoutProduct.sizes[0]) || '';
    populateSizeSelector();
    
    // Set up checkout UI fields
    document.getElementById('summaryTitle').textContent = currentCheckoutProduct.name;
    document.getElementById('summaryImage').src = currentCheckoutProduct.image;
    
    // Setup upsell modal configuration
    const upsellId = currentCheckoutProduct.upsellProduct;
    if (upsellId && PRODUCTS[upsellId]) {
      currentUpsellProduct = PRODUCTS[upsellId];
      currentUpsellProduct.id = upsellId;
      
      // Fill upsell dialog values
      document.getElementById('upsellImg').src = currentUpsellProduct.image;
      document.getElementById('upsellName').textContent = currentUpsellProduct.name;
      document.getElementById('upsellWasPrice').textContent = `${currentUpsellProduct.wasPrice} د.ل`;
      
      // Price with 30 LYD discount
      const upsellDiscountedPrice = currentUpsellProduct.price - 30;
      document.getElementById('upsellNowPrice').textContent = `${upsellDiscountedPrice} د.ل`;
    }
    
    // Setup Custom Bundle Builder Checklist (exclude the main product)
    setupCustomBundleBuilder(productId);
  } else {
    // Redirect to home if no valid product or bundle selected
    window.location.href = 'index.html';
    return;
  }

  // Populate Cities Select Dropdown from cities.js
  populateCitiesDropdown();

  updateCheckoutPricing();

  // Quantity control listeners
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  
  qtyMinus.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      updateCheckoutPricing();
    }
  });

  qtyPlus.addEventListener('click', () => {
    quantity++;
    updateCheckoutPricing();
  });

  // Setup form submission interceptor for the Upsell Popup
  const checkoutForm = document.getElementById('checkoutForm');
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Trigger standard validation checks
    const inputs = checkoutForm.querySelectorAll('.form-input');
    let isValid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('invalid');
        isValid = false;
      }
    });

    if (!isValid) return;

    // Trigger Upsell Popup if upsell product is present and not yet answered
    const upsellModal = document.getElementById('upsellModal');
    if (currentUpsellProduct && !upsellAccepted && !window.upsellModalShown) {
      window.upsellModalShown = true;
      upsellModal.showModal();
    } else {
      // Direct submission triggers (no upsell or already completed)
      submitOrder();
    }
  });

  // Dialog Button Listeners
  document.getElementById('btnUpsellAccept').addEventListener('click', () => {
    upsellAccepted = true;
    // Add upsell product visual to summary
    const upsellRow = document.getElementById('upsellSummaryRow');
    const upsellDiscountedPrice = currentUpsellProduct.price - 30;
    
    document.getElementById('upsellSummaryName').textContent = `🎁 عرض إضافي: ${currentUpsellProduct.name}`;
    document.getElementById('upsellSummaryPrice').textContent = `${upsellDiscountedPrice} د.ل`;
    upsellRow.style.display = 'flex';
    
    updateCheckoutPricing();
    document.getElementById('upsellModal').close();
    submitOrder();
  });

  document.getElementById('btnUpsellDecline').addEventListener('click', () => {
    upsellAccepted = false;
    document.getElementById('upsellModal').close();
    submitOrder();
  });
}

function setupCustomBundleBuilder(mainProductId) {
  const container = document.getElementById('bundleItemsList');
  if (!container) return;
  
  container.innerHTML = '';
  
  Object.keys(PRODUCTS).forEach(prodId => {
    if (prodId === mainProductId) return; // Exclude main product
    
    const prod = PRODUCTS[prodId];
    
    const item = document.createElement('div');
    item.className = 'outer-bezel';
    item.style.margin = '0';
    item.innerHTML = `
      <div class="inner-core" style="padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; gap: 12px; background: rgba(255,255,255,0.01);">
        <div style="display: flex; align-items: center; gap: 12px;">
          <input type="checkbox" id="chk_bundle_${prodId}" value="${prodId}" class="bundle-chk" style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--color-accent);">
          <img src="${prod.image}" alt="${prod.name}" style="width: 44px; height: 44px; object-fit: contain; border-radius: var(--border-radius-sm); background: var(--color-bg); padding: 2px;">
          <div>
            <h4 style="font-size: 0.88rem; color: var(--color-light); font-weight: 600;">${prod.name}</h4>
            <span style="font-size: 0.8rem; color: var(--color-accent); font-weight: 700;">+ ${prod.price} د.ل</span>
          </div>
        </div>
        <span style="font-size: 0.75rem; color: var(--color-gray-500); text-decoration: line-through;">${prod.wasPrice} د.ل</span>
      </div>
    `;
    
    container.appendChild(item);
  });
  
  // Add listeners to checkboxes
  const checkboxes = container.querySelectorAll('.bundle-chk');
  checkboxes.forEach(chk => {
    chk.addEventListener('change', () => {
      checkedBundleProducts = [];
      checkboxes.forEach(c => {
        if (c.checked) {
          checkedBundleProducts.push(c.value);
        }
      });
      updateCheckoutPricing();
    });
  });
}

function populateSizeSelector() {
  const sizeSelect = document.getElementById('size');
  if (!sizeSelect) return;

  sizeSelect.innerHTML = '<option value="" disabled selected>اختر المقاس...</option>';

  const sizes = currentCheckoutProduct && currentCheckoutProduct.sizes ? currentCheckoutProduct.sizes : [];
  sizes.forEach(size => {
    const option = document.createElement('option');
    option.value = size;
    option.textContent = size;
    if (currentSelectedSize === size) option.selected = true;
    sizeSelect.appendChild(option);
  });

  sizeSelect.addEventListener('change', () => {
    currentSelectedSize = sizeSelect.value;
  });
}

function populateCitiesDropdown() {
  const regionSelect = document.getElementById('region');
  const citySelect = document.getElementById('city');
  const cityGroup = document.getElementById('cityGroup');
  const shippingBadge = document.getElementById('shippingBadge');

  // Use VANEX_REGIONS if available, else fall back to legacy LIBYA_CITIES
  if (!regionSelect || typeof VANEX_REGIONS === 'undefined') {
    // Legacy fallback: single flat dropdown
    if (!citySelect || typeof LIBYA_CITIES === 'undefined') return;
    citySelect.innerHTML = '<option value="" disabled selected>اختر مدينتك...</option>';
    LIBYA_CITIES.forEach(c => {
      const option = document.createElement('option');
      option.value = c.name;
      const shippingText = c.price === 0 ? 'شحن مجاني' : `شحن: ${c.price} د.ل`;
      option.textContent = `${c.name} (${shippingText})`;
      option.dataset.price = c.price;
      citySelect.appendChild(option);
    });
    citySelect.addEventListener('change', () => {
      const sel = citySelect.options[citySelect.selectedIndex];
      selectedCitiesShippingPrice = parseFloat(sel.dataset.price || 0);
      updateCheckoutPricing();
    });
    return;
  }

  // --- Step 1: Populate Region dropdown ---
  regionSelect.innerHTML = '<option value="" disabled selected>اختر منطقتك أو محافظتك...</option>';
  VANEX_REGIONS.forEach(region => {
    const option = document.createElement('option');
    option.value = region.code;
    option.textContent = region.name;
    regionSelect.appendChild(option);
  });

  // --- Step 2: When region selected, populate city dropdown ---
  regionSelect.addEventListener('change', () => {
    const selectedCode = regionSelect.value;
    const region = VANEX_REGIONS.find(r => r.code === selectedCode);
    if (!region) return;

    citySelect.innerHTML = '<option value="" disabled selected>اختر حيك أو شارعك...</option>';
    region.cities.forEach(c => {
      const option = document.createElement('option');
      option.value = c.name;
      const shippingText = c.price === 0 ? 'شحن مجاني!' : `تكلفة الشحن: ${c.price} د.ل`;
      option.textContent = `${c.name}  —  ${shippingText}`;
      option.dataset.price = c.price;
      citySelect.appendChild(option);
    });

    // Show city group
    if (cityGroup) {
      cityGroup.style.display = 'block';
      // Smooth scroll to city select
      setTimeout(() => cityGroup.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
    if (shippingBadge) shippingBadge.style.display = 'none';

    // Reset shipping when region changes
    selectedCitiesShippingPrice = 0;
    updateCheckoutPricing();
  });

  // --- When city selected, update shipping price ---
  citySelect.addEventListener('change', () => {
    const sel = citySelect.options[citySelect.selectedIndex];
    selectedCitiesShippingPrice = parseFloat(sel.dataset.price || 0);

    // Show badge
    if (shippingBadge) {
      if (selectedCitiesShippingPrice === 0) {
        shippingBadge.textContent = '🎉 التوصيل مجاني لمنطقتك!';
        shippingBadge.style.color = 'var(--color-success)';
        shippingBadge.style.borderColor = 'rgba(74,222,128,0.2)';
        shippingBadge.style.background = 'rgba(74,222,128,0.05)';
      } else {
        shippingBadge.textContent = `🚚 رسوم التوصيل لمنطقتك: ${selectedCitiesShippingPrice} د.ل — الدفع عند الاستلام`;
        shippingBadge.style.color = 'var(--color-accent)';
        shippingBadge.style.borderColor = 'rgba(223,186,73,0.2)';
        shippingBadge.style.background = 'rgba(223,186,73,0.05)';
      }
      shippingBadge.style.display = 'block';
    }

    updateCheckoutPricing();
  });
}

function updateCheckoutPricing() {
  let subtotal = 0;
  let discount = 0;
  let upsellPrice = 0;
  let totalItemsCount = 0;
  
  const summaryProductsList = document.getElementById('summaryProductsList');
  if (summaryProductsList) summaryProductsList.innerHTML = '';
  
  if (currentCheckoutBundle) {
    // Preset bundle active
    subtotal = quantity * currentCheckoutBundle.price;
    totalItemsCount = quantity * currentCheckoutBundle.products.length;
    
    // Render the preset bundle products in the list
    if (summaryProductsList) {
      currentCheckoutBundle.products.forEach(prodId => {
        const prod = PRODUCTS[prodId];
        if (prod) {
          const itemDiv = document.createElement('div');
          itemDiv.style.display = 'flex';
          itemDiv.style.justify = 'space-between';
          itemDiv.style.alignItems = 'center';
          itemDiv.style.fontSize = '0.85rem';
          itemDiv.style.color = 'var(--color-gray-300)';
          itemDiv.innerHTML = `
            <span>📦 ${prod.name}</span>
            <span style="font-weight: 700; color: var(--color-accent);">${prod.price} د.ل</span>
          `;
          summaryProductsList.appendChild(itemDiv);
        }
      });
    }
  } else if (currentCheckoutProduct) {
    // Regular product active
    const mainProductSubtotal = quantity * currentCheckoutProduct.price;
    let customProductsSubtotal = 0;
    
    // Render custom bundle items in order summary
    if (summaryProductsList) {
      checkedBundleProducts.forEach(prodId => {
        const prod = PRODUCTS[prodId];
        if (prod) {
          customProductsSubtotal += prod.price;
          const itemDiv = document.createElement('div');
          itemDiv.style.display = 'flex';
          itemDiv.style.justify = 'space-between';
          itemDiv.style.alignItems = 'center';
          itemDiv.style.fontSize = '0.85rem';
          itemDiv.style.color = 'var(--color-success)';
          itemDiv.innerHTML = `
            <span>🎁 إضافة الباقة: ${prod.name}</span>
            <span style="font-weight: 700; color: var(--color-accent);">${prod.price} د.ل</span>
          `;
          summaryProductsList.appendChild(itemDiv);
        }
      });
    }
    
    subtotal = mainProductSubtotal + customProductsSubtotal;
    totalItemsCount = quantity + checkedBundleProducts.length;
    
    // Calculate custom bundle discount: Buy 2 get 15% off subtotal, Buy 3+ get 25% off subtotal
    if (totalItemsCount === 2) {
      discount = Math.round(subtotal * 0.15);
    } else if (totalItemsCount >= 3) {
      discount = Math.round(subtotal * 0.25);
    }
    
    // Upsell accepted
    if (upsellAccepted && currentUpsellProduct) {
      upsellPrice = currentUpsellProduct.price - 30;
    }
  }
  
  const finalTotal = (subtotal - discount) + upsellPrice + selectedCitiesShippingPrice;
  
  // Update UI values
  document.getElementById('qtyVal').textContent = quantity;
  
  const subtotalEl = document.getElementById('subtotalPrice');
  if (subtotalEl) {
    subtotalEl.textContent = `${subtotal} د.ل`;
  }
  
  const discountRow = document.getElementById('bundleDiscountRow');
  const discountEl = document.getElementById('bundleDiscountPrice');
  if (discountRow && discountEl) {
    if (discount > 0) {
      discountEl.textContent = `-${discount} د.ل`;
      discountRow.style.display = 'flex';
    } else {
      discountRow.style.display = 'none';
    }
  }
  
  const shippingEl = document.getElementById('shippingPriceText');
  if (shippingEl) {
    const citySelect = document.getElementById('city');
    if (citySelect && citySelect.value) {
      shippingEl.textContent = selectedCitiesShippingPrice === 0 ? 'شحن مجاني' : `${selectedCitiesShippingPrice} د.ل`;
    } else {
      shippingEl.textContent = 'لم تحدد بعد';
    }
  }
  
  const summaryQtyText = document.getElementById('summaryQtyText');
  if (summaryQtyText) {
    summaryQtyText.textContent = `الكمية: ${quantity}`;
  }
  
  document.getElementById('totalPrice').textContent = `${finalTotal} د.ل`;
}

// Order Submission Pipeline
function submitOrder() {
  const fullName = document.getElementById('fullName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const cityEl = document.getElementById('city');
  const regionEl = document.getElementById('region');
  const city = cityEl ? cityEl.value : '';
  const regionName = regionEl && regionEl.selectedIndex > 0 ? regionEl.options[regionEl.selectedIndex].textContent : '';
  const fullLocation = regionName && city && regionName !== city ? `${regionName} - ${city}` : (city || regionName || 'غير محدد');
  const sizeLabel = currentSelectedSize || 'غير محدد';
  
  let subtotal = 0;
  let discount = 0;
  let upsellPrice = 0;
  
  let orderName = '';
  let orderId = '';
  let customItemsNames = [];
  
  if (currentCheckoutBundle) {
    subtotal = quantity * currentCheckoutBundle.price;
    orderName = currentCheckoutBundle.name;
    orderId = currentCheckoutBundle.id;
  } else {
    const mainProductSubtotal = quantity * currentCheckoutProduct.price;
    let customProductsSubtotal = 0;
    checkedBundleProducts.forEach(prodId => {
      const prod = PRODUCTS[prodId];
      if (prod) {
        customProductsSubtotal += prod.price;
        customItemsNames.push(prod.name);
      }
    });
    subtotal = mainProductSubtotal + customProductsSubtotal;
    
    const totalItemsCount = quantity + checkedBundleProducts.length;
    if (totalItemsCount === 2) {
      discount = Math.round(subtotal * 0.15);
    } else if (totalItemsCount >= 3) {
      discount = Math.round(subtotal * 0.25);
    }
    
    if (upsellAccepted && currentUpsellProduct) {
      upsellPrice = currentUpsellProduct.price - 30;
    }
    
    orderName = currentCheckoutProduct.name;
    orderId = currentCheckoutProduct.id;
  }
  
  const finalTotal = (subtotal - discount) + upsellPrice + selectedCitiesShippingPrice;

  // Store receipt information in LocalStorage for Thank You Page
  const receipt = {
    productName: orderName,
    productId: orderId,
    size: sizeLabel,
    quantity: quantity,
    baseTotal: subtotal,
    discount: discount,
    upsellName: upsellAccepted ? currentUpsellProduct.name : null,
    upsellId: upsellAccepted ? currentUpsellProduct.id : null,
    upsellPrice: upsellPrice,
    shippingPrice: selectedCitiesShippingPrice,
    finalTotal: finalTotal,
    name: fullName,
    phone: phoneNumber,
    city: fullLocation,
    customBundleItems: customItemsNames
  };
  localStorage.setItem('lastOrderReceipt', JSON.stringify(receipt));

  // Save order to database (non-blocking)
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: fullName,
      address: fullLocation,
      delivery_method: 'vanex_cod',
      delivery_price: selectedCitiesShippingPrice,
      total: finalTotal,
      items: [{
        product: orderName,
        qty: quantity,
        size: sizeLabel,
        addons: customItemsNames
      }]
    })
  }).catch(err => console.warn('[Order API] Failed to save order:', err));

  // Initialize checkout pixel track
  trackInitiateCheckout(orderId, subtotal);

  // Setup double submission actions
  const btnSubmitWhatsapp = document.getElementById('btnSubmitWhatsapp');
  const btnSubmitEmail = document.getElementById('btnSubmitEmail');

  // WhatsApp Order Text Formatting
  let textMessage = `مرحباً، أريد الطلب التالي:\n` +
                      `المنتج: ${orderName}\n` +
                      `المقاس: ${sizeLabel}\n` +
                      `الكمية: ${quantity}\n`;
                      
  if (customItemsNames.length > 0) {
    textMessage += `المنتجات الإضافية في الباقة:\n` + customItemsNames.map(n => `- ${n}`).join('\n') + `\n`;
  }
  
  if (discount > 0) {
    textMessage += `خصم الباقة للتوفير: -${discount} د.ل\n`;
  }
  
  if (upsellAccepted) {
    textMessage += `+ المنتج الإضافي: ${currentUpsellProduct.name} (عرض التخفيض)\n`;
  }
  
  textMessage += `الاسم: ${fullName}\n` +
                 `الهاتف: ${phoneNumber}\n` +
                 `المنطقة والحي: ${fullLocation}\n` +
                 `تكلفة التوصيل: ${selectedCitiesShippingPrice === 0 ? 'شحن مجاني' : `${selectedCitiesShippingPrice} د.ل`}\n` +
                 `الإجمالي النهائي: ${finalTotal} د.ل (الدفع عند الاستلام)`;

  const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`;

  // Bind actions
  btnSubmitWhatsapp.style.display = 'flex';
  btnSubmitEmail.style.display = 'flex';

  btnSubmitWhatsapp.onclick = () => {
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      window.location.href = `thank-you.html?product=${orderId}&value=${finalTotal}`;
    }, 1000);
  };

  btnSubmitEmail.onclick = () => {
    if (typeof emailjs !== 'undefined' && CONFIG.EMAILJS_SERVICE_ID !== 'service_placeholder') {
      const templateParams = {
        from_name: fullName,
        phone_number: phoneNumber,
        city: city,
        product: orderName + (customItemsNames.length > 0 ? ` + الباقة: ${customItemsNames.join(', ')}` : ''),
        qty: quantity,
        upsell: upsellAccepted ? currentUpsellProduct.name : 'لا يوجد',
        total: `${finalTotal} LYD`
      };
      
      emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, templateParams, CONFIG.EMAILJS_PUBLIC_KEY)
        .then(() => {
          console.log('[EmailJS] Order email sent successfully!');
          window.location.href = `thank-you.html?product=${orderId}&value=${finalTotal}`;
        }, (error) => {
          console.error('[EmailJS] Failed to send email:', error);
          window.location.href = `thank-you.html?product=${orderId}&value=${finalTotal}`;
        });
    } else {
      console.log('[EmailJS Sandbox] Placeholder ID detected. Order logged to terminal simulator:', receipt);
      window.location.href = `thank-you.html?product=${orderId}&value=${finalTotal}`;
    }
  };

  // Open the action prompt dialog
  document.getElementById('actionSubmitDialog').showModal();
}

// --- Thank You Page Controller ---
function initThankYouPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product');
  const value = params.get('value') || 0;

  // Retrieve receipt from localStorage
  const receiptStr = localStorage.getItem('lastOrderReceipt');
  if (receiptStr) {
    const receipt = JSON.parse(receiptStr);
    
    // Fire Meta Pixel Lead Event
    trackLead(receipt.productId, receipt.baseTotal, receipt.upsellId, receipt.upsellPrice);
    
    // Fill receipt details on UI
    let displayProduct = receipt.productName;
    if (receipt.customBundleItems && receipt.customBundleItems.length > 0) {
      displayProduct += ` + (باقة تشمل: ${receipt.customBundleItems.join('، ')})`;
    }
    
    document.getElementById('receiptProduct').textContent = displayProduct;
    document.getElementById('receiptQty').textContent = receipt.quantity;
    document.getElementById('receiptCity').textContent = receipt.city;
    
    const upsellRow = document.getElementById('receiptUpsellRow');
    if (receipt.upsellName) {
      document.getElementById('receiptUpsell').textContent = receipt.upsellName;
      upsellRow.style.display = 'flex';
    } else {
      upsellRow.style.display = 'none';
    }
    
    document.getElementById('receiptTotal').textContent = `${receipt.finalTotal} د.ل`;
  } else if (productId) {
    // Fallback if localStorage is empty
    trackLead(productId, value);
    document.getElementById('receiptProduct').textContent = productId;
    document.getElementById('receiptQty').textContent = '1';
    document.getElementById('receiptCity').textContent = 'غير محدد';
    document.getElementById('receiptTotal').textContent = `${value} د.ل`;
    document.getElementById('receiptUpsellRow').style.display = 'none';
  }
}

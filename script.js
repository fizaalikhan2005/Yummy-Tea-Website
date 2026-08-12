//<!-- === JAVASCRIPT FOR MODAL, CART & CHECKOUT === -->

    document.addEventListener("DOMContentLoaded", () => {
        
        // ==========================================
        // 0. MOBILE HAMBURGER MENU
        // ==========================================
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.querySelector("#navbar nav ul");

        // Toggle menu open/close
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Close menu automatically when a link is clicked
        const navLinks = document.querySelectorAll("#navbar nav ul li a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (link.id !== "open-cart-btn") { // Don't close if they click the cart
                    navMenu.classList.remove("active");
                }
            });
        });


        // ==========================================
        // 1. SET UP VARIABLES
        // ==========================================
        
        // Product Modal Elements
        const modal = document.getElementById("product-modal");
        const closeBtn = document.querySelector(".close-btn");
        const modalImg = document.getElementById("modal-img");
        const modalTitle = document.getElementById("modal-title");
        const modalDesc = document.getElementById("modal-desc");
        const modalPrice = document.getElementById("modal-price");
        const qtyCount = document.getElementById("qty-count");
        
        // Product Modal Buttons
        const detailBtns = document.querySelectorAll(".detail-btn");
        const teaImages = document.querySelectorAll(".tea"); 
        const qtyPlus = document.getElementById("qty-plus");
        const qtyMinus = document.getElementById("qty-minus");
        const addToCartBtn = document.getElementById("add-to-cart-btn");

        // Cart Elements
        const cartSidebarOverlay = document.getElementById("cart-sidebar-overlay");
        const cartSidebar = document.querySelector(".cart-sidebar");
        const openCartBtns = document.querySelectorAll(".open-cart-btn");
        const closeCartBtn = document.querySelector(".close-cart-btn");
        const cartItemsContainer = document.getElementById("cart-items-container");
        const cartBadges = document.querySelectorAll(".cart-badge");
        const cartTotalPrice = document.getElementById("cart-total-price");

        // Checkout Elements
        const checkoutModal = document.getElementById("checkout-modal");
        const closeCheckoutBtn = document.querySelector(".close-checkout-btn");
        const checkoutBtn = document.querySelector(".checkout-btn"); // Button inside cart
        const checkoutTotalPrice = document.getElementById("checkout-total-price");
        const checkoutForm = document.getElementById("checkout-form");
        const orderTypeRadios = document.getElementsByName("orderType");
        const deliveryFields = document.getElementById("delivery-fields");
        const takeawayFields = document.getElementById("takeaway-fields");
        const cAddress = document.getElementById("c-address");
        const cBranch = document.getElementById("c-branch");

        // Math & Data Variables
        let currentQty = 1;
        let basePrice = 0;
        let currentProductName = "";
        let currentProductImg = "";
        
        // THE CART ARRAY (Stores all purchased items)
        let cart = [];

        // ==========================================
        // 2. PRODUCT MODAL LOGIC
        // ==========================================

        function updatePriceDisplay() {
            const total = (basePrice * currentQty).toFixed(2);
            modalPrice.textContent = "$" + total;
            qtyCount.textContent = currentQty;
        }

        // Open details by clicking the image
        teaImages.forEach(img => {
            img.addEventListener("click", function() {
                const parentCard = this.closest(".pro-card");
                const matchingBtn = parentCard.querySelector(".detail-btn");
                if (matchingBtn) matchingBtn.click();
            });
        });

        // Open details by clicking the button
        detailBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                currentProductName = this.getAttribute("data-name");
                currentProductImg = this.getAttribute("data-img");
                const desc = this.getAttribute("data-desc");
                basePrice = parseFloat(this.getAttribute("data-price"));
                
                currentQty = 1;

                modalTitle.textContent = currentProductName;
                modalImg.src = currentProductImg;
                modalDesc.textContent = desc;
                updatePriceDisplay(); 

                modal.style.display = "flex";
            });
        });

        qtyPlus.addEventListener("click", () => { currentQty++; updatePriceDisplay(); });
        qtyMinus.addEventListener("click", () => { if (currentQty > 1) { currentQty--; updatePriceDisplay(); } });

        closeBtn.addEventListener("click", () => { modal.style.display = "none"; });

        // ==========================================
        // 3. CART LOGIC
        // ==========================================

        // --- Quick "Buy" Button on Main Cards ---
        const buyBtns = document.querySelectorAll(".buy-btn");
        buyBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                const detailsBtn = this.previousElementSibling;
                const quickName = detailsBtn.getAttribute("data-name");
                const quickImg = detailsBtn.getAttribute("data-img");
                const quickPrice = parseFloat(detailsBtn.getAttribute("data-price"));
                
                const existingItem = cart.find(item => item.name === quickName);
                
                if (existingItem) {
                    existingItem.qty += 1;
                } else {
                    cart.push({ name: quickName, img: quickImg, price: quickPrice, qty: 1 });
                }

                updateCartUI(); 
                cartSidebarOverlay.style.display = "block";
                setTimeout(() => { cartSidebar.classList.add("open"); }, 10);
            });
        });

        // Add to Cart Button (Inside Modal)
        addToCartBtn.addEventListener("click", () => {
            const existingItem = cart.find(item => item.name === currentProductName);
            
            if (existingItem) {
                existingItem.qty += currentQty;
            } else {
                cart.push({ name: currentProductName, img: currentProductImg, price: basePrice, qty: currentQty });
            }

            updateCartUI(); 
            modal.style.display = "none"; 
            
            cartSidebarOverlay.style.display = "block";
            setTimeout(() => { cartSidebar.classList.add("open"); }, 10);
        });

        // Function to redraw the cart
        function updateCartUI() {
            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            cartBadges.forEach(badge => { badge.textContent = totalItems; });

            cartItemsContainer.innerHTML = "";
            let totalPrice = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
            } else {
                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.qty;
                    totalPrice += itemTotal;

                    const cartItemHTML = `
                        <div class="cart-item">
                            <img src="${item.img}" alt="${item.name}">
                            <div class="cart-item-details">
                                <h4>${item.name}</h4>
                                <p class="cart-item-price">$${itemTotal.toFixed(2)}</p>
                                <div class="cart-qty-controls">
                                    <button class="cart-minus-btn" data-index="${index}">-</button>
                                    <span class="cart-qty-count">${item.qty}</span>
                                    <button class="cart-plus-btn" data-index="${index}">+</button>
                                </div>
                            </div>
                            <span class="remove-item" data-index="${index}">&times;</span>
                        </div>
                    `;
                    cartItemsContainer.innerHTML += cartItemHTML;
                });
            }

            cartTotalPrice.textContent = "$" + totalPrice.toFixed(2);

            // In-Cart Plus Buttons
            document.querySelectorAll(".cart-plus-btn").forEach(btn => {
                btn.addEventListener("click", function() {
                    const itemIndex = this.getAttribute("data-index");
                    cart[itemIndex].qty += 1; 
                    updateCartUI(); 
                });
            });

            // In-Cart Minus Buttons
            document.querySelectorAll(".cart-minus-btn").forEach(btn => {
                btn.addEventListener("click", function() {
                    const itemIndex = this.getAttribute("data-index");
                    if (cart[itemIndex].qty > 1) {
                        cart[itemIndex].qty -= 1;
                    } else {
                        cart.splice(itemIndex, 1);
                    }
                    updateCartUI();
                });
            });

            // In-Cart Remove Buttons
            document.querySelectorAll(".remove-item").forEach(btn => {
                btn.addEventListener("click", function() {
                    const itemIndex = this.getAttribute("data-index");
                    cart.splice(itemIndex, 1);
                    updateCartUI(); 
                });
            });
        }

        // Open/Close Cart Sidebar
        openCartBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                cartSidebarOverlay.style.display = "block";
                setTimeout(() => { cartSidebar.classList.add("open"); }, 10);
            });
        });

        closeCartBtn.addEventListener("click", () => {
            cartSidebar.classList.remove("open");
            setTimeout(() => { cartSidebarOverlay.style.display = "none"; }, 400); 
        });


        // ==========================================
        // 4. CHECKOUT & THANK YOU LOGIC
        // ==========================================

        const thankyouModal = document.getElementById("thankyou-modal");
        const closeThankyouBtn = document.getElementById("close-thankyou-btn");

        checkoutBtn.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Your cart is empty! Add some yummy tea first.");
                return;
            }
            
            cartSidebar.classList.remove("open");
            cartSidebarOverlay.style.display = "none";
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            checkoutTotalPrice.textContent = "$" + total.toFixed(2);
            
            checkoutModal.style.display = "flex";
        });

        closeCheckoutBtn.addEventListener("click", () => {
            checkoutModal.style.display = "none";
        });

        // Toggle Delivery / Take Away
        orderTypeRadios.forEach(radio => {
            radio.addEventListener("change", function() {
                if (this.value === "delivery") {
                    deliveryFields.style.display = "block";
                    cAddress.required = true;
                    takeawayFields.style.display = "none";
                    cBranch.required = false;
                } else {
                    deliveryFields.style.display = "none";
                    cAddress.required = false;
                    takeawayFields.style.display = "block";
                    cBranch.required = true;
                }
            });
        });

        // Submit Checkout Form
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            
            // 1. Hide the checkout modal
            checkoutModal.style.display = "none";
            
            // 2. Show the beautiful Thank You modal instead of an alert!
            thankyouModal.style.display = "flex";
            
            // 3. Clear the cart
            cart = [];
            updateCartUI();
            
            // 4. Reset the form
            checkoutForm.reset();
            deliveryFields.style.display = "block";
            takeawayFields.style.display = "none";
            cAddress.required = true;
            cBranch.required = false;
        });

        // Close Thank You Modal
        closeThankyouBtn.addEventListener("click", () => {
            thankyouModal.style.display = "none";
        });

        // ==========================================
        // 5. GLOBAL CLICK-OUTSIDE-TO-CLOSE
        // ==========================================
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
            if (event.target === checkoutModal) {
                checkoutModal.style.display = "none";
            }
            if (event.target === thankyouModal) {
                thankyouModal.style.display = "none";
            }
            if (event.target === cartSidebarOverlay) {
                cartSidebar.classList.remove("open");
                setTimeout(() => { cartSidebarOverlay.style.display = "none"; }, 400);
            }
        });

        // ==========================================
        // 6. SCROLL TO TOP BUTTON
        // ==========================================
        const scrollTopBtn = document.getElementById("scroll-top-btn");

        // Show the button when scrolling down 300px from the top
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });

        // Smooth scroll to top when clicked
        scrollTopBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Stops default instant jump
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

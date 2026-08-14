/**
 * ==========================================================================
 * YUMMY TEA - MAIN JAVASCRIPT FILE
 * Handles the mobile menu, product details modal, shopping cart, 
 * checkout process, and UI interactions.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       0. MOBILE HAMBURGER MENU
       Handles the opening and closing of the navigation menu on mobile screens.
       ========================================================================== */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("#navbar nav ul");

    // Toggle menu open/close when hamburger icon is clicked
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close menu automatically when any navigation link is clicked
    const navLinks = document.querySelectorAll("#navbar nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Don't close the menu if they are just clicking the mobile cart button
            if (link.id !== "open-cart-btn") { 
                navMenu.classList.remove("active");
            }
        });
    });


    /* ==========================================================================
       1. GLOBAL VARIABLES & DOM ELEMENTS
       Selecting all the necessary HTML elements we need to interact with.
       ========================================================================== */
    
    // --- Product Modal Elements ---
    const modal = document.getElementById("product-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalPrice = document.getElementById("modal-price");
    const qtyCount = document.getElementById("qty-count");
    
    // --- Product Buttons ---
    const detailBtns = document.querySelectorAll(".detail-btn");
    const teaImages = document.querySelectorAll(".tea"); 
    const qtyPlus = document.getElementById("qty-plus");
    const qtyMinus = document.getElementById("qty-minus");
    const addToCartBtn = document.getElementById("add-to-cart-btn");

    // --- Cart Sidebar Elements ---
    const cartSidebarOverlay = document.getElementById("cart-sidebar-overlay");
    const cartSidebar = document.querySelector(".cart-sidebar");
    const openCartBtns = document.querySelectorAll(".open-cart-btn");
    const closeCartBtn = document.querySelector(".close-cart-btn");
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cartBadges = document.querySelectorAll(".cart-badge");
    const cartTotalPrice = document.getElementById("cart-total-price");

    // --- Checkout & Thank You Elements ---
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

    // --- State Variables (Data Tracking) ---
    let currentQty = 1;
    let basePrice = 0;
    let currentProductName = "";
    let currentProductImg = "";
    
    // THE CART ARRAY (Stores all purchased items temporarily in the browser)
    let cart = [];


    /* ==========================================================================
       2. PRODUCT MODAL LOGIC
       Handles opening the popup to see tea details, adjusting quantity, and price.
       ========================================================================== */

    // Calculates and updates the total price based on the selected quantity
    function updatePriceDisplay() {
        const total = (basePrice * currentQty).toFixed(2);
        modalPrice.textContent = "$" + total;
        qtyCount.textContent = currentQty;
    }

    // Allows users to open the details modal by clicking the product image directly
    teaImages.forEach(img => {
        img.addEventListener("click", function() {
            const parentCard = this.closest(".pro-card");
            const matchingBtn = parentCard.querySelector(".detail-btn");
            if (matchingBtn) matchingBtn.click();
        });
    });

    // Opens the details modal and populates it with the correct product data
    detailBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            // Extract data from the button's HTML attributes
            currentProductName = this.getAttribute("data-name");
            currentProductImg = this.getAttribute("data-img");
            basePrice = parseFloat(this.getAttribute("data-price"));
            const desc = this.getAttribute("data-desc");
            
            // Reset quantity to 1 every time a new modal opens
            currentQty = 1;

            // Inject data into the modal
            modalTitle.textContent = currentProductName;
            modalImg.src = currentProductImg;
            modalDesc.textContent = desc;
            updatePriceDisplay(); 

            // Show the modal
            modal.style.display = "flex";
        });
    });

    // Modal Quantity Controls
    qtyPlus.addEventListener("click", () => { 
        currentQty++; 
        updatePriceDisplay(); 
    });
    
    qtyMinus.addEventListener("click", () => { 
        if (currentQty > 1) { 
            currentQty--; 
            updatePriceDisplay(); 
        } 
    });

    // Close Product Modal
    closeBtn.addEventListener("click", () => { 
        modal.style.display = "none"; 
    });


    /* ==========================================================================
       3. SHOPPING CART LOGIC
       Handles adding items, updating totals, and sliding the cart open/closed.
       ========================================================================== */

    // --- Quick "Buy" Button on Main Menu Cards ---
    const buyBtns = document.querySelectorAll(".buy-btn");
    buyBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            // Grab product info from the adjacent 'Details' button
            const detailsBtn = this.previousElementSibling;
            const quickName = detailsBtn.getAttribute("data-name");
            const quickImg = detailsBtn.getAttribute("data-img");
            const quickPrice = parseFloat(detailsBtn.getAttribute("data-price"));
            
            // Check if item is already in the cart
            const existingItem = cart.find(item => item.name === quickName);
            
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ name: quickName, img: quickImg, price: quickPrice, qty: 1 });
            }

            // Update UI and slide open the cart
            updateCartUI(); 
            cartSidebarOverlay.style.display = "block";
            setTimeout(() => { cartSidebar.classList.add("open"); }, 10);
        });
    });

    // --- Add to Cart Button (Inside the Product Modal) ---
    addToCartBtn.addEventListener("click", () => {
        const existingItem = cart.find(item => item.name === currentProductName);
        
        if (existingItem) {
            existingItem.qty += currentQty;
        } else {
            cart.push({ name: currentProductName, img: currentProductImg, price: basePrice, qty: currentQty });
        }

        updateCartUI(); 
        modal.style.display = "none"; 
        
        // Open the sidebar to show the user their updated cart
        cartSidebarOverlay.style.display = "block";
        setTimeout(() => { cartSidebar.classList.add("open"); }, 10);
    });

    // --- Redraws the Cart HTML dynamically based on the 'cart' array ---
    function updateCartUI() {
        // Update the red notification badges on the cart icons
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartBadges.forEach(badge => { badge.textContent = totalItems; });

        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        // Display empty message if cart has no items
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        } else {
            // Loop through array and build HTML for each item
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

        // Update the bottom total price
        cartTotalPrice.textContent = "$" + totalPrice.toFixed(2);

        // Re-attach event listeners to the newly created cart buttons
        attachCartButtonListeners();
    }

    // Helper function to handle button clicks inside the dynamic cart
    function attachCartButtonListeners() {
        // Increase item quantity inside cart
        document.querySelectorAll(".cart-plus-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const itemIndex = this.getAttribute("data-index");
                cart[itemIndex].qty += 1; 
                updateCartUI(); 
            });
        });

        // Decrease item quantity inside cart
        document.querySelectorAll(".cart-minus-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                const itemIndex = this.getAttribute("data-index");
                if (cart[itemIndex].qty > 1) {
                    cart[itemIndex].qty -= 1;
                } else {
                    cart.splice(itemIndex, 1); // Remove if qty drops below 1
                }
                updateCartUI();
            });
        });

        // Delete completely from cart
        document.querySelectorAll(".remove-item").forEach(btn => {
            btn.addEventListener("click", function() {
                const itemIndex = this.getAttribute("data-index");
                cart.splice(itemIndex, 1);
                updateCartUI(); 
            });
        });
    }

    // --- Open/Close Cart Sidebar Animations ---
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


    /* ==========================================================================
       4. CHECKOUT & THANK YOU LOGIC
       Handles the form submission, delivery toggles, and success screen.
       ========================================================================== */

    const thankyouModal = document.getElementById("thankyou-modal");
    const closeThankyouBtn = document.getElementById("close-thankyou-btn");

    // Open the checkout form from the cart sidebar
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty! Add some yummy tea first.");
            return;
        }
        
        // Hide cart, show checkout
        cartSidebar.classList.remove("open");
        cartSidebarOverlay.style.display = "none";
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        checkoutTotalPrice.textContent = "$" + total.toFixed(2);
        
        checkoutModal.style.display = "flex";
    });

    closeCheckoutBtn.addEventListener("click", () => {
        checkoutModal.style.display = "none";
    });

    // Toggle required fields between Delivery and Take Away
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

    // Handle Form Submission (Placing the order)
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        
        // 1. Hide the checkout modal
        checkoutModal.style.display = "none";
        
        // 2. Show the beautiful Thank You modal!
        thankyouModal.style.display = "flex";
        
        // 3. Clear the cart completely
        cart = [];
        updateCartUI();
        
        // 4. Reset the form to its default state for the next order
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


    /* ==========================================================================
       5. GLOBAL CLICK-OUTSIDE-TO-CLOSE
       Allows users to close any popup by clicking on the dark background overlay.
       ========================================================================== */
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


    /* ==========================================================================
       6. SCROLL TO TOP BUTTON
       Handles showing/hiding the button and smoothly scrolling back to the hero.
       ========================================================================== */
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

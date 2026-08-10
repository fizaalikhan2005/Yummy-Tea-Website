document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById("product-modal");
        const closeBtn = document.querySelector(".close-btn");
        
        // Modal elements
        const modalImg = document.getElementById("modal-img");
        const modalTitle = document.getElementById("modal-title");
        const modalDesc = document.getElementById("modal-desc");
        const modalPrice = document.getElementById("modal-price");
        const qtyCount = document.getElementById("qty-count");
        
        // Buttons and Images
        const detailBtns = document.querySelectorAll(".detail-btn");
        const qtyPlus = document.getElementById("qty-plus");
        const qtyMinus = document.getElementById("qty-minus");
        const teaImages = document.querySelectorAll(".tea"); /* NEW: Grab all tea images */

        // Variables to keep track of math
        let currentQty = 1;
        let basePrice = 0;

        // Function to update the price text on the screen
        function updatePriceDisplay() {
            const total = (basePrice * currentQty).toFixed(2);
            modalPrice.textContent = "$" + total;
            qtyCount.textContent = currentQty;
        }

        // --- NEW: Make Tea Images Clickable ---
        teaImages.forEach(img => {
            img.addEventListener("click", function() {
                // Find the main card wrapper that holds this specific image
                const parentCard = this.closest(".pro-card");
                // Find the 'Details' button inside this specific card
                const matchingBtn = parentCard.querySelector(".detail-btn");
                // Trigger a click on that button behind the scenes!
                if (matchingBtn) {
                    matchingBtn.click();
                }
            });
        });
        // --------------------------------------

        // 1. When a Details button is clicked
        detailBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                // Get the data
                const name = this.getAttribute("data-name");
                const img = this.getAttribute("data-img");
                const desc = this.getAttribute("data-desc");
                basePrice = parseFloat(this.getAttribute("data-price"));
                
                // Reset quantity to 1 for the new product
                currentQty = 1;

                // Fill the modal with data
                modalTitle.textContent = name;
                modalImg.src = img;
                modalDesc.textContent = desc;
                updatePriceDisplay(); // Calculates and shows initial price

                // Show the modal
                modal.style.display = "flex";
            });
        });

        // 2. Quantity Plus Button
        qtyPlus.addEventListener("click", () => {
            currentQty++;
            updatePriceDisplay();
        });

        // 3. Quantity Minus Button (Prevents going below 1)
        qtyMinus.addEventListener("click", () => {
            if (currentQty > 1) {
                currentQty--;
                updatePriceDisplay();
            }
        });

        // 4. When the 'X' is clicked
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // 5. Click outside the box to close
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
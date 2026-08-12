@font-face {
  font-family: 'Bouncy Black';
  src: url('fonts/Bouncy-Black-PERSONAL_USE_ONLY.eot') format('opentype'),
       url('fonts/Bouncy-Black-PERSONAL_USE_ONLY.woff2') format('woff2'),
       url('fonts/Bouncy-Black-PERSONAL_USE_ONLY.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
    font-family: 'Frogie';
    src: url(fonts/Frogie-Regular.woff);
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    scroll-behavior: smooth;
    font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge, and Firefox */
body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    margin: 0;
    padding: 0;
}

.logo{
    height: 50%;
    width: 10%;
    margin-top: 30px;
}

/*NavBar*/
#navbar{
    background-color: transparent;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;  
}

#navbar ul{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    border-radius: 80px;
    border: 3px solid rgb(236, 228, 232);
    padding: 10px 25px; /* Adds inner spacing inside the pill border */
    margin: 0;
    list-style: none;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

#navbar li, #navbar li a{
    text-decoration: none;
    list-style: none;
    color: white;
}

#navbar li a {
    transition: 0.3s ease;
    display: inline-block;
}

#navbar li a:hover {
    color: #E0E15F; 
    cursor: pointer;
    transform: translate(-2px, -1px);
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

/*Hero*/
/* --- HERO SECTION --- */

#hero {
    background-image: url(img/cover.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    z-index: 1;
    overflow: hidden; 
}

/* 1. The Boundary Box */
.hero-title-wrapper {
    position: relative; 
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px; 
    height: 100vh;
    margin: 0 auto; 
}

#hero h1 {
    font-family: 'Bouncy Black', cursive, sans-serif;
    font-weight: 300;
    letter-spacing: 8px;
    margin: 0;
    font-size: clamp(80px, 12vw, 150px); 
}

#yummy span, #tea span {
    color: #E0E15F;
}

#yummy {
    position: absolute;
    z-index: 1;
    top: 32%;
    left: 8%; 
    color: rgb(255, 230, 230);
}

#tea {
    position: absolute;
    z-index: 3; 
    bottom: 15%; 
    right: 10%; 
    color: rgb(255, 230, 230);
}

#boba {
    position: absolute;
    z-index: 2;
    right: 23%;  
    bottom: 10%;  
    transform: rotate(25deg); 
    width: auto;
    height: auto;
    max-width: 45%; 
    max-height: 70vh;
}

.hero-left {
    position: absolute;
    left: 13%;         
    top: 50%;        
    z-index: 4;        
    max-width: 420px;  
    display: flex;
    flex-direction: column;
    align-items: flex-start;       
}

.hero-left h2{
    font-size: 30px;
    color: rgb(255, 230, 230);
    margin-bottom: 20px;
}

.hero-left span{
    font-family:'Frogie','Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
    color: #E0E15F;
    margin-bottom: 20px;
    font-style: italic;
    font-weight: bolder;
}

.hero-left p{
    margin-top: 0;
    color: rgb(255, 230, 230);
    font-weight: 50;
}

.hero-left button {
    margin-top: 0;
    background-color: #E0E15F;
    padding: 10px 60px;
    border: none;
    border-radius: 50px;
    margin-top: 0;
    font-family:'Frogie','Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
    color: rgb(252, 252, 252);
    text-decoration: none;
    font-size: 25px;
    transition: 0.3s ease;
}

.hero-left button:hover {
    background-color: #ffffff;
    color: #E560B5;
    cursor: pointer;
    transform: translate(-2px, -2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

/*About Us*/
#about-us{
    color: #EF51B8;
    padding: 30px 50px;
    width: 100%;
    box-sizing: border-box;
}

#text{
    font-family: 'Bouncy Black', cursive, sans-serif;
    letter-spacing: 2px;
    font-size: 40px;
}

#text span{
    color:#E0E15F;
}

#about-us button{
    border-radius: 30px;
    background-color: transparent;
    padding: 10px 30px;
    color: #EF51B8;
    border-color: #EF51B8;
    font-weight: 600;
}

#intro h2{
    word-spacing: 5px;
    letter-spacing: 3px;
}

#intro{
    padding-bottom: 40px;
    padding-right: 5%;
}

#about-us h3{
        margin-top: 20px; 
        font-size: 25px;
}

#cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;            
    width: 100%;
    gap: 30px;       
}

.card {
    flex: 1;
    min-width: 0;                 
    max-width: 250px;        
    min-height: 180px;    
    padding: 20px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    transition: 0.2s ease;

}

.card:hover{
    transform: translate(-2px, -2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.card:nth-child(odd), .card:nth-child(odd) p {
    color: #1b1a1a; 
    background-color: #E0E15F;
}

.card:nth-child(even), .card:nth-child(even) p {
    color: #fefefb; 
    background-color: #EF51B8;
}

.card p {
    text-align: center;
    color: #E560B5;        
    font-size: 16px;
    line-height: 1.4;
    margin: 20px;
}

.card img{
    width: 60px;
    height: 50px;
    position: absolute;
    z-index: 10;
    top: -10px;
    left: -20px;
}

#cards .card:nth-child(even) img {
    top: auto;      
    left: auto;     
    bottom: -5px;  
    right: -20px;   
}

#outro{
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    padding-left: 60%;
}

#outro p{
    text-align: right;
}

/*Why US*/
#why-us{
    background-color: #EF51B8;
    padding-bottom: 30px;
}

#why-us h2{
    text-align: center;
    padding: 20px;
    color: #fefefb;
    font-size: 30px;
    font-family: Frogie;
}

#why-us h2 span{
    background-color: #E0E15F;
    color: #EF51B8;
    padding: 10px;
    display: inline-block;
}

#grid-container{
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding: 10px 50px;
    gap: 30px;
    align-items: center;
}

#left-side, #right-side {
    display: flex;
    flex-direction: column;
    gap: 30px; /* Space between vertically stacked cards */
    align-items: center;
}

#grid-container .card {
    width: 250px;
    max-width: 250px;
    min-height: 180px;
    height: 220px;          
    padding: 15px 20px;
}

#grid-container .card h3 {
    font-size: 18px;          
    margin: 25px 0 8px 0;    
    text-align: center;
    line-height: 1.2;
}


#left-side .card:nth-child(2), #right-side .card:nth-child(2){
    background-color: transparent;
    border: 1px solid #fefefb;
}

#left-side .card:nth-child(2) h3, #right-side .card:nth-child(2) h3{
    color: #E0E15F;
}

#grid-container .card span{
    width: 60px;
    height: 50px;
    position: absolute;
    z-index: 20;
    top: 6px;
    left: 6px;
    font-family: 'Frogie';
}

#center img{
    width: auto;
    max-width: 90%;
    max-height: 70vh;
    height: 500px;
    z-index: 2;
    transform: rotate(25deg); 
}

#bobas{
    width: auto;
    max-width: 90%;
    max-height: 70vh;
    height: 500px;
    z-index: 2;
}

/*menu*/
/* ==========================================================================
   MAIN MENU SECTION
   ========================================================================== */

#menu {
    background-color: #E0E15F;
    margin-top: 0;
    padding-bottom: 50px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    padding: 20px 0; 
    box-sizing: border-box;
}

#menu h2 {
    margin-top: -60px;   
    text-align: center;
    color: #EF51B8;
    font-family: 'Frogie', sans-serif;
    font-size: 40px;
    margin-bottom: 100px; 
}

#menu h2 span {
    color: #E0E15F;
    background-color: #EF51B8;
    padding: 10px;
    display: inline-block; 
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; 
    box-sizing: border-box;
}

.pro-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.img-stack {
    position: relative;
    width: 100%;
    height: 280px; 
}

#menu .blob {
    position: absolute;
    width: 80%;
    max-width: 220px; 
    height: auto;
    z-index: 1;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}

#menu .tea {
    position: absolute;
    width: 100%;
    max-width: 260px; 
    height: auto;
    z-index: 2;
    bottom: 0px; 
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s ease-in;
    cursor: pointer;
}

#menu .tea:hover{
     width: 120%;
    max-width: 300px;
}

.pro-card h4 {
    color: #EF51B8;
    font-size: 15px;
    margin: 20px 0 15px 0;
    letter-spacing: 1px;
}

.pro-btn {
    display: flex;
    gap: 10px;
}

.pro-btn button {
    padding: 6px 20px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
}

.btn-outline {
    background-color: transparent;
    border: 1px solid #EF51B8;
    color: #EF51B8;
}

.btn-outline:hover {
    background-color: #EF51B8;
    color: white;
    transform: scale(1.06);
}

.btn-solid {
    background-color: #EF51B8;
    border: 1px solid #EF51B8;
    color: #fefefb;
}

.btn-solid:hover {
    background-color: #fefefb;
    color: #EF51B8;
    transform: scale(1.06);
}

/*Pre-process*/
#Pre-process h2 {
    margin-top: 60px;   
    text-align: center;
    color: #EF51B8;
    font-family: 'Frogie', sans-serif;
    font-size: 40px;
    margin-bottom: 30px; 
}

#Pre-process h2 span {
    color: #EF51B8;
    background-color: #E0E15F;
    padding: 10px;
    display: inline-block; 
}

#pink-container .banner-img {
    width: 100%;        
    height: auto;
    border-radius: 30px;
    display: block;
    border: 5px solid #E0E15F;
}

#pink-container {
    position: relative;
    width: 80%;          
    max-width: 1100px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
}

.step-item {
    position: absolute;
    text-align: center;
    width: 150px;
    transform: translateX(-50%); 
    color: #fefefb;              
    z-index: 2;
}

.step-item h3 {
    margin: 0 0 4px 0;
    font-size: 40px;
    font-weight: bold;
    font-family: Frogie;
    color: transparent;
    -webkit-text-stroke: 1px #E0E15F;
}

.step-item p {
    margin: 0;
    font-size: 15px;
    line-height: 1.2;
    color: #fefefb;
}

.step-1 { top: 60%; left: 11%; }
.step-2 { top: 30%; left: 31%; }
.step-3 { top: 60%; left: 52%; }
.step-4 { top: 23%; left: 71%; }
.step-5 { top: 65%; left: 90%; }

.border-flower {
    position: absolute;
    width: 80px;     
    height: 80px;
    z-index: 10;      
}

.flower-left {
    top: -20px;        
    left: -20px;       
}

.flower-right {
    bottom: -15px;    
    right: -15px;      
}

/*review*/
#review{
    background-color: #EF51B8;
    width: 100%;
}

.review-cards{
    display: flex;
    justify-content: space-between;
    align-items: stretch;            
    gap: 80px; 
    padding: 80px 50px;
    margin: 0 auto; 
    width: 90%;               
    max-width: 1100px;         
    gap: 25px;
}

.re-card {
    flex: 1;
    min-width: 0;                 
    max-width: 300px;        
    min-height: 200px;    
    padding: 20px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    background-color: #E0E15F;
    transition: 0.3s ease;
}

.re-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    transform: scale(1.06);
}

#review h2{
    font-family: 'Frogie', sans-serif;
    font-size: 50px;
    color: #fefefb;
    padding-bottom: 0px;
    text-align: center;
    padding-top: 60px;
}

#review h2 span{
    background-color: #E0E15F;
    color: #EF51B8;
    display: inline-block;
    padding: 10px;
}

.re-card img{
    width: 60px;
    height: 50px;
    position: absolute;
    z-index: 10;
    top: -10px;
    left: -20px;
}

#review .re-card:nth-child(even) img {
    top: auto;      
    left: auto;     
    bottom: -5px;  
    right: -20px;   
}

/*Location*/
#location h2{
    font-family: 'Frogie', sans-serif;
    font-size: 50px;
    color: #EF51B8;
    padding-bottom: 0px;
    text-align: center;
    padding-top: 30px;
}

#location h2 span{
    background-color: #EF51B8;
    color: #E0E15F;
    display: inline-block;
    padding: 10px;
}

#loc-container h3{
    color:#E0E15F;
    font-size: 30px;
}

#loc-container{
    display: flex;
    flex-direction: row;
    padding: 0 100px 50px 100px;
    align-content: center;
    align-items: stretch;
    color: #fefefb;
}

#loc-container div{
    background-color: #EF51B8;
    border-radius: 20px 0 0 20px;
    border: 3px solid #E0E15F;
    border-right: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 40px;
}

#loc-container p b{
    color:#E0E15F;
}


#loc-container li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 30px;
}

#loc-container iframe{
    border-radius: 20px;
    border: 2px solid #E0E15F;
    width: 100%;
    max-width: 500px; 
    height: 100%; 
    min-height: 450px;
    
    /* Rounded corners on the right side only */
    border-radius: 0 20px 20px 0;
    border: 3px solid #E0E15F;
    border-left: none;
}

/* Footer Container */
#footer {
    background-color: #E0E15F; 
    padding: 40px 100px 20px 100px;
    font-family: sans-serif;
}

#footer .upper-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 30px;
}

#footer .footer-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #333333;
}

#footer .footer-info .logo {
    width: 200px;  
    margin-top: -30px;
    margin-left: -50px;
}

#footer .footer-info p {
    margin: 0;
    font-size: 14px;
}

#footer .footer-info .social-handle {
    margin-top: 15px;
    font-weight: bold;
}

#footer .footer-nav-promo {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
}

#footer ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding-bottom: 30px;
    gap: 25px;
}

#footer ul a {
    text-decoration: none;
    color: #1b1a1a;
    font-weight: 500;
    font-size: 15px;
    transition: color 0.2s;
}

#footer ul a:hover {
    color: #EF51B8;
}

#footer .promo-card {
    background-color: #EF51B8;
    color: #FFFFFF;
    padding: 25px 35px;
    border-radius: 20px;
    text-align: start;
    max-width: 450px;
    width: 100%;
}

#footer .promo-card h3 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
}

#footer .promo-card p {
    margin: 0 0 15px 0;
    font-size: 13px;
    opacity: 0.9;
}

#footer .promo-card button {
    background-color: #E0E15F;
    color: #333333;
    border: none;
    padding: 10px 24px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
}

#footer .promo-card button:hover {
    background-color: #ffffff;
    transform: scale(1.03);
}

/* Bottom Bar: Copyright */
#footer .lower-box {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 15px;
    text-align: center;
}

#footer .lower-box p {
    margin: 0;
    font-size: 12px;
    color: #555555;
}

/* ==========================================================================
   POPUP MODAL SECTION
   ========================================================================== */

/* The dark background overlay */
.modal-overlay {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000; /* Stays on top of everything */
    justify-content: center;
    align-items: center;
}

/* The Popup Box */
.modal-content {
    background-color: #fefefb;
    border-radius: 30px;
    width: 80%;
    max-width: 800px;
    height: 500px;
    display: flex;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    overflow: hidden;
    border: 5px solid #EF51B8;
}

/* The 'X' Close Button */
.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 35px;
    color: #EF51B8;
    cursor: pointer;
    font-weight: bold;
    z-index: 10;
    transition: 0.3s;
}

.close-btn:hover {
    color: #E0E15F;
    transform: scale(1.1);
}

/* Left side container */
.modal-left {
    background-color: #E0E15F;
    width: 80%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; 
    padding: 20px 0;
}

#modal-img {
    position: relative;
    z-index: 2;
    width: auto;         
    max-width: 90%;
    height: 100%;        
    max-height: 800px;   
    object-fit: contain; 
}

/* Right side with Text */
.modal-right {
    width: 60%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.modal-right h3 {
    color: #EF51B8;
    font-family: 'Frogie', sans-serif;
    font-size: 30px;
    margin: 0 0 15px 0;
}

.modal-right p {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 25px;
}

.price-quantity-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 10px;
    border-top: 1px solid rgba(0,0,0,0.1); /* Adds a subtle divider line */
}

#modal-price {
    font-size: 26px;
    color: #EF51B8; 
    margin: 0;
    font-weight: bold;
}

.quantity-selector {
    display: flex;
    align-items: center;
    border: 2px solid #E0E15F; 
    border-radius: 30px;
    overflow: hidden;
    background-color: #fefefb;
}

.quantity-selector button {
    background-color: transparent;
    border: none;
    color: #EF51B8;
    font-size: 22px;
    width: 40px;
    height: 35px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.quantity-selector button:hover {
    background-color: #E0E15F; /* Highlights yellow on hover */
    color: #fefefb;
}

#qty-count {
    padding: 0 15px;
    font-size: 18px;
    font-weight: bold;
    color: #1b1a1a;
}

#add-to-cart-btn{
    padding: 6px 20px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
}

/* ==========================================================================
   CART SIDEBAR & NAV ICON SECTION
   ========================================================================== */

/* --- 1. Cart Nav Icon & Floating Badge (FontAwesome) --- */
#open-cart-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 20px; /* Adjusts the size of the FontAwesome icon */
    color: white;
    transition: 0.3s ease;
}

#open-cart-btn:hover {
    color: #E0E15F; 
    transform: translate(-2px, -1px); /* Matches the bounce of your other links */
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

#cart-badge {
    position: absolute;
    top: -10px;
    right: -12px;
    background-color: #EF51B8; /* Yummy Tea Pink */
    color: #fefefb;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 11px;
    font-weight: bold;
    font-family: 'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
    border: 2px solid transparent; 
    min-width: 10px;
    text-align: center;
    pointer-events: none; /* Stops the badge from interfering with clicks */
}

/* --- 2. The Sidebar Panel --- */
.cart-sidebar {
    position: fixed;
    top: 0;
    right: -100%; /* Hidden off-screen initially */
    width: 400px;
    max-width: 100%;
    height: 100vh;
    background-color: #fefefb;
    box-shadow: -5px 0 15px rgba(0,0,0,0.2);
    transition: right 0.4s ease; /* Smooth slide in */
    z-index: 1001;
    display: flex;
    flex-direction: column;
}

/* When the cart is open, JS adds this class */
.cart-sidebar.open {
    right: 0;
}

.cart-header {
    background-color: #EF51B8;
    color: #fefefb;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-header h2 {
    margin: 0;
    font-family: 'Frogie', sans-serif;
    font-size: 30px;
}

.close-cart-btn {
    font-size: 35px;
    cursor: pointer;
    transition: 0.2s;
}

.close-cart-btn:hover {
    color: #E0E15F;
}

/* --- 3. Cart Items --- */
#cart-items-container {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.empty-cart-msg {
    text-align: center;
    color: #888;
    margin-top: 50px;
}

.cart-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.cart-item img {
    width: 60px;
    background-color: #E0E15F;
    border-radius: 15px;
    padding: 5px;
    margin-right: 15px;
}

.cart-item-details h4 {
    color: #EF51B8;
    margin: 0 0 5px 0;
    font-size: 16px;
}

.cart-item-details p {
    margin: 0;
    color: #333;
    font-weight: bold;
}

.remove-item {
    margin-left: auto;
    color: #ff4d4d;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
}

/* --- 4. Cart Footer (Checkout) --- */
.cart-footer {
    padding: 20px;
    background-color: #f9f9f9;
    border-top: 2px solid #E0E15F;
}

.cart-total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    color: #EF51B8;
}

.checkout-btn {
    width: 100%;
    font-size: 20px;
    padding: 12px;
}

/* --- In-Cart Quantity Selector --- */
.cart-qty-controls {
    display: flex;
    align-items: center;
    border: 1px solid #E0E15F;
    border-radius: 20px;
    background-color: #fefefb;
    width: fit-content;
    margin-top: 5px;
    overflow: hidden;
}

.cart-qty-controls button {
    background-color: transparent;
    border: none;
    color: #EF51B8;
    font-size: 16px;
    font-weight: bold;
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.cart-qty-controls button:hover {
    background-color: #E0E15F;
    color: #fefefb;
}

.cart-qty-count {
    font-size: 14px;
    font-weight: bold;
    color: #1b1a1a;
    padding: 0 10px;
}

.cart-item-price {
    margin: 5px 0 0 0 !important;
    color: #EF51B8 !important;
}

/* ==========================================================================
   CHECKOUT MODAL SECTION
   ========================================================================== */

.checkout-content {
    background-color: #fefefb;
    border-radius: 30px;
    width: 90%;
    max-width: 500px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border: 5px solid #EF51B8;
    display: flex;
    flex-direction: column;
}

.close-checkout-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 35px;
    color: #EF51B8;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.close-checkout-btn:hover {
    color: #E0E15F;
}

.checkout-title {
    color: #EF51B8;
    font-family: 'Frogie', sans-serif;
    font-size: 35px;
    margin-top: 0;
    text-align: center;
}

.order-type-toggle {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #1b1a1a;
    font-size: 18px;
}

.order-type-toggle input {
    margin-right: 8px;
    accent-color: #EF51B8; /* Makes the radio buttons pink */
    transform: scale(1.2);
}

/* Form Inputs */
#checkout-form input[type="text"],
#checkout-form input[type="tel"],
#checkout-form input[type="email"],
#checkout-form textarea,
#checkout-form select {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    border: 2px solid #E0E15F;
    border-radius: 15px;
    background-color: #fefefb;
    font-family: inherit;
    font-size: 15px;
    box-sizing: border-box;
    transition: 0.3s;
}

#checkout-form input:focus,
#checkout-form textarea:focus,
#checkout-form select:focus {
    outline: none;
    border-color: #EF51B8;
}

#checkout-form textarea {
    resize: vertical;
    min-height: 80px;
}

.payment-method {
    background-color: #f9f9f9;
    padding: 12px;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 20px;
    color: #EF51B8;
    border: 1px solid #eee;
}

.checkout-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #E0E15F;
    padding-top: 15px;
}

.checkout-footer h3 {
    margin: 0;
    color: #1b1a1a;
}

#place-order-btn{
    padding: 6px 20px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
}

/* ==========================================================================
   THANK YOU MODAL SECTION
   ========================================================================== */

.thankyou-content {
    background-color: #fefefb;
    border-radius: 30px;
    width: 90%;
    max-width: 400px;
    padding: 40px;
    text-align: center;
    position: relative;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border: 5px solid #E0E15F; /* Yellow border to contrast the pink checkout */
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Floating animation for the boba cup */
.thankyou-img {
    width: 120px;
    margin-bottom: 20px;
    animation: floatBounce 2.5s infinite ease-in-out;
}

@keyframes floatBounce {
    0%, 100% { transform: translateY(0) rotate(15deg); }
    50% { transform: translateY(-15px) rotate(15deg); }
}

.thankyou-content h2 {
    color: #EF51B8;
    font-family: 'Frogie', sans-serif;
    font-size: 35px;
    margin: 0 0 10px 0;
}

.thankyou-content p {
    color: #333;
    font-size: 16px;
    margin-bottom: 25px;
    line-height: 1.5;
    font-weight: bold;
}

#close-thankyou-btn {
    width: 100%;
    font-size: 20px;
    padding: 12px;
}

/* ==========================================================================
   SCROLL TO TOP BUTTON
   ========================================================================== */

#scroll-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #EF51B8;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 999; /* Keeps it above everything else */
    
    /* Initially hidden */
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease;
}

/* JavaScript will add this class when the user scrolls down */
#scroll-top-btn.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Icon styling using your requested color as the default */
#scroll-top-btn i {
    font-size: 30px;
    color: #f9f9f9; /* The specific pink color you requested */
    transition: 0.3s ease;
}

/* Hover effect */
#scroll-top-btn:hover {
    transform: translateY(-5px); /* Bounces up slightly */
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

#scroll-top-btn:hover i {
    color: #E0E15F; /* Changes to Yummy Tea Yellow on hover */
}

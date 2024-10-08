import { Facebook } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsCart, BsFacebook, BsHeart, BsInstagram, BsPinterest, BsSearch, BsTwitter} from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";


const Home = () => {
    return (
        <>
            <header className="header2">
                <div className="header-note">
                    <p>Due to the <span>COVID 19</span> epidemic, orders may be processed with a slight delay</p>
                    <span className="note-close-btn"><i className="flaticon-cancel"></i></span>
                </div>
                <div className="header-top d-none d-md-block">
                    <div className="container header-container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="header-top-link">
                                    <a href="about.html" className="text-btn">About Us</a>
                                    <a href="register.html" className="text-btn">My account</a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="header-top-right">
                                    <a href="contact.html" className="text-btn">Track Order</a>
                                    <select name="lan-select" id="lan-select" className="language-select border-left">
                                        <option value="1">English</option>
                                        <option value="2">Hindi</option>
                                        <option value="3">Arabic</option>
                                        <option value="3">Bengali</option>
                                        <option value="3">French</option>
                                    </select>
                                    <select name="currency-select" id="currency-select" className="currency-select border-left">
                                        <option value="1">USD</option>
                                        <option value="2">EUR</option>
                                        <option value="3">JPY</option>
                                        <option value="4">GBP</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header-main header-main1">

                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header1">
                                        <div className="header-logo header1-logo">
                                            <a href="index.html" className="logo-bl"><Image height={200} width={200} src="/assets/img/logo/logo-bl-p.png" alt="logo-img" /></a>
                                        </div>
                                        <div className="main-menu main-menu2 d-none d-lg-block">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li className="menu-item-has-children"><a href="index.html">Home</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="index.html">Home Style 01</a></li>
                                                            <li><a href="index-2.html">Home Style 02</a></li>
                                                            <li><a href="index-3.html">Home Style 03</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children"><a href="shop.html">Shop</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item-has-children"><a href="shop.html">Shop</a>
                                                                <ul className="sub-menu">
                                                                    <li><a href="shop-sidebar-5-column.html">Shop Sidebar 5 Column</a></li>
                                                                    <li><a href="shop-sidebar-4-column.html">Shop Sidebar 4 Column</a></li>
                                                                    <li><a href="shop-sidebar-3-column.html">Shop Sidebar 3 Column</a></li>
                                                                    <li><a href="shop-full-6-column.html">Shop Full 6 Column</a></li>
                                                                    <li><a href="shop-full-5-column.html">Shop Full 5 Column</a></li>
                                                                    <li><a href="shop-full-4-column.html">Shop Full 4 Column</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop-details.html">Shop Details</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children"><a href="#">Pages</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="about.html">About</a></li>
                                                            <li><a href="register.html">Register</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                            <li><a href="faq.html">FAQ</a></li>
                                                            <li><a href="error-404.html">404 page</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children"><a href="blog.html">Blog</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header1">
                                        <div className="action-list d-none d-xl-flex action-list-header2">
                                            <div className="action-item action-item-cart">
                                                <a href="#" className="view-cart-button">
                                                    <BsCart className="heading-icon"/>
                                                    <span className="action-item-number">3</span></a>
                                                <a href="#" className="cart-items-price">$78.00</a>
                                            </div>
                                            <div className="action-item action-item-wishlist">
                                                <a href="#" className="view-wishlist-button">
                                                    <BsHeart className="heading-icon"/>
                                                <span className="action-item-number">2</span></a>
                                            </div>
                                            <div className="user-btn">
                                                <a href="login.html">
                                                    <div className="user-icon">
                                                        <RxAvatar className="heading-icon"/>
                                                    </div>
                                                    <span><span>Sign in</span>Account</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="menu-bar d-xl-none ml-20">
                                            <a className="side-toggle" href="#">
                                                <div className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom d-none d-lg-block">
                    <div className="container">
                        <div className="header-bottom-inner">
                            <div className="category-menu pos-rel">
                                <div className="category-click">
                                    <div className="bar-icon bar-icon-2">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span>Category</span>
                                </div>
                                <div className="category-items">
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Shirts</div> <span className="category-items-number">8</span>
                                    </a>
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Pants</div> <span className="category-items-number">12</span>
                                    </a>
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Jackets</div> <span className="category-items-number">17</span>
                                    </a>
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Leggings</div> <span className="category-items-number">6</span>
                                    </a>
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Beachware</div> <span className="category-items-number">25</span>
                                    </a>
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Underwear</div> <span className="category-items-number">17</span>
                                    </a>
                                    <a href="shop.html" className="category-item">

                                    </a>
                                    <a href="shop.html" className="category-item">
                                        <div className="category-name">Belt</div> <span className="category-items-number">9</span>
                                    </a>
                                </div>
                            </div>
                            <form action="#" className="filter-search-input header-search-2 d-none d-xl-inline-block">
                                <input type="text" placeholder="Search Products....." />
                                <button><BsSearch/></button>
                            </form>
                            <div className="header-support-social">
                                <div className="irc-item footer-support header-bottom-support">
                                    <div className="irc-item-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43.051" height="42.064"
                                            viewBox="0 0 43.051 42.064">
                                            <g id="customer-support2" transform="translate(-0.643 -1.361)">
                                                <path id="Path_251" data-name="Path 51"
                                                    d="M41.05,19.581a18.893,18.893,0,0,0-37.763,0A4.444,4.444,0,0,0,.643,23.639v4.985a4.445,4.445,0,0,0,4.44,4.44,2.876,2.876,0,0,0,2.873-2.873v-8.12a2.867,2.867,0,0,0-2.591-2.845,16.834,16.834,0,0,1,33.605,0,2.867,2.867,0,0,0-2.588,2.844V30.19a2.866,2.866,0,0,0,2.626,2.847V35.09a4.2,4.2,0,0,1-4.191,4.19h-3.1a3.085,3.085,0,0,0-2.929-2.085h-3.2a3.071,3.071,0,0,0-1.3.286,3.122,3.122,0,0,0-1.812,2.83,3.12,3.12,0,0,0,3.116,3.116h3.2a3.128,3.128,0,0,0,2.931-2.086h3.1a6.257,6.257,0,0,0,6.25-6.25V32.671a4.443,4.443,0,0,0,2.626-4.049V23.637a4.444,4.444,0,0,0-2.644-4.056ZM5.9,22.071V30.19A.814.814,0,0,1,5.082,31,2.384,2.384,0,0,1,2.7,28.623V23.638a2.383,2.383,0,0,1,2.381-2.381A.814.814,0,0,1,5.9,22.071ZM29.818,40.53a1.061,1.061,0,0,1-1.034.837h-3.2a1.056,1.056,0,0,1-.438-2.017,1.023,1.023,0,0,1,.438-.1h3.2a1.061,1.061,0,0,1,1.034,1.275ZM41.634,28.623A2.384,2.384,0,0,1,39.254,31a.814.814,0,0,1-.813-.813V22.071a.814.814,0,0,1,.813-.813,2.384,2.384,0,0,1,2.381,2.381Z"
                                                    transform="translate(0 0)" fill="#171717"></path>
                                                <path id="Path_252" data-name="Path 52"
                                                    d="M33.629,33.546a4.368,4.368,0,0,0,4.363-4.363v-8.89a4.369,4.369,0,0,0-4.363-4.363H20.294a4.368,4.368,0,0,0-4.363,4.363v8.89a4.368,4.368,0,0,0,4.363,4.363h.082v2.3a2.139,2.139,0,0,0,2.136,2.145,2.094,2.094,0,0,0,1.507-.636l3.833-3.812ZM26.7,31.786l-4.148,4.125a.052.052,0,0,1-.071.016.069.069,0,0,1-.047-.078V32.516a1.03,1.03,0,0,0-1.03-1.03H20.295a2.306,2.306,0,0,1-2.3-2.3v-8.89a2.306,2.306,0,0,1,2.3-2.3H33.63a2.309,2.309,0,0,1,2.3,2.3v8.89a2.306,2.306,0,0,1-2.3,2.3h-6.2a1.031,1.031,0,0,0-.726.3Z"
                                                    transform="translate(-4.793 -4.568)" fill="#171717"></path>
                                                <path id="Path_253" data-name="Path 53"
                                                    d="M24.019,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,24.019,26.787Z"
                                                    transform="translate(-6.853 -7.972)" fill="#171717"></path>
                                                <path id="Path_254" data-name="Path 54"
                                                    d="M31.305,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,31.305,26.787Z"
                                                    transform="translate(-9.137 -7.972)" fill="#171717"></path>
                                                <path id="Path_255" data-name="Path 55"
                                                    d="M38.591,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,38.591,26.787Z"
                                                    transform="translate(-11.422 -7.972)" fill="#171717"></path>
                                            </g>
                                        </svg>

                                    </div>
                                    <div className="irc-item-content">
                                        <div className="support-number"><a href="tel:555-900-888">555 - 900 - 888</a></div>
                                        <p>24/7 Support Center</p>
                                    </div>

                                </div>
                                <div className="social__links header-bottom-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {/* header area end */}

            {/* Add your site or application content here */}
            <main>


                {/* side toggle start */}
                <div className="fix">
                    <div className="side-info">
                        <div className="side-info-content">
                            <div className="offset-widget offset-logo mb-40">
                                <div className="row align-items-center">
                                    <div className="col-9">
                                        <a href="index.html">
                                            <Image height={200} width={200} src="/assets/img/logo/logo-bl.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <div className="col-3 text-end"><button className="side-info-close"><i className="fal fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-menu d-lg-none fix"></div>
                            <div className="offset-profile-action d-xl-none">
                                <div className="offset-widget mb-40">
                                    <div className="action-list action-list-header1">
                                        <div className="action-item action-item-cart">
                                            <a href="#" className="view-cart-button">
                                                <i className="fal fa-shopping-bag"></i>
                                                <span className="action-item-number">3</span></a>
                                        </div>
                                        <div className="action-item action-item-wishlist">
                                            <a href="#" className="view-wishlist-button">
                                                <i className="fal fa-heart"></i>
                                                <span className="action-item-number">2</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-widget offset_searchbar mb-30">
                                <form action="#" className="filter-search-input">
                                    <input type="text" placeholder="Search keyword" />
                                    <button><i className="fal fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-overlay"></div>
                <div className="offcanvas-overlay-white"></div>

                <div className="fix">
                    <div className="sidebar-action sidebar-cart">
                        <button className="close-sidebar">Close<i className="fal fa-times"></i></button>
                        <h4 className="sidebar-action-title">Shopping Cart</h4>
                        <div className="sidebar-action-list">
                            <div className="sidebar-list-item">
                                <div className="product-image pos-rel">
                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/3/1.jpg" alt="img" /></a>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name"><a href="shop-details.html">Felted Shirt for Man</a></div>
                                    <div className="product-pricing">
                                        <span className="item-number">1 &times;</span>
                                        <span className="price-now">$24.00</span>
                                    </div>
                                    <button className="remove-item"><i className="fal fa-times"></i></button>
                                </div>
                            </div>
                            <div className="sidebar-list-item">
                                <div className="product-image pos-rel">
                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/1/1.webp" alt="img" /></a>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name"><a href="shop-details.html">Denim Jeans Pant</a></div>
                                    <div className="product-pricing">
                                        <span className="item-number">1 &times;</span>
                                        <span className="price-now">$12.00</span>
                                    </div>
                                    <button className="remove-item"><i className="fal fa-times"></i></button>
                                </div>
                            </div>
                            <div className="sidebar-list-item">
                                <div className="product-image pos-rel">
                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/jacket/2/2.jpg" alt="img" /></a>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name"><a href="shop-details.html">Denim Official Jacket</a></div>
                                    <div className="product-pricing">
                                        <span className="item-number">1 &times;</span>
                                        <span className="price-now">$42.00</span>
                                    </div>
                                    <button className="remove-item"><i className="fal fa-times"></i></button>
                                </div>
                            </div>

                        </div>
                        <div className="product-price-total">
                            <span>Subtotal :</span>
                            <span className="subtotal-price">$78.00</span>
                        </div>
                        <div className="sidebar-action-btn">
                            <a href="cart.html" className="fill-btn">View cart</a>
                            <a href="checkout.html" className="border-btn">Checkout</a>
                        </div>
                    </div>
                </div>
                <div className="fix">
                    <div className="sidebar-action sidebar-wishlist">
                        <button className="close-sidebar">Close<i className="fal fa-times"></i></button>
                        <h4 className="sidebar-action-title">Wishlist</h4>
                        <div className="sidebar-action-list">
                            <div className="sidebar-list-item">
                                <div className="product-image pos-rel">
                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" /></a>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></div>
                                    <div className="product-pricing">
                                        <span className="price-now">$20.00</span>
                                    </div>
                                    <button className="remove-item"><i className="fal fa-times"></i></button>
                                </div>
                            </div>
                            <div className="sidebar-list-item">
                                <div className="product-image pos-rel">
                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" /></a>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name"><a href="shop-details.html">Skinny Jeans Pant</a></div>
                                    <div className="product-pricing">
                                        <span className="price-now">$24.00</span>
                                    </div>
                                    <button className="remove-item"><i className="fal fa-times"></i></button>
                                </div>
                            </div>

                        </div>
                        <div className="product-price-total">
                            <span>Subtotal :</span>
                            <span className="subtotal-price">$44.00</span>
                        </div>
                        <div className="sidebar-action-btn">
                            <a href="cart.html" className="fill-btn">View cart</a>
                            <a href="cart.html" className="border-btn">Checkout</a>
                        </div>
                    </div>
                </div>
                {/* side toggle end */}

                {/* banner area start  */}
                <div className="banner-area banner-area1 pos-rel">
                    <div className="swiper-container slider__active">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="single-banner single-banner-1 banner-800 d-flex align-items-center pos-rel">
                                    <div className="banner-bg banner-bg1 banner-bg1-1" data-background="assets/img/banner/banner-1-1.jpg">
                                    </div>
                                    <div className="container pos-rel">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-8">
                                                <div className="banner-content banner-content1 banner-content1-1 pt-0">
                                                    <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                        <span>New Arrival</span>
                                                    </div>
                                                    <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">
                                                        Hot Fashion Collection</h1>
                                                    <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                        <a href="shop.html" className="fill-btn">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-banner single-banner-1 banner-800 d-flex align-items-center pos-rel">
                                    <div className="banner-bg banner-bg1 banner-bg1-1" data-background="assets/img/banner/banner-1-2.jpg">
                                    </div>
                                    <div className="container pos-rel">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-8">
                                                <div className="banner-content banner-content1 banner-content1-1 pt-0">
                                                    <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                        <span>New Arrival</span>
                                                    </div>
                                                    <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">
                                                        Autumn Fashion For Man</h1>
                                                    <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                        <a href="shop.html" className="fill-btn">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-banner single-banner-1 banner-800 d-flex align-items-center pos-rel">
                                    <div className="banner-bg banner-bg1 banner-bg1-1" data-background="assets/img/banner/banner-1-3.jpg">
                                    </div>
                                    <div className="container pos-rel">
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-8">
                                                <div className="banner-content banner-content1 banner-content1-1 pt-0">
                                                    <div className="banner-meta-text" data-animation="fadeInUp" data-delay=".3s">
                                                        <span>New Arrival</span>
                                                    </div>
                                                    <h1 className="banner-title" data-animation="fadeInUp" data-delay=".5s">
                                                        Perfect Fashion Unique Dress</h1>
                                                    <div className="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                        <a href="shop.html" className="fill-btn">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* If we need navigation buttons */}
                        <div className="slider-nav d-none">
                            <div className="slider-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                            <div className="slider-button-next"><i className="fal fa-long-arrow-right"></i></div>
                        </div>
                        {/* If we need pagination */}
                        <div className="slider-pagination slider1-pagination"></div>
                    </div>
                </div>
                {/* banner area end  */}

                {/* category banner area start  */}
                <div className="category-banner-area pt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="category-banner-single mb-30 pos-rel">
                                    <div className="category-banner-img">
                                        <Image height={200} width={200} src="/assets/img/category_banner/category-banner1.jpg" alt="banner-img" />
                                    </div>
                                    <div className="category-banner-inner">
                                        <div className="category-banner-content">
                                            <a href="shop.html" className="product-category">Man</a>
                                            <p className="category-short-desc">Fashion Collection - 2022</p>
                                            <a href="shop.html" className="border-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 order-xl-3">
                                <div className="category-banner-single mb-30 pos-rel">
                                    <div className="category-banner-img">
                                        <Image height={200} width={200} src="/assets/img/category_banner/category-banner4.jpg" alt="banner-img" />
                                    </div>
                                    <div className="category-banner-inner">
                                        <div className="category-banner-content">
                                            <a href="shop.html" className="product-category">Women</a>
                                            <p className="category-short-desc">Winter Collection - 2022</p>
                                            <a href="shop.html" className="border-btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 order-xl-2">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-6 col-md-6">
                                        <div className="category-banner-single mb-30 pos-rel">
                                            <div className="category-banner-img">
                                                <Image height={200} width={200} src="/assets/img/category_banner/category-banner2.jpg" alt="banner-img" />
                                            </div>
                                            <div className="category-banner-inner align-items-end">
                                                <div className="category-banner-content">
                                                    <a href="shop.html" className="product-category">Kids Collection</a>
                                                    <p className="category-short-desc">Trending - 2022</p>
                                                    <a href="shop.html" className="border-btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-6 col-md-6">
                                        <div className="category-banner-single mb-30 pos-rel">
                                            <div className="category-banner-img">
                                                <Image height={200} width={200} src="/assets/img/category_banner/category-banner3.jpg" alt="banner-img" />
                                            </div>
                                            <div className="category-banner-inner justify-content-end">
                                                <div className="category-banner-content">
                                                    <a href="shop.html" className="product-category">Cosmetics</a>
                                                    <p className="category-short-desc">Fashion Collection - 2022</p>
                                                    <a href="shop.html" className="border-btn">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* category banner area end  */}

                {/* product area start  */}
                <section className="product-area pt-90 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2 className="section-main-title mb-35">Products of the week</h2>
                                </div>
                            </div>
                        </div>
                        <div className="product-tab-wrapper">
                            <div className="product-tab-nav mb-60">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1"
                                            type="button" role="tab" aria-controls="nav-1" aria-selected="true">Best Seller <span
                                                className="total-product">[57]</span></button>
                                        <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2"
                                            type="button" role="tab" aria-controls="nav-2" aria-selected="false">Hot Collection <span
                                                className="total-product">[25]</span></button>
                                        <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3"
                                            type="button" role="tab" aria-controls="nav-3" aria-selected="false">Trendy <span
                                                className="total-product">[32]</span></button>
                                        <button className="nav-link" id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4"
                                            type="button" role="tab" aria-controls="nav-4" aria-selected="false">New Arrival<span
                                                className="total-product">[64]</span></button>
                                    </div>
                                </nav>
                            </div>
                            <div className="product-tab-content">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                                        <div className="products-wrapper">
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/1/1.webp"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Classic Fit Workshirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£55.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-yellow active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/2.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-wood ">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/3.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/4.webp" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={400} src="/assets/img/shirt/2/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>

                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Hooded Cotton Sweatshirt</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£35.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-black active">
                                                            <Image height={200} width={200} src="" alt="img" />
                                                        </li>
                                                        <li className="cl-wood">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/1.webp" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/bag/1/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Gucci Leather Bag</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£65.00</span>
                                                        {/* <span className="price-old">£40.00</span> */}
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/3.webp" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/blazer/1/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Slim Business Blazer</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/H&M Bathrobe/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">H&M Waffled Bathrobe</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-yellow active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/2.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/3.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/4.webp" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/3/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Leather Jacket Suit</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£65.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/bag/1/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/bag/1/2.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/bag/1/3.webp" alt="img" />

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/sleeveshirt/1/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Full Sleeve Sweatshirt</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£62.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/pant/1/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Flex Waist Stretch Pants</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£24.00</span>
                                                        <span className="price-old">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/jacket/2/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Marmot Precip Eco Jacket</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£84.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/bag/2/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Hiking Backpack Bag</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/ring/1.webp"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Finger Ring For Women</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/ring/2/1.webp"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">CZ Stone Wedding Rings</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                        <span className="price-old">£39.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-black active">
                                                            <Image height={200} width={200} src="/assets/img/ring/2/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/ring/2/2.webp" alt="img" />
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/4/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Cotton Long-Sleeve Henley</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£55.00</span>

                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-navy active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/1.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-pink">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/2.webp" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/3.webp" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/t-shirt/1/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Nike Men's T Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£55.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/blazer/1/1.webp" alt="" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/blazer/1/1.webp" alt="" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/blazer/1/1.webp" alt="" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/blazer/1/1.webp" alt="" />
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/t-shirt/2/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Wrangler Men's T Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£71.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-light-white">
                                                            {/* <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-2.jpg" alt="img" /> */}
                                                        </li>
                                                        <li className="cl-navy active">
                                                            {/* <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" /> */}
                                                        </li>
                                                        <li className="cl-black active">
                                                            {/* <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" /> */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                                        <div className="products-wrapper">

                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/3/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Poplin Dress Shirt</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-yellow active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/4.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/bag/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Varsi Leather Bag</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£65.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/bag/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/bag/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/bag/3.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/shirt/3/2.webp" alt="img" /></a>c c
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Fit Twill Shirt for Woman</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£62.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-3-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Grand Atlantic Chukka Boots</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£24.00</span>
                                                        <span className="price-old">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Comfy Winter Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£55.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-pink active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/5.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/7.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>

                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Skinny Jeans Pant</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-navy active">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/4.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/2/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Flat-Front Shorts</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£40.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/5.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shoe/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Eastland Lumber Up Boots</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-4-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£84.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-16-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Soft Touch Interlock Polo</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/product/product-img1.jpg"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ecomart Smart Watch</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/sunglass/2.jpg"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ecomart Smart Glass</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                        <span className="price-old">£39.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-black active">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/5.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-brown">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/8.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/11.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-wood">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/14.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/2/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Cotton Shirt fot Men</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                        <span className="price-old">£99.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/4.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/7.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-5-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Double-breasted Blazer</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ribbed Cotton Bodysuits</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£71.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-ash active">
                                                            <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-2.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                                        <div className="products-wrapper">

                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/2/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>/
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Flat-Front Shorts</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£40.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/5.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shoe/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Eastland Lumber Up Boots</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/3/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Poplin Dress Shirt</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-yellow active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/4.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/bag/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Varsi Leather Bag</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£65.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/bag/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/bag/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/bag/3.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-2-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Fit Twill Shirt for Woman</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£62.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Comfy Winter Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£55.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-pink active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/5.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/7.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>

                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Skinny Jeans Pant</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-navy active">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/4.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-3-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Grand Atlantic Chukka Boots</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£24.00</span>
                                                        <span className="price-old">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-4-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£84.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-16-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Soft Touch Interlock Polo</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/product/product-img1.jpg"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ecomart Smart Watch</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/sunglass/2.jpg"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ecomart Smart Glass</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                        <span className="price-old">£39.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-black active">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/5.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-brown">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/8.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/11.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-wood">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/14.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/2/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Cotton Shirt fot Men</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                        <span className="price-old">£99.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/4.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/7.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-5-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Double-breasted Blazer</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ribbed Cotton Bodysuits</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£71.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-ash active">/
                                                            <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-2.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
                                        <div className="products-wrapper">

                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-2-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Fit Twill Shirt for Woman</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£62.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-3-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Grand Atlantic Chukka Boots</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£24.00</span>
                                                        <span className="price-old">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-4-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Women's Faux-Trim Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£84.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-16-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Soft Touch Interlock Polo</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Comfy Winter Shirt</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£55.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-pink active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/5.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/1/7.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>

                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Skinny Jeans Pant</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£45.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-navy active">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/pant/1/4.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/pant/2/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker discount"> -25%</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Flat-Front Shorts</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£40.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/pant/2/5.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shoe/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Eastland Lumber Up Boots</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/3/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Poplin Dress Shirt</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-yellow active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/3.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/shirt/3/4.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/bag/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Varsi Leather Bag</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£65.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/bag/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/bag/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/bag/3.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/product/product-img1.jpg"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ecomart Smart Watch</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£30.00</span>
                                                        <span className="price-old">£38.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/sunglass/2.jpg"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ecomart Smart Glass</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£25.00</span>
                                                        <span className="price-old">£39.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-black active">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/2.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/5.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-brown">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/8.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/11.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-wood">
                                                            <Image height={200} width={200} src="/assets/img/sunglass/14.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/2/1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Cotton Shirt fot Men</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                        <span className="price-old">£99.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-navy">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/4.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/shirt/2/7.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-5-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Double-breasted Blazer</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£32.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200}
                                                        src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                    </div>
                                                    <div className="product-action-bottom">
                                                        <a href="cart.html" className="add-cart-btn"><i className="fal fa-shopping-bag"></i>Add to
                                                            Cart</a>
                                                    </div>
                                                    <div className="product-sticker-wrapper">
                                                        <span className="product-sticker new">New</span>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Ribbed Cotton Bodysuits</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£71.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        <li className="cl-ash active">
                                                            <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-1.jpg" alt="img" />
                                                        </li>
                                                        <li className="cl-light-white">
                                                            <Image height={200} width={200} src="/assets/img/product/800_1034/Image-1-2.jpg" alt="img" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>/
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-area-btn mt-10 text-center">
                                    <a href="shop.html" className="border-btn">View All Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* product area end  */}

                {/* featured product area start  */}
                <section className="featured-area pt-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2 className="section-main-title mb-50">Featured Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="featured-products-wrapper">
                            <div className="row">

                                <div className="col-xxl-6 col-lg-12 order-xxl-last">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-product mb-30 featured-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shorts/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                        <a href="#" className="add-cart-btn"><i className="fal fa-shopping-bag"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Flat-Front Shorts</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        {/* <li className="cl-blue active">
                                                            <Image height={200} width={200} src="/assets/img/product/1.png" alt="img" />
                                                        </li>
                                                        <li className="cl-ash">
                                                            <Image height={200} width={200} src="/assets/img/product/2.png" alt="img" />
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-product mb-30 featured-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/bag/1/1.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                        <a href="#" className="add-cart-btn"><i className="fal fa-shopping-bag"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Gucci Leather Bag</a></div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        {/* <li className="cl-brown active">
                                                            <Image height={200} width={200} src="/assets/img/product/3.png" alt="img" />
                                                        </li>
                                                        <li className="cl-black">
                                                            <Image height={200} width={200} src="/assets/img/product/4.png" alt="img" />
                                                        </li>
                                                        <li className="cl-wood">
                                                            <Image height={200} width={200} src="/assets/img/product/5.png" alt="img" />
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-product mb-30 featured-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/1/3.webp" alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                        <a href="#" className="add-cart-btn"><i className="fal fa-shopping-bag"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Men's Poplin Dress Shirt</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                    </div>/
                                                    <ul className="product-color-nav">
                                                        {/* <li className="cl-green active">
                                                            <Image height={200} width={200} src="/assets/img/product/6.png" alt="img" />
                                                        </li>
                                                        <li className="cl-orange">
                                                            <Image height={200} width={200} src="/assets/img/product/7.png" alt="img" />
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-product mb-30 featured-product">
                                                <div className="product-image pos-rel">
                                                    <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/bag/4.webp"
                                                        alt="img" /></a>
                                                    <div className="product-action">
                                                        <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                        <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                        <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                        <a href="#" className="add-cart-btn"><i className="fal fa-shopping-bag"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-name"><a href="shop-details.html">Leather Bag For Girl</a>
                                                    </div>
                                                    <div className="product-price">
                                                        <span className="price-now">£85.00</span>
                                                    </div>
                                                    <ul className="product-color-nav">
                                                        {/* <li className="cl-black active">
                                                            <Image height={200} width={200} src="/assets/img/product/11.png" alt="img" />
                                                        </li>
                                                        <li className="cl-wood">
                                                            <Image height={200} width={200} src="/assets/img/product/12.png" alt="img" />
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 order-xxl-first">
                                    <div className="single-product mb-30 featured-product">
                                        <div className="product-image pos-rel">
                                            <a href="shop-details.html" className=""><Image height={200} width={200} src="/assets/img/shirt/2/3.webp" alt="img" /></a>
                                            <div className="product-action">
                                                <a href="#" className="quick-view-btn"><i className="fal fa-eye"></i></a>
                                                <a href="#" className="wishlist-btn"><i className="fal fa-heart"></i></a>
                                                <a href="#" className="compare-btn"><i className="fal fa-exchange"></i></a>
                                                <a href="#" className="add-cart-btn"><i className="fal fa-shopping-bag"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-desc">
                                            <div className="product-name"><a href="shop-details.html">Men's Quarter-Zip Sweater</a></div>
                                            <div className="product-price">
                                                <span className="price-now">£85.00</span>
                                            </div>
                                            <ul className="product-color-nav">
                                                {/* <li className="cl-pink active">
                                                    <Image height={200} width={200} src="/assets/img/product/8.png" alt="img" />
                                                </li>
                                                <li className="cl-ash">/
                                                    <Image height={200} width={200} src="/assets/img/product/9.png" alt="img" />
                                                </li>
                                                <li className="cl-navy">
                                                    <Image height={200} width={200} src="/assets/img/product/10.png" alt="img" />
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* featured product area end  */}

                {/* category area start  */}
                <section className="category-area pt-90 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center">
                                    <h2 className="section-main-title mb-50">Browse More</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="product-category-wrapper">
                                    <div className="product-category-single pos-rel">
                                        <div className="product-category-img">
                                            <a href="shop.html"><Image height={200} width={200} src="/assets/img/browsemore/1.jpg"
                                                alt="product-img" /></a>
                                        </div>
                                        <div className="product-category-inner">
                                            <div className="product-category-content">
                                                <a href="shop.html" className="product-category">Shirt & Jeans</a>
                                                <div className="product-meta-item">
                                                    <div className="product-available">45</div>
                                                    <div className="product-meta-type">products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-category-single pos-rel">
                                        <div className="product-category-img">
                                            <a href="shop.html"><Image height={200} width={200} src="/assets/img/browsemore/2.jpg"
                                                alt="product-img" /></a>
                                        </div>
                                        <div className="product-category-inner">
                                            <div className="product-category-content">
                                                <a href="shop.html" className="product-category">Cosmetics</a>
                                                <div className="product-meta-item">
                                                    <div className="product-available">26</div>
                                                    <div className="product-meta-type">products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-category-single pos-rel">
                                        <div className="product-category-img">
                                            <a href="shop.html"><Image height={200} width={200} src="/assets/img/browsemore/3.jpg"
                                                alt="product-img" /></a>
                                        </div>
                                        <div className="product-category-inner">
                                            <div className="product-category-content">
                                                <a href="shop.html" className="product-category">Coat & Jacket</a>
                                                <div className="product-meta-item">
                                                    <div className="product-available">36</div>
                                                    <div className="product-meta-type">products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-category-single pos-rel">
                                        <div className="product-category-img">
                                            <a href="shop.html"><Image height={200} width={200} src="/assets/img/browsemore/4.jpg"
                                                alt="product-img" /></a>
                                        </div>
                                        <div className="product-category-inner">
                                            <div className="product-category-content">
                                                <a href="shop.html" className="product-category">Shoes</a>
                                                <div className="product-meta-item">
                                                    <div className="product-available">38</div>
                                                    <div className="product-meta-type">products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-category-single pos-rel">
                                        <div className="product-category-img">
                                            <a href="shop.html"><Image height={200} width={200} src="/assets/img/browsemore/5.jpg"
                                                alt="product-img" /></a>
                                        </div>
                                        <div className="product-category-inner">
                                            <div className="product-category-content">
                                                <a href="shop.html" className="product-category">Underwear</a>
                                                <div className="product-meta-item">
                                                    <div className="product-available">32</div>
                                                    <div className="product-meta-type">products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* category area end  */}

                {/* features area start  */}
                <div className="features-area features-area1">
                    <div className="container">
                        <div className="features-wrapper">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="features-single">
                                        <div className="irc-item">
                                            <div className="irc-item-icon">
                                                <svg id="_003-scooter" data-name="003-scooter" xmlns="http://www.w3.org/2000/svg"
                                                    width="46.699" height="40.604" viewBox="0 0 46.699 40.604">
                                                    <path id="Path_3267" data-name="Path 3267"
                                                        d="M50.456,29.234h11.6a3.356,3.356,0,0,0,3.352-3.352V14.731a3.427,3.427,0,0,0-3.423-3.424H50.456a3.427,3.427,0,0,0-3.423,3.424V25.81a3.427,3.427,0,0,0,3.423,3.424ZM61.983,12.722a2.011,2.011,0,0,1,2.008,2.009V25.882a1.939,1.939,0,0,1-1.937,1.937h-11.6a2.011,2.011,0,0,1-2.008-2.009V14.731a2.01,2.01,0,0,1,2.008-2.009Z"
                                                        transform="translate(-47.033 -11.307)" fill="#171717" />
                                                    <path id="Path_3268" data-name="Path 3268"
                                                        d="M46.526,41.883H59.247a.708.708,0,0,0,.708-.708V37.97a3.33,3.33,0,0,0-3.326-3.325h-10.1A3.33,3.33,0,0,0,43.2,37.97v.587a3.33,3.33,0,0,0,3.326,3.326ZM58.54,40.468H46.526a1.91,1.91,0,0,1-1.91-1.91v-.587a1.91,1.91,0,0,1,1.91-1.91h10.1a1.91,1.91,0,0,1,1.91,1.91Z"
                                                        transform="translate(-38.869 -18.132)" fill="#171717" />
                                                    <path id="Path_3269" data-name="Path 3269"
                                                        d="M26.589,55.345H57.783a.708.708,0,1,0,0-1.415H26.589A1.79,1.79,0,0,1,24.8,52.193c1.031-6.683,6.17-7.871,6.389-7.918A.708.708,0,1,0,30.9,42.89c-.064.013-6.344,1.415-7.5,9.149a.747.747,0,0,0-.008.105A3.207,3.207,0,0,0,26.589,55.345Z"
                                                        transform="translate(-23.386 -20.539)" fill="#171717" />
                                                    <path id="Path_3270" data-name="Path 3270"
                                                        d="M46.021,55.345a.708.708,0,0,0,.551-1.15,7.567,7.567,0,0,1-.035-10.131A.708.708,0,1,0,45.5,43.1a9.113,9.113,0,0,0-.034,11.983A.708.708,0,0,0,46.021,55.345Z"
                                                        transform="translate(-25.643 -20.538)" fill="#171717" />
                                                    <path id="Path_3271" data-name="Path 3271"
                                                        d="M53.272,65.441A6.246,6.246,0,0,0,59.511,59.2a.708.708,0,0,0-1.415,0,4.824,4.824,0,1,1-9.648,0,.708.708,0,0,0-1.415,0A6.246,6.246,0,0,0,53.272,65.441Z"
                                                        transform="translate(-41.138 -25.107)" fill="#171717" />
                                                    <path id="Path_3272" data-name="Path 3272"
                                                        d="M55.106,52.1h3.267a.708.708,0,1,0,0-1.415H55.108a.708.708,0,1,0,0,1.415Z"
                                                        transform="translate(-45.92 -22.824)" fill="#171717" />
                                                    <path id="Path_3273" data-name="Path 3273"
                                                        d="M13.5,63.317A6.5,6.5,0,1,0,7,56.808,6.5,6.5,0,0,0,13.5,63.317Zm0-11.59a5.088,5.088,0,1,1-5.082,5.082A5.088,5.088,0,0,1,13.5,51.727Z"
                                                        transform="translate(26.691 -22.714)" fill="#171717" />
                                                    <path id="Path_3274" data-name="Path 3274"
                                                        d="M8.107,55.337a.708.708,0,0,0,.675-.92,7.783,7.783,0,1,1,15.2-2.36,5.785,5.785,0,0,1-.114,1.216.676.676,0,0,0-.016.146.708.708,0,0,0,1.411.1,7.358,7.358,0,0,0,.134-1.459A9.2,9.2,0,1,0,7.432,54.846.708.708,0,0,0,8.107,55.337Z"
                                                        transform="translate(21.302 -20.535)" fill="#171717" />
                                                    <path id="Path_3275" data-name="Path 3275"
                                                        d="M19.709,48.117a.708.708,0,0,0,.708-.708V34.222a5.8,5.8,0,0,1,4.528-5.757l.047-.008,2.519,10.637a.707.707,0,1,0,1.377-.325L26.225,27.511a.7.7,0,0,0-.747-.541,7.877,7.877,0,0,0-.786.1A7.14,7.14,0,0,0,19,34.222V47.409A.708.708,0,0,0,19.709,48.117Z"
                                                        transform="translate(9.301 -15.887)" fill="#171717" />
                                                    <path id="Path_3276" data-name="Path 3276"
                                                        d="M19.708,25.984H31.1a.708.708,0,0,0,.708-.708v-5.8a.708.708,0,0,0-.708-.708H28.722A4.029,4.029,0,0,0,24.7,22.792v1.775h-4.99a.708.708,0,1,0,0,1.415ZM30.4,24.569H26.113V22.794a2.612,2.612,0,0,1,2.609-2.609H30.4Z"
                                                        transform="translate(6.396 -13.489)" fill="#171717" />
                                                    <path id="Path_3277" data-name="Path 3277"
                                                        d="M47.741,20.915H64.7a.708.708,0,1,0,0-1.415H47.741a.708.708,0,1,0,0,1.415Z"
                                                        transform="translate(-47.033 -13.703)" fill="#171717" />
                                                    <path id="Path_3278" data-name="Path 3278"
                                                        d="M14.831,61.427a3.284,3.284,0,1,0-3.284-3.284,3.285,3.285,0,0,0,3.284,3.284Zm0-5.153a1.869,1.869,0,1,1-1.869,1.869A1.869,1.869,0,0,1,14.831,56.274Z"
                                                        transform="translate(25.366 -24.044)" fill="#171717" />
                                                </svg>
                                            </div>
                                            <div className="irc-item-content">
                                                <div className="irc-item-heading">Free Shipping</div>
                                                <p>On All Order Over $599</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="features-single">
                                        <div className="irc-item">
                                            <div className="irc-item-icon">
                                                <svg id="_004-return" data-name="004-return" xmlns="http://www.w3.org/2000/svg"
                                                    width="41.583" height="40.603" viewBox="0 0 41.583 40.603">
                                                    <path id="Path_3279" data-name="Path 3279"
                                                        d="M263.129,392.394a.609.609,0,0,0,.609-.609v-1.07a.609.609,0,1,0-1.219,0v1.07A.609.609,0,0,0,263.129,392.394Zm0,0"
                                                        transform="translate(-241.198 -358.423)" fill="#171717" />
                                                    <path id="Path_3280" data-name="Path 3280"
                                                        d="M408.754,392.394a.609.609,0,0,0,.609-.609v-1.07a.609.609,0,1,0-1.219,0v1.07A.609.609,0,0,0,408.754,392.394Zm0,0"
                                                        transform="translate(-374.997 -358.423)" fill="#171717" />
                                                    <path id="Path_3281" data-name="Path 3281"
                                                        d="M319.429,404.232a2.54,2.54,0,0,0,1.918-.854.609.609,0,1,0-.917-.8,1.364,1.364,0,0,1-2,0,.609.609,0,0,0-.918.8,2.539,2.539,0,0,0,1.918.854Zm0,0"
                                                        transform="translate(-291.586 -369.69)" fill="#171717" />
                                                    <path id="Path_3282" data-name="Path 3282"
                                                        d="M101.007,7.387l5.508,4.8a1.492,1.492,0,0,0,2.453-1.116v-.948a10.7,10.7,0,0,1,4.372,1.2,7.814,7.814,0,0,1,3.65,4.446,1.492,1.492,0,0,0,1.427,1.031c.156,0,.312-.013.467-.02a1.508,1.508,0,0,0,1.425-1.569V15.2a11.929,11.929,0,0,0-1.032-4.222,13.808,13.808,0,0,0-5.852-6.143,20.344,20.344,0,0,0-4.458-1.784V1.47A1.5,1.5,0,0,0,106.515.354l-5.508,4.8a1.5,1.5,0,0,0,0,2.232Zm.8-1.313,5.508-4.8a.263.263,0,0,1,.434.2V3.519a.609.609,0,0,0,.471.593c.117.027.248.063.368.1A19.209,19.209,0,0,1,112.8,5.886a12.639,12.639,0,0,1,5.364,5.6,10.7,10.7,0,0,1,.924,3.785v.009a.277.277,0,0,1-.264.287l-.4.018h-.014a.281.281,0,0,1-.268-.187,9.043,9.043,0,0,0-4.229-5.142,12.136,12.136,0,0,0-5.5-1.375.625.625,0,0,0-.673.608v1.584a.264.264,0,0,1-.434.2l-5.508-4.8a.265.265,0,0,1,0-.395Zm0,0"
                                                        transform="translate(-92.345 -0.001)" fill="#171717" />
                                                    <path id="Path_3283" data-name="Path 3283"
                                                        d="M1.81,228.131H3.284v9.584A2.485,2.485,0,0,0,5.766,240.2H35.817a2.485,2.485,0,0,0,2.482-2.482v-9.584h1.473a1.831,1.831,0,0,0,1.684-2.485l-3.2-8.025a.609.609,0,0,0-.566-.384H34.472a.609.609,0,0,0,0,1.219h2.805l3.048,7.641a.6.6,0,0,1-.552.815H20.689a.6.6,0,0,1-.552-.374l-3.224-8.082H32.035a.609.609,0,1,0,0-1.218H3.893a.609.609,0,0,0-.566.383l-3.2,8.025a1.83,1.83,0,0,0,1.684,2.485Zm14.2,6.444a.609.609,0,0,0,.609-.609V221.019L19,226.99a1.8,1.8,0,0,0,1.684,1.141H37.081v9.584a1.265,1.265,0,0,1-1.264,1.264H16.623V236.4a.609.609,0,1,0-1.219,0v2.576H5.766A1.265,1.265,0,0,1,4.5,237.716v-9.584h6.837a1.824,1.824,0,0,0,1.684-1.141l2.382-5.971v12.948a.609.609,0,0,0,.609.609ZM1.258,226.1l3.048-7.641H15.115l-3.224,8.082a.6.6,0,0,1-.552.374H1.81a.6.6,0,0,1-.552-.815Zm0,0"
                                                        transform="translate(0 -199.595)" fill="#171717" />
                                                </svg>

                                            </div>
                                            <div className="irc-item-content">
                                                <div className="irc-item-heading">Easy Returns</div>
                                                <p>30 Day Returns Policy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="features-single">
                                        <div className="irc-item">
                                            <div className="irc-item-icon">
                                                <svg id="_001-payment-security" data-name="001-payment-security"
                                                    xmlns="http://www.w3.org/2000/svg" width="40.603" height="40.604"
                                                    viewBox="0 0 40.603 40.604">
                                                    <g id="Group_2181" data-name="Group 2181" transform="translate(0 0)">
                                                        <path id="Path_3246" data-name="Path 3246"
                                                            d="M33.47,353.747a.6.6,0,0,0-.595.595v9.775a.992.992,0,0,1-.991.991H2.184a.992.992,0,0,1-.991-.991v-7.935a.595.595,0,1,0-1.19,0v7.935A2.183,2.183,0,0,0,2.184,366.3h29.7a2.183,2.183,0,0,0,2.181-2.181v-9.775A.6.6,0,0,0,33.47,353.747Z"
                                                            transform="translate(-0.003 -325.694)" fill="#171717" />
                                                        <path id="Path_3247" data-name="Path 3247"
                                                            d="M66.156,433.576a.595.595,0,1,0,0-1.19H54.816a.595.595,0,1,0,0,1.19Z"
                                                            transform="translate(-49.921 -398.097)" fill="#171717" />
                                                        <path id="Path_3248" data-name="Path 3248"
                                                            d="M236.331,433.576a.595.595,0,1,0,0-1.19h-1.8a.595.595,0,1,0,0,1.19Z"
                                                            transform="translate(-215.386 -398.097)" fill="#171717" />
                                                        <path id="Path_3249" data-name="Path 3249"
                                                            d="M288.17,433.576a.595.595,0,1,0,0-1.19h-1.8a.595.595,0,1,0,0,1.19Z"
                                                            transform="translate(-263.114 -398.097)" fill="#171717" />
                                                        <path id="Path_3250" data-name="Path 3250"
                                                            d="M340.011,433.576a.595.595,0,1,0,0-1.19h-1.8a.595.595,0,0,0,0,1.19Z"
                                                            transform="translate(-310.844 -398.097)" fill="#171717" />
                                                        <path id="Path_3251" data-name="Path 3251"
                                                            d="M290.864,196.963a.6.6,0,0,0-.812-.218l-.492.284v-.568a.595.595,0,0,0-1.19,0v.568l-.492-.284a.595.595,0,0,0-.595,1.03l.492.284-.492.284a.595.595,0,1,0,.595,1.03l.492-.284v.568a.595.595,0,0,0,1.19,0v-.568l.492.284a.595.595,0,1,0,.595-1.03l-.492-.284.492-.284A.6.6,0,0,0,290.864,196.963Z"
                                                            transform="translate(-264.227 -180.334)" fill="#171717" />
                                                        <path id="Path_3252" data-name="Path 3252"
                                                            d="M351.244,196.963a.6.6,0,0,0-.812-.218l-.492.284v-.568a.595.595,0,0,0-1.19,0v.568l-.492-.284a.595.595,0,1,0-.595,1.03l.492.284-.492.284a.595.595,0,1,0,.595,1.03l.492-.284v.568a.595.595,0,0,0,1.19,0v-.568l.492.284a.595.595,0,0,0,.595-1.03l-.492-.284.492-.284A.6.6,0,0,0,351.244,196.963Z"
                                                            transform="translate(-319.819 -180.334)" fill="#171717" />
                                                        <path id="Path_3253" data-name="Path 3253"
                                                            d="M410.32,196.462a.595.595,0,0,0-1.19,0v.568l-.492-.284a.595.595,0,0,0-.595,1.03l.492.284-.492.284a.595.595,0,1,0,.595,1.03l.492-.284v.568a.595.595,0,1,0,1.19,0v-.568l.492.284a.595.595,0,1,0,.595-1.03l-.492-.284.492-.284a.595.595,0,1,0-.595-1.03l-.492.284Z"
                                                            transform="translate(-375.411 -180.334)" fill="#171717" />
                                                        <path id="Path_3254" data-name="Path 3254"
                                                            d="M40.011,3.005H35.4a5.768,5.768,0,0,1-4-1.6h0L30.213.275a.99.99,0,0,0-1.369,0L27.67,1.4a5.767,5.767,0,0,1-4,1.607H19.057a.6.6,0,0,0-.595.595V15.592a10.728,10.728,0,0,0,1.165,4.855H1.193V18.874a.992.992,0,0,1,.991-.991H16.527a.595.595,0,0,0,0-1.19H2.184A2.183,2.183,0,0,0,0,18.874v8.646a.595.595,0,0,0,1.19,0V25.39H24.644l4.368,2.746a1,1,0,0,0,1.056,0l5.538-3.485a10.7,10.7,0,0,0,5-9.055V3.6a.6.6,0,0,0-.595-.595ZM1.193,21.636H20.334A10.742,10.742,0,0,0,22.811,24.2H1.193V21.636ZM39.417,15.6a9.459,9.459,0,0,1-4.445,8.049L29.54,27.063,24.1,23.643a9.459,9.459,0,0,1-4.448-8.051V4.2h4.014a6.951,6.951,0,0,0,4.826-1.937l1.037-.992,1.049,1h0A6.952,6.952,0,0,0,35.4,4.195h4.021V15.6Z"
                                                            transform="translate(-0.003 0)" fill="#171717" />
                                                        <path id="Path_3255" data-name="Path 3255"
                                                            d="M349.634,64.249a.771.771,0,0,1-.77-.77.595.595,0,1,0-1.19,0,1.963,1.963,0,0,0,1.365,1.867v.722a.595.595,0,1,0,1.19,0v-.722a1.96,1.96,0,0,0-.595-3.827l-.043,0a.77.77,0,1,1,.814-.769.595.595,0,0,0,1.19,0,1.963,1.963,0,0,0-1.365-1.867v-.722a.595.595,0,0,0-1.19,0v.722a1.96,1.96,0,0,0,.595,3.827l.043,0a.77.77,0,0,1-.043,1.54Z"
                                                            transform="translate(-320.103 -53.002)" fill="#171717" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="irc-item-content">
                                                <div className="irc-item-heading">Secure Payment</div>
                                                <p>100% Secure Gaurantee</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="features-single">
                                        <div className="irc-item">
                                            <div className="irc-item-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="33.672" height="40.472"
                                                    viewBox="0 0 33.672 40.472">
                                                    <g id="headphones" transform="translate(-43.008)">
                                                        <g id="Group_2248" data-name="Group 2248" transform="translate(57.528 6.231)">
                                                            <g id="Group_2247" data-name="Group 2247">
                                                                <path id="Path_3446" data-name="Path 3446"
                                                                    d="M242.332,79.14a.794.794,0,0,0-1.255.971,15.1,15.1,0,0,1,3.183,9.326v2.327a2.338,2.338,0,0,0-.761-.127h-2.189a1.943,1.943,0,0,0-1.871-1.426h-2.175a1.942,1.942,0,0,0-1.939,1.939v10.408a1.942,1.942,0,0,0,1.939,1.94h2.175a1.947,1.947,0,0,0,.3-.024,6.063,6.063,0,0,1-6.005,5.285h-.419a2.146,2.146,0,0,0-2.1-1.726h-2.378a2.145,2.145,0,0,0-2.143,2.143v.754a2.145,2.145,0,0,0,2.143,2.143h2.378a2.146,2.146,0,0,0,2.1-1.726h.419a7.651,7.651,0,0,0,7.643-7.642.789.789,0,0,0-.134-.441,1.925,1.925,0,0,0,.064-.193H243.5a2.35,2.35,0,0,0,2.348-2.347V89.437A16.675,16.675,0,0,0,242.332,79.14Zm-10.561,31.79h0a.556.556,0,0,1-.555.555h-2.378a.556.556,0,0,1-.555-.555v-.754a.556.556,0,0,1,.555-.555h2.378a.556.556,0,0,1,.555.555Zm8.021-18.5v10.127a.353.353,0,0,1-.353.353h-2.175a.353.353,0,0,1-.352-.353V92.15a.353.353,0,0,1,.352-.352h2.175a.353.353,0,0,1,.353.352Zm4.468,1.989v6.3a.762.762,0,0,1-.761.76h-2.12v-8.26h2.12a.762.762,0,0,1,.761.761Z"
                                                                    transform="translate(-226.694 -78.832)" fill="#171717" />
                                                            </g>
                                                        </g>
                                                        <g id="Group_2250" data-name="Group 2250" transform="translate(43.008)">
                                                            <g id="Group_2249" data-name="Group 2249" transform="translate(0)">
                                                                <path id="Path_3447" data-name="Path 3447"
                                                                    d="M69.648,3.148a16.837,16.837,0,0,0-26.64,13.689V28.123a2.35,2.35,0,0,0,2.348,2.347h2.189A1.943,1.943,0,0,0,49.416,31.9h2.175a1.942,1.942,0,0,0,1.939-1.94V19.549a1.942,1.942,0,0,0-1.939-1.939H49.416a1.943,1.943,0,0,0-1.871,1.426H45.356a2.338,2.338,0,0,0-.761.127V16.836a15.251,15.251,0,0,1,24.128-12.4.794.794,0,1,0,.925-1.289ZM49.063,29.677V19.549a.353.353,0,0,1,.353-.352h2.175a.353.353,0,0,1,.352.352V29.957a.353.353,0,0,1-.352.353H49.416a.353.353,0,0,1-.353-.353Zm-3.707-9.054h2.12v8.26h-2.12a.762.762,0,0,1-.761-.76V21.384A.762.762,0,0,1,45.356,20.623Z"
                                                                    transform="translate(-43.008 0)" fill="#171717" />
                                                            </g>
                                                        </g>
                                                        <g id="Group_2252" data-name="Group 2252" transform="translate(70.161 4.444)">
                                                            <g id="Group_2251" data-name="Group 2251" transform="translate(0)">
                                                                <path id="Path_3448" data-name="Path 3448"
                                                                    d="M387.284,56.22a.794.794,0,0,0,0,1.587A.794.794,0,0,0,387.284,56.22Z"
                                                                    transform="translate(-386.517 -56.22)" fill="#171717" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>

                                            </div>
                                            <div className="irc-item-content">
                                                <div className="irc-item-heading">Special Support</div>
                                                <p>24/7 Dedicated Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hr1"></div>
                    </div>
                </div>
                {/* features area end  */}



            </main>

            {/* footer area start  */}
            <footer data-background="" className="footer1-bg">
                <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>Information</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Payment Type</a></li>
                                        <li><a href="#">Awards Winning</a></li>
                                        <li><a href="#">World Media Partner</a></li>
                                        <li><a href="#">Become an Agent</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>Category</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Handbags & Wallets</a></li>
                                        <li><a href="#">Women's Clothing</a></li>
                                        <li><a href="#">Plus Sizes</a></li>
                                        <li><a href="#">Complete Your Look</a></li>
                                        <li><a href="#">Baby Corner</a></li>
                                        <li><a href="#">Man & Woman Shoe</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>Help & Support</h4>
                                    </div>
                                    <ul>
                                        <li><a href="#">Dealers & Agents</a></li>
                                        <li><a href="#">FAQ Information</a></li>
                                        <li><a href="#">Return Policy</a></li>
                                        <li><a href="#">Shipping & Delivery</a></li>
                                        <li><a href="#">Order Tranking</a></li>
                                        <li><a href="#">List of Shops</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <p className="mb-20">Enter your email below to be the first to know about
                                        new collections and product launches.</p>
                                    <form action="#" className="subscribe-form subscribe-form-footer1">
                                        <input type="text" placeholder="Enter your email" />
                                        <button type="submit">Subscribe Now<i className="fas fa-long-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer-bottom-area footer-bottom1-area">
                    <div className="container">
                        <div className="footer-bottom1-inner">
                            <div className="irc-item footer-support">
                                <div className="irc-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.051" height="42.064" viewBox="0 0 43.051 42.064">
                                        <g id="customer-support" transform="translate(-0.643 -1.361)">
                                            <path id="Path_51" data-name="Path 51"
                                                d="M41.05,19.581a18.893,18.893,0,0,0-37.763,0A4.444,4.444,0,0,0,.643,23.639v4.985a4.445,4.445,0,0,0,4.44,4.44,2.876,2.876,0,0,0,2.873-2.873v-8.12a2.867,2.867,0,0,0-2.591-2.845,16.834,16.834,0,0,1,33.605,0,2.867,2.867,0,0,0-2.588,2.844V30.19a2.866,2.866,0,0,0,2.626,2.847V35.09a4.2,4.2,0,0,1-4.191,4.19h-3.1a3.085,3.085,0,0,0-2.929-2.085h-3.2a3.071,3.071,0,0,0-1.3.286,3.122,3.122,0,0,0-1.812,2.83,3.12,3.12,0,0,0,3.116,3.116h3.2a3.128,3.128,0,0,0,2.931-2.086h3.1a6.257,6.257,0,0,0,6.25-6.25V32.671a4.443,4.443,0,0,0,2.626-4.049V23.637a4.444,4.444,0,0,0-2.644-4.056ZM5.9,22.071V30.19A.814.814,0,0,1,5.082,31,2.384,2.384,0,0,1,2.7,28.623V23.638a2.383,2.383,0,0,1,2.381-2.381A.814.814,0,0,1,5.9,22.071ZM29.818,40.53a1.061,1.061,0,0,1-1.034.837h-3.2a1.056,1.056,0,0,1-.438-2.017,1.023,1.023,0,0,1,.438-.1h3.2a1.061,1.061,0,0,1,1.034,1.275ZM41.634,28.623A2.384,2.384,0,0,1,39.254,31a.814.814,0,0,1-.813-.813V22.071a.814.814,0,0,1,.813-.813,2.384,2.384,0,0,1,2.381,2.381Z"
                                                transform="translate(0 0)" fill="#171717" />
                                            <path id="Path_52" data-name="Path 52"
                                                d="M33.629,33.546a4.368,4.368,0,0,0,4.363-4.363v-8.89a4.369,4.369,0,0,0-4.363-4.363H20.294a4.368,4.368,0,0,0-4.363,4.363v8.89a4.368,4.368,0,0,0,4.363,4.363h.082v2.3a2.139,2.139,0,0,0,2.136,2.145,2.094,2.094,0,0,0,1.507-.636l3.833-3.812ZM26.7,31.786l-4.148,4.125a.052.052,0,0,1-.071.016.069.069,0,0,1-.047-.078V32.516a1.03,1.03,0,0,0-1.03-1.03H20.295a2.306,2.306,0,0,1-2.3-2.3v-8.89a2.306,2.306,0,0,1,2.3-2.3H33.63a2.309,2.309,0,0,1,2.3,2.3v8.89a2.306,2.306,0,0,1-2.3,2.3h-6.2a1.031,1.031,0,0,0-.726.3Z"
                                                transform="translate(-4.793 -4.568)" fill="#171717" />
                                            <path id="Path_53" data-name="Path 53"
                                                d="M24.019,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,24.019,26.787Z"
                                                transform="translate(-6.853 -7.972)" fill="#171717" />
                                            <path id="Path_54" data-name="Path 54"
                                                d="M31.305,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,31.305,26.787Z"
                                                transform="translate(-9.137 -7.972)" fill="#171717" />
                                            <path id="Path_55" data-name="Path 55"
                                                d="M38.591,26.787a1.519,1.519,0,1,0,1.521,1.519A1.522,1.522,0,0,0,38.591,26.787Z"
                                                transform="translate(-11.422 -7.972)" fill="#171717" />
                                        </g>
                                    </svg>

                                </div>
                                <div className="irc-item-content">
                                    <p>8:30 AM - 10:30</p>
                                    <div className="support-number"><a href="tel:555-900-888">555 - 900 - 888</a></div>
                                </div>
                            </div>
                            <div className="cards-wrapper cards-wrapper-lines">
                                <p>We Support</p>
                                <div className="card-links">
                                    <ul>
                                        <li><a href="#"><Image height={50} width={50} src="/assets/img/cards/card-1.webp" alt="card-img" /></a></li>
                                        <li><a href="#"><Image height={50} width={50} src="/assets/img/cards/card-2.webp" alt="card-img" /></a></li>
                                        <li><a href="#"><Image height={50} width={50} src="/assets/img/cards/card-3.webp" alt="card-img" /></a></li>
                                        <li><a href="#"><Image height={50} width={50} src="/assets/img/cards/card-4.webp" alt="card-img" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="apps-download">
                                <div className="apps-download-text">
                                    <h5>Download App on Mobile</h5>
                                    <p>Free home delivery on your first purchase</p>
                                </div>
                                <div className="app-links">
                                    <ul>
                                        <li><a href="#"><Image height={200} width={200} src="/assets/img/download/app-store-1.webp" alt="app-img" /></a></li>
                                        <li><a href="#"><Image height={200} width={200} src="/assets/img/download/app-store-2.webp" alt="app-img" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area copyright1-area">
                    <div className="container">
                        <div className="copyright1-inner">
                            <div className="copyright-link">
                                <a href="#" className="text-btn">Privacy Policy</a>
                                <a href="#" className="text-btn">Terms & Conditions</a>
                                <a href="#" className="text-btn">Sitemap</a>
                            </div>
                            <div className="social-wrapper">
                                <p>Follow Us:</p>
                                <div className="social__links">
                                    <ul>
                                        <li><a href="#"><BsFacebook /></a></li>
                                        <li><a href="#"><BsTwitter /></a></li>
                                        <li><a href="#"><BsInstagram /></a></li>
                                        <li><a href="#"><BsPinterest /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer area end  */}

            {/* pre loader area start */}
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                            <Image height={200} width={200} src="/assets/img/logo/logo-text.png" alt="logo-img" />
                            {/* <Image height={200} width={200} className="loading-logo" src="/assets/img/logo/preloader.svg" alt="img" /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* pre loader area end */}

            {/* back to top start */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            {/* back to top end */}
        </>
    );
}

export default Home
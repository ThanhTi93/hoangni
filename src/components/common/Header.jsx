import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
     <header>
      <div class="container">
        <div class="header-main flex">
          <div class="header-logo">
            <a href="" class="logo">Magazines</a>
          </div>
          <nav class="header-nav inline-flex">
            <ul class="flex">
              <li ><a href="index.html">Home</a></li>
              
              <li class="has-child">
                <a href="blog.html">Blog</a>
                <div class="nav-child">
                  <a href="">Tech</a>
                  <a href="">Sport</a>
                  <a href="">Fashion</a>
                </div>
              </li>
              <Link to={"/category"} class="actived">Category</Link>
              <li><a href="product.html">Product</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="customer.html">Customer</a></li>
            </ul>
            <div class="header-cart">
              <i class="fa fa-shopping-cart"></i>
              <span>0</span>
            </div>
          </nav>
          
          <div id="toggle_nav">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;
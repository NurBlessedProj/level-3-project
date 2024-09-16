"use client";
import Link from "next/link";
import React from "react";

function Content() {
  return (
    <main className="sect">
      <section id="feature" class="section-p1">
        <div class="fe-box">
          <img src="img/features/f1.png" alt="" />
          <h6>Free Delivery</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f2.png" alt="" />
          <h6>Online Reservations</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f3.png" alt="" />
          <h6>Special Discounts</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f4.png" alt="" />
          <h6>Happy Hour Deals</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f5.png" alt="" />
          <h6>Exclusive Events</h6>
        </div>
        <div class="fe-box">
          <img src="img/features/f6.png" alt="" />
          <h6>24/7 Customer Support</h6>
        </div>
      </section>

      <section id="product1" class="section-p1">
        <h2>Featured Drinks</h2>
        <p>Discover Our Signature Cocktails and Local Specialties</p>
        <div class="pro-container">
          <div class="pro">
            <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div class="des">
              <span>Special Cocktails</span>
              <h5>Classic Mojito</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$10</h4>
            </div>
            <Link href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </Link>
          </div>
          <div class="pro">
            <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div class="des">
              <span>Local Specialties</span>
              <h5>Matango Punch</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$8</h4>
            </div>
            <Link href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </Link>
          </div>
          <div class="pro">
            <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div class="des">
              <span>Fine Wines</span>
              <h5>Chardonnay</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$12</h4>
            </div>
            <Link href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </Link>
          </div>
          <div class="pro">
            <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div class="des">
              <span>Special Cocktails</span>
              <h5>Bantu Breeze</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$11</h4>
            </div>
            <Link href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </Link>
          </div>
          {/* Continue similarly for other drinks... */}
        </div>
      </section>

      <section id="banner" class="section-m1">
        <h4>Exclusive Offers</h4>
        <h2>
          Up to <span>50% Off</span> on Selected Drinks
        </h2>
        <button class="normal">Explore More</button>
      </section>

      <section id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Explore Our Latest Beverages and Seasonal Specials</p>
        {/* Repeat similar blocks for showcasing new drinks */}
      </section>

      <section id="sm-banner" class="section-p1">
        <div class="banner-box">
          <h4>Exclusive Deals</h4>
          <h2>Buy 2, Get 1 Free</h2>
          <span>The best local drinks are on special promotion at our bar</span>
          <button class="white">Learn More</button>
        </div>
        <div class="banner-box banner-box2">
          <h4>Seasonal Offers</h4>
          <h2>Upcoming Events</h2>
          <span>Join us for live music nights and themed parties!</span>
          <button class="white">Reserve Now</button>
        </div>
      </section>

      <section id="banner3">
        <div class="banner-box">
          <h2>HAPPY HOUR</h2>
          <h3>Every Day from 5 PM to 7 PM - 30% OFF</h3>
        </div>
        <div class="banner-box banner-box2">
          <h2>NEW BEER COLLECTION</h2>
          <h3>Local and International Brands Available</h3>
        </div>
        <div class="banner-box banner-box3">
          <h2>SIGNATURE COCKTAILS</h2>
          <h3>Discover Our Unique Blends</h3>
        </div>
      </section>
    </main>
  );
}

export default Content;

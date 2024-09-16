"use client";
import React from "react";
import style from "./Banner.module.css";

function Banner() {
  return (
    <>
      <section id="hero">
        <h4
          style={{
            color: "white",
          }}
        >
          Welcome to Our Bar
        </h4>
        <h2  style={{
            color: "white",
          }}>Experience the Best</h2>
        <h1>Drinks, Music, and Fun!</h1>
        <button  style={{
            color: "white",
          }} className={style.primaryButton}>Explore Now</button>
      </section>
    </>
  );
}

export default Banner;

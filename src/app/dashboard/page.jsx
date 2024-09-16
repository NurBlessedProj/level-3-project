"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { appContext } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";

function page() {
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle image upload and create preview
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
  };
  const handleImageRemove = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const navigate = useRouter();
  let [products, setProducts] = useState([]);
  console.log(products);
  const [darkMode, setDarkMode] = useContext(appContext);

  const getProducts = async () => {
    try {
      const products = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=0febce395055c78ab86a029443008afc&page=2"
      );
      const response = await products.json();
      const data = response.results;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  console.log(darkMode);
  const [active, SetActive] = useState("all");
  return (
    <section className={`${style.dashboard} ${darkMode && style.dark}`}>
      <div className={`${style.left} ${darkMode && style.Dark}`}>
        <Link href="/" className="logoND">
          <img
            src="/Screenshot__306_-removebg-preview.png"
            className="logo"
            alt=""
          />
        </Link>
        <div className={style.menu}>
          <h1>Menu</h1>
          <ul>
            <li
              className={active === "all" && style.active}
              onClick={() => SetActive("all")}
            >
              <i class="fa-solid fa-grip"></i>
              <p>All Products</p>
            </li>
            <li
              className={active === "add" && style.active}
              onClick={() => SetActive("add")}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
              <p>Add products</p>
            </li>
            {/* <li
              className={active === "ex" && style.active}
              onClick={() => SetActive("ex")}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>

              <p>Done</p>
            </li> */}
          </ul>
        </div>
        <div className={style.menu}>
          <h1>General</h1>
          <ul>
            <li
              className={active === "setting" && style.active}
              onClick={() => SetActive("setting")}
            >
              <i class="fa-solid fa-gear"></i>
              <p>Settings</p>
            </li>
            <li
              className={active === "help" && style.active}
              onClick={() => SetActive("help")}
            >
              <i class="fa-solid fa-circle-info"></i>
              <p>Need help?</p>
            </li>
            <li
              className={active === "help" && style.active}
              onClick={() => {
                SetActive("help");
                navigate.back();
              }}
            >
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              <p>Back</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.right}>
        <div className={`${style.rnav} ${darkMode && style.Dark}`}>
          <h1>Dashboard</h1>
          <div className={style.mid}>
            <div class="container">
              <label for="switch" class="toggle">
                <input
                  type="checkbox"
                  class="input"
                  id="switch"
                  checked={darkMode && true}
                />
                <div
                  class="icon icon--moon"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="32"
                    height="32"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>

                <div
                  class="icon icon--sun"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="32"
                    height="32"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                  </svg>
                </div>
              </label>
            </div>

            <div className={`${style.search} ${darkMode && style.Darkb}`}>
              <input type="search" placeholder="Search here" />
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className={`${style.notification} ${darkMode && style.Darkb}`}>
              <i class="fa-regular fa-bell" aria-hidden="true"></i>
            </div>
            <div className={style.profile}></div>
          </div>
        </div>
        {active === "all" && (
          <>
            <div className={`${style.overview} ${darkMode && style.DarkBtn}`}>
              <h1>Overview</h1>
              <button onClick={() => SetActive("add")}>Add New Product</button>
            </div>
            <div className={`${style.info} ${darkMode && style.Dark}`}>
              <div className={style.infoNav}>
                <div className={style.leftInfoNav}>
                  <p>
                    N<sup>o</sup> of products :
                  </p>
                  <p>4</p>
                </div>
                <div className={style.filter}>
                  <p>filter </p>
                  <i class="fas fa-filter    "></i>
                </div>
              </div>
              <div className={style.products}>
                <div class={style.proContainer}>
                  <div
                    class={style.pro}
                    style={{
                      borderColor: darkMode && "#3e4042",
                    }}
                  >
                    <img
                      src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div class="des">
                      <span>Local Specialties</span>
                      <h5>Matango Punch</h5>
                    </div>
                    <div className={style.buttons}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </div>
                  <div
                    class={style.pro}
                    style={{
                      borderColor: darkMode && "#3e4042",
                    }}
                  >
                    <img
                      src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div class="des">
                      <span>Local Specialties</span>
                      <h5>Matango Punch</h5>
                    </div>
                    <div className={style.buttons}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </div>
                  <div
                    class={style.pro}
                    style={{
                      borderColor: darkMode && "#3e4042",
                    }}
                  >
                    <img
                      src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div class="des">
                      <span>Local Specialties</span>
                      <h5>Matango Punch</h5>
                    </div>
                    <div className={style.buttons}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </div>
                  <div
                    class={style.pro}
                    style={{
                      borderColor: darkMode && "#3e4042",
                    }}
                  >
                    <img
                      src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div class="des">
                      <span>Local Specialties</span>
                      <h5>Matango Punch</h5>
                    </div>
                    <div className={style.buttons}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </>
        )}
        {active === "add" && (
          <>
            <div className={`${style.overview} ${darkMode && style.DarkBtn} `}>
              <h1>Add a product</h1>
            </div>
            <div
              className={`${style.info} ${style.adder} ${
                darkMode && style.Dark
              }`}
            >
              <form
                action=""
                className={`${darkMode && style.Darkf} ${style.form}`}
              >
                <div className={style.leftA}>
                  <div className={style.line}>
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className={style.line}>
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Product Description"
                    ></textarea>
                  </div>
                  <div className={style.line}>
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Product Price"
                    />
                  </div>
                  <div className={style.line}>
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
                      <option value="">Select Category</option>
                      <option value="beer">Beer</option>
                      <option value="wine">Wine</option>
                      <option value="cocktail">Cocktail</option>
                      <option value="snack">Snack</option>
                      {/* Add more categories as needed */}
                    </select>
                  </div>
                  <div className={style.line}>
                    <label htmlFor="stock">Stock Quantity</label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      placeholder="Stock Quantity"
                    />
                  </div>
                </div>
                <div className={style.rightA}>
                  <div className={style.line}>
                    <label htmlFor="supplier">Supplier</label>
                    <input type="text" placeholder="Supplier" />
                  </div>
                  {/* Image Upload Section */}
                  <div className={style.line}>
                    <label htmlFor="image" className={style.customFileInput}>
                      Upload Images
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className={style.fileInput}
                      />
                    </label>
                  </div>
                  {/* Preview Section */}
                  <div className={style.preview}>
                    <h1>Preview of Image(s)</h1>
                    <div
                      className={`${style.previewI} ${darkMode && style.Darkb}`}
                    >
                      {selectedImages.map((image, index) => (
                        <div key={index} className={style.previewImage}>
                          <img src={image} alt={`Product Preview ${index}`} />
                          <button
                            type="button"
                            onClick={() => handleImageRemove(index)}
                            className={style.removeBtn}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={style.line}>
                    <button type="submit" className="submit-btn">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default page;

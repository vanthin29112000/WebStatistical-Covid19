import React, { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
   const [isShowClearInput, setIsShowClearInput] = useState(false);
   const [searchWord, setSearchWord] = useState("");

   const onChangeSearchWord = (e) => {
      const keySearch = e.target.value;

      setSearchWord(keySearch);

      if (keySearch !== "") {
         setIsShowClearInput(true);
      } else {
         setIsShowClearInput(false);
      }
   };

   const onClearKeySearch = () => {
      setSearchWord("");
      setIsShowClearInput(false);
   };

   return (
      <div className="grid wide ">
         <div className="row sm-gutter navbar__container">
            {/* Logo */}
            <div className="col l-3 m-8 c-8">
               <div className="navbar__logo ">
                  <img src="\images\tải xuống.png" alt="logo.png"></img>
                  <p className="navbar__title">Covid News</p>
               </div>
            </div>

            {/* Search - PC*/}
            <div className="col l-4 m-0 c-0">
               <div className="navbar__search ">
                  <i className="fas fa-search"></i>
                  <input
                     placeholder="Tìm kiếm theo thành phố, quốc gia,..."
                     onChange={onChangeSearchWord}
                     value={searchWord}
                  ></input>
                  {isShowClearInput && (
                     <i
                        className="fas fa-times close"
                        onClick={onClearKeySearch}
                     ></i>
                  )}
               </div>
            </div>

            {/* List page - PC*/}
            <div className="col l-5 c-0 m-0">
               <div className="list-page ">
                  <p>Trang chủ</p>
                  <p>Quy Tắc 5k</p>
                  <p>Giới Thiệu</p>
               </div>
            </div>

            {/* bars - mobile*/}
            <div className="col l-0 m-4 c-4">
               <label htmlFor="nav-mobile-input" className="list-page__bars">
                  <i className="fas fa-bars" />
               </label>

               <label
                  htmlFor="nav-search__input"
                  className="navbar-search__icon"
               >
                  <i className="fas fa-search" />
               </label>
            </div>

            {/* Nav-mobile */}
            <input type="checkbox" id="nav-mobile-input" />

            <label htmlFor="nav-mobile-input" className="nav__overlay" />

            <div className="nav-mobile">
               <label htmlFor="nav-mobile-input">
                  <i className="fas fa-times close-nav" />
               </label>

               <div className="list-page__mobile ">
                  <p>
                     <i className="fas fa-home"></i>Trang chủ
                  </p>
                  <p>
                     <i className="fas fa-bookmark"></i>Quy Tắc 5k
                  </p>
                  <p>
                     <i className="fas fa-address-card"></i>Giới Thiệu
                  </p>
               </div>
            </div>
            {/* Search moblie */}

            <input type="checkbox" id="nav-search__input" />

            <div className="grid wide navbar__search-mobile">
               <div className="row">
                  <div className="navbar__search nav__mobile-input col m-o-12 c-0-12">
                     <i className="fas fa-search"></i>
                     <input
                        placeholder="Tìm kiếm theo thành phố, quốc gia,..."
                        onChange={onChangeSearchWord}
                        value={searchWord}
                     ></input>
                     {isShowClearInput && (
                        <i
                           className="fas fa-times close"
                           onClick={onClearKeySearch}
                        ></i>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default NavBar;

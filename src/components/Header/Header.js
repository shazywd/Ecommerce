// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import cartIcon from "../../images/cart.svg";
// import CartContext from "../../store/cart-context";
// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import ProductsContext from "../../store/products-context";
// const Header = () => {
//   const searchCtx = useContext(ProductsContext);
//   const cartCtx = useContext(CartContext);
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       console.log(window.innerWidth, "new width");
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <header className="header">
//       <h2 className="web-name">
//         <Link to="/">Ecommerence</Link>
//       </h2>
//       {width > 700 && (
//         <div className="tabsLinks">
//           <NavLink to="/products/category/electronics">Electronics</NavLink>
//           <NavLink to="/products/category/men's clothing">Mens Fashion</NavLink>
//           <NavLink to="/products/category/women's clothing">
//             Women's Fashion
//           </NavLink>
//           <NavLink to="/products/category/jewelery">Jewelery</NavLink>
//         </div>
//       )}

//       <div className="">
//         <input
//           type="search"
//           name=""
//           className="headerSearch"
//           id=""
//           placeholder="Search"
//           value={searchCtx.search}
//           onChange={(e) => searchCtx.addSearch(e.target.value)}
//         />
//         <div className="searchIcon"></div>
//       </div>
//       <Link className="cartBtn" to="/cart">
//         <div className="noInCarts">{cartCtx.items.length}</div>
//         <div className="cartIcon">
//           <img src={cartIcon} alt="" />
//         </div>
//       </Link>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import ProductsContext from "../../store/products-context";
import cartIcon from "../../images/cart.svg";
import "./Header.css";

const Header = () => {
  const searchCtx = useContext(ProductsContext);
  const cartCtx = useContext(CartContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <h2 className="web-name">
        <Link to="/">Ecommerce</Link>
      </h2>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`tabsLinks ${menuOpen ? "open" : ""}`}>
        <NavLink to="/products/category/electronics">Electronics</NavLink>
        <NavLink to="/products/category/men's clothing">Mens Fashion</NavLink>
        <NavLink to="/products/category/women's clothing">
          Women's Fashion
        </NavLink>
        <NavLink to="/products/category/jewelery">Jewelery</NavLink>
      </nav>

      <div className="search-container">
        <input
          type="search"
          className="headerSearch"
          placeholder="Search"
          value={searchCtx.search}
          onChange={(e) => searchCtx.addSearch(e.target.value)}
        />
      </div>

      <Link className="cartBtn" to="/cart">
        <div className="noInCarts">{cartCtx.items.length}</div>
        <div className="cartIcon">
          <img src={cartIcon} alt="Cart" />
        </div>
      </Link>
    </header>
  );
};

export default Header;

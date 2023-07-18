import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarText } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  const numberOfItemsInCart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar style={{ backgroundColor: "#ebebeb" }}>
        <Nav>
          <NavItem>
            <NavbarBrand>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/"
              >
                ReduxToolkit Shop
              </NavLink>
            </NavbarBrand>
            <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
              Product
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          {/* <NavLink className="me-5" to="/cart"><FaCartPlus className="fs-2" /><span className="fs-4">{numberOfItemsInCart.length}</span></NavLink> */}
          <NavLink className="me-5" to="/cart">
            <Badge color="error" badgeContent={numberOfItemsInCart.length}>
              <ShoppingCartIcon style={{ color: "black" }} />
            </Badge>
          </NavLink>
        </NavbarText>
      </Navbar>
    </>
  );
};

export default NavBar;

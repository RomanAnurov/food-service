import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const { isBurger } = props;

  return (
    <section className={`navigation ${isBurger && "navigation_burger"}`}>
      <div
        className={`navigation__container ${
          isBurger && "navigation__container_burger"
        }`}
      >
        <nav
          className={`navigation__list ${
            isBurger && "navigation__list_burger"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__link ${
                isActive && isBurger
                  ? "navigation__link_burgeractive"
                  : isBurger
                  ? "navigation__link_burger"
                  : isActive
                  ? "navigation__link_active"
                  : ""
              }`
            }
          >
            Доставка еды
          </NavLink>
          <NavLink
            to="/cakes"
            className={({ isActive }) =>
              `navigation__link ${
                isActive && isBurger
                  ? "navigation__link_burgeractive"
                  : isBurger
                  ? "navigation__link_burger"
                  : isActive
                  ? "navigation__link_active"
                  : ""
              }`
            }
          >
            Торты на заказ
          </NavLink>
          <NavLink
            to="/special-menu"
            className={({ isActive }) =>
              `navigation__link ${
                isActive && isBurger
                  ? "navigation__link_burgeractive"
                  : isBurger
                  ? "navigation__link_burger"
                  : isActive
                  ? "navigation__link_active"
                  : ""
              }`
            }
          >
            Специальное меню
          </NavLink>
        </nav>
      </div>
    </section>
  ); 
}

export default Navigation;

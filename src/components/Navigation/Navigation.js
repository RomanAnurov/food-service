import React from "react";
import "./Navigation.scss";
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
    <section className="navigation">
      <div className="navigation__container">
        <nav className="navigation__list">
          <NavLink to="/" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ''}`} >Доставка еды</NavLink>
          <NavLink to="/cakes" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ''}`} >Торты на заказ</NavLink>
          <NavLink to="/special-menu" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ''}`} >Специальное меню</NavLink>
        </nav>
      </div>
    </section>
  )
}

export default Navigation;
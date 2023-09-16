import React from "react";
import  "./Navigation.scss";
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
   <section className="navigation">
     <nav className="navigation__container">
       <NavLink to="/"  className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} >Доставка еды</NavLink>
       <NavLink to="/cakes"  className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} >Торты на заказ</NavLink>
       <NavLink to="/special-menu"  className={({isActive}) =>`navigation__link ${isActive ? "navigation__link_active" : ''}`} >Специальное меню</NavLink>
     </nav>
   </section>
  )
}

export default Navigation;
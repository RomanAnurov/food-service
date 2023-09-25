import React from "react";
import "./Footer.scss";




function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <ul>
          <h4 className="footer__links">Меню и каталоги</h4>
          <li><a className="footer__link" href="#fooddelivery">Кулинария</a></li>
          <li><a className="footer__link" href="#fooddelivery">Банкетное меню</a></li>
          <li><a className="footer__link" href="#fooddelivery">Кондитерская</a></li>
          <li><a className="footer__link" href="#fooddelivery">Корпоративные обеды</a></li>
        </ul>

        <ul>
          <h4 className="footer__links">Покупателю</h4>
          <li><a className="footer__link" href="#fooddelivery">Как заказать кулинарию</a></li>
          <li><a className="footer__link" href="#fooddelivery">Как заказать торт</a></li>
          <li><a className="footer__link" href="#fooddelivery">Оплата и доставка</a></li>
          <li><a className="footer__link" href="#fooddelivery">Бонусная программа</a></li>
          <li><a className="footer__link" href="#fooddelivery">Акции</a></li>
        </ul>

        <ul>
          <h4 className="footer__links">Компания</h4>
          <li><a className="footer__link" href="#fooddelivery">О нас</a></li>
          <li><a className="footer__link" href="#fooddelivery">Отзывы</a></li>
          <li><a className="footer__link" href="#fooddelivery">Новости</a></li>
          <li><a className="footer__link" href="#fooddelivery">Вакансии</a></li>
          <li><a className="footer__link" href="#fooddelivery">Сотрудничество</a></li>
          <li><a className="footer__link" href="#fooddelivery">Сертификаты</a></li>
        </ul>

        <ul>
          <h4 className="footer__links" id="grafik">График работы</h4>
          <li><p className="footer__link footer__link_large">График кулинарий</p></li>
          <li><p className="footer__link footer__link_large" >Пн - Сб <span>8:00 - 21:00</span></p></li>
          <li><p className="footer__link footer__link_large" >Вс <span>11:00 - 21:00</span></p></li>
          <li><p className="footer__link footer__link_large">График доставки</p></li>
          <li><p className="footer__link footer__link_large" >Пн - Сб <span>8:00 - 21:00</span></p></li>
          <li><p className="footer__link footer__link_large" >Вс <span>11:00 - 21:00</span></p></li>
        </ul>

        <ul>
          <h4 className="footer__links footer__links_last">Контакты</h4>
          <li><p className="footer__link">+7 473 261-04-30</p></li>
          <li><p className="footer__link">gmail@mail.ru</p></li>
          <li><p className="footer__link">Адреса кулинарий</p></li>
          
        </ul>

      </div>
      <div className="footer__info">
        <p className="footer__info-text">© ООО «Мосттрейд». Все права защищены. Политика конфиденциальности</p>
        <p className="footer__info-text">Разработано в Вебфлай</p>
      </div>


    </section>

  )

}

export default Footer;
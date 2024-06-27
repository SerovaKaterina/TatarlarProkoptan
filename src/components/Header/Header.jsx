import style from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import BurgerMenu from "./BurgerMenu";
import TelegramIcon from "../../assets/images/telegram.svg";
import MailIcon from "../../assets/images/mail.svg";
import PhoneIcon from "../../assets/images/phone.svg";
import FamilyIconImage from "../../assets/images/family.svg";
import { useState } from "react";
import { NavLink }  from  "react-router-dom";
import ModalForm from "../ModalForm/ModalForm";

const Header = () => {
  const [isModalOpened, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (value) => {
    setIsModalOpen(value);
  };
  return (
    <>
      <header className={style.header}>
        <div className={style.logo__container}>
          <img src={logo} alt="Logo" className={style.logo} />
        </div>
        <nav className={style.navbar}>

          {/*Links оставлены для теста*/}
          {/*





        <Link to="/we-are-together">We Are Together</Link> */}
          <ul className={style.nav}>
            <li className={style.nav__link}><NavLink to="/about-us">About Us</NavLink></li>
            <li className={style.nav__link}><NavLink to="/events">Events</NavLink></li>
            <li className={style.nav__link}><NavLink to="/culture">Culture</NavLink></li>
            <li className={style.nav__link}><NavLink to="/sabantui">Sabantui</NavLink></li>
            <li className={style.nav__link}><NavLink to="/charity">Charity</NavLink></li>
            <li className={style.nav__link}><NavLink to="/partners">Partners</NavLink></li>
          </ul>
          <BurgerMenu />
        </nav>
        <div className={style.action__container}>
          <div className={style.icons}>
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TelegramIcon} alt="Telegram" className={style.icon} />
            </a>
            <a href="mailto:rahma_li@mail.ru">
              <img src={MailIcon} alt="Mail" className={style.icon} />
            </a>
            <a href="tel:+79050698829">
              <img src={PhoneIcon} alt="Phone" className={style.icon} />
            </a>
          </div>
          <div className={style.family__and__button}>
            <img
              src={FamilyIconImage}
              alt="Family"
              className={style.family__icon}
            />
            <button className={style.button} onClick={openModal}>
              Вступить в автономию
            </button>
          </div>
        </div>
      </header>
      {isModalOpened && <ModalForm onClose={closeModal} />}
    </>
  );
};

export default Header;

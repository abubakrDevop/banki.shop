import React from "react";
import cls from '../header/Header.module.scss'
import { Link } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

export const menuLinks = [
  {
    id: uuidv4(),
    to: 'catalog',
    title: 'Каталог',
  },
  {
    id: uuidv4(),
    to: 'delivery',
    title: 'Доставка',
  },
  {
    id: uuidv4(),
    to: 'payment',
    title: 'Оплата',
  },
  {
    id: uuidv4(),
    to: 'contacts',
    title: 'Контакты',
  },
  {
    id: uuidv4(),
    to: 'about-company',
    title: 'О компании',
  },
]

export const handleSearch = (data) => {}

export const Header = () => {

  return (
    <header className={cls.header}>

      <section className={cls.header__menu}>
        {
          menuLinks.map(item => (
            <Link 
              key={item.id} 
              to={item.to}
              className={cls.menu_item}
            >
              {item.title} 
            </Link>
          ))
        }
      </section>

      <section className={cls.header__searchbox}>
        <div className={cls.searchbox_search}>
          <input 
            className={cls.searchbox_search_input} 
            type="text" 
            placeholder="Поиск по названию картины"
            onChange={e => handleSearch(e.target.value)}
          />
          <button className={cls.searchbox_search_button}> Найти </button>
        </div>
      </section>

    </header>
  )
}
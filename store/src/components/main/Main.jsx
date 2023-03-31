import React from "react";
import cls from '../main/Main.module.scss'
import {v4 as uuidv4} from 'uuid'
import { IoCheckmarkOutline } from 'react-icons/io5'

export const Main = () => {
  const cards = [
    {
      id: uuidv4(),
      image: './1.png',
      name: '<<Рождение Венеры>>',
      author: 'Сандро Боттичелли',
      price: {
        was: '2 000 000$',
        now: '1 000 000$',
      },
      button: true,
    },
    {
      id: uuidv4(),
      image: './2.png',
      name: '<<Тайная встреча>>',
      author: 'Леонардо да Винчи',
      price: {
        was: '',
        now: '3 000 000$',
      },
      button: true,
    },
    {
      id: uuidv4(),
      image: './3.png',
      name: '<<Сотворение Адама>>',
      author: 'Микеланджела',
      price: {
        was: '6 000 000$',
        now: '5 000 000$',
      },
      button: false,
    },
    {
      id: uuidv4(),
      image: './4.png',
      name: '<<Урок анатомии>>',
      author: 'Рембрандт',
      price: {
        was: '',
        now: '',
      },
      button: 'sold',
    },
  ]

  const [changedCards, setChangedCards] = React.useState(cards)

  const handleChange = (id) => {
    setChangedCards(changedCards.map(item => item.id === id ? {...item, button: item.button = 'loading'} : item))
		setTimeout(() => {
      setChangedCards(changedCards.map(item => item.id === id ? {...item, button: !item.button} : item))
    }, 2500)

    localStorage.setItem('saveState', JSON.stringify(changedCards))
	}

  const [{button}] = JSON.parse(localStorage.getItem('saveState'))

  //нужно выташить состояние из локал и просто присвоить массиву

  return (
    <main className={cls.main}>

      <h1 className={cls.main_headtitle}>Картины эпохи Возрождения</h1>

      <section className={cls.main_cards_box}>
        {
          changedCards.map(item => (
            <div key={item.id} className={cls.card}>
              <img className={cls.card_image} src={item.image} alt="pictures" />
              <div className={cls.card_footer}>
                <h1 className={cls.card_name}> {item.name} <br/> {item.author} </h1>
                <section className={cls.card_price_btn}>
                  <p className={cls.card_price}>
                    <span className={cls.card_price_was}> {item.price.was} </span>
                    {item.price.now}
                  </p>

                  { 
                    item.button === 'sold' ? <span className={cls.card_sold}>Продано на аукционе</span>
                    : 
                    item.button === 'loading' ? 
                    <span className={cls.card_loading_box}>
                      <img className={cls.card_loading} src="https://cdn.dribbble.com/users/1465772/screenshots/5726748/____dri.gif" alt="" />
                    </span>
                    :
                    item.button === true ? 
                    <button className={cls.card_buy} onClick={() => handleChange(item.id)} > 
                      Купить 
                    </button> 
                    : 
                    <button disabled className={cls.card_cart} onClick={() => handleChange(item.id)} >
                      <IoCheckmarkOutline className={cls.card_icon} /> В корзине
                    </button>
                  }

                </section>
              </div>
            </div>
          ))
        }
      </section>

    </main>
  )
}
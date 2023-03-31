import React from "react";
import cls from '../footer/Footer.module.scss'
import { menuLinks } from '../header/Header'
import { Link } from 'react-router-dom'
import { IoCall, IoLocation } from 'react-icons/io5'

export const Footer = () => {
  return (
      <footer className={cls.footer}>
        <section className={cls.footer_section}>
				  {
            menuLinks.map(item => (
              <Link 
                key={item.id} 
                to={item.to}
                className={cls.footer_menu}
              >
                {item.title} 
              </Link>
            ))
          }
				</section>
				<section className={cls.footer_section}>
					<span className={cls.section_phone}>
						<IoCall className={cls.section_icon} /> 
						+7 (812)555-55-55
					</span>
					<span className={cls.section_address}>
						<IoLocation className={cls.section_icon} />
						г.Санкт-Петербург,ул.Ефимова, 3
					</span>
				</section>
      </footer>
  )
}
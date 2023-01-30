import React from 'react'

const Header = () => {
  return (
    <>
      <style>{`.info-header,.search-header {
        display:flex;
        list-style-type: none;
        padding-left: 0;
        justify-content: space-between;
      }
       .info-header li, .search-header li{
        padding-right: 10px;  
      }
      a {
      color: black;
      text-decoration: none;
      }
      `}</style>
      <header
        style={{
          width: '1180px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ul className='info-header'>
          <li>Москва</li>
          <li>Акции</li>
          <li>Магазины</li>
          <li>Покупателям</li>
          <li>Юредическим Лицам</li>
          <li>X-XXX-XXX-XX-XX</li>
        </ul>
        <ul
          className='search-header'
          style={{ display: 'flex' }}
        >
          <li>
            <a href='#' style={{ textDecoration: 'none' }}>
              NotDNS
            </a>
          </li>
          <li>
            <button>Каталог</button>
          </li>
          <li></li>
          <li>
            <input
              type='text'
              placeholder='Поиск по сайту'
            />
          </li>
          <li>
            <a>Сравнение</a>
          </li>
          <li>
            <a href='#'>Избранное</a>
          </li>
          <li>
            <a href='#'>Корзина</a>
          </li>
          <li>
            <a href='#'>Войти</a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header

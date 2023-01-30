import React from 'react'

const Cards = () => {
  return (
    <ul style={{ display: 'flex', listStyleType: 'none' }}>
      <li>
        <div
          style={{ width: '300px', paddingRight: '10px' }}
        >
          <h3>Личный кабинет</h3>
          <p>
            Получайте бонусы, отслеживайте заказы и делитесь
            мнением
          </p>
          <a href='#'>Войти</a>
          <a href='#'>Мои заказы</a>
        </div>
      </li>
      <li>
        <div
          style={{ width: '200px', paddingRight: '10px' }}
        >
          <h3>Акции</h3>
          <p>Скидки, рассрочки, выгодные комплектты</p>
        </div>
      </li>
      <li>
        <div
          style={{ width: '200px', paddingRight: '10px' }}
        >
          <h3>Собрать ПК</h3>
          <p>Без проблеи с совместимостью</p>
        </div>
      </li>
      <li>
        <div style={{ width: '200px' }}>
          <h3>Подарочные карты</h3>
          <p>Дарите любимым</p>
        </div>
      </li>
    </ul>
  )
}

export default Cards

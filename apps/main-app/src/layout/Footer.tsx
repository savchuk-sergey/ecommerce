import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        width: '1180px',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <section style={{ minWidth: '240px' }}>
          <h3>Компания</h3>
          <hr />
          <ul>
            <li>
              <a href='#'>О Компании</a>
            </li>
            <li>
              <a href='#'>Новости</a>
            </li>
            <li>
              <a href='#'>Партнерам</a>
            </li>
            <li>
              <a href='#'>Вакансии</a>
            </li>
            <li>
              <a href='#'>Политика конфиденциальности</a>
            </li>
            <li>
              <a href='#'>Персональные данные</a>
            </li>
            <li>
              <a href='#'>Правила продаж</a>
            </li>
            <li>
              <a href='#'>Правила пользования сайта</a>
            </li>
            <li>
              <a href='#'>Сервисные центры</a>
            </li>
          </ul>
        </section>
        <section
          style={{ width: '570px', minWidth: '240px' }}
        >
          <h3>Покупателям</h3>
          <hr />
          <ul style={{ columnCount: 2 }}>
            <li>
              <a href='#'>Как оформить заказ </a>
            </li>
            <li>
              <a href='#'>Способы оплаты </a>
            </li>
            <li>
              <a href='#'>Кредиты </a>
            </li>
            <li>
              <a href='#'>Доставка </a>
            </li>
            <li>
              <a href='#'>Статус заказа </a>
            </li>
            <li>
              <a href='#'>Обмен, возврат, гарантия </a>
            </li>
            <li>
              <a href='#'>Проверка статуса ремонта </a>
            </li>
            <li>
              <a href='#'>Юридическим лицам </a>
            </li>
            <li>
              <a href='#'>Проверка счета </a>
            </li>
            <li>
              <a href='#'>Корпоративные отделы </a>
            </li>
            <li>
              <a href='#'>Подарочные карты </a>
            </li>
            <li>
              <a href='#'>Бонусная программа </a>
            </li>
            <li>
              <a href='#'>Помощь </a>
            </li>
            <li>
              <a href='#'>Обратная связь </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Оставайтесь на связи</h3>
          <hr />
          <b>8-800-77-07-999 (c 03:00 до 22:00)</b>
          <br />
          <a href='#'>Адреса магазинов в г. Москва</a>
          <br />
          <label htmlFor='email'>
            Следите за новинками и акциями:
          </label>
          <br />
          <input
            id='email'
            type='text'
            placeholder='Введите email и подпишитесь'
          />
          <p
            style={{
              display: 'block',
              fontSize: '10px',
              width: '250px',
            }}
          >
            Подписываясь на рассылку, Вы соглашаетесь c
            условиями политики конфиденциальности и политики
            конфиденциальности
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <a href='#'>vk</a>
            <a href='#'>youtube</a>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer

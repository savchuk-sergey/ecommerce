import React from 'react'

const ActualCategory = () => {
  return (
    <section
      style={{ display: 'flex', paddingLeft: '40px' }}
    >
      <div style={{ paddingRight: '30px' }}>
        <h3>Тепло дома</h3>
        <ul>
          <li>Электрокамины</li>
          <li>Конвекторы</li>
          <li>Тепловые завесы</li>
          <li>Электрические котлы отопления</li>
          <li>Увлажнители и аромати</li>
        </ul>
      </div>
      <div style={{ paddingRight: '30px' }}>
        <h3>Все для уборки снега</h3>
        <ul>
          <li>Снегоуборщики, аксессуары</li>
          <li>Тепловые пушки</li>
          <li>Электрические воздуходувки</li>
          <li>Снегоуборочный инвентарь</li>
          <li>Движки, скреперы</li>
        </ul>
      </div>
      <div style={{ paddingRight: '30px' }}>
        <div>
          <h3>Работаем из дома</h3>
          <ul>
            <li>Ноутбуки</li>
            <li>Мониторы</li>
            <li>Персональные компьютеры</li>
            <li>Моноблоки</li>
            <li>Веб-камеры</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ActualCategory

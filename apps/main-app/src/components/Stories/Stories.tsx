import React from 'react'
import StoryCard from './StoryCard/StoryCard'

const Stories = () => {
  return (
    <section>
      <div>
        <button>Все</button>
        <button>Новости</button>
        <button>Блоги</button>
        <button>Обзоры</button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <StoryCard text='Какие бывают гладильные доски' />
        <StoryCard text='Обзор intel core i9 13900KF и сравнение с Ryzen 9 5950X' />
        <StoryCard text='Эксклюзив! Игровые мыши LAMZU' />
        <StoryCard text='Социальная реклама. Я нашёл кошку' />
        <StoryCard text='Новинка! Увлажнитель воздуха Mijia' />
      </div>
    </section>
  )
}

export default Stories

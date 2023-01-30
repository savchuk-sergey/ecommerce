import React, { FC } from 'react'

interface IStoryCard {
  text: string
}

const StoryCard: FC<IStoryCard> = ({ text }) => {
  return (
    <div style={{ width: '100px', paddingRight: '20px' }}>
      {text}
    </div>
  )
}

export default StoryCard

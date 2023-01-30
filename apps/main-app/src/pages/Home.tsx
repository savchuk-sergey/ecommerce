import React from 'react'
import Catalog from '../components/Catalog/Catalog'
import Content from '../components/Content/Content'
import Stories from '../components/Stories/Stories'

const Home = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Catalog />
        <Content />
      </div>
      <Stories />
    </>
  )
}

export default Home

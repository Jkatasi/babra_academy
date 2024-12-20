import React from 'react';
import './news.css'
import {Card} from'../../components'


const News = () => {
  return (
    <div className='babra__news section__padding' id='news'>
      <div className='babra__news-heading'>
        <h1>News</h1>
      </div>
      <div className='babra__news-container'>
        <div className='babra__news_groupA'>
          <Card />
        </div>
      </div>
      <div className='babra__news_groupB'>
      <Card />
      <Card />
      <Card />
      <Card />
       
      </div>

    </div>
  )
}

export default News
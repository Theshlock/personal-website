import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Financial Market Trading App'
              label='Mketbot'
              path='/MketBot'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Like Tinder for Making Tricky Choices!'
              label='Flipic'
              path='/Flipic'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Compassion Training Support Application'
              label='Doctra'
              path='/Doctra'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

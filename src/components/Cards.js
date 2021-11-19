import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT THESE FAMOUS DESTINATIONS IN KASHMIR!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-dal.jpg'
              text="You can't miss this beautiful Dal Lake in Kashmir."
              path='/blogs'
            />
            <CardItem
              src='images/img-parimahal.jpg'
              text='Pari Mahal or Palace of Fairies is one great place to visit.'
              path='/blogs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/srinagar.jpg'
              text='Srinagar – Heaven On Earth '
              path='/blogs'
            />
            <CardItem
              src='images/gulmarg.jpg'
              text='Gulmarg – Ski Your Way'
              path='/blogs'
            />
            <CardItem
              src='images/Sonamarg.jpg'
              text='Sonamarg – The Land Of Gold'
              path='/blogs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-nish.jpg'
              text='Nishat Garden – Perfect For A Laid-Back Day'
              path='/blogs'
            />
            <CardItem
              src='images/chash.jpg'
              text='Chashma Shahi – One Of The Mughal Gardens'
              path='/blogs'
            />
            <CardItem
              src='images/shali.jpg'
              text='Shalimar Garden – Photographer’s Paradise'
              path='/blogs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pat.jpeg'
              text='Patnitop'
              path='/blogs'
            />
            <CardItem
              src='images/pahalgam.jpg'
              text='Pahalgam'
              path='/blogs'
            />
            <CardItem
              src='images/yus.jpg'
              text='Yusmarg'
              path='/blogs'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
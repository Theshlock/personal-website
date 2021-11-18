import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '.././CardItem';

export default function MketBot() {
  return (
    <>
    <h1 className='MketBot'>MketBot</h1>

    {/* Custom Cards*/}
    <div className='cards'>
      <h1>MketBot is a Cryptocurrency Trading Application I have been privately developing since March 2020</h1>
      <h1>- Employs Technical Analysis to produce Profitable Trading Strategies</h1>
      <h1>- Techniques drawn from Big Data, High Performance Computing and Artificial Intelligence fields</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Github Source Code'
              label='Codebase'
              path = '/MketBot_git'
            />
            <CardItem
              src='images/img-4.jpg'
              text='MAC Hack sprint 2021'
              label='Award Winner'
              path='/Flipic_award'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Flipic.net'
              label='Live Site'
              path='/Flipic_page'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}

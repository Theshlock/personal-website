import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '.././CardItem';

export default function Flipic() {
  return (
    <>
    <h1 className='Flipic'>Flipic</h1>

    {/* Custom Cards*/}
    <div className='cards'>
      <h1>Flipic is a fun approach to collecting data for data-driven decision-making</h1>
      <h1>- Created in 2 weeks</h1>
      <h1>- 2nd place in MAC Hack sprint 2021</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Github Source Code'
              label='Codebase'
              path = '/Flipic_git'
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
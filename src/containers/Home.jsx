/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ mySearch, myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {
        mySearch.length > 0 && (
          <Categories title='Búsqueda'>
            <Carousel>
              {mySearch.map((item) => (
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              ))}
            </Carousel>
          </Categories>
        )
      }
      {
        myList.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {myList.map((item) => (
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />
              ))}
            </Carousel>
          </Categories>
        )
      }
      {
        (trends.length > 0 && mySearch.length === 0) && (
          <Categories title='Tendencias'>
            <Carousel>
              {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )
      }
      {
        (originals.length > 0 && mySearch.length === 0) && (
          <Categories title='Originales de Platzi Video'>
            <Carousel>
              {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mySearch: state.mySearch,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

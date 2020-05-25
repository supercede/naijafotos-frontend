import React from 'react';
import Header from '../../components/header/header.component';
import { Jumbotron } from 'reactstrap';
import './homepage.style.scss';
import SearchBar from '../../components/header/search/search.component';

function Homepage() {
  return (
    <>
      <Header />
      <Jumbotron className='banner'>
        <div className='container'>
          <div className='row row-header'>
            <div className='col-12 col-sm-6'>
              <h1 className='title'>Naijafotos</h1>
              <p className='tagline'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                quas?
              </p>
            </div>
            <div className='col-12'>
              <SearchBar />
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Homepage;

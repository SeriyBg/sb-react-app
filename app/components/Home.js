import React from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

const Home = props => {
  return (
    <MainContainer>
      <h1>Github battle</h1>
      <p className='lead'>Some fancy motto</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get started</button>
      </Link>
    </MainContainer>
  );
}

export default Home;
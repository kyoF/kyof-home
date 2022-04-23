import React from 'react';
import homeImage from '../image/home.png';
import topImage from '../image/top.png';

const Home = () => {
  return (
    <div>
      <h1>kyoF HOME</h1>
      <img src={homeImage} className="home-image" alt='home' />
      <img src={topImage} className="top-image" alt='top' />
      <a href="https://github.com/kyoF/comic-bot">
        <img src="https://gh-card.dev/repos/kyoF/comic-bot.svg" alt='github-comic-bot'/>
      </a>
    </div>
  );
}

export default Home
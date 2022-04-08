import './App.css';
import homeImage from './image/home.png';
import topImage from './image/top.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>kyoF HOME</h1>
        <img src={homeImage} className="home-image" alt="home" />
        <img src={topImage} className="top-image" alt="top" />
        <a href="https://github.com/kyoF/comic-bot">
          <img src="https://gh-card.dev/repos/kyoF/comic-bot.svg" />
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Card from './Modules/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        WebUntis Scraper
      </header>
      <main className="App-main">
      <div className='card'>
      <div className='card-header'>Fetch Your Class ID</div>
      <div className='card-main'>
        
      </div>
      <div className='card-footer'>
        <button className='button'>Scrape</button>
      </div>
    </div>
      </main>
      <footer className='App-footer'>
        <a href="https://www.flaticon.com/free-icons/scraper" title="scraper icons">Scraper icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  );
}

export default App;

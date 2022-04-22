import './App.css';
import Card from './Modules/Card';
import FetchClasses from './Logic/fetchclasses';
import { useState } from 'react';


function collectInputs() {
  
}

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        WebUntis Scraper
      </header>
      <main className="App-main">
      <div className='card'>
      <div className='card-header'>Fetch Your Class ID</div>
      <div className='card-main'>
        <input type='text' id='base_domain' placeholder='School Base Domain'/>
        <input type='text' value={input} id='school_id' placeholder='School ID' onSubmit={e => setInput(e.target.value)}/>
      </div>
      <div className='card-footer'>
        <button className='submit'>Scrape</button>
      </div>
      
    </div>
    <FetchClasses id="K175055" domain={input}/>
      </main>
      <footer className='App-footer'>
        <a href="https://www.flaticon.com/free-icons/scraper" title="scraper icons">Scraper icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  );
}

export default App;

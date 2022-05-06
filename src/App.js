import './App.css';
import Card from './Modules/Card';
import FetchClasses from './Logic/fetchclasses';
import { useState } from 'react';
import FetchPeriods from './Logic/fetchperiods';
import { useForm } from "react-hook-form";

var dom
var schid

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    dom = data.Domain;
    schid = data.SchoolId;
  };
  
  console.log(watch("Domain"));
  return (
    <div className="App">
      <header className="App-header">
        WebUntis Scraper
      </header>
      <main className="App-main">
      <div className='card'>
      <div className='card-header'>Fetch Your Class ID</div>
      <div className='card-main'>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder='base domain' {...register("Domain")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder='school id' {...register("SchoolId")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
      </div>
      <div className='card-footer'>
      </div>
      
    </div>
    <FetchClasses id={schid} domain={dom}/>
    {/* <FetchPeriods id="K175055" domain="hektor.webuntis.com" classid="2025" date="2022-04-02"/> */}
      </main>
      <footer className='App-footer'>
        <a href="https://www.flaticon.com/free-icons/scraper" title="scraper icons">Scraper icons created by Freepik - Flaticon</a>
      </footer>
      
    </div>
  );
}

export default App;

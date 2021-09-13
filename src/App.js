import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const url = "https://meb-test-api.azurewebsites.net/weatherforecast"
  const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
      getData();

      async function getData() {
        const response = await fetch(url);
        const data = await response.json();

        setFetchData(data) ;
      }
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {fetchData && fetchData.map(function(element, index) {
            return <li key={index}>
              <ul>
                <li>{element.date}</li>
                <li>{element.temperatureC}</li>
                <li>{element.temperatureF}</li>
                <li>{element.summary}</li>
              </ul>
            </li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;

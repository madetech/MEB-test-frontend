import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const url = "https://meb-test-api.azurewebsites.net/weatherforecast"
  const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
      getData();


      // fetch('URL_GOES_HERE', {
      //    method: 'post',
      //    headers: new Headers({
      //      'Authorization': 'Basic '+btoa('username:password'),
      //      'Content-Type': 'application/x-www-form-urlencoded'
      //    }),
      //    body: 'A=1&B=2'
      //  });

      async function getData() {
        const response = await fetch(url, {
          method: 'GET',
          mode: "no-cors"
        }).then((res)=>{
          console.log(res)
        });
        console.log(response)
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

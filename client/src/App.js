import Header from './components/Header';
import './App.css';
import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function App() {
  
  const [data, setData] = React.useState(10);


  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
   
    <div className="App">
      <Header/>
      DATA: {data}
    </div>);
}
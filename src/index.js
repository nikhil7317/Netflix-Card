import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';
import Data from './Components/Data';


function  netflixMap(val){
  return(
    <Card 
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}/>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

  <h1> Top three netflix series</h1>
  {Data.map(netflixMap)}

</React.StrictMode>
);



import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Spinner, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [news, setNews]= useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-03-10&sortBy=publishedAt&apiKey=c1cc2ff3828c4083b4b8bf4c4d15826d')
    .then(response => response.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
     {  
        news.length ===0 ?
        <Spinner animation='border'/>
        :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News 
            news={nw}
          ></News>)
        }
      </Row>
     }
     
      

     
      {/* <Button variant='primary'> Click Me </Button> */}
      <br></br>
      <br></br>
      {/* <Spinner animation="border" role="status">
        
         <span className="visually-hidden">Loading...</span>
      </Spinner> */}
      
    </div>
  );
}

export default App;

import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
     
      <BrowserRouter>
      <Switch>
        <Route exact path="/">  
           <Shop></Shop>
        </Route>

        <Route path="/shop">  
           <Shop></Shop>
          </Route>
           <Route  path="/review">  
           <OrderReview></OrderReview>
        </Route>
        <Route path="/inventory">  
           <Inventory></Inventory>
        </Route>
        <Route path="*">  
           <NotFound></NotFound>
        </Route>
       
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

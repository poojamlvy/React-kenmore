import logo from './logo.svg';
import './App.css';
import Home from './pages1/home';
import Header from './pages1/header';
import Footer from './pages1/footer';

import About from './pages1/about';
import Service from './pages1/service';
import Form from './pages1/Form';
import Price from './pages1/price';
import Contact from './pages1/contact';





import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Payment from './pages1/payment';
const history = createBrowserHistory();


function App() {
  return (
    <div>


      <Router history={history}>
        {/* <div> */}
        <Switch>
          <div>



            <Route path="/" component={Home}>


            </Route>
            <Route exact path="/Form" component={Form} />
            {/* <Route exact path="/payment" component={payment} /> */}

          </div>


        </Switch>
        {/* </div> */}

      </Router>



    </div>
  );
}

export default App;


import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import NotMatch from './components/NotMatch/NotMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';





function App() {
  return (
    <div >
      <Header></Header>
     <Router>
       <Switch>
       <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
           <NotMatch></NotMatch>
          </Route>
        </Switch>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

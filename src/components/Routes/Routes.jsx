import React from 'react';
import Map from '../Map/Map';
import Header from '../Header/Header';
import Articles from '../Articles/Articles';
import GarbageLibrary from '../GarbageLibrary/GarbageLibrary';
import Footer from '../Footer/Footer';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Article from '../Articles/Article/Article';
import PropTypes from 'prop-types';
import WastePage from '../GarbageLibrary/WastePage/WastePage';

const Routes = (props) => (
  <Router>
    <Header localeHandler={props.localeHandler} currentLang={props.currentLang} />
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/map'>
        <Map locale={props.locale} />
      </Route>
      <Route path='/garbageLibrary' component={GarbageLibrary} />
      <Route path='/articles' component={Articles} />
      <Route path='/article/:id' component={Article} />
      <Route path='/typeofwaste/:id' component={WastePage} />
    </Switch>
    <Footer />
  </Router>
);

Routes.propTypes = {
  localeHandler: PropTypes.func,
  locale: PropTypes.string,
  currentLang: PropTypes.string,
};

export default Routes;

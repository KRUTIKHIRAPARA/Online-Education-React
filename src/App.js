import React from 'react'
import Header from './heading/header'
import "./App.css"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './heading/home/home'
import About from './heading/about/about'
import courseHome from './heading/courses/coursehome';
import contact from './heading/contacts/contact'
import Footer from './heading/home/footer';
import review from './heading/review/review';


function App() {
  return (
    <>

      <Router>
        <Header />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/course' exact component={courseHome} />       
              <Route path='/contact' exact component={contact} />
              <Route path='/review' exact component={review}/>
          </Switch>
          <Footer />
      </Router>

    </>
  )
}

export default App
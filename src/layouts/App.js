import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
import Navigation from './navigation';
import Footer from './footer';
import Page from './page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
      <header>
        {<Header/>}
      </header>
      <main>
        <aside>
          {<Navigation/>}
        </aside>
        <section className="page">
          {<Page/>}
        </section>
      </main>
      <footer>
        {<Footer/>}
      </footer>
        </div>
      </Router>
    );

  }


}

export default App;


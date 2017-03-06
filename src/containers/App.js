import React, { Component } from 'react';

import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link';
import * as Routes from './routes/Routes';

import Header from '../components/Header';
import Footer from '../components/Footer';

// import asyncComponent from 'helpers/async-component';

// const Home = asyncComponent(() =>
//   System.import('./routes/Home').then(module => module.default)
// );
// const Foo = asyncComponent(() =>
//   System.import('./routes/Foo').then(module => module.default)
// );
// const Bar = asyncComponent(() =>
//   System.import('./routes/Bar').then(module => module.default)
// );

class App extends Component {
    render() {
        return (
            <div className="o-csra-container">
                <Header />
                <main id="content" role="main">
                    <Route exact path="/" component={Routes.Home} />
                    <Route path="/foo" component={Routes.Foo} />
                    <Route path="/bar" component={Routes.Bar} />
                </main>
                <Footer />
            </div>

        );
    }
}

export default App;

import React, { Component } from 'react';

import Route from 'react-router-dom/Route'
import * as Routes from './routes/Routes';

import Header from '../components/Header';
import Footer from '../components/Footer';

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

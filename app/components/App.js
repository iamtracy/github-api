import React from 'react';
import ReactDOM from 'react-dom';
import { 
    ReactRouter, 
    BrowserRouter, 
    Route, 
    NavLink,
    Switch
} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import Results from './Results';

class App extends React.Component {
    render() {
        return ( 
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/battle/results' component={Results}/>
                        <Route path='/popular' component={Popular}/>
                        <Route render={function(){
                            return <p>Not Found</p>
                        }}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
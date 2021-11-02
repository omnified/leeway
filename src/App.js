import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Closet from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/internal/main';

function App() {
    const [closetItems, setClosetItems] = useState([]);

    useEffect(() => {
        const getClosets = async () => {
            try {
                const response = await axios.get(
                    'https://api.npoint.io/eb35d003cd0c1991c6aa'
                );
                const closet = response.data;
                setClosetItems(closet);
            } catch (error) {
                console.log(error);
            }
        };
        getClosets();
    }, []);

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/closet">
                        <Main closetItems={closetItems} />
                    </Route>
                    <Route exact path="/closet/:id">
                        <Closet
                            closetItems={closetItems}
                            setClosetItems={setClosetItems}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;

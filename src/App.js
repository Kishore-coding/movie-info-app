import React from 'react'
import {Provider} from "react-redux";
import {store} from "./store"
import Landing from './components/home/Landing'
import "./index.css"
import {BrowserRouter, Switch,Route} from "react-router-dom"
import  Movie  from './components/home/Movie';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route  path="/movie/:id" component={Movie} />
          </Switch>
        </BrowserRouter>
            
      </Provider>
      
    </div>
  )
}

export default App
//installation 1 npm install --save redux-devtools-extension redux-thunk axios
            // 2. npm i --save react-redux
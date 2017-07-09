/**
 * Created by achao on 2017/7/6.
 */

import  './style/style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory,IndexRoute} from 'react-router'
import IndexComponent from './script/component/IndexComponent'
import MainComponent from './script/component/MainComponent'
import FindComponent from './script/component/FindComponent'
import OrderComponent from './script/component/OrderComponent'
import LoginComponent from './script/component/LoginComponent'
class Root extends React.Component{
    render(){
        return(
                <Router history={hashHistory}>
                    <Route path='/' component={IndexComponent}>
                        <IndexRoute  component={MainComponent}/>
                        <Route path='main' component={MainComponent}/>
                        <Route path='find' component={FindComponent}/>
                        <Route path='order' component={OrderComponent}/>
                        <Route path='login' component={LoginComponent}/>
                    </Route>
                </Router> 
         
            
        )
    }
}
ReactDOM.render(<Root/>,document.querySelector('#root'))
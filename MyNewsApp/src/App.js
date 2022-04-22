import './App.css';

import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {//here key attribute in News tag used for forcefully rendering
  apiKey = process.env.REACT_APP_NEWS_API//define in .env.local for hiding api key(we created enviroment variable and in react,it starts with REACT_app)
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div> 
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>

            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={5} key="general1" country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" key="business" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={5} country="in" key="entertainment" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" key="general" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={5} country="in" key="health" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" key="science" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" key="sports" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={5} country="in" key="technology" category="technology" />}></Route>
          </Routes>
        </Router>

      </div>
    )
  }
}

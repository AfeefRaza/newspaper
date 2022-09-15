import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "dbe57b028aeb41e285a226a94865f7a7"
  const [progress, setProgress] = useState(0)
  const Title = "NewsPaper"
    return (
      <div>
        <Router>
        <NavBar title = {Title}/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
             } />
          <Route exact path="/newsmonkey" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
             } />
          <Route exact path="/business" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>
             } />
          <Route exact path="/entertainment" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>
             } />
          <Route exact path="/general" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
             } />
          <Route exact path="/health" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>
             } />
          <Route exact path="/science" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>
             } />
          <Route exact path="/sports" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>
             } />
          <Route exact path="/technology" element={
            <News title = {Title} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>
          } />
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;
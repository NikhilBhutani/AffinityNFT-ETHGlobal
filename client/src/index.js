import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Home from '../src/components/Home';
import Login from '../src/components/login';
import Channel from '../src/components/channel';
import CreateChannel from '../src/components/create';
import Auth from '../src/components/auth';
import ChannelView from '../src/components/view';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/playground" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/create" element={<CreateChannel />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/homepage' element={<ChannelView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
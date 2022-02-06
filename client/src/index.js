import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import MintNFT from './components/MintNFT/partA'
import Home from '../src/components/Home';
import Login from '../src/components/login';
//import Channel from '../src/components/channel'; <Route path="/channel" element={<Channel />} />
import CreateChannel from '../src/components/create';
import Auth from '../src/components/auth';
import ChannelView from '../src/components/view';
import Add from '../src/components/add';
import User from '../src/components/user';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/mintnft" element={<MintNFT />}/>
        <Route path="/playground" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateChannel />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/homepage' element={<ChannelView />} />
        <Route path='/add' element={<Add />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Moralis } from "moralis";
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
const API_URL = "https://s3nlldgkmodi.usemoralis.com:2053/server";
const API_KEY = "cOep3uCa15236HwUfmeHmvLtTiNBy3t2ePpveLsk";
Moralis.start({ serverUrl: API_URL, appId: API_KEY });
  
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
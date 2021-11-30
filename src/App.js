import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Records from './components/records';
import CreateRecord from './components/create-record';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CreateRecord />
      <Records />
    </Provider>
  )
}

export default App;

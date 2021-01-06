import React from 'react';

import {Routes,Route,useLocation} from 'react-router-dom';

import {UserForm} from './components/User/UserForm';
import {UserRegister} from './components/User/UserRegister';
import {TransactionList} from './components/Transactions/TransactionList';
import {Dashboard} from './components/Dashboard/Dashboard';
import "./App.css";
export function App() {



    return (
      <>
          <Routes >
            <Route exact path="/" element={<UserForm/>}/>
            <Route exact path="/register" element={<UserRegister/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </>
    );

}

export default App

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import ExpenseTracker from './component/ExpenseTracker';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/add' element={<ExpenseTracker/>}></Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

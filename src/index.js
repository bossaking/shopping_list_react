import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ListsContainer from './ListsContainer';
import ShoppingList from "./ShoppingList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ListsContainer/>
        <ShoppingList/>
    </React.StrictMode>
);

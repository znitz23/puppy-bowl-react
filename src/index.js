import React from 'react';
import { createRoot } from 'react-dom/client'
import app from './components/app';
import style from "./style.css"
     



const appElem = document.querySelector('#app');
const root = createRoot(appElem)
root.render(app)

import * as React from 'react';
import { Link } from 'react-router-dom';
import {subAppARoutesPath} from './sub-app-a';
import {subAppBRoutesPath} from './sub-app-b';

export const Dashboard = () => 
  <>
    <h3>Dashboard - Tap on link to navigate to a given module</h3>
    <Link to={subAppARoutesPath.main}>Navigate to SubApp A</Link>
    <br/>
    <Link to={subAppBRoutesPath.main}>Navigate to SubApp B</Link>
  </>


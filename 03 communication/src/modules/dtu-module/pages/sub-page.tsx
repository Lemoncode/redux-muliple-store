import * as React from 'react';
import { Link } from 'react-router-dom';

export const SubPage = () => {
  return (    
    <div>
      <h3 style={{color: 'red'}}>Hello from DTU Module- SUBPAGE</h3>
      <Link to="/app-b/main">Navigate to DTU B</Link>      
    </div>
  );
}
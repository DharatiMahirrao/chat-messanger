import React from 'react';
import {Link} from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <ul>
    
    <li><Link to ="/">HomePage </Link></li>
    <li><Link to="LoginPage">LoginPage</Link> </li>
    <li><Link to="ChatPage">ChatPage</Link> </li>
    <li><Link to="ContactPage">ContactPage</Link> </li>
  
</ul>
    </div>
  )
}

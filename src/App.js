import React, { useState } from 'react';
import HomePage from '../src/pages/HomePage'
import TodoPage from '../src/pages/TodoPage'
import SpacePage from '../src/pages/SpacePage'
import ImmuPage from '../src/pages/ImmuPage'
import LoginPage from '../src/pages/LoginPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ThemeContextProvider } from './context/themeContext'

function App() {
  const [theme, setTheme] = useState('DARK')
  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      <Router>
        <Link to='/login'>login</Link>
        <Link to='/'>home</Link>
        <Route exact path="/" component={HomePage}/>			
        <Route path="/todo" component={TodoPage}/>
        <Route path="/space" component={SpacePage}/>
        <Route path="/immu" component={ImmuPage}/>
        <Route path="/login" component={LoginPage}/>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;

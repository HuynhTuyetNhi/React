import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './Page/HomePage'
import BoardPage from './Page/BoardPage'
import Login from './Containers/Auth/Login/LoginContainer'
import Group from './Components/Group/Group';
import Register from './Containers/Auth/Register/RegisterContainer'
import AdminPage from './Page/AdminPage';
import UserPage from './Page/UserPage';
import DetailUserPage from './Page/DetailUserPage'
import BacklogPage from './Page/BacklogPage';
import ListProjectPage from './Page/ListProjectPage'
import MainPage from './Page/MainPage'
function App() {
  return (
    <div className="App">
      <Router>
              <Route path="/" exact component={HomePage} />
              <Route path="/user" component = {UserPage} />
              <Route path="/backlog/:id?" component={BacklogPage} />
              <Route path="/board" component={BoardPage} />
              <Route path="/login" component={Login}>
              </Route>
              <Route path='/group' component={Group} />
              <Route path="/register" component={Register}/>
              <Route path="/admin" component={AdminPage} />
              <Route path="/detailUser" component={DetailUserPage} />
              <Route path="/viewAll" component={ListProjectPage} />
              <Route path="/adminPage" component={MainPage}/>
      </Router>
    </div>
  );
}

export default App;

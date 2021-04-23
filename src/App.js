import {useState, useEffect} from 'react'
import { UserContext } from './assets/utils/UserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MainBackground } from './assets/styledComponents/styledApp'
import Header from './assets/components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import Error from './pages/Error';


const App = () => {
  const [users, setUsers] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  const url = 'https://reqres.in/api/users?page=2';

  useEffect(() => {
    async function fetchUsers() {
      try{  
        let fetchData = await fetch(url);
        let fetchJson = await fetchData.json();
        const usersData = fetchJson.data;
        setCompleteData(fetchJson);
        setUsers(usersData);
      } catch {
        console.log('ERROR!');
      }
    }
    fetchUsers()
  }, [])

  return (
    <Router>
      <Header />
      <MainBackground>

          <UserContext.Provider value={{users, setUsers, completeData, setCompleteData}}>
          <Switch>

            <Route path='/' exact component={Home} />

            <Route path='/detail/:id' component={Detail} />

            <Route path='/create-user' component={CreateUser} />

            <Route path='/edit-user/:id' component={EditUser} />

            <Route component={Error} />
            </Switch>

          </UserContext.Provider>



      </MainBackground>
    </Router>
  );
}

export default App;

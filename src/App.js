import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Background } from './assets/styledComponents/styledApp'
import Home from './pages/Home';
import Detail from './pages/Detail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

const App = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    try{

      async function fetchPosts() {
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const fetchJson = await fetchData.json();
        console.log(fetchJson);
        setPosts(fetchJson);
      }
      fetchPosts()
    } catch {
      console.log('ERROR: ');
    }
  }, [])

  return (
    <Background>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home posts={posts} />
          </Route>
          <Route path='/detail' component={Detail} />
          <Route path='/create-post' component={CreatePost} />
          <Route path='/edit-post' component={EditPost} />
        </Switch>
      </Router>
    </Background>
  );
}

export default App;

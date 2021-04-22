import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MainBackground } from './assets/styledComponents/styledApp'
import Header from './assets/components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Error from './pages/Error';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [ deletingPost, setDeletingPost ] = useState(false);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    async function fetchPosts() {
      try{  
        let fetchData = await fetch(url);
        let fetchJson = await fetchData.json();
        setPosts(fetchJson);
      } catch {
        console.log('ERROR!');
      }
    }
    fetchPosts()
  }, [])

  const handleDeletePost = (id) => {
      setDeletingPost(true)
      fetch(`${url}/${id}`, {method:'DELETE'})
      .then((data) => data.json())
      .then((res) => {
          console.log(res);
          // let newPosts = posts.filter(post => {
          //   return post.id !== res.id;
          // })
          // setPosts(newPosts)
      })
      .catch((error) => {
          console.log('ERROR: ' + error);
      })
  }

  return (
    <Router>
      <Header />
      <MainBackground>
          <Switch>
            <Route exact path='/'>
              <Home 
                posts={posts} 
                setPosts={setPosts}
                handleDeletePost={handleDeletePost}
                deletingPost={deletingPost}
              />
            </Route>
            <Route path='/detail/:id' component={Detail} />
            <Route path='/create-post' component={() => {
              return <CreatePost posts={posts} setPosts={setPosts} />
            }} />
            <Route path='/edit-post/:id' component={EditPost} />
            <Route component={Error} />
          </Switch>
      </MainBackground>
    </Router>
  );
}

export default App;

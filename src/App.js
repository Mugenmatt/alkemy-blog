import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Detail} />
          <Route exact path='/' component={CreatePost} />
          <Route exact path='/' component={EditPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

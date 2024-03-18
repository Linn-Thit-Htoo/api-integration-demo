import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBlogPage from "./pages/Blog/CreateBlogPage";
import EditBlogPage from "./pages/Blog/EditBlogPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog/create" component={CreateBlogPage} />
        <Route exact path="/blog/edit" component={EditBlogPage} />
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBlogPage from "./pages/Blog/CreateBlogPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog/create" component={CreateBlogPage} />
      </Switch>
    </Router>
  );
}

export default App;

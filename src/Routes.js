import { Route, Router, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Form from "./Form";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Post from "./Post";

function Routes () {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/Home" />
            </Route>
            <Route path="/Home" exact render={(route) => <Home {...Router} />} />
            <Route path="/Post" exact component={Post} />
            <Route path="/Form" exact component={Form} />
            <Route path="/About" exact component={About} />
            <Route path="*" exact component={PageNotFound} />
        </Switch>
    )
}

export default Routes

import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "pages";
import { useNotificationRegisteration } from "custom-hooks";

const Router = () => {
  const isTokenRegistering = useNotificationRegisteration();
  if (isTokenRegistering) {
    return null;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Router;

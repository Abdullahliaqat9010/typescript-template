import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { Dashboard, Login } from "pages";
import {
  useNotificationRegisteration,
  useAxiosInterceptors,
} from "custom-hooks";
import { useSelector } from "react-redux";
import { RootState } from "interfaces/redux/store";

const ProtectedRouter = () => {
  const isTokenRegistering = useNotificationRegisteration();
  useAxiosInterceptors();
  if (isTokenRegistering) {
    return null;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
};

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

const Router = () => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.auth.isLoggedIn
  );
  return <>{isAuthenticated ? <ProtectedRouter /> : <AuthRouter />}</>;
};

export default Router;

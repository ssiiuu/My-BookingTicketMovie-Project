import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import TicketBookingPage from "./pages/TicketBookingPage/TicketBookingPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import TicketBookingTemplate from "./templates/TicketBookingTemplate/TicketBookingTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={UserProfile} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        <TicketBookingTemplate
          path="/ticketbooking/:maLichChieu"
          exact
          Component={TicketBookingPage}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

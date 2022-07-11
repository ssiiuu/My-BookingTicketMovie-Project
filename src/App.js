import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import TicketBookingPage from "./pages/TicketBookingPage/TicketBookingPage";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import TicketBookingTemplate from "./templates/TicketBookingTemplate/TicketBookingTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return <HomeTemplate Component={Home} />;
          }}
        />

        <Route
          path="/detail/:id"
          exact
          render={() => {
            return <HomeTemplate Component={Detail} />;
          }}
        />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />
        <TicketBookingTemplate
          path="/ticketbooking/:maLichChieu"
          exact
          Component={TicketBookingPage}
        />
      </Switch>
    </Router>
  );
}

export default App;

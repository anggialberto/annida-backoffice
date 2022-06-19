import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import SchoolYear from "./pages/SchoolYear";
import RegistrationStudent from "./pages/RegistrationStudent";
import AddSchoolYear from "./pages/SchoolYear/add";
import EditSchoolYear from "./pages/SchoolYear/edit";
import DetailSchoolYear from "./pages/RegistrationStudent/detail";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/sign-in" exact component={SignIn} /> */}
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/registration-student" component={RegistrationStudent} />
          <Route exact path="/registration-student/:id" component={DetailSchoolYear} />
          <Route exact path="/school-year" component={SchoolYear} />
          <Route exact path="/school-year/add" component={AddSchoolYear} />
          <Route exact path="/school-year/edit" component={EditSchoolYear} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;

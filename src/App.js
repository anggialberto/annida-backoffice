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
import RegistrationDetail from "./pages/RegistrationStudent/detail";
import { useSelector } from "react-redux";  
import Religion from "./pages/Religion";
import EditReligion from "./pages/Religion/edit";
import AddReligion from "./pages/Religion/add";

function App() {
  const { token, user, isLogin } = useSelector((state) => state.auth);

  const USER_AFTER_LOGIN = () => (
    <Main>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/registration-student" component={RegistrationStudent} />
      <Route exact path="/registration-student/:id" component={RegistrationDetail} />
      <Route exact path="/school-year" component={SchoolYear} />
      <Route exact path="/school-year/add" component={AddSchoolYear} />
      <Route exact path="/school-year/edit/:id" component={EditSchoolYear} />
      <Route exact path="/religion" component={Religion} />
      <Route exact path="/religion/add" component={AddReligion} />
      <Route exact path="/religion/edit/:id" component={EditReligion} /> 
      <Route exact path="/profile" component={Profile} />
      <Redirect from="*" to="/dashboard" />
    </Main>
  )


  return (
    <div className="App">
      <Switch>
        { !token && !isLogin && 
          <>
            <Route path="/sign-in" exact component={SignIn} /> 
            <Redirect from="*" to="/sign-in" />
          </>
        }

        {token?.length && isLogin && USER_AFTER_LOGIN()}

      </Switch>
    </div>
  );
}

export default App;

import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.less';
import Login from "@/pages/Login";
import Main from "@/pages/Main";
import NoFund from "@/pages/NoFund";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/main" component={Main}/>
                <Route component={NoFund}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;

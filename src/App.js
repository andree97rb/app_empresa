import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'app/common/navBar/NavBar';
import Home from 'app/pages/home/Home';
import ViewCategoria from 'app/pages/categoria/ViewCategoria';
import AddCategoria from 'app/pages/categoria/AddCategoria';
import EditCategoria from 'app/pages/categoria/EditCategoria';
import ViewEmpresa from 'app/pages/empresa/ViewEmpresa';
import AddEmpresa from 'app/pages/empresa/AddEmpresa';
import EditEmpresa from 'app/pages/empresa/EditEmpresa';
import ViewPersonal from 'app/pages/personal/ViewPersonal';
import AddPersonal from 'app/pages/personal/AddPersonal';
import EditPersonal from 'app/pages/personal/EditPersonal';
import 'App.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div className="app-container">
                    <Switch>
                        <Route path="/home" exact><Home/></Route>
                        <Route path="/categoriaList" exact><ViewCategoria/></Route>
                        <Route path="/newCategoria" exact><AddCategoria/></Route>
                        <Route path="/editCategoria/:id" exact><EditCategoria/></Route>
                        <Route path="/empresaList" exact><ViewEmpresa/></Route>
                        <Route path="/newEmpresa" exact><AddEmpresa/></Route>
                        <Route path="/editEmpresa/:id" exact><EditEmpresa/></Route>
                        <Route path="/personalList" exact><ViewPersonal/></Route>
                        <Route path="/newPersonal" exact><AddPersonal/></Route>
                        <Route path="/editPersonal/:id" exact><EditPersonal/></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
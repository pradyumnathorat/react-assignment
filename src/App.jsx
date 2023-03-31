import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { history } from '_helpers';
import { Nav, PrivateRoute } from '_components';
import { Home } from 'home';
import { Login } from 'login';
import CreateCard from '_components/createCard/CreateCard';
import Allcards from '_components/allCards/Allcards';

export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <Routes>
                <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cards/new" element={<CreateCard />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/cards" element={<Allcards/>} />
                </Routes>
            </div>
        </div>
    );
}

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./home.css"
import { userActions } from '_store';
import { Link } from 'react-router-dom';

export { Home };

function Home() {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    const { users } = useSelector(x => x.users);

    useEffect(() => {
        dispatch(userActions.getAll());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Hi {authUser?.firstName}!</h1>
            <p>You're logged in with React 18 + Redux & JWT!!</p>
            <h3>Users from secure api end point:</h3>
            {users.length &&
                <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    )}
                </ul>
            }
            {users.loading && <div className="spinner-border spinner-border-sm"></div>}
            
            <div>
                <Link to="/cards" ><button className="showCard">Show All Cards</button></Link>
                
            </div>
        </div>
    );
}

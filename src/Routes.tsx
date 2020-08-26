import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import { IRootState } from './store/rootReducer';

const UsersList = React.lazy(() => import("./components/UsersList"));
const UserPage = React.lazy(() => import("./components/UserPage"));
const CreateUser = React.lazy(() => import("./components/CreateUser"));
const UserSettings = React.lazy(() => import("./components/UserSettings"));

const Routes: React.FC = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path='/users' component={UsersList} />  
            <Route exact path='/user-:id' component={UserPage} />  
            <Route exact path='/create-user' component={CreateUser} />
            <Route exact path='/update-user-:id' component={UserSettings} />            
            <Redirect from="/" to='/users' />
            <Route path="/" render={() => <div>Page Not Found</div>} />
        </Switch>
    </React.Suspense>
)
export default connect(null)(React.memo(Routes))
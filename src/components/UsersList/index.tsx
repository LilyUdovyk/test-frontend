import React from "react";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { IRootAction, IRootState } from "../../store/rootReducer";
import * as usersActions from "../../store/users/actions";
import * as userActions from "../../store/user/actions";
import { UserData } from '../../store/user/types'

import User from "../User";
import style from './style.module.css'

const mapStateToProps = (state: IRootState) =>
  ({
    users: state.users.usersData
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      retrieveUsers: usersActions.retrieveUsers.request,
      retrieveUser: userActions.retrieveUser.request
    },
    dispatch
  );

type UsersProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const UsersList: React.FC<UsersProps> = props => {
  
  React.useEffect(() => {
		props.retrieveUsers()
  }, [])
  
  const retrieveUserHandler = (userId: string) => {
    props.retrieveUser(userId)
  }

  return (
    <div className={style.usersList}>
      <Link to="/create-user">Create new user</Link>
      { props.users.map((user: UserData) => {
        return (
          <Link to={`/user-${user.id}`}>
            <User 
              key={user.id}
              name={user.name}
              picture={user.picture}
              onClick={() => retrieveUserHandler(user.id)}
            />
        </Link>
        )
      })}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UsersList));
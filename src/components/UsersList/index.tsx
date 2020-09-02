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
    users: state.users.usersData,
    ignoredUsers: state.users.ignoreUsersData
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      retrieveUsers: usersActions.retrieveUsers.request,
      retrieveUser: userActions.retrieveUser.request,
      saveIgnoreUser: usersActions.saveIgnoreUsers.request,
      ignoreUser: usersActions.ignoreUser
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

  const saveIgnoreUserHandler = () => {
    let ignoredUsersIds = props.ignoredUsers.map((user: UserData) => user.id)
    props.saveIgnoreUser(ignoredUsersIds)
  }

  const ignoreUserHandler = (user: UserData) => {
    props.ignoreUser(user)
  }

  return (
    <div className={style.usersList}>
      <div className={style.createUser}>
        <Link to="/create-user" className={style.createUserLink}>
          <button>+</button>
        </Link>
        <p>Create new user</p>
      </div>
      { props.ignoredUsers.length !==0 &&
        <div className={style.ignoredUsers}>
          <h4> Ignored users </h4>       
          { props.ignoredUsers.map((user: UserData) => {
            return (
                <User 
                  key={user.id}
                  name={user.name}
                  picture={user.picture}
                  onClick={() => retrieveUserHandler(user.id)}
                />
            )
          })} 
          <button onClick={() => saveIgnoreUserHandler()}>Save</button>
        </div>
      }
      { props.users.map((user: UserData) => {
        return (
          <div className={style.userBlock}>
            <User 
              key={user.id}
              name={user.name}
              picture={user.picture}
              onClick={() => retrieveUserHandler(user.id)}
            />
            <button onClick={() => ignoreUserHandler(user)}>Ignore</button>
          </div>
        )
      })}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
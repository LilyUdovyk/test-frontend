import React from "react";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { IRootAction, IRootState } from "../../store/rootReducer";
import * as userActions from "../../store/user/actions";

import style from './style.module.css'

const mapStateToProps = (state: IRootState) =>
 ({
  id: state.user.userData.id,
  name: state.user.userData.name,
  email: state.user.userData.email,
  picture: state.user.userData.picture,
  role: state.user.userData.role
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      retrieveUser: userActions.retrieveUser.request,
      deleteUser: userActions.deleteUser.request
    },
    dispatch
  );

type UserPageProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const UserPage: React.FC<UserPageProps> = props => {

  // React.useEffect(() => {
  //   console.log('id', props.id)
	// 	props.retrieveUser(props.id)
  // }, [])
  
  const deleteUserHandler = (userId: string) => {
    props.deleteUser(userId)
 }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.profileHeader}>
          <h2>{props.name}</h2>
        </div>
        <div className={style.imgBlock}>
          <img src={props.picture} alt="Avatar" />
        </div>
        <div className={style.profileInfo}>
          <p>Email: {props.email}</p>
          <p>Role: {props.role}</p>
        </div>
        <div className={style.buttonBlock}>
          <button>
            <Link to={`/update-user-${props.id}`}>
              Update user
            </Link>
          </button>
          <button onClick={() => deleteUserHandler(props.id)}>
            Delete user
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UserPage));
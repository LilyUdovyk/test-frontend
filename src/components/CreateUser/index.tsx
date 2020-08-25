import React from "react";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

import { IRootAction, IRootState } from "../../store/rootReducer";
import * as userActions from "../../store/user/actions";

import style from './style.module.css'

const mapStateToProps = (state: IRootState) =>
 ({
  error: state.user.error
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      createUser: userActions.createUser.request
    },
    dispatch
  );

type CreateUserProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const CreateUser: React.FC<CreateUserProps> = props => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const [role, setRole] = React.useState("");
  
  const CreateUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.createUser({ name, email, picture, role })
 }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.header}>
          <h2>Create user</h2>
        </div>
        <form action="" onSubmit={CreateUserHandler} id="form" className={style.form}>
          <div className={style.formControl}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required={true}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required={true}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="picture">Picture</label>
            <input
              type="text"
              id="picture"
              required={true}
              value={picture}
              onChange={e => setPicture(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              required={true}
              value={role}
              onChange={e => setRole(e.target.value)}
            />
            { props.error &&
              <small>{props.error}</small>
            }
          </div>
          <button type="submit" className={style.submitBtn}>Create user</button>
        </form>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CreateUser));
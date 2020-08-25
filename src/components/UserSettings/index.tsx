import React from "react";
import { bindActionCreators, Dispatch } from "redux";
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
      updateUser: userActions.updateUser.request,
    },
    dispatch
  );

type SettingsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const Settings: React.FC<SettingsProps> = props => {
  const [newName, setNewName] = React.useState(props.name);
  const [newEmail, setNewEmail] = React.useState(props.email);
  const [newPicture, setNewPicture] = React.useState(props.picture);
  const [newRole, setNewRole] = React.useState(props.role);

  const settingsHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.updateUser({
      id: props.id,
      name: newName,
      email: newEmail,
      picture: newPicture,
      role: newRole
    })
  }

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.header}>
          <h2>User Settings</h2>
        </div>
        <form action="" onSubmit={settingsHandler} id="form" className={style.form}> 
          <div className={style.formControl}>
            <label htmlFor="name">Change name</label>
            <input
              type="text"
              id="name"
              required={true}
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="email">Change email</label>
            <input
              type="text"
              id="email"
              required={true}
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="picture">Picture</label>
            <input
              type="text"
              id="picture"
              required={true}
              value={newPicture}
              onChange={e => setNewPicture(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              required={true}
              value={newRole}
              onChange={e => setNewRole(e.target.value)}
            />
          </div>
          <div className={style.buttonBlock}>
            <button type="submit" className={style.submitBtn}>Save</button>
            <button className={style.submitBtn}>
              <Link to={`/user-${props.id}`}>Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Settings));
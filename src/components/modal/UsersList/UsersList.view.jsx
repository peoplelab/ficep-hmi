//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Modal, Table } from '../../layouts/index.layouts';
import { Form } from '../../forms-context/index.form';
import {
    User as cUser,
} from '../../../controllers/routes/users/users.controller';
import {
    Group as cGroup,
} from '../../../controllers/routes/users/groups.controller';
//import { callGroupList } from '../../../controllers/routes/users/groups.controller';

import RowItem from './UsersList.item.row';
import AddUserItem from './UsersList.item.addUser';
import UpdateUserItem from './UsersList.item.updateUser';
import EditItem from './UsersList.item.edit';
import '../../../styles/modal/UsersList.style.scss';


const initial = {
  firstName: '',
  lastName: '',
  password: '',
  group: '',
};



class UsersList extends Component {

    _groupsList = null;
    _usersList = null;
    _data2save = {
        "id": 0,
        "firstName": "",
        "lastName": "",
        "password": "",
        "groups": [ ],
    }



    constructor(props) {
        super(props);


        this.state = {
            users: [],
            groups: [],
            currentUser: {},
        };

        this.updateState = this.updateState.bind(this);
        this.getUsersList = this.getUsersList.bind(this);
        this.getGroupsList = this.getGroupsList.bind(this);
        this.onEditUser = this.onEditUser.bind(this);

        this.intl = {
            title: window.intl.users_main_title,
        };

        this.headers = {
            firstName: window.intl.users_headers_firstname,
            lastName: window.intl.users_headers_lastname,
            userName: window.intl.users_headers_username,
            isActive: window.intl.users_headers_isactive,
            creationDate: window.intl.users_headers_creationdate,
            groups: window.intl.users_headers_role,
            update: '',
            delete: '',
        };
    }


  componentDidMount() {
      this.getGroupsList();
      this.getUsersList();
  }

  updateState(newState) {
    this.setState(newState);
  }

    // semaforo per gestire il render della view
    // (solo quando la lista utenti e la lista gruppi sono state costruite...)
    setStateSync = () => {
        if ((this._usersList != null)
            && (this._groupsList != null)) {

            this.setState({
                ...this.state,
                users: this._usersList.users,
                groups: this._groupsList.groups
            });

        }
    }
    // imposta il semaforo per la lista utenti
    setUsersList = (data) => {
        this._usersList = data;
        this.setStateSync();
    }
    // legge l'elenco utenti
    getUsersList() {
        const dispatch = this.setUsersList;
        cUser.GetList({ dispatch });
    }

    // cancellazione di un utente
    onDeleteUser(event) {
        const data = event.data;
        cUser.Delete({ data, onSuccess: () => { UsersList.getUsersList(); } });
    }
    // dettaglio di un utente...riempie la riga col dettaglio
    onEditUser(event) {        
        const data = event.data;

        cUser.Detail({
            data,
            dispatch: (currentUser) => {
                this.updateState({ currentUser: currentUser.details });
            }
        });
    }
    // salvataggio (creazione/modifica) di un utente
    onSaveUser = (data) => {

        this._data2save.id = data.id;
        this._data2save.firstName = data.firstName;
        this._data2save.lastName = data.lastName;
        this._data2save.password = data.password || "";
        this._data2save.groups = data.groups;        

        cUser.Save({
            data:
                this._data2save,
                onSuccess: (response) => {
                   this.getUsersList();
                },
                onFailed: () => { }
        });
    }

     // imposta il semaforo per la lista gruppi
    setGroupList = (data) => {
        this._groupsList = data;
        this.setStateSync();
    }
    // legge l'elenco gruppi
    getGroupsList() {
        const dispatch = this.setGroupList;
        cGroup.GetList({ dispatch });
    }


    render() {
        const { users, groups, currentUser } = this.state;

        return (
            <Modal open className="users-modal modal--data modal--big" messages={({ title: this.intl.title })} header="full" footer="none">
                <Form className="users-modal__form" initial={initial}>
                    <div className="users-modal__container">
                        <div className="users-modal__content">
                            <EditItem currentUser={currentUser} groups={groups} onSave={this.onSaveUser} />
                            {/*
                            {!currentUser ? (
                                <AddUserItem groups={groups} initial={initial} onAdd={this.getUsersList} />
                            ) : (
                                    <UpdateUserItem groups={groups} initial={initial} updateState={this.updateState} onUpdate={this.getUsersList} currentUser={currentUser} />
                                )}
                                */}
                        </div>
                        <div className="users-modal__content">
                            <Table className="users-modal__table" headers={this.headers} data={users} >
                                {/*{props => <RowItem {...props} updateState={this.updateState} onDelete={this.onDeleteUser} onEdit={this.onEditUser} />}*/}
                                {props => <RowItem {...props} updateState={() => { }} onDelete={this.onDeleteUser} onEdit={this.onEditUser} />}
                            </Table>
                        </div>
                    </div>
                </Form>
            </Modal>
        );
    }
}


/**
 * Define component properties types
 */
UsersList.propTypes = {
};

/**
 * Define default value of component properties
 */
UsersList.defaultProps = {
};


export default UsersList;

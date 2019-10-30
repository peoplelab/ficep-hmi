

/*
 * Componente USERSLIST. Elenco utenti del sistema.
 * Props:
 * - nessuna
*/


import React, { Component } from 'react';
import { Modal, Table } from '../../layouts/index.layouts';
import { Form } from '../../forms-context/index.form';
import {
    User as cUser,
} from '../../../controllers/routes/users/users.controller';
import {
    Group as cGroup,
} from '../../../controllers/routes/users/groups.controller';

import RowItem from './UsersList.item.row';
import EditItem from './UsersList.item.edit';
import { ModalHandler } from '../../../controllers/common/modal.handler';
import '../../../styles/modal/UsersList.style.scss';


const initial = {
    firstName: '',
    lastName: '',
    group: '',
};



class UsersList extends Component {
    _deleteID = 0;              // l'id da passare alla funzione onDeleteUser()
    _groupsList = null;         // lista dei gruppi/ruoli
    _usersList = null;          // lista degli utenti
    _data2save = {              // struct dei dati da salvare
        "id": 0,
        "firstName": "",
        "lastName": "",
        "userStatus": "",
        "groups": [],
    }
    _labels = {                 // etichette in lingua
        title: window.intl.users_main_title,
        headers: {
            firstName: window.intl.users_headers_firstname,
            lastName: window.intl.users_headers_lastname,
            userName: window.intl.users_headers_username,
            isActive: window.intl.users_headers_isactive,
            creationDate: window.intl.users_headers_creationdate,
            groups: window.intl.users_headers_role,
            update: '',
            delete: '',
        }
    }

    _emptyValues = {
        id: 0,
        firstName: "",
        lastName: "",
        groups: null
    }


    constructor(props) {
        super(props);


        this.state = {
            users: [],
            groups: [],
            currentUser: {},
            errorCase: [],
        };

        this.updateState = this.updateState.bind(this);
        this.getUsersList = this.getUsersList.bind(this);
        this.getGroupsList = this.getGroupsList.bind(this);
        this.onEditUser = this.onEditUser.bind(this);

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

    openModalDelete = (event) => {
        this._deleteID = event.data;
        ModalHandler.Confirm({ onConfirm: this.onDeleteUser });
    }
    // cancellazione di un utente
    onDeleteUser = () => {
        const data = this._deleteID;
        this._deleteID = 0;
        cUser.Delete({
            data,
            onSuccess: () => {
                ModalHandler.Success();
                this.getUsersList();
            },
            onFailed: (response) => {
                ModalHandler.Error({ errorCode: response.dataprocessed.errorCode, errorsList: response.dataprocessed.result });
            }
        });
    }
    // dettaglio di un utente...riempie la riga col dettaglio
    onEditUser = (event) => {
        const data = event.data;

        cUser.Detail({
            data,
            dispatch: (currentUser) => {
                this.updateState({ currentUser: currentUser.details });
            }
        });
    }
    // dettaglio di un utente...attivazione e disattivazione dei bottoni (modifica e elimina)
    onActiveUser = (event) => {
        const data = event.data;
        if (data.userStatus == 1) {
            data.userStatus = 2;

        } else if (data.userStatus == 1) {
            data.userStatus = 1;
        } else {
            data.userStatus = 1;
        }

        this._data2save.id = data.id;
        this._data2save.firstName = data.firstName;
        this._data2save.lastName = data.lastName;
        this._data2save.userStatus = data.userStatus;
        this._data2save.groups = [];
        cUser.Save({
            data:
                this._data2save,
            onSuccess: (response) => {
                if ((response != null) && (response.dataprocessed.result == true)) {
                    ModalHandler.Success();
                    this.getUsersList();
                }
            },
            onFailed: (response) => {
                ModalHandler.Error({ errorCode: response.dataprocessed.errorCode, errorsList: response.dataprocessed.result });
            }
        });
    }
    // salvataggio (creazione/modifica) di un utente
    onSaveUser = (data) => {

        this._data2save.id = data.id;
        this._data2save.firstName = data.firstName;
        this._data2save.lastName = data.lastName;
        this._data2save.userStatus = data.userStatus || "";
        this._data2save.groups = data.groups;

        cUser.Save({
            data:
                this._data2save,
            onSuccess: (response) => {

                this.updateState({ currentUser: this._emptyValues });
                if (typeof response.dataprocessed.result === "boolean") {
                    ModalHandler.Success();
                } else {
                    ModalHandler.Info({ message: ['user Name:' + response.dataprocessed.result.Username, ' Password: ' + response.dataprocessed.result.Password] });
                }
                this.getUsersList();
            },
            onFailed: (response) => {
                ModalHandler.Error({ errorCode: response.dataprocessed.errorCode, errorsList: response.dataprocessed.result });
                this.setState({ errorCase: response.dataprocessed.result, currentUser: this._data2save });
            }
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
        const { users, groups, currentUser, errorCase } = this.state;

        return (
            <Modal open className="users-modal modal--data modal--big" messages={({ title: this._labels.title })} header="full" footer="none">
                <Form className="users-modal__form" initial={initial}>
                    <div className="users-modal__container">
                        <div className="users-modal__content">
                            <EditItem currentUser={currentUser} groups={groups} onSave={this.onSaveUser} errorCase={errorCase} />
                        </div>
                        <div className="users-modal__content">
                            <Table className="users-modal__table" headers={this._labels.headers} data={users} >
                                {props => <RowItem {...props} onActive={this.onActiveUser} onDelete={this.openModalDelete} onEdit={this.onEditUser} />}
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

# WIKI

## API

### note
> attualmente, ogni utente possiede una lista relativa ai gruppi a cui appartiene; in futuro sarà presente solo il gruppo di appartenenza di categoria superiore

### info

| api | info | note |
|-|-|-|
|`/api/v1/users/user/:id/:groupId (DELETE)`| servizio mockato, ma torna sempre false in result | |
|`/api/v1/odata/groups/export (GET)`| il servizio torna 404 | |
|`/api/v1/Token/:sessionId (POST)`| il servizio torna 404 | |
|`/api/v1/odata/groups/export (GET)`| verifica utilità servizio | |
|`/api/v1/odata/users/export (GET)`| verifica utilità servizio | |
|`/api/v1/users/upload (POST)`| non è possibile ottenere una response<br />manca il file di esempio da inviare nella request del servizio<br />definire possible gestione del servizio lato FE | |
|`/api/v1/users/user (POST)`| il servizio torna sempre la seguente response | ^1 |
|`/api/v1/users/:id (DELETE)`| in attesa della response del servizio seguente per non eliminare le utenze attuali |`/api/v1/users/user (POST)`|
|`/api/v1/users/user/:id/:groupId (PUT)`| In caso di errore, la response non corrisponde a quella concordata | ^2 |
|`/api/v1/users/user/:id/:groupId (DELETE)`| In caso di errore, la response non corrisponde a quella concordata | ^2 |
|`/api/v1/users/user/:id/:groupId (PUT)`| Definire se il servizio per funzionare richiede parametri, request bosy o entrambi | |
|`/api/v1/users/user/:id/:groupId (DELETE)`| Definire se il servizio per funzionare richiede parametri, request bosy o entrambi | |

___

^1
```json
  {
    "responseType": 400,
    "errorCode": "GENERIC_VALIDATION_ERROR",
    "result": "USER_CREATION_NOTSPECIFIED"
  }
```

^2
```json
{
  "responseType":400,
  "errorCode":null,
  "result":"USER_ADDTOGROUP_ALREADYPRESENT"
}
```

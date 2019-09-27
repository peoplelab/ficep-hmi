# WIKI

## API

### note
* attualmente, ogni utente possiede una lista relativa ai gruppi a cui appartiene; in futuro sarà presente solo il gruppo di appartenenza di categoria superiore

* implementare i seguenti servizi appena saranno disponibili
  > /api/v1/Token/:sessionId<br/>
  > /api/v1/users/upload<br/>
  > /api/v1/odata/groups/export<br/>

### info

| api | info | note |
|-|-|-|
|`/api/v1/users/user/:id/:groupId (DELETE)`| torna sempre false in result | |
|`/api/v1/odata/groups/export (GET)`| il servizio torna 404 | |
|`/api/v1/Token/:sessionId (POST)`| il servizio torna 404 | |
|`/api/v1/odata/groups/export (GET)`| verifica utilità servizio | |
|`/api/v1/odata/users/export (GET)`| verifica utilità servizio | |
|`/api/v1/odata/users (GET)`| all'aggiunta di un nuovo utente, non viene aggiornata la lista | |
|`/api/v1/users/upload (POST)`| non è possibile ottenere una response<br />manca il file di esempio da inviare nella request del servizio<br />definire possible gestione del servizio lato FE | |
|`/api/v1/users/user/:id/:groupId (PUT)`| In caso di errore, la response non corrisponde a quella concordata | ^2 |
|`/api/v1/users/user/:id/:groupId (DELETE)`| In caso di errore, la response non corrisponde a quella concordata | ^2 |
|`/api/v1/users/user/:id/:groupId (PUT)`| Definire se il servizio per funzionare richiede parametri, request body o entrambi | |
|`/api/v1/users/user/:id/:groupId (DELETE)`| Definire se il servizio per funzionare richiede parametri, request body o entrambi | |

___

^2
```json
{
  "responseType":400,
  "errorCode":null,
  "result":"USER_ADDTOGROUP_ALREADYPRESENT"
}
```

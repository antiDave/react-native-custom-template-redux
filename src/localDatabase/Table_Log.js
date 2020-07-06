import { createTable, addRecord, deleteTable, tableCheck, recordFetch } from "./DB";

const TABLE_NAME = "Log";

const COL_TITLE = "title";
const COL_DESCRIPTION = "description";
const COL_PROPERTY_ID = "propertyID";
const COL_LOG_TYPE = "logType";
const COL_REMOTE_LOG_ID = "remoteLogID";

export default {
    createTable() {
        return new Promise(async resolve => {
            let columns = [];
            columns.push({
                "name": COL_TITLE,
                "type": "text"
            }, {
                "name": COL_DESCRIPTION,
                "type": "text"
            }, {
                "name": COL_PROPERTY_ID,
                "type": "text"
            }, {
                "name": COL_LOG_TYPE,
                "type": "text"
            }, {
                "name": COL_REMOTE_LOG_ID,
                "type": "text"
            });
            const res = await createTable(TABLE_NAME, columns);
            resolve(res);
        });
    },//end of FUNCTION CREATE_TABLE

    checkTable() {
        return new Promise(async resolve => {
            const res = await tableCheck(TABLE_NAME);
            resolve(res);
        });
    },//end of FUNCTION CHECK_TABLE

    insert(values) {
        return new Promise(async resolve => {
            let data = [];
            data.push({
                "columnName": COL_TITLE,
                "columnValue": values.title
            }, {
                "columnName": COL_DESCRIPTION,
                "columnValue": values.description
            }, {
                "columnName": COL_PROPERTY_ID,
                "columnValue": values.propertyID
            }, {
                "columnName": COL_LOG_TYPE,
                "columnValue": values.logType
            }, {
                "columnName": COL_REMOTE_LOG_ID,
                "columnValue": values.remoteLogID
            });
            const res = await addRecord(TABLE_NAME, data);
            resolve(res);
        });
    },//end of FUNCTION ADD

    fetchAll() {
        return new Promise(async resolve => {
            let data = [];
            let newQuery = `select * from ${TABLE_NAME}`;

            const res = await recordFetch(newQuery);
            if (res) {
                var len = res.rows.length;


                for (let i = 0; i < len; i++) {
                    let row = res.rows.item(i);

                    const { id } = row;
                    let title = row[COL_TITLE];
                    let description = row[COL_DESCRIPTION];
                    let propertyID = row[COL_PROPERTY_ID];
                    let logType = row[COL_LOG_TYPE];
                    let remoteLogID = row[COL_REMOTE_LOG_ID];

                    data.push({ id, title, description, propertyID, logType, remoteLogID });
                }

            }
            resolve(data);

        });
    },//end of FUNCTION FETCH_ALL

    delete() {
        return new Promise(async resolve => {
            const res = await deleteTable(TABLE_NAME);
            resolve(res)
        });
    }//end of FUNCTION DELETE

}//end of EXPORT DEFAULT
import { createTable, tableCheck, recordFetch, addRecord, clearDB } from "./DB";


export const createClientTable = () => {
    return new Promise(async resolve => {
        let columns = [];
        columns.push({
            "name": "name",
            "type": "text"
        }, {
            "name": "fatherName",
            "type": "text"
        }
            , {
                "name": "gaurdianName",
                "type": "text"
            }
            , {
                "name": "phoneNumber",
                "type": "text"
            }, {
            "name": "emergencyNumber",
            "type": "text"
        }, {
            "name": "fees",
            "type": "text"
        },
            {
                "name": "addedBy",
                "type": "INTEGER"
            },
            {
                "name": "creation",
                "type": "text"
            });
        const res = await createTable("client", columns);
        resolve(res);
    });
};

export const clientTableCheck = () => {
    return new Promise(async resolve => {
        const res = await tableCheck("client");
        resolve(res);
    });
};

export const addNewClient = (values) => {
    return new Promise(async resolve => {
        let data = [];
        data.push({
            "columnName": "name",
            "columnValue": values.name
        }, {
            "columnName": "fatherName",
            "columnValue": values.fatherName
        }, {
            "columnName": "gaurdianName",
            "columnValue": values.gaurdianName
        }, {
            "columnName": "phoneNumber",
            "columnValue": values.phoneNumber
        }, {
            "columnName": "emergencyNumber",
            "columnValue": values.emergencyNumber
        }, {
            "columnName": "fees",
            "columnValue": values.fees + " PKR"
        }, {
            "columnName": "addedBy",
            "columnValue": values.addedBy
        },
            {
                "columnName": "creation",
                "columnValue": new Date().getTime()
            });
        const res = addRecord("client", data);
        resolve(res);
    });
};

export const getClient = (query) => {
    return new Promise(async resolve => {
        let data = [];
        let newQuery = "select * from client";
        if (query) {
            newQuery = query;
        }
        const res = await recordFetch(newQuery);
        console.warn('resssss', res);
        if (res) {
            var len = res.rows.length;
            console.warn('LENGTH', len);

            for (let i = 0; i < len; i++) {
                let row = res.rows.item(i);

                const { id, name, fatherName, gaurdianName, phoneNumber, emergencyNumber, fees, creation } = row;
                console.warn('data', id);
                data.push({ id, name, fatherName, gaurdianName, phoneNumber, emergencyNumber, fees, creation });
            }



        }
        resolve(data);

    });
};

export const deleteClientTable = () => {
    return new Promise(async resolve => {
        const res = await clearDB("client");
        resolve(res)
    });
};


import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "PicknDrop.db";
const database_version = "3.0";
const database_displayname = "Pick and Drop";
const database_size = 200000;

function initDB() {
    let db;
    return new Promise(resolve => {
        SQLite.echoTest()
            .then(() => {
                SQLite.openDatabase(
                    database_name,
                    database_version,
                    database_displayname,
                    database_size
                )
                    .then(DB => {
                        db = DB;

                        resolve(db);
                    })
                    .catch(error => {
                        resolve(false);
                        console.warn("Failed=>\n", error);
                    });
            })
            .catch(error => {
                resolve(false);
                console.warn("echoTest failed - plugin not functional");
            });
    });
}

function closeDatabase(db) {
    if (db) {
        db.close()
            .then(status => { })
            .catch(error => { });
    } else {
        console.warn("Database was not OPENED");
    }
}

//create Table usage
// let columns = [];
// columns.push({
//     "name": "username",
//     "type": "text"
// }, {
//     "name": "password",
//     "type": "text"
// });
// createTable("tableName", columns)

export const createTable = (tableName, columns) => {
    return new Promise(resolve => {
        let columnCreation = "";
        for (let i = 0; i < columns.length; i++) {
            if (typeof columns[i]["name"] === "undefined") {
                console.error(`Didn't find 'NAME' at ${i} index`);
            }
            else if (typeof columns[i]["type"] === "undefined") {
                console.error(`Didn't find 'TYPE' at ${i} index`);
            }
            else {
                let name = columns[i]["name"];
                let type = columns[i]["type"];
                columnCreation += name + " " + type + ",";
            }
        }
        let query = `CREATE TABLE IF NOT EXISTS  ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT,${columnCreation}`;
        query = query.replace(/,\s*$/, "");
        query += ")";


        initDB()
            .then(db => {
                //Category Table Start
                db.transaction(tx => {
                    tx.executeSql(query);
                });
                //Category Table End
                closeDatabase(db);
                resolve(true);
            })
            .catch(err => {
                resolve(false);
            });
    });
};

// TableCheck Usage
// tableCheck(tableName);

export const tableCheck = (tableName) => {
    return new Promise(resolve => {
        initDB()
            .then(db => {
                db.transaction(tx => {
                    tx.executeSql(
                        `SELECT name FROM sqlite_master WHERE type='table' AND name='${tableName}'`
                    ).then(([tx, results]) => {
                        var len = results.rows.length;
                        resolve(len);
                    });
                })
                    .then(result => {
                        closeDatabase(db);
                    })
                    .catch(err => {
                        console.warn('table Check Catch 1 \n', err);
                        resolve(false);
                    });
            })
            .catch(err => {
                console.warn('table Check Catch 2 \n', err);
                resolve(false);
            });
    });
};


//   addRecord Usage
// let data = [];
// data.push({
//     "columnName": "username",
//     "columnValue": "text"
// }, {
//     "columnName": "password",
//     "columnValue": "text"
// });
// addRecord("tableName", data)

export const addRecord = (tableName, data) => {
    return new Promise(async resolve => {
        let columnNames = "";
        let columnValues = [];
        let columnValuesQuestionMark = "";
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i]["columnName"] === "undefined") {
                console.error(`Didn't find 'COLUMN NAME' at ${i} index`);
            }
            else if (typeof data[i]["columnValue"] === "undefined") {
                console.error(`Didn't find 'COLUMN VALUE' at ${i} index`);
            }
            else {
                let columnName = data[i]["columnName"];
                let columnValue = data[i]["columnValue"];
                columnNames += columnName + ",";
                columnValues.push(columnValue);
                columnValuesQuestionMark += "?,";
            }
        }

        columnNames = columnNames.replace(/,\s*$/, "");

        columnValuesQuestionMark = columnValuesQuestionMark.replace(/,\s*$/, "");

        let query = `INSERT INTO ${tableName} (${columnNames})  VALUES (${columnValuesQuestionMark} )`;
        initDB()
            .then(db => {
                db.transaction(tx => {
                    tx.executeSql(
                        query,
                        columnValues
                    ).then(([tx, results]) => {
                        resolve(results);
                    });
                })
                    .then(result => {
                        closeDatabase(db);
                    })
                    .catch(err => {
                        resolve(false);
                        console.warn("catch 1 ", err);
                    });
            })
            .catch(err => {
                resolve(false);
            });


    });
};

// recordFetch Usage
// recordFetch("Select * from tableName")

export const recordFetch = (query) => {
    return new Promise(async resolve => {
        initDB()
            .then(db => {
                db.transaction(tx => {
                    tx.executeSql(query).then(([tx, results]) => {

                        resolve(results);
                    });
                })
                    .then(result => {
                        closeDatabase(db);
                    })
                    .catch(err => {
                        resolve(false);
                    });
            })
            .catch(err => {
                resolve(false);
            });
    });
};


export const clearDB = (tableName) => {
    return new Promise(resolve => {
        initDB()
            .then(db => {
                db.transaction(async tx => {
                    tx.executeSql(`DROP TABLE IF EXISTS ${tableName}`);

                    resolve(true);
                })
                    .then(result => {
                        closeDatabase(db);
                    })
                    .catch(err => {
                        resolve(false);
                        console.log(err);
                    });
            })
            .catch(err => {
                resolve(false);
                console.log(err);
            });
    });
};


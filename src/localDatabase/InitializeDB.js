import Table_Log from "./Table_Log";

import ClearDB from "./ClearDB";


export default {
    init() {
        return new Promise(async resolve => {
            await ClearDB.deleteOnly();
            await Table_Log.createTable();
            resolve();
        });
    },//end of FUNCTION init
    initWithoutDelete() {
        return new Promise(async resolve => {
            await Table_Log.createTable();
            resolve();
        });
    }//end of FUNCTION init without delete
}//end of EXPORT DEFAULT
import { deleteDatabase } from "./DB";
import InitializeDB from "./InitializeDB";

export default {
    delete() {
        return new Promise(async resolve => {
            await deleteDatabase();
            await InitializeDB.initWithoutDelete();
            resolve();
        });
    },//end of FUNCTION DELETE

    deleteOnly() {
        return new Promise(async resolve => {
            await deleteDatabase();
            resolve();
        });
    }//end of FUNCTION DELETE ONLY

}//end of EXPORT DEFAULT
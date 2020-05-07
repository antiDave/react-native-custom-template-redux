export function singleSelection(array, keyChangeName, index) {
    return new Promise((resolve) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (i === index) {
                element[keyChangeName] = !element[keyChangeName];
            }
            else {
                element[keyChangeName] = false;
            }
        }//end of For LOOP

        resolve(array);
    })//end of PROMISE
}//end of singleSelection

export function singleSelectionWithoutRemoval(array, keyChangeName, index) {
    return new Promise((resolve) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (i === index) {
                element[keyChangeName] = true;
            }
            else {
                element[keyChangeName] = false;
            }
        }//end of For LOOP

        resolve(array);
    })//end of PROMISE
}//end of singleSelection


export function multiSelection(array, keyChangeName, index) {
    return new Promise((resolve) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (i === index) {
                element[keyChangeName] = !element[keyChangeName];
            }
        }//end of For LOOP

        resolve(array);
    })//end of PROMISE
}//end of multiSelection


export function allSelection(array, keyChangeName) {
    return new Promise((resolve) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            element[keyChangeName] = true;

        }//end of For LOOP

        resolve(array);
    })//end of PROMISE
}//end of allSelection



export function allUnselection(array, keyChangeName) {
    return new Promise((resolve) => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element[keyChangeName] = false;

        }//end of For LOOP

        resolve(array);
    })//end of PROMISE
}//end of allSelection


export function anySelected(array, keyChangeName) {
    return new Promise((resolve) => {
        let check = false;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element[keyChangeName]) {
                check = true;
            }

        }//end of For LOOP

        resolve(check);
    })//end of PROMISE
}//end of anySelected

export function selectedItem(array, keyChangeName) {
    return new Promise((resolve) => {
        let check = null;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element[keyChangeName]) {
                check = element;
            }

        }//end of For LOOP

        resolve(check);
    })//end of PROMISE
}//end of anySelected



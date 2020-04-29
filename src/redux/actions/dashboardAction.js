import { INCREMENTNUMBER1, DECREMENTNUMBER1, INCREMENTNUMBER2, DECREMENTNUMBER2 } from "./types";

export function incrementNumber1() {
    return { type: INCREMENTNUMBER1 };
}

export function decrementNumber1() {
    return { type: DECREMENTNUMBER1 };
}

export function incrementNumber2() {
    return { type: INCREMENTNUMBER2 };
}

export function decrementNumber2() {
    return { type: DECREMENTNUMBER2 };
}

export const Regex = {
    emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(\s*)$/,
    verficationCodw: /^\s*[a-z|A-Z|0-9|\s]{6}\s*$/,
    password: /^(?=.*\d).{6,100}$/,
    numberOnly: /^\d+$/,
    numberWithBackSlash: /^[0-9|/]+$/,
}

export class RegexValidator {
    email = text => {
        return new Promise(async (resolve) => {
            const res = validator(Regex.emailRegex, text);
            resolve(res);
        })
    };

    password = text => {
        return new Promise(async (resolve) => {
            const res = validator(Regex.password, text);
            resolve(res);
        })
    }

}

function validator(regex, text) {
    return new Promise(async resolve => {

        if (regex.test(text)) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}
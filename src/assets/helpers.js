const isEmptyObj = obj => {
    for (let key in obj) {
        return false;
    }
    return true;
};

const str2bool = str => {
    if (str && typeof str === "string") {
        if (str.toLowerCase() === "true") return true;
        if (str.toLowerCase() === "false") return false;
    }
    return str;
};

export { isEmptyObj, str2bool };
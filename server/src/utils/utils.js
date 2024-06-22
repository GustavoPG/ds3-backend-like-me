import ERRORS from "../helpers/errors.js";

const searchError = (code) => {
    return ERRORS.filter((err) => err.code == code);
}

export { searchError };
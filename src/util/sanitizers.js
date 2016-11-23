function sanitizeParamIntegers(integers, req) {
    integers.forEach(param => req.sanitizeParams(param).toInt());
}

module.exports = {
    sanitizeParamIntegers
};

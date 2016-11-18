function sanitizeIntegers(integers, req){
  integers.forEach(param => req.sanitizeParams(param).toInt());
}

module.exports = {
  sanitizeIntegers
};

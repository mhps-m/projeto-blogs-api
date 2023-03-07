const HttpErrors = require('http-errors');

module.exports = (schema, data, message) => {
  const { error } = schema.validate(data);

  if (error) {
    throw new HttpErrors(400, message || error.message);
  }
};
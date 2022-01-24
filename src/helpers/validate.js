function validate(datos = {}, keys = []) {
  let errors = [];
  keys.forEach((k) => {
    if (!datos[k]) {
      errors.push(k);
    }
  });
  return errors.join(", ");
}

module.exports = validate;

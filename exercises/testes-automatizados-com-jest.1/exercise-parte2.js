function encode(str) {
  str = str.split('');
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === 'a') str[index] = '1';
    if (str[index] === 'e') str[index] = '2';
    if (str[index] === 'i') str[index] = '3';
    if (str[index] === 'o') str[index] = '4';
    if (str[index] === 'u') str[index] = '5';
  }
  return str.join('');
}

function decode(str) {
  str = str.split('');
  for (let key = 0; key < str.length; key += 1) {
    if (str[key] === '1') str[key] = 'a';
    if (str[key] === '2') str[key] = 'e';
    if (str[key] === '3') str[key] = 'i';
    if (str[key] === '4') str[key] = 'o';
    if (str[key] === '5') str[key] = 'u';
  }
  return str.join('');
}

function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let object = [];
  for (let index = 0; index < array.length; index += 1) {
    object.push({ tech: array[index], name });
  }
  return object;
}


module.exports = {
  encode,
  decode,
  techList
}
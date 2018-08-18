const hexRegex = /^([0-9A-Fa-f]{2})*$/;

const isHex = str => {
  try {
    return hexRegex.test(str);
  } catch (err) {
    return false;
  }
};

const ensureHex = str => {
  if (!isHex(str)) throw new Error(`Expected a hexstring but got ${str}`);
};

const reverseHex = hex => {
  ensureHex(hex);
  let out = "";
  for (let i = hex.length - 2; i >= 0; i -= 2) {
    out += hex.substr(i, 2);
  }
  return out;
};

const byteToHexString = uint8arr => {
  if (!uint8arr) {
    return "";
  }

  let hexStr = "";
  for (let i = 0; i < uint8arr.length; i += 1) {
    let hex = (uint8arr[i] & 0xff).toString(16);
    hex = (hex.length === 1) ? '0' + hex : hex;
    hexStr += hex;
  }

  return hexStr;
}

export default uint8arr => reverseHex(byteToHexString(uint8arr));

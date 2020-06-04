export function findKeyValue(object, requestedKey): string | {[key: string]: string} {
  let value: string | {[key: string]: string};

  Object.keys(object).find(function(k) {
    if (k === requestedKey) {
      value = object[k];
      return true;
    }
    if (object[k] && (object[k] instanceof Object || object[k] instanceof Array)) {
      value = findKeyValue(object[k], requestedKey);
      return value !== undefined;
    }
  });

  return value || `key isn't available`;
}

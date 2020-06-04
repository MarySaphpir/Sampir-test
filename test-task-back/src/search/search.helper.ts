import { MOCK_DATA } from '../mock/mock-data';

export function findKeyValue(object, requestedKey): string {
  let value;
  Object.keys(object).some(function(k) {
    if (k === requestedKey) {
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === 'object') {
      value = findKeyValue(object[k], requestedKey);
      return value !== undefined;
    }
  });
  return value;
}

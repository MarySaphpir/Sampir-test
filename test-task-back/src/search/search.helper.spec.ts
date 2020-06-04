import { findKeyValue } from './search.helper';
import { MOCK_DATA } from '../mock/mock-data';

describe('SearchController', () => {
  const searchHelper = findKeyValue;

  describe('Check search function', () => {
    it('should return empty array', async() => {
      expect(searchHelper(MOCK_DATA, 'cofaxCDSS')).toBe(`key isn't available`);
    });
    it("should return a slash", async () => {
      expect(searchHelper(MOCK_DATA, 'c')).toBe(`key isn't available`);
    });
  });
});

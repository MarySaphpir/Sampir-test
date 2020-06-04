import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchProvider } from './search.provider';

describe('SearchController', () => {
  let searchController: SearchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchProvider],
    }).compile();
    searchController = app.get<SearchController>(SearchController);
  });

  describe('root', () => {
    it('should return empty array', () => {
      let result = '';
      searchController.findWithQuery({query: '123'})
        .then(res => result = res);
      expect(result).toBe('');
    });
    it("should return an entity of client if successful", async () => {
      let result = '';
      await searchController.findWithQuery({query: 'cofaxCDS'}).then(res => result = res);
      expect(result).toBe('/');
    });
  });
});

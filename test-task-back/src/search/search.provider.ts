import { Injectable } from '@nestjs/common';
import { findKeyValue } from './search.helper';
import { MOCK_DATA } from '../mock/mock-data';

@Injectable()
export class SearchProvider {
  findIssue(query: string): string {
    return findKeyValue(MOCK_DATA, query);
  }
}

import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PanamaPapersDataService } from './panama-papers-data.service';

describe('PanamaPapersData Service', () => {
  beforeEachProviders(() => [PanamaPapersDataService]);

  it('should ...',
      inject([PanamaPapersDataService], (service: PanamaPapersDataService) => {
    expect(service).toBeTruthy();
  }));
});

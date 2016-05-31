import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HiMooAppComponent } from '../app/hi-moo.component';

beforeEachProviders(() => [HiMooAppComponent]);

describe('App: HiMoo', () => {
  it('should create the app',
      inject([HiMooAppComponent], (app: HiMooAppComponent) => {
    expect(app).toBeTruthy();
  }));
});

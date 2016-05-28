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

  it('should have as title \'hi-moo works!\'',
      inject([HiMooAppComponent], (app: HiMooAppComponent) => {
    expect(app.title).toEqual('hi-moo works!');
  }));
});

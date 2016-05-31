import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PanamaPaperNetworkComponent } from './panama-paper-network.component';

describe('Component: PanamaPaperNetwork', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PanamaPaperNetworkComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PanamaPaperNetworkComponent],
      (component: PanamaPaperNetworkComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PanamaPaperNetworkComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PanamaPaperNetworkComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-panama-paper-network></app-panama-paper-network>
  `,
  directives: [PanamaPaperNetworkComponent]
})
class PanamaPaperNetworkComponentTestController {
}


import { Component } from '@angular/core';
import {PanamaPaperNetworkComponent} from './panama-paper-network/panama-paper-network.component';

@Component({
  moduleId: module.id,
  selector: 'hi-moo-app',
  templateUrl: 'hi-moo.component.html',
  styleUrls: ['hi-moo.component.css'],
  directives: [PanamaPaperNetworkComponent]
})
export class HiMooAppComponent {
  constructor() {
  }
}

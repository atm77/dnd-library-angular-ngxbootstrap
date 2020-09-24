import { Component } from '@angular/core';

import { CommonModalsService  } from './shared/services/common-modals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private commonModalsService: CommonModalsService) {

  }

  openAlertModal() {
    this.commonModalsService.startLoading('231232');
    this.commonModalsService.showAlert('okok', 'okok');

    window.setTimeout(() => {
      this.commonModalsService.stopLoading();
    }, 20000)


  }

}

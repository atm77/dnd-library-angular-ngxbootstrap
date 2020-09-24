import { Injectable } from "@angular/core";

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { LoadingModalComponent } from '../loading-modal/loading-modal.component';

@Injectable({
  providedIn: 'root',
})
export class CommonModalsService {

  constructor( private modalService: BsModalService) {}

  showAlert(title: string, message: string): void {
    const modal = this.modalService.show(AlertModalComponent, { class: 'modal-lg' });
    modal.content.title = title;
    modal.content.message = message;
  }

  startLoading(message: string) {
    const modal = this.modalService.show(AlertModalComponent, { class: 'modal-lg', id: 999 });
    modal.content.message = message;
  }

  stopLoading() {
    this.modalService.hide(999);
  }

}

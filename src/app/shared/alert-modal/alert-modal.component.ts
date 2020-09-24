import { Component, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: 'alert-modal.component.html'
})
export class AlertModalComponent {

  constructor(private activeModal: BsModalRef) {}

  @Input() title: string;
  @Input() message: string;

  closeModal() {
    this.activeModal.hide();
  }
}

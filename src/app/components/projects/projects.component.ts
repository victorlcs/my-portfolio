import { Component, OnInit, TemplateRef } from '@angular/core';
import { angularIcon, bootstrapIcon } from 'src/app/fort-icons/fort-icon';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  angularIcon = angularIcon;
  bootstrapIcon = bootstrapIcon;
  bsModalRef?: BsModalRef;

  constructor(
    private deviceService: DeviceDetectorService,
    private modalService: BsModalService
  ) {}

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        title: '',
        message: 'Not available in mobile. Please open with desktop/laptop.',
      },
      class: 'modal-dialog-centered',
    };
    this.bsModalRef = this.modalService.show(DialogComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {}

  goToLink(url: string, forDesktopOnlyflag: boolean = false) {
    if (forDesktopOnlyflag) {
      this.deviceService.isDesktop()
        ? window.open(url, '_blank')
        : this.openModalWithComponent();
    } else {
      window.open(url, '_blank');
    }
  }
}

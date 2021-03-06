import { Component } from '@angular/core';
import {CreateMaskComponent} from "./Components/create-mask/create-mask.component";
import {Newspaper} from "./Interfaces/newspaper";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-News';
  isOpen = false;
  modalRef: MdbModalRef<CreateMaskComponent> | null = null;
  dark: any;

  constructor(
    private modalService: MdbModalService
  ) {}

  openModalCreate() {
    this.modalRef = this.modalService.open(CreateMaskComponent, {
      modalClass: 'modal-dialog-centered, modal-lg'
    });

  }

  addNews($event: any) {
    console.log("YESSS");
  }
}

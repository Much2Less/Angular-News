import { Component, OnInit } from '@angular/core';
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {CreateMaskComponent} from "../create-mask/create-mask.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  title = 'Angular-News';
  isOpen = false;
  modalRef: MdbModalRef<CreateMaskComponent> | null = null;
  dark: any;

  constructor(
    private modalService: MdbModalService
  ) {}

  ngOnInit() {
  }

  openModalCreate() {
    this.modalRef = this.modalService.open(CreateMaskComponent, {
      modalClass: 'modal-dialog-centered, modal-lg'
    });

  }

  addNews($event: any) {
    console.log("YESSS");
  }
}

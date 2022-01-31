import { Component, OnInit } from '@angular/core';
import { OverlayService } from "../../Services/overlay.service";

@Component({
  selector: 'app-create-mask',
  templateUrl: './create-mask.component.html',
  styleUrls: ['./create-mask.component.css']
})
export class CreateMaskComponent implements OnInit {

  private _visible=false;

  constructor() { }

  ngOnInit(): void {
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }
}

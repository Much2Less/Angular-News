import {Injectable, ViewContainerRef} from '@angular/core';
import { CreateButtonComponent } from "../Components/create-button/create-button.component";
import { CreateMaskComponent } from "../Components/create-mask/create-mask.component";
import {Overlay, OverlayRef} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    ) { }

  triggerCreateMask() {
  }
}

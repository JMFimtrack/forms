import { Component } from '@angular/core';
import { InputTextComponent } from "../../components/input-text/input-text.component";

@Component({
  selector: 'app-presta-prenda',
  imports: [
    InputTextComponent
  ],
  templateUrl: './presta-prenda.component.html',
  styleUrl: './presta-prenda.component.scss'
})
export class PrestaPrendaComponent {
  public text: string = "presta-prenda works!"
}

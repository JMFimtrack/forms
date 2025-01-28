import { Component } from '@angular/core';

import { InputAreaComponent } from "../../components/input-area/input-area.component";
import { InputColorComponent } from "../../components/input-color/input-color.component";
import { InputCompleteComponent } from "../../components/input-complete/input-complete.component";
import { InputDateComponent } from "../../components/input-date/input-date.component";
import { InputDatetimelocalComponent } from "../../components/input-datetimelocal/input-datetimelocal.component";
import { InputEmailComponent } from "../../components/input-email/input-email.component";
import { InputFileComponent } from "../../components/input-file/input-file.component";
import { InputListComponent } from "../../components/input-list/input-list.component";
import { InputMonthComponent } from "../../components/input-month/input-month.component";
import { InputNumberComponent } from "../../components/input-number/input-number.component";
import { InputPasswordComponent } from "../../components/input-password/input-password.component";
import { InputPickerdateComponent } from "../../components/input-pickerdate/input-pickerdate.component";
import { InputPickertimeComponent } from "../../components/input-pickertime/input-pickertime.component";
import { InputSearchComponent } from "../../components/input-search/input-search.component";
import { InputTelComponent } from "../../components/input-tel/input-tel.component";
import { InputTextComponent } from "../../components/input-text/input-text.component";
import { InputTimeComponent } from "../../components/input-time/input-time.component";
import { InputUrlComponent } from "../../components/input-url/input-url.component";
import { InputWeekComponent } from "../../components/input-week/input-week.component";

@Component({
  selector: 'app-presta-prenda',
  imports: [
    InputAreaComponent,
    InputColorComponent,
    InputCompleteComponent,
    InputDateComponent,
    InputDatetimelocalComponent,
    InputEmailComponent,
    InputFileComponent,
    InputListComponent,
    InputMonthComponent,
    InputNumberComponent,
    InputPasswordComponent,
    //InputPickerdateComponent,
    //InputPickertimeComponent,
    InputSearchComponent,
    InputTelComponent,
    InputTextComponent,
    InputTimeComponent,
    InputUrlComponent,
    InputWeekComponent
  ],
  templateUrl: './presta-prenda.component.html',
  styleUrl: './presta-prenda.component.scss'
})
export class PrestaPrendaComponent {
  public title: string = "Presta prenda"
  public text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar, arcu consectetur fringilla finibus, mauris nisl pretium est, non varius orci augue sed elit. Etiam quam ipsum, accumsan sit amet erat sit amet, porta venenatis augue. Donec ut accumsan libero, sit amet accumsan felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet urna nulla. Quisque in justo ut justo laoreet consectetur id id nunc. Duis in laoreet mauris. Quisque tristique molestie leo, ac accumsan eros elementum quis. Curabitur vel orci ut nisl sagittis porta. Morbi sit amet lacinia est. Curabitur venenatis, mauris eu efficitur ultrices, diam augue vehicula velit, ullamcorper vehicula orci ante sed turpis. In in leo vel tellus ultrices dictum. Quisque venenatis, turpis eget pulvinar vehicula, libero ex aliquam quam, at congue felis purus vitae dolor. Etiam sit amet fermentum mi, vel varius purus.`

  public formList: any[] = [
    {
      type: 'complete',
      label: 'Plaza'
    },
    {
      type: 'list',
      label: 'Servicio requerido'
    },
    {
      type: 'complete',
      label: 'Tiendas'
    },
    {
      type: 'file',
      label: 'INE'
    },
    {
      type: 'file',
      label: 'Factura unidad'
    },
    {
      type: 'file',
      label: 'Pago servicio'
    },
    {
      type: 'file',
      label: 'Documento Retiro'
    },
    {
      type: 'text',
      label: 'Numero Contrato'
    },
    {
      type: 'text',
      label: 'Nombre titular'
    },
    {
      type: 'text',
      label: 'Serie unidad'
    },
    {
      type: 'datetimelocal',
      label: 'Horario instalacion'
    },
  ];
}
// { type: 'area' },
// { type: 'color' },
// { type: 'complete' },
// { type: 'date' },
// { type: 'datetimelocal' },
// { type: 'email' },
// { type: 'file' },
// { type: 'list' },
// { type: 'month' },
// { type: 'number' },
// { type: 'password' },
// { type: 'pickerdate' },
// { type: 'pickertime' },
// { type: 'search' },
// { type: 'tel' },
// { type: 'text' },
// { type: 'time' },
// { type: 'url' },
// { type: 'week' }

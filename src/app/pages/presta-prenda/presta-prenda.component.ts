import { Component, inject } from '@angular/core';

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

import { InputButtonComponent } from "../../components/input-button/input-button.component";
import { InputCleanComponent } from "../../components/input-clean/input-clean.component";

import { SkelAnimationComponent } from "../../components/skel-animation/skel-animation.component";

import { DataSheetsService } from "../../services/data-sheets.service";
import { DataFormService } from "../../services/data-form.service";
import { ShareCompleteService } from "../../services/share-complete.service";

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
    InputWeekComponent,
    SkelAnimationComponent,
    InputButtonComponent,
    InputCleanComponent
  ],
  templateUrl: './presta-prenda.component.html',
  styleUrl: './presta-prenda.component.scss'
})
export class PrestaPrendaComponent {
  private apiUrl = inject(DataSheetsService);
  private shareComplete = inject(ShareCompleteService);
  private dataForm = inject(DataFormService);
  public data: any = [];
  private cleanData: any = {
    plazas: [],
    tiendas: {}
  };

  public title: string = "Presta prenda"
  public text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar, arcu consectetur fringilla finibus, mauris nisl pretium est, non varius orci augue sed elit. Etiam quam ipsum, accumsan sit amet erat sit amet, porta venenatis augue. Donec ut accumsan libero, sit amet accumsan felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet urna nulla. Quisque in justo ut justo laoreet consectetur id id nunc. Duis in laoreet mauris. Quisque tristique molestie leo, ac accumsan eros elementum quis. Curabitur vel orci ut nisl sagittis porta. Morbi sit amet lacinia est. Curabitur venenatis, mauris eu efficitur ultrices, diam augue vehicula velit, ullamcorper vehicula orci ante sed turpis. In in leo vel tellus ultrices dictum. Quisque venenatis, turpis eget pulvinar vehicula, libero ex aliquam quam, at congue felis purus vitae dolor. Etiam sit amet fermentum mi, vel varius purus.`

  public formList: any[] = [];

  start = [
    {
      type: 'complete',
      label: 'Plaza'
    },
    {
      type: 'complete',
      label: 'Tienda'
    },
    {
      type: 'list',
      label: 'Servicio requerido'
    },
  ]

  end = [
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
  ]

  retiro = [
    {
      type: 'file',
      label: 'Documento Retiro'
    },
  ]

  instalacion = [
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
  ]

  public onInput(event: string) {
    const service = this.shareComplete.getServicio()

    service === 'mantenimiento'
      ? this.formList = [...this.start, ...this.end]
      : service === 'retiro'
        ? this.formList = [...this.start, ...this.retiro, ...this.end]
        : service === 'instalacion'
          ? this.formList = [...this.start, ...this.instalacion, ...this.end]
          : null;
  }

  public send(event: Event) {
    //console.log(event);
    //this.dataForm.setFormData('fuck', 'hola')
    //this.dataForm.setFormData('shit', 'adios')
    const element = this.dataForm.getFormData()
    console.log(Object.fromEntries(element));

  }

  async ngOnInit() {
    this.formList = [...this.start, ...this.end]

    await (async () => this.data = await this.apiUrl.getData())();

    await this.data.forEach((element: any) => {
      this.cleanData.plazas.push(String(element.entidad));
      this.cleanData.tiendas[element.entidad] === undefined
       ? this.cleanData.tiendas[element.entidad] = []
       : this.cleanData.tiendas[element.entidad] = [
           ...this.cleanData.tiendas[element.entidad],
           element.nombre_pdc
         ];
    });

    this.cleanData.plazas = await [...new Set(this.cleanData.plazas)];
    this.shareComplete.setData(this.cleanData);
  };
};

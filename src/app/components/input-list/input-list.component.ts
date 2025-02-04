import {ChangeDetectionStrategy, Component, signal, inject, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroupDirective, NgForm} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ErrorStateMatcher} from '@angular/material/core';

import { DataFormService } from "../../services/data-form.service";
import { ShareCompleteService } from "../../services/share-complete.service";

@Component({
  selector: 'input-list',
  templateUrl: './input-list.component.html',
  styleUrl: './input-list.component.scss',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputListComponent {
  @Input() values: any = {};
  @Output() servicesEvent = new EventEmitter<string>();

  protected shareComplete = inject(ShareCompleteService);
  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(this.value(), [Validators.required]);

  public inputList: any = []

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLElement).innerText);
    const isValue = (event.target as HTMLElement).innerText;

    this.dataForm.setData(this.nameFormControl.value || '');
    this.shareComplete.setServicio(this.nameFormControl.value || '');
    //this.servicesEvent.emit(this.nameFormControl.value || '');
    this.servicesEvent.emit(this.nameFormControl.value || '');

    this.dataForm.setFormData(this.values.control, isValue)

    return
  }

  protected getHours() {
    const hoursList = [
      {value: '09:00', text: '09:00'},
      {value: '10:00', text: '10:00'},
      {value: '11:00', text: '11:00'},
      {value: '12:00', text: '12:00'},
      {value: '13:00', text: '13:00'},
      {value: '14:00', text: '14:00'},
      {value: '15:00', text: '15:00'},
      {value: '16:00', text: '16:00'},
      {value: '17:00', text: '17:00'},
      {value: '18:00', text: '18:00'},
      {value: '19:00', text: '19:00'}
    ]

    const ahora = new Date();
    const limite = new Date(ahora.getTime() + 2 * 60 * 60 * 1000);

    return hoursList.filter(hora => {
        const [horaStr, minutoStr] = hora.value.split(':');
        const fechaHora = new Date(ahora);
        fechaHora.setHours(parseInt(horaStr), parseInt(minutoStr), 0, 0);

        return fechaHora > limite;
    });
  };

  protected getDates() {
    const dates = [];
    const hoy = new Date();
    const fechaInicio = new Date(hoy);

    fechaInicio.setDate(hoy.getDate() + 1);

    for (let i = 0; i < 15; i++) {
      const fechaActual = new Date(fechaInicio);
      fechaActual.setDate(fechaInicio.getDate() + i);

      const dayOfWeek = fechaActual.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        continue;
      }

      const day = String(fechaActual.getDate()).padStart(2, '0');
      const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
      const year = fechaActual.getFullYear();
      const fechaFormateada = `${day}-${month}-${year}`;

      dates.push({
        value: fechaFormateada,
        text: fechaFormateada
      });
    }

    return dates;
  };

  ngOnInit() {
    this.values.label === 'Servicio requerido'
      ? null
      : this.values.label === 'Dia instalacion'
        ? this.inputList = this.getDates()
        : this.values.label === 'Hora instalacion'
          ? this.inputList = this.getHours()
          : null;
  }
}

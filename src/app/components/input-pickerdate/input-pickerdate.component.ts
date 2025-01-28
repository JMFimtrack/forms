import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-pickerdate',
  templateUrl: './input-pickerdate.component.html',
  styleUrl: './input-pickerdate.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputPickerdateComponent {
  //protected dataForm = inject(DataFormService);
  //protected readonly value = signal('');
  ////  value: Date;

  //protected nameFormControl = new FormControl(
  //  this.value(),
  //  [
  //    Validators.required,
  //    Validators.minLength(10),
  //    Validators.maxLength(10),
  //    Validators.pattern('[a-zA-Z ]*')
  //  ]
  //);

  //protected onInput(event: Event) {
  //  this.value.set((event.target as HTMLInputElement).value);

  //  this.dataForm.setData(this.nameFormControl.value || '');
  //  console.log('this', this.dataForm.getData());
  //  console.log(this.nameFormControl.errors);

  //}
  protected dataForm = inject(DataFormService);
  public valueTime: string = '';
  protected readonly value = signal(this.valueTime);

  protected nameFormControl = new FormControl(this.value(), [Validators.required]);

  protected onInput() {
    this.value.set(this.valueTime);
    this.nameFormControl.setValue(this.value());

    this.dataForm.setData(this.nameFormControl.value || '');
    console.log('this', this.dataForm.getData());
    console.log(this.nameFormControl.errors);
  }

   ngDoCheck() {
     this.onInput();
   }
}

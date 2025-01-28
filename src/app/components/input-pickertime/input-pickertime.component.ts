import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-pickertime',
  templateUrl: './input-pickertime.component.html',
  styleUrl: './input-pickertime.component.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatDatepickerModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputPickertimeComponent {
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

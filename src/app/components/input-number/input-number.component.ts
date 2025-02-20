import {ChangeDetectionStrategy, Component, signal, inject, Input} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputNumberComponent {
  @Input() values: any = {};

  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(
    this.value(),
    [
      Validators.required,
      Validators.minLength(this.values.min),
      Validators.maxLength(this.values.max),
      Validators.pattern('[1-90 ]*')
    ]
  );

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);

    this.dataForm.setData(this.nameFormControl.value || '');
    console.log('this', this.dataForm.getData());
    console.log(this.nameFormControl.errors);

  }

}

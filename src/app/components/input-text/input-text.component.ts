import {ChangeDetectionStrategy, Component, signal, inject, Input} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent {
  @Input() values: any = {};

  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(
    this.value(),
    [
      Validators.required,
      Validators.minLength(this.values.min),
      Validators.maxLength(this.values.max),
      Validators.pattern('[a-zA-Z1-90 ]*')
    ]
  );

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
    const isValue = (event.target as HTMLInputElement).value;

    this.dataForm.setData(this.nameFormControl.value || '');

    this.dataForm.setFormData(this.values.control, isValue)
    return
  }
}

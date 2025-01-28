import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-tel',
  templateUrl: './input-tel.component.html',
  styleUrl: './input-tel.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTelComponent {
  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(
    this.value(),
    [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z ]*')
    ]
  );

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);

    this.dataForm.setData(this.nameFormControl.value || '');
    console.log('this', this.dataForm.getData());
    console.log(this.nameFormControl.errors);

  }

}

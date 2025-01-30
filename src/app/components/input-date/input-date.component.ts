import {ChangeDetectionStrategy, Component, signal, inject, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { DataFormService } from "../../services/data-form.service";

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateComponent {
  @Input() values: any = {};

  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(
    this.value(),
    [
      Validators.required
    ]
  );

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);

    this.dataForm.setData(this.nameFormControl.value || '');
  }
}

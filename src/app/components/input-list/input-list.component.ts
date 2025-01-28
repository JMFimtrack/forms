import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroupDirective, NgForm} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ErrorStateMatcher} from '@angular/material/core';

import { DataFormService } from "../../services/data-form.service";

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
  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(this.value(), [Validators.required]);

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLElement).innerText);

    this.dataForm.setData(this.nameFormControl.value || '');
    console.log('this', this.dataForm.getData());
    console.log(this.nameFormControl.errors);
  }
}

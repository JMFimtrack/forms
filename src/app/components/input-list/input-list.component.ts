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
}

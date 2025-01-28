import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { DataFormService } from "../../services/data-form.service";


@Component({
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFileComponent {
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
//
//  protected readonly value = signal('');
//  nombre = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[A-ZÑÁÉÍÓÚ1-90.,:/ ]*$")]);
//
//  protected onInput(event: Event) {
//    this.value.set((event.target as HTMLInputElement).value);
//    this.myEvent.emit({
//      label: this.currentInputList[0].label,
//      text:`${this.value()}`
//    });
//  }
//
  capture(event: Event) {
    //const value = (event.target as HTMLInputElement).value;
    //if (value !== '') {
    //  this.isDisabled = false;
    //} else {
    //  this.isDisabled = true;
    //}
    //this.value = value;
  };
//
//  ngOnInit() {
//    this.nombre.setValue(this.currentInputList[0].capture);
//    this.value.set(this.nombre.value || '');
//    this.myEvent.emit({
//      label: this.currentInputList[0].label,
//      text:`${this.value()}`
//    });
//  }
}

import {ChangeDetectionStrategy, Component, signal, inject, OnInit, Input} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DataFormService } from "../../services/data-form.service";
import { ShareCompleteService } from "../../services/share-complete.service";

interface InterfaceValues {
  type?: string,
  label?: string
}

@Component({
  selector: 'input-complete',
  templateUrl: './input-complete.component.html',
  styleUrl: './input-complete.component.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ]
})
export class InputCompleteComponent {
  @Input() values: any = {};

  protected shareComplete = inject(ShareCompleteService);
  protected dataForm = inject(DataFormService);
  protected data = this.shareComplete.getData();
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(
    this.value(), [
      Validators.required,
      Validators.minLength(this.values.min),
      Validators.maxLength(this.values.max),
      Validators.pattern('[a-zA-Z ]*')
    ]);

  options: any = [];
  filteredOptions!: Observable<string[]>;

  protected  async setData() {
    const plaza = await this.shareComplete.getPlaza();

    this.values.label === 'Plaza'
      ? this.options = this.data.plazas
      : this.values.label === 'Tienda' && plaza !== ''
        ? this.options = this.data.tiendas[plaza]
        : this.options = []

    return
  }

  protected onInput(event: Event, type: string) {
    let isValue = '';

    type === 'click'
      ? isValue = (event.target as HTMLInputElement).innerText
      : type === 'keydown'
        ? isValue = (event.target as HTMLInputElement).value
        : null;

    this.values.label === 'Plaza'
     ? this.shareComplete.setPlaza(isValue)
     : this.values.label === 'Tienda'
      ? this.shareComplete.setTienda(isValue)
      : null;

    this.dataForm.setFormData(this.values.control, isValue)

    this.setData();
    this.setData();
    this.setData();
    this.setData();

    return
  };

  ngOnInit() {
    this.filteredOptions = this.nameFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.setData();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: any) => option.toLowerCase().includes(filterValue));
  }
}

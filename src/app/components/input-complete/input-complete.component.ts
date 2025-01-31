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
  public element: string = '';

  protected nameFormControl = new FormControl(this.value(), [Validators.required]);

  options: any = [];
  filteredOptions!: Observable<string[]>;

  protected setData() {
    const plaza = this.shareComplete.getPlaza();
    this.element = plaza;

    this.values.label === 'Plaza'
      ? this.options = this.data.plazas
      : this.values.label === 'Tiendas' && plaza !== ''
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
     : this.values.label === 'Tiendas'
      ? this.shareComplete.setTienda(isValue)
      : null;


    this.dataForm.setFormData(this.values.label, isValue)
    //this.values.label === 'Plaza'
    // ? this.dataForm.setFormData('plaza', isValue)
    // : this.values.label === 'Tiendas'
    //  ? this.dataForm.setFormData('tienda', isValue)
    //  : null;

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

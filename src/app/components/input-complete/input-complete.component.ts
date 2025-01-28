import {ChangeDetectionStrategy, Component, signal, inject, OnInit} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DataFormService } from "../../services/data-form.service";

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
  protected dataForm = inject(DataFormService);
  protected readonly value = signal('');

  protected nameFormControl = new FormControl(this.value(), [Validators.required]);

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);

    this.dataForm.setData(this.nameFormControl.value || '');
    console.log('this', this.dataForm.getData());
    console.log(this.nameFormControl.errors);

  }

  ngOnInit() {
    this.filteredOptions = this.nameFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

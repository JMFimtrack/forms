import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  //protected data: Signal<any> = signal({});
  protected data: string = '';
  protected dataForm = new FormData();

  constructor() { }

  getData() {
    return this.data;
  }

  setData(data: string) {
    return this.data = data
  }

  getFormData() {
    return this.dataForm;
  }

  setFormData(nameData: string, data: string | File) {
    return this.dataForm.append(nameData, data);
  }
}

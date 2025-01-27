import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  //protected data: Signal<any> = signal({});
  protected data: string = '';

  constructor() { }

  getData() {
    return this.data;
  }

  setData(data: string) {
    return this.data = data
  }
}

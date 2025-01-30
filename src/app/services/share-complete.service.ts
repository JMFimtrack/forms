import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareCompleteService {
  protected data: any = signal({});
  protected tiendas: any = signal([]);
  protected plaza: any = signal('');
  protected tienda: any = signal('');
  protected servicio: string = '';

  constructor() { }

  getData() {
    return this.data();
  };

  setData(data: any) {
    return this.data.set(data);
  };

  getPlaza() {
    return this.plaza();
  };

  setPlaza(plaza: string) {
    return this.plaza.set(plaza);
  };

  getTienda() {
    return this.tienda();
  };

  setTienda(tienda: string) {
    return this.tienda.set(tienda);
  };

  getTiendas() {
    return this.tiendas();
  };

  setTiendas(tiendas: string[]) {
    return this.tiendas.set(tiendas);
  };

  getServicio() {
    return this.servicio;
  };

  setServicio(servicio: string) {
    return this.servicio = servicio;
  };
}

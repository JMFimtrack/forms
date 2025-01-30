import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BurnDataService } from "./burn-data.service";

@Injectable({
  providedIn: 'root'
})
export class DataSheetsService {
  private burnData: BurnDataService = inject(BurnDataService);
  private http: HttpClient = inject(HttpClient);

  getData() {
    return this.burnData.getBurnData();
    //this.http.get(url, {observe: 'response'}).subscribe(
    //  (response) => {
    //    console.log('Response status:', response.status);
    //    console.log('Body:', response.body);
    //  },
    //  (error) => {
    //    //this.error = 'No se pudieron cargar los datos. Verifica la configuración.'; // Manejo de errores
    //    console.error(error); // Mostramos el error en la consola
    //  }
    //);
  }

  getBurnData() {
  };

  //postData() {
  //}
}

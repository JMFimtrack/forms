import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { BurnDataService } from "./burn-data.service";

@Injectable({
  providedIn: 'root'
})
export class DataSheetsService {
  private burnData: BurnDataService = inject(BurnDataService);
  private http: HttpClient = inject(HttpClient);
  private sheetId: string = environment.sheetId;
  private apiKey: string = environment.apiKey;

  getData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/A:H?key=${this.apiKey}`;
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

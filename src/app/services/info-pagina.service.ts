import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio de info listo');
    this.cargaInfo();
    this.cargaEquipo();
  }

  private cargaInfo() {
    // Leer un archivo JSON
    this.http
      .get('assets/data/data-pages.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargaEquipo() {
    this.http
      .get('https://ng-portafolio-ebd80-default-rtdb.firebaseio.com/.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
        console.log(resp)
      });
  }
}

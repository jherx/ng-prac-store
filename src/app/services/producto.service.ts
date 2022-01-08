import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})

export class ProductoService {
   cargando = true;
   productos: Producto [] = [];


  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos():any {

    this.http.get('https://ng-portafolio-ebd80-default-rtdb.firebaseio.com/productos_idx.json') 
    .subscribe((resp:any)=>{
      console.log(resp);
      this.productos = resp;
      this.cargando = false;
    });
  }
}

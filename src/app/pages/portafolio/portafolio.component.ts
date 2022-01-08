import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {
  constructor(public productosService: ProductoService) {}

  objectKeys (objeto: any[]) {
    const keys = Object.keys(objeto);
    //console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }
  ngOnInit(): void {}
}

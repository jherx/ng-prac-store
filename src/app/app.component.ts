import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public InfoPaginaService: InfoPaginaService,
    public productosService: ProductoService
  ) {}
}

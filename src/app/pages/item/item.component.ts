import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/prod.descripcion.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  cargando = true;

  constructor(private route: ActivatedRoute,
    public productoService: ProductoService) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      setTimeout(() => {
        this.cargando = false;
      }, 50000);
      
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion) => {
        console.log(producto);
      })
    });
  }
}

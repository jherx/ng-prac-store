import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _infoService: InfoPaginaService) { }

  objectKeys (objeto: any[]) {
    const keys = Object.keys(objeto);
    //console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
    return keys;
 }
  ngOnInit(): void {
  }

}

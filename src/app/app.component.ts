import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { PorductosService } from './services/porductos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor( public infoPaginaService: InfoPaginaService,
               public productosService: PorductosService) {

  }

}

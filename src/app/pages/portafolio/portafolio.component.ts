import { Component, OnInit } from '@angular/core';
import { PorductosService } from 'src/app/services/porductos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public productosService: PorductosService) { }

  ngOnInit() {
  }

}

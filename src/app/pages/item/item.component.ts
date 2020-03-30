import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PorductosService } from 'src/app/services/porductos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;
  constructor( private route: ActivatedRoute,
               private productoService: PorductosService) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      // console.log(parametros.id);
      this.productoService.getProducto(parametros.id)
      .subscribe( (producto: ProductoDescripcion) => {
        this.producto = producto;
        this.id = parametros.id;      });
    });
  }

}

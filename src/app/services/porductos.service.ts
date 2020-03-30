import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../interfaces/producto.interface';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PorductosService {

  cargando = true;
  productos: Produto[] = [];
  productosFiltrado: Produto[] = [];
  loadFiltro: boolean;
  filtroNoFound: boolean;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise(( resolve, reject ) =>{
      this.http.get('https://plantilla-angular.firebaseio.com/productos_idx.json')
      .subscribe((resp: Produto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
    });
  });
  }

  getProducto(id: string) {
   return this.http.get(`https://plantilla-angular.firebaseio.com/productos/${ id }.json`);
     }
  buscarProducto( termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos( termino );
      });
    } else {
      // tslint:disable-next-line: no-unused-expression
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino: string) {

  this.productosFiltrado = [];
  termino = termino.toLocaleLowerCase();
  this.productos.forEach( prod => {

    const tituloLower = prod.titulo.toLocaleLowerCase();

    if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
      this.productosFiltrado.push(prod);
    }

  });
  if (this.productosFiltrado.length > 0 ) {
    this.loadFiltro = false;
    this.filtroNoFound = false;
  } else {
    this.loadFiltro = false;
    this.filtroNoFound = true;
  }

  }



}

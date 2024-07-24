import { Component } from '@angular/core';
import { PrendasService } from '../servicios/prendas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html', // esta es como la vista
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  //esto es como un controlador que trae los datos y los guarda en la variable prendas
  prendas: any = [];

  constructor(public prendasService: PrendasService) {}
  ngOnInit() {
    this.cargarPrendas();
  }

  async cargarPrendas() {
    this.prendasService.obtener__prendas().subscribe((respuesta) => {
      this.prendas.push(respuesta);
      console.log(this.prendas);
    });
  }
}

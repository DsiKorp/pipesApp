import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'DsiKoRp';
  valor = 1000;
  obj = {
    nombre: 'Jota'
  }

  mostarNombre() {
    console.log(`this.nombre: `, this.nombre);
    console.log(`this.valor: `, this.valor);
    console.log(`this.obj: `, this.obj);
  }
}

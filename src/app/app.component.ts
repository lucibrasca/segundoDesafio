import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Segundo desafio';

  alumnos =  [ { nombre: 'German',
                  aprobado: false,
                  notaFinal: 45.9},
                { nombre: 'Juan Manuel',
                  aprobado: false,
                  notaFinal: 54.4},
                { nombre: 'Sebastian',
                  aprobado: true,
                  notaFinal: 90.2},
                { nombre: 'Eugenia',
                  aprobado: true,
                  notaFinal: 75.7}, 
                { nombre: 'Diana',
                  aprobado: false,
                  notaFinal: 40.7},
                { nombre: 'Lucila',
                  aprobado : true,
                  notaFinal: 85.6 },
                { nombre: 'Ornella',
                  aprobado: false,
                  notaFinal: 49.4},
                { nombre: 'Gaston',
                  aprobado: false,
                  notaFinal: 53.2},
                { nombre: 'Benicio',
                  aprobado: true,
                  notaFinal: 87.2},
                { nombre: 'Clara',
                  aprobado: true,
                  notaFinal: 95.7}, 
                { nombre: 'Felipe',
                  aprobado: false,
                  notaFinal: 50.6},
                { nombre: 'Guadalupe',
                  aprobado : true,
                  notaFinal: 97.6 }
              ]
              ;

              onSend(): void {
                console.log(this.alumnos);
              }
}
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea-estilos';
  respuesta : any;
  constructor(private http : HttpClient){
    // let obs = this.http.get(environment.url);

    // obs.subscribe(resultado => {
    //   this.respuesta = resultado;
    // })
  }
}

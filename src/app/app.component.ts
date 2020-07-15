import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ConectorService } from './service/conector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tarea-estilos';
  respuesta : any;

  conectorLocal : ConectorService;
  resultado = [
    {id : 1 , nombre : "juan", apellido : "figuera"},
    {id : 1 , nombre : "VANESSA", apellido : "ANTON"},
    {id : 1 , nombre : "ROBERTO", apellido : "PROSPERI"},
  ]
  constructor(private http : HttpClient, private conector : ConectorService){
    // let obs = this.http.get('');

    // obs.subscribe(resultado => {
    //   this.respuesta = resultado;
    // })
  }
  ngOnInit(): void {
    this.conectorLocal = this.conector;
    setTimeout( () => { 
      // console.log('se acabo el tiempo')
      console.log('enviroment vale init '+environment.url);
      console.log('eSERVER VALUE init '+this.conectorLocal.info['SERVER'] );
      }, 150)
  }


  onClick(){
    console.log('enviroment CLICK '+environment.url);
    console.log('eSERVER VALUE CLICK '+this.conectorLocal.info['SERVER'] );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConectorService {
  info : any;
  

  constructor( private http : HttpClient) { 
    console.log('entre al componente conector');

    http.get('../../assets/configuracion.json').subscribe(
      resp => {
        this.info = resp;
        environment.url = resp['urlDesa'];
        
        console.log(this.info);
        console.log('url respuesta servicio ' + environment.url);
        console.log('El status de conexion es '+resp["statusAmbiente"]);
      }
    )
  }
}

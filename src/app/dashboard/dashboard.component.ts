import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  city!:string
  active:boolean = false
  temperatura:any
  humedad:any
  tiempo:any

  constructor(private _weather:WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(){
    this.active = true;

    this._weather.getWeather(this.city)
    .subscribe((res:any)=>{
      this.temperatura = (res.main.temp - 273).toFixed(2);
      this.humedad = res.main.humidity ;
      this.tiempo = res.weather[0].main;
      //console.log(res);
    });
  }

}

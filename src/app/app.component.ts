import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }

  sonido = (valor:number)=>{
    const audio = new Audio
    audio.src = `../assets/note${valor}.wav`;
    audio.load();
    audio.play();
  }
  
}

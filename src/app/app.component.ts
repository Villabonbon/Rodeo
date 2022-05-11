import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menú', url: '/menu', icon: 'paper-plane' },
    { title: 'Medios de pago', url: 'medios', icon: 'archive' },
    { title: 'Domicilios', url: "domicilios", icon: 'trash' },
    
  ];
  public labels = ["Loreta","Leche asada", "Chocolate Oreo","Bavaroise fresa","Cheese cake","Gelatina"];
  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  testimonials = [
    { name: 'John Doe', comment: 'Good Ogeneral AC service.good customer relationship mangement.thank you', rating: 6 },
    { name: 'Jane Smith', comment: 'Quick Good service responce.quality Daikin AC service with affordable price.thank u', rating: 6 },
    { name: 'Michael Johnson', comment: 'Brilliant Service.Personally, I Loved the Service. Keep It Up ❤️', rating: 5 },
  ];
}

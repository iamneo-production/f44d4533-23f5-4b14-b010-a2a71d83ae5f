import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent {
  product: Product = new Product();
  submitted = false;
constructor(private productService: ProductService, private router: Router) { }
ngOnInit(): void {
}

saveEmployee(){
  this.productService.createProduct(this.product).subscribe( data =>{
    console.log(data);
    this.goToEmployeeList();
  },
  error => console.log(error));
}

goToEmployeeList(){
  this.router.navigate(['/products']);
}

onSubmit(){
  console.log(this.product);
  this.saveEmployee();
}
}

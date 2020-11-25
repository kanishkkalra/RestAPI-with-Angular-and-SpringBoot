import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product : Product= {
    name : '',
    price : 0,
    quantity : 0 
  };

  constructor(private service: ProductserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.service.register(this.product).subscribe((result)=>{
      this.router.navigate(["showAll"]);
    },(err)=>{console.log(err)}
    );
  }

}

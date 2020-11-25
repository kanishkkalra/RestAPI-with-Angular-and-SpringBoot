import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  product:Product = {
    name : '',
    price : 0,
    quantity : 0 
  };

  constructor(private service: ProductserviceService, private router: Router, private path: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.path.snapshot.params['id'];
    this.service.getProductById(id).subscribe((data)=>{this.product=data})
  }

  updateProduct(){
    this.service.update(this.product).subscribe((data)=>{
      this.router.navigate(["showAll"]);
    },(err)=>{console.log(err)}
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  allProducts : any;

  constructor(private service: ProductserviceService, private router : Router) { }

  ngOnInit(): void {
    this.showAllProducts();
  }

  showAllProducts() : void{
    this.service.listproducts().subscribe((result) => {
      this.allProducts = result;
    });
  }

  deleteProduct(id:number) : void{
    this.service.deleteProduct(id).subscribe((result) => {
      this.showAllProducts();   
  },err=>{console.log(err)}
  )
  }

}

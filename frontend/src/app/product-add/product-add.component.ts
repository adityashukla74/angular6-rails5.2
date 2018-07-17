import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public product: Product = new Product();
  constructor(public apiService: ApiService, public acRoute: ActivatedRoute) { }

  ngOnInit() {

    this.acRoute.params.subscribe((data: any) => {
      console.log(data.id);
      if (data && data.id) {
        this.apiService.get("products/" + data.id).subscribe((data: Product) => {
          this.product = data;
        });
      }
      else {
        this.product = new Product();
      }
    })
  }

  public onSubmit() {
    console.log("Adding a product: " + this.product.name);
    if (this.product.id) {
      this.apiService.update("products/" + this.product.id, this.product).subscribe((r) => {
        console.log(r);
        alert("Product updated !");
      })
    }
    else
      this.apiService.post("products", this.product).subscribe((r) => {
        console.log(r);
        this.product = new Product();
        alert("Product added !");

      });
  }
}
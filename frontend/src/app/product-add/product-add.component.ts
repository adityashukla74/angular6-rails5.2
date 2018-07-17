import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product.model'
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public product: Product = new Product();
  constructor(public apiService: ApiService, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      alert(data.id);
      if (data && data.id) {
        this.apiService.get("products/" + data.id).subscribe((data: Product) => {
          this.product = data;
        })
      }
      else {
        this.product = new Product();
      }
    })
  }

  public onSubmit() {
    alert("Added a product:" + this.product.name);
    if (this.product.id) {
      this.apiService.update("products" + this.product.id, this.product).subscribe((r) => {
        alert(r);
        alert("Product Updated");
      })
    }
    else {
      this.apiService.post("products", this.product).subscribe((r) => {
        alert(r);
        this.product = new Product();
        alert("Product Added");
      })
    }
  }
}

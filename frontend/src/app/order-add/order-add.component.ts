import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  public columns = ['id','name'];
  public rows; 

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("customers").subscribe((data)=>{
      console.log(data);
      this.rows = data;
    });
  }

}

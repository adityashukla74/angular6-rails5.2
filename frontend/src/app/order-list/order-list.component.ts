import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public columns = ['id','reference'];
  public rows; 
  
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("orders").subscribe((data)=>{
      console.log(data);
      this.rows = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public columns = ['id', 'name'];
  public rows;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get("customers").subscribe((data) => {
      console.log(data);
      this.rows = data;
    });
  }

}

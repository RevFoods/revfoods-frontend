import { Component, OnInit } from "@angular/core";
import { CustomerTable } from "src/app/model/customer-table";
import { CustomerTableService } from "src/app/service/customer-table.service";
@Component({
  selector: "app-view-unoccupied-tables",
  templateUrl: "./view-unoccupied-tables.component.html",
  styleUrls: ["./view-unoccupied-tables.component.css"],
})
export class ViewUnoccupiedTablesComponent implements OnInit {
  customerTableList: CustomerTable[];
  constructor(private customerTableService: CustomerTableService) {}
  ngOnInit() {
    this.customerTableService
      .getAllCustomerTablesByCustomerTableStatus()
      .subscribe((res) => {
        this.customerTableList = res;
      });
  }
}

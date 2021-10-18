import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Help } from "src/app/model/help";
import { HelpService } from "src/app/service/help.service";
@Component({
  selector: "app-customer-helps",
  templateUrl: "./customer-helps.component.html",
  styleUrls: ["./customer-helps.component.css"],
})
export class CustomerHelpsComponent implements OnInit {
  helpList: Help[];
  count: number;
  constructor(
    private helpService: HelpService,
    private toaster: ToastrService
  ) {
    this.count = 0;
  }
  ngOnInit() {
    this.helpService.getAllHelps().subscribe((res) => {
      this.helpList = res;
      console.log(res);
    });
  }

  updateHelpStatus(helpId: number) {
    this.helpService.updateHelpStatus(helpId, true).subscribe((res) => {
      console.log(res);
      this.toaster.success(res.help + " is resolved.", "Issue Resolved!!");
    });
    this.ngOnInit();
  }
}

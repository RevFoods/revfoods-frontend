import { Component, OnInit } from "@angular/core";
import { SupervisorService } from "src/app/service/supervisor.service";
import { Supervisor } from "src/app/model/supervisor";
import { Router } from "@angular/router";
import { interval } from "rxjs";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-manage-supervisor",
  templateUrl: "./manage-supervisor.component.html",
  styleUrls: ["./manage-supervisor.component.css"],
})
export class ManageSupervisorComponent implements OnInit {
  constructor(private service: SupervisorService, private router: Router, private toaster: ToastrService) {}
  supervisorList: Supervisor[];
  ngOnInit() {
    
    this.service.getAllSupervisors().subscribe((res) => {
      this.supervisorList = res;
    });
  }
  public delete(supervisorId: number): void {
    this.service.deleteSupervisor(supervisorId).subscribe();
    this.toaster.success( "","Supervisor Deleted Successfully!");
    this.ngOnInit();
  }
  public update(supervisorId: number) {
    this.router.navigateByUrl("/revfoods/update-supervisor", {
      state: { supervisorId: supervisorId },
    });
  }
}

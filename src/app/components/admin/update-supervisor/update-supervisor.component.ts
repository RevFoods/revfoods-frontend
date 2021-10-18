import { Component, OnInit } from "@angular/core";
import { SupervisorService } from "src/app/service/supervisor.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Supervisor } from "src/app/model/supervisor";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-update-supervisor",
  templateUrl: "./update-supervisor.component.html",
  styleUrls: ["./update-supervisor.component.css"],
})
export class UpdateSupervisorComponent implements OnInit {
  constructor(
    private supervisorService: SupervisorService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  UpdateSupervisor: FormGroup;

  ngOnInit() {
    this.UpdateSupervisor = new FormGroup({
      supervisorId: new FormControl(null, [Validators.required]),
      supervisorUsername: new FormControl(null, [Validators.required]),
      supervisorPassword: new FormControl(null, [Validators.required]),
    });

    this.supervisorService
      .getSupervisorById(history.state.supervisorId)
      .subscribe((res) => {
        this.UpdateSupervisor.patchValue({
          supervisorId: res.supervisorId,
          supervisorUsername: res.supervisorUsername,
          supervisorPassword: res.supervisorPassword,
        });
      });
  }
  onSubmit() {
    this.supervisorService
      .updateSupervisor(this.UpdateSupervisor.value)
      .subscribe((res) => {
        console.log(res);
        this.toaster.success(res.supervisorUsername +" is Updated.","Supervisor Updated Successfully!");
      });
    this.router.navigate(["/revfoods/manage-supervisor"]);
  }
}

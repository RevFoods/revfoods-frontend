import { Component, OnInit } from "@angular/core";
import { SupervisorService } from "src/app/service/supervisor.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Supervisor } from "src/app/model/supervisor";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-add-supervisor",
  templateUrl: "./add-supervisor.component.html",
  styleUrls: ["./add-supervisor.component.css"],
})
export class AddSupervisorComponent implements OnInit {
  constructor(
    private service: SupervisorService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  AddSupervisor = new FormGroup({
    supervisorUsername: new FormControl("", [Validators.required]),
    supervisorPassword: new FormControl("", [Validators.required]),
  });
  ngOnInit() {}

  onSubmit() {
    console.log(this.AddSupervisor);
    this.service.addSupervisor(this.AddSupervisor.value).subscribe((res) => {
      console.log(res);
      this.toaster.success(
        res.supervisorUsername + " is Added.",
        "Chef Added Successfully!"
      );
    });
    this.router.navigate(["/revfoods/manage-supervisor"]);
  }
}

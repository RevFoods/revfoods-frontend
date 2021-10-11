import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SupervisorService } from "./supervisor.service";

describe("SupervisorService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SupervisorService],
    })
  );

  it("should be created", () => {
    const service: SupervisorService = TestBed.get(SupervisorService);
    expect(service).toBeTruthy();
  });
  it("should get all supervisors", () => {
    const service: SupervisorService = TestBed.get(SupervisorService);
    expect(service.getAllSupervisors).toBeTruthy();
  });
  it("should add supervisor", () => {
    const service: SupervisorService = TestBed.get(SupervisorService);
    expect(service.addSupervisor).toBeTruthy();
  });
  it("should delete supervisor ", () => {
    const service: SupervisorService = TestBed.get(SupervisorService);
    expect(service.deleteSupervisor).toBeTruthy();
  });
  it("should get supervisor by id", () => {
    const service: SupervisorService = TestBed.get(SupervisorService);
    expect(service.getSupervisorById).toBeTruthy();
  });
  it("should update supervisor", () => {
    const service: SupervisorService = TestBed.get(SupervisorService);
    expect(service.updateSupervisor).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers : [AdminService]

  }));

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });
  it('should get admins by id', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.getAdminById).toBeTruthy();
  });
  it('should get all admins', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.getAllAdmins).toBeTruthy();
  });
  it('should add admin', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.addAdmin).toBeTruthy();
  });
  it('should delete admin', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.deleteAdmin).toBeTruthy();
  });
  it('should update admin', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service.updateAdmin).toBeTruthy();
  });

});
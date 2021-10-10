import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeedbackService } from './feedback.service';

describe('FeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers : [FeedbackService]

  }));

  it('should be created', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service).toBeTruthy();
  });
  it('should add feedback', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service.addFeedback).toBeTruthy();
  });
  it('should delete feedback', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service.deleteFeedback).toBeTruthy();
  });
  it('should update feedback', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service.updateFeedback).toBeTruthy();
  });
  it('should get feedback by id', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service.getFeedbackById).toBeTruthy();
  });
  it('should get allfeedbacks', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service.getAllFeedbacks).toBeTruthy();
  });


});

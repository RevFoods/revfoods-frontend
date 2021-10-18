import { FoodStatusPipe } from './food-status.pipe';

describe('FoodStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new FoodStatusPipe();
    expect(pipe).toBeTruthy();
  });
});

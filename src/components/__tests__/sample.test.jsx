import  {add } from '../Home/sample.jsx';

describe('Should pass', () => {
  it('should pass this test', (done) => {
    let ans = add(1, 2);
    expect(ans).toBe(3);
    done();
  });
});

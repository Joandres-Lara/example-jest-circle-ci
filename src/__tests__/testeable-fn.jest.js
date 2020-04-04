import testeableFn from '../testeable-fn';

describe('initial test', () => {
 it('test first', () => {
  expect(testeableFn()).toBeTruthy();
 })

 it('test async', async () => {
  const moduleAsync = await import('../testeable-fn-async');
  expect(moduleAsync()).toBeTruthy();
 })
});
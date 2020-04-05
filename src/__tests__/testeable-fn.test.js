import testeableFn from '../testeable-fn';
// Por ahora jest, no incluye automáticamente estos
// módulos, así que hay que incluirlos manualmente.
import Promise from "@babel/runtime-corejs3/core-js-stable/promise";

describe('initial test', () => {
 it('test first', () => {
  expect(testeableFn()).toBeTruthy();
 })
});


test('test async', async () => {
 let moduleAsync = await import('../testeable-fn-async');
 moduleAsync = moduleAsync.default;
 expect(moduleAsync()).toBeTruthy();
})
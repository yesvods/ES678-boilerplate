import {add} from '../index';
import should from 'should';
describe('Constant', () => {
  it('add function should be worked', () => {
    should(add(2,3)).equal(5)
  })
})
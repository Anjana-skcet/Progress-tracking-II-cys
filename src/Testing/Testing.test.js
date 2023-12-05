import {add,substract} from './Testing/Testing';
 test('adds two number',()=>{
    expect(add(1,2)).toBe(3);
    expect(add(-1,1)).toBe(3);
    expect(add(-1,-2)).toBe(3);
    
 })
 test('substract two number',()=>{
    expect(substract(5,2)).toBe(3);
    expect(substract(3,2)).toBe(1);
    expect(substract(-1,-1)).toBe(0);
 })
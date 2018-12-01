import {Sample} from './encapsul';
import {dataFun} from './encapsul';
import {obj} from './encapsul';

let sm = new Sample();

sm.setName("mike smith")
console.log(sm.showName());
console.log(sm.getName());

//Directly I access Properties
sm.Age = 43;
console.log(sm.Age);

console.log(dataFun());

console.log();


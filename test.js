let x = 1;

function a(){
    x =2;
    // console.log(2);
}

setTimeout(()=>{a()}, 0);

x = 3;

// console.log(3);


let obj = {
    name : 'Pooja'
}

let result = Object.defineProperty(obj, 'age', {value: 25});
// console.log(result);

function Person(f, l){
  this.f = f;
  this.l  = l;
}

let b = new Person('Pooja', 'Sankhala')
let c = Person('Pooja', 'Sankhala')

// console.log(b, c);


const set = new Set();

set.add(1);
set.add('Pooja');
set.add({name:"pooja"});

for(let x of set){
    // console.log(x+2);
}


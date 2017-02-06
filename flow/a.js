const A = () => {
  console.log(1)
}

const B = () => {
  console.log(2)
}

const b: B = new A()

const c: string = '1'

const d: Array<string|number> = ["1", 4, 5]

function reverse(array): Array<number> {
  let ret = [];
  let i = array.length;
  while (i--)
    ret.push(array[i]);
  return ret;
}

class Box<T> {
  _value: T;

  constructor(value: T) {
    this._value = value
  }

  get(): T {
    return this._value
  }
}

type People = {
  name:string,
  age:number,
  height:number,
  lovers:Array[string]
}

new People()
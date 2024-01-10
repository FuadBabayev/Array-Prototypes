let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ! ForEach
array.forEach((item, index, value) => {
  console.log(item, index, value);
});

Array.prototype.forEachCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    callBackFunction(this[i], i, this);
  }
};
array.forEachCustom((item, index, value) => {
  console.log(item, index, value);
})




// ! Map
let map = array.map((item) => {
  return item ** 2;
});
console.log(map);

Array.prototype.forEachCustom = function (callBackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callBackFunction(this[i], i, this); 
  }
  return newArray;
};
let map2 = array.forEachCustom((item) => {
  return item ** 2;
})
console.log(map2);



// ! Find
let find = array.find((item) => {
  return item > 2;
})
console.log(find);

Array.prototype.findCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if(callBackFunction(this[i], i, this)){
      return this[i];
    }
  }
}
let find2 = array.findCustom((item) => {
  return item > 2;
})
console.log(find2);


// ! FindIndex
let findIndex = array.findIndex((item) => {
  return item > 2;
})
console.log(findIndex);

Array.prototype.findIndexCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if(callBackFunction(this[i], i, this)){
      return i;
    }
  }
}
let findIndex2 = array.findIndexCustom((item) => {
  return item > 2;
})
console.log(findIndex2);



// ! Includes
let includes = array.includes(4);
console.log(includes);

Array.prototype.includesCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if(callBackFunction === this[i]){
      return true;
    }
  }
}
let includes2 = array.includesCustom(4)
console.log(includes2);



// ! IndexOF
let indexOf = array.indexOf(4);
console.log(indexOf);

Array.prototype.indexOfCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if(this[i] === callBackFunction){
      return i;
    }
  }
}
let indexOf2 = array.indexOfCustom(4)
console.log(indexOf2);



// ! Join
let join = array.join("-");
console.log(join);

Array.prototype.joinCustom = function (callBackFunction) {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      result += `${this[i]}`;
    } else {
      result += `${this[i]}${callBackFunction}`;
    }
  }
  return result;
}
let join2 = array.joinCustom("-")
console.log(join2);



// ! Some
let some = array.some((item) => {
  return item > 0;
});
console.log(some);

Array.prototype.someCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if(callBackFunction(this[i], i, this)){
      return true;
    }
  }
  return false;
}
let some2 = array.someCustom((item)=> {
  return item > 0;
})
console.log(some2);



// ! Every
let every = array.some((item) => {
  return item > 0;
});
console.log(every);

Array.prototype.everyCustom = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if(callBackFunction(this[i], i, this)){
      return true;
    }
  }
  return false;
}
let every2 = array.everyCustom((item)=> {
  return item > 0;
})
console.log(every2);
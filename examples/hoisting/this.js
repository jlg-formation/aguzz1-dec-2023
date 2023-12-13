// @ts-nocheck
console.log("this: ", this);

function toto() {
  "use strict";
  console.log("toto this: ", this);
}

toto();

var a = {
  titi: toto,
  tutu: 123,
};

a.titi();
toto();

var tutu = toto.bind(a);
tutu();

const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kittens, name) {
  kittens.push(name);
}

function destructivelyPrependKitten(kittens, name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name);
}

function appendKitten(kittens, name) {
   return [...kittens, name];
}

function prependKitten(kittens, name) {
   return  [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
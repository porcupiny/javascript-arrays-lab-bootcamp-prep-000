const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(kittens, name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(kittens, name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(kittens, name) {
   return [...kittens, name];
}

function prependKitten(kittens, name) {
   return  [name, ...kittens];
}

function removeLastKitten() {
  kittens.pop();
}

function removeFirstKitten() {
  kittens.
}
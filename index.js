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
  
}
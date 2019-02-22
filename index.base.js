// @flow

class Animal {}
class Dog extends Animal {}
class Cat extends Animal {
  meow() { return 'Meow'; }
}

const addHorse = (set: Animal[]) => set.push(new Dog());

const cats: Cat[] = [new Cat(), new Cat()];
addHorse(cats);

console.log(
  cats.map(
    cat => cat.meow()
  )
);
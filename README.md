# Typescript and Flowtype comparison

The sole purpose of this repo is to show why I, personally, always prefer flowtype to typescript as far as typing systems are concerned.

## Experiment: 

This will go for the classical Animal => Cat, Dog inheritance example. Cats can meow, Dogs can't.
If you have a method that will take in an Array of animals, and add a dog to it, you could technically send it an array of cats.
In this case, you'd be introducing errors. Typescript would let you do that, while Flowtype will argue against.

## Running Experiment

Running the experiment is as simple as running the `ts` or `flow` npm scripts: 

```
$ yarn ts
$ yarn flow
```

## Outcome 

Running the experiment will reveal what has been claimed in (#experiment)[the experiment section]. The babel + flowtype build will fail at flowtype checks, while the typescript build will fail at execution.
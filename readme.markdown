# Mirrorer - Mirror 1 directory to another!

Do you have a box account or a dropbox account and you want to save the contents of a sync directory to external storage or something?  NOW YOU CAN!!

# example

```
```

# details

# scripts

## test

runs the example test.

# methods

``` js
var GA = require('mirrorer');
```

## var ga = new GA({ maxIterations: 100, tolerance: 1e-3, useElites: false });

Create a GA instance, maxIterations defaults to 100, but you can override. tolerance defaults to 1e-3.

useElites allows for enabling of elitism during selection.  This works well if you have a traditional hill climbing eval function.

## ga.run(populationSize, chromoLength, evalFn, cb);

run the ga with the a population size and chromosome length.
evaluation function must be supplied.
cb on complete.

`cb(err, data)` signature.

## ga.newBestChromo = function(data){..};

* update event for new best chromosome
* data => { data.chromo, data.fitness, data.iteration }
* `chromo` is the chromosome array
* `fitness` is the fitness of that chromosome
* `iteration` is the iteration value of the newBestChromo call


# install

With [npm](https://npmjs.org) do:

```
npm install mirrorer
```
to get the library.

# license

MIT

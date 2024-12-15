# Occam Furtle

[Occam](https://github.com/djalbat/occam)'s Furtle language.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

Furtle is a dynamically but nonetheless strictly typed, procedural language meant primarily for traversing parse trees. 
It is called from Nominal thus...

```
Rule (FreeVariable)
  Premise
    @isVariableFree(u, P)
  Conclusion
    u is free in P
```

...and looks as follows:

```
Boolean isVariableFree(Node termNode, Node statementNode) {
  Boolean variableFree = true;

  Boolean variableBound = isVariableBound(termNode, statementNode);

  If (variableBound) {
    variableFree = false;
  }

  Return variableFree;
}
```

The above procedure ascertains whether or not the given term's sole variable is bound in the given statement.
Boundedness is usually defined by induction over the structure of statements, however Occam's custom grammars make this practically unworkable.
Hence Furtle fulfills this role procedurally, so to speak.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-furtle

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-furtle.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

The example runs directly on Node:

```
node example.js
```

The `Free and bound variables.ftl` file in the `example/` directory can be changed and the example can be rebuilt, see below.
Obviously one thing to try is changing the value of the `free` variable.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com


# Occam Furtle

[Occam](https://github.com/djalbat/occam)'s Furtle language.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

Furtle is a dynamically but nonetheless strictly typed, pure functional language meant primarily for traversing parse trees. 
It is called from Nominal thus...

```
Rule (FreeVariable)
  Premise
    @isVariableFree(u, P)
  Conclusion
    u is free in P
```

...and looks like, for example:

```
String variableNameFromTermNode(Node termNode) {
  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);
  
  String variableName = 

    If (variableNameTerminalNode != null) {
      { String content As variableName } = variableNameTerminalNode;
    
      Return variableName;
    } 

    Else 
      ""
  ;
  
  Return variableName;
}
```

Despite its strict typing it has a somewhat JavaScripty feel.
It supports array and object destructuring, for example.
It also supports "some", "every" and "reduce" functionality as well as ternaries:

```
String boundVariableNameFromStatementChildNodes(Nodes statementChildNodes) {
  [ Node terminalNode ] = statementChildNodes;

  { String content } = terminalNode;

  String boundVariableName = 

    If ((content == "∀") || (content == "∃")) {
      [ _, Node argumentNode ] = statementChildNodes;

      String boundVariableName = boundVariableNameFromArgumentNode(argumentNode);
  
      Return boundVariableName;
    }
    Else
     ""
  ;

  Return boundVariableName;
}
```

It is nascent at this stage, but is expected to grow.

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


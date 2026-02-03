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
  Node variableNameTerminalNode = nodeQuery(termNode, "/term/variable/@name");
  
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

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. 
You can rebuild them on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com


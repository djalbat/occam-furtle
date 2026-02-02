"use strict";

const ReleaseContext = require("./context/release");

const { termsFromFileContext } = require("./helpers/terms"),
      { furtleFileFromNothing } = require("./helpers/furtle"),
      { procedureFromReleaseContext } = require("./helpers/procedure"),
      { nominalFileContextFromReleaseContext } = require("./helpers/nominal");

let fileContext,
    releaseContext;

releaseContext = ReleaseContext.fromNothing();

const furtleFile = furtleFileFromNothing(),
      file = furtleFile;  ///

releaseContext.addFile(file);

releaseContext.verify();

const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext);

fileContext = nominalFileContext; ///

releaseContext.addFileContext(fileContext);

const free = true,
      terms = termsFromFileContext(fileContext, free),
      procedure = procedureFromReleaseContext(releaseContext);

// try {
const context = fileContext,  ///
      expression = procedure.call(terms, context),
      boolean = expression.getBoolean();

console.log(boolean);
// } catch (exception) {
//   const message = exception.getMessage();
//
//   console.log(message);
// }

/*
That's fine. I've come across this problem before. It's simple enough to set a flag, in fact, or, as you say, simply detect whether or not a debugger is being used.



You've mentioned imports so let's cover that off.



I have the source code in a src/ directory and this gets transpiled to a lib/d directory. I run my tests in a test/ directory and, because I'm running them directly on Node, I have never switched over to ES6 import syntax and use require() calls in the old-fashioned way.



You can see my test here to give you an idea:



+++



"use strict";



const ReleaseContext = require("./context/release");



const { termsFromFileContext } = require("./helpers/terms"),

      { furtleFileFromNothing } = require("./helpers/furtle"),

      { procedureFromReleaseContext } = require("./helpers/procedure"),

      { nominalFileContextFromReleaseContext } = require("./helpers/nominal");



let fileContext,

    releaseContext;



releaseContext = ReleaseContext.fromNothing();



const furtleFile = furtleFileFromNothing(),

      file = furtleFile;  ///



releaseContext.addFile(file);



releaseContext.verify();



const nominalFileContext = nominalFileContextFromReleaseContext(releaseContext);



fileContext = nominalFileContext; ///



releaseContext.addFileContext(fileContext);



const free = true,

      terms = termsFromFileContext(fileContext, free),

      procedure = procedureFromReleaseContext(releaseContext);



// try {

const context = fileContext,  ///

      expression = procedure.call(terms, context),

      boolean = expression.getBoolean();



console.log(boolean);

// } catch (exception) {

//   const message = exception.getMessage();

//

//   console.log(message);

// }



+++



 */
"use strict";

const bnf = `

    document                ::=  ( importStatement | procedure | error )+ ;
    
    
    
    procedure               ::=  "export"? type label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;
    
    importStatement         ::=  "import" importBindings "from" [string-literal] ";" ;
    
    anonymousProcedure      ::=  type "(" parameters? ")" returnBlock ;
    
    statement               ::=  variableAssignments
                              
                              |  objectAssignment
     
                              |  arrayAssignment
                              
                              ;  
      
      
    
    variableAssignments     ::=  type variableAssignment ( "," variableAssignment )* ";" ;
    
    variableAssignment      ::=  variable "=" expression ;
    
    objectAssignment        ::=  "{" namedBindings "}" "=" variable ";" ;
    
    arrayAssignment         ::=  "[" bindings "]" "=" variable ";" ;
    


    importBindings          ::=  importBinding ( "," importBinding )* ;
    
    namedBindings           ::=  namedBinding ( "," namedBinding )* ;
    
    parameters              ::=  parameter ( "," parameter )* ;
    
    bindings                ::=  binding ( "," binding )* ;
    
    values                  ::=  value ( "," value )* ;
    
    terms                   ::=  term ( "," term )* ;
    


    importBinding           ::=  reference ( "as" label )? ;   
    
    namedBinding            ::=  type [name] ( "as" [name] )? ;   
    
    parameter               ::=  type [name] ;

    binding                 ::=  type [name]
    
                              |  ε 
                                  
                              ;


    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" values? ")" ;
    
    returnBlock..           ::=  "{" ( statement | nonsense )* returnStatement "}" ;
                                     
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    ternary                 ::=  "if" "(" term ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," value ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
    lengthOf                ::=  "lengthOf"<NO_WHITESPACE>"(" variable ")" ;
    
    toInteger               ::=  "toInteger"<NO_WHITESPACE>"(" variable ")" ;
    
    tryInteger              ::=  "tryInteger"<NO_WHITESPACE>"(" variable ")" ;
    
    
    
    returnStatement         ::=  "return" value ";" ; 
    
    
    
    comparisonTerm          ::=  term ( "==" | "!=" ) term ; 
    
    bracketedTerm           ::=  "(" term ")" ; 
    
    negatedTerm             ::=  "!"<NO_WHITESPACE>term ; 
    
    logicalTerm             ::=  term ( "||" | "&&" ) term ; 


    
    expression              ::=  procedureCall
     
                              |  returnBlock
    
                              |  nodesQuery
                              
                              |  nodeQuery
                              
                              |  ternary
                              
                              |  reduce
    
                              |  every
    
                              |  some
                              
                              |  lengthOf
                             
                              |  toInteger
                             
                              |  tryInteger
                             
                              |  term
                              
                              ;
    
    
    
    term                    ::=  comparisonTerm 
    
                              |  bracketedTerm 
    
                              |  logicalTerm 
    
                              |  negatedTerm 
    
                              |  primitive 
    
                              |  variable 
                              
                              ;


    
     type                   ::=  "List"<NO_WHITESPACE>"<" ( "Node" | "String" | "Boolean" | "Integer" ) ">"
     
                              |  "Node"  
     
                              |  "String" 
     
                              |  "Boolean"   

                              |  "Integer"   

                              ;


    
    value                   ::=  primitive 
    
                              |  variable 

                              ;


    
    primitive               ::=  [string-literal]
                              
                              |  [boolean]
                              
                              |  [integer]
                              
                              |  [null]
                             
                              ;



    reference.              ::=  [name] ;
    
    variable                ::=  [name] ;
    
    label.                  ::=  [name] ;
    
    
    
    nonsense.               ::=  [string-literal] | [secondary-keyword] | [function-name] | [type] | [boolean] | [integer] | [null] | [name] | [special] | [unassigned] ;


    
    error.                  ::=  . ;
    
`;

export default bnf;

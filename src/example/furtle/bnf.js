"use strict";

const bnf = `

    document                ::=  ( procedureDeclaration | error )+ ;
    
    
    
    procedureDeclaration    ::=  type label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;
    
    anonymousProcedure      ::=  type "(" parameters? ")" returnBlock ;
    
    step                    ::=  variableAssignments
                              
                              |  objectAssignment
     
                              |  arrayAssignment
                              
                              ;  
      
      
    
    variableAssignments     ::=  type variableAssignment ( "," variableAssignment )* ";" ;
    
    variableAssignment      ::=  variable "=" expression ;
    
    objectAssignment        ::=  "{" namedBindings "}" "=" variable ";" ;
    
    arrayAssignment         ::=  "[" bindings "]" "=" variable ";" ;
    


    namedBindings           ::=  namedBinding ( "," namedBinding )* ;
    
    parameters              ::=  parameter ( "," parameter )* ;
    
    bindings                ::=  binding ( "," binding )* ;
    
    values                  ::=  value ( "," value )* ;
    
    terms                   ::=  term ( "," term )* ;
    


    namedBinding            ::=  type [name] ( "as" [name] )? ;   
    
    parameter               ::=  type [name] ;

    binding                 ::=  type [name]
    
                              |  ε 
                                  
                              ;


    
    procedureCall           ::=  reference<NO_WHITESPACE>"(" values? ")" ;
    
    returnBlock..           ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                     
    nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
    
    ternary                 ::=  "if" "(" term ")" expression "else" expression ;
    
    reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," value ")" ;
    
    every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
    
    
    
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
                             
                              |  term
                              
                              ;
    
    
    
    term                    ::=  comparisonTerm 
    
                              |  bracketedTerm 
    
                              |  logicalTerm 
    
                              |  negatedTerm 
    
                              |  primitive 
    
                              |  variable 
                              
                              ;


    
     type                   ::=  "List"<NO_WHITESPACE>"<" ( "Node" | "String" | "Number" | "Boolean" ) ">"
     
                              |  "Node"  
     
                              |  "String" 
     
                              |  "Number" 
     
                              |  "Boolean"   

                              ;


    
    value                   ::=  primitive 
    
                              |  variable 

                              ;


    
    primitive               ::=  [string-literal]
                              
                              |  [boolean]
                              
                              |  [number] 
                              
                              |  [null]
                             
                              ;



    reference.              ::=  [name] ;
    
    variable                ::=  [name] ;
    
    label.                  ::=  [name] ;
    
    
    
    nonsense.               ::=  [secondary-keyword] | [type] | [null] | [boolean] | [string-literal] | [query] | [special] | [name] | [number] | [unassigned] ;


    
    error.                  ::=  . ;
    
`;

export default bnf;

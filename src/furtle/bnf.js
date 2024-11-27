"use strict";

const bnf = `document             ::=  ( instruction | error )+ ;



instruction          ::=  functionDeclaration

                       |  ( variableAssignment

                          | nodesDeclaration  
     
                          | nodeDeclaration ) ";" ;



functionDeclaration  ::=  "Function" function ;

variableAssignment   ::=  variable "=" ( nodesQuery

                                       | nodeQuery
                                       
                                       | forEach
                                       
                                       | value ) ;

nodesDeclaration     ::=  "Nodes" variable ;

nodeDeclaration      ::=  "Node" variable ;


function             ::=  [name] "(" arguments? ")" "{" body "}" ;


body                 ::=  ( variableAssignment ";" )* ;



nodesQuery           ::=  "nodesQuery"<NO_WHITESPACE>"(" expression ")" ;

nodeQuery            ::=  "nodeQuery"<NO_WHITESPACE>"(" expression ")" ;



value                ::=  variable | [number] | [primitive] ;



arguments            ::=  argument ( "," argument )* ;

argument             ::=  variable ;

variable             ::=  [name] ;



expression           ::=  path spread? subExpression? ;

path                 ::=  "/" infiniteDescent? selectors ;

subExpression        ::=  path spread? subExpression?;

infiniteDescent      ::=  "/" ;

selectors            ::=  selector ( "|" selector )* ;

spread               ::=  unique

                       |  "[" 
    
                          ( 
                            
                            ( startIndex "..." endIndex ) 
                            
                            | 
                            
                            ( startIndex "..." ) 
                            
                            | 
                            
                            ( "..." endIndex )
                             
                            | 
                            
                            index 
                            
                          )  
                          
                          "]" ;

selector             ::=  ruleName | tokenType ;
                   
ruleName             ::=  [name] | "*" ;
                   
tokenType            ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                   
startIndex           ::=  [number] ;
                   
endIndex             ::=  [number] ;
                   
index                ::=  [number] ;
                   
unique               ::=  "!" ;
                   


error.               ::=  . ;`;

export default bnf;

"use strict";

const bnf = `document              ::=  ( instruction | error )+ ;



instruction           ::=  functionDeclaration
                        
                        |  variablesDeclaration 
                        
                        |  variablesAssignment 
                        
                        |  variableAssignment
                        
                        |  conditionalBlock

                        |  forEachLoop 
                       
                        ;



functionDeclaration   ::=  [type] function ";" ;

variablesDeclaration  ::=  [type] variables ";" ;

variablesAssignment   ::=  ( ( "{" variables "}" ) 
                             
                             | 
                             
                             ( "[" variables "]" ) ) "=" ( nodesQuery | 

                                                           nodeQuery | 
                                                          
                                                           variable ) ";" ;
                                          
variableAssignment    ::=  variable "=" ( nodesQuery | 

                                          nodeQuery | 
                                          
                                          variable | 
                                          
                                          [number] | 
                                          
                                          [primitive] | 
                                          
                                          [string-literal] ) ";" ;
                                          
                                          
conditionalBlock      ::=  "If" condition ":" ;                                            



forEachLoop           ::=  "forEach"<NO_WHITESPACE>"(" variable "," [type] anonymousFunction ")" ;



nodesQuery            ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery             ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;




anonymousFunction     ::=  "(" arguments? ")" "{" body? "}" ;

function              ::=  [name] "(" arguments? ")" "{" body? "}" ;

arguments             ::=  argument ( "," argument )* ;

argument              ::=  [type] variable ;

body                  ::=  ( variablesDeclaration |  

                             variablesAssignment |  
                             
                             variableAssignment |  
                             
                             conditionalBlock )+ ;



condition             ::=  "(" condition ")" 

                        |  variable "==" ( nodesQuery | 

                                           nodeQuery | 
                                            
                                           variable | 
                                            
                                           [number] | 
                                            
                                           [primitive] | 
                                            
                                           [string-literal] ) ;



variables             ::=  variable ( "," variable )* ;

variable              ::=  [name] ;



expression            ::=  path spread? subExpression? ;

path                  ::=  "/" infiniteDescent? selectors ;

subExpression         ::=  path spread? subExpression?;

infiniteDescent       ::=  "/" ;

selectors             ::=  selector ( "|" selector )* ;

spread                ::=  unique

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

selector              ::=  ruleName | tokenType ;
                   
ruleName              ::=  [name] | "*" ;
                   
tokenType             ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                   
startIndex            ::=  [number] ;
                   
endIndex              ::=  [number] ;
                   
index                 ::=  [number] ;
                   
unique                ::=  "!" ;
                   


error.                ::=  . ;`;

export default bnf;

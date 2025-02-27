"use strict";

const bnf = `document               ::=  ( procedureDeclaration | error )+ ;



procedureDeclaration   ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;



error.                 ::=  . ;



variablesDeclaration   ::=  [type] variable assignment ( "," variable assignment )* ";" ;

variableAssignment     ::=  variable assignment ";" ;

conditionalBlocks      ::=  "If" "(" value ")" block ( "Else" block )? ;                                            

objectAssignment       ::=  "{" parameters "}" "=" variable ";" ;

arrayAssignment        ::=  "[" parameters "]" "=" variable ";" ;
                                                      


anonymousProcedure     ::=  "(" parameters? ")" returnBlock ;



block..                ::=  "{" ( step | nonsense )* "}" ;

returnBlock..          ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                 
returnStatement        ::=  [return] value ";" ; 



step                   ::=  variablesDeclaration
 
                         |  variableAssignment
                          
                         |  conditionalBlocks
                          
                         |  objectAssignment
                          
                         |  arrayAssignment
                          
                         ;  
  
  
  
assignment             ::=  "=" value ;



parameter              ::=  [type] [name]

                         |  "_" 

                         ;



value                  ::=  procedureCall
 
                         |  bracketedValue 

                         |  bitwiseValue 

                         |  negatedValue 

                         |  comparison 

                         |  nodesQuery
                          
                         |  nodeQuery
                          
                         |  variable
                          
                         |  ternary
                          
                         |  some

                         |  [null]

                         |  [number]
                          
                         |  [primitive]
                          
                         |  [string-literal] 
                         
                         ;



bracketedValue         ::=  "(" value ")" ; 

procedureCall          ::=  reference<NO_WHITESPACE>"(" values? ")" ;

bitwiseValue           ::=  value ( "||" | "&&" ) value ; 

negatedValue           ::=  "!"<NO_WHITESPACE>value ; 

comparison             ::=  value ( "!=" | "==" ) value ; 

nodesQuery             ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery              ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

variable               ::=  [name] ;

ternary                ::=  "If" "(" value ")" value "Else" value ;

some                   ::=  "Some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;



parameters             ::=  parameter ( "," parameter )* ;

values                 ::=  value ( "," value )* ;



label.                 ::=  [name] ;

reference.             ::=  [name] ;



nonsense.              ::=  [type] | [keyword] | [primitive] | [query] | [special] | [name] | [number] | [unassigned] ;
    

    
expression             ::=  path spread? subExpression? ;

path                   ::=  "/" infiniteDescent? selectors ;

subExpression          ::=  path spread? subExpression?;

infiniteDescent        ::=  "/" ;

selectors              ::=  selector ( "|" selector )* ;

spread                 ::=  unique

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

selector               ::=  ruleName | tokenType ;
                   
ruleName               ::=  [name] | "*" ;
                   
tokenType              ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                   
startIndex             ::=  [number] ;
                   
endIndex               ::=  [number] ;
                   
index                  ::=  [number] ;
                   
unique                 ::=  "!" ;`;

export default bnf;

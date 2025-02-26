"use strict";

const bnf = `document               ::=  ( procedureDeclaration | error )+ ;



procedureDeclaration   ::=  [type] label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;



error.                 ::=  . ;



variablesDeclaration   ::=  [type] variable assignment ( "," variable assignment )* ";" ;

variableAssignment     ::=  variable assignment ";" ;

conditionalBlocks      ::=  "If" "(" condition ")" block ( "Else" block )? ;                                            

objectAssignment       ::=  "{" parameters "}" "=" variable ";" ;

arrayAssignment        ::=  "[" parameters "]" "=" variable ";" ;
                                                      
forEachLoop            ::=  "ForEach"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ";" ;



anonymousProcedure     ::=  "(" parameters? ")" block ;



condition              ::=  bracketedCondition 

                         |  bitwiseCondition 

                         |  negatedCondition 

                         |  comparison 

                         |  value 
                        
                         ;
                        
bracketedCondition     ::=  "(" condition ")" ; 

bitwiseCondition       ::=  condition ( "||" | "&&" ) condition ; 

negatedCondition       ::=  "!"<NO_WHITESPACE>condition ; 

comparison             ::=  value ( "!=" | "==" ) value ; 




block..                ::=  "{" ( step | nonsense )* "}" ;

returnBlock..          ::=  "{" ( step | nonsense )* returnStatement "}" ;
                                 
returnStatement        ::=  [return] value ";" ; 



step                   ::=  variablesDeclaration
 
                         |  variableAssignment
                          
                         |  conditionalBlocks
                          
                         |  objectAssignment
                          
                         |  arrayAssignment
                          
                         |  forEachLoop
                          
                         ;  
  
assignment             ::=  "=" value ;



procedureCall          ::=  reference<NO_WHITESPACE>"(" values? ")" ;

nodesQuery             ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;

nodeQuery              ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," expression ")" ;



parameters             ::=  parameter ( "," parameter )* ;

values                 ::=  value ( "," value )* ;



value                  ::=  procedureCall | nodesQuery | nodeQuery | variable | [number] | [primitive] | [string-literal] ;

variable               ::=  [name] ;

parameter              ::=  [type] [name]

                         |  "_" 

                         ;



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

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _query = require("../utilities/query");
var _constants = require("../constants");
var _types = require("../types");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Expression;
var match = _necessary.arrayUtilities.match;
var numberTerminalNodeQuery = (0, _query.nodeQuery)("/expression/@number"), reduceExpressionNodeQuery = (0, _query.nodeQuery)("/reduce/expression"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/expression/@primitive"), ternaryExpressionNodeQuery = (0, _query.nodeQuery)("/ternary/expression"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/expression/@string-literal"), returnStatementExpressionNodeQuery = (0, _query.nodeQuery)("/returnStatement/expression"), variableAssignmentExpressionNodeQuery = (0, _query.nodeQuery)("/variableAssignment/expression");
var _default = (0, _elements.define)((_Expression = /*#__PURE__*/ function() {
    function Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression) {
        _class_call_check(this, Expression);
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.string = string;
        this.boolean = boolean;
        this.some = some;
        this.every = every;
        this.reduce = reduce;
        this.ternary = ternary;
        this.variable = variable;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.comparison = comparison;
        this.returnBlock = returnBlock;
        this.procedureCall = procedureCall;
        this.negatedExpression = negatedExpression;
        this.bitwiseExpression = bitwiseExpression;
        this.bracketedExpression = bracketedExpression;
    }
    _create_class(Expression, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.boolean;
            }
        },
        {
            key: "getSome",
            value: function getSome() {
                return this.some;
            }
        },
        {
            key: "getEvery",
            value: function getEvery() {
                return this.every;
            }
        },
        {
            key: "getReduce",
            value: function getReduce() {
                return this.reduce;
            }
        },
        {
            key: "getTernary",
            value: function getTernary() {
                return this.ternay;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        },
        {
            key: "getComparison",
            value: function getComparison() {
                return this.comparison;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "getNegatedExpression",
            value: function getNegatedExpression() {
                return this.negatedExpression;
            }
        },
        {
            key: "getBitwiseExpression",
            value: function getBitwiseExpression() {
                return this.bitwiseExpression;
            }
        },
        {
            key: "getBracketedExpression",
            value: function getBracketedExpression() {
                return this.bracketedExpression;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.node !== null) {
                    type = _types.NODE_TYPE;
                } else if (this.nodes !== null) {
                    type = _types.NODES_TYPE;
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.string !== null) {
                    type = _types.STRING_TYPE;
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.some !== null) {
                    type = this.some.getType();
                } else if (this.every !== null) {
                    type = this.every.getType();
                } else if (this.reduce !== null) {
                    type = this.reduce.getType();
                } else if (this.ternary !== null) {
                    type = this.ternary.getType();
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else if (this.nodeQuery !== null) {
                    type = this.nodeQuery.getType();
                } else if (this.nodesQuery !== null) {
                    type = this.nodesQuery.getType();
                } else if (this.comparison !== null) {
                    type = this.comparison.getType();
                } else if (this.returnBlock !== null) {
                    type = this.returnBlock.getType();
                } else if (this.procedureCall !== null) {
                    type = this.procedureCall.getType();
                } else if (this.negatedExpression !== null) {
                    type = this.negatedExpression.getType();
                } else if (this.bitwiseExpression !== null) {
                    type = this.bitwiseExpression.getType();
                } else if (this.bracketedExpression !== null) {
                    type = this.bracketedExpression.getType();
                }
                return type;
            }
        },
        {
            key: "asString",
            value: function asString(context) {
                var string;
                if (false) {
                ///
                } else if (this.node !== null) {
                    string = nodeAsString(this.node, context);
                } else if (this.nodes !== null) {
                    string = nodesAsString(this.nodes, context);
                } else if (this.number !== null) {
                    string = numberAsString(this.number);
                } else if (this.string !== null) {
                    string = stringAsString(this.string);
                } else if (this.boolean !== null) {
                    string = booleanAsString(this.boolean);
                } else if (this.some !== null) {
                    string = this.some.getString();
                } else if (this.every !== null) {
                    string = this.every.getString();
                } else if (this.reduce !== null) {
                    string = this.reduce.getString();
                } else if (this.ternary !== null) {
                    string = this.ternary.getString();
                } else if (this.variable !== null) {
                    string = this.variable.getString();
                } else if (this.nodeQuery !== null) {
                    string = this.nodeQuery.getString();
                } else if (this.nodesQuery !== null) {
                    string = this.nodesQuery.getString();
                } else if (this.comparison !== null) {
                    string = this.comparison.getString();
                } else if (this.returnBlock !== null) {
                    string = this.returnBlock.getString();
                } else if (this.procedureCall !== null) {
                    string = this.procedureCall.getString();
                } else if (this.negatedExpression !== null) {
                    string = this.negatedExpression.getString();
                } else if (this.bitwiseExpression !== null) {
                    string = this.bitwiseExpression.getString();
                } else if (this.bracketedExpression !== null) {
                    string = this.bracketedExpression.getString();
                }
                return string;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                if (false) {
                ///
                } else if (this.node !== null || this.nodes !== null || this.number !== null || this.string !== null || this.boolean !== null) {
                    expression = this;
                } else if (this.some !== null) {
                    expression = this.some.evaluate(context);
                } else if (this.every !== null) {
                    expression = this.every.evaluate(context);
                } else if (this.reduce !== null) {
                    expression = this.reduce.evaluate(context);
                } else if (this.ternary !== null) {
                    expression = this.ternary.evaluate(context);
                } else if (this.variable !== null) {
                    expression = this.variable.evaluate(context);
                } else if (this.nodeQuery !== null) {
                    expression = this.nodeQuery.evaluate(context);
                } else if (this.nodesQuery !== null) {
                    expression = this.nodesQuery.evaluate(context);
                } else if (this.comparison !== null) {
                    expression = this.comparison.evaluate(context);
                } else if (this.returnBlock !== null) {
                    expression = this.returnBlock.evaluate(context);
                } else if (this.procedureCall !== null) {
                    expression = this.procedureCall.evaluate(context);
                } else if (this.negatedExpression !== null) {
                    expression = this.negatedExpression.evaluate(context);
                } else if (this.bitwiseExpression !== null) {
                    expression = this.bitwiseExpression.evaluate(context);
                } else if (this.bracketedExpression !== null) {
                    expression = this.bracketedExpression.evaluate(context);
                }
                return expression;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(expression) {
                var equalTo;
                if (false) {
                ///
                } else if (this.node !== null) {
                    var node = expression.getNode();
                    if (node === null) {
                        equalTo = false;
                    } else {
                        var nodeA = this.node, nodeB = node, nodeMatches = matchNode(nodeA, nodeB);
                        equalTo = nodeMatches; ///
                    }
                } else if (this.nodes !== null) {
                    var nodes = expression.getNode();
                    if (nodes === null) {
                        equalTo = false;
                    } else {
                        var nodesA = this.nodes, nodesB = nodes, nodesMatch = matchNodes(nodesA, nodesB);
                        equalTo = nodesMatch; ///
                    }
                } else if (this.number !== null) {
                    var number = expression.getNumber();
                    equalTo = this.number === number;
                } else if (this.string !== null) {
                    var string = expression.getString();
                    equalTo = this.string === string;
                } else if (this.boolean !== null) {
                    var boolean = expression.getBoolean();
                    equalTo = this.boolean === boolean;
                } else {
                    debugger;
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                if (node === null) {
                    node = _nullNode.default;
                }
                var nodes = null, number = null, string = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, bitwiseExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, every = null, reduce = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, bitwiseExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, bitwiseExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, bitwiseExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var expression = expressionFromExpressionNode(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromReduceNode",
            value: function fromReduceNode(reduceNode, context) {
                var reduceExpressionNode = reduceExpressionNodeQuery(reduceNode), expressionNode = reduceExpressionNode, expression = expressionFromExpressionNode(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromTernaryNode",
            value: function fromTernaryNode(ternaryNode, context) {
                var ternaryExpressionNode = ternaryExpressionNodeQuery(ternaryNode), expressionNode = ternaryExpressionNode, expression = expressionFromExpressionNode(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromReturnStatementNode",
            value: function fromReturnStatementNode(returnStatementNode, context) {
                var returnStatementExpressionNode = returnStatementExpressionNodeQuery(returnStatementNode), expressionNode = returnStatementExpressionNode, expression = expressionFromExpressionNode(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromVariableAssignmentNode",
            value: function fromVariableAssignmentNode(variableAssigmentNode, context) {
                var variableAssignmentExpressionNode = variableAssignmentExpressionNodeQuery(variableAssigmentNode), expressionNode = variableAssignmentExpressionNode, expression = expressionFromExpressionNode(expressionNode, context);
                return expression;
            }
        }
    ]);
    return Expression;
}(), _define_property(_Expression, "name", "Expression"), _Expression));
function matchNode(nodeA, nodeB) {
    var nodeMatches;
    if (nodeA === _nullNode.default || nodeB === _nullNode.default) {
        nodeMatches = nodeA === nodeB;
    } else {
        var nodeAEqualToNodeA = nodeA.isEqualTo(nodeB);
        nodeMatches = nodeAEqualToNodeA; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    var nodesMatch;
    nodesMatch = match(nodesA, nodesB, function(nodeA, nodeB) {
        var nodeMatches = matchNode(nodeA, nodeB);
        if (nodeMatches) {
            return true;
        }
    });
    return nodesMatch;
}
function nodeAsString(node, context) {
    var string;
    var nodeString = node === _nullNode.default ? _constants.NULL : context.nodeAsString(node);
    string = "'".concat(nodeString, "'");
    return string;
}
function nodesAsString(nodes, context) {
    var string;
    var nodesString = context.nodesAsString(nodes);
    string = "'".concat(nodesString, "'");
    return string;
}
function numberAsString(number) {
    var string;
    string = "".concat(number);
    return string;
}
function stringAsString(string) {
    string = '"'.concat(string, '"'); ///
    return string;
}
function booleanAsString(boolean) {
    var string;
    string = "'".concat(boolean, "'");
    return string;
}
function expressionFromExpressionNode(expressionNode, context) {
    var Some = _elements.default.Some, Every = _elements.default.Every, Reduce = _elements.default.Reduce, Expression = _elements.default.Expression, Ternary = _elements.default.Ternary, Variable = _elements.default.Variable, NodeQuery = _elements.default.NodeQuery, NodesQuery = _elements.default.NodesQuery, Comparison = _elements.default.Comparison, ReturnBlock = _elements.default.ReturnBlock, ProcedureCall = _elements.default.ProcedureCall, NegatedExpression = _elements.default.NegatedExpression, BitwiseExpression = _elements.default.BitwiseExpression, BracketedExpression = _elements.default.BracketedExpression, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), string = stringFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), some = Some.fromExpressionNode(expressionNode, context), every = Every.fromExpressionNode(expressionNode, context), reduce = Reduce.fromExpressionNode(expressionNode, context), ternary = Ternary.fromExpressionNode(expressionNode, context), variable = Variable.fromExpressionNode(expressionNode, context), _$nodeQuery = NodeQuery.fromExpressionNode(expressionNode, context), nodesQuery = NodesQuery.fromExpressionNode(expressionNode, context), comparison = Comparison.fromExpressionNode(expressionNode, context), returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context), procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context), negatedExpression = NegatedExpression.fromExpressionNode(expressionNode, context), bitwiseExpression = BitwiseExpression.fromExpressionNode(expressionNode, context), bracketedExpression = BracketedExpression.fromExpressionNode(expressionNode, context), expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression);
    return expression;
}
function nodeFromExpressionNode(expressionNode, context) {
    var node = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(expressionNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.NULL:
                {
                    node = _nullNode.default;
                    break;
                }
        }
    }
    return node;
}
function nodesFromExpressionNode(expressionNode, context) {
    var nodes = null; ///
    return nodes;
}
function numberFromExpressionNode(expressionNode, context) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(expressionNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = Number(numberTerminalNodeContent);
    }
    return number;
}
function stringFromExpressionNode(expressionNode, context) {
    var string = null;
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(expressionNode);
    if (stringLiteralTerminalNode !== null) {
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), stringLiteral = stringLiteralTerminalNodeContent; ///
        string = stringFromStringLiteral(stringLiteral, context);
    }
    return string;
}
function booleanFromExpressionNode(expressionNode, context) {
    var boolean = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(expressionNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.TRUE:
                {
                    boolean = true;
                    break;
                }
            case _constants.FALSE:
                {
                    boolean = false;
                    break;
                }
        }
    }
    return boolean;
}
function stringFromStringLiteral(stringLiteral, context) {
    var string = stringLiteral.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTlVMTCwgVFJVRSwgRkFMU0UsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vQG51bWJlclwiKSxcbiAgICAgIHJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL2V4cHJlc3Npb25cIiksXG4gICAgICBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL0BwcmltaXRpdmVcIiksXG4gICAgICB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L2V4cHJlc3Npb25cIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICByZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC9leHByZXNzaW9uXCIpLFxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgYml0d2lzZUV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgICB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb247XG4gICAgdGhpcy5iaXR3aXNlRXhwcmVzc2lvbiA9IGJpdHdpc2VFeHByZXNzaW9uO1xuICAgIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib29sZWFuO1xuICB9XG5cbiAgZ2V0U29tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lO1xuICB9XG5cbiAgZ2V0RXZlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnk7XG4gIH1cblxuICBnZXRSZWR1Y2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlO1xuICB9XG5cbiAgZ2V0VGVybmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJuYXk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0Qml0d2lzZUV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZUV4cHJlc3Npb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFU19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuZXZlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJlZHVjZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnRlcm5hcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJldHVybkJsb2NrLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5iaXR3aXNlRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoY29udGV4dCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVzQXNTdHJpbmcodGhpcy5ub2RlcywgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbnVtYmVyQXNTdHJpbmcodGhpcy5udW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZ0FzU3RyaW5nKHRoaXMuc3RyaW5nKVxuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBib29sZWFuQXNTdHJpbmcodGhpcy5ib29sZWFuKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnNvbWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmV2ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmVkdWNlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnRlcm5hcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZVF1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuY29tcGFyaXNvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmV0dXJuQmxvY2suZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJpdHdpc2VFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5ub2RlICE9PSBudWxsKSAgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm5vZGVzICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMubnVtYmVyICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5jb21wYXJpc29uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZUV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmJpdHdpc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKGV4cHJlc3Npb24pIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVzQiA9IG5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2Rlc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBleHByZXNzaW9uLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV4cHJlc3Npb25cIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBiaXR3aXNlRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VFeHByZXNzaW9uTm9kZSA9IHJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybmFyeUV4cHJlc3Npb25Ob2RlID0gdGVybmFyeUV4cHJlc3Npb25Ob2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gdGVybmFyeUV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50RXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gcmV0dXJuU3RhdGVtZW50RXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbWVudE5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVN0cmluZyAgPSAobm9kZSA9PT0gbnVsbE5vZGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZVN0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXMpO1xuXG4gIHN0cmluZyA9IGAnJHtub2Rlc1N0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBudW1iZXJBc1N0cmluZyhudW1iZXIpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJHtudW1iZXJ9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdBc1N0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gYFwiJHtzdHJpbmd9XCJgOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuQXNTdHJpbmcoYm9vbGVhbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAnJHtib29sZWFufSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lLCBFdmVyeSwgUmVkdWNlLCBFeHByZXNzaW9uLCBUZXJuYXJ5LCBWYXJpYWJsZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBDb21wYXJpc29uLCBSZXR1cm5CbG9jaywgUHJvY2VkdXJlQ2FsbCwgTmVnYXRlZEV4cHJlc3Npb24sIEJpdHdpc2VFeHByZXNzaW9uLCBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlcyA9IG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYm9vbGVhbiA9IGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gU29tZS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IEV2ZXJ5LmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJlZHVjZSA9IFJlZHVjZS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0ZXJuYXJ5ID0gVGVybmFyeS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IE5vZGVRdWVyeS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gTm9kZXNRdWVyeS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gTmVnYXRlZEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYml0d2lzZUV4cHJlc3Npb24gPSBCaXR3aXNlRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gQnJhY2tldGVkRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbjtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZXMgPSBudWxsOyAgLy8vXG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5mdW5jdGlvbiBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlID0gbnVtYmVyVGVybWluYWxOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gIGlmIChudW1iZXJUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gbnVtYmVyVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXJUZXJtaW5hbE5vZGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nID0gbnVsbDtcblxuICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICBpZiAoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgIHN0cmluZyA9IHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBsZXQgYm9vbGVhbiA9IG51bGw7XG5cbiAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlID0gcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBUUlVFOiB7XG4gICAgICAgIGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEZBTFNFOiB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBzdHJpbmdMaXRlcmFsLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsIm51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmVkdWNlRXhwcmVzc2lvbk5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVybmFyeUV4cHJlc3Npb25Ob2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSIsImRlZmluZSIsIkV4cHJlc3Npb24iLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImJpdHdpc2VFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldFN0cmluZyIsImdldEJvb2xlYW4iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldE5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0Qml0d2lzZUV4cHJlc3Npb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uIiwiZ2V0VHlwZSIsInR5cGUiLCJOT0RFX1RZUEUiLCJOT0RFU19UWVBFIiwiTlVNQkVSX1RZUEUiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsImFzU3RyaW5nIiwiY29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJudW1iZXJBc1N0cmluZyIsInN0cmluZ0FzU3RyaW5nIiwiYm9vbGVhbkFzU3RyaW5nIiwiZXZhbHVhdGUiLCJleHByZXNzaW9uIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiZnJvbU5vZGUiLCJudWxsTm9kZSIsImZyb21Ob2RlcyIsImZyb21TdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZUV4cHJlc3Npb25Ob2RlIiwiZnJvbVRlcm5hcnlOb2RlIiwidGVybmFyeU5vZGUiLCJ0ZXJuYXJ5RXhwcmVzc2lvbk5vZGUiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZSIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJuYW1lIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIiwiU29tZSIsImVsZW1lbnRzIiwiRXZlcnkiLCJSZWR1Y2UiLCJUZXJuYXJ5IiwiVmFyaWFibGUiLCJOb2RlUXVlcnkiLCJOb2Rlc1F1ZXJ5IiwiQ29tcGFyaXNvbiIsIlJldHVybkJsb2NrIiwiUHJvY2VkdXJlQ2FsbCIsIk5lZ2F0ZWRFeHByZXNzaW9uIiwiQml0d2lzZUV4cHJlc3Npb24iLCJCcmFja2V0ZWRFeHByZXNzaW9uIiwibm9kZUZyb21FeHByZXNzaW9uTm9kZSIsIm5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlIiwibnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlIiwic3RyaW5nRnJvbUV4cHJlc3Npb25Ob2RlIiwiYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsIk51bWJlciIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsIlRSVUUiLCJGQUxTRSIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNCQTs7O2VBQUE7Ozt5QkFwQitCO2dFQUVWOytEQUNBO3FCQUdLO3lCQUNzQjtxQkFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsMEJBQTBCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUNwQ0MsNEJBQTRCRCxJQUFBQSxnQkFBUyxFQUFDLHVCQUN0Q0UsNkJBQTZCRixJQUFBQSxnQkFBUyxFQUFDLDJCQUN2Q0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHdCQUN2Q0ksaUNBQWlDSixJQUFBQSxnQkFBUyxFQUFDLGdDQUMzQ0sscUNBQXFDTCxJQUFBQSxnQkFBUyxFQUFDLGdDQUMvQ00sd0NBQXdDTixJQUFBQSxn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
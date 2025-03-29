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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _default = (0, _dom.domAssigned)((_Expression = /*#__PURE__*/ function() {
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
    var Some = _dom.default.Some, Every = _dom.default.Every, Reduce = _dom.default.Reduce, Expression = _dom.default.Expression, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, ReturnBlock = _dom.default.ReturnBlock, ProcedureCall = _dom.default.ProcedureCall, NegatedExpression = _dom.default.NegatedExpression, BitwiseExpression = _dom.default.BitwiseExpression, BracketedExpression = _dom.default.BracketedExpression, node = nodeFromExpressionNode(expressionNode, context), nodes = nodesFromExpressionNode(expressionNode, context), number = numberFromExpressionNode(expressionNode, context), string = stringFromExpressionNode(expressionNode, context), boolean = booleanFromExpressionNode(expressionNode, context), some = Some.fromExpressionNode(expressionNode, context), every = Every.fromExpressionNode(expressionNode, context), reduce = Reduce.fromExpressionNode(expressionNode, context), ternary = Ternary.fromExpressionNode(expressionNode, context), variable = Variable.fromExpressionNode(expressionNode, context), _$nodeQuery = NodeQuery.fromExpressionNode(expressionNode, context), nodesQuery = NodesQuery.fromExpressionNode(expressionNode, context), comparison = Comparison.fromExpressionNode(expressionNode, context), returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context), procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context), negatedExpression = NegatedExpression.fromExpressionNode(expressionNode, context), bitwiseExpression = BitwiseExpression.fromExpressionNode(expressionNode, context), bracketedExpression = BracketedExpression.fromExpressionNode(expressionNode, context), expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, bitwiseExpression, bracketedExpression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IG51bGxOb2RlIGZyb20gXCIuLi9udWxsTm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE5VTEwsIFRSVUUsIEZBTFNFLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIE5VTUJFUl9UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL0BudW1iZXJcIiksXG4gICAgICByZWR1Y2VFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9leHByZXNzaW9uXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9AcHJpbWl0aXZlXCIpLFxuICAgICAgdGVybmFyeUV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS9leHByZXNzaW9uXCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vQHN0cmluZy1saXRlcmFsXCIpLFxuICAgICAgcmV0dXJuU3RhdGVtZW50RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZXR1cm5TdGF0ZW1lbnQvZXhwcmVzc2lvblwiKSxcbiAgICAgIHZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L2V4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgYml0d2lzZUV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgICB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb247XG4gICAgdGhpcy5iaXR3aXNlRXhwcmVzc2lvbiA9IGJpdHdpc2VFeHByZXNzaW9uO1xuICAgIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib29sZWFuO1xuICB9XG5cbiAgZ2V0U29tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lO1xuICB9XG5cbiAgZ2V0RXZlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnk7XG4gIH1cblxuICBnZXRSZWR1Y2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlO1xuICB9XG5cbiAgZ2V0VGVybmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJuYXk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0Qml0d2lzZUV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZUV4cHJlc3Npb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFU19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuZXZlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJlZHVjZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnRlcm5hcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJldHVybkJsb2NrLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5iaXR3aXNlRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoY29udGV4dCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVzQXNTdHJpbmcodGhpcy5ub2RlcywgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbnVtYmVyQXNTdHJpbmcodGhpcy5udW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZ0FzU3RyaW5nKHRoaXMuc3RyaW5nKVxuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBib29sZWFuQXNTdHJpbmcodGhpcy5ib29sZWFuKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnNvbWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmV2ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmVkdWNlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnRlcm5hcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZVF1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuY29tcGFyaXNvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmV0dXJuQmxvY2suZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJpdHdpc2VFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5ub2RlICE9PSBudWxsKSAgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm5vZGVzICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMubnVtYmVyICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5jb21wYXJpc29uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYml0d2lzZUV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmJpdHdpc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKGV4cHJlc3Npb24pIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVzQiA9IG5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2Rlc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBleHByZXNzaW9uLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV4cHJlc3Npb25cIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBiaXR3aXNlRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGJpdHdpc2VFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VFeHByZXNzaW9uTm9kZSA9IHJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybmFyeUV4cHJlc3Npb25Ob2RlID0gdGVybmFyeUV4cHJlc3Npb25Ob2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gdGVybmFyeUV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZShyZXR1cm5TdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmV0dXJuU3RhdGVtZW50RXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gcmV0dXJuU3RhdGVtZW50RXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbWVudE5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsICAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFFcXVhbFRvTm9kZUEgPSBub2RlQS5pc0VxdWFsVG8obm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQUVxdWFsVG9Ob2RlQTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGxldCBub2Rlc01hdGNoO1xuXG4gIG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1N0cmluZyhub2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZVN0cmluZyAgPSAobm9kZSA9PT0gbnVsbE5vZGUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIE5VTEwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZVN0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXMpO1xuXG4gIHN0cmluZyA9IGAnJHtub2Rlc1N0cmluZ30nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBudW1iZXJBc1N0cmluZyhudW1iZXIpIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJHtudW1iZXJ9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdBc1N0cmluZyhzdHJpbmcpIHtcbiAgc3RyaW5nID0gYFwiJHtzdHJpbmd9XCJgOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuQXNTdHJpbmcoYm9vbGVhbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAnJHtib29sZWFufSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTb21lLCBFdmVyeSwgUmVkdWNlLCBFeHByZXNzaW9uLCBUZXJuYXJ5LCBWYXJpYWJsZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBDb21wYXJpc29uLCBSZXR1cm5CbG9jaywgUHJvY2VkdXJlQ2FsbCwgTmVnYXRlZEV4cHJlc3Npb24sIEJpdHdpc2VFeHByZXNzaW9uLCBCcmFja2V0ZWRFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2RlRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJvb2xlYW4gPSBib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IFNvbWUuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXZlcnkgPSBFdmVyeS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZWR1Y2UgPSBSZWR1Y2UuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IFRlcm5hcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IE5vZGVzUXVlcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IE5lZ2F0ZWRFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpdHdpc2VFeHByZXNzaW9uID0gQml0d2lzZUV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IEJyYWNrZXRlZEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBiaXR3aXNlRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzd2l0Y2ggKHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQpIHtcbiAgICAgIGNhc2UgTlVMTDoge1xuICAgICAgICBub2RlID0gbnVsbE5vZGU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG5vZGVzRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vZGVzID0gbnVsbDsgIC8vL1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gbnVtYmVyRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICBpZiAobnVtYmVyVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbnVtYmVyVGVybWluYWxOb2RlQ29udGVudCA9IG51bWJlclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBudW1iZXIgPSBOdW1iZXIobnVtYmVyVGVybWluYWxOb2RlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgaWYgKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICBpZiAocHJpbWl0aXZlVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBzd2l0Y2ggKHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQpIHtcbiAgICAgIGNhc2UgVFJVRToge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBGQUxTRToge1xuICAgICAgICBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gc3RyaW5nTGl0ZXJhbC5yZXBsYWNlKC8oXlwifFwiJCkvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSIsInRlcm5hcnlFeHByZXNzaW9uTm9kZVF1ZXJ5Iiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50RXhwcmVzc2lvbk5vZGVRdWVyeSIsInZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkV4cHJlc3Npb24iLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImJpdHdpc2VFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldFN0cmluZyIsImdldEJvb2xlYW4iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldE5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0Qml0d2lzZUV4cHJlc3Npb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uIiwiZ2V0VHlwZSIsInR5cGUiLCJOT0RFX1RZUEUiLCJOT0RFU19UWVBFIiwiTlVNQkVSX1RZUEUiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsImFzU3RyaW5nIiwiY29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJudW1iZXJBc1N0cmluZyIsInN0cmluZ0FzU3RyaW5nIiwiYm9vbGVhbkFzU3RyaW5nIiwiZXZhbHVhdGUiLCJleHByZXNzaW9uIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwiZnJvbU5vZGUiLCJudWxsTm9kZSIsImZyb21Ob2RlcyIsImZyb21TdHJpbmciLCJmcm9tQm9vbGVhbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZUV4cHJlc3Npb25Ob2RlIiwiZnJvbVRlcm5hcnlOb2RlIiwidGVybmFyeU5vZGUiLCJ0ZXJuYXJ5RXhwcmVzc2lvbk5vZGUiLCJmcm9tUmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZSIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJuYW1lIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIiwiU29tZSIsImRvbSIsIkV2ZXJ5IiwiUmVkdWNlIiwiVGVybmFyeSIsIlZhcmlhYmxlIiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIkNvbXBhcmlzb24iLCJSZXR1cm5CbG9jayIsIlByb2NlZHVyZUNhbGwiLCJOZWdhdGVkRXhwcmVzc2lvbiIsIkJpdHdpc2VFeHByZXNzaW9uIiwiQnJhY2tldGVkRXhwcmVzc2lvbiIsIm5vZGVGcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc0Zyb21FeHByZXNzaW9uTm9kZSIsIm51bWJlckZyb21FeHByZXNzaW9uTm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZSIsImJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGUiLCJwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm51bWJlclRlcm1pbmFsTm9kZSIsIm51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQiLCJOdW1iZXIiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJzdHJpbmdMaXRlcmFsIiwic3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwiLCJUUlVFIiwiRkFMU0UiLCJyZXBsYWNlIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7eUJBcEIrQjsyREFFZjsrREFDSztxQkFFSzt5QkFFc0I7cUJBQzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLDBCQUEwQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDcENDLDRCQUE0QkQsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDdENFLDZCQUE2QkYsSUFBQUEsZ0JBQVMsRUFBQywyQkFDdkNHLDZCQUE2QkgsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNJLGlDQUFpQ0osSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDM0NLLHFDQUFxQ0wsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDL0NNLHdDQUF3Q04sSUFBQUEsZ0JBQVMsRUFBQztJQUV4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
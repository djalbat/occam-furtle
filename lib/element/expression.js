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
var _constants = require("../constants");
var _query = require("../utilities/query");
var _types = require("../types");
var _element = require("../utilities/element");
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
var reduceExpressionNodeQuery = (0, _query.nodeQuery)("/reduce/expression"), ternaryExpressionNodeQuery = (0, _query.nodeQuery)("/ternary/expression"), returnStatementExpressionNodeQuery = (0, _query.nodeQuery)("/returnStatement/expression"), variableAssignmentExpressionNodeQuery = (0, _query.nodeQuery)("/variableAssignment/expression");
var _default = (0, _elements.define)((_Expression = /*#__PURE__*/ function() {
    function Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
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
        this.logicalExpression = logicalExpression;
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
            key: "getLogiclExpression",
            value: function getLogiclExpression() {
                return this.logicalExpression;
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
                } else if (this.logicalExpression !== null) {
                    type = this.logicalExpression.getType();
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
                } else if (this.logicalExpression !== null) {
                    string = this.logicalExpression.getString();
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
                } else if (this.logicalExpression !== null) {
                    expression = this.logicalExpression.evaluate(context);
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
                var nodes = null, number = null, string = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, every = null, reduce = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
                return expression;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedExpression = null, logicalExpression = null, bracketedExpression = null, expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
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
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var expression = expressionFromExpressionNode(expressionNode, context);
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
    var Some = _elements.default.Some, Every = _elements.default.Every, Reduce = _elements.default.Reduce, Expression = _elements.default.Expression, Ternary = _elements.default.Ternary, Variable = _elements.default.Variable, NodeQuery = _elements.default.NodeQuery, NodesQuery = _elements.default.NodesQuery, Comparison = _elements.default.Comparison, ReturnBlock = _elements.default.ReturnBlock, ProcedureCall = _elements.default.ProcedureCall, NegatedExpression = _elements.default.NegatedExpression, LogicalExpression = _elements.default.LogicalExpression, BracketedExpression = _elements.default.BracketedExpression, node = (0, _element.nodeFromExpressionNode)(expressionNode, context), nodes = (0, _element.nodesFromExpressionNode)(expressionNode, context), number = (0, _element.numberFromExpressionNode)(expressionNode, context), string = (0, _element.stringFromExpressionNode)(expressionNode, context), boolean = (0, _element.booleanFromExpressionNode)(expressionNode, context), some = Some.fromExpressionNode(expressionNode, context), every = Every.fromExpressionNode(expressionNode, context), reduce = Reduce.fromExpressionNode(expressionNode, context), ternary = Ternary.fromExpressionNode(expressionNode, context), variable = Variable.fromExpressionNode(expressionNode, context), _$nodeQuery = NodeQuery.fromExpressionNode(expressionNode, context), nodesQuery = NodesQuery.fromExpressionNode(expressionNode, context), comparison = Comparison.fromExpressionNode(expressionNode, context), returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context), procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context), negatedExpression = NegatedExpression.fromExpressionNode(expressionNode, context), logicalExpression = LogicalExpression.fromExpressionNode(expressionNode, context), bracketedExpression = BracketedExpression.fromExpressionNode(expressionNode, context), expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);
    return expression;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVGcm9tRXhwcmVzc2lvbk5vZGUsXG4gICAgICAgICBub2Rlc0Zyb21FeHByZXNzaW9uTm9kZSxcbiAgICAgICAgIHN0cmluZ0Zyb21FeHByZXNzaW9uTm9kZSxcbiAgICAgICAgIG51bWJlckZyb21FeHByZXNzaW9uTm9kZSxcbiAgICAgICAgIGJvb2xlYW5Gcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL2V4cHJlc3Npb25cIiksXG4gICAgICB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L2V4cHJlc3Npb25cIiksXG4gICAgICByZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC9leHByZXNzaW9uXCIpLFxuICAgICAgdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgICB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uID0gbmVnYXRlZEV4cHJlc3Npb247XG4gICAgdGhpcy5sb2dpY2FsRXhwcmVzc2lvbiA9IGxvZ2ljYWxFeHByZXNzaW9uO1xuICAgIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiA9IGJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Qm9vbGVhbigpIHtcbiAgICByZXR1cm4gdGhpcy5ib29sZWFuO1xuICB9XG5cbiAgZ2V0U29tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lO1xuICB9XG5cbiAgZ2V0RXZlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnk7XG4gIH1cblxuICBnZXRSZWR1Y2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlO1xuICB9XG5cbiAgZ2V0VGVybmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJuYXk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0TG9naWNsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERV9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVTX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmV0dXJuQmxvY2suZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc1N0cmluZyhjb250ZXh0KSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZXNBc1N0cmluZyh0aGlzLm5vZGVzLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBudW1iZXJBc1N0cmluZyh0aGlzLm51bWJlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nQXNTdHJpbmcodGhpcy5zdHJpbmcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGJvb2xlYW5Bc1N0cmluZyh0aGlzLmJvb2xlYW4pXG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuc29tZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuZXZlcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5yZWR1Y2UuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMudGVybmFyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2RlUXVlcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZXNRdWVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5jb21wYXJpc29uLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5yZXR1cm5CbG9jay5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubG9naWNhbEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLm5vZGUgIT09IG51bGwpICB8fFxuICAgICAgICAgICAgICAgKHRoaXMubm9kZXMgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5udW1iZXIgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5zdHJpbmcgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ib29sZWFuICE9PSBudWxsKSkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5yZWR1Y2UuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubG9naWNhbEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBpc0VxdWFsVG8oZXhwcmVzc2lvbikge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb24uZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5udW1iZXIgPT09IG51bWJlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLnN0cmluZyA9PT0gc3RyaW5nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYm9vbGVhbiA9IGV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXhwcmVzc2lvblwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBudWxsTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGxvZ2ljYWxFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24obm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBub2RlcyA9IG51bGwsXG4gICAgICAgICAgbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZHVjZUV4cHJlc3Npb25Ob2RlID0gcmVkdWNlRXhwcmVzc2lvbk5vZGVRdWVyeShyZWR1Y2VOb2RlKSxcbiAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IHJlZHVjZUV4cHJlc3Npb25Ob2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZXR1cm5TdGF0ZW1lbnROb2RlKHJldHVyblN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZSA9IHJldHVyblN0YXRlbWVudEV4cHJlc3Npb25Ob2RlUXVlcnkocmV0dXJuU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSByZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdtZW50Tm9kZSksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSwgIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQUVxdWFsVG9Ob2RlQSA9IG5vZGVBLmlzRXF1YWxUbyhub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBRXF1YWxUb05vZGVBOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgbGV0IG5vZGVzTWF0Y2g7XG5cbiAgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2RlU3RyaW5nICA9IChub2RlID09PSBudWxsTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIHN0cmluZyA9IGAnJHtub2RlU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2Rlcyk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVzU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG51bWJlckFzU3RyaW5nKG51bWJlcikge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAke251bWJlcn1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0FzU3RyaW5nKHN0cmluZykge1xuICBzdHJpbmcgPSBgXCIke3N0cmluZ31cImA7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Bc1N0cmluZyhib29sZWFuKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCcke2Jvb2xlYW59J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUsIEV2ZXJ5LCBSZWR1Y2UsIEV4cHJlc3Npb24sIFRlcm5hcnksIFZhcmlhYmxlLCBOb2RlUXVlcnksIE5vZGVzUXVlcnksIENvbXBhcmlzb24sIFJldHVybkJsb2NrLCBQcm9jZWR1cmVDYWxsLCBOZWdhdGVkRXhwcmVzc2lvbiwgTG9naWNhbEV4cHJlc3Npb24sIEJyYWNrZXRlZEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gbm9kZUZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBudW1iZXIgPSBudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBTb21lLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV2ZXJ5ID0gRXZlcnkuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gUmVkdWNlLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHRlcm5hcnkgPSBUZXJuYXJ5LmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBOb2Rlc1F1ZXJ5LmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZEV4cHJlc3Npb24gPSBOZWdhdGVkRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IExvZ2ljYWxFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBCcmFja2V0ZWRFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBleHByZXNzaW9uO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJyZWR1Y2VFeHByZXNzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybmFyeUV4cHJlc3Npb25Ob2RlUXVlcnkiLCJyZXR1cm5TdGF0ZW1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSIsImRlZmluZSIsIkV4cHJlc3Npb24iLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldFN0cmluZyIsImdldEJvb2xlYW4iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldE5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0TG9naWNsRXhwcmVzc2lvbiIsImdldEJyYWNrZXRlZEV4cHJlc3Npb24iLCJnZXRUeXBlIiwidHlwZSIsIk5PREVfVFlQRSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm51bWJlckFzU3RyaW5nIiwic3RyaW5nQXNTdHJpbmciLCJib29sZWFuQXNTdHJpbmciLCJldmFsdWF0ZSIsImV4cHJlc3Npb24iLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJmcm9tTm9kZSIsIm51bGxOb2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlFeHByZXNzaW9uTm9kZSIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21SZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50Tm9kZSIsInJldHVyblN0YXRlbWVudEV4cHJlc3Npb25Ob2RlIiwiZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsIm5hbWUiLCJub2RlQUVxdWFsVG9Ob2RlQSIsIm5vZGVTdHJpbmciLCJOVUxMIiwibm9kZXNTdHJpbmciLCJTb21lIiwiZWxlbWVudHMiLCJFdmVyeSIsIlJlZHVjZSIsIlRlcm5hcnkiLCJWYXJpYWJsZSIsIk5vZGVRdWVyeSIsIk5vZGVzUXVlcnkiLCJDb21wYXJpc29uIiwiUmV0dXJuQmxvY2siLCJQcm9jZWR1cmVDYWxsIiwiTmVnYXRlZEV4cHJlc3Npb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsIkJyYWNrZXRlZEV4cHJlc3Npb24iLCJub2RlRnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNGcm9tRXhwcmVzc2lvbk5vZGUiLCJudW1iZXJGcm9tRXhwcmVzc2lvbk5vZGUiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbk5vZGUiLCJib29sZWFuRnJvbUV4cHJlc3Npb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7eUJBdEIrQjtnRUFFVjsrREFDQTt5QkFFQTtxQkFFSztxQkFDb0Q7dUJBS3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDdENDLDZCQUE2QkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNFLHFDQUFxQ0YsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDL0NHLHdDQUF3Q0gsSUFBQUEsZ0JBQVMsRUFBQztJQUV4RCxXQUFlSSxJQUFBQSxnQkFBTSwrQkFBQzthQUFNQyxXQUNkQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVmLFNBQVMsRUFBRWdCLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFQyxtQkFBbUI7Z0NBRHhMakI7UUFFeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ2YsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNnQixVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBOzs7O1lBRzdCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNqQixJQUFJO1lBQ2xCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pCLEtBQUs7WUFDbkI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDakIsTUFBTTtZQUNwQjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNqQixNQUFNO1lBQ3BCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pCLE9BQU87WUFDckI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDakIsSUFBSTtZQUNsQjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNqQixLQUFLO1lBQ25COzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pCLE1BQU07WUFDcEI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxNQUFNO1lBQ3BCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbEIsUUFBUTtZQUN0Qjs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNsQyxTQUFTO1lBQ3ZCOzs7WUFFQW1DLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLFVBQVU7WUFDeEI7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsVUFBVTtZQUN4Qjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixXQUFXO1lBQ3pCOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLGFBQWE7WUFDM0I7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsaUJBQWlCO1lBQy9COzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLGlCQUFpQjtZQUMvQjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixtQkFBbUI7WUFDakM7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNyQyxJQUFJLEtBQUssTUFBTTtvQkFDN0JxQyxPQUFPQyxnQkFBUztnQkFDbEIsT0FBTyxJQUFJLElBQUksQ0FBQ3JDLEtBQUssS0FBSyxNQUFNO29CQUM5Qm9DLE9BQU9FLGlCQUFVO2dCQUNuQixPQUFPLElBQUksSUFBSSxDQUFDckMsTUFBTSxLQUFLLE1BQU07b0JBQy9CbUMsT0FBT0csa0JBQVc7Z0JBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUNyQyxNQUFNLEtBQUssTUFBTTtvQkFDL0JrQyxPQUFPSSxrQkFBVztnQkFDcEIsT0FBTyxJQUFJLElBQUksQ0FBQ3JDLE9BQU8sS0FBSyxNQUFNO29CQUNoQ2lDLE9BQU9LLG1CQUFZO2dCQUNyQixPQUFPLElBQUksSUFBSSxDQUFDckMsSUFBSSxLQUFLLE1BQU07b0JBQzdCZ0MsT0FBTyxJQUFJLENBQUNoQyxJQUFJLENBQUMrQixPQUFPO2dCQUMxQixPQUFPLElBQUksSUFBSSxDQUFDOUIsS0FBSyxLQUFLLE1BQU07b0JBQzlCK0IsT0FBTyxJQUFJLENBQUMvQixLQUFLLENBQUM4QixPQUFPO2dCQUMzQixPQUFPLElBQUksSUFBSSxDQUFDN0IsTUFBTSxLQUFLLE1BQU07b0JBQy9COEIsT0FBTyxJQUFJLENBQUM5QixNQUFNLENBQUM2QixPQUFPO2dCQUM1QixPQUFPLElBQUksSUFBSSxDQUFDNUIsT0FBTyxLQUFLLE1BQU07b0JBQ2hDNkIsT0FBTyxJQUFJLENBQUM3QixPQUFPLENBQUM0QixPQUFPO2dCQUM3QixPQUFPLElBQUksSUFBSSxDQUFDM0IsUUFBUSxLQUFLLE1BQU07b0JBQ2pDNEIsT0FBTyxJQUFJLENBQUM1QixRQUFRLENBQUMyQixPQUFPO2dCQUM5QixPQUFPLElBQUksSUFBSSxDQUFDMUMsU0FBUyxLQUFLLE1BQU07b0JBQ2xDMkMsT0FBTyxJQUFJLENBQUMzQyxTQUFTLENBQUMwQyxPQUFPO2dCQUMvQixPQUFPLElBQUksSUFBSSxDQUFDMUIsVUFBVSxLQUFLLE1BQU07b0JBQ25DMkIsT0FBTyxJQUFJLENBQUMzQixVQUFVLENBQUMwQixPQUFPO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDekIsVUFBVSxLQUFLLE1BQU07b0JBQ25DMEIsT0FBTyxJQUFJLENBQUMxQixVQUFVLENBQUN5QixPQUFPO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDeEIsV0FBVyxLQUFLLE1BQU07b0JBQ3BDeUIsT0FBTyxJQUFJLENBQUN6QixXQUFXLENBQUN3QixPQUFPO2dCQUNqQyxPQUFPLElBQUksSUFBSSxDQUFDdkIsYUFBYSxLQUFLLE1BQU07b0JBQ3RDd0IsT0FBTyxJQUFJLENBQUN4QixhQUFhLENBQUN1QixPQUFPO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDdEIsaUJBQWlCLEtBQUssTUFBTTtvQkFDMUN1QixPQUFPLElBQUksQ0FBQ3ZCLGlCQUFpQixDQUFDc0IsT0FBTztnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ3JCLGlCQUFpQixLQUFLLE1BQU07b0JBQzFDc0IsT0FBTyxJQUFJLENBQUN0QixpQkFBaUIsQ0FBQ3FCLE9BQU87Z0JBQ3ZDLE9BQU8sSUFBSSxJQUFJLENBQUNwQixtQkFBbUIsS0FBSyxNQUFNO29CQUM1Q3FCLE9BQU8sSUFBSSxDQUFDckIsbUJBQW1CLENBQUNvQixPQUFPO2dCQUN6QztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSXpDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNILElBQUksS0FBSyxNQUFNO29CQUM3QkcsU0FBUzBDLGFBQWEsSUFBSSxDQUFDN0MsSUFBSSxFQUFFNEM7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMzQyxLQUFLLEtBQUssTUFBTTtvQkFDOUJFLFNBQVMyQyxjQUFjLElBQUksQ0FBQzdDLEtBQUssRUFBRTJDO2dCQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDMUMsTUFBTSxLQUFLLE1BQU07b0JBQy9CQyxTQUFTNEMsZUFBZSxJQUFJLENBQUM3QyxNQUFNO2dCQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDQyxNQUFNLEtBQUssTUFBTTtvQkFDL0JBLFNBQVM2QyxlQUFlLElBQUksQ0FBQzdDLE1BQU07Z0JBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUNDLE9BQU8sS0FBSyxNQUFNO29CQUNoQ0QsU0FBUzhDLGdCQUFnQixJQUFJLENBQUM3QyxPQUFPO2dCQUN2QyxPQUFPLElBQUksSUFBSSxDQUFDQyxJQUFJLEtBQUssTUFBTTtvQkFDN0JGLFNBQVMsSUFBSSxDQUFDRSxJQUFJLENBQUNlLFNBQVM7Z0JBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUNkLEtBQUssS0FBSyxNQUFNO29CQUM5QkgsU0FBUyxJQUFJLENBQUNHLEtBQUssQ0FBQ2MsU0FBUztnQkFDL0IsT0FBTyxJQUFJLElBQUksQ0FBQ2IsTUFBTSxLQUFLLE1BQU07b0JBQy9CSixTQUFTLElBQUksQ0FBQ0ksTUFBTSxDQUFDYSxTQUFTO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDWixPQUFPLEtBQUssTUFBTTtvQkFDaENMLFNBQVMsSUFBSSxDQUFDSyxPQUFPLENBQUNZLFNBQVM7Z0JBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUNYLFFBQVEsS0FBSyxNQUFNO29CQUNqQ04sU0FBUyxJQUFJLENBQUNNLFFBQVEsQ0FBQ1csU0FBUztnQkFDbEMsT0FBTyxJQUFJLElBQUksQ0FBQzFCLFNBQVMsS0FBSyxNQUFNO29CQUNsQ1MsU0FBUyxJQUFJLENBQUNULFNBQVMsQ0FBQzBCLFNBQVM7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNWLFVBQVUsS0FBSyxNQUFNO29CQUNuQ1AsU0FBUyxJQUFJLENBQUNPLFVBQVUsQ0FBQ1UsU0FBUztnQkFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQ1QsVUFBVSxLQUFLLE1BQU07b0JBQ25DUixTQUFTLElBQUksQ0FBQ1EsVUFBVSxDQUFDUyxTQUFTO2dCQUNwQyxPQUFPLElBQUksSUFBSSxDQUFDUixXQUFXLEtBQUssTUFBTTtvQkFDcENULFNBQVMsSUFBSSxDQUFDUyxXQUFXLENBQUNRLFNBQVM7Z0JBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUNQLGFBQWEsS0FBSyxNQUFNO29CQUN0Q1YsU0FBUyxJQUFJLENBQUNVLGFBQWEsQ0FBQ08sU0FBUztnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ04saUJBQWlCLEtBQUssTUFBTTtvQkFDMUNYLFNBQVMsSUFBSSxDQUFDVyxpQkFBaUIsQ0FBQ00sU0FBUztnQkFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQ0wsaUJBQWlCLEtBQUssTUFBTTtvQkFDMUNaLFNBQVMsSUFBSSxDQUFDWSxpQkFBaUIsQ0FBQ0ssU0FBUztnQkFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQ0osbUJBQW1CLEtBQUssTUFBTTtvQkFDNUNiLFNBQVMsSUFBSSxDQUFDYSxtQkFBbUIsQ0FBQ0ksU0FBUztnQkFDN0M7Z0JBRUEsT0FBT2pCO1lBQ1Q7OztZQUVBK0MsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNOLE9BQU87Z0JBQ2QsSUFBSU87Z0JBRUosSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLEFBQUMsSUFBSSxDQUFDbkQsSUFBSSxLQUFLLFFBQ2QsSUFBSSxDQUFDQyxLQUFLLEtBQUssUUFDZixJQUFJLENBQUNDLE1BQU0sS0FBSyxRQUNoQixJQUFJLENBQUNDLE1BQU0sS0FBSyxRQUNoQixJQUFJLENBQUNDLE9BQU8sS0FBSyxNQUFPO29CQUNsQytDLGFBQWEsSUFBSTtnQkFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQzlDLElBQUksS0FBSyxNQUFNO29CQUM3QjhDLGFBQWEsSUFBSSxDQUFDOUMsSUFBSSxDQUFDNkMsUUFBUSxDQUFDTjtnQkFDbEMsT0FBTyxJQUFJLElBQUksQ0FBQ3RDLEtBQUssS0FBSyxNQUFNO29CQUM5QjZDLGFBQWEsSUFBSSxDQUFDN0MsS0FBSyxDQUFDNEMsUUFBUSxDQUFDTjtnQkFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQ3JDLE1BQU0sS0FBSyxNQUFNO29CQUMvQjRDLGFBQWEsSUFBSSxDQUFDNUMsTUFBTSxDQUFDMkMsUUFBUSxDQUFDTjtnQkFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQ3BDLE9BQU8sS0FBSyxNQUFNO29CQUNoQzJDLGFBQWEsSUFBSSxDQUFDM0MsT0FBTyxDQUFDMEMsUUFBUSxDQUFDTjtnQkFDckMsT0FBTyxJQUFJLElBQUksQ0FBQ25DLFFBQVEsS0FBSyxNQUFNO29CQUNqQzBDLGFBQWEsSUFBSSxDQUFDMUMsUUFBUSxDQUFDeUMsUUFBUSxDQUFDTjtnQkFDdEMsT0FBTyxJQUFJLElBQUksQ0FBQ2xELFNBQVMsS0FBSyxNQUFNO29CQUNsQ3lELGFBQWEsSUFBSSxDQUFDekQsU0FBUyxDQUFDd0QsUUFBUSxDQUFDTjtnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ2xDLFVBQVUsS0FBSyxNQUFNO29CQUNuQ3lDLGFBQWEsSUFBSSxDQUFDekMsVUFBVSxDQUFDd0MsUUFBUSxDQUFDTjtnQkFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQ2pDLFVBQVUsS0FBSyxNQUFNO29CQUNuQ3dDLGFBQWEsSUFBSSxDQUFDeEMsVUFBVSxDQUFDdUMsUUFBUSxDQUFDTjtnQkFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQ2hDLFdBQVcsS0FBSyxNQUFNO29CQUNwQ3VDLGFBQWEsSUFBSSxDQUFDdkMsV0FBVyxDQUFDc0MsUUFBUSxDQUFDTjtnQkFDekMsT0FBTyxJQUFJLElBQUksQ0FBQy9CLGFBQWEsS0FBSyxNQUFNO29CQUN0Q3NDLGFBQWEsSUFBSSxDQUFDdEMsYUFBYSxDQUFDcUMsUUFBUSxDQUFDTjtnQkFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQzlCLGlCQUFpQixLQUFLLE1BQU07b0JBQzFDcUMsYUFBYSxJQUFJLENBQUNyQyxpQkFBaUIsQ0FBQ29DLFFBQVEsQ0FBQ047Z0JBQy9DLE9BQU8sSUFBSSxJQUFJLENBQUM3QixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQ29DLGFBQWEsSUFBSSxDQUFDcEMsaUJBQWlCLENBQUNtQyxRQUFRLENBQUNOO2dCQUMvQyxPQUFPLElBQUksSUFBSSxDQUFDNUIsbUJBQW1CLEtBQUssTUFBTTtvQkFDNUNtQyxhQUFhLElBQUksQ0FBQ25DLG1CQUFtQixDQUFDa0MsUUFBUSxDQUFDTjtnQkFDakQ7Z0JBRUEsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRCxVQUFVO2dCQUNsQixJQUFJRTtnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDckQsSUFBSSxLQUFLLE1BQU07b0JBQzdCLElBQU1BLE9BQU9tRCxXQUFXbEMsT0FBTztvQkFFL0IsSUFBSWpCLFNBQVMsTUFBTTt3QkFDakJxRCxVQUFVO29CQUNaLE9BQU87d0JBQ0wsSUFBTUMsUUFBUSxJQUFJLENBQUN0RCxJQUFJLEVBQ2pCdUQsUUFBUXZELE1BQ1J3RCxjQUFjQyxVQUFVSCxPQUFPQzt3QkFFckNGLFVBQVVHLGFBQWMsR0FBRztvQkFDN0I7Z0JBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQ3ZELEtBQUssS0FBSyxNQUFNO29CQUM5QixJQUFNQSxRQUFRa0QsV0FBV2xDLE9BQU87b0JBRWhDLElBQUloQixVQUFVLE1BQU07d0JBQ2xCb0QsVUFBVTtvQkFDWixPQUFPO3dCQUNMLElBQU1LLFNBQVMsSUFBSSxDQUFDekQsS0FBSyxFQUNuQjBELFNBQVMxRCxPQUNUMkQsYUFBYUMsV0FBV0gsUUFBUUM7d0JBRXRDTixVQUFVTyxZQUFZLEdBQUc7b0JBQzNCO2dCQUNGLE9BQU8sSUFBSSxJQUFJLENBQUMxRCxNQUFNLEtBQUssTUFBTTtvQkFDL0IsSUFBTUEsU0FBU2lELFdBQVdoQyxTQUFTO29CQUVuQ2tDLFVBQVcsSUFBSSxDQUFDbkQsTUFBTSxLQUFLQTtnQkFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxLQUFLLE1BQU07b0JBQy9CLElBQU1BLFNBQVNnRCxXQUFXL0IsU0FBUztvQkFFbkNpQyxVQUFXLElBQUksQ0FBQ2xELE1BQU0sS0FBS0E7Z0JBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUNDLE9BQU8sS0FBSyxNQUFNO29CQUNoQyxJQUFNQSxVQUFVK0MsV0FBVzlCLFVBQVU7b0JBRXJDZ0MsVUFBVyxJQUFJLENBQUNqRCxPQUFPLEtBQUtBO2dCQUM5QixPQUFPO29CQUNMLFFBQVE7Z0JBQ1Y7Z0JBRUEsT0FBT2lEO1lBQ1Q7Ozs7WUFJT1MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBUzlELElBQUksRUFBRTRDLE9BQU87Z0JBQzNCLElBQUk1QyxTQUFTLE1BQU07b0JBQ2pCQSxPQUFPK0QsaUJBQVE7Z0JBQ2pCO2dCQUVBLElBQU05RCxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsU0FBUyxNQUNUQyxVQUFVLE1BQ1ZDLE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVkMsV0FBVyxNQUNYZixjQUFZLE1BQ1pnQixhQUFhLE1BQ2JDLGFBQWEsTUFDYkMsY0FBYyxNQUNkQyxnQkFBZ0IsTUFDaEJDLG9CQUFvQixNQUNwQkMsb0JBQW9CLE1BQ3BCQyxzQkFBc0IsTUFDdEJtQyxhQUFhLElBQUlwRCxXQUFXQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQyxNQUFNQyxPQUFPQyxRQUFRQyxTQUFTQyxVQUFVZixhQUFXZ0IsWUFBWUMsWUFBWUMsYUFBYUMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO2dCQUVyTixPQUFPbUM7WUFDVDs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLFVBQVUvRCxLQUFLLEVBQUUyQyxPQUFPO2dCQUM3QixJQUFNNUMsT0FBTyxNQUNQRSxTQUFTLE1BQ1RDLFNBQVMsTUFDVEMsVUFBVSxNQUNWSSxVQUFVLE1BQ1ZILE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RFLFdBQVcsTUFDWGYsY0FBWSxNQUNaZ0IsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWMsTUFDZEMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQixNQUNwQkMsc0JBQXNCLE1BQ3RCbUMsYUFBYSxJQUFJcEQsV0FBV0MsTUFBTUMsT0FBT0MsUUFBUUMsUUFBUUMsU0FBU0MsTUFBTUMsT0FBT0MsUUFBUUMsU0FBU0MsVUFBVWYsYUFBV2dCLFlBQVlDLFlBQVlDLGFBQWFDLGVBQWVDLG1CQUFtQkMsbUJBQW1CQztnQkFFck4sT0FBT21DO1lBQ1Q7OztZQUVPYyxLQUFBQTttQkFBUCxTQUFPQSxXQUFXOUQsTUFBTSxFQUFFeUMsT0FBTztnQkFDL0IsSUFBTTVDLE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RFLFVBQVUsTUFDVkMsT0FBTyxNQUNQQyxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsVUFBVSxNQUNWQyxXQUFXLE1BQ1hmLGNBQVksTUFDWmdCLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjLE1BQ2RDLGdCQUFnQixNQUNoQkMsb0JBQW9CLE1BQ3BCQyxvQkFBb0IsTUFDcEJDLHNCQUFzQixNQUN0Qm1DLGFBQWEsSUFBSXBELFdBQVdDLE1BQU1DLE9BQU9DLFFBQVFDLFFBQVFDLFNBQVNDLE1BQU1DLE9BQU9DLFFBQVFDLFNBQVNDLFVBQVVmLGFBQVdnQixZQUFZQyxZQUFZQyxhQUFhQyxlQUFlQyxtQkFBbUJDLG1CQUFtQkM7Z0JBRXJOLE9BQU9tQztZQUNUOzs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsWUFBWTlELE9BQU8sRUFBRXdDLE9BQU87Z0JBQ2pDLElBQU01QyxPQUFPLE1BQ1BDLFFBQVEsTUFDUkMsU0FBUyxNQUNUQyxTQUFTLE1BQ1RFLE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVkMsV0FBVyxNQUNYZixjQUFZLE1BQ1pnQixhQUFhLE1BQ2JDLGFBQWEsTUFDYkMsY0FBYyxNQUNkQyxnQkFBZ0IsTUFDaEJDLG9CQUFvQixNQUNwQkMsb0JBQW9CLE1BQ3BCQyxzQkFBc0IsTUFDdEJtQyxhQUFhLElBQUlwRCxXQUFXQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQyxNQUFNQyxPQUFPQyxRQUFRQyxTQUFTQyxVQUFVZixhQUFXZ0IsWUFBWUMsWUFBWUMsYUFBYUMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO2dCQUVyTixPQUFPbUM7WUFDVDs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVLEVBQUV4QixPQUFPO2dCQUN2QyxJQUFNeUIsdUJBQXVCNUUsMEJBQTBCMkUsYUFDakRFLGlCQUFpQkQsc0JBQ2pCbEIsYUFBYW9CLDZCQUE2QkQsZ0JBQWdCMUI7Z0JBRWhFLE9BQU9PO1lBQ1Q7OztZQUVPcUIsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUU3QixPQUFPO2dCQUN6QyxJQUFNOEIsd0JBQXdCL0UsMkJBQTJCOEUsY0FDbkRILGlCQUFpQkksdUJBQ2pCdkIsYUFBYW9CLDZCQUE2QkQsZ0JBQWdCMUI7Z0JBRWhFLE9BQU9PO1lBQ1Q7OztZQUVPd0IsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CTCxjQUFjLEVBQUUxQixPQUFPO2dCQUMvQyxJQUFNTyxhQUFhb0IsNkJBQTZCRCxnQkFBZ0IxQjtnQkFFaEUsT0FBT087WUFDVDs7O1lBRU95QixLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLG1CQUFtQixFQUFFakMsT0FBTztnQkFDekQsSUFBTWtDLGdDQUFnQ2xGLG1DQUFtQ2lGLHNCQUNuRVAsaUJBQWlCUSwrQkFDakIzQixhQUFhb0IsNkJBQTZCRCxnQkFBZ0IxQjtnQkFFaEUsT0FBT087WUFDVDs7O1lBRU80QixLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHFCQUFxQixFQUFFcEMsT0FBTztnQkFDOUQsSUFBTXFDLG1DQUFtQ3BGLHNDQUFzQ21GLHdCQUN6RVYsaUJBQWlCVyxrQ0FDakI5QixhQUFhb0IsNkJBQTZCRCxnQkFBZ0IxQjtnQkFFaEUsT0FBT087WUFDVDs7OztLQXRJQSw4QkFBTytCLFFBQU87QUF5SWhCLFNBQVN6QixVQUFVSCxLQUFLLEVBQUVDLEtBQUs7SUFDN0IsSUFBSUM7SUFFSixJQUFJLEFBQUNGLFVBQVVTLGlCQUFRLElBQU1SLFVBQVVRLGlCQUFRLEVBQUc7UUFDaERQLGNBQWVGLFVBQVVDO0lBQzNCLE9BQU87UUFDTCxJQUFNNEIsb0JBQW9CN0IsTUFBTUYsU0FBUyxDQUFDRztRQUUxQ0MsY0FBYzJCLG1CQUFvQixHQUFHO0lBQ3ZDO0lBRUEsT0FBTzNCO0FBQ1Q7QUFFQSxTQUFTSyxXQUFXSCxNQUFNLEVBQUVDLE1BQU07SUFDaEMsSUFBSUM7SUFFSkEsYUFBYXJFLE1BQU1tRSxRQUFRQyxRQUFRLFNBQUNMLE9BQU9DO1FBQ3pDLElBQU1DLGNBQWNDLFVBQVVILE9BQU9DO1FBRXJDLElBQUlDLGFBQWE7WUFDZixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTZixhQUFhN0MsSUFBSSxFQUFFNEMsT0FBTztJQUNqQyxJQUFJekM7SUFFSixJQUFNaUYsYUFBYyxBQUFDcEYsU0FBUytELGlCQUFRLEdBQ2hCc0IsZUFBSSxHQUNGekMsUUFBUUMsWUFBWSxDQUFDN0M7SUFFN0NHLFNBQVMsQUFBQyxJQUFjLE9BQVhpRixZQUFXO0lBRXhCLE9BQU9qRjtBQUNUO0FBRUEsU0FBUzJDLGNBQWM3QyxLQUFLLEVBQUUyQyxPQUFPO0lBQ25DLElBQUl6QztJQUVKLElBQU1tRixjQUFjMUMsUUFBUUUsYUFBYSxDQUFDN0M7SUFFMUNFLFNBQVMsQUFBQyxJQUFlLE9BQVptRixhQUFZO0lBRXpCLE9BQU9uRjtBQUNUO0FBRUEsU0FBUzRDLGVBQWU3QyxNQUFNO0lBQzVCLElBQUlDO0lBRUpBLFNBQVMsQUFBQyxHQUFTLE9BQVBEO0lBRVosT0FBT0M7QUFDVDtBQUVBLFNBQVM2QyxlQUFlN0MsTUFBTTtJQUM1QkEsU0FBUyxBQUFDLElBQVUsT0FBUEEsUUFBTyxNQUFJLEdBQUc7SUFFM0IsT0FBT0E7QUFDVDtBQUVBLFNBQVM4QyxnQkFBZ0I3QyxPQUFPO0lBQzlCLElBQUlEO0lBRUpBLFNBQVMsQUFBQyxJQUFXLE9BQVJDLFNBQVE7SUFFckIsT0FBT0Q7QUFDVDtBQUVBLFNBQVNvRSw2QkFBNkJELGNBQWMsRUFBRTFCLE9BQU87SUFDM0QsSUFBUTJDLE9BQWlMQyxpQkFBUSxDQUF6TEQsTUFBTUUsUUFBMktELGlCQUFRLENBQW5MQyxPQUFPQyxTQUFvS0YsaUJBQVEsQ0FBNUtFLFFBQVEzRixhQUE0SnlGLGlCQUFRLENBQXBLekYsWUFBWTRGLFVBQWdKSCxpQkFBUSxDQUF4SkcsU0FBU0MsV0FBdUlKLGlCQUFRLENBQS9JSSxVQUFVQyxZQUE2SEwsaUJBQVEsQ0FBcklLLFdBQVdDLGFBQWtITixpQkFBUSxDQUExSE0sWUFBWUMsYUFBc0dQLGlCQUFRLENBQTlHTyxZQUFZQyxjQUEwRlIsaUJBQVEsQ0FBbEdRLGFBQWFDLGdCQUE2RVQsaUJBQVEsQ0FBckZTLGVBQWVDLG9CQUE4RFYsaUJBQVEsQ0FBdEVVLG1CQUFtQkMsb0JBQTJDWCxpQkFBUSxDQUFuRFcsbUJBQW1CQyxzQkFBd0JaLGlCQUFRLENBQWhDWSxxQkFDM0pwRyxPQUFPcUcsSUFBQUEsK0JBQXNCLEVBQUMvQixnQkFBZ0IxQixVQUM5QzNDLFFBQVFxRyxJQUFBQSxnQ0FBdUIsRUFBQ2hDLGdCQUFnQjFCLFVBQ2hEMUMsU0FBU3FHLElBQUFBLGlDQUF3QixFQUFDakMsZ0JBQWdCMUIsVUFDbER6QyxTQUFTcUcsSUFBQUEsaUNBQXdCLEVBQUNsQyxnQkFBZ0IxQixVQUNsRHhDLFVBQVVxRyxJQUFBQSxrQ0FBeUIsRUFBQ25DLGdCQUFnQjFCLFVBQ3BEdkMsT0FBT2tGLEtBQUtaLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUMvQ3RDLFFBQVFtRixNQUFNZCxrQkFBa0IsQ0FBQ0wsZ0JBQWdCMUIsVUFDakRyQyxTQUFTbUYsT0FBT2Ysa0JBQWtCLENBQUNMLGdCQUFnQjFCLFVBQ25EcEMsVUFBVW1GLFFBQVFoQixrQkFBa0IsQ0FBQ0wsZ0JBQWdCMUIsVUFDckRuQyxXQUFXbUYsU0FBU2pCLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUN2RGxELGNBQVltRyxVQUFVbEIsa0JBQWtCLENBQUNMLGdCQUFnQjFCLFVBQ3pEbEMsYUFBYW9GLFdBQVduQixrQkFBa0IsQ0FBQ0wsZ0JBQWdCMUIsVUFDM0RqQyxhQUFhb0YsV0FBV3BCLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUMzRGhDLGNBQWNvRixZQUFZckIsa0JBQWtCLENBQUNMLGdCQUFnQjFCLFVBQzdEL0IsZ0JBQWdCb0YsY0FBY3RCLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUNqRTlCLG9CQUFvQm9GLGtCQUFrQnZCLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUN6RTdCLG9CQUFvQm9GLGtCQUFrQnhCLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUN6RTVCLHNCQUFzQm9GLG9CQUFvQnpCLGtCQUFrQixDQUFDTCxnQkFBZ0IxQixVQUM3RU8sYUFBYSxJQUFJcEQsV0FBV0MsTUFBTUMsT0FBT0MsUUFBUUMsUUFBUUMsU0FBU0MsTUFBTUMsT0FBT0MsUUFBUUMsU0FBU0MsVUFBVWYsYUFBV2dCLFlBQVlDLFlBQVlDLGFBQWFDLGVBQWVDLG1CQUFtQkMsbUJBQW1CQztJQUVyTixPQUFPbUM7QUFDVCJ9
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
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _constants = require("../constants");
var _elements = require("../elements");
var _query = require("../utilities/query");
var _element = require("../utilities/element");
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
var _Expression;
var match = _necessary.arrayUtilities.match;
var reduceExpressionNodeQuery = (0, _query.nodeQuery)("/reduce/expression"), ternaryExpressionNodeQuery = (0, _query.nodeQuery)("/ternary/expression"), variableAssignmentExpressionNodeQuery = (0, _query.nodeQuery)("/variableAssignment/expression");
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
                var reduceExpressionNode = reduceExpressionNodeQuery(reduceNode), expressionNode = reduceExpressionNode, expression = (0, _element.expressionFromExpressionNode)(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromTernaryNode",
            value: function fromTernaryNode(ternaryNode, context) {
                var ternaryExpressionNode = ternaryExpressionNodeQuery(ternaryNode), expressionNode = ternaryExpressionNode, expression = (0, _element.expressionFromExpressionNode)(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var expression = (0, _element.expressionFromExpressionNode)(expressionNode, context);
                return expression;
            }
        },
        {
            key: "fromVariableAssignmentNode",
            value: function fromVariableAssignmentNode(variableAssigmentNode, context) {
                var variableAssignmentExpressionNode = variableAssignmentExpressionNodeQuery(variableAssigmentNode), expressionNode = variableAssignmentExpressionNode, expression = (0, _element.expressionFromExpressionNode)(expressionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL2V4cHJlc3Npb25cIiksXG4gICAgICB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L2V4cHJlc3Npb25cIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbikge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLmV2ZXJ5ID0gZXZlcnk7XG4gICAgdGhpcy5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgdGhpcy50ZXJuYXJ5ID0gdGVybmFyeTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICAgIHRoaXMubmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbjtcbiAgICB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb247XG4gICAgdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0TmVnYXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRMb2dpY2xFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubG9naWNhbEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bWJlckFzU3RyaW5nKHRoaXMubnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmdBc1N0cmluZyh0aGlzLnN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYm9vbGVhbkFzU3RyaW5nKHRoaXMuYm9vbGVhbilcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5zb21lLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ldmVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJlZHVjZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy50ZXJuYXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVRdWVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmNvbXBhcmlzb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJldHVybkJsb2NrLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubm9kZSAhPT0gbnVsbCkgIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ub2RlcyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm51bWJlciAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLnN0cmluZyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLmJvb2xlYW4gIT09IG51bGwpKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJlZHVjZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhleHByZXNzaW9uKSB7XG4gICAgbGV0IGVxdWFsVG87XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgICAgICBub2Rlc0IgPSBub2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZXNNYXRjaDsgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gZXhwcmVzc2lvbi5nZXROdW1iZXIoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLm51bWJlciA9PT0gbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5ib29sZWFuID09PSBib29sZWFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG51bGxOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVkdWNlRXhwcmVzc2lvbk5vZGUgPSByZWR1Y2VFeHByZXNzaW9uTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gcmVkdWNlRXhwcmVzc2lvbk5vZGUsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm5hcnlFeHByZXNzaW9uTm9kZSA9IHRlcm5hcnlFeHByZXNzaW9uTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IHRlcm5hcnlFeHByZXNzaW9uTm9kZSwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdtZW50Tm9kZSksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSwgIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uRnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQUVxdWFsVG9Ob2RlQSA9IG5vZGVBLmlzRXF1YWxUbyhub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBRXF1YWxUb05vZGVBOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgbGV0IG5vZGVzTWF0Y2g7XG5cbiAgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbm9kZUFzU3RyaW5nKG5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2RlU3RyaW5nICA9IChub2RlID09PSBudWxsTm9kZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgTlVMTCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gIHN0cmluZyA9IGAnJHtub2RlU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVzQXNTdHJpbmcobm9kZXMsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2Rlcyk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVzU3RyaW5nfSdgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG51bWJlckFzU3RyaW5nKG51bWJlcikge1xuICBsZXQgc3RyaW5nO1xuXG4gIHN0cmluZyA9IGAke251bWJlcn1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0FzU3RyaW5nKHN0cmluZykge1xuICBzdHJpbmcgPSBgXCIke3N0cmluZ31cImA7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGJvb2xlYW5Bc1N0cmluZyhib29sZWFuKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCcke2Jvb2xlYW59J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwicmVkdWNlRXhwcmVzc2lvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm5hcnlFeHByZXNzaW9uTm9kZVF1ZXJ5IiwidmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGVRdWVyeSIsImRlZmluZSIsIkV4cHJlc3Npb24iLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldFN0cmluZyIsImdldEJvb2xlYW4iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldE5lZ2F0ZWRFeHByZXNzaW9uIiwiZ2V0TG9naWNsRXhwcmVzc2lvbiIsImdldEJyYWNrZXRlZEV4cHJlc3Npb24iLCJnZXRUeXBlIiwidHlwZSIsIk5PREVfVFlQRSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIlNUUklOR19UWVBFIiwiQk9PTEVBTl9UWVBFIiwiYXNTdHJpbmciLCJjb250ZXh0Iiwibm9kZUFzU3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm51bWJlckFzU3RyaW5nIiwic3RyaW5nQXNTdHJpbmciLCJib29sZWFuQXNTdHJpbmciLCJldmFsdWF0ZSIsImV4cHJlc3Npb24iLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJmcm9tTm9kZSIsIm51bGxOb2RlIiwiZnJvbU5vZGVzIiwiZnJvbVN0cmluZyIsImZyb21Cb29sZWFuIiwiZnJvbVJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJmcm9tVGVybmFyeU5vZGUiLCJ0ZXJuYXJ5Tm9kZSIsInRlcm5hcnlFeHByZXNzaW9uTm9kZSIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ21lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJuYW1lIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7eUJBaEIrQjsrREFFVjt5QkFFQTt3QkFDRTtxQkFDRzt1QkFDbUI7cUJBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFNRSw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUMsdUJBQ3RDQyw2QkFBNkJELElBQUFBLGdCQUFTLEVBQUMsd0JBQ3ZDRSx3Q0FBd0NGLElBQUFBLGdCQUFTLEVBQUM7SUFFeEQsV0FBZUcsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFZCxTQUFTLEVBQUVlLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFQyxtQkFBbUI7Z0NBRHhMakI7UUFFeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ2QsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNlLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxtQkFBbUIsR0FBR0E7Ozs7WUFHN0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pCLElBQUk7WUFDbEI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDakIsS0FBSztZQUNuQjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNqQixNQUFNO1lBQ3BCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pCLE1BQU07WUFDcEI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDakIsT0FBTztZQUNyQjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNqQixJQUFJO1lBQ2xCOzs7WUFFQWtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pCLEtBQUs7WUFDbkI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDakIsTUFBTTtZQUNwQjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNDLE1BQU07WUFDcEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNsQixRQUFRO1lBQ3RCOzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2pDLFNBQVM7WUFDdkI7OztZQUVBa0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsVUFBVTtZQUN4Qjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixVQUFVO1lBQ3hCOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLFdBQVc7WUFDekI7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsYUFBYTtZQUMzQjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixpQkFBaUI7WUFDL0I7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsaUJBQWlCO1lBQy9COzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLG1CQUFtQjtZQUNqQzs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ3JDLElBQUksS0FBSyxNQUFNO29CQUM3QnFDLE9BQU9DLGdCQUFTO2dCQUNsQixPQUFPLElBQUksSUFBSSxDQUFDckMsS0FBSyxLQUFLLE1BQU07b0JBQzlCb0MsT0FBT0UsaUJBQVU7Z0JBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUNyQyxNQUFNLEtBQUssTUFBTTtvQkFDL0JtQyxPQUFPRyxrQkFBVztnQkFDcEIsT0FBTyxJQUFJLElBQUksQ0FBQ3JDLE1BQU0sS0FBSyxNQUFNO29CQUMvQmtDLE9BQU9JLGtCQUFXO2dCQUNwQixPQUFPLElBQUksSUFBSSxDQUFDckMsT0FBTyxLQUFLLE1BQU07b0JBQ2hDaUMsT0FBT0ssbUJBQVk7Z0JBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUNyQyxJQUFJLEtBQUssTUFBTTtvQkFDN0JnQyxPQUFPLElBQUksQ0FBQ2hDLElBQUksQ0FBQytCLE9BQU87Z0JBQzFCLE9BQU8sSUFBSSxJQUFJLENBQUM5QixLQUFLLEtBQUssTUFBTTtvQkFDOUIrQixPQUFPLElBQUksQ0FBQy9CLEtBQUssQ0FBQzhCLE9BQU87Z0JBQzNCLE9BQU8sSUFBSSxJQUFJLENBQUM3QixNQUFNLEtBQUssTUFBTTtvQkFDL0I4QixPQUFPLElBQUksQ0FBQzlCLE1BQU0sQ0FBQzZCLE9BQU87Z0JBQzVCLE9BQU8sSUFBSSxJQUFJLENBQUM1QixPQUFPLEtBQUssTUFBTTtvQkFDaEM2QixPQUFPLElBQUksQ0FBQzdCLE9BQU8sQ0FBQzRCLE9BQU87Z0JBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUMzQixRQUFRLEtBQUssTUFBTTtvQkFDakM0QixPQUFPLElBQUksQ0FBQzVCLFFBQVEsQ0FBQzJCLE9BQU87Z0JBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUN6QyxTQUFTLEtBQUssTUFBTTtvQkFDbEMwQyxPQUFPLElBQUksQ0FBQzFDLFNBQVMsQ0FBQ3lDLE9BQU87Z0JBQy9CLE9BQU8sSUFBSSxJQUFJLENBQUMxQixVQUFVLEtBQUssTUFBTTtvQkFDbkMyQixPQUFPLElBQUksQ0FBQzNCLFVBQVUsQ0FBQzBCLE9BQU87Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUN6QixVQUFVLEtBQUssTUFBTTtvQkFDbkMwQixPQUFPLElBQUksQ0FBQzFCLFVBQVUsQ0FBQ3lCLE9BQU87Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUN4QixXQUFXLEtBQUssTUFBTTtvQkFDcEN5QixPQUFPLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQ3dCLE9BQU87Z0JBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUN2QixhQUFhLEtBQUssTUFBTTtvQkFDdEN3QixPQUFPLElBQUksQ0FBQ3hCLGFBQWEsQ0FBQ3VCLE9BQU87Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUN0QixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQ3VCLE9BQU8sSUFBSSxDQUFDdkIsaUJBQWlCLENBQUNzQixPQUFPO2dCQUN2QyxPQUFPLElBQUksSUFBSSxDQUFDckIsaUJBQWlCLEtBQUssTUFBTTtvQkFDMUNzQixPQUFPLElBQUksQ0FBQ3RCLGlCQUFpQixDQUFDcUIsT0FBTztnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ3BCLG1CQUFtQixLQUFLLE1BQU07b0JBQzVDcUIsT0FBTyxJQUFJLENBQUNyQixtQkFBbUIsQ0FBQ29CLE9BQU87Z0JBQ3pDO2dCQUVBLE9BQU9DO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJekM7Z0JBRUosSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ0gsSUFBSSxLQUFLLE1BQU07b0JBQzdCRyxTQUFTMEMsYUFBYSxJQUFJLENBQUM3QyxJQUFJLEVBQUU0QztnQkFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQzNDLEtBQUssS0FBSyxNQUFNO29CQUM5QkUsU0FBUzJDLGNBQWMsSUFBSSxDQUFDN0MsS0FBSyxFQUFFMkM7Z0JBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUMxQyxNQUFNLEtBQUssTUFBTTtvQkFDL0JDLFNBQVM0QyxlQUFlLElBQUksQ0FBQzdDLE1BQU07Z0JBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUNDLE1BQU0sS0FBSyxNQUFNO29CQUMvQkEsU0FBUzZDLGVBQWUsSUFBSSxDQUFDN0MsTUFBTTtnQkFDckMsT0FBTyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxLQUFLLE1BQU07b0JBQ2hDRCxTQUFTOEMsZ0JBQWdCLElBQUksQ0FBQzdDLE9BQU87Z0JBQ3ZDLE9BQU8sSUFBSSxJQUFJLENBQUNDLElBQUksS0FBSyxNQUFNO29CQUM3QkYsU0FBUyxJQUFJLENBQUNFLElBQUksQ0FBQ2UsU0FBUztnQkFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQ2QsS0FBSyxLQUFLLE1BQU07b0JBQzlCSCxTQUFTLElBQUksQ0FBQ0csS0FBSyxDQUFDYyxTQUFTO2dCQUMvQixPQUFPLElBQUksSUFBSSxDQUFDYixNQUFNLEtBQUssTUFBTTtvQkFDL0JKLFNBQVMsSUFBSSxDQUFDSSxNQUFNLENBQUNhLFNBQVM7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNaLE9BQU8sS0FBSyxNQUFNO29CQUNoQ0wsU0FBUyxJQUFJLENBQUNLLE9BQU8sQ0FBQ1ksU0FBUztnQkFDakMsT0FBTyxJQUFJLElBQUksQ0FBQ1gsUUFBUSxLQUFLLE1BQU07b0JBQ2pDTixTQUFTLElBQUksQ0FBQ00sUUFBUSxDQUFDVyxTQUFTO2dCQUNsQyxPQUFPLElBQUksSUFBSSxDQUFDekIsU0FBUyxLQUFLLE1BQU07b0JBQ2xDUSxTQUFTLElBQUksQ0FBQ1IsU0FBUyxDQUFDeUIsU0FBUztnQkFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQ1YsVUFBVSxLQUFLLE1BQU07b0JBQ25DUCxTQUFTLElBQUksQ0FBQ08sVUFBVSxDQUFDVSxTQUFTO2dCQUNwQyxPQUFPLElBQUksSUFBSSxDQUFDVCxVQUFVLEtBQUssTUFBTTtvQkFDbkNSLFNBQVMsSUFBSSxDQUFDUSxVQUFVLENBQUNTLFNBQVM7Z0JBQ3BDLE9BQU8sSUFBSSxJQUFJLENBQUNSLFdBQVcsS0FBSyxNQUFNO29CQUNwQ1QsU0FBUyxJQUFJLENBQUNTLFdBQVcsQ0FBQ1EsU0FBUztnQkFDckMsT0FBTyxJQUFJLElBQUksQ0FBQ1AsYUFBYSxLQUFLLE1BQU07b0JBQ3RDVixTQUFTLElBQUksQ0FBQ1UsYUFBYSxDQUFDTyxTQUFTO2dCQUN2QyxPQUFPLElBQUksSUFBSSxDQUFDTixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQ1gsU0FBUyxJQUFJLENBQUNXLGlCQUFpQixDQUFDTSxTQUFTO2dCQUMzQyxPQUFPLElBQUksSUFBSSxDQUFDTCxpQkFBaUIsS0FBSyxNQUFNO29CQUMxQ1osU0FBUyxJQUFJLENBQUNZLGlCQUFpQixDQUFDSyxTQUFTO2dCQUMzQyxPQUFPLElBQUksSUFBSSxDQUFDSixtQkFBbUIsS0FBSyxNQUFNO29CQUM1Q2IsU0FBUyxJQUFJLENBQUNhLG1CQUFtQixDQUFDSSxTQUFTO2dCQUM3QztnQkFFQSxPQUFPakI7WUFDVDs7O1lBRUErQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU04sT0FBTztnQkFDZCxJQUFJTztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksQUFBQyxJQUFJLENBQUNuRCxJQUFJLEtBQUssUUFDZCxJQUFJLENBQUNDLEtBQUssS0FBSyxRQUNmLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFFBQ2hCLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFFBQ2hCLElBQUksQ0FBQ0MsT0FBTyxLQUFLLE1BQU87b0JBQ2xDK0MsYUFBYSxJQUFJO2dCQUNuQixPQUFPLElBQUksSUFBSSxDQUFDOUMsSUFBSSxLQUFLLE1BQU07b0JBQzdCOEMsYUFBYSxJQUFJLENBQUM5QyxJQUFJLENBQUM2QyxRQUFRLENBQUNOO2dCQUNsQyxPQUFPLElBQUksSUFBSSxDQUFDdEMsS0FBSyxLQUFLLE1BQU07b0JBQzlCNkMsYUFBYSxJQUFJLENBQUM3QyxLQUFLLENBQUM0QyxRQUFRLENBQUNOO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDckMsTUFBTSxLQUFLLE1BQU07b0JBQy9CNEMsYUFBYSxJQUFJLENBQUM1QyxNQUFNLENBQUMyQyxRQUFRLENBQUNOO2dCQUNwQyxPQUFPLElBQUksSUFBSSxDQUFDcEMsT0FBTyxLQUFLLE1BQU07b0JBQ2hDMkMsYUFBYSxJQUFJLENBQUMzQyxPQUFPLENBQUMwQyxRQUFRLENBQUNOO2dCQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDbkMsUUFBUSxLQUFLLE1BQU07b0JBQ2pDMEMsYUFBYSxJQUFJLENBQUMxQyxRQUFRLENBQUN5QyxRQUFRLENBQUNOO2dCQUN0QyxPQUFPLElBQUksSUFBSSxDQUFDakQsU0FBUyxLQUFLLE1BQU07b0JBQ2xDd0QsYUFBYSxJQUFJLENBQUN4RCxTQUFTLENBQUN1RCxRQUFRLENBQUNOO2dCQUN2QyxPQUFPLElBQUksSUFBSSxDQUFDbEMsVUFBVSxLQUFLLE1BQU07b0JBQ25DeUMsYUFBYSxJQUFJLENBQUN6QyxVQUFVLENBQUN3QyxRQUFRLENBQUNOO2dCQUN4QyxPQUFPLElBQUksSUFBSSxDQUFDakMsVUFBVSxLQUFLLE1BQU07b0JBQ25Dd0MsYUFBYSxJQUFJLENBQUN4QyxVQUFVLENBQUN1QyxRQUFRLENBQUNOO2dCQUN4QyxPQUFPLElBQUksSUFBSSxDQUFDaEMsV0FBVyxLQUFLLE1BQU07b0JBQ3BDdUMsYUFBYSxJQUFJLENBQUN2QyxXQUFXLENBQUNzQyxRQUFRLENBQUNOO2dCQUN6QyxPQUFPLElBQUksSUFBSSxDQUFDL0IsYUFBYSxLQUFLLE1BQU07b0JBQ3RDc0MsYUFBYSxJQUFJLENBQUN0QyxhQUFhLENBQUNxQyxRQUFRLENBQUNOO2dCQUMzQyxPQUFPLElBQUksSUFBSSxDQUFDOUIsaUJBQWlCLEtBQUssTUFBTTtvQkFDMUNxQyxhQUFhLElBQUksQ0FBQ3JDLGlCQUFpQixDQUFDb0MsUUFBUSxDQUFDTjtnQkFDL0MsT0FBTyxJQUFJLElBQUksQ0FBQzdCLGlCQUFpQixLQUFLLE1BQU07b0JBQzFDb0MsYUFBYSxJQUFJLENBQUNwQyxpQkFBaUIsQ0FBQ21DLFFBQVEsQ0FBQ047Z0JBQy9DLE9BQU8sSUFBSSxJQUFJLENBQUM1QixtQkFBbUIsS0FBSyxNQUFNO29CQUM1Q21DLGFBQWEsSUFBSSxDQUFDbkMsbUJBQW1CLENBQUNrQyxRQUFRLENBQUNOO2dCQUNqRDtnQkFFQSxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVELFVBQVU7Z0JBQ2xCLElBQUlFO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNyRCxJQUFJLEtBQUssTUFBTTtvQkFDN0IsSUFBTUEsT0FBT21ELFdBQVdsQyxPQUFPO29CQUUvQixJQUFJakIsU0FBUyxNQUFNO3dCQUNqQnFELFVBQVU7b0JBQ1osT0FBTzt3QkFDTCxJQUFNQyxRQUFRLElBQUksQ0FBQ3RELElBQUksRUFDakJ1RCxRQUFRdkQsTUFDUndELGNBQWNDLFVBQVVILE9BQU9DO3dCQUVyQ0YsVUFBVUcsYUFBYyxHQUFHO29CQUM3QjtnQkFDRixPQUFPLElBQUksSUFBSSxDQUFDdkQsS0FBSyxLQUFLLE1BQU07b0JBQzlCLElBQU1BLFFBQVFrRCxXQUFXbEMsT0FBTztvQkFFaEMsSUFBSWhCLFVBQVUsTUFBTTt3QkFDbEJvRCxVQUFVO29CQUNaLE9BQU87d0JBQ0wsSUFBTUssU0FBUyxJQUFJLENBQUN6RCxLQUFLLEVBQ25CMEQsU0FBUzFELE9BQ1QyRCxhQUFhQyxXQUFXSCxRQUFRQzt3QkFFdENOLFVBQVVPLFlBQVksR0FBRztvQkFDM0I7Z0JBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQzFELE1BQU0sS0FBSyxNQUFNO29CQUMvQixJQUFNQSxTQUFTaUQsV0FBV2hDLFNBQVM7b0JBRW5Da0MsVUFBVyxJQUFJLENBQUNuRCxNQUFNLEtBQUtBO2dCQUM3QixPQUFPLElBQUksSUFBSSxDQUFDQyxNQUFNLEtBQUssTUFBTTtvQkFDL0IsSUFBTUEsU0FBU2dELFdBQVcvQixTQUFTO29CQUVuQ2lDLFVBQVcsSUFBSSxDQUFDbEQsTUFBTSxLQUFLQTtnQkFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQ0MsT0FBTyxLQUFLLE1BQU07b0JBQ2hDLElBQU1BLFVBQVUrQyxXQUFXOUIsVUFBVTtvQkFFckNnQyxVQUFXLElBQUksQ0FBQ2pELE9BQU8sS0FBS0E7Z0JBQzlCLE9BQU87b0JBQ0wsUUFBUTtnQkFDVjtnQkFFQSxPQUFPaUQ7WUFDVDs7OztZQUlPUyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTOUQsSUFBSSxFQUFFNEMsT0FBTztnQkFDM0IsSUFBSTVDLFNBQVMsTUFBTTtvQkFDakJBLE9BQU8rRCxpQkFBUTtnQkFDakI7Z0JBRUEsSUFBTTlELFFBQVEsTUFDUkMsU0FBUyxNQUNUQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVkMsT0FBTyxNQUNQQyxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsVUFBVSxNQUNWQyxXQUFXLE1BQ1hkLGNBQVksTUFDWmUsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWMsTUFDZEMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQixNQUNwQkMsc0JBQXNCLE1BQ3RCbUMsYUFBYSxJQUFJcEQsV0FBV0MsTUFBTUMsT0FBT0MsUUFBUUMsUUFBUUMsU0FBU0MsTUFBTUMsT0FBT0MsUUFBUUMsU0FBU0MsVUFBVWQsYUFBV2UsWUFBWUMsWUFBWUMsYUFBYUMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO2dCQUVyTixPQUFPbUM7WUFDVDs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLFVBQVUvRCxLQUFLLEVBQUUyQyxPQUFPO2dCQUM3QixJQUFNNUMsT0FBTyxNQUNQRSxTQUFTLE1BQ1RDLFNBQVMsTUFDVEMsVUFBVSxNQUNWSSxVQUFVLE1BQ1ZILE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RFLFdBQVcsTUFDWGQsY0FBWSxNQUNaZSxhQUFhLE1BQ2JDLGFBQWEsTUFDYkMsY0FBYyxNQUNkQyxnQkFBZ0IsTUFDaEJDLG9CQUFvQixNQUNwQkMsb0JBQW9CLE1BQ3BCQyxzQkFBc0IsTUFDdEJtQyxhQUFhLElBQUlwRCxXQUFXQyxNQUFNQyxPQUFPQyxRQUFRQyxRQUFRQyxTQUFTQyxNQUFNQyxPQUFPQyxRQUFRQyxTQUFTQyxVQUFVZCxhQUFXZSxZQUFZQyxZQUFZQyxhQUFhQyxlQUFlQyxtQkFBbUJDLG1CQUFtQkM7Z0JBRXJOLE9BQU9tQztZQUNUOzs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EsV0FBVzlELE1BQU0sRUFBRXlDLE9BQU87Z0JBQy9CLElBQU01QyxPQUFPLE1BQ1BDLFFBQVEsTUFDUkMsU0FBUyxNQUNURSxVQUFVLE1BQ1ZDLE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFVBQVUsTUFDVkMsV0FBVyxNQUNYZCxjQUFZLE1BQ1plLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjLE1BQ2RDLGdCQUFnQixNQUNoQkMsb0JBQW9CLE1BQ3BCQyxvQkFBb0IsTUFDcEJDLHNCQUFzQixNQUN0Qm1DLGFBQWEsSUFBSXBELFdBQVdDLE1BQU1DLE9BQU9DLFFBQVFDLFFBQVFDLFNBQVNDLE1BQU1DLE9BQU9DLFFBQVFDLFNBQVNDLFVBQVVkLGFBQVdlLFlBQVlDLFlBQVlDLGFBQWFDLGVBQWVDLG1CQUFtQkMsbUJBQW1CQztnQkFFck4sT0FBT21DO1lBQ1Q7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZOUQsT0FBTyxFQUFFd0MsT0FBTztnQkFDakMsSUFBTTVDLE9BQU8sTUFDUEMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFNBQVMsTUFDVEUsT0FBTyxNQUNQQyxRQUFRLE1BQ1JDLFNBQVMsTUFDVEMsVUFBVSxNQUNWQyxXQUFXLE1BQ1hkLGNBQVksTUFDWmUsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWMsTUFDZEMsZ0JBQWdCLE1BQ2hCQyxvQkFBb0IsTUFDcEJDLG9CQUFvQixNQUNwQkMsc0JBQXNCLE1BQ3RCbUMsYUFBYSxJQUFJcEQsV0FBV0MsTUFBTUMsT0FBT0MsUUFBUUMsUUFBUUMsU0FBU0MsTUFBTUMsT0FBT0MsUUFBUUMsU0FBU0MsVUFBVWQsYUFBV2UsWUFBWUMsWUFBWUMsYUFBYUMsZUFBZUMsbUJBQW1CQyxtQkFBbUJDO2dCQUVyTixPQUFPbUM7WUFDVDs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVLEVBQUV4QixPQUFPO2dCQUN2QyxJQUFNeUIsdUJBQXVCM0UsMEJBQTBCMEUsYUFDakRFLGlCQUFpQkQsc0JBQ2pCbEIsYUFBYW9CLElBQUFBLHFDQUE0QixFQUFDRCxnQkFBZ0IxQjtnQkFFaEUsT0FBT087WUFDVDs7O1lBRU9xQixLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTdCLE9BQU87Z0JBQ3pDLElBQU04Qix3QkFBd0I5RSwyQkFBMkI2RSxjQUNuREgsaUJBQWlCSSx1QkFDakJ2QixhQUFhb0IsSUFBQUEscUNBQTRCLEVBQUNELGdCQUFnQjFCO2dCQUVoRSxPQUFPTztZQUNUOzs7WUFFT3dCLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkwsY0FBYyxFQUFFMUIsT0FBTztnQkFDL0MsSUFBTU8sYUFBYW9CLElBQUFBLHFDQUE0QixFQUFDRCxnQkFBZ0IxQjtnQkFFaEUsT0FBT087WUFDVDs7O1lBRU95QixLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHFCQUFxQixFQUFFakMsT0FBTztnQkFDOUQsSUFBTWtDLG1DQUFtQ2pGLHNDQUFzQ2dGLHdCQUN6RVAsaUJBQWlCUSxrQ0FDakIzQixhQUFhb0IsSUFBQUEscUNBQTRCLEVBQUNELGdCQUFnQjFCO2dCQUVoRSxPQUFPTztZQUNUOzs7O0tBOUhBLDhCQUFPNEIsUUFBTztBQWlJaEIsU0FBU3RCLFVBQVVILEtBQUssRUFBRUMsS0FBSztJQUM3QixJQUFJQztJQUVKLElBQUksQUFBQ0YsVUFBVVMsaUJBQVEsSUFBTVIsVUFBVVEsaUJBQVEsRUFBRztRQUNoRFAsY0FBZUYsVUFBVUM7SUFDM0IsT0FBTztRQUNMLElBQU15QixvQkFBb0IxQixNQUFNRixTQUFTLENBQUNHO1FBRTFDQyxjQUFjd0IsbUJBQW9CLEdBQUc7SUFDdkM7SUFFQSxPQUFPeEI7QUFDVDtBQUVBLFNBQVNLLFdBQVdILE1BQU0sRUFBRUMsTUFBTTtJQUNoQyxJQUFJQztJQUVKQSxhQUFhcEUsTUFBTWtFLFFBQVFDLFFBQVEsU0FBQ0wsT0FBT0M7UUFDekMsSUFBTUMsY0FBY0MsVUFBVUgsT0FBT0M7UUFFckMsSUFBSUMsYUFBYTtZQUNmLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNmLGFBQWE3QyxJQUFJLEVBQUU0QyxPQUFPO0lBQ2pDLElBQUl6QztJQUVKLElBQU04RSxhQUFjLEFBQUNqRixTQUFTK0QsaUJBQVEsR0FDaEJtQixlQUFJLEdBQ0Z0QyxRQUFRQyxZQUFZLENBQUM3QztJQUU3Q0csU0FBUyxBQUFDLElBQWMsT0FBWDhFLFlBQVc7SUFFeEIsT0FBTzlFO0FBQ1Q7QUFFQSxTQUFTMkMsY0FBYzdDLEtBQUssRUFBRTJDLE9BQU87SUFDbkMsSUFBSXpDO0lBRUosSUFBTWdGLGNBQWN2QyxRQUFRRSxhQUFhLENBQUM3QztJQUUxQ0UsU0FBUyxBQUFDLElBQWUsT0FBWmdGLGFBQVk7SUFFekIsT0FBT2hGO0FBQ1Q7QUFFQSxTQUFTNEMsZUFBZTdDLE1BQU07SUFDNUIsSUFBSUM7SUFFSkEsU0FBUyxBQUFDLEdBQVMsT0FBUEQ7SUFFWixPQUFPQztBQUNUO0FBRUEsU0FBUzZDLGVBQWU3QyxNQUFNO0lBQzVCQSxTQUFTLEFBQUMsSUFBVSxPQUFQQSxRQUFPLE1BQUksR0FBRztJQUUzQixPQUFPQTtBQUNUO0FBRUEsU0FBUzhDLGdCQUFnQjdDLE9BQU87SUFDOUIsSUFBSUQ7SUFFSkEsU0FBUyxBQUFDLElBQVcsT0FBUkMsU0FBUTtJQUVyQixPQUFPRDtBQUNUIn0=
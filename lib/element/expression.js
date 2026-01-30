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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJlZHVjZUV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL2V4cHJlc3Npb25cIiksXG4gICAgICB0ZXJuYXJ5RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJuYXJ5L2V4cHJlc3Npb25cIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlQXNzaWdubWVudC9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbikge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYm9vbGVhbiA9IGJvb2xlYW47XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLmV2ZXJ5ID0gZXZlcnk7XG4gICAgdGhpcy5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgdGhpcy50ZXJuYXJ5ID0gdGVybmFyeTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICAgIHRoaXMubmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbjtcbiAgICB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb247XG4gICAgdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0TmVnYXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRMb2dpY2xFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubG9naWNhbEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bWJlckFzU3RyaW5nKHRoaXMubnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmdBc1N0cmluZyh0aGlzLnN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYm9vbGVhbkFzU3RyaW5nKHRoaXMuYm9vbGVhbilcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5zb21lLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ldmVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJlZHVjZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy50ZXJuYXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVRdWVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmNvbXBhcmlzb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJldHVybkJsb2NrLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubm9kZSAhPT0gbnVsbCkgIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ub2RlcyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm51bWJlciAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLnN0cmluZyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLmJvb2xlYW4gIT09IG51bGwpKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJlZHVjZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhleHByZXNzaW9uKSB7XG4gICAgbGV0IGVxdWFsVG87XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZXMgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgICAgICBub2Rlc0IgPSBub2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZXNNYXRjaDsgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gZXhwcmVzc2lvbi5nZXROdW1iZXIoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLm51bWJlciA9PT0gbnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gZXhwcmVzc2lvbi5nZXRCb29sZWFuKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5ib29sZWFuID09PSBib29sZWFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgbm9kZSA9IG51bGxOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIGJvb2xlYW4gPSBudWxsLFxuICAgICAgICAgIHNvbWUgPSBudWxsLFxuICAgICAgICAgIGV2ZXJ5ID0gbnVsbCxcbiAgICAgICAgICByZWR1Y2UgPSBudWxsLFxuICAgICAgICAgIHRlcm5hcnkgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbnVsbCxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBudWxsLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBuZWdhdGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgbG9naWNhbEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZEV4cHJlc3Npb24gPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVzID0gbnVsbCxcbiAgICAgICAgICBudW1iZXIgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRFeHByZXNzaW9uID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkRXhwcmVzc2lvbiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKG5vZGUsIG5vZGVzLCBudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgdmFyaWFibGUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgY29tcGFyaXNvbiwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwsIG5lZ2F0ZWRFeHByZXNzaW9uLCBsb2dpY2FsRXhwcmVzc2lvbiwgYnJhY2tldGVkRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlUXVlcnkodmFyaWFibGVBc3NpZ21lbnROb2RlKSxcbiAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKSB7XG4gIGxldCBub2RlTWF0Y2hlcztcblxuICBpZiAoKG5vZGVBID09PSBudWxsTm9kZSkgfHwgKG5vZGVCID09PSBudWxsTm9kZSkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBRXF1YWxUb05vZGVBID0gbm9kZUEuaXNFcXVhbFRvKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFFcXVhbFRvTm9kZUE7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBsZXQgbm9kZXNNYXRjaDtcblxuICBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVTdHJpbmcgID0gKG5vZGUgPT09IG51bGxOb2RlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBOVUxMIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGVzKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZXNTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbnVtYmVyQXNTdHJpbmcobnVtYmVyKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCR7bnVtYmVyfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nQXNTdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGBcIiR7c3RyaW5nfVwiYDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkFzU3RyaW5nKGJvb2xlYW4pIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJyR7Ym9vbGVhbn0nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJyZWR1Y2VFeHByZXNzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybmFyeUV4cHJlc3Npb25Ob2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiRXhwcmVzc2lvbiIsIm5vZGUiLCJub2RlcyIsIm51bWJlciIsInN0cmluZyIsImJvb2xlYW4iLCJzb21lIiwiZXZlcnkiLCJyZWR1Y2UiLCJ0ZXJuYXJ5IiwidmFyaWFibGUiLCJub2Rlc1F1ZXJ5IiwiY29tcGFyaXNvbiIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0U3RyaW5nIiwiZ2V0Qm9vbGVhbiIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXRWYXJpYWJsZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb24iLCJnZXRMb2dpY2xFeHByZXNzaW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbiIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTk9ERVNfVFlQRSIsIk5VTUJFUl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJhc1N0cmluZyIsImNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibnVtYmVyQXNTdHJpbmciLCJzdHJpbmdBc1N0cmluZyIsImJvb2xlYW5Bc1N0cmluZyIsImV2YWx1YXRlIiwiZXhwcmVzc2lvbiIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsImZyb21Ob2RlIiwibnVsbE5vZGUiLCJmcm9tTm9kZXMiLCJmcm9tU3RyaW5nIiwiZnJvbUJvb2xlYW4iLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Gcm9tRXhwcmVzc2lvbk5vZGUiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdtZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibmFtZSIsIm5vZGVBRXF1YWxUb05vZGVBIiwibm9kZVN0cmluZyIsIk5VTEwiLCJub2Rlc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O3lCQWhCK0I7K0RBRVY7eUJBRUE7d0JBQ0U7cUJBQ0c7dUJBQ21CO3FCQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsNEJBQTRCQyxJQUFBQSxnQkFB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
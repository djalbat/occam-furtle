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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgTlVNQkVSX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGVRdWVyeSA9IG5vZGVRdWVyeTtcbiAgICB0aGlzLm5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5O1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gICAgdGhpcy5uZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uO1xuICAgIHRoaXMubG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbjtcbiAgICB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldEV2ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5O1xuICB9XG5cbiAgZ2V0UmVkdWNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROb2RlUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZVF1ZXJ5O1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1F1ZXJ5O1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXROZWdhdGVkRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldExvZ2ljbEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFU19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuZXZlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJlZHVjZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnRlcm5hcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJldHVybkJsb2NrLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoY29udGV4dCkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG5vZGVzQXNTdHJpbmcodGhpcy5ub2RlcywgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbnVtYmVyQXNTdHJpbmcodGhpcy5udW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZ0FzU3RyaW5nKHRoaXMuc3RyaW5nKVxuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBib29sZWFuQXNTdHJpbmcodGhpcy5ib29sZWFuKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnNvbWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmV2ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmVkdWNlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnRlcm5hcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubm9kZVF1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMuY29tcGFyaXNvbi5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucmV0dXJuQmxvY2suZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5ub2RlICE9PSBudWxsKSAgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm5vZGVzICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMubnVtYmVyICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB8fFxuICAgICAgICAgICAgICAgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5jb21wYXJpc29uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKGV4cHJlc3Npb24pIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBleHByZXNzaW9uLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBlcXVhbFRvID0gbm9kZU1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVzQiA9IG5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2Rlc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBleHByZXNzaW9uLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IGV4cHJlc3Npb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmcgPT09IHN0cmluZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV4cHJlc3Npb25cIjtcbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKSB7XG4gIGxldCBub2RlTWF0Y2hlcztcblxuICBpZiAoKG5vZGVBID09PSBudWxsTm9kZSkgfHwgKG5vZGVCID09PSBudWxsTm9kZSkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBRXF1YWxUb05vZGVBID0gbm9kZUEuaXNFcXVhbFRvKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFFcXVhbFRvTm9kZUE7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBsZXQgbm9kZXNNYXRjaDtcblxuICBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVTdHJpbmcgID0gKG5vZGUgPT09IG51bGxOb2RlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBOVUxMIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGVzKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZXNTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbnVtYmVyQXNTdHJpbmcobnVtYmVyKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCR7bnVtYmVyfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nQXNTdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGBcIiR7c3RyaW5nfVwiYDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkFzU3RyaW5nKGJvb2xlYW4pIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJyR7Ym9vbGVhbn0nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJFeHByZXNzaW9uIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbGVhbiIsInNvbWUiLCJldmVyeSIsInJlZHVjZSIsInRlcm5hcnkiLCJ2YXJpYWJsZSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb21wYXJpc29uIiwicmV0dXJuQmxvY2siLCJwcm9jZWR1cmVDYWxsIiwibmVnYXRlZEV4cHJlc3Npb24iLCJsb2dpY2FsRXhwcmVzc2lvbiIsImJyYWNrZXRlZEV4cHJlc3Npb24iLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRTdHJpbmciLCJnZXRCb29sZWFuIiwiZ2V0U29tZSIsImdldEV2ZXJ5IiwiZ2V0UmVkdWNlIiwiZ2V0VGVybmFyeSIsInRlcm5heSIsImdldFZhcmlhYmxlIiwiZ2V0Tm9kZVF1ZXJ5IiwiZ2V0Tm9kZXNRdWVyeSIsImdldENvbXBhcmlzb24iLCJnZXRSZXR1cm5CbG9jayIsImdldFByb2NlZHVyZUNhbGwiLCJnZXROZWdhdGVkRXhwcmVzc2lvbiIsImdldExvZ2ljbEV4cHJlc3Npb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uIiwiZ2V0VHlwZSIsInR5cGUiLCJOT0RFX1RZUEUiLCJOT0RFU19UWVBFIiwiTlVNQkVSX1RZUEUiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsImFzU3RyaW5nIiwiY29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJudW1iZXJBc1N0cmluZyIsInN0cmluZ0FzU3RyaW5nIiwiYm9vbGVhbkFzU3RyaW5nIiwiZXZhbHVhdGUiLCJleHByZXNzaW9uIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwibmFtZSIsIm51bGxOb2RlIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7K0RBRVY7eUJBRUE7d0JBQ0U7cUJBQ3VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSwrQkFBQzthQUFNQyxXQUNkQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLG1CQUFtQjtnQ0FEeExsQjtRQUV4QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLG1CQUFtQixHQUFHQTs7OztZQUc3QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbEIsSUFBSTtZQUNsQjs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNsQixLQUFLO1lBQ25COzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2xCLE1BQU07WUFDcEI7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbEIsTUFBTTtZQUNwQjs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNsQixPQUFPO1lBQ3JCOzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2xCLElBQUk7WUFDbEI7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbEIsS0FBSztZQUNuQjs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNsQixNQUFNO1lBQ3BCOzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsTUFBTTtZQUNwQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLFFBQVE7WUFDdEI7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsU0FBUztZQUN2Qjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixVQUFVO1lBQ3hCOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLFVBQVU7WUFDeEI7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsV0FBVztZQUN6Qjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixhQUFhO1lBQzNCOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ25CLGlCQUFpQjtZQUMvQjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNuQixpQkFBaUI7WUFDL0I7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDbkIsbUJBQW1CO1lBQ2pDOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDdEMsSUFBSSxLQUFLLE1BQU07b0JBQzdCc0MsT0FBT0MsZ0JBQVM7Z0JBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUN0QyxLQUFLLEtBQUssTUFBTTtvQkFDOUJxQyxPQUFPRSxpQkFBVTtnQkFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQ3RDLE1BQU0sS0FBSyxNQUFNO29CQUMvQm9DLE9BQU9HLGtCQUFXO2dCQUNwQixPQUFPLElBQUksSUFBSSxDQUFDdEMsTUFBTSxLQUFLLE1BQU07b0JBQy9CbUMsT0FBT0ksa0JBQVc7Z0JBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUN0QyxPQUFPLEtBQUssTUFBTTtvQkFDaENrQyxPQUFPSyxtQkFBWTtnQkFDckIsT0FBTyxJQUFJLElBQUksQ0FBQ3RDLElBQUksS0FBSyxNQUFNO29CQUM3QmlDLE9BQU8sSUFBSSxDQUFDakMsSUFBSSxDQUFDZ0MsT0FBTztnQkFDMUIsT0FBTyxJQUFJLElBQUksQ0FBQy9CLEtBQUssS0FBSyxNQUFNO29CQUM5QmdDLE9BQU8sSUFBSSxDQUFDaEMsS0FBSyxDQUFDK0IsT0FBTztnQkFDM0IsT0FBTyxJQUFJLElBQUksQ0FBQzlCLE1BQU0sS0FBSyxNQUFNO29CQUMvQitCLE9BQU8sSUFBSSxDQUFDL0IsTUFBTSxDQUFDOEIsT0FBTztnQkFDNUIsT0FBTyxJQUFJLElBQUksQ0FBQzdCLE9BQU8sS0FBSyxNQUFNO29CQUNoQzhCLE9BQU8sSUFBSSxDQUFDOUIsT0FBTyxDQUFDNkIsT0FBTztnQkFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQzVCLFFBQVEsS0FBSyxNQUFNO29CQUNqQzZCLE9BQU8sSUFBSSxDQUFDN0IsUUFBUSxDQUFDNEIsT0FBTztnQkFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQzNCLFNBQVMsS0FBSyxNQUFNO29CQUNsQzRCLE9BQU8sSUFBSSxDQUFDNUIsU0FBUyxDQUFDMkIsT0FBTztnQkFDL0IsT0FBTyxJQUFJLElBQUksQ0FBQzFCLFVBQVUsS0FBSyxNQUFNO29CQUNuQzJCLE9BQU8sSUFBSSxDQUFDM0IsVUFBVSxDQUFDMEIsT0FBTztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ3pCLFVBQVUsS0FBSyxNQUFNO29CQUNuQzBCLE9BQU8sSUFBSSxDQUFDMUIsVUFBVSxDQUFDeUIsT0FBTztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ3hCLFdBQVcsS0FBSyxNQUFNO29CQUNwQ3lCLE9BQU8sSUFBSSxDQUFDekIsV0FBVyxDQUFDd0IsT0FBTztnQkFDakMsT0FBTyxJQUFJLElBQUksQ0FBQ3ZCLGFBQWEsS0FBSyxNQUFNO29CQUN0Q3dCLE9BQU8sSUFBSSxDQUFDeEIsYUFBYSxDQUFDdUIsT0FBTztnQkFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQ3RCLGlCQUFpQixLQUFLLE1BQU07b0JBQzFDdUIsT0FBTyxJQUFJLENBQUN2QixpQkFBaUIsQ0FBQ3NCLE9BQU87Z0JBQ3ZDLE9BQU8sSUFBSSxJQUFJLENBQUNyQixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQ3NCLE9BQU8sSUFBSSxDQUFDdEIsaUJBQWlCLENBQUNxQixPQUFPO2dCQUN2QyxPQUFPLElBQUksSUFBSSxDQUFDcEIsbUJBQW1CLEtBQUssTUFBTTtvQkFDNUNxQixPQUFPLElBQUksQ0FBQ3JCLG1CQUFtQixDQUFDb0IsT0FBTztnQkFDekM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUkxQztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUssTUFBTTtvQkFDN0JHLFNBQVMyQyxhQUFhLElBQUksQ0FBQzlDLElBQUksRUFBRTZDO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDNUMsS0FBSyxLQUFLLE1BQU07b0JBQzlCRSxTQUFTNEMsY0FBYyxJQUFJLENBQUM5QyxLQUFLLEVBQUU0QztnQkFDckMsT0FBTyxJQUFJLElBQUksQ0FBQzNDLE1BQU0sS0FBSyxNQUFNO29CQUMvQkMsU0FBUzZDLGVBQWUsSUFBSSxDQUFDOUMsTUFBTTtnQkFDckMsT0FBTyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxLQUFLLE1BQU07b0JBQy9CQSxTQUFTOEMsZUFBZSxJQUFJLENBQUM5QyxNQUFNO2dCQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDQyxPQUFPLEtBQUssTUFBTTtvQkFDaENELFNBQVMrQyxnQkFBZ0IsSUFBSSxDQUFDOUMsT0FBTztnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ0MsSUFBSSxLQUFLLE1BQU07b0JBQzdCRixTQUFTLElBQUksQ0FBQ0UsSUFBSSxDQUFDZ0IsU0FBUztnQkFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQ2YsS0FBSyxLQUFLLE1BQU07b0JBQzlCSCxTQUFTLElBQUksQ0FBQ0csS0FBSyxDQUFDZSxTQUFTO2dCQUMvQixPQUFPLElBQUksSUFBSSxDQUFDZCxNQUFNLEtBQUssTUFBTTtvQkFDL0JKLFNBQVMsSUFBSSxDQUFDSSxNQUFNLENBQUNjLFNBQVM7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNiLE9BQU8sS0FBSyxNQUFNO29CQUNoQ0wsU0FBUyxJQUFJLENBQUNLLE9BQU8sQ0FBQ2EsU0FBUztnQkFDakMsT0FBTyxJQUFJLElBQUksQ0FBQ1osUUFBUSxLQUFLLE1BQU07b0JBQ2pDTixTQUFTLElBQUksQ0FBQ00sUUFBUSxDQUFDWSxTQUFTO2dCQUNsQyxPQUFPLElBQUksSUFBSSxDQUFDWCxTQUFTLEtBQUssTUFBTTtvQkFDbENQLFNBQVMsSUFBSSxDQUFDTyxTQUFTLENBQUNXLFNBQVM7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNWLFVBQVUsS0FBSyxNQUFNO29CQUNuQ1IsU0FBUyxJQUFJLENBQUNRLFVBQVUsQ0FBQ1UsU0FBUztnQkFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQ1QsVUFBVSxLQUFLLE1BQU07b0JBQ25DVCxTQUFTLElBQUksQ0FBQ1MsVUFBVSxDQUFDUyxTQUFTO2dCQUNwQyxPQUFPLElBQUksSUFBSSxDQUFDUixXQUFXLEtBQUssTUFBTTtvQkFDcENWLFNBQVMsSUFBSSxDQUFDVSxXQUFXLENBQUNRLFNBQVM7Z0JBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUNQLGFBQWEsS0FBSyxNQUFNO29CQUN0Q1gsU0FBUyxJQUFJLENBQUNXLGFBQWEsQ0FBQ08sU0FBUztnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ04saUJBQWlCLEtBQUssTUFBTTtvQkFDMUNaLFNBQVMsSUFBSSxDQUFDWSxpQkFBaUIsQ0FBQ00sU0FBUztnQkFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQ0wsaUJBQWlCLEtBQUssTUFBTTtvQkFDMUNiLFNBQVMsSUFBSSxDQUFDYSxpQkFBaUIsQ0FBQ0ssU0FBUztnQkFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQ0osbUJBQW1CLEtBQUssTUFBTTtvQkFDNUNkLFNBQVMsSUFBSSxDQUFDYyxtQkFBbUIsQ0FBQ0ksU0FBUztnQkFDN0M7Z0JBRUEsT0FBT2xCO1lBQ1Q7OztZQUVBZ0QsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNOLE9BQU87Z0JBQ2QsSUFBSU87Z0JBRUosSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLEFBQUMsSUFBSSxDQUFDcEQsSUFBSSxLQUFLLFFBQ2QsSUFBSSxDQUFDQyxLQUFLLEtBQUssUUFDZixJQUFJLENBQUNDLE1BQU0sS0FBSyxRQUNoQixJQUFJLENBQUNDLE1BQU0sS0FBSyxRQUNoQixJQUFJLENBQUNDLE9BQU8sS0FBSyxNQUFPO29CQUNsQ2dELGFBQWEsSUFBSTtnQkFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQy9DLElBQUksS0FBSyxNQUFNO29CQUM3QitDLGFBQWEsSUFBSSxDQUFDL0MsSUFBSSxDQUFDOEMsUUFBUSxDQUFDTjtnQkFDbEMsT0FBTyxJQUFJLElBQUksQ0FBQ3ZDLEtBQUssS0FBSyxNQUFNO29CQUM5QjhDLGFBQWEsSUFBSSxDQUFDOUMsS0FBSyxDQUFDNkMsUUFBUSxDQUFDTjtnQkFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQ3RDLE1BQU0sS0FBSyxNQUFNO29CQUMvQjZDLGFBQWEsSUFBSSxDQUFDN0MsTUFBTSxDQUFDNEMsUUFBUSxDQUFDTjtnQkFDcEMsT0FBTyxJQUFJLElBQUksQ0FBQ3JDLE9BQU8sS0FBSyxNQUFNO29CQUNoQzRDLGFBQWEsSUFBSSxDQUFDNUMsT0FBTyxDQUFDMkMsUUFBUSxDQUFDTjtnQkFDckMsT0FBTyxJQUFJLElBQUksQ0FBQ3BDLFFBQVEsS0FBSyxNQUFNO29CQUNqQzJDLGFBQWEsSUFBSSxDQUFDM0MsUUFBUSxDQUFDMEMsUUFBUSxDQUFDTjtnQkFDdEMsT0FBTyxJQUFJLElBQUksQ0FBQ25DLFNBQVMsS0FBSyxNQUFNO29CQUNsQzBDLGFBQWEsSUFBSSxDQUFDMUMsU0FBUyxDQUFDeUMsUUFBUSxDQUFDTjtnQkFDdkMsT0FBTyxJQUFJLElBQUksQ0FBQ2xDLFVBQVUsS0FBSyxNQUFNO29CQUNuQ3lDLGFBQWEsSUFBSSxDQUFDekMsVUFBVSxDQUFDd0MsUUFBUSxDQUFDTjtnQkFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQ2pDLFVBQVUsS0FBSyxNQUFNO29CQUNuQ3dDLGFBQWEsSUFBSSxDQUFDeEMsVUFBVSxDQUFDdUMsUUFBUSxDQUFDTjtnQkFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQ2hDLFdBQVcsS0FBSyxNQUFNO29CQUNwQ3VDLGFBQWEsSUFBSSxDQUFDdkMsV0FBVyxDQUFDc0MsUUFBUSxDQUFDTjtnQkFDekMsT0FBTyxJQUFJLElBQUksQ0FBQy9CLGFBQWEsS0FBSyxNQUFNO29CQUN0Q3NDLGFBQWEsSUFBSSxDQUFDdEMsYUFBYSxDQUFDcUMsUUFBUSxDQUFDTjtnQkFDM0MsT0FBTyxJQUFJLElBQUksQ0FBQzlCLGlCQUFpQixLQUFLLE1BQU07b0JBQzFDcUMsYUFBYSxJQUFJLENBQUNyQyxpQkFBaUIsQ0FBQ29DLFFBQVEsQ0FBQ047Z0JBQy9DLE9BQU8sSUFBSSxJQUFJLENBQUM3QixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQ29DLGFBQWEsSUFBSSxDQUFDcEMsaUJBQWlCLENBQUNtQyxRQUFRLENBQUNOO2dCQUMvQyxPQUFPLElBQUksSUFBSSxDQUFDNUIsbUJBQW1CLEtBQUssTUFBTTtvQkFDNUNtQyxhQUFhLElBQUksQ0FBQ25DLG1CQUFtQixDQUFDa0MsUUFBUSxDQUFDTjtnQkFDakQ7Z0JBRUEsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVRCxVQUFVO2dCQUNsQixJQUFJRTtnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDdEQsSUFBSSxLQUFLLE1BQU07b0JBQzdCLElBQU1BLE9BQU9vRCxXQUFXbEMsT0FBTztvQkFFL0IsSUFBSWxCLFNBQVMsTUFBTTt3QkFDakJzRCxVQUFVO29CQUNaLE9BQU87d0JBQ0wsSUFBTUMsUUFBUSxJQUFJLENBQUN2RCxJQUFJLEVBQ2pCd0QsUUFBUXhELE1BQ1J5RCxjQUFjQyxVQUFVSCxPQUFPQzt3QkFFckNGLFVBQVVHLGFBQWMsR0FBRztvQkFDN0I7Z0JBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQ3hELEtBQUssS0FBSyxNQUFNO29CQUM5QixJQUFNQSxRQUFRbUQsV0FBV2xDLE9BQU87b0JBRWhDLElBQUlqQixVQUFVLE1BQU07d0JBQ2xCcUQsVUFBVTtvQkFDWixPQUFPO3dCQUNMLElBQU1LLFNBQVMsSUFBSSxDQUFDMUQsS0FBSyxFQUNuQjJELFNBQVMzRCxPQUNUNEQsYUFBYUMsV0FBV0gsUUFBUUM7d0JBRXRDTixVQUFVTyxZQUFZLEdBQUc7b0JBQzNCO2dCQUNGLE9BQU8sSUFBSSxJQUFJLENBQUMzRCxNQUFNLEtBQUssTUFBTTtvQkFDL0IsSUFBTUEsU0FBU2tELFdBQVdoQyxTQUFTO29CQUVuQ2tDLFVBQVcsSUFBSSxDQUFDcEQsTUFBTSxLQUFLQTtnQkFDN0IsT0FBTyxJQUFJLElBQUksQ0FBQ0MsTUFBTSxLQUFLLE1BQU07b0JBQy9CLElBQU1BLFNBQVNpRCxXQUFXL0IsU0FBUztvQkFFbkNpQyxVQUFXLElBQUksQ0FBQ25ELE1BQU0sS0FBS0E7Z0JBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUNDLE9BQU8sS0FBSyxNQUFNO29CQUNoQyxJQUFNQSxVQUFVZ0QsV0FBVzlCLFVBQVU7b0JBRXJDZ0MsVUFBVyxJQUFJLENBQUNsRCxPQUFPLEtBQUtBO2dCQUM5QixPQUFPO29CQUNMLFFBQVE7Z0JBQ1Y7Z0JBRUEsT0FBT2tEO1lBQ1Q7Ozs7S0FFQSw4QkFBT1MsUUFBTztBQUdoQixTQUFTTCxVQUFVSCxLQUFLLEVBQUVDLEtBQUs7SUFDN0IsSUFBSUM7SUFFSixJQUFJLEFBQUNGLFVBQVVTLGlCQUFRLElBQU1SLFVBQVVRLGlCQUFRLEVBQUc7UUFDaERQLGNBQWVGLFVBQVVDO0lBQzNCLE9BQU87UUFDTCxJQUFNUyxvQkFBb0JWLE1BQU1GLFNBQVMsQ0FBQ0c7UUFFMUNDLGNBQWNRLG1CQUFvQixHQUFHO0lBQ3ZDO0lBRUEsT0FBT1I7QUFDVDtBQUVBLFNBQVNLLFdBQVdILE1BQU0sRUFBRUMsTUFBTTtJQUNoQyxJQUFJQztJQUVKQSxhQUFhakUsTUFBTStELFFBQVFDLFFBQVEsU0FBQ0wsT0FBT0M7UUFDekMsSUFBTUMsY0FBY0MsVUFBVUgsT0FBT0M7UUFFckMsSUFBSUMsYUFBYTtZQUNmLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0k7QUFDVDtBQUVBLFNBQVNmLGFBQWE5QyxJQUFJLEVBQUU2QyxPQUFPO0lBQ2pDLElBQUkxQztJQUVKLElBQU0rRCxhQUFjLEFBQUNsRSxTQUFTZ0UsaUJBQVEsR0FDaEJHLGVBQUksR0FDRnRCLFFBQVFDLFlBQVksQ0FBQzlDO0lBRTdDRyxTQUFTLEFBQUMsSUFBYyxPQUFYK0QsWUFBVztJQUV4QixPQUFPL0Q7QUFDVDtBQUVBLFNBQVM0QyxjQUFjOUMsS0FBSyxFQUFFNEMsT0FBTztJQUNuQyxJQUFJMUM7SUFFSixJQUFNaUUsY0FBY3ZCLFFBQVFFLGFBQWEsQ0FBQzlDO0lBRTFDRSxTQUFTLEFBQUMsSUFBZSxPQUFaaUUsYUFBWTtJQUV6QixPQUFPakU7QUFDVDtBQUVBLFNBQVM2QyxlQUFlOUMsTUFBTTtJQUM1QixJQUFJQztJQUVKQSxTQUFTLEFBQUMsR0FBUyxPQUFQRDtJQUVaLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTOEMsZUFBZTlDLE1BQU07SUFDNUJBLFNBQVMsQUFBQyxJQUFVLE9BQVBBLFFBQU8sTUFBSSxHQUFHO0lBRTNCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTK0MsZ0JBQWdCOUMsT0FBTztJQUM5QixJQUFJRDtJQUVKQSxTQUFTLEFBQUMsSUFBVyxPQUFSQyxTQUFRO0lBRXJCLE9BQU9EO0FBQ1QifQ==
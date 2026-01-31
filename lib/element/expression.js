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
    function Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
        _class_call_check(this, Expression);
        this.string = string;
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.boolean = boolean;
        this.stringLiteral = stringLiteral;
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
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
            key: "getBoolean",
            value: function getBoolean() {
                return this.boolean;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                return this.stringLiteral;
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
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.stringLiteral !== null) {
                    type = _types.STRING_TYPE;
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
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                if (false) {
                ///
                } else if (this.node !== null || this.nodes !== null || this.number !== null || this.boolean !== null || this.stringLiteral !== null) {
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
                } else if (this.boolean !== null) {
                    var boolean = expression.getBoolean();
                    equalTo = this.boolean === boolean;
                } else if (this.stringLiteral !== null) {
                    var stringLiteral = expression.getStringLiteral();
                    equalTo = this.stringLiteral === stringLiteral;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEV4cHJlc3Npb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIG5vZGVzLCBudW1iZXIsIGJvb2xlYW4sIHN0cmluZ0xpdGVyYWwsIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkRXhwcmVzc2lvbiwgbG9naWNhbEV4cHJlc3Npb24sIGJyYWNrZXRlZEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLmJvb2xlYW4gPSBib29sZWFuO1xuICAgIHRoaXMuc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWw7XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLmV2ZXJ5ID0gZXZlcnk7XG4gICAgdGhpcy5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgdGhpcy50ZXJuYXJ5ID0gdGVybmFyeTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICAgIHRoaXMubmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbjtcbiAgICB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb247XG4gICAgdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIGdldE51bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXI7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2xlYW47XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0TmVnYXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRMb2dpY2xFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBTVFJJTkdfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmV0dXJuQmxvY2suZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubm9kZSAhPT0gbnVsbCkgIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ub2RlcyAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLm51bWJlciAhPT0gbnVsbCkgfHxcbiAgICAgICAgICAgICAgICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5yZWR1Y2UuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubG9naWNhbEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBpc0VxdWFsVG8oZXhwcmVzc2lvbikge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2RlQSA9IHRoaXMubm9kZSwgIC8vL1xuICAgICAgICAgICAgICBub2RlQiA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2RlTWF0Y2hlczsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IGV4cHJlc3Npb24uZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5udW1iZXIgPT09IG51bWJlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSBleHByZXNzaW9uLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmdMaXRlcmFsID0gZXhwcmVzc2lvbi5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5zdHJpbmdMaXRlcmFsID09PSBzdHJpbmdMaXRlcmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlQUVxdWFsVG9Ob2RlQSA9IG5vZGVBLmlzRXF1YWxUbyhub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBRXF1YWxUb05vZGVBOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgbGV0IG5vZGVzTWF0Y2g7XG5cbiAgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRXhwcmVzc2lvbiIsInN0cmluZyIsIm5vZGUiLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldEJvb2xlYW4iLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0U29tZSIsImdldEV2ZXJ5IiwiZ2V0UmVkdWNlIiwiZ2V0VGVybmFyeSIsInRlcm5heSIsImdldFZhcmlhYmxlIiwiZ2V0Tm9kZVF1ZXJ5IiwiZ2V0Tm9kZXNRdWVyeSIsImdldENvbXBhcmlzb24iLCJnZXRSZXR1cm5CbG9jayIsImdldFByb2NlZHVyZUNhbGwiLCJnZXROZWdhdGVkRXhwcmVzc2lvbiIsImdldExvZ2ljbEV4cHJlc3Npb24iLCJnZXRCcmFja2V0ZWRFeHByZXNzaW9uIiwiZ2V0VHlwZSIsInR5cGUiLCJOT0RFX1RZUEUiLCJOT0RFU19UWVBFIiwiTlVNQkVSX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJTVFJJTkdfVFlQRSIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsIm1hdGNoTm9kZXMiLCJuYW1lIiwibnVsbE5vZGUiLCJub2RlQUVxdWFsVG9Ob2RlQSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7eUJBVCtCOytEQUVWO3dCQUVFO3FCQUN1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLG1CQUFtQjtnQ0FEdk1uQjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdB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
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
var _elements = require("../elements");
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
var _Expression;
var _default = (0, _elements.define)((_Expression = /*#__PURE__*/ function() {
    function Expression(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
        _class_call_check(this, Expression);
        this.string = string;
        this.primitive = primitive;
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
            key: "getPrimitive",
            value: function getPrimitive() {
                return this.primitive;
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
            key: "getNode",
            value: function getNode() {
                return this.primitive.getNode();
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.primitive.getNodes();
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.primitive.getNumber();
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.primitive.getBoolean();
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                return this.primitive.getStringLiteral();
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.primitive !== null) {
                    type = this.primitive.getType();
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
                } else if (this.primitive !== null) {
                    expression = this.primitive.evaluate(context);
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
                var primitive = expression.getPrimitive(), equalTo = this.primitive.isEqualTo(primitive);
                return equalTo;
            }
        }
    ]);
    return Expression;
}(), _define_property(_Expression, "name", "Expression"), _Expression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcHJpbWl0aXZlLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG4gICAgdGhpcy5zb21lID0gc29tZTtcbiAgICB0aGlzLmV2ZXJ5ID0gZXZlcnk7XG4gICAgdGhpcy5yZWR1Y2UgPSByZWR1Y2U7XG4gICAgdGhpcy50ZXJuYXJ5ID0gdGVybmFyeTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICAgIHRoaXMubmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbjtcbiAgICB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb247XG4gICAgdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U29tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lO1xuICB9XG5cbiAgZ2V0RXZlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnk7XG4gIH1cblxuICBnZXRSZWR1Y2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlO1xuICB9XG5cbiAgZ2V0VGVybmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJuYXk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0TG9naWNsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXROb2RlKCk7IH1cblxuICBnZXROb2RlcygpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE5vZGVzKCk7IH1cblxuICBnZXROdW1iZXIoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXROdW1iZXIoKTsgfVxuXG4gIGdldEJvb2xlYW4oKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXRCb29sZWFuKCk7IH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0U3RyaW5nTGl0ZXJhbCgpOyB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmV0dXJuQmxvY2suZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnByaW1pdGl2ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLmV2ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJlZHVjZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICBleHByZXNzaW9uID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgZXhwcmVzc2lvbiA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhleHByZXNzaW9uKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlID0gZXhwcmVzc2lvbi5nZXRQcmltaXRpdmUoKSxcbiAgICAgICAgICBlcXVhbFRvID0gdGhpcy5wcmltaXRpdmUuaXNFcXVhbFRvKHByaW1pdGl2ZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFeHByZXNzaW9uIiwic3RyaW5nIiwicHJpbWl0aXZlIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFByaW1pdGl2ZSIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXRWYXJpYWJsZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb24iLCJnZXRMb2dpY2xFeHByZXNzaW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbiIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldEJvb2xlYW4iLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0VHlwZSIsInR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzthQUFNQyxXQUNkQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLG1CQUFtQjtnQ0FEcktmO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FB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
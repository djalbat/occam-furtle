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
    function Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression, comparisonExpression) {
        _class_call_check(this, Expression);
        this.string = string;
        this.variable = variable;
        this.primitive = primitive;
        this.some = some;
        this.every = every;
        this.reduce = reduce;
        this.ternary = ternary;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.returnBlock = returnBlock;
        this.procedureCall = procedureCall;
        this.negatedExpression = negatedExpression;
        this.logicalExpression = logicalExpression;
        this.bracketedExpression = bracketedExpression;
        this.comparisonExpression = comparisonExpression;
    }
    _create_class(Expression, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
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
            key: "getComparisonExpression",
            value: function getComparisonExpression() {
                return this.comparisonExpression;
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
                } else if (this.variable !== null) {
                    type = this.variable.getType();
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
                } else if (this.nodeQuery !== null) {
                    type = this.nodeQuery.getType();
                } else if (this.nodesQuery !== null) {
                    type = this.nodesQuery.getType();
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
                } else if (this.comparisonExpression !== null) {
                    type = this.comparisonExpression.getType();
                }
                return type;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    term = this.variable.evaluate(context);
                } else if (this.primitive !== null) {
                    term = this.primitive.evaluate(context);
                } else if (this.some !== null) {
                    term = this.some.evaluate(context);
                } else if (this.every !== null) {
                    term = this.every.evaluate(context);
                } else if (this.reduce !== null) {
                    term = this.reduce.evaluate(context);
                } else if (this.ternary !== null) {
                    term = this.ternary.evaluate(context);
                } else if (this.nodeQuery !== null) {
                    term = this.nodeQuery.evaluate(context);
                } else if (this.nodesQuery !== null) {
                    term = this.nodesQuery.evaluate(context);
                } else if (this.returnBlock !== null) {
                    term = this.returnBlock.evaluate(context);
                } else if (this.procedureCall !== null) {
                    term = this.procedureCall.evaluate(context);
                } else if (this.negatedExpression !== null) {
                    term = this.negatedExpression.evaluate(context);
                } else if (this.logicalExpression !== null) {
                    term = this.logicalExpression.evaluate(context);
                } else if (this.bracketedExpression !== null) {
                    term = this.bracketedExpression.evaluate(context);
                } else if (this.comparisonExpression !== null) {
                    term = this.comparisonExpression.evaluate(context);
                }
                return term;
            }
        }
    ]);
    return Expression;
}(), _define_property(_Expression, "name", "Expression"), _Expression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uLCBjb21wYXJpc29uRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gICAgdGhpcy5uZWdhdGVkRXhwcmVzc2lvbiA9IG5lZ2F0ZWRFeHByZXNzaW9uO1xuICAgIHRoaXMubG9naWNhbEV4cHJlc3Npb24gPSBsb2dpY2FsRXhwcmVzc2lvbjtcbiAgICB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gPSBicmFja2V0ZWRFeHByZXNzaW9uO1xuICAgIHRoaXMuY29tcGFyaXNvbkV4cHJlc3Npb24gPSBjb21wYXJpc29uRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmltaXRpdmU7XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0TG9naWNsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25FeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25FeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE5vZGUoKTsgfVxuXG4gIGdldE5vZGVzKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Tm9kZXMoKTsgfVxuXG4gIGdldE51bWJlcigpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE51bWJlcigpOyB9XG5cbiAgZ2V0Qm9vbGVhbigpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldEJvb2xlYW4oKTsgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXRTdHJpbmdMaXRlcmFsKCk7IH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcmltaXRpdmUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJldHVybkJsb2NrLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5uZWdhdGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbkV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnByaW1pdGl2ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmV2ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnJlZHVjZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5ub2RlUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5vZGVzUXVlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubG9naWNhbEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmJyYWNrZXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25FeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5jb21wYXJpc29uRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFeHByZXNzaW9uIiwic3RyaW5nIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJzb21lIiwiZXZlcnkiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsInJldHVybkJsb2NrIiwicHJvY2VkdXJlQ2FsbCIsIm5lZ2F0ZWRFeHByZXNzaW9uIiwibG9naWNhbEV4cHJlc3Npb24iLCJicmFja2V0ZWRFeHByZXNzaW9uIiwiY29tcGFyaXNvbkV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb24iLCJnZXRMb2dpY2xFeHByZXNzaW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbiIsImdldENvbXBhcmlzb25FeHByZXNzaW9uIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0Qm9vbGVhbiIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRUeXBlIiwidHlwZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7Ozt3QkFGdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRUMsbUJBQW1CLEVBQUVDLG9CQUFvQjtnQ0FEL0tmO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO1FBQzNCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOzs7O1lBRzlCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNmLE1BQU07WUFDcEI7OztZQUVBZ0Is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
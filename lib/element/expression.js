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
    function Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression) {
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
                } else if (this.comparison !== null) {
                    term = this.comparison.evaluate(context);
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
                }
                return term;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZEV4cHJlc3Npb24sIGxvZ2ljYWxFeHByZXNzaW9uLCBicmFja2V0ZWRFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucHJpbWl0aXZlID0gcHJpbWl0aXZlO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICAgIHRoaXMubmVnYXRlZEV4cHJlc3Npb24gPSBuZWdhdGVkRXhwcmVzc2lvbjtcbiAgICB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uID0gbG9naWNhbEV4cHJlc3Npb247XG4gICAgdGhpcy5icmFja2V0ZWRFeHByZXNzaW9uID0gYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmltaXRpdmU7XG4gIH1cblxuICBnZXRTb21lKCkge1xuICAgIHJldHVybiB0aGlzLnNvbWU7XG4gIH1cblxuICBnZXRFdmVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVyeTtcbiAgfVxuXG4gIGdldFJlZHVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2U7XG4gIH1cblxuICBnZXRUZXJuYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm5heTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0TG9naWNsRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXROb2RlKCk7IH1cblxuICBnZXROb2RlcygpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE5vZGVzKCk7IH1cblxuICBnZXROdW1iZXIoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXROdW1iZXIoKTsgfVxuXG4gIGdldEJvb2xlYW4oKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXRCb29sZWFuKCk7IH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0U3RyaW5nTGl0ZXJhbCgpOyB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuc29tZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ldmVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmVkdWNlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudGVybmFyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZVF1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubm9kZXNRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb24uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmV0dXJuQmxvY2suZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbEV4cHJlc3Npb24gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxFeHByZXNzaW9uLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJpbWl0aXZlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5zb21lLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuZXZlcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJlZHVjZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy50ZXJuYXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuY29tcGFyaXNvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubmVnYXRlZEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxFeHByZXNzaW9uICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5sb2dpY2FsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuYnJhY2tldGVkRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhleHByZXNzaW9uKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlID0gZXhwcmVzc2lvbi5nZXRQcmltaXRpdmUoKSxcbiAgICAgICAgICBlcXVhbFRvID0gdGhpcy5wcmltaXRpdmUuaXNFcXVhbFRvKHByaW1pdGl2ZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFeHByZXNzaW9uIiwic3RyaW5nIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJzb21lIiwiZXZlcnkiLCJyZWR1Y2UiLCJ0ZXJuYXJ5Iiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkRXhwcmVzc2lvbiIsImxvZ2ljYWxFeHByZXNzaW9uIiwiYnJhY2tldGVkRXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UHJpbWl0aXZlIiwiZ2V0U29tZSIsImdldEV2ZXJ5IiwiZ2V0UmVkdWNlIiwiZ2V0VGVybmFyeSIsInRlcm5heSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRDb21wYXJpc29uIiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0TmVnYXRlZEV4cHJlc3Npb24iLCJnZXRMb2dpY2xFeHByZXNzaW9uIiwiZ2V0QnJhY2tldGVkRXhwcmVzc2lvbiIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldEJvb2xlYW4iLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0VHlwZSIsInR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwiZXhwcmVzc2lvbiIsImVxdWFsVG8iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7Ozt3QkFGdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFQyxtQkFBbUI7Z0NBRHJLZjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFD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
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
    function Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall) {
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
                }
                return term;
            }
        }
    ]);
    return Expression;
}(), _define_property(_Expression, "name", "Expression"), _Expression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgc29tZSwgZXZlcnksIHJlZHVjZSwgdGVybmFyeSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U29tZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lO1xuICB9XG5cbiAgZ2V0RXZlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnk7XG4gIH1cblxuICBnZXRSZWR1Y2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlO1xuICB9XG5cbiAgZ2V0VGVybmFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJuYXk7XG4gIH1cblxuICBnZXROb2RlUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZVF1ZXJ5O1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1F1ZXJ5O1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXROb2RlKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Tm9kZSgpOyB9XG5cbiAgZ2V0Tm9kZXMoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXROb2RlcygpOyB9XG5cbiAgZ2V0TnVtYmVyKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0TnVtYmVyKCk7IH1cblxuICBnZXRCb29sZWFuKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Qm9vbGVhbigpOyB9XG5cbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldFN0cmluZ0xpdGVyYWwoKTsgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByaW1pdGl2ZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnNvbWUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuZXZlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZWR1Y2UgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJlZHVjZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnRlcm5hcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVRdWVyeS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucmV0dXJuQmxvY2suZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5wcmltaXRpdmUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvbWUgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnNvbWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV2ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5yZWR1Y2UuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5ub2Rlc1F1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yZXR1cm5CbG9jayAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLnByb2NlZHVyZUNhbGwuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXhwcmVzc2lvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXhwcmVzc2lvbiIsInN0cmluZyIsInZhcmlhYmxlIiwicHJpbWl0aXZlIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldFNvbWUiLCJnZXRFdmVyeSIsImdldFJlZHVjZSIsImdldFRlcm5hcnkiLCJ0ZXJuYXkiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0Qm9vbGVhbiIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRUeXBlIiwidHlwZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7Ozt3QkFGdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7YUFBTUMsV0FDZEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhO2dDQUQ5Rlg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FB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
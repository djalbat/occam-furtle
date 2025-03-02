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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
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
var _Reduce;
var variableNodeQuery = (0, _query.nodeQuery)("/reduce/variable"), parametersNodeQuery = (0, _query.nodeQuery)("/reduce/anonymousProcedure/parameters"), valueReduceNodeQuery = (0, _query.nodeQuery)("/value/reduce"), initialValueNodeQuery = (0, _query.nodeQuery)("/reduce/value"); ///
var _default = (0, _dom.domAssigned)((_Reduce = /*#__PURE__*/ function() {
    function Reduce(string, variable, initialValue, anonymousProcedure) {
        _class_call_check(this, Reduce);
        this.string = string;
        this.variable = variable;
        this.initialValue = initialValue;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Reduce, [
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
            key: "getInitialValue",
            value: function getInitialValue() {
                return this.initialValue;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var value;
                var reduceString = this.getString();
                context.trace("Evaluating the '".concat(reduceString, "' reduce..."));
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes(), initialValue = this.initialValue.evaluate(context);
                value = nodes.reduce(function(currentValue, node) {
                    var value;
                    var Value = _dom.default.Value, Values = _dom.default.Values;
                    value = currentValue; ///
                    var values = Values.fromValue(value, context);
                    value = Value.fromNode(node, context);
                    values.addValue(value);
                    value = _this.anonymousProcedure.call(values, context);
                    return value;
                }, initialValue);
                context.trace("...evaluated the '".concat(reduceString, "' reduce."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var reduce = null;
                var valueReduceNode = valueReduceNodeQuery(valueNode);
                if (valueReduceNode !== null) {
                    var Value = _dom.default.Value, Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, reduceNode = valueReduceNode, value = Value.fromReduceNode(reduceNode, context), variable = Variable.fromReduceNode(reduceNode, context), initialValue = value, anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context), string = stringFromVariableInitialValueAndAnonymousProcedure(variable, initialValue, anonymousProcedure);
                    reduce = new Reduce(string, variable, initialValue, anonymousProcedure);
                }
                return reduce;
            }
        }
    ]);
    return Reduce;
}(), _define_property(_Reduce, "name", "Reduce"), _Reduce));
function stringFromVariableInitialValueAndAnonymousProcedure(variable, initialValue, anonymousProcedure) {
    var variableString = variable.getString(), initialValueString = initialValue.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Reduce(".concat(variableString, ", ").concat(anonymousProcedureString, ", ").concat(initialValueString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVkdWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvdmFyaWFibGVcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHZhbHVlUmVkdWNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3JlZHVjZVwiKSxcbiAgICAgIGluaXRpYWxWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvdmFsdWVcIik7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZWR1Y2Uge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBpbml0aWFsVmFsdWUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsVmFsdWU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHJlZHVjZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdmFsdWUgPSBub2Rlcy5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgbm9kZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IFZhbHVlLCBWYWx1ZXMgfSA9IGRvbTtcblxuICAgICAgdmFsdWUgPSBjdXJyZW50VmFsdWU7IC8vL1xuXG4gICAgICBjb25zdCB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWVzLmFkZFZhbHVlKHZhbHVlKTtcblxuICAgICAgdmFsdWUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBpbml0aWFsVmFsdWUpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZHVjZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVJlZHVjZU5vZGUgPSB2YWx1ZVJlZHVjZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlUmVkdWNlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSwgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgcmVkdWNlTm9kZSA9IHZhbHVlUmVkdWNlTm9kZSwgLy8vXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHZhbHVlLCAvLy9cbiAgICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IEFub255bW91c1Byb2NlZHVyZS5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxWYWx1ZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbFZhbHVlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbFZhbHVlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBpbml0aWFsVmFsdWUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBpbml0aWFsVmFsdWVTdHJpbmcgPSBpbml0aWFsVmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IGFub255bW91c1Byb2NlZHVyZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFJlZHVjZSgke3ZhcmlhYmxlU3RyaW5nfSwgJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9LCAke2luaXRpYWxWYWx1ZVN0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsInZhbHVlUmVkdWNlTm9kZVF1ZXJ5IiwiaW5pdGlhbFZhbHVlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZWR1Y2UiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImluaXRpYWxWYWx1ZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0SW5pdGlhbFZhbHVlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWUiLCJyZWR1Y2VTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJyZWR1Y2UiLCJjdXJyZW50VmFsdWUiLCJub2RlIiwiVmFsdWUiLCJkb20iLCJWYWx1ZXMiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJmcm9tTm9kZSIsImFkZFZhbHVlIiwiY2FsbCIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVJlZHVjZU5vZGUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsInJlZHVjZU5vZGUiLCJmcm9tUmVkdWNlTm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxWYWx1ZUFuZEFub255bW91c1Byb2NlZHVyZSIsIm5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsImluaXRpYWxWYWx1ZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCO2dFQUNNO3FCQUVJO3FCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQzlCQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUMsMENBQ2hDRSx1QkFBdUJGLElBQUFBLGdCQUFTLEVBQUMsa0JBQ2pDRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsa0JBQWtCLEdBQUc7SUFFN0QsV0FBZUksSUFB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
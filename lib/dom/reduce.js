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
var valueReduceNodeQuery = (0, _query.nodeQuery)("/value/reduce"); ///
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
                    var reduceNode = valueReduceNode; ///
                    reduce = reduceFromReduceNode(reduceNode, context);
                }
                return reduce;
            }
        }
    ]);
    return Reduce;
}(), _define_property(_Reduce, "name", "Reduce"), _Reduce));
function reduceFromReduceNode(reduceNode, context) {
    var Value = _dom.default.Value, Reduce = _dom.default.Reduce, Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, value = Value.fromReduceNode(reduceNode, context), variable = Variable.fromReduceNode(reduceNode, context), initialValue = value, anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context), string = stringFromVariableInitialValueAndAnonymousProcedure(variable, initialValue, anonymousProcedure), reduce = new Reduce(string, variable, initialValue, anonymousProcedure);
    return reduce;
}
function stringFromVariableInitialValueAndAnonymousProcedure(variable, initialValue, anonymousProcedure) {
    var variableString = variable.getString(), initialValueString = initialValue.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Reduce(".concat(variableString, ", ").concat(anonymousProcedureString, ", ").concat(initialValueString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVkdWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdmFsdWVSZWR1Y2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvcmVkdWNlXCIpOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmVkdWNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgaW5pdGlhbFZhbHVlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRJbml0aWFsVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBpbml0aWFsVmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHZhbHVlID0gbm9kZXMucmVkdWNlKChjdXJyZW50VmFsdWUsIG5vZGUpID0+IHtcbiAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgY29uc3QgeyBWYWx1ZSwgVmFsdWVzIH0gPSBkb207XG5cbiAgICAgIHZhbHVlID0gY3VycmVudFZhbHVlOyAvLy9cblxuICAgICAgY29uc3QgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHZhbHVlcy5hZGRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIHZhbHVlID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgaW5pdGlhbFZhbHVlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZHVjZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZWR1Y2UgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVSZWR1Y2VOb2RlID0gdmFsdWVSZWR1Y2VOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVJlZHVjZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZHVjZU5vZGUgPSB2YWx1ZVJlZHVjZU5vZGU7IC8vL1xuXG4gICAgICByZWR1Y2UgPSByZWR1Y2VGcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVkdWNlRnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlLCBSZWR1Y2UsIFZhcmlhYmxlLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgaW5pdGlhbFZhbHVlID0gdmFsdWUsIC8vL1xuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUluaXRpYWxWYWx1ZUFuZEFub255bW91c1Byb2NlZHVyZSh2YXJpYWJsZSwgaW5pdGlhbFZhbHVlLCBhbm9ueW1vdXNQcm9jZWR1cmUpLFxuICAgICAgICByZWR1Y2UgPSBuZXcgUmVkdWNlKHN0cmluZywgdmFyaWFibGUsIGluaXRpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gcmVkdWNlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVJbml0aWFsVmFsdWVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGluaXRpYWxWYWx1ZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGluaXRpYWxWYWx1ZVN0cmluZyA9IGluaXRpYWxWYWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgUmVkdWNlKCR7dmFyaWFibGVTdHJpbmd9LCAke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30sICR7aW5pdGlhbFZhbHVlU3RyaW5nfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidmFsdWVSZWR1Y2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZHVjZSIsInN0cmluZyIsInZhcmlhYmxlIiwiaW5pdGlhbFZhbHVlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsVmFsdWUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsInJlZHVjZVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsInJlZHVjZSIsImN1cnJlbnRWYWx1ZSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhbHVlcyIsInZhbHVlcyIsImZyb21WYWx1ZSIsImZyb21Ob2RlIiwiYWRkVmFsdWUiLCJjYWxsIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlUmVkdWNlTm9kZSIsInJlZHVjZU5vZGUiLCJyZWR1Y2VGcm9tUmVkdWNlTm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsImZyb21SZWR1Y2VOb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlSW5pdGlhbFZhbHVlQW5kQW5vbnltb3VzUHJvY2VkdXJlIiwidmFyaWFibGVTdHJpbmciLCJpbml0aWFsVmFsdWVTdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtnRUFDTTtxQkFFSTtxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHM0IsSUFBTUEsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUFrQixHQUFHO0lBRTVELFdBQWVDLElBQUFBLGdCQUFXLDJCQUFDO2FBQU1DLE9BQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxrQkFBa0I7Z0NBRC9CSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENB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
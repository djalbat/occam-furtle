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
var _Some;
var valueSomeNodeQuery = (0, _query.nodeQuery)("/value/some");
var _default = (0, _dom.domAssigned)((_Some = /*#__PURE__*/ function() {
    function Some(string, variable, anonymousProcedure) {
        _class_call_check(this, Some);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Some, [
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
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some..."));
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes(), boolean = nodes.some(function(node) {
                    var value;
                    var Value = _dom.default.Value, Values = _dom.default.Values;
                    value = Value.fromNode(node, context);
                    var values = Values.fromValue(value, context);
                    value = _this.anonymousProcedure.call(values, context);
                    var valueType = value.getType();
                    if (valueType !== _types.BOOLEAN_TYPE) {
                        var valueString = value.asString(context), message = "The ".concat(valueString, " value's type is '").concat(valueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = value.getBoolean();
                    return boolean;
                });
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context);
                context.trace("...evaluated the '".concat(someString, "' some."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var some = null;
                var valueSomeNode = valueSomeNodeQuery(valueNode);
                if (valueSomeNode !== null) {
                    var someNode = valueSomeNode; ///
                    some = someFromSomeNode(someNode, context);
                }
                return some;
            }
        }
    ]);
    return Some;
}(), _define_property(_Some, "name", "Some"), _Some));
function someFromSomeNode(someNode, context) {
    var Some = _dom.default.Some, Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context), variable = Variable.fromSomeNode(someNode, context), string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context), some = new Some(string, variable, anonymousProcedure);
    return some;
}
function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
    var variableString = variable.getString(), anonymousProcedureString = anonymousProcedure.getString(), string = "Some(".concat(variableString, ", ").concat(anonymousProcedureString, ") ");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdmFsdWVTb21lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3NvbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFNvbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgVmFsdWUsIFZhbHVlcyB9ID0gZG9tO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBWYWx1ZXMuZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgdHlwZSBpcyAnJHt2YWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU29tZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzb21lID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlU29tZU5vZGUgPSB2YWx1ZVNvbWVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzb21lTm9kZSA9IHZhbHVlU29tZU5vZGU7IC8vL1xuXG4gICAgICBzb21lID0gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzb21lRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSwgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCksXG4gICAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuXG4gIHJldHVybiBzb21lO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUodmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSBhbm9ueW1vdXNQcm9jZWR1cmUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGBTb21lKCR7dmFyaWFibGVTdHJpbmd9LCAke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30pIGA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZVNvbWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlNvbWUiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWUiLCJzb21lU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwiYm9vbGVhbiIsInNvbWUiLCJub2RlIiwiVmFsdWUiLCJkb20iLCJWYWx1ZXMiLCJmcm9tTm9kZSIsInZhbHVlcyIsImZyb21WYWx1ZSIsImNhbGwiLCJCT09MRUFOX1RZUEUiLCJnZXRCb29sZWFuIiwiZnJvbUJvb2xlYW4iLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidmFsdWVTb21lTm9kZSIsInNvbWVOb2RlIiwic29tZUZyb21Tb21lTm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsImZyb21Tb21lTm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZEFub255bW91c1Byb2NlZHVyZSIsInZhcmlhYmxlU3RyaW5nIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7Z0VBQ007cUJBRUk7cUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUVyQyxXQUFlQyxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQjtnQ0FEakJIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUks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
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
var variableNodeQuery = (0, _query.nodeQuery)("/some/variable"), valueSomeNodeQuery = (0, _query.nodeQuery)("/value/some"), parametersNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure/parameters");
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
                    var Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, someNode = valueSomeNode, string = stringFromSomeNode(someNode, context), variable = Variable.fromSomeNode(someNode, context), anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context);
                    some = new Some(string, variable, anonymousProcedure);
                }
                return some;
            }
        }
    ]);
    return Some;
}(), _define_property(_Some, "name", "Some"), _Some));
function stringFromSomeNode(someNode, context) {
    var variableNode = variableNodeQuery(someNode), parametersNode = parametersNodeQuery(someNode), variableString = context.nodeAsString(variableNode), parametersString = context.nodeAsString(parametersNode), string = "Some(".concat(variableString, ", (").concat(parametersString, ") { ... })");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlU29tZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9zb21lXCIpLFxuICAgICAgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zb21lL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTb21lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBzb21lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLi4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBib29sZWFuID0gbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCB7IFZhbHVlLCBWYWx1ZXMgfSA9IGRvbTtcblxuICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIHR5cGUgaXMgJyR7dmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbjtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc29tZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVNvbWVOb2RlID0gdmFsdWVTb21lTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVTb21lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSwgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBkb20sXG4gICAgICAgICAgICBzb21lTm9kZSA9IHZhbHVlU29tZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IEFub255bW91c1Byb2NlZHVyZS5mcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc29tZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNOb2RlID0gcGFyYW1ldGVyc05vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYFNvbWUoJHt2YXJpYWJsZVN0cmluZ30sICgke3BhcmFtZXRlcnNTdHJpbmd9KSB7IC4uLiB9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZVNvbWVOb2RlUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTb21lIiwic3RyaW5nIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwic29tZVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJzb21lIiwibm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFsdWVzIiwiZnJvbU5vZGUiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlU29tZU5vZGUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsInNvbWVOb2RlIiwic3RyaW5nRnJvbVNvbWVOb2RlIiwiZnJvbVNvbWVOb2RlIiwibmFtZSIsInZhcmlhYmxlTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007cUJBRUk7cUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JFLHNCQUFzQkYsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlRyxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQjtnQ0FEakJIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0Ms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
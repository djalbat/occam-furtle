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
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some..."));
                var value = this.variable.evaluate(context), valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes();
                nodes.some(function(node) {
                    var Value = _dom.default.Value, Values = _dom.default.Values, value = Value.fromNode(node, context), values = Values.fromValue(value, context);
                    _this.anonymousProcedure.call(values, context);
                });
                context.trace("...evaluated the '".concat(someString, "' some."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvdmFyaWFibGVcIiksXG4gICAgICB2YWx1ZVNvbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvc29tZVwiKSxcbiAgICAgIHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU29tZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgc29tZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlcygpO1xuXG4gICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgeyBWYWx1ZSwgVmFsdWVzIH0gPSBkb20sXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodmFsdWVzLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU29tZVwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBzb21lID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlU29tZU5vZGUgPSB2YWx1ZVNvbWVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVNvbWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgICAgIHNvbWVOb2RlID0gdmFsdWVTb21lTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHNvbWUgPSBuZXcgU29tZShzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiBzb21lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHNvbWVOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KHNvbWVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgU29tZSgke3ZhcmlhYmxlU3RyaW5nfSwgKCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH0pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufSJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlU29tZU5vZGVRdWVyeSIsInBhcmFtZXRlcnNOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlNvbWUiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0Iiwic29tZVN0cmluZyIsInRyYWNlIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwic29tZSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhbHVlcyIsImZyb21Ob2RlIiwidmFsdWVzIiwiZnJvbVZhbHVlIiwiY2FsbCIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVNvbWVOb2RlIiwiVmFyaWFibGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzb21lTm9kZSIsInN0cmluZ0Zyb21Tb21lTm9kZSIsImZyb21Tb21lTm9kZSIsIm5hbWUiLCJ2YXJpYWJsZU5vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO2dFQUNNO3FCQUVJO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUczQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMs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
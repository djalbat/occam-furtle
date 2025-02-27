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
                debugger;
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some loop..."));
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
                context.trace("...evaluated the '".concat(someString, "' some loop."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvdmFyaWFibGVcIiksXG4gICAgICB2YWx1ZVNvbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvc29tZVwiKSxcbiAgICAgIHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgU29tZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgZGVidWdnZXJcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUgbG9vcC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlcygpO1xuXG4gICAgbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgeyBWYWx1ZSwgVmFsdWVzIH0gPSBkb20sXG4gICAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodmFsdWVzLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUgbG9vcC5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTb21lXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHNvbWUgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVTb21lTm9kZSA9IHZhbHVlU29tZU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlU29tZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgc29tZU5vZGUgPSB2YWx1ZVNvbWVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgc29tZSA9IG5ldyBTb21lKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGBTb21lKCR7dmFyaWFibGVTdHJpbmd9LCAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfSlgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVTb21lTm9kZVF1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiU29tZSIsInN0cmluZyIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJzb21lU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJzb21lIiwibm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFsdWVzIiwiZnJvbU5vZGUiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJjYWxsIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlU29tZU5vZGUiLCJWYXJpYWJsZSIsIkFub255bW91c1Byb2NlZHVyZSIsInNvbWVOb2RlIiwic3RyaW5nRnJvbVNvbWVOb2RlIiwiZnJvbVNvbWVOb2RlIiwibmFtZSIsInZhcmlhYmxlTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007cUJBRUk7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDOUJD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
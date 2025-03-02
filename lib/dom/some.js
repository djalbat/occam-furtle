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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS92YXJpYWJsZVwiKSxcbiAgICAgIHZhbHVlU29tZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9zb21lXCIpLFxuICAgICAgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zb21lL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTb21lIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBzb21lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLi4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBib29sZWFuID0gbm9kZXMuc29tZSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCB7IFZhbHVlLCBWYWx1ZXMgfSA9IGRvbTtcblxuICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gVmFsdWVzLmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIHR5cGUgaXMgJyR7dmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbjtcbiAgICAgICAgICB9KTtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgc29tZSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVNvbWVOb2RlID0gdmFsdWVTb21lTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVTb21lTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc29tZU5vZGUgPSB2YWx1ZVNvbWVOb2RlOyAvLy9cblxuICAgICAgc29tZSA9IHNvbWVGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzb21lO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc29tZUZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFNvbWUsIFZhcmlhYmxlLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpLFxuICAgICAgICBzb21lID0gbmV3IFNvbWUoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcblxuICByZXR1cm4gc29tZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kQW5vbnltb3VzUHJvY2VkdXJlKHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgU29tZSgke3ZhcmlhYmxlU3RyaW5nfSwgJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9KSBgO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZVNvbWVOb2RlUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJTb21lIiwic3RyaW5nIiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwic29tZVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJzb21lIiwibm9kZSIsIlZhbHVlIiwiZG9tIiwiVmFsdWVzIiwiZnJvbU5vZGUiLCJ2YWx1ZXMiLCJmcm9tVmFsdWUiLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInZhbHVlU29tZU5vZGUiLCJzb21lTm9kZSIsInNvbWVGcm9tU29tZU5vZGUiLCJuYW1lIiwiVmFyaWFibGUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJmcm9tU29tZU5vZGUiLCJzdHJpbmdGcm9tVmFyaWFibGVBbmRBbm9ueW1vdXNQcm9jZWR1cmUiLCJ2YXJpYWJsZVN0cmluZyIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO2dFQUNNO3FCQUVJO3FCQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsZ0JBQy9CRSxzQkFBc0JGLElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUcsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLE1BQU0s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
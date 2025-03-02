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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
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
var _AnonymousProcedureCall;
var anonymousProcedureCallNodeQuery = (0, _query.nodeQuery)("/value/anonymousProcedureCall");
var _default = (0, _dom.domAssigned)((_AnonymousProcedureCall = /*#__PURE__*/ function() {
    function AnonymousProcedureCall(string, anonymousProcedure, values) {
        _class_call_check(this, AnonymousProcedureCall);
        this.string = string;
        this.anonymousProcedure = anonymousProcedure;
        this.values = values;
    }
    _create_class(AnonymousProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "getValues",
            value: function getValues() {
                return this.values;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var anonymousProcedureCallString = this.string; ///
                context.trace("Evaluating the '".concat(anonymousProcedureCallString, "' anonymous procedure call..."));
                var values = this.values.evaluate(context), value = this.anonymousProcedure.call(values, context);
                context.debug("...evaluated the '".concat(anonymousProcedureCallString, "' anonymous procedure call."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var anonymousProcedureCall = null;
                var anonymousProcedureCallNode = anonymousProcedureCallNodeQuery(valueNode);
                if (anonymousProcedureCallNode !== null) {
                    var Values = _dom.default.Values, AnonymousProcedure = _dom.default.AnonymousProcedure, anonymousProcedure = AnonymousProcedure.fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context), values = Values.fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context), string = stringFromAnonymousProcedureAndValues(anonymousProcedure, values, context);
                    anonymousProcedureCall = new AnonymousProcedureCall(string, anonymousProcedure, values);
                }
                return anonymousProcedureCall;
            }
        }
    ]);
    return AnonymousProcedureCall;
}(), _define_property(_AnonymousProcedureCall, "name", "AnonymousProcedureCall"), _AnonymousProcedureCall));
function stringFromAnonymousProcedureAndValues(anonymousProcedure, values, context) {
    var anonymousProcedureString = anonymousProcedure.getString(), valuesString = values.getString(), string = "(".concat(anonymousProcedureString, ")(").concat(valuesString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9hbm9ueW1vdXNQcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhbm9ueW1vdXNQcm9jZWR1cmUsIHZhbHVlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlQ2FsbFN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWUgPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZUNhbGxTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlIGNhbGwuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlcywgQW5vbnltb3VzUHJvY2VkdXJlIH0gPSBkb20sXG4gICAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbUFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlKGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhbHVlcyA9IFZhbHVlcy5mcm9tQW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUoYW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFub255bW91c1Byb2NlZHVyZUFuZFZhbHVlcyhhbm9ueW1vdXNQcm9jZWR1cmUsIHZhbHVlcywgY29udGV4dCk7XG5cbiAgICAgIGFub255bW91c1Byb2NlZHVyZUNhbGwgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlQ2FsbChzdHJpbmcsIGFub255bW91c1Byb2NlZHVyZSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVBbmRWYWx1ZXMoYW5vbnltb3VzUHJvY2VkdXJlLCB2YWx1ZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gYW5vbnltb3VzUHJvY2VkdXJlLmdldFN0cmluZygpLFxuICAgICAgICB2YWx1ZXNTdHJpbmcgPSB2YWx1ZXMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAoJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9KSgke3ZhbHVlc1N0cmluZ30pYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFub255bW91c1Byb2NlZHVyZUNhbGwiLCJzdHJpbmciLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJ2YWx1ZXMiLCJnZXRTdHJpbmciLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRWYWx1ZXMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsImNhbGwiLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsIiwiYW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUiLCJWYWx1ZXMiLCJkb20iLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJmcm9tQW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUiLCJzdHJpbmdGcm9tQW5vbnltb3VzUHJvY2VkdXJlQW5kVmFsdWVzIiwibmFtZSIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyIsInZhbHVlc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsa0NBQWtDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRWxELFdBQWVDLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRUMsTUFBTTtnQ0FEZkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7UUFDMUIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQU1DLCtCQUErQixJQUFJLENBQUNSLE1BQU0sRUFBRyxHQUFHO2dCQUV0RE8sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQStDLE9BQTdCRCw4QkFBNkI7Z0JBRTlELElBQU1OLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsVUFDOUJHLFFBQVEsSUFBSSxDQUFDVCxrQkFBa0IsQ0FBQ1UsSUFBSSxDQUFDVCxRQUFRSztnQkFFbkRBLFFBQVFLLEtBQUssQ0FBQyxBQUFDLHFCQUFpRCxPQUE3QkosOEJBQTZCO2dCQUVoRSxPQUFPRTtZQUNUOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRVAsT0FBTztnQkFDckMsSUFBSVEseUJBQXlCO2dCQUU3QixJQUFNQyw2QkFBNkJwQixnQ0FBZ0NrQjtnQkFFbkUsSUFBSUUsK0JBQStCLE1BQU07b0JBQ3ZDLElBQVFDLFNBQStCQyxZQUFHLENBQWxDRCxRQUFRRSxxQkFBdUJELFlBQUcsQ0FBMUJDLG9CQUNWbEIscUJBQXFCa0IsbUJBQW1CQyw4QkFBOEIsQ0FBQ0osNEJBQTRCVCxVQUNuR0wsU0FBU2UsT0FBT0csOEJBQThCLENBQUNKLDRCQUE0QlQsVUFDM0VQLFNBQVNxQixzQ0FBc0NwQixvQkFBb0JDLFFBQVFLO29CQUVqRlEseUJBQXlCLElBQUloQix1QkFBdUJDLFFBQVFDLG9CQUFvQkM7Z0JBQ2xGO2dCQUVBLE9BQU9hO1lBQ1Q7Ozs7S0FqQkEsMENBQU9PLFFBQU87QUFvQmhCLFNBQVNELHNDQUFzQ3BCLGtCQUFrQixFQUFFQyxNQUFNLEVBQUVLLE9BQU87SUFDaEYsSUFBTWdCLDJCQUEyQnRCLG1CQUFtQkUsU0FBUyxJQUN2RHFCLGVBQWV0QixPQUFPQyxTQUFTLElBQy9CSCxTQUFTLEFBQUMsSUFBZ0N3QixPQUE3QkQsMEJBQXlCLE1BQWlCLE9BQWJDLGNBQWE7SUFFN0QsT0FBT3hCO0FBQ1QifQ==
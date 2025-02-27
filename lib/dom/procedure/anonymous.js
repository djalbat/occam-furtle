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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _query = require("../../utilities/query");
var _procedure = require("../procedure");
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
var _AnonymousProcedure;
var parametersNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/parameters"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/@type"), somAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure");
var _default = (0, _dom.domAssigned)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, type, parameters, returnBlock) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.type - type;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    _create_class(AnonymousProcedure, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.paramters;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "call",
            value: function call(values, context) {
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                this.parameters.matchValues(values, context);
                var variables = (0, _procedure.variablesFromValuesAndParameters)(values, this.parameters, context);
                var value = this.returnBlock.evaluate(variables, context), valueType = value.getType();
                if (this.type !== valueType) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type and the '").concat(anonymousProcedureString, "' anonymous procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
                return value;
            }
        }
    ], [
        {
            key: "fromSomeNode",
            value: function fromSomeNode(someNode, context) {
                var someAnonymousProcedureNode = somAnonymousProcedureNodeQuery(someNode), anonymousProcedureNode = someAnonymousProcedureNode, anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
                return anonymousProcedure;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var Parameters = _dom.default.Parameters, ReturnBlock = _dom.default.ReturnBlock, AnonymousProcedure = _dom.default.AnonymousProcedure, string = stringFromAnonymousProcedureNode(anonymousProcedureNode, context), type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), parameters = Parameters.fromAnonymousProcedureNode(anonymousProcedureNode, context), returnBlock = ReturnBlock.fromAnonymousProcedureNode(anonymousProcedureNode, context), anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(anonymousProcedureNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function stringFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var parametersNode = parametersNodeQuery(anonymousProcedureNode), typeTerminalNode = typeTerminalNodeQuery(anonymousProcedureNode), parametersString = context.nodeAsString(parametersNode), typeNode = typeTerminalNode, typeString = context.nodeAsString(typeNode), string = "".concat(typeString, " (").concat(parametersString, ") { ... }");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3QgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBzb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS9hbm9ueW1vdXNQcm9jZWR1cmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFub255bW91c1Byb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgLSB0eXBlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW10ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFub255bW91c1Byb2NlZHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMsIFJldHVybkJsb2NrLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gKCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInNvbUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW10ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJjYWxsIiwidmFsdWVzIiwiY29udGV4dCIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hWYWx1ZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyIsInZhbHVlIiwiZXZhbHVhdGUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tU29tZU5vZGUiLCJzb21lTm9kZSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwibmFtZSIsIlBhcmFtZXRlcnMiLCJkb20iLCJSZXR1cm5CbG9jayIsInN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007cUJBRUk7eUJBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUMsbUNBQ2hDQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUMsOEJBQ2xDRSxpQ0FBaUNGLElBQUFBLGdCQUFTLEVBQUM7SUFFakQsV0FBZUcsSUFBQUEsZ0JBQVcsdUNBQUM7YUFBTUMsbUJBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQURsQko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxTQUFTO1lBQ3ZCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE1BQU0sRUFBRUMsT0FBTztnQkFDbEIsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ1osTUFBTSxFQUFFLEdBQUc7Z0JBRWpEVyxRQUFRRSxLQUFLLENBQUMsQUFBQyxnQkFBd0MsT0FBekJELDBCQUF5QjtnQkFFdkQsSUFBSSxDQUFDVixVQUFVLENBQUNZLFdBQVcsQ0FBQ0osUUFBUUM7Z0JBRXBDLElBQU1JLFlBQVlDLElBQUFBLDJDQUFnQyxFQUFDTixRQUFRLElBQUksQ0FBQ1IsVUFBVSxFQUFFUztnQkFFNUUsSUFBTU0sUUFBUSxJQUFJLENBQUNkLFdBQVcsQ0FBQ2UsUUFBUSxDQUFDSCxXQUFXSixVQUM3Q1EsWUFBWUYsTUFBTVosT0FBTztnQkFFL0IsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBS2tCLFdBQVc7b0JBQzNCLElBQU1DLGNBQWNILE1BQU1JLFFBQVEsQ0FBQ1YsVUFDN0JXLFVBQVUsQUFBQyxPQUE4QkgsT0FBeEJDLGFBQVksY0FBd0NSLE9BQTVCTyxXQUFVLG9CQUFzRSxPQUFwRFAsMEJBQXlCLDZCQUFxQyxPQUFWLElBQUksQ0FBQ1gsSUFBSSxFQUFDLDBCQUNuSXNCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBWixRQUFRZSxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJkLDBCQUF5QjtnQkFFekQsT0FBT0s7WUFDVDs7OztZQUlPVSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVqQixPQUFPO2dCQUNuQyxJQUFNa0IsNkJBQTZCaEMsK0JBQStCK0IsV0FDNURFLHlCQUF5QkQsNEJBQ3pCRSxxQkFBcUJDLDZDQUE2Q0Ysd0JBQXdCbkI7Z0JBRWhHLE9BQU9vQjtZQUNUOzs7O0tBUkEsc0NBQU9FLFFBQU87QUFXaEIsU0FBU0QsNkNBQTZDRixzQkFBc0IsRUFBRW5CLE9BQU87SUFDbkYsSUFBUXVCLGFBQWdEQyxZQUFHLENBQW5ERCxZQUFZRSxjQUFvQ0QsWUFBRyxDQUF2Q0MsYUFBYXJDLHFCQUF1Qm9DLFlBQUcsQ0FBMUJwQyxvQkFDM0JDLFNBQVNxQyxpQ0FBaUNQLHdCQUF3Qm5CLFVBQ2xFVixPQUFPcUMsd0NBQXdDUix3QkFBd0JuQixVQUN2RVQsYUFBYWdDLFdBQVdLLDBCQUEwQixDQUFDVCx3QkFBd0JuQixVQUMzRVIsY0FBY2lDLFlBQVlHLDBCQUEwQixDQUFDVCx3QkFBd0JuQixVQUM3RW9CLHFCQUFxQixJQUFJaEMsbUJBQW1CQyxRQUFRQyxNQUFNQyxZQUFZQztJQUU1RSxPQUFPNEI7QUFDVDtBQUVBLFNBQVNPLHdDQUF3Q1Isc0JBQXNCLEVBQUVuQixPQUFPO0lBQzlFLElBQU02QixtQkFBbUI1QyxzQkFBc0JrQyx5QkFDekNXLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEekMsT0FBT3dDLHlCQUF5QixHQUFHO0lBRXpDLE9BQU94QztBQUNUO0FBRUEsU0FBU29DLGlDQUFpQ1Asc0JBQXNCLEVBQUVuQixPQUFPO0lBQ3ZFLElBQU1nQyxpQkFBaUJqRCxvQkFBb0JvQyx5QkFDckNVLG1CQUFtQjVDLHNCQUFzQmtDLHlCQUN6Q2MsbUJBQW1CakMsUUFBUWtDLFlBQVksQ0FBQ0YsaUJBQ3hDRyxXQUFXTixrQkFDWE8sYUFBYXBDLFFBQVFrQyxZQUFZLENBQUNDLFdBQ2xDOUMsU0FBUyxBQUFDLEdBQWlCNEMsT0FBZkcsWUFBVyxNQUFxQixPQUFqQkgsa0JBQWlCO0lBRWxELE9BQU81QztBQUNUIn0=
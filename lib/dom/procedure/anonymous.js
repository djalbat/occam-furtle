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
var parametersNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/parameters"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/@type"), someAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure"), anonymousProcedureCallAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/anonymousProcedureCall/anonymousProcedure");
var _default = (0, _dom.domAssigned)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, type, parameters, returnBlock) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.type = type;
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
                var someAnonymousProcedureNode = someAnonymousProcedureNodeQuery(someNode), anonymousProcedureNode = someAnonymousProcedureNode, anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
                return anonymousProcedure;
            }
        },
        {
            key: "fromAnonymousProcedureCallNode",
            value: function fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context) {
                var anonymousProcedureCallAnonymousProcedureNode = anonymousProcedureCallAnonymousProcedureNodeQuery(anonymousProcedureCallNode), anonymousProcedureNode = anonymousProcedureCallAnonymousProcedureNode, anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3QgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmVDYWxsL2Fub255bW91c1Byb2NlZHVyZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQW5vbnltb3VzUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXRlcnM7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGNhbGwodmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZS4uLmApO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLm1hdGNoVmFsdWVzKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyh2YWx1ZXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgYW5kIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMsIFJldHVybkJsb2NrLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gKCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFBhcmFtZXRlcnMiLCJwYXJhbXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImNhbGwiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaFZhbHVlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwidmFsdWUiLCJldmFsdWF0ZSIsInZhbHVlVHlwZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21Tb21lTm9kZSIsInNvbWVOb2RlIiwic29tZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJmcm9tQW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSIsImFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwibmFtZSIsIlBhcmFtZXRlcnMiLCJkb20iLCJSZXR1cm5CbG9jayIsInN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFB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
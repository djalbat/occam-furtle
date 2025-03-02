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
var parametersNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/parameters"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/@type"), someAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure"), everyAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/every/anonymousProcedure"), reduceAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/reduce/anonymousProcedure"), anonymousProcedureCallAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/anonymousProcedureCall/anonymousProcedure");
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
                var variables = (0, _procedure.variablesFromValuesAndParameters)(values, this.parameters, context), value = this.returnBlock.evaluate(variables, context), valueType = value.getType();
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
            key: "fromEveryNode",
            value: function fromEveryNode(everyNode, context) {
                var everyAnonymousProcedureNode = everyAnonymousProcedureNodeQuery(everyNode), anonymousProcedureNode = everyAnonymousProcedureNode, anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
                return anonymousProcedure;
            }
        },
        {
            key: "fromReduceNode",
            value: function fromReduceNode(reduceNode, context) {
                var reduceAnonymousProcedureNode = reduceAnonymousProcedureNodeQuery(reduceNode), anonymousProcedureNode = reduceAnonymousProcedureNode, anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3QgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXZlcnkvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9hbm9ueW1vdXNQcm9jZWR1cmVcIiksXG4gICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fub255bW91c1Byb2NlZHVyZUNhbGwvYW5vbnltb3VzUHJvY2VkdXJlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbCh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgYW5kIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMsIFJldHVybkJsb2NrLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gKCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkiLCJldmVyeUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsInJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsImFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFub255bW91c1Byb2NlZHVyZSIsInN0cmluZyIsInR5cGUiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0UGFyYW1ldGVycyIsInBhcmFtdGVycyIsImdldFJldHVybkJsb2NrIiwiY2FsbCIsInZhbHVlcyIsImNvbnRleHQiLCJhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsIm1hdGNoVmFsdWVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMiLCJ2YWx1ZSIsImV2YWx1YXRlIiwidmFsdWVUeXBlIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiZnJvbVNvbWVOb2RlIiwic29tZU5vZGUiLCJzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImZyb21FdmVyeU5vZGUiLCJldmVyeU5vZGUiLCJldmVyeUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJmcm9tUmVkdWNlTm9kZSIsInJlZHVjZU5vZGUiLCJyZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsIm5hbWUiLCJQYXJhbWV0ZXJzIiwiZG9tIiwiUmV0dXJuQmxvY2siLCJzdHJpbmdGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc1N0cmluZyIsIm5vZGVBc1N0cmluZyIsInR5cGVOb2RlIiwidHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzJEQWRnQjtnRUFDTTtxQkFFSTt5QkFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDaENDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDbENFLGtDQUFrQ0YsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDNUNHLG1DQUFtQ0gsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NJLG9DQUFvQ0osSUFBQUEsZ0JBQVMsRUFBQywrQkFDOUNLLG9EQUFvREwsSUFBQUEsZ0JBQVMsRUFBQztJQUVwRSxXQUFlTSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNDLFNBQVM7WUFDdkI7OztZQUVBQyxLQUFBQTttQkFB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
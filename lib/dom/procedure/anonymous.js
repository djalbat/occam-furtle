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
    var Parameters = _dom.default.Parameters, ReturnBlock = _dom.default.ReturnBlock, AnonymousProcedure = _dom.default.AnonymousProcedure, returnBlock = ReturnBlock.fromAnonymousProcedureNode(anonymousProcedureNode, context), parameters = Parameters.fromAnonymousProcedureNode(anonymousProcedureNode, context), type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), string = stringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context), anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
    return anonymousProcedure;
}
function stringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context) {
    var typeString = type, parametersString = parameters.getString(), returnBlockString = returnBlock.getString(), string = "".concat(typeString, " (").concat(parametersString, ") ").concat(returnBlockString);
    return string;
}
function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(anonymousProcedureNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3QgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXZlcnkvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9hbm9ueW1vdXNQcm9jZWR1cmVcIiksXG4gICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fub255bW91c1Byb2NlZHVyZUNhbGwvYW5vbnltb3VzUHJvY2VkdXJlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbCh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgYW5kIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IGFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMsIFJldHVybkJsb2NrLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaywgY29udGV4dCkge1xuICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZSwgIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9jay5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gKCR7cGFyYW1ldGVyc1N0cmluZ30pICR7cmV0dXJuQmxvY2tTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwiZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkiLCJyZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldFBhcmFtZXRlcnMiLCJwYXJhbXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImNhbGwiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaFZhbHVlcyIsInZhcmlhYmxlcyIsInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwidmFsdWUiLCJldmFsdWF0ZSIsInZhbHVlVHlwZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21Tb21lTm9kZSIsInNvbWVOb2RlIiwic29tZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJmcm9tRXZlcnlOb2RlIiwiZXZlcnlOb2RlIiwiZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbVJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImZyb21Bbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSIsImFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGUiLCJuYW1lIiwiUGFyYW1ldGVycyIsImRvbSIsIlJldHVybkJsb2NrIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJzdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInR5cGVTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRD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
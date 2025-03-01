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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3QgcGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXZlcnkvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9hbm9ueW1vdXNQcm9jZWR1cmVcIiksXG4gICAgICBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fub255bW91c1Byb2NlZHVyZUNhbGwvYW5vbnltb3VzUHJvY2VkdXJlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbCh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBhbmQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlICBkbyBub3QgbWF0Y2guYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBbm9ueW1vdXNQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVNvbWVOb2RlKHNvbWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc29tZUFub255bW91c1Byb2NlZHVyZU5vZGUgPSBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5KHNvbWVOb2RlKSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZUFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV2ZXJ5Tm9kZShldmVyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBldmVyeUFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShldmVyeU5vZGUpLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZU5vZGUgPSBldmVyeUFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZHVjZU5vZGUocmVkdWNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlKGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlKSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGUsICAvLy9cbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhbm9ueW1vdXNQcm9jZWR1cmVGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycywgUmV0dXJuQmxvY2ssIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGFub255bW91c1Byb2NlZHVyZSA9IG5ldyBBbm9ueW1vdXNQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIGFub255bW91c1Byb2NlZHVyZTtcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZVRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICB0eXBlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJwYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwic29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsImV2ZXJ5QW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwicmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlQ2FsbEFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW10ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJjYWxsIiwidmFsdWVzIiwiY29udGV4dCIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hWYWx1ZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyIsInZhbHVlIiwiZXZhbHVhdGUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tU29tZU5vZGUiLCJzb21lTm9kZSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5Tm9kZSIsImV2ZXJ5QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJmcm9tQW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsTm9kZSIsImFub255bW91c1Byb2NlZHVyZUNhbGxBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwibmFtZSIsIlBhcmFtZXRlcnMiLCJkb20iLCJSZXR1cm5CbG9jayIsInN0cmluZ0Zyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwidHlwZUZyb21Qcm9jZWR1cmVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHlwZU5vZGUiLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7MkRBZGdCO2dFQUNNO3FCQUVJO3lCQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTUEsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLG1DQUNoQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLDhCQUNsQ0Usa0NBQWtDRixJQUFBQSxnQkFBUyxFQUFDLDZCQUM1Q0csbUNBQW1DSCxJQUFBQSxnQkFBUyxFQUFDLDhCQUM3Q0ksb0NBQW9DSixJQUFBQSxnQkFBUyxFQUFDLCtCQUM5Q0ssb0RBQW9ETCxJQUFBQSxnQkFBUyxFQUFDO0lBRXBFLFdBQWVNLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbEJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsU0FBUztZQUN2Qjs7O1lBRUFDLEtBQUFBO21C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
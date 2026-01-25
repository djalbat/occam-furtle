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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/@type"), someAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure"), everyAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/every/anonymousProcedure"), reduceAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/reduce/anonymousProcedure");
var _default = (0, _elements.define)((_AnonymousProcedure = /*#__PURE__*/ function() {
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
            value: function call(expressions, context) {
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                this.parameters.matchExpressions(expressions, context);
                var variables = (0, _procedure.variablesFromExpressionsAndParameters)(expressions, this.parameters, context), expression = this.returnBlock.evaluate(variables, context), expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type and the '").concat(anonymousProcedureString, "' anonymous procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
                return expression;
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
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
    var Parameters = _elements.default.Parameters, ReturnBlock = _elements.default.ReturnBlock, AnonymousProcedure = _elements.default.AnonymousProcedure, returnBlock = ReturnBlock.fromAnonymousProcedureNode(anonymousProcedureNode, context), parameters = Parameters.fromAnonymousProcedureNode(anonymousProcedureNode, context), type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context), string = stringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context), anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vcHJvY2VkdXJlXCI7XG5cbmNvbnN0IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvQHR5cGVcIiksXG4gICAgICBzb21lQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NvbWUvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXZlcnkvYW5vbnltb3VzUHJvY2VkdXJlXCIpLFxuICAgICAgcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZHVjZS9hbm9ueW1vdXNQcm9jZWR1cmVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbChleHByZXNzaW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaEV4cHJlc3Npb25zKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMoZXhwcmVzc2lvbnMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMsIFJldHVybkJsb2NrLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2sodHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2ssIGNvbnRleHQpLFxuICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBuZXcgQW5vbnltb3VzUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBhbm9ueW1vdXNQcm9jZWR1cmU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLCAgLy8vXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLmdldFN0cmluZygpLFxuICAgICAgICByZXR1cm5CbG9ja1N0cmluZyA9IHJldHVybkJsb2NrLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAoJHtwYXJhbWV0ZXJzU3RyaW5nfSkgJHtyZXR1cm5CbG9ja1N0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsImV2ZXJ5QW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwicmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW10ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJjYWxsIiwiZXhwcmVzc2lvbnMiLCJjb250ZXh0IiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaEV4cHJlc3Npb25zIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbUV4cHJlc3Npb25zQW5kUGFyYW1ldGVycyIsImV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImV4cHJlc3Npb25UeXBlIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tU29tZU5vZGUiLCJzb21lTm9kZSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5Tm9kZSIsImV2ZXJ5QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJuYW1lIiwiUGFyYW1ldGVycyIsImVsZW1lbnRzIiwiUmV0dXJuQmxvY2siLCJmcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsInN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidHlwZVN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJyZXR1cm5CbG9ja1N0cmluZyIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dFQVpxQjtnRUFDQztxQkFHSTt5QkFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDbENDLGtDQUFrQ0QsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDNUNFLG1DQUFtQ0YsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDN0NHLG9DQUFvQ0gsSUFBQUEsZ0JBQVMsRUFBQztJQUVwRCxXQUFlSSxJQUFBQSxnQkFBTSx1Q0FBQzthQUFNQyxtQkFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEdkJKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsU0FBUztZQUN2Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUks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
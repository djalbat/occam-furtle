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
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/@type"), someAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure"), everyAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/every/anonymousProcedure"), reduceAnonymousProcedureNodeQuery = (0, _query.nodeQuery)("/reduce/anonymousProcedure");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tRXhwcmVzc2lvbnNBbmRQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL3Byb2NlZHVyZVwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL0B0eXBlXCIpLFxuICAgICAgc29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zb21lL2Fub255bW91c1Byb2NlZHVyZVwiKSxcbiAgICAgIGV2ZXJ5QW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V2ZXJ5L2Fub255bW91c1Byb2NlZHVyZVwiKSxcbiAgICAgIHJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWR1Y2UvYW5vbnltb3VzUHJvY2VkdXJlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtdGVycztcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgY2FsbChleHByZXNzaW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaEV4cHJlc3Npb25zKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMoZXhwcmVzc2lvbnMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gc29tZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeShzb21lTm9kZSksXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlTm9kZSA9IHNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FdmVyeU5vZGUoZXZlcnlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkoZXZlcnlOb2RlKSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gZXZlcnlBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWR1Y2VOb2RlKHJlZHVjZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlID0gcmVkdWNlQW5vbnltb3VzUHJvY2VkdXJlTm9kZVF1ZXJ5KHJlZHVjZU5vZGUpLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZU5vZGUgPSByZWR1Y2VBbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCAgLy8vXG4gICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYW5vbnltb3VzUHJvY2VkdXJlRnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMsIFJldHVybkJsb2NrLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrLCBjb250ZXh0KSxcbiAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHR5cGUsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKTtcblxuICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaywgY29udGV4dCkge1xuICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZSwgIC8vL1xuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9jay5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gKCR7cGFyYW1ldGVyc1N0cmluZ30pICR7cmV0dXJuQmxvY2tTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlUXVlcnkiLCJldmVyeUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsInJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRQYXJhbWV0ZXJzIiwicGFyYW10ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJjYWxsIiwiZXhwcmVzc2lvbnMiLCJjb250ZXh0IiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaEV4cHJlc3Npb25zIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbUV4cHJlc3Npb25zQW5kUGFyYW1ldGVycyIsImV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImV4cHJlc3Npb25UeXBlIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tU29tZU5vZGUiLCJzb21lTm9kZSIsInNvbWVBbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZSIsImFub255bW91c1Byb2NlZHVyZUZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiZnJvbUV2ZXJ5Tm9kZSIsImV2ZXJ5Tm9kZSIsImV2ZXJ5QW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImZyb21SZWR1Y2VOb2RlIiwicmVkdWNlTm9kZSIsInJlZHVjZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJuYW1lIiwiUGFyYW1ldGVycyIsImRvbSIsIlJldHVybkJsb2NrIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJzdHJpbmdGcm9tVHlwZVBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayIsInR5cGVTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyREFaZ0I7Z0VBQ007cUJBRUk7eUJBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsOEJBQ2xDQyxrQ0FBa0NELElBQUFBLGdCQUFTLEVBQUMsNkJBQzVDRSxtQ0FBbUNGLElBQUFBLGdCQUFTLEVBQUMsOEJBQzdDRyxvQ0FBb0NILElBQUFBLGdCQUFTLEVBQUM7SUFFcEQsV0FBZUksSUFBQUEsZ0JBQVcsdUNBQUM7YUFBTUMsbUJBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQURsQko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDQyxTQUFTO1lBQ3ZCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lB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
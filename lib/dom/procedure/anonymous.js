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
var nonsenseNodesQuery = (0, _query.nodesQuery)("/some/anonymousProcedure/returnBlock/nonsense"), parametersNodeQuery = (0, _query.nodeQuery)("/some/anonymousProcedure/parameters");
var _default = (0, _dom.domAssigned)((_AnonymousProcedure = /*#__PURE__*/ function() {
    function AnonymousProcedure(string, parameters, nonsensical, returnBlock) {
        _class_call_check(this, AnonymousProcedure);
        this.string = string;
        this.parameters = parameters;
        this.nonsensical = nonsensical;
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
            key: "getParameters",
            value: function getParameters() {
                return this.paramters;
            }
        },
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                return this.nonsensical;
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
                debugger;
                var anonymousProcedureString = this.string; ///
                context.trace("Calling the '".concat(anonymousProcedureString, "' anonymous procedure..."));
                if (this.nonsensical) {
                    var message = "The '".concat(anonymousProcedureString, "' anonymous procedure is nonsensical."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.parameters.matchValues(values, context);
                var variables = (0, _procedure.variablesFromValuesAndParameters)(values, this.parameters, context);
                this.returnBlock.evaluate(variables, context);
                context.debug("...called the '".concat(anonymousProcedureString, "' anonymous procedure."));
            }
        }
    ], [
        {
            key: "fromSomeNode",
            value: function fromSomeNode(someNode, context) {
                var ReturnBlock = _dom.default.ReturnBlock, Parameters = _dom.default.Parameters, string = stringFromSomeNode(someNode, context), parameters = Parameters.fromSomeNode(someNode, context), nonsensical = nonsensicalFromSomeNode(someNode, context), returnBlock = ReturnBlock.fromSomeNode(someNode, context), anonymousProcedureDeclaration = new AnonymousProcedure(string, parameters, nonsensical, returnBlock);
                return anonymousProcedureDeclaration;
            }
        }
    ]);
    return AnonymousProcedure;
}(), _define_property(_AnonymousProcedure, "name", "AnonymousProcedure"), _AnonymousProcedure));
function stringFromSomeNode(someNode, context) {
    var parametersNode = parametersNodeQuery(someNode), parametersString = context.nodeAsString(parametersNode), string = "(".concat(parametersString, ") { ... }");
    return string;
}
function nonsensicalFromSomeNode(someNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(someNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcHJvY2VkdXJlL2Fub255bW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi9wcm9jZWR1cmVcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zb21lL2Fub255bW91c1Byb2NlZHVyZS9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS9hbm9ueW1vdXNQcm9jZWR1cmUvcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQW5vbnltb3VzUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgcmV0dXJuQmxvY2spIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXRlcnM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG5cbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHthbm9ueW1vdXNQcm9jZWR1cmVTdHJpbmd9JyBhbm9ueW1vdXMgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICBpZiAodGhpcy5ub25zZW5zaWNhbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZSBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLm1hdGNoVmFsdWVzKHZhbHVlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyh2YWx1ZXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUmV0dXJuQmxvY2ssIFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IEFub255bW91c1Byb2NlZHVyZShzdHJpbmcsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jayk7XG5cbiAgICByZXR1cm4gYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU29tZU5vZGUoc29tZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KHNvbWVOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYCgke3BhcmFtZXRlcnNTdHJpbmd9KSB7IC4uLiB9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KHNvbWVOb2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuIl0sIm5hbWVzIjpbIm5vbnNlbnNlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJzdHJpbmciLCJwYXJhbWV0ZXJzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFBhcmFtZXRlcnMiLCJwYXJhbXRlcnMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuQmxvY2siLCJjYWxsIiwidmFsdWVzIiwiY29udGV4dCIsImFub255bW91c1Byb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibWF0Y2hWYWx1ZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyIsImV2YWx1YXRlIiwiZGVidWciLCJmcm9tU29tZU5vZGUiLCJzb21lTm9kZSIsIlJldHVybkJsb2NrIiwiZG9tIiwiUGFyYW1ldGVycyIsInN0cmluZ0Zyb21Tb21lTm9kZSIsIm5vbnNlbnNpY2FsRnJvbVNvbWVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJuYW1lIiwicGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtnRUFDTTtxQkFHZ0I7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElB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
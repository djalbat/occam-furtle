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
var _Parameters;
var parameterNodesQuery = (0, _query.nodesQuery)("/parameters/parameter"), procedureDeclarationParametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters");
var _default = (0, _dom.domAssigned)((_Parameters = /*#__PURE__*/ function() {
    function Parameters(string, array) {
        _class_call_check(this, Parameters);
        this.string = string;
        this.array = array;
    }
    _create_class(Parameters, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "forEachParameter",
            value: function forEachParameter(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "matchValues",
            value: function matchValues(values, context) {
                var valuesString = values.getString(), parametersString = this.getString();
                context.trace("Matching the '".concat(valuesString, "' values against the '").concat(parametersString, "' parameters..."));
                var valuesLength = values.getLength(), parametersLength = this.getLength();
                if (valuesLength !== parametersLength) {
                    var message = "The '".concat(valuesString, "' values and '").concat(parametersString, "' parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachParameter(function(parameter, index) {
                    var value = values.getValue(index);
                    parameter.matchValue(value, context);
                });
                context.debug("...matched the '".concat(valuesString, "' values against the '").concat(parametersString, "' parameters."));
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var parameters = null;
                var procedureDeclarationParametersNode = procedureDeclarationParametersNodeQuery(procedureDeclarationNode);
                if (procedureDeclarationParametersNode !== null) {
                    var parametersNode = procedureDeclarationParametersNode, node = parametersNode, string = context.nodeAsString(node), parameterNodes = parameterNodesQuery(parametersNode), array = arrayFromParameterNodes(parameterNodes, context);
                    parameters = new Parameters(string, array);
                }
                return parameters;
            }
        }
    ]);
    return Parameters;
}(), _define_property(_Parameters, "name", "Parameters"), _Parameters));
function arrayFromParameterNodes(parameterNodes, context) {
    var Parameter = _dom.default.Parameter, array = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlcnMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGZvckVhY2hQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoVmFsdWVzKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt2YWx1ZXNTdHJpbmd9JyB2YWx1ZXMgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmICh2YWx1ZXNMZW5ndGggIT09IHBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlc1N0cmluZ30nIHZhbHVlcyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXMuZ2V0VmFsdWUoaW5kZXgpO1xuXG4gICAgICBwYXJhbWV0ZXIubWF0Y2hWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHt2YWx1ZXNTdHJpbmd9JyB2YWx1ZXMgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyc1wiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwYXJhbWV0ZXJzID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmIChwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVycyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJmb3JFYWNoUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwibWF0Y2hWYWx1ZXMiLCJ2YWx1ZXMiLCJjb250ZXh0IiwidmFsdWVzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInBhcmFtZXRlciIsImluZGV4IiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1hdGNoVmFsdWUiLCJkZWJ1ZyIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbWV0ZXJzIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInBhcmFtZXRlck5vZGVzIiwiYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMiLCJuYW1lIiwiUGFyYW1ldGVyIiwiZG9tIiwibWFwIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7Z0VBQ007cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ2pDQywwQ0FBMENDLElBQUFBLGdC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
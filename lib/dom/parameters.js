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
var _constants = require("../constants");
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
var parameterNodesQuery = (0, _query.nodesQuery)("/parameters/parameter"), arrayAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/parameters"), anonymousProcedureParametersNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/parameters"), procedureDeclarationParametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters");
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
            key: "getParameter",
            value: function getParameter(index) {
                var parameter = this.array[index] || null;
                return parameter;
            }
        },
        {
            key: "forEachParameter",
            value: function forEachParameter(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "matchExpressions",
            value: function matchExpressions(expressions, context) {
                var expressionsString = expressions.getString(), parametersString = this.string; ///
                context.trace("Matching the ".concat(expressionsString, " expressions against the '").concat(parametersString, "' parameters..."));
                var expressionsLength = expressions.getLength(), parametersLength = this.getLength();
                if (expressionsLength !== parametersLength) {
                    var message = "The ".concat(expressionsString, " expressions and '").concat(parametersString, "' parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var expression = expressions.getExpression(index);
                        parameter.matchExpression(expression, context);
                    }
                });
                context.debug("...matched the ".concat(expressionsString, " expressions against the '").concat(parametersString, "' parameters."));
            }
        }
    ], [
        {
            key: "fromArrayAssignmentNode",
            value: function fromArrayAssignmentNode(arrayAssignmentNode, context) {
                var arrayAssignmentParametersNode = arrayAssignmentParametersNodeQuery(arrayAssignmentNode), parametersNode = arrayAssignmentParametersNode, parameters = parametersFromParametersNode(parametersNode, context);
                return parameters;
            }
        },
        {
            key: "fromAnonymousProcedureNode",
            value: function fromAnonymousProcedureNode(anonymousProcedureNode, context) {
                var anonymousProcedureParametersNode = anonymousProcedureParametersNodeQuery(anonymousProcedureNode), parametersNode = anonymousProcedureParametersNode, parameters = parametersFromParametersNode(parametersNode, context);
                return parameters;
            }
        },
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclarationParametersNode = procedureDeclarationParametersNodeQuery(procedureDeclarationNode), parametersNode = procedureDeclarationParametersNode, parameters = parametersFromParametersNode(parametersNode, context);
                return parameters;
            }
        }
    ]);
    return Parameters;
}(), _define_property(_Parameters, "name", "Parameters"), _Parameters));
function parametersFromParametersNode(parametersNode, context) {
    var Parameters = _dom.default.Parameters, array = arrayFromParametersNode(parametersNode, context), string = stringFromArray(array, context), parameters = new Parameters(string, array);
    return parameters;
}
function arrayFromParametersNode(parametersNode, context) {
    var parameterNodes = parameterNodesQuery(parametersNode), array = parameterNodes.map(function(parameterNode) {
        var Parameter = _dom.default.Parameter, parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return array;
}
function stringFromArray(array, context) {
    var parametersString = array.reduce(function(parametersString, parameter) {
        var parameterString = parameter !== null ? parameter.getString() : _constants.UNDERSCORE;
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, ", ").concat(parameterString);
        return parametersString;
    }, null), string = parametersString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgVU5ERVJTQ09SRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wYXJhbWV0ZXJzL3BhcmFtZXRlclwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3BhcmFtZXRlcnNcIiksXG4gICAgICBhbm9ueW1vdXNQcm9jZWR1cmVQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fub255bW91c1Byb2NlZHVyZS9wYXJhbWV0ZXJzXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFBhcmFtZXRlcnMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcihpbmRleCkge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG5cbiAgZm9yRWFjaFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hFeHByZXNzaW9ucyhleHByZXNzaW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25zU3RyaW5nID0gZXhwcmVzc2lvbnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke2V4cHJlc3Npb25zU3RyaW5nfSBleHByZXNzaW9ucyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbnNMZW5ndGggPSBleHByZXNzaW9ucy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChleHByZXNzaW9uc0xlbmd0aCAhPT0gcGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uc1N0cmluZ30gZXhwcmVzc2lvbnMgYW5kICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGFyZSBub3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25zLmdldEV4cHJlc3Npb24oaW5kZXgpO1xuXG4gICAgICAgIHBhcmFtZXRlci5tYXRjaEV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke2V4cHJlc3Npb25zU3RyaW5nfSBleHByZXNzaW9ucyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJzXCI7XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVQYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gYXJyYXkucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSAocGFyYW1ldGVyICE9PSBudWxsKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlci5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVOREVSU0NPUkU7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbWV0ZXJzU3RyaW5nfSwgJHtwYXJhbWV0ZXJTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGVRdWVyeSIsInByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVycyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRQYXJhbWV0ZXIiLCJpbmRleCIsInBhcmFtZXRlciIsImZvckVhY2hQYXJhbWV0ZXIiLCJjYWxsYmFjayIsImZvckVhY2giLCJtYXRjaEV4cHJlc3Npb25zIiwiZXhwcmVzc2lvbnMiLCJjb250ZXh0IiwiZXhwcmVzc2lvbnNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uc0xlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJleHByZXNzaW9uIiwiZ2V0RXhwcmVzc2lvbiIsIm1hdGNoRXhwcmVzc2lvbiIsImRlYnVnIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsIm5hbWUiLCJkb20iLCJhcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlck5vZGVzIiwibWFwIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsImZyb21QYXJhbWV0ZXJOb2RlIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIiwiVU5ERVJTQ09SRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCO2dFQUNNO3lCQUVLO3FCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ2pDQyxxQ0FBcUNDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQy9DQyx3Q0FBd0NELElBQUFBLGdCQUFTLEVBQUMsbUNBQ2xERSwwQ0FBMENGLElBQUFBLGdCQUFTLEVBQUM7SUFFMUQsV0FBZUcsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLEtBQUs7Z0JBQ2hCLElBQU1DLFlBQVksSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFBSTtnQkFF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
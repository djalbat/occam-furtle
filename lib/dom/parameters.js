"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    stringFromArray: function() {
        return stringFromArray;
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
var parameterNodesQuery = (0, _query.nodesQuery)("/parameters/parameter"), someParametersNodeQuery = (0, _query.nodeQuery)("/some/parameters"), arrayAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/parameters"), objectAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/objectAssignment/parameters"), procedureDeclarationParametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters");
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
            key: "someParameter",
            value: function someParameter(callback) {
                return this.array.some(callback);
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
                var valuesString = values.getString(), parametersString = this.string; ///
                context.trace("Matching the ".concat(valuesString, " values against the '").concat(parametersString, "' parameters..."));
                var valuesLength = values.getLength(), parametersLength = this.getLength();
                if (valuesLength !== parametersLength) {
                    var message = "The ".concat(valuesString, " values and '").concat(parametersString, "' parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var value = values.getValue(index);
                        parameter.matchValue(value, context);
                    }
                });
                context.debug("...matched the ".concat(valuesString, " values against the '").concat(parametersString, "' parameters."));
            }
        },
        {
            key: "matchParameter",
            value: function matchParameter(parameter, context) {
                var parameterString = parameter.getString(), parametersString = this.string; ///
                context.trace("Matching the '".concat(parameterString, "' parameter against the '").concat(parametersString, "' parameters..."));
                var parameterA = parameter, parameterMatches = this.someParameter(function(parameter) {
                    if (parameter !== null) {
                        var parameterB = parameter, parameterBMatchesParameterA = parameterA.matchParameter(parameterB, context);
                        if (parameterBMatchesParameterA) {
                            return true;
                        }
                    }
                });
                if (!parameterMatches) {
                    var message = "The '".concat(parameterString, "' parameter does not match any of the '").concat(parametersString, "' parameters."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(parameterString, "' parameter against the '").concat(parametersString, "' parameters."));
            }
        },
        {
            key: "matchParameters",
            value: function matchParameters(parameters, context) {
                var _this = this;
                parameters.forEachParameter(function(parameter) {
                    if (parameter !== null) {
                        _this.matchParameter(parameter, context);
                    }
                });
            }
        }
    ], [
        {
            key: "fromSomeNode",
            value: function fromSomeNode(someNode, context) {
                var Parameter = _dom.default.Parameter, someParametersNode = someParametersNodeQuery(someNode), parameterNode = someParametersNode, parameterNodes = parameterNodesQuery(parameterNode), array = parameterNodes.map(function(parameterNode) {
                    var parameter = Parameter.fromParameterNode(parameterNode, context);
                    return parameter;
                }), string = stringFromArray(array, context), parameters = new Parameters(string, array);
                return parameters;
            }
        },
        {
            key: "fromStringAndArray",
            value: function fromStringAndArray(string, array) {
                var parameters = new Parameters(string, array);
                return parameters;
            }
        },
        {
            key: "fromArrayAssignmentNode",
            value: function fromArrayAssignmentNode(arrayAssignmentNode, context) {
                var arrayAssignmentParametersNode = arrayAssignmentParametersNodeQuery(arrayAssignmentNode), parametersNode = arrayAssignmentParametersNode, node = parametersNode, string = context.nodeAsString(node), parameterNodes = parameterNodesQuery(parametersNode), array = arrayFromParameterNodes(parameterNodes, context), parameters = new Parameters(string, array);
                return parameters;
            }
        },
        {
            key: "fromObjectAssignmentNode",
            value: function fromObjectAssignmentNode(objectAssignmentNode, context) {
                var objectAssignmentParametersNode = objectAssignmentParametersNodeQuery(objectAssignmentNode), parametersNode = objectAssignmentParametersNode, node = parametersNode, string = context.nodeAsString(node), parameterNodes = parameterNodesQuery(parametersNode), array = arrayFromParameterNodes(parameterNodes, context), parameters = new Parameters(string, array);
                return parameters;
            }
        },
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
function stringFromArray(array, context) {
    var parametersString = array.reduce(function(parametersString, parameter) {
        var parameterString = parameter.getString();
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, ", ").concat(parameterString);
        return parametersString;
    }, null), string = parametersString; ///
    return string;
}
function arrayFromParameterNodes(parameterNodes, context) {
    var Parameter = _dom.default.Parameter, array = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgc29tZVBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc29tZS9wYXJhbWV0ZXJzXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIHNvbWVQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBtYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZXNTdHJpbmcgPSB2YWx1ZXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAodmFsdWVzTGVuZ3RoICE9PSBwYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFuZCAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzLmdldFZhbHVlKGluZGV4KTtcblxuICAgICAgICBwYXJhbWV0ZXIubWF0Y2hWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJBID0gcGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJNYXRjaGVzID0gdGhpcy5zb21lUGFyYW1ldGVyKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyQiA9IHBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSA9IHBhcmFtZXRlckEubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcnMocGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIHBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJzXCI7XG5cbiAgc3RhdGljIGZyb21Tb21lTm9kZShzb21lTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgICAgc29tZVBhcmFtZXRlcnNOb2RlID0gc29tZVBhcmFtZXRlcnNOb2RlUXVlcnkoc29tZU5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGUgPSBzb21lUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICBhcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuZEFycmF5KHN0cmluZywgYXJyYXkpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcGFyYW1ldGVycyA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwic29tZVBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UGFyYW1ldGVyIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJzb21lUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yRWFjaFBhcmFtZXRlciIsImZvckVhY2giLCJtYXRjaFZhbHVlcyIsInZhbHVlcyIsImNvbnRleHQiLCJ2YWx1ZXNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZXNMZW5ndGgiLCJwYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1hdGNoVmFsdWUiLCJkZWJ1ZyIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyQSIsInBhcmFtZXRlck1hdGNoZXMiLCJwYXJhbWV0ZXJCIiwicGFyYW1ldGVyQk1hdGNoZXNQYXJhbWV0ZXJBIiwibWF0Y2hQYXJhbWV0ZXJzIiwicGFyYW1ldGVycyIsImZyb21Tb21lTm9kZSIsInNvbWVOb2RlIiwiUGFyYW1ldGVyIiwiZG9tIiwic29tZVBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5vZGVzIiwibWFwIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJmcm9tU3RyaW5nQW5kQXJyYXkiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImFycmF5RnJvbVBhcmFtZXRlck5vZGVzIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsIm5hbWUiLCJyZWR1Y2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNBLE9BOEpHO2VBOUpIOztJQWdLZ0JBLGVBQWU7ZUFBZkE7OzsyREE1S0E7Z0VBQ007cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
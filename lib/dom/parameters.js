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
var parameterNodesQuery = (0, _query.nodesQuery)("/parameters/parameter"), arrayAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/parameters"), objectAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/objectAssignment/parameters"), anonymousProcedureParametersNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/parameters"), procedureDeclarationParametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters");
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
            key: "fromAnonymousProcedureNode",
            value: function fromAnonymousProcedureNode(anonymousProcedureNode, context) {
                var Parameter = _dom.default.Parameter, anonymousProcedureParametersNode = anonymousProcedureParametersNodeQuery(anonymousProcedureNode), parameterNode = anonymousProcedureParametersNode, parameterNodes = parameterNodesQuery(parameterNode), array = parameterNodes.map(function(parameterNode) {
                    var parameter = Parameter.fromParameterNode(parameterNode, context);
                    return parameter;
                }), string = stringFromArray(array, context), parameters = new Parameters(string, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVycyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHZhbHVlc0xlbmd0aCAhPT0gcGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5nZXRWYWx1ZShpbmRleCk7XG5cbiAgICAgICAgcGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyQSA9IHBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZVBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlckIgPSBwYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEgPSBwYXJhbWV0ZXJBLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlckIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFwYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXJzKHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBwYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kQXJyYXkoc3RyaW5nLCBhcnJheSkge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmVQYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlLCAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHBhcmFtZXRlcnMgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgaWYgKHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gYXJyYXkucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbWV0ZXJzU3RyaW5nfSwgJHtwYXJhbWV0ZXJTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJzdHJpbmdGcm9tQXJyYXkiLCJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSIsImFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UGFyYW1ldGVyIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJzb21lUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yRWFjaFBhcmFtZXRlciIsImZvckVhY2giLCJtYXRjaFZhbHVlcyIsInZhbHVlcyIsImNvbnRleHQiLCJ2YWx1ZXNTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZXNMZW5ndGgiLCJwYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWUiLCJnZXRWYWx1ZSIsIm1hdGNoVmFsdWUiLCJkZWJ1ZyIsIm1hdGNoUGFyYW1ldGVyIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyQSIsInBhcmFtZXRlck1hdGNoZXMiLCJwYXJhbWV0ZXJCIiwicGFyYW1ldGVyQk1hdGNoZXNQYXJhbWV0ZXJBIiwibWF0Y2hQYXJhbWV0ZXJzIiwicGFyYW1ldGVycyIsImZyb21TdHJpbmdBbmRBcnJheSIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwicGFyYW1ldGVyTm9kZXMiLCJhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiUGFyYW1ldGVyIiwiZG9tIiwiYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJOb2RlIiwibWFwIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsIm5hbWUiLCJyZWR1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
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
var parametersNodeQuery = (0, _query.nodeQuery)("/forEachLoop/anonymousProcedure/parameters"), parameterNodesQuery = (0, _query.nodesQuery)("/parameters/parameter"), arrayAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/parameters"), objectAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/objectAssignment/parameters"), procedureDeclarationParametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters");
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
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode, context) {
                var Parameter = _dom.default.Parameter, parametersNode = parametersNodeQuery(forEachLoopNode), parameterNodes = parameterNodesQuery(parametersNode), array = parameterNodes.map(function(parameterNode) {
                    var parameter = Parameter.fromParameterNode(parameterNode, context);
                    return parameter;
                }), string = stringFromArray(array, context), parameters = new Parameters(string, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZm9yRWFjaExvb3AvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wYXJhbWV0ZXJzL3BhcmFtZXRlclwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3BhcmFtZXRlcnNcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3BhcmFtZXRlcnNcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVycyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHZhbHVlc0xlbmd0aCAhPT0gcGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5nZXRWYWx1ZShpbmRleCk7XG5cbiAgICAgICAgcGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyQSA9IHBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZVBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlckIgPSBwYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEgPSBwYXJhbWV0ZXJBLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlckIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFwYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXJzKHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBwYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kQXJyYXkoc3RyaW5nLCBhcnJheSkge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcGFyYW1ldGVycyA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSIsInByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVycyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRQYXJhbWV0ZXIiLCJpbmRleCIsInBhcmFtZXRlciIsInNvbWVQYXJhbWV0ZXIiLCJjYWxsYmFjayIsInNvbWUiLCJmb3JFYWNoUGFyYW1ldGVyIiwiZm9yRWFjaCIsIm1hdGNoVmFsdWVzIiwidmFsdWVzIiwiY29udGV4dCIsInZhbHVlc1N0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsInZhbHVlc0xlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YWx1ZSIsImdldFZhbHVlIiwibWF0Y2hWYWx1ZSIsImRlYnVnIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJBIiwicGFyYW1ldGVyTWF0Y2hlcyIsInBhcmFtZXRlckIiLCJwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEiLCJtYXRjaFBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzIiwiZnJvbVN0cmluZ0FuZEFycmF5IiwiZnJvbUZvckVhY2hMb29wTm9kZSIsImZvckVhY2hMb29wTm9kZSIsIlBhcmFtZXRlciIsImRvbSIsInBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyTm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUiLCJuYW1lIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjQSxPQTZKRztlQTdKSDs7SUErSmdCQSxlQUFlO2VBQWZBOzs7MkRBM0tBO2dFQUNNO3FCQUdnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsc0JBQXNCQyxJQUFB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
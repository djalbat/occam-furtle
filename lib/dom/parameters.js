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
            key: "fromNamesAndTypes",
            value: function fromNamesAndTypes(names, types, context) {
                var array = names.map(function(name, index) {
                    var Parameter = _dom.default.Parameter, type = types[index], parameter = Parameter.fromNameAndType(name, type, context);
                    return parameter;
                }), string = stringFromArray(array, context), parameters = new Parameters(string, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZm9yRWFjaExvb3AvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wYXJhbWV0ZXJzL3BhcmFtZXRlclwiKSxcbiAgICAgIGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJyYXlBc3NpZ25tZW50L3BhcmFtZXRlcnNcIiksXG4gICAgICBvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3BhcmFtZXRlcnNcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVycyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVzU3RyaW5nID0gdmFsdWVzLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHZhbHVlc0xlbmd0aCAhPT0gcGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5nZXRWYWx1ZShpbmRleCk7XG5cbiAgICAgICAgcGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZXNTdHJpbmd9IHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIG1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyQSA9IHBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyTWF0Y2hlcyA9IHRoaXMuc29tZVBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlckIgPSBwYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEgPSBwYXJhbWV0ZXJBLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlckIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFwYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXJzKHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgICBwYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlcikgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyc1wiO1xuXG4gIHN0YXRpYyBmcm9tTmFtZXNBbmRUeXBlcyhuYW1lcywgdHlwZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IG5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgICB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcGFyYW1ldGVycyA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyYW1ldGVyc1N0cmluZyA9IGFycmF5LnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cGFyYW1ldGVyc1N0cmluZ30sICR7cGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHBhcmFtZXRlcnNTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXJzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFBhcmFtZXRlciIsImluZGV4IiwicGFyYW1ldGVyIiwic29tZVBhcmFtZXRlciIsImNhbGxiYWNrIiwic29tZSIsImZvckVhY2hQYXJhbWV0ZXIiLCJmb3JFYWNoIiwibWF0Y2hWYWx1ZXMiLCJ2YWx1ZXMiLCJjb250ZXh0IiwidmFsdWVzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXRjaFZhbHVlIiwiZGVidWciLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlckEiLCJwYXJhbWV0ZXJNYXRjaGVzIiwicGFyYW1ldGVyQiIsInBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSIsIm1hdGNoUGFyYW1ldGVycyIsInBhcmFtZXRlcnMiLCJmcm9tTmFtZXNBbmRUeXBlcyIsIm5hbWVzIiwidHlwZXMiLCJtYXAiLCJuYW1lIiwiUGFyYW1ldGVyIiwiZG9tIiwidHlwZSIsImZyb21OYW1lQW5kVHlwZSIsInN0cmluZ0Zyb21BcnJheSIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlck5vZGVzIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlIiwicmVkdWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyREFaZ0I7Z0VBQ007cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUMsK0NBQ2hDQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ2pDQyxxQ0FBcUNILElBQUFBLGdCQUFTLEVBQUMsZ0NBQy9DSSxzQ0FBc0NKLElBQUFBLGdCQUFTLEVBQUMsaUNBQ2hESywwQ0FBMENMLElBQUFBLGdCQUFTLEVBQUM7SUFFMUQsV0FBZU0sSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLEtBQUs7Z0JBQ2hCLElBQU1DLFlBQVksSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFBSTtnQkFFdkMsT0FBT0M7WUFDVDs7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
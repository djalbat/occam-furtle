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
var parameterNodesQuery = (0, _query.nodesQuery)("/parameters/parameter"), arrayAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/arrayAssignment/parameters"), objectAssignmentParametersNodeQuery = (0, _query.nodeQuery)("/objectAssignment/parameters"), procedureDeclarationParametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters");
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
                context.trace("Matching the '".concat(valuesString, "' values against the '").concat(parametersString, "' parameters..."));
                var valuesLength = values.getLength(), parametersLength = this.getLength();
                if (valuesLength !== parametersLength) {
                    var message = "The '".concat(valuesString, "' values and '").concat(parametersString, "' parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var value = values.getValue(index);
                        parameter.matchValue(value, context);
                    }
                });
                context.debug("...matched the '".concat(valuesString, "' values against the '").concat(parametersString, "' parameters."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIHNvbWVQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBtYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZXNTdHJpbmcgPSB2YWx1ZXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt2YWx1ZXNTdHJpbmd9JyB2YWx1ZXMgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmICh2YWx1ZXNMZW5ndGggIT09IHBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlc1N0cmluZ30nIHZhbHVlcyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5nZXRWYWx1ZShpbmRleCk7XG5cbiAgICAgICAgcGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dmFsdWVzU3RyaW5nfScgdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJBID0gcGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJNYXRjaGVzID0gdGhpcy5zb21lUGFyYW1ldGVyKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyQiA9IHBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSA9IHBhcmFtZXRlckEubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcnMocGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIHBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJzXCI7XG5cbiAgc3RhdGljIGZyb21OYW1lc0FuZFR5cGVzKG5hbWVzLCB0eXBlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gbmFtZXMubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHBhcmFtZXRlcnMgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgaWYgKHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXJzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFBhcmFtZXRlciIsImluZGV4IiwicGFyYW1ldGVyIiwic29tZVBhcmFtZXRlciIsImNhbGxiYWNrIiwic29tZSIsImZvckVhY2hQYXJhbWV0ZXIiLCJmb3JFYWNoIiwibWF0Y2hWYWx1ZXMiLCJ2YWx1ZXMiLCJjb250ZXh0IiwidmFsdWVzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXRjaFZhbHVlIiwiZGVidWciLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlckEiLCJwYXJhbWV0ZXJNYXRjaGVzIiwicGFyYW1ldGVyQiIsInBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSIsIm1hdGNoUGFyYW1ldGVycyIsInBhcmFtZXRlcnMiLCJmcm9tTmFtZXNBbmRUeXBlcyIsIm5hbWVzIiwidHlwZXMiLCJtYXAiLCJuYW1lIiwiUGFyYW1ldGVyIiwiZG9tIiwidHlwZSIsImZyb21OYW1lQW5kVHlwZSIsInN0cmluZ0Zyb21BcnJheSIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwicGFyYW1ldGVyTm9kZXMiLCJhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUiLCJyZWR1Y2UiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxQkFHZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQywwQkFDakNDLHFDQUFxQ0MsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDL0NDLHNDQUFzQ0QsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDaERFLDBDQUEwQ0YsSUFBQUEsZ0JBQVMsRUFBQztJQUUxRCxXQUFlRyxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFB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
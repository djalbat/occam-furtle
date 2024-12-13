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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIHNvbWVQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBtYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZXNTdHJpbmcgPSB2YWx1ZXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt2YWx1ZXNTdHJpbmd9JyB2YWx1ZXMgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmICh2YWx1ZXNMZW5ndGggIT09IHBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlc1N0cmluZ30nIHZhbHVlcyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5nZXRWYWx1ZShpbmRleCk7XG5cbiAgICAgICAgcGFyYW1ldGVyLm1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dmFsdWVzU3RyaW5nfScgdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJBID0gcGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJNYXRjaGVzID0gdGhpcy5zb21lUGFyYW1ldGVyKChwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyQiA9IHBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSA9IHBhcmFtZXRlckEubWF0Y2hQYXJhbWV0ZXIocGFyYW1ldGVyQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlckJNYXRjaGVzUGFyYW1ldGVyQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyc1wiO1xuXG4gIHN0YXRpYyBmcm9tTmFtZXNBbmRUeXBlcyhuYW1lcywgdHlwZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IG5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgICB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkoYXJyYXlBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gb2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IHBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwYXJhbWV0ZXJzID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGlmIChwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCk7XG5cbiAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gYXJyYXkucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbWV0ZXJzU3RyaW5nfSwgJHtwYXJhbWV0ZXJTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVBhcmFtZXRlck5vZGVzKHBhcmFtZXRlck5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdLCJuYW1lcyI6WyJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSIsInByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVycyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRQYXJhbWV0ZXIiLCJpbmRleCIsInBhcmFtZXRlciIsInNvbWVQYXJhbWV0ZXIiLCJjYWxsYmFjayIsInNvbWUiLCJmb3JFYWNoUGFyYW1ldGVyIiwiZm9yRWFjaCIsIm1hdGNoVmFsdWVzIiwidmFsdWVzIiwiY29udGV4dCIsInZhbHVlc1N0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsInZhbHVlc0xlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YWx1ZSIsImdldFZhbHVlIiwibWF0Y2hWYWx1ZSIsImRlYnVnIiwibWF0Y2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJBIiwicGFyYW1ldGVyTWF0Y2hlcyIsInBhcmFtZXRlckIiLCJwYXJhbWV0ZXJCTWF0Y2hlc1BhcmFtZXRlckEiLCJmcm9tTmFtZXNBbmRUeXBlcyIsIm5hbWVzIiwidHlwZXMiLCJtYXAiLCJuYW1lIiwiUGFyYW1ldGVyIiwiZG9tIiwidHlwZSIsImZyb21OYW1lQW5kVHlwZSIsInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlcnMiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInBhcmFtZXRlck5vZGVzIiwiYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMiLCJmcm9tT2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIm9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlIiwicmVkdWNlIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ2pDQyxxQ0FBcUNDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQy9DQyxzQ0FBc0NELElBQUFBLGdCQUFTLEVBQUMsaUNBQ2hERSwwQ0FBMENGLElBQUFBLGdCQUFTLEVBQUM7SUFFMUQsV0FBZUcsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLEtBQUs7Z0JBQ2hCLElBQU1DLFlBQVksSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFBSTtnQkFFdkMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRO2dCQUFJLE9BQU8s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
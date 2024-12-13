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
        }
    ], [
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
function arrayFromParameterNodes(parameterNodes, context) {
    var Parameter = _dom.default.Parameter, array = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL29iamVjdEFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uUGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9wYXJhbWV0ZXJzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQYXJhbWV0ZXJzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIGZvckVhY2hQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoVmFsdWVzKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3ZhbHVlc1N0cmluZ30nIHZhbHVlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVzTGVuZ3RoID0gdmFsdWVzLmdldExlbmd0aCgpLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHZhbHVlc0xlbmd0aCAhPT0gcGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVzU3RyaW5nfScgdmFsdWVzIGFuZCAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzLmdldFZhbHVlKGluZGV4KTtcblxuICAgICAgICBwYXJhbWV0ZXIubWF0Y2hWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHt2YWx1ZXNTdHJpbmd9JyB2YWx1ZXMgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyc1wiO1xuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IG9iamVjdEFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBwYXJhbWV0ZXJzTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcGFyYW1ldGVycyA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUZyb21QYXJhbWV0ZXJOb2RlcyhwYXJhbWV0ZXJOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXSwibmFtZXMiOlsicGFyYW1ldGVyTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UGFyYW1ldGVyIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJmb3JFYWNoUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwibWF0Y2hWYWx1ZXMiLCJ2YWx1ZXMiLCJjb250ZXh0IiwidmFsdWVzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXRjaFZhbHVlIiwiZGVidWciLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInBhcmFtZXRlck5vZGVzIiwiYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMiLCJwYXJhbWV0ZXJzIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsIm5hbWUiLCJQYXJhbWV0ZXIiLCJkb20iLCJtYXAiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxQkFHZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHNCQUFzQkMsSUFBQUEsaUJBQVUsRUFBQywwQkFDakNDLHFDQUFxQ0MsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDL0NDLHNDQUFzQ0QsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDaERFLDBDQUEwQ0YsSUFBQUEsZ0JBQVMsRUFBQztJQUUxRCxXQUFlRyxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxLQUFL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
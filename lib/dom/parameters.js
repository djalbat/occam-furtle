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
        var parameterString = parameter.getString();
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, ", ").concat(parameterString);
        return parametersString;
    }, null), string = parametersString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVycyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBmb3JFYWNoUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBtYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZXNTdHJpbmcgPSB2YWx1ZXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAodmFsdWVzTGVuZ3RoICE9PSBwYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFuZCAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzLmdldFZhbHVlKGluZGV4KTtcblxuICAgICAgICBwYXJhbWV0ZXIubWF0Y2hWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlcnNcIjtcblxuICBzdGF0aWMgZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeShhcnJheUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IGFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUGFyYW1ldGVyc05vZGUocGFyYW1ldGVyc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IGFycmF5RnJvbVBhcmFtZXRlcnNOb2RlKHBhcmFtZXRlcnNOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21QYXJhbWV0ZXJzTm9kZShwYXJhbWV0ZXJzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBhcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5QXNzaWdubWVudFBhcmFtZXRlcnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJhbm9ueW1vdXNQcm9jZWR1cmVQYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXJzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFBhcmFtZXRlciIsImluZGV4IiwicGFyYW1ldGVyIiwiZm9yRWFjaFBhcmFtZXRlciIsImNhbGxiYWNrIiwiZm9yRWFjaCIsIm1hdGNoVmFsdWVzIiwidmFsdWVzIiwiY29udGV4dCIsInZhbHVlc1N0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsInZhbHVlc0xlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YWx1ZSIsImdldFZhbHVlIiwibWF0Y2hWYWx1ZSIsImRlYnVnIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzRnJvbVBhcmFtZXRlcnNOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsIm5hbWUiLCJkb20iLCJhcnJheUZyb21QYXJhbWV0ZXJzTm9kZSIsInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlck5vZGVzIiwibWFwIiwicGFyYW1ldGVyTm9kZSIsIlBhcmFtZXRlciIsImZyb21QYXJhbWV0ZXJOb2RlIiwicmVkdWNlIiwicGFyYW1ldGVyU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
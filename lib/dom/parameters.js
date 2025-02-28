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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3BhcmFtZXRlcnMvcGFyYW1ldGVyXCIpLFxuICAgICAgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcnJheUFzc2lnbm1lbnQvcGFyYW1ldGVyc1wiKSxcbiAgICAgIGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL3BhcmFtZXRlcnNcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcGFyYW1ldGVyc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVycyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyKGluZGV4KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cblxuICBmb3JFYWNoUGFyYW1ldGVyKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBtYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZXNTdHJpbmcgPSB2YWx1ZXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAodmFsdWVzTGVuZ3RoICE9PSBwYXJhbWV0ZXJzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFuZCAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBhcmUgbm90IG9mIHRoZSBzYW1lIGxlbmd0aC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzLmdldFZhbHVlKGluZGV4KTtcblxuICAgICAgICBwYXJhbWV0ZXIubWF0Y2hWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke3ZhbHVlc1N0cmluZ30gdmFsdWVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlcnNcIjtcblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuZEFycmF5KHN0cmluZywgYXJyYXkpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUgPSBhcnJheUFzc2lnbm1lbnRQYXJhbWV0ZXJzTm9kZVF1ZXJ5KGFycmF5QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnNOb2RlID0gYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICAgIGFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlKSxcbiAgICAgICAgICBwYXJhbWV0ZXJOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGUsIC8vL1xuICAgICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICBhcnJheSA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IG5ldyBQYXJhbWV0ZXJzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcGFyYW1ldGVycyA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlID0gcGFyYW1ldGVyc05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBwYXJhbWV0ZXJzID0gbmV3IFBhcmFtZXRlcnMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9LCAke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBwYXJhbWV0ZXJzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tUGFyYW1ldGVyTm9kZXMocGFyYW1ldGVyTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIl0sIm5hbWVzIjpbInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFub255bW91c1Byb2NlZHVyZVBhcmFtZXRlcnNOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblBhcmFtZXRlcnNOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UGFyYW1ldGVyIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJmb3JFYWNoUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwibWF0Y2hWYWx1ZXMiLCJ2YWx1ZXMiLCJjb250ZXh0IiwidmFsdWVzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidmFsdWVzTGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJtYXRjaFZhbHVlIiwiZGVidWciLCJmcm9tU3RyaW5nQW5kQXJyYXkiLCJwYXJhbWV0ZXJzIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJhcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50UGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJzTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJwYXJhbWV0ZXJOb2RlcyIsImFycmF5RnJvbVBhcmFtZXRlck5vZGVzIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiUGFyYW1ldGVyIiwiZG9tIiwiYW5vbnltb3VzUHJvY2VkdXJlUGFyYW1ldGVyc05vZGUiLCJwYXJhbWV0ZXJOb2RlIiwibWFwIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25QYXJhbWV0ZXJzTm9kZSIsIm5hbWUiLCJyZWR1Y2UiLCJwYXJhbWV0ZXJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWFBLE9BNEdHO2VBNUdIOztJQThHZ0JBLGVBQWU7ZUFBZkE7OzsyREF6SEE7Z0VBQ007cUJBR2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxzQkFBc0JDLElBQUFBLGlCQUFVLEVBQUMsMEJBQ2pDQyxxQ0FBcUNDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQy9DQyx3Q0FBd0NELElBQUFBLGdCQUFTLEVBQUMsbUNBQ2xERSwwQ0FBMENGLElBQUFBLGdCQUFTLEVBQUM7SUFFMUQsV0FBZUcsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FB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
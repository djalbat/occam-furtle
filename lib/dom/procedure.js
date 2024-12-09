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
    parametersStringFromParameters: function() {
        return parametersStringFromParameters;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _types = require("../types");
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
var _Procedure;
var nonsenseNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/returnBlock/nonsense"), parameterNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/parameter"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/@type");
var _default = (0, _dom.domAssigned)((_Procedure = /*#__PURE__*/ function() {
    function Procedure(type, label, parameters, nonsensical, returnBlock) {
        _class_call_check(this, Procedure);
        this.type = type;
        this.label = label;
        this.parameters = parameters;
        this.nonsensical = nonsensical;
        this.returnBlock = returnBlock;
    }
    _create_class(Procedure, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                return this.nonsensical;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var typeString = this.type, labelString = this.label.getString(), parametersString = parametersStringFromParameters(this.parameters), string = "".concat(typeString, " ").concat(labelString, "(").concat(parametersString, ") { ... }");
                return string;
            }
        },
        {
            key: "isBoolean",
            value: function isBoolean() {
                var typeBooleanType = this.type === _types.BOOLEAN_TYPE, boolean = typeBooleanType; ///
                return boolean;
            }
        },
        {
            key: "matchParameters",
            value: function matchParameters(parameters) {
                var parametersA = parameters, parametersB = this.parameters, parametersALength = parametersA.length, parametersBLength = parametersB.length, parametersMatch = parametersALength === parametersBLength;
                return parametersMatch;
            }
        },
        {
            key: "areParameterTypesNodeTypes",
            value: function areParameterTypesNodeTypes() {
                var parametersHaveNodeTypes = this.parameters.every(function(parameter) {
                    var parameterTypeNodeType = parameter.isTypeNodeType();
                    if (parameterTypeNodeType) {
                        return true;
                    }
                });
                return parametersHaveNodeTypes;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                return this.label.matchMetavariableName(metavariableName);
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var Label = _dom.default.Label, ReturnBlock = _dom.default.ReturnBlock, type = typeFromProcedureDeclarationNode(procedureDeclarationNode), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclaration = new Procedure(type, label, parameters, nonsensical, returnBlock);
                return procedureDeclaration;
            }
        }
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function parametersStringFromParameters(parameters) {
    var parametersString = parameters.reduce(function(parametersString, parameter) {
        var parameterString = parameter.getString();
        parametersString = parametersString === null ? parameterString : "".concat(parametersString, " ,").concat(parameterString);
        return parametersString;
    }, null);
    return parametersString;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode) {
    var typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Parameter = _dom.default.Parameter, parameterNodes = parameterNodesQuery(procedureDeclarationNode), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode, context);
        return parameter;
    });
    return parameters;
}
function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlclwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5sYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzKHRoaXMucGFyYW1ldGVycyksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtsYWJlbFN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNBID0gcGFyYW1ldGVycywgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyc0IgPSB0aGlzLnBhcmFtZXRlcnMsICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzQUxlbmd0aCA9IHBhcmFtZXRlcnNBLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzQkxlbmd0aCA9IHBhcmFtZXRlcnNCLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTWF0Y2ggPSAocGFyYW1ldGVyc0FMZW5ndGggPT09IHBhcmFtZXRlcnNCTGVuZ3RoKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTWF0Y2g7XG4gIH1cblxuICBhcmVQYXJhbWV0ZXJUeXBlc05vZGVUeXBlcygpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzSGF2ZU5vZGVUeXBlcyA9IHRoaXMucGFyYW1ldGVycy5ldmVyeSgocGFyYW1ldGVyKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJUeXBlTm9kZVR5cGUgPSBwYXJhbWV0ZXIuaXNUeXBlTm9kZVR5cGUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlclR5cGVOb2RlVHlwZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzSGF2ZU5vZGVUeXBlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBSZXR1cm5CbG9jayB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgcmV0dXJuQmxvY2spO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSBwYXJhbWV0ZXJzLnJlZHVjZSgocGFyYW1ldGVyc1N0cmluZywgcGFyYW1ldGVyKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgcGFyYW1ldGVyc1N0cmluZyA9IChwYXJhbWV0ZXJzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BhcmFtZXRlcnNTdHJpbmd9ICwke3BhcmFtZXRlclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgcGFyYW1ldGVyTm9kZXMgPSBwYXJhbWV0ZXJOb2Rlc1F1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJOb2Rlcy5tYXAoKHBhcmFtZXRlck5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cblxuIl0sIm5hbWVzIjpbInBhcmFtZXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVycyIsIm5vbnNlbnNlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmUiLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5CbG9jayIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJ0eXBlU3RyaW5nIiwibGFiZWxTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwic3RyaW5nIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsIm1hdGNoUGFyYW1ldGVycyIsInBhcmFtZXRlcnNBIiwicGFyYW1ldGVyc0IiLCJwYXJhbWV0ZXJzQUxlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNCTGVuZ3RoIiwicGFyYW1ldGVyc01hdGNoIiwiYXJlUGFyYW1ldGVyVHlwZXNOb2RlVHlwZXMiLCJwYXJhbWV0ZXJzSGF2ZU5vZGVUeXBlcyIsImV2ZXJ5IiwicGFyYW1ldGVyIiwicGFyYW1ldGVyVHlwZU5vZGVUeXBlIiwiaXNUeXBlTm9kZVR5cGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImNvbnRleHQiLCJMYWJlbCIsImRvbSIsIlJldHVybkJsb2NrIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIm5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwibmFtZSIsInJlZHVjZSIsInBhcmFtZXRlclN0cmluZyIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsIm1hcCIsInBhcmFtZXRlck5vZGUiLCJmcm9tUGFyYW1ldGVyTm9kZSIsIm5vbnNlbnNlTm9kZXMiLCJub25zZW5zZU5vZGVzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZQSxPQWtGRztlQWxGSDs7SUFvRmdCQSw4QkFBOEI7ZUFBOUJBOzs7MkRBOUZBO3FCQUdhO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLCtDQUNoQ0Msc0JBQXNCRCxJQUFBQSxpQkFBVSxFQUFDLG9DQUNqQ0Usd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVc7Z0NBRDlCTDtRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxLQUFLO1lBQ25COzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxVQUFVO1lBQ3hCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFX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
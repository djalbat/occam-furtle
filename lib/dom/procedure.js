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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlclwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3IodHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5sYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzKHRoaXMucGFyYW1ldGVycyksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtsYWJlbFN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNBID0gcGFyYW1ldGVycywgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyc0IgPSB0aGlzLnBhcmFtZXRlcnMsICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzQUxlbmd0aCA9IHBhcmFtZXRlcnNBLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzQkxlbmd0aCA9IHBhcmFtZXRlcnNCLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTWF0Y2ggPSAocGFyYW1ldGVyc0FMZW5ndGggPT09IHBhcmFtZXRlcnNCTGVuZ3RoKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTWF0Y2g7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUmV0dXJuQmxvY2sgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZSh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJzU3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5yZWR1Y2UoKHBhcmFtZXRlcnNTdHJpbmcsIHBhcmFtZXRlcikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIHBhcmFtZXRlcnNTdHJpbmcgPSAocGFyYW1ldGVyc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbWV0ZXJzU3RyaW5nfSAsJHtwYXJhbWV0ZXJTdHJpbmd9YDtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbiJdLCJuYW1lcyI6WyJwYXJhbWV0ZXJzU3RyaW5nRnJvbVBhcmFtZXRlcnMiLCJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyTm9kZXNRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuQmxvY2siLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwidHlwZVN0cmluZyIsImxhYmVsU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInN0cmluZyIsImlzQm9vbGVhbiIsInR5cGVCb29sZWFuVHlwZSIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW4iLCJtYXRjaFBhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzQSIsInBhcmFtZXRlcnNCIiwicGFyYW1ldGVyc0FMZW5ndGgiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzQkxlbmd0aCIsInBhcmFtZXRlcnNNYXRjaCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiY29udGV4dCIsIkxhYmVsIiwiZG9tIiwiUmV0dXJuQmxvY2siLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJuYW1lIiwicmVkdWNlIiwicGFyYW1ldGVyIiwicGFyYW1ldGVyU3RyaW5nIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIlBhcmFtZXRlciIsInBhcmFtZXRlck5vZGVzIiwibWFwIiwicGFyYW1ldGVyTm9kZSIsImZyb21QYXJhbWV0ZXJOb2RlIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlBLE9Bc0VHO2VBdEVIOztJQXdFZ0JBLDhCQUE4QjtlQUE5QkE7OzsyREFsRkE7cUJBR2E7cUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsK0NBQ2hDQyxzQkFBc0JELElBQUFBLGlCQUFVLEVBQUMsb0NBQ2pDRSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsV0FBVztnQ0FEOUJMO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNYLElBQUksRUFDdEJZLGNBQWMsSUFBSSxDQUFDWCxLQUFLLENBQUNTLFNBQVMsSUFDbENHLG1CQUFtQnJCLCtCQUErQixJQUFJLENBQUNVLFVBQVUsR0FDakVZLFNBQVMsQUFBQyxHQUFnQkYsT0FBZEQsWUFBVyxLQUFrQkUsT0FBZkQsYUFBWSxLQUFvQixPQUFqQkMsa0JBQWlCO2dCQUVoRSxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFtQixJQUFJLENBQUNoQixJQUFJLEtBQUtpQixtQkFBWSxFQUM3Q0MsVUFBVUYsaUJBQWtCLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCakIsVUFBVTtnQkFDeEIsSUFBTWtCLGNBQWNsQixZQUNkbUIsY0FBYyxJQUFJLENBQUNuQixVQUFVLEVBQzdCb0Isb0JBQW9CRixZQUFZRyxNQUFNLEVBQ3RDQyxvQkFBb0JILFlBQVlFLE1BQU0sRUFDdENFLGtCQUFtQkgsc0JBQXNCRTtnQkFFL0MsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFBSSxPQUFPLElBQUksQ0FBQzFCLEtBQUssQ0FBQ3lCLHFCQUFxQixDQUFDQztZQUFtQjs7OztZQUk5RkMsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyx3QkFBd0IsRUFBRUMsT0FBTztnQkFDbkUsSUFBUUMsUUFBdUJDLFlBQUcsQ0FBMUJELE9BQU9FLGNBQWdCRCxZQUFHLENBQW5CQyxhQUNUakMsT0FBT2tDLGlDQUFpQ0wsMkJBQ3hDNUIsUUFBUThCLE1BQU1ILDRCQUE0QixDQUFDQywwQkFBMEJDLFVBQ3JFNUIsYUFBYWlDLHVDQUF1Q04sMEJBQTBCQyxVQUM5RTNCLGNBQWNpQyx3Q0FBd0NQLDBCQUEwQkMsVUFDaEYxQixjQUFjNkIsWUFBWUwsNEJBQTRCLENBQUNDLDBCQUEwQkMsVUFDakZPLHVCQUF1QixJQUFJdEMsVUFBVUMsTUFBTUMsT0FBT0MsWUFBWUMsYUFBYUM7Z0JBRWpGLE9BQU9pQztZQUNUOzs7O0tBWkEsNkJBQU9DLFFBQU87QUFlVCxTQUFTOUMsK0JBQStCVSxVQUFVO0lBQ3ZELElBQU1XLG1CQUFtQlgsV0FBV3FDLE1BQU0sQ0FBQyxTQUFDMUIsa0JBQWtCMkI7UUFDNUQsSUFBTUMsa0JBQWtCRCxVQUFVOUIsU0FBUztRQUUzQ0csbUJBQW1CLEFBQUNBLHFCQUFxQixPQUNwQjRCLGtCQUNDLEFBQUMsR0FBdUJBLE9BQXJCNUIsa0JBQWlCLE1BQW9CLE9BQWhCNEI7UUFFOUMsT0FBTzVCO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1Q7QUFFQSxTQUFTcUIsaUNBQWlDTCx3QkFBd0I7SUFDaEUsSUFBTWEsbUJBQW1COUMsc0JBQXNCaUMsMkJBQ3pDYywwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRDVDLE9BQU8yQyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPM0M7QUFDVDtBQUVBLFNBQVNtQyx1Q0FBdUNOLHdCQUF3QixFQUFFQyxPQUFPO0lBQy9FLElBQU0sQUFBRWUsWUFBY2IsWUFBRyxDQUFqQmEsV0FDRkMsaUJBQWlCbkQsb0JBQW9Ca0MsMkJBQ3JDM0IsYUFBYTRDLGVBQWVDLEdBQUcsQ0FBQyxTQUFDQztRQUMvQixJQUFNUixZQUFZSyxVQUFVSSxpQkFBaUIsQ0FBQ0QsZUFBZWxCO1FBRTdELE9BQU9VO0lBQ1Q7SUFFTixPQUFPdEM7QUFDVDtBQUVBLFNBQVNrQyx3Q0FBd0NQLHdCQUF3QixFQUFFQyxPQUFPO0lBQ2hGLElBQU1vQixnQkFBZ0J6RCxtQkFBbUJvQywyQkFDbkNzQixzQkFBc0JELGNBQWMzQixNQUFNLEVBQzFDcEIsY0FBZWdELHNCQUFzQjtJQUUzQyxPQUFPaEQ7QUFDVCJ9
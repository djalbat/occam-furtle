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
var _block = /*#__PURE__*/ _interop_require_default(require("../context/block"));
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
var _Procedure;
var nonsenseNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/returnBlock/nonsense"), parameterNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/parameter"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/@type");
var _default = (0, _dom.domAssigned)((_Procedure = /*#__PURE__*/ function() {
    function Procedure(string, type, label, parameters, nonsensical, returnBlock) {
        _class_call_check(this, Procedure);
        this.string = string;
        this.type = type;
        this.label = label;
        this.parameters = parameters;
        this.nonsensical = nonsensical;
        this.returnBlock = returnBlock;
    }
    _create_class(Procedure, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
        },
        {
            key: "call",
            value: function call(values, context) {
                var procedureString = this.getString();
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                var valuesMatchParameters = this.parameters.forEach(function(parameter, index) {
                    var node = nodes[index], value = node; ///
                    parameter.setValue(value);
                });
                var blockContext = _block.default.fromParameters(this.parameters, context);
                context = blockContext; ///
                var value = this.returnBlock.call(context);
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var Label = _dom.default.Label, ReturnBlock = _dom.default.ReturnBlock, node = procedureDeclarationNode, string = context.nodeAsString(node), type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context), nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclaration = new Procedure(string, type, label, parameters, nonsensical, returnBlock);
                return procedureDeclaration;
            }
        }
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlclwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNBID0gcGFyYW1ldGVycywgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyc0IgPSB0aGlzLnBhcmFtZXRlcnMsICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzQUxlbmd0aCA9IHBhcmFtZXRlcnNBLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzQkxlbmd0aCA9IHBhcmFtZXRlcnNCLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTWF0Y2ggPSAocGFyYW1ldGVyc0FMZW5ndGggPT09IHBhcmFtZXRlcnNCTGVuZ3RoKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTWF0Y2g7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlc01hdGNoUGFyYW1ldGVycyA9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaCgocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHZhbHVlID0gbm9kZTsgLy8vXG5cbiAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVBhcmFtZXRlcnModGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJldHVybkJsb2NrLmNhbGwoY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUmV0dXJuQmxvY2sgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJOb2RlcyA9IHBhcmFtZXRlck5vZGVzUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlck5vZGVzLm1hcCgocGFyYW1ldGVyTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IFBhcmFtZXRlci5mcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuIl0sIm5hbWVzIjpbIm5vbnNlbnNlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJOb2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwibWF0Y2hQYXJhbWV0ZXJzIiwicGFyYW1ldGVyc0EiLCJwYXJhbWV0ZXJzQiIsInBhcmFtZXRlcnNBTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyc0JMZW5ndGgiLCJwYXJhbWV0ZXJzTWF0Y2giLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY2FsbCIsInZhbHVlcyIsImNvbnRleHQiLCJwcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsInZhbHVlc01hdGNoUGFyYW1ldGVycyIsImZvckVhY2giLCJwYXJhbWV0ZXIiLCJpbmRleCIsIm5vZGUiLCJub2RlcyIsInZhbHVlIiwic2V0VmFsdWUiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tUGFyYW1ldGVycyIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJMYWJlbCIsImRvbSIsIlJldHVybkJsb2NrIiwibm9kZUFzU3RyaW5nIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIm5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwibmFtZSIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJQYXJhbWV0ZXIiLCJwYXJhbWV0ZXJOb2RlcyIsIm1hcCIsInBhcmFtZXRlck5vZGUiLCJmcm9tUGFyYW1ldGVyTm9kZSIsIm5vbnNlbnNlTm9kZXMiLCJub25zZW5zZU5vZGVzTGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7NERBQ1M7cUJBR0k7cUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
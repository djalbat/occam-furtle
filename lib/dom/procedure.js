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
                this.parameters.forEach(function(parameter, index) {
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
            value: function fromProcedureDeclarationNode(procedureDeclarationNode) {
                var Label = _dom.default.Label, ReturnBlock = _dom.default.ReturnBlock, type = typeFromProcedureDeclarationNode(procedureDeclarationNode), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode), parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode), nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode), returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode), string = stringFromTypeLabelAndParameters(type, label, parameters), procedureDeclaration = new Procedure(string, type, label, parameters, nonsensical, returnBlock);
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
function stringFromTypeLabelAndParameters(type, label, parameters) {
    var typeString = type, labelString = label.getString(), parametersString = parametersStringFromParameters(parameters), string = "".concat(typeString, " ").concat(labelString, "(").concat(parametersString, ") { ... }");
    return string;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode) {
    var typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function parametersFromProcedureDeclarationNode(procedureDeclarationNode) {
    var Parameter = _dom.default.Parameter, parameterNodes = parameterNodesQuery(procedureDeclarationNode), parameters = parameterNodes.map(function(parameterNode) {
        var parameter = Parameter.fromParameterNode(parameterNode);
        return parameter;
    });
    return parameters;
}
function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode) {
    var nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHBhcmFtZXRlck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlclwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICAgIGNvbnN0IHBhcmFtZXRlcnNBID0gcGFyYW1ldGVycywgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyc0IgPSB0aGlzLnBhcmFtZXRlcnMsICAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXJzQUxlbmd0aCA9IHBhcmFtZXRlcnNBLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzQkxlbmd0aCA9IHBhcmFtZXRlcnNCLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTWF0Y2ggPSAocGFyYW1ldGVyc0FMZW5ndGggPT09IHBhcmFtZXRlcnNCTGVuZ3RoKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzTWF0Y2g7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgdmFsdWUgPSBub2RlOyAvLy9cblxuICAgICAgcGFyYW1ldGVyLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tUGFyYW1ldGVycyh0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2suY2FsbChjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpIHtcbiAgICBjb25zdCB7IExhYmVsLCBSZXR1cm5CbG9jayB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVMYWJlbEFuZFBhcmFtZXRlcnModHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMpLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgcmV0dXJuQmxvY2spO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcGFyYW1ldGVyc1N0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMucmVkdWNlKChwYXJhbWV0ZXJzU3RyaW5nLCBwYXJhbWV0ZXIpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBwYXJhbWV0ZXJzU3RyaW5nID0gKHBhcmFtZXRlcnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cGFyYW1ldGVyc1N0cmluZ30gLCR7cGFyYW1ldGVyU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlTGFiZWxBbmRQYXJhbWV0ZXJzKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLCAvLy9cbiAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtsYWJlbFN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gcGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHBhcmFtZXRlck5vZGVzID0gcGFyYW1ldGVyTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVyTm9kZXMubWFwKChwYXJhbWV0ZXJOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gUGFyYW1ldGVyLmZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtZXRlcnM7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG5cbiJdLCJuYW1lcyI6WyJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyTm9kZXNRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsIm1hdGNoUGFyYW1ldGVycyIsInBhcmFtZXRlcnNBIiwicGFyYW1ldGVyc0IiLCJwYXJhbWV0ZXJzQUxlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNCTGVuZ3RoIiwicGFyYW1ldGVyc01hdGNoIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNhbGwiLCJ2YWx1ZXMiLCJjb250ZXh0IiwicHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJmb3JFYWNoIiwicGFyYW1ldGVyIiwiaW5kZXgiLCJub2RlIiwibm9kZXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVBhcmFtZXRlcnMiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiTGFiZWwiLCJkb20iLCJSZXR1cm5CbG9jayIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJzdHJpbmdGcm9tVHlwZUxhYmVsQW5kUGFyYW1ldGVycyIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwibmFtZSIsInBhcmFtZXRlcnNTdHJpbmdGcm9tUGFyYW1ldGVycyIsInBhcmFtZXRlcnNTdHJpbmciLCJyZWR1Y2UiLCJwYXJhbWV0ZXJTdHJpbmciLCJ0eXBlU3RyaW5nIiwibGFiZWxTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiUGFyYW1ldGVyIiwicGFyYW1ldGVyTm9kZXMiLCJtYXAiLCJwYXJhbWV0ZXJOb2RlIiwiZnJvbVBhcmFtZXRlck5vZGUiLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCOzREQUNTO3FCQUdJO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsK0NBQ2hDQyxzQkFBc0JELElBQUFBLGlCQUFVLEVBQUMsb0NBQ2pDRSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFL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
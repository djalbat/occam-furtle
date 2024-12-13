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
var nonsenseNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/returnBlock/nonsense"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/@type");
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
            key: "matchName",
            value: function matchName(name) {
                return this.label.matchName(name);
            }
        },
        {
            key: "call",
            value: function call(values, context) {
                this.parameters.matchValues(values, context);
                var variables = variablesFromValuesAndParameters(values, this.parameters, context), blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                var value = this.returnBlock.resolve(context);
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var Label = _dom.default.Label, ReturnBlock = _dom.default.ReturnBlock, Parameters = _dom.default.Parameters, node = procedureDeclarationNode, string = context.nodeAsString(node), type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = Parameters.fromProcedureDeclarationNode(procedureDeclarationNode, context), nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclaration = new Procedure(string, type, label, parameters, nonsensical, returnBlock);
                return procedureDeclaration;
            }
        }
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function variablesFromValuesAndParameters(values, parameters, context) {
    var variables = [];
    values.forEachValue(function(value, index) {
        var Variable = _dom.default.Variable, parameter = parameters.getParameter(index);
        if (parameter !== null) {
            var variable = Variable.fromValueAndParameter(value, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgaXNCb29sZWFuKCkge1xuICAgIGNvbnN0IHR5cGVCb29sZWFuVHlwZSA9ICh0aGlzLnR5cGUgPT09IEJPT0xFQU5fVFlQRSksXG4gICAgICAgICAgYm9vbGVhbiA9IHR5cGVCb29sZWFuVHlwZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5sYWJlbC5tYXRjaE5hbWUobmFtZSk7IH1cblxuICBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXR1cm5CbG9jay5yZXNvbHZlKGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFJldHVybkJsb2NrLCBQYXJhbWV0ZXJzIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgcmV0dXJuQmxvY2spO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCBwYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gIHZhbHVlcy5mb3JFYWNoVmFsdWUoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZUFuZFBhcmFtZXRlcih2YWx1ZSwgcGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cbiJdLCJuYW1lcyI6WyJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwibWF0Y2hOYW1lIiwibmFtZSIsImNhbGwiLCJ2YWx1ZXMiLCJjb250ZXh0IiwibWF0Y2hWYWx1ZXMiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21WYXJpYWJsZXMiLCJ2YWx1ZSIsInJlc29sdmUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiTGFiZWwiLCJkb20iLCJSZXR1cm5CbG9jayIsIlBhcmFtZXRlcnMiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZvckVhY2hWYWx1ZSIsImluZGV4IiwiVmFyaWFibGUiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJ2YXJpYWJsZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInB1c2giLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Iiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlB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
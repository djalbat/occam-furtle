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
var labelNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/label"), nonsenseNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/returnBlock/nonsense"), parameterNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/@type");
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
            value: function call(values, fileContext) {
                var context;
                context = fileContext; ///
                var procedureString = this.string;
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                this.parameters.matchValues(values, context);
                var variables = variablesFromValuesAndParameters(values, this.parameters, context), blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                var value = this.returnBlock.resolve(context);
                context = fileContext; ///
                context.debug("...called the '".concat(procedureString, "' procedure."));
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var Label = _dom.default.Label, ReturnBlock = _dom.default.ReturnBlock, Parameters = _dom.default.Parameters, string = stringFromProcedureDeclarationNode(procedureDeclarationNode, context), type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = Parameters.fromProcedureDeclarationNode(procedureDeclarationNode, context), nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedureDeclaration = new Procedure(string, type, label, parameters, nonsensical, returnBlock);
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
function stringFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var labelNode = labelNodeQuery(procedureDeclarationNode), parametersNode = parameterNodeQuery(procedureDeclarationNode), typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode), typeNode = typeTerminalNode, typeString = context.nodeAsString(typeNode), labelString = context.nodeAsString(labelNode), parametersString = context.nodeAsString(parametersNode), string = "".concat(typeString, " ").concat(labelString, "(").concat(parametersString, ") { ... }");
    return string;
}
function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vbGFiZWxcIiksXG4gICAgICBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3JldHVybkJsb2NrL25vbnNlbnNlXCIpLFxuICAgICAgcGFyYW1ldGVyTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbCh2YWx1ZXMsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2sucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUmV0dXJuQmxvY2ssIFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jayk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyh2YWx1ZXMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgdmFsdWVzLmZvckVhY2hWYWx1ZSgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyKGluZGV4KTtcblxuICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBsYWJlbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlck5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZVRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICB0eXBlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpLFxuICAgICAgICBsYWJlbFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9ICR7bGFiZWxTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG4iXSwibmFtZXMiOlsibGFiZWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyTm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwibWF0Y2hOYW1lIiwibmFtZSIsImNhbGwiLCJ2YWx1ZXMiLCJmaWxlQ29udGV4dCIsImNvbnRleHQiLCJwcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsIm1hdGNoVmFsdWVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwidmFsdWUiLCJyZXNvbHZlIiwiZGVidWciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiTGFiZWwiLCJkb20iLCJSZXR1cm5CbG9jayIsIlBhcmFtZXRlcnMiLCJzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZvckVhY2hWYWx1ZSIsImluZGV4IiwiVmFyaWFibGUiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJ2YXJpYWJsZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInB1c2giLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibGFiZWxOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJ0eXBlTm9kZSIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJsYWJlbFN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCOzREQUNTO3FCQUdJO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzNCQyxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsK0NBQ2hDQyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUMscUNBQy9CSSx3QkFBd0JKLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUssSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXO2dDQUR0Q047UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxP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
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
    variablesFromValuesAndParameters: function() {
        return variablesFromValuesAndParameters;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _block = /*#__PURE__*/ _interop_require_default(require("../context/block"));
var _types = require("../types");
var _query = require("../utilities/query");
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
var labelNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/label"), nonsenseNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/returnBlock/nonsense"), parametersNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/parameters"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/@type");
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
                var value = this.returnBlock.resolve(context), valueType = value.getType();
                if (this.type !== valueType) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type and the '").concat(procedureString, "' procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context = fileContext; ///
                context.debug("...called the '".concat(procedureString, "' procedure."));
                return value;
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
    var labelNode = labelNodeQuery(procedureDeclarationNode), parametersNode = parametersNodeQuery(procedureDeclarationNode), typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode), typeNode = typeTerminalNode, typeString = context.nodeAsString(typeNode), labelString = context.nodeAsString(labelNode), parametersString = context.nodeAsString(parametersNode), string = "".concat(typeString, " ").concat(labelString, "(").concat(parametersString, ") { ... }");
    return string;
}
function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5jb25zdCBsYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKSxcbiAgICAgIG5vbnNlbnNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbCh2YWx1ZXMsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nO1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2sucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgYW5kIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlICBkbyBub3QgbWF0Y2guYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUmV0dXJuQmxvY2ssIFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBuZXcgUHJvY2VkdXJlKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jayk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCBwYXJhbWV0ZXJzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gIHZhbHVlcy5mb3JFYWNoVmFsdWUoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZUFuZFBhcmFtZXRlcih2YWx1ZSwgcGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGFiZWxOb2RlID0gbGFiZWxOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc05vZGUgPSBwYXJhbWV0ZXJzTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZU5vZGUgPSB0eXBlVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgIHR5cGVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSksXG4gICAgICAgIGxhYmVsU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGFiZWxOb2RlKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHBhcmFtZXRlcnNOb2RlKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtsYWJlbFN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyIsImxhYmVsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwibm9uc2Vuc2VOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInBhcmFtZXRlcnNOb2RlUXVlcnkiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZSIsInN0cmluZyIsInR5cGUiLCJsYWJlbCIsInBhcmFtZXRlcnMiLCJub25zZW5zaWNhbCIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldExhYmVsIiwiZ2V0UGFyYW1ldGVycyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZXR1cm5CbG9jayIsImlzQm9vbGVhbiIsInR5cGVCb29sZWFuVHlwZSIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW4iLCJtYXRjaE5hbWUiLCJuYW1lIiwiY2FsbCIsInZhbHVlcyIsImZpbGVDb250ZXh0IiwiY29udGV4dCIsInByb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hWYWx1ZXMiLCJ2YXJpYWJsZXMiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwidmFsdWUiLCJyZXNvbHZlIiwidmFsdWVUeXBlIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIkxhYmVsIiwiZG9tIiwiUmV0dXJuQmxvY2siLCJQYXJhbWV0ZXJzIiwic3RyaW5nRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJmb3JFYWNoVmFsdWUiLCJpbmRleCIsIlZhcmlhYmxlIiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwidmFyaWFibGUiLCJmcm9tVmFsdWVBbmRQYXJhbWV0ZXIiLCJwdXNoIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImxhYmVsTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwidHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibGFiZWxTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWVBLE9BMkZHO2VBM0ZIOztJQTZGZ0JBLGdDQUFnQztl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
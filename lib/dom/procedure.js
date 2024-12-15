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
                var procedureString = this.string; ///
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                if (this.nonsensical) {
                    var message = "The '".concat(procedureString, "' procedure is nonsensical."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.parameters.matchValues(values, context);
                var variables = variablesFromValuesAndParameters(values, this.parameters, context), blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                var value = this.returnBlock.resolve(context), valueType = value.getType();
                if (this.type !== valueType) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's '").concat(valueType, "' type and the '").concat(procedureString, "' procedure's '").concat(this.type, "' type  do not match."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5jb25zdCBsYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKSxcbiAgICAgIG5vbnNlbnNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbCh2YWx1ZXMsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXR1cm5CbG9jay5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBhbmQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dCA9IGZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBSZXR1cm5CbG9jaywgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyh2YWx1ZXMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgdmFsdWVzLmZvckVhY2hWYWx1ZSgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyKGluZGV4KTtcblxuICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBsYWJlbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKSxcbiAgICAgICAgbGFiZWxTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsYWJlbE5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAke2xhYmVsU3RyaW5nfSgke3BhcmFtZXRlcnNTdHJpbmd9KSB7IC4uLiB9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwibGFiZWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsIm1hdGNoTmFtZSIsIm5hbWUiLCJjYWxsIiwidmFsdWVzIiwiZmlsZUNvbnRleHQiLCJjb250ZXh0IiwicHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJtYXRjaFZhbHVlcyIsInZhcmlhYmxlcyIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21WYXJpYWJsZXMiLCJ2YWx1ZSIsInJlc29sdmUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiTGFiZWwiLCJkb20iLCJSZXR1cm5CbG9jayIsIlBhcmFtZXRlcnMiLCJzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZvckVhY2hWYWx1ZSIsImluZGV4IiwiVmFyaWFibGUiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJ2YXJpYWJsZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInB1c2giLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibGFiZWxOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJ0eXBlTm9kZSIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJsYWJlbFN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZUEsT0FrR0c7ZUFsR0g7O0lBb0dnQkEsZ0NBQWdDO2VBQWhDQTs7OzJEQWpIQTs0REFDUztxQkFHSTtxQkFDUztnRUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDM0JDLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQywrQ0FDaENDLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQyxxQ0FDaENJLHdCQUF3QkosSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlSyxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVc7Z0NBRHRDTjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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
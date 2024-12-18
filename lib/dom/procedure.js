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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
                var variables = variablesFromValuesAndParameters(values, this.parameters, context), value = this.returnBlock.evaluate(variables, context), valueType = value.getType();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKSxcbiAgICAgIG5vbnNlbnNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbCh2YWx1ZXMsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBhbmQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dCA9IGZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBSZXR1cm5CbG9jaywgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgbm9uc2Vuc2ljYWwsIHJldHVybkJsb2NrKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVmFsdWVzQW5kUGFyYW1ldGVycyh2YWx1ZXMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgdmFsdWVzLmZvckVhY2hWYWx1ZSgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyKGluZGV4KTtcblxuICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsYWJlbE5vZGUgPSBsYWJlbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzTm9kZSA9IHBhcmFtZXRlcnNOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgdHlwZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKSxcbiAgICAgICAgbGFiZWxTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhsYWJlbE5vZGUpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcocGFyYW1ldGVyc05vZGUpLFxuICAgICAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAke2xhYmVsU3RyaW5nfSgke3BhcmFtZXRlcnNTdHJpbmd9KSB7IC4uLiB9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIiwibGFiZWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJub25zZW5zZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicGFyYW1ldGVyc05vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsIm1hdGNoTmFtZSIsIm5hbWUiLCJjYWxsIiwidmFsdWVzIiwiZmlsZUNvbnRleHQiLCJjb250ZXh0IiwicHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJtYXRjaFZhbHVlcyIsInZhcmlhYmxlcyIsInZhbHVlIiwiZXZhbHVhdGUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiZGVidWciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiTGFiZWwiLCJkb20iLCJSZXR1cm5CbG9jayIsIlBhcmFtZXRlcnMiLCJzdHJpbmdGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJub25zZW5zaWNhbEZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZvckVhY2hWYWx1ZSIsImluZGV4IiwiVmFyaWFibGUiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJ2YXJpYWJsZSIsImZyb21WYWx1ZUFuZFBhcmFtZXRlciIsInB1c2giLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibGFiZWxOb2RlIiwicGFyYW1ldGVyc05vZGUiLCJ0eXBlTm9kZSIsInR5cGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJsYWJlbFN0cmluZyIsInBhcmFtZXRlcnNTdHJpbmciLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY0EsT0E4Rkc7ZUE5Rkg7O0lBZ0dn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
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
                var variables = variablesFromValuesAndParameters(values, this.parameters, context), value = this.returnBlock.resolve(variables, context), valueType = value.getType();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBsYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKSxcbiAgICAgIG5vbnNlbnNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBwYXJhbWV0ZXJzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3BhcmFtZXRlcnNcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIG5vbnNlbnNpY2FsLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuQmxvY2sgPSByZXR1cm5CbG9jaztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbCh2YWx1ZXMsIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaFZhbHVlcyh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnModmFsdWVzLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXR1cm5CbG9jay5yZXNvbHZlKHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFJldHVybkJsb2NrLCBQYXJhbWV0ZXJzIH0gPSBkb20sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCBub25zZW5zaWNhbCwgcmV0dXJuQmxvY2spO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICB2YWx1ZXMuZm9yRWFjaFZhbHVlKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5nZXRQYXJhbWV0ZXIoaW5kZXgpO1xuXG4gICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFsdWVBbmRQYXJhbWV0ZXIodmFsdWUsIHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxhYmVsTm9kZSA9IGxhYmVsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNOb2RlID0gcGFyYW1ldGVyc05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZVRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICB0eXBlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpLFxuICAgICAgICBsYWJlbFN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxhYmVsTm9kZSksXG4gICAgICAgIHBhcmFtZXRlcnNTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhwYXJhbWV0ZXJzTm9kZSksXG4gICAgICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9ICR7bGFiZWxTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pIHsgLi4uIH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMiLCJsYWJlbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5vbnNlbnNlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwYXJhbWV0ZXJzTm9kZVF1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwibWF0Y2hOYW1lIiwibmFtZSIsImNhbGwiLCJ2YWx1ZXMiLCJmaWxlQ29udGV4dCIsImNvbnRleHQiLCJwcm9jZWR1cmVTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm1hdGNoVmFsdWVzIiwidmFyaWFibGVzIiwidmFsdWUiLCJyZXNvbHZlIiwidmFsdWVUeXBlIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsImRlYnVnIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIkxhYmVsIiwiZG9tIiwiUmV0dXJuQmxvY2siLCJQYXJhbWV0ZXJzIiwic3RyaW5nRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwibm9uc2Vuc2ljYWxGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJmb3JFYWNoVmFsdWUiLCJpbmRleCIsIlZhcmlhYmxlIiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwidmFyaWFibGUiLCJmcm9tVmFsdWVBbmRQYXJhbWV0ZXIiLCJwdXNoIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImxhYmVsTm9kZSIsInBhcmFtZXRlcnNOb2RlIiwidHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibGFiZWxTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNBLE9BOEZHO2VBOUZIOztJQWdHZ0JB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
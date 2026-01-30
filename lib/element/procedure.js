"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get variablesFromExpressionsAndParameters () {
        return variablesFromExpressionsAndParameters;
    }
});
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
var _types = require("../types");
var _element = require("../utilities/element");
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
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/@type");
var _default = (0, _elements.define)((_Procedure = /*#__PURE__*/ function() {
    function Procedure(string, type, label, parameters, returnBlock) {
        _class_call_check(this, Procedure);
        this.string = string;
        this.type = type;
        this.label = label;
        this.parameters = parameters;
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
            key: "getName",
            value: function getName() {
                return this.label.getName();
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
            value: function call(expressions, context) {
                var procedureString = this.string; ///
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                this.parameters.matchExpressions(expressions, context);
                var variables = variablesFromExpressionsAndParameters(expressions, this.parameters, context), expression = this.returnBlock.evaluate(variables, context), expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type and the '").concat(procedureString, "' procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(procedureString, "' procedure."));
                return expression;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclaration = procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context);
                return procedureDeclaration;
            }
        }
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function variablesFromExpressionsAndParameters(expressions, parameters, context) {
    var variables = [];
    expressions.forEachExpression(function(expression, index) {
        var Variable = _elements.default.Variable, parameter = parameters.getParameter(index);
        if (parameter !== null) {
            var variable = Variable.fromExpressionAndParameter(expression, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Label = _elements.default.Label, ReturnBlock = _elements.default.ReturnBlock, Procedure = _elements.default.Procedure, returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = (0, _element.parametersFromProcedureDeclarationNode)(procedureDeclarationNode, context), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context), type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), string = stringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock), procedureDeclaration = new Procedure(string, type, label, parameters, returnBlock);
    return procedureDeclaration;
}
function stringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock) {
    var typeString = type, labelString = label.getString(), parametersString = parameters.getString(), returnBlockString = returnBlock.getString(), string = "".concat(typeString, " ").concat(labelString, "(").concat(parametersString, ") ").concat(returnBlockString);
    return string;
}
function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBwYXJhbWV0ZXJzRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZUJvb2xlYW5UeXBlID0gKHRoaXMudHlwZSA9PT0gQk9PTEVBTl9UWVBFKSxcbiAgICAgICAgICBib29sZWFuID0gdHlwZUJvb2xlYW5UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLmxhYmVsLmdldE5hbWUoKTsgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmxhYmVsLm1hdGNoTmFtZShuYW1lKTsgfVxuXG4gIGNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hFeHByZXNzaW9ucyhleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tRXhwcmVzc2lvbnNBbmRQYXJhbWV0ZXJzKGV4cHJlc3Npb25zLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IGV4cHJlc3Npb25UeXBlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBhbmQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMoZXhwcmVzc2lvbnMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgZXhwcmVzc2lvbnMuZm9yRWFjaEV4cHJlc3Npb24oKGV4cHJlc3Npb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5nZXRQYXJhbWV0ZXIoaW5kZXgpO1xuXG4gICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlcihleHByZXNzaW9uLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwsIFJldHVybkJsb2NrLCBQcm9jZWR1cmUgfSA9IGVsZW1lbnRzLFxuICAgICAgICByZXR1cm5CbG9jayA9IFJldHVybkJsb2NrLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnNGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUsICAvLy9cbiAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2suZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9ICR7bGFiZWxTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pICR7cmV0dXJuQmxvY2tTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJQcm9jZWR1cmUiLCJzdHJpbmciLCJ0eXBlIiwibGFiZWwiLCJwYXJhbWV0ZXJzIiwicmV0dXJuQmxvY2siLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TGFiZWwiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJpc0Jvb2xlYW4iLCJ0eXBlQm9vbGVhblR5cGUiLCJCT09MRUFOX1RZUEUiLCJib29sZWFuIiwiZ2V0TmFtZSIsIm1hdGNoTmFtZSIsIm5hbWUiLCJjYWxsIiwiZXhwcmVzc2lvbnMiLCJjb250ZXh0IiwicHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaEV4cHJlc3Npb25zIiwidmFyaWFibGVzIiwiZXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiZXhwcmVzc2lvblR5cGUiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImZvckVhY2hFeHByZXNzaW9uIiwiaW5kZXgiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwidmFyaWFibGUiLCJmcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlciIsInB1c2giLCJMYWJlbCIsIlJldHVybkJsb2NrIiwicGFyYW1ldGVyc0Zyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ0eXBlU3RyaW5nIiwibGFiZWxTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7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
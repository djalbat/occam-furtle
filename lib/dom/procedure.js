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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
var _types = require("../types");
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
var _default = (0, _dom.domAssigned)((_Procedure = /*#__PURE__*/ function() {
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
        var Variable = _dom.default.Variable, parameter = parameters.getParameter(index);
        if (parameter !== null) {
            var variable = Variable.fromExpressionAndParameter(expression, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}
function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
    var Label = _dom.default.Label, ReturnBlock = _dom.default.ReturnBlock, Parameters = _dom.default.Parameters, Procedure = _dom.default.Procedure, returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context), parameters = Parameters.fromProcedureDeclarationNode(procedureDeclarationNode, context), label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context), type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context), string = stringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock), procedureDeclaration = new Procedure(string, type, label, parameters, returnBlock);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubGFiZWwuZ2V0TmFtZSgpOyB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbChleHByZXNzaW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaEV4cHJlc3Npb25zKGV4cHJlc3Npb25zLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMoZXhwcmVzc2lvbnMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUV4cHJlc3Npb25zQW5kUGFyYW1ldGVycyhleHByZXNzaW9ucywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICBleHByZXNzaW9ucy5mb3JFYWNoRXhwcmVzc2lvbigoZXhwcmVzc2lvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgcGFyYW1ldGVyID0gcGFyYW1ldGVycy5nZXRQYXJhbWV0ZXIoaW5kZXgpO1xuXG4gICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRXhwcmVzc2lvbkFuZFBhcmFtZXRlcihleHByZXNzaW9uLCBwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuXG5mdW5jdGlvbiBwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwsIFJldHVybkJsb2NrLCBQYXJhbWV0ZXJzLCBQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBSZXR1cm5CbG9jay5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uID0gbmV3IFByb2NlZHVyZShzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jayk7XG5cbiAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrKHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZSwgIC8vL1xuICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgcmV0dXJuQmxvY2tTdHJpbmcgPSByZXR1cm5CbG9jay5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtsYWJlbFN0cmluZ30oJHtwYXJhbWV0ZXJzU3RyaW5nfSkgJHtyZXR1cm5CbG9ja1N0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbUV4cHJlc3Npb25zQW5kUGFyYW1ldGVycyIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldExhYmVsIiwiZ2V0UGFyYW1ldGVycyIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsImdldE5hbWUiLCJtYXRjaE5hbWUiLCJuYW1lIiwiY2FsbCIsImV4cHJlc3Npb25zIiwiY29udGV4dCIsInByb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hFeHByZXNzaW9ucyIsInZhcmlhYmxlcyIsImV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImV4cHJlc3Npb25UeXBlIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJmb3JFYWNoRXhwcmVzc2lvbiIsImluZGV4IiwiVmFyaWFibGUiLCJkb20iLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJ2YXJpYWJsZSIsImZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIiwicHVzaCIsIkxhYmVsIiwiUmV0dXJuQmxvY2siLCJQYXJhbWV0ZXJzIiwidHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJzdHJpbmdGcm9tVHlwZUxhYmVsUGFyYW1ldGVyc0FuZFJldHVybkJsb2NrIiwidHlwZVN0cmluZyIsImxhYmVsU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInJldHVybkJsb2NrU3RyaW5nIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBV0E7ZUFBQTs7UUF5RWdCQTtlQUFBQTs7OzJEQWxGQTtnRUFDTTtxQkFFSTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
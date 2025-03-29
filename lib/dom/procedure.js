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
    variablesFromExpressionsAndParameters: function() {
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
            key: "matchName",
            value: function matchName(name) {
                return this.label.matchName(name);
            }
        },
        {
            key: "call",
            value: function call(expressions, fileContext) {
                var context;
                context = fileContext; ///
                var procedureString = this.string; ///
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                this.parameters.matchExpressions(expressions, context);
                var variables = variablesFromExpressionsAndParameters(expressions, this.parameters, context), expression = this.returnBlock.evaluate(variables, context), expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type and the '").concat(procedureString, "' procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context = fileContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb2NlZHVyZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbGFiZWwsIHBhcmFtZXRlcnMsIHJldHVybkJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5CbG9jaztcbiAgfVxuXG4gIGlzQm9vbGVhbigpIHtcbiAgICBjb25zdCB0eXBlQm9vbGVhblR5cGUgPSAodGhpcy50eXBlID09PSBCT09MRUFOX1RZUEUpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0eXBlQm9vbGVhblR5cGU7ICAvLy9cblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMubGFiZWwubWF0Y2hOYW1lKG5hbWUpOyB9XG5cbiAgY2FsbChleHByZXNzaW9ucywgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENhbGxpbmcgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS4uLmApO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLm1hdGNoRXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUV4cHJlc3Npb25zQW5kUGFyYW1ldGVycyhleHByZXNzaW9ucywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uID0gdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSBleHByZXNzaW9uVHlwZSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgYW5kIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlICBkbyBub3QgbWF0Y2guYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMoZXhwcmVzc2lvbnMsIHBhcmFtZXRlcnMsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgZXhwcmVzc2lvbnMuZm9yRWFjaEV4cHJlc3Npb24oKGV4cHJlc3Npb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyKGluZGV4KTtcblxuICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUV4cHJlc3Npb25BbmRQYXJhbWV0ZXIoZXhwcmVzc2lvbiwgcGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cblxuZnVuY3Rpb24gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsLCBSZXR1cm5CbG9jaywgUGFyYW1ldGVycywgUHJvY2VkdXJlIH0gPSBkb20sXG4gICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IG5ldyBQcm9jZWR1cmUoc3RyaW5nLCB0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spO1xuXG4gIHJldHVybiBwcm9jZWR1cmVEZWNsYXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVMYWJlbFBhcmFtZXRlcnNBbmRSZXR1cm5CbG9jayh0eXBlLCBsYWJlbCwgcGFyYW1ldGVycywgcmV0dXJuQmxvY2spIHtcbiAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUsICAvLy9cbiAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgcGFyYW1ldGVyc1N0cmluZyA9IHBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHJldHVybkJsb2NrU3RyaW5nID0gcmV0dXJuQmxvY2suZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9ICR7bGFiZWxTdHJpbmd9KCR7cGFyYW1ldGVyc1N0cmluZ30pICR7cmV0dXJuQmxvY2tTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlc0Zyb21FeHByZXNzaW9uc0FuZFBhcmFtZXRlcnMiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZSIsInN0cmluZyIsInR5cGUiLCJsYWJlbCIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXRMYWJlbCIsImdldFBhcmFtZXRlcnMiLCJnZXRSZXR1cm5CbG9jayIsImlzQm9vbGVhbiIsInR5cGVCb29sZWFuVHlwZSIsIkJPT0xFQU5fVFlQRSIsImJvb2xlYW4iLCJtYXRjaE5hbWUiLCJuYW1lIiwiY2FsbCIsImV4cHJlc3Npb25zIiwiZmlsZUNvbnRleHQiLCJjb250ZXh0IiwicHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaEV4cHJlc3Npb25zIiwidmFyaWFibGVzIiwiZXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiZXhwcmVzc2lvblR5cGUiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImZvckVhY2hFeHByZXNzaW9uIiwiaW5kZXgiLCJWYXJpYWJsZSIsImRvbSIsInBhcmFtZXRlciIsImdldFBhcmFtZXRlciIsInZhcmlhYmxlIiwiZnJvbUV4cHJlc3Npb25BbmRQYXJhbWV0ZXIiLCJwdXNoIiwiTGFiZWwiLCJSZXR1cm5CbG9jayIsIlBhcmFtZXRlcnMiLCJ0eXBlRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21UeXBlTGFiZWxQYXJhbWV0ZXJzQW5kUmV0dXJuQmxvY2siLCJ0eXBlU3RyaW5nIiwibGFiZWxTdHJpbmciLCJwYXJhbWV0ZXJzU3RyaW5nIiwicmV0dXJuQmxvY2tTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFXQSxPQTJFRztlQTNFSDs7SUE2RWdCQSxxQ0FBcUM7ZUFBckNBOzs7MkRBdEZBO2dFQUNNO3FCQUVJ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
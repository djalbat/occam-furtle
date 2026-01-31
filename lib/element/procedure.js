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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _elements = require("../elements");
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
var _Procedure;
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
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function variablesFromExpressionsAndParameters(expressions, parameters, context) {
    var variables = [];
    expressions.forEachExpression(function(expression, index) {
        var parameter = parameters.getParameter(index);
        if (parameter !== null) {
            var variable = (0, _element.variableFromExpressionAndParameter)(expression, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZUZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZUJvb2xlYW5UeXBlID0gKHRoaXMudHlwZSA9PT0gQk9PTEVBTl9UWVBFKSxcbiAgICAgICAgICBib29sZWFuID0gdHlwZUJvb2xlYW5UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLmxhYmVsLmdldE5hbWUoKTsgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmxhYmVsLm1hdGNoTmFtZShuYW1lKTsgfVxuXG4gIGNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLi4uYCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMubWF0Y2hFeHByZXNzaW9ucyhleHByZXNzaW9ucywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tRXhwcmVzc2lvbnNBbmRQYXJhbWV0ZXJzKGV4cHJlc3Npb25zLCB0aGlzLnBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlzLnJldHVybkJsb2NrLmV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IGV4cHJlc3Npb25UeXBlKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBhbmQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSdzICcke3RoaXMudHlwZX0nIHR5cGUgIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uY2FsbGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVcIjtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbUV4cHJlc3Npb25zQW5kUGFyYW1ldGVycyhleHByZXNzaW9ucywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICBleHByZXNzaW9ucy5mb3JFYWNoRXhwcmVzc2lvbigoZXhwcmVzc2lvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbUV4cHJlc3Npb25BbmRQYXJhbWV0ZXIoZXhwcmVzc2lvbiwgcGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZXNGcm9tRXhwcmVzc2lvbnNBbmRQYXJhbWV0ZXJzIiwiZGVmaW5lIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldExhYmVsIiwiZ2V0UGFyYW1ldGVycyIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsImdldE5hbWUiLCJtYXRjaE5hbWUiLCJuYW1lIiwiY2FsbCIsImV4cHJlc3Npb25zIiwiY29udGV4dCIsInByb2NlZHVyZVN0cmluZyIsInRyYWNlIiwibWF0Y2hFeHByZXNzaW9ucyIsInZhcmlhYmxlcyIsImV4cHJlc3Npb24iLCJldmFsdWF0ZSIsImV4cHJlc3Npb25UeXBlIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmb3JFYWNoRXhwcmVzc2lvbiIsImluZGV4IiwicGFyYW1ldGVyIiwiZ2V0UGFyYW1ldGVyIiwidmFyaWFibGUiLCJ2YXJpYWJsZUZyb21FeHByZXNzaW9uQW5kUGFyYW1ldGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUUE7ZUFBQTs7UUFtRWdCQTtlQUFBQTs7O2dFQXpFTTt3QkFFQztxQkFDTTt1QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuRCxXQUFlQyxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRDlCTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQW1CLElBQUksQ0FBQ1YsSUFBSSxLQUFLVyxtQkFBWSxFQUM3Q0MsVUFBVUYsaUJBQWtCLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNaLEtBQUssQ0FBQ1ksT0FBTztZQUFJOzs7WUFFekNDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJO2dCQUFJLE9BQU8sSUFBSSxDQUFDZCxLQUFLLENBQUNhLFNBQVMsQ0FBQ0M7WUFBTzs7O1lBRXJEQyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsV0FBVyxFQUFFQyxPQUFPO2dCQUN2QixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDcEIsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDbUIsUUFBUUUsS0FBSyxDQUFDLEFBQUMsZ0JBQStCLE9BQWhCRCxpQkFBZ0I7Z0JBRTlDLElBQUksQ0FBQ2pCLFVBQVUsQ0FBQ21CLGdCQUFnQixDQUFDSixhQUFhQztnQkFFOUMsSUFBTUksWUFBWTFCLHNDQUFzQ3FCLGFBQWEsSUFBSSxDQUFDZixVQUFVLEVBQUVnQixVQUNoRkssYUFBYSxJQUFJLENBQUNwQixXQUFXLENBQUNxQixRQUFRLENBQUNGLFdBQVdKLFVBQ2xETyxpQkFBaUJGLFdBQVdsQixPQUFPO2dCQUV6QyxJQUFJLElBQUksQ0FBQ0wsSUFBSSxLQUFLeUIsZ0JBQWdCO29CQUNoQyxJQUFNQyxtQkFBbUJILFdBQVdJLFFBQVEsQ0FBQ1QsVUFDdkNVLFVBQVUsQUFBQyxPQUF3Q0gsT0FBbENDLGtCQUFpQixtQkFBa0RQLE9BQWpDTSxnQkFBZSxvQkFBbUQsT0FBakNOLGlCQUFnQixtQkFBMkIsT0FBVixJQUFJLENBQUNuQixJQUFJLEVBQUMsMEJBQy9INkIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFYLFFBQVFjLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQmIsaUJBQWdCO2dCQUVoRCxPQUFPSTtZQUNUOzs7O0tBRUEsNkJBQU9SLFFBQU87QUFHVCxTQUFTbkIsc0NBQXNDcUIsV0FBVyxFQUFFZixVQUFVLEVBQUVnQixPQUFPO0lBQ3BGLElBQU1JLFlBQVksRUFBRTtJQUVwQkwsWUFBWWdCLGlCQUFpQixDQUFDLFNBQUNWLFlBQVlXO1FBQ3pDLElBQU1DLFlBQVlqQyxXQUFXa0MsWUFBWSxDQUFDRjtRQUUxQyxJQUFJQyxjQUFjLE1BQU07WUFDdEIsSUFBTUUsV0FBV0MsSUFBQUEsMkNBQWtDLEVBQUNmLFlBQVlZLFdBQVdqQjtZQUUzRUksVUFBVWlCLElBQUksQ0FBQ0Y7UUFDakI7SUFDRjtJQUVBLE9BQU9mO0FBQ1QifQ==
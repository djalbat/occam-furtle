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
    get variablesFromPrimitivesAndParameters () {
        return variablesFromPrimitivesAndParameters;
    }
});
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
            value: function call(primitives, context) {
                var procedureString = this.string; ///
                context.trace("Calling the '".concat(procedureString, "' procedure..."));
                this.parameters.matchExpressions(primitives, context);
                var variables = variablesFromPrimitivesAndParameters(primitives, this.parameters, context), expression = this.returnBlock.evaluate(variables, context), expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type and the '").concat(procedureString, "' procedure's '").concat(this.type, "' type  do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...called the '".concat(procedureString, "' procedure."));
                return expression;
            }
        }
    ]);
    return Procedure;
}(), _define_property(_Procedure, "name", "Procedure"), _Procedure));
function variablesFromPrimitivesAndParameters(primitives, parameters, context) {
    var variables = [];
    primitives.forEachPrimitive(function(primitive, index) {
        var parameter = parameters.getParameter(index);
        if (parameter !== null) {
            var Variable = _elements.default.Variable, variable = Variable.fromPrimitiveAndParameter(primitive, parameter, context);
            variables.push(variable);
        }
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9jZWR1cmUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGxhYmVsLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBpc0Jvb2xlYW4oKSB7XG4gICAgY29uc3QgdHlwZUJvb2xlYW5UeXBlID0gKHRoaXMudHlwZSA9PT0gQk9PTEVBTl9UWVBFKSxcbiAgICAgICAgICBib29sZWFuID0gdHlwZUJvb2xlYW5UeXBlOyAgLy8vXG5cbiAgICByZXR1cm4gYm9vbGVhbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLmxhYmVsLmdldE5hbWUoKTsgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmxhYmVsLm1hdGNoTmFtZShuYW1lKTsgfVxuXG4gIGNhbGwocHJpbWl0aXZlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUuLi5gKTtcblxuICAgIHRoaXMucGFyYW1ldGVycy5tYXRjaEV4cHJlc3Npb25zKHByaW1pdGl2ZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gdmFyaWFibGVzRnJvbVByaW1pdGl2ZXNBbmRQYXJhbWV0ZXJzKHByaW1pdGl2ZXMsIHRoaXMucGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIGFuZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlJ3MgJyR7dGhpcy50eXBlfScgdHlwZSAgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZVwiO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tUHJpbWl0aXZlc0FuZFBhcmFtZXRlcnMocHJpbWl0aXZlcywgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICBwcmltaXRpdmVzLmZvckVhY2hQcmltaXRpdmUoKHByaW1pdGl2ZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzLmdldFBhcmFtZXRlcihpbmRleCk7XG5cbiAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVByaW1pdGl2ZUFuZFBhcmFtZXRlcihwcmltaXRpdmUsIHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVzRnJvbVByaW1pdGl2ZXNBbmRQYXJhbWV0ZXJzIiwiZGVmaW5lIiwiUHJvY2VkdXJlIiwic3RyaW5nIiwidHlwZSIsImxhYmVsIiwicGFyYW1ldGVycyIsInJldHVybkJsb2NrIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldExhYmVsIiwiZ2V0UGFyYW1ldGVycyIsImdldFJldHVybkJsb2NrIiwiaXNCb29sZWFuIiwidHlwZUJvb2xlYW5UeXBlIiwiQk9PTEVBTl9UWVBFIiwiYm9vbGVhbiIsImdldE5hbWUiLCJtYXRjaE5hbWUiLCJuYW1lIiwiY2FsbCIsInByaW1pdGl2ZXMiLCJjb250ZXh0IiwicHJvY2VkdXJlU3RyaW5nIiwidHJhY2UiLCJtYXRjaEV4cHJlc3Npb25zIiwidmFyaWFibGVzIiwiZXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiZXhwcmVzc2lvblR5cGUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmb3JFYWNoUHJpbWl0aXZlIiwicHJpbWl0aXZlIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJnZXRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwidmFyaWFibGUiLCJmcm9tUHJpbWl0aXZlQW5kUGFyYW1ldGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBUUE7ZUFBQTs7UUFtRWdCQTtlQUFBQTs7O2dFQXpFSztnRUFDQztxQkFHTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUMsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQUQ5Qkw7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxLQUFLO1lBQ25COzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxVQUFVO1lBQ3hCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGtCQUFtQixJQUFJLENBQUNWLElBQUksS0FBS1csbUJBQVksRUFDN0NDLFVBQVVGLGlCQUFrQixHQUFHO2dCQUVyQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDWixLQUFLLENBQUNZLE9BQU87WUFBSTs7O1lBRXpDQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSTtnQkFBSSxPQUFPLElBQUksQ0FBQ2QsS0FBSyxDQUFDYSxTQUFTLENBQUNDO1lBQU87OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLFVBQVUsRUFBRUMsT0FBTztnQkFDdEIsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ3BCLE1BQU0sRUFBRyxHQUFHO2dCQUV6Q21CLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGdCQUErQixPQUFoQkQsaUJBQWdCO2dCQUU5QyxJQUFJLENBQUNqQixVQUFVLENBQUNtQixnQkFBZ0IsQ0FBQ0osWUFBWUM7Z0JBRTdDLElBQU1JLFlBQVkxQixxQ0FBcUNxQixZQUFZLElBQUksQ0FBQ2YsVUFBVSxFQUFFZ0IsVUFDOUVLLGFBQWEsSUFBSSxDQUFDcEIsV0FBVyxDQUFDcUIsUUFBUSxDQUFDRixXQUFXSixVQUNsRE8saUJBQWlCRixXQUFXbEIsT0FBTztnQkFFekMsSUFBSSxJQUFJLENBQUNMLElBQUksS0FBS3lCLGdCQUFnQjtvQkFDaEMsSUFBTUMsbUJBQW1CSCxXQUFXbkIsU0FBUyxJQUN2Q3VCLFVBQVUsQUFBQyxPQUF3Q0YsT0FBbENDLGtCQUFpQixtQkFBa0RQLE9BQWpDTSxnQkFBZSxvQkFBbUQsT0FBakNOLGlCQUFnQixtQkFBMkIsT0FBVixJQUFJLENBQUNuQixJQUFJLEVBQUMsMEJBQy9INEIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFWLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQlosaUJBQWdCO2dCQUVoRCxPQUFPSTtZQUNUOzs7O0tBRUEsNkJBQU9SLFFBQU87QUFHVCxTQUFTbkIscUNBQXFDcUIsVUFBVSxFQUFFZixVQUFVLEVBQUVnQixPQUFPO0lBQ2xGLElBQU1JLFlBQVksRUFBRTtJQUVwQkwsV0FBV2UsZ0JBQWdCLENBQUMsU0FBQ0MsV0FBV0M7UUFDdEMsSUFBTUMsWUFBWWpDLFdBQVdrQyxZQUFZLENBQUNGO1FBRTFDLElBQUlDLGNBQWMsTUFBTTtZQUN0QixJQUFNLEFBQUVFLFdBQWFDLGlCQUFRLENBQXJCRCxVQUNGRSxXQUFXRixTQUFTRyx5QkFBeUIsQ0FBQ1AsV0FBV0UsV0FBV2pCO1lBRTFFSSxVQUFVbUIsSUFBSSxDQUFDRjtRQUNqQjtJQUNGO0lBRUEsT0FBT2pCO0FBQ1QifQ==
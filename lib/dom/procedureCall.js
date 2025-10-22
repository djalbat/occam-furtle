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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
var _ProcedureCall;
var expressionProcedureCallNodeQuery = (0, _query.nodeQuery)("/expression/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, name, expressions) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.name = name;
        this.expressions = expressions;
    }
    _create_class(ProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getExpressions",
            value: function getExpressions() {
                return this.expressions;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var procedureCallString = this.string; ///
                context.trace("Evaluating the '".concat(procedureCallString, "' procedure call..."));
                var procedurePresent = context.isProcedurePresentByName(this.name);
                if (!procedurePresent) {
                    var message = "The '".concat(procedureCallString, " procedure is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var procedure = context.findProcedureByName(this.name), expressions = this.expressions.evaluate(context), expression = procedure.call(expressions, context);
                context.debug("...evaluated the '".concat(procedureCallString, "' procedure call."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var procedureCall = null;
                var expressionProcedureCallNode = expressionProcedureCallNodeQuery(expressionNode);
                if (expressionProcedureCallNode !== null) {
                    var procedureCallNode = expressionProcedureCallNode; ///
                    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function procedureCallFromProcedureCallNode(procedureCallNode, context) {
    var Name = _dom.default.Name, Expressions = _dom.default.Expressions, ProcedureCall = _dom.default.ProcedureCall, name = Name.fromProcedureCallNode(procedureCallNode, context), expressions = Expressions.fromProcedureCallNode(procedureCallNode, context), string = stringFromExpressionsAndName(expressions, name, context), procedureCall = new ProcedureCall(string, name, expressions);
    return procedureCall;
}
function stringFromExpressionsAndName(expressions, name, context) {
    var expressionsString = expressions.getString(), referenceString = name.getString(), string = "".concat(referenceString, "(").concat(expressionsString, ")");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcHJvY2VkdXJlQ2FsbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvY2VkdXJlQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgZXhwcmVzc2lvbnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRFeHByZXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9ucztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKHRoaXMubmFtZSk7XG5cbiAgICBpZiAoIXByb2NlZHVyZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9IHByb2NlZHVyZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZSh0aGlzLm5hbWUpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gdGhpcy5leHByZXNzaW9ucy5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uID0gcHJvY2VkdXJlLmNhbGwoZXhwcmVzc2lvbnMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZSA9IGV4cHJlc3Npb25Qcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlOyAvLy9cblxuICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvY2VkdXJlQ2FsbEZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWUsIEV4cHJlc3Npb25zLCBQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgIG5hbWUgPSBOYW1lLmZyb21Qcm9jZWR1cmVDYWxsTm9kZShwcm9jZWR1cmVDYWxsTm9kZSwgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb25zQW5kTmFtZShleHByZXNzaW9ucywgbmFtZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIG5hbWUsIGV4cHJlc3Npb25zKTtcblxuICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUV4cHJlc3Npb25zQW5kTmFtZShleHByZXNzaW9ucywgbmFtZSwgY29udGV4dCkge1xuICBjb25zdCBleHByZXNzaW9uc1N0cmluZyA9IGV4cHJlc3Npb25zLmdldFN0cmluZygpLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSBuYW1lLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgJHtyZWZlcmVuY2VTdHJpbmd9KCR7ZXhwcmVzc2lvbnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiZXhwcmVzc2lvblByb2NlZHVyZUNhbGxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb2NlZHVyZUNhbGwiLCJzdHJpbmciLCJuYW1lIiwiZXhwcmVzc2lvbnMiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0RXhwcmVzc2lvbnMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsImV4cHJlc3Npb24iLCJjYWxsIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsInByb2NlZHVyZUNhbGwiLCJleHByZXNzaW9uUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJOYW1lIiwiZG9tIiwiRXhwcmVzc2lvbnMiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJzdHJpbmdGcm9tRXhwcmVzc2lvbnNBbmROYW1lIiwiZXhwcmVzc2lvbnNTdHJpbmciLCJyZWZlcmVuY2VTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsbUNBQW1DQyxJQUFBQSxnQkFBUyxFQUFDO0lBRW5ELFdBQWVDLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVztnQ0FETkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxXQUFXLEdBQUdBOzs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFN0NPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUFzQyxPQUFwQkQscUJBQW9CO2dCQUVyRCxJQUFNRSxtQkFBbUJILFFBQVFJLHdCQUF3QixDQUFDLElBQUksQ0FBQ1YsSUFBSTtnQkFFbkUsSUFBSSxDQUFDUyxrQkFBa0I7b0JBQ3JCLElBQU1FLFVBQVUsQUFBQyxRQUEyQixPQUFwQkoscUJBQW9CLGdDQUN0Q0ssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsWUFBWVQsUUFBUVUsbUJBQW1CLENBQUMsSUFBSSxDQUFDaEIsSUFBSSxHQUNqREMsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQyxVQUN4Q1csYUFBYUYsVUFBVUcsSUFBSSxDQUFDakIsYUFBYUs7Z0JBRS9DQSxRQUFRYSxLQUFLLENBQUMsQUFBQyxxQkFBd0MsT0FBcEJaLHFCQUFvQjtnQkFFdkQsT0FBT1U7WUFDVDs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRWYsT0FBTztnQkFDL0MsSUFBSWdCLGdCQUFnQjtnQkFFcEIsSUFBTUMsOEJBQThCNUIsaUNBQWlDMEI7Z0JBRXJFLElBQUlFLGdDQUFnQyxNQUFNO29CQUN4QyxJQUFNQyxvQkFBb0JELDZCQUE2QixHQUFHO29CQUUxREQsZ0JBQWdCRyxtQ0FBbUNELG1CQUFtQmxCO2dCQUN4RTtnQkFFQSxPQUFPZ0I7WUFDVDs7OztLQWRBLGlDQUFPdEIsUUFBTztBQWlCaEIsU0FBU3lCLG1DQUFtQ0QsaUJBQWlCLEVBQUVsQixPQUFPO0lBQ3BFLElBQVFvQixPQUFxQ0MsWUFBRyxDQUF4Q0QsTUFBTUUsY0FBK0JELFlBQUcsQ0FBbENDLGFBQWE5QixnQkFBa0I2QixZQUFHLENBQXJCN0IsZUFDckJFLE9BQU8wQixLQUFLRyxxQkFBcUIsQ0FBQ0wsbUJBQW1CbEIsVUFDckRMLGNBQWMyQixZQUFZQyxxQkFBcUIsQ0FBQ0wsbUJBQW1CbEIsVUFDbkVQLFNBQVMrQiw2QkFBNkI3QixhQUFhRCxNQUFNTSxVQUN6RGdCLGdCQUFnQixJQUFJeEIsY0FBY0MsUUFBUUMsTUFBTUM7SUFFdEQsT0FBT3FCO0FBQ1Q7QUFFQSxTQUFTUSw2QkFBNkI3QixXQUFXLEVBQUVELElBQUksRUFBRU0sT0FBTztJQUM5RCxJQUFNeUIsb0JBQW9COUIsWUFBWUMsU0FBUyxJQUN6QzhCLGtCQUFrQmhDLEtBQUtFLFNBQVMsSUFDaENILFNBQVMsQUFBQyxHQUFxQmdDLE9BQW5CQyxpQkFBZ0IsS0FBcUIsT0FBbEJELG1CQUFrQjtJQUV2RCxPQUFPaEM7QUFDVCJ9
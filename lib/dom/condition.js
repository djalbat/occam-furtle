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
var _Condition;
var ternaryConditionNodeQuery = (0, _query.nodeQuery)("/ternary/condition"), conditionalBlocksConditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/condition");
var _default = (0, _dom.domAssigned)((_Condition = /*#__PURE__*/ function() {
    function Condition(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition) {
        _class_call_check(this, Condition);
        this.string = string;
        this.value = value;
        this.comparison = comparison;
        this.bitwiseCondition = bitwiseCondition;
        this.negatedCondition = negatedCondition;
        this.bracketedCondition = bracketedCondition;
    }
    _create_class(Condition, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getComparison",
            value: function getComparison() {
                return this.comparison;
            }
        },
        {
            key: "getBitwiseCondition",
            value: function getBitwiseCondition() {
                return this.bitwiseCondition;
            }
        },
        {
            key: "getNegatedCondition",
            value: function getNegatedCondition() {
                return this.negatedCondition;
            }
        },
        {
            key: "getBracketedCondition",
            value: function getBracketedCondition() {
                return this.bracketedCondition;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var conditionString = this.string; ///
                context.trace("Evaluating the '".concat(conditionString, "' condition..."));
                if (this.value !== null) {
                    value = this.value.evaluate(context);
                    var valueType = value.getType();
                    if (valueType !== _types.BOOLEAN_TYPE) {
                        var valueString = value.asString(context), message = "The '".concat(valueType, "' type of the '").concat(valueString, "' value should be '").concat(_types.BOOLEAN_TYPE, "'"), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                } else if (this.comparison !== null) {
                    value = this.comparison.evaluate(context);
                } else if (this.bitwiseCondition !== null) {
                    value = this.bitwiseCondition.evaluate(context);
                } else if (this.negatedCondition !== null) {
                    value = this.negatedCondition.evaluate(context);
                } else if (this.bracketedCondition !== null) {
                    value = this.bracketedCondition.evaluate(context);
                }
                context.debug("...evaluated the '".concat(conditionString, "' condition."));
                return value;
            }
        }
    ], [
        {
            key: "fromTernaryNode",
            value: function fromTernaryNode(ternaryNode, context) {
                var ternaryConditionNode = ternaryConditionNodeQuery(ternaryNode), conditionNode = ternaryConditionNode, condition = conditionFromConditionNode(conditionNode, context);
                return condition;
            }
        },
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var condition = conditionFromConditionNode(conditionNode, context);
                return condition;
            }
        },
        {
            key: "fromConditionalBlocksNode",
            value: function fromConditionalBlocksNode(conditionalBlocksNode, context) {
                var conditionalBlocksConditionNode = conditionalBlocksConditionNodeQuery(conditionalBlocksNode), conditionNode = conditionalBlocksConditionNode, condition = conditionFromConditionNode(conditionNode, context);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));
function conditionFromConditionNode(conditionNode, context) {
    var Condition = _dom.default.Condition, Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, NegatedCondition = _dom.default.NegatedCondition, BracketedCondition = _dom.default.BracketedCondition, node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), negatedCondition = NegatedCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition);
    return condition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB0ZXJuYXJ5Q29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvY29uZGl0aW9uXCIpLFxuICAgICAgY29uZGl0aW9uYWxCbG9ja3NDb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9ja3MvY29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25kaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBuZWdhdGVkQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLmJpdHdpc2VDb25kaXRpb24gPSBiaXR3aXNlQ29uZGl0aW9uO1xuICAgIHRoaXMubmVnYXRlZENvbmRpdGlvbiA9IG5lZ2F0ZWRDb25kaXRpb247XG4gICAgdGhpcy5icmFja2V0ZWRDb25kaXRpb24gPSBicmFja2V0ZWRDb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRCaXR3aXNlQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VDb25kaXRpb247XG4gIH1cblxuICBnZXROZWdhdGVkQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRDb25kaXRpb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbmRpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb25kaXRpb25TdHJpbmd9JyBjb25kaXRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlVHlwZX0nIHR5cGUgb2YgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nYCxcbiAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VDb25kaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iaXR3aXNlQ29uZGl0aW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkQ29uZGl0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubmVnYXRlZENvbmRpdGlvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Y29uZGl0aW9uU3RyaW5nfScgY29uZGl0aW9uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJuYXJ5Q29uZGl0aW9uTm9kZSA9IHRlcm5hcnlDb25kaXRpb25Ob2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSB0ZXJuYXJ5Q29uZGl0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgY29uZGl0aW9uID0gY29uZGl0aW9uRnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uZGl0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBjb25kaXRpb25Gcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25kaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZShjb25kaXRpb25hbEJsb2Nrc05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2Nrc0NvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25hbEJsb2Nrc0NvbmRpdGlvbk5vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpLFxuICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25hbEJsb2Nrc0NvbmRpdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBjb25kaXRpb24gPSBjb25kaXRpb25Gcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb25kaXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjb25kaXRpb25Gcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uZGl0aW9uLCBWYWx1ZSwgQ29tcGFyaXNvbiwgQml0d2lzZUNvbmRpdGlvbiwgTmVnYXRlZENvbmRpdGlvbiwgQnJhY2tldGVkQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBjb25kaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBiaXR3aXNlQ29uZGl0aW9uID0gQml0d2lzZUNvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbmVnYXRlZENvbmRpdGlvbiA9IE5lZ2F0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZENvbmRpdGlvbiA9IEJyYWNrZXRlZENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBuZWdhdGVkQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pO1xuXG4gIHJldHVybiBjb25kaXRpb247XG59Il0sIm5hbWVzIjpbInRlcm5hcnlDb25kaXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25hbEJsb2Nrc0NvbmRpdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uZGl0aW9uIiwic3RyaW5nIiwidmFsdWUiLCJjb21wYXJpc29uIiwiYml0d2lzZUNvbmRpdGlvbiIsIm5lZ2F0ZWRDb25kaXRpb24iLCJicmFja2V0ZWRDb25kaXRpb24iLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldENvbXBhcmlzb24iLCJnZXRCaXR3aXNlQ29uZGl0aW9uIiwiZ2V0TmVnYXRlZENvbmRpdGlvbiIsImdldEJyYWNrZXRlZENvbmRpdGlvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImNvbmRpdGlvblN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21UZXJuYXJ5Tm9kZSIsInRlcm5hcnlOb2RlIiwidGVybmFyeUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwiY29uZGl0aW9uIiwiY29uZGl0aW9uRnJvbUNvbmRpdGlvbk5vZGUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImZyb21Db25kaXRpb25hbEJsb2Nrc05vZGUiLCJjb25kaXRpb25hbEJsb2Nrc05vZGUiLCJjb25kaXRpb25hbEJsb2Nrc0NvbmRpdGlvbk5vZGUiLCJuYW1lIiwiZG9tIiwiVmFsdWUiLCJDb21wYXJpc29uIiwiQml0d2lzZUNvbmRpdGlvbiIsIk5lZ2F0ZWRDb25kaXRpb24iLCJCcmFja2V0ZWRDb25kaXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7Z0VBQ007cUJBRUk7cUJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1BLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQyx1QkFDdENDLHNDQUFzQ0QsSUFBQUEsZ0JBQVMsRUFBQztJQUV0RCxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0I7Z0NBRDlETjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sS0FBSztZQUNuQjs7O1lBRUFPLEtBQUFB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
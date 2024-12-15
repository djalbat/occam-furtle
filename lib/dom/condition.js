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
var conditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/condition");
var _default = (0, _dom.domAssigned)((_Condition = /*#__PURE__*/ function() {
    function Condition(string, value, comparison, bitwiseCondition, bracketedCondition) {
        _class_call_check(this, Condition);
        this.string = string;
        this.value = value;
        this.comparison = comparison;
        this.bitwiseCondition = bitwiseCondition;
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
            key: "getBracketedCondition",
            value: function getBracketedCondition() {
                return this.bracketedCondition;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value;
                var conditionString = this.string; ///
                context.trace("Resolving the '".concat(conditionString, "' condition..."));
                if (this.value !== null) {
                    value = this.value.resolve(context);
                    var valueType = value.getType();
                    if (valueType !== _types.BOOLEAN_TYPE) {
                        var valueString = value.asString(context), message = "The '".concat(valueType, "' type of the '").concat(valueString, "' value should be '").concat(_types.BOOLEAN_TYPE, "'"), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                }
                if (this.comparison !== null) {
                    value = this.comparison.resolve(context);
                }
                if (this.bitwiseCondition !== null) {
                    value = this.bitwiseCondition.resolve(context);
                }
                if (this.bracketedCondition !== null) {
                    value = this.bracketedCondition.resolve(context);
                }
                context.debug("...resolved the '".concat(conditionString, "' condition."));
                return value;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        },
        {
            key: "fromConditionalBlocksNode",
            value: function fromConditionalBlocksNode(conditionalBlocksNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, conditionNode = conditionNodeQuery(conditionalBlocksNode), node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9ja3MvY29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25kaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLmJpdHdpc2VDb25kaXRpb24gPSBiaXR3aXNlQ29uZGl0aW9uO1xuICAgIHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uID0gYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uO1xuICB9XG5cbiAgZ2V0Qml0d2lzZUNvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iaXR3aXNlQ29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0QnJhY2tldGVkQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZENvbmRpdGlvbjtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbmRpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2NvbmRpdGlvblN0cmluZ30nIGNvbmRpdGlvbi4uLmApO1xuXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVR5cGV9JyB0eXBlIG9mIHRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9J2AsXG4gICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24ucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5iaXR3aXNlQ29uZGl0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYml0d2lzZUNvbmRpdGlvbi5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJyYWNrZXRlZENvbmRpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJyYWNrZXRlZENvbmRpdGlvbi5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtjb25kaXRpb25TdHJpbmd9JyBjb25kaXRpb24uYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhbHVlLCBDb21wYXJpc29uLCBCaXR3aXNlQ29uZGl0aW9uLCBCcmFja2V0ZWRDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gY29uZGl0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBiaXR3aXNlQ29uZGl0aW9uID0gQml0d2lzZUNvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBCcmFja2V0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24sIEJpdHdpc2VDb25kaXRpb24sIEJyYWNrZXRlZENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICBub2RlID0gY29uZGl0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBiaXR3aXNlQ29uZGl0aW9uID0gQml0d2lzZUNvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBCcmFja2V0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb24iLCJzdHJpbmciLCJ2YWx1ZSIsImNvbXBhcmlzb24iLCJiaXR3aXNlQ29uZGl0aW9uIiwiYnJhY2tldGVkQ29uZGl0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRDb21wYXJpc29uIiwiZ2V0Qml0d2lzZUNvbmRpdGlvbiIsImdldEJyYWNrZXRlZENvbmRpdGlvbiIsInJlc29sdmUiLCJjb250ZXh0IiwiY29uZGl0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiZnJvbUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwiVmFsdWUiLCJkb20iLCJDb21wYXJpc29uIiwiQml0d2lzZUNvbmRpdGlvbiIsIkJyYWNrZXRlZENvbmRpdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJjb25kaXRpb24iLCJmcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3NOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO2dFQUNNO3FCQUVJO3FCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0I7Z0NBRDVDTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFH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
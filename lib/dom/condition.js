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
var conditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/condition");
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
            key: "fromConditionalBlockNode",
            value: function fromConditionalBlockNode(conditionalBlockNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, conditionNode = conditionNodeQuery(conditionalBlockNode), node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9jb25kaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFsdWUsIGNvbXBhcmlzb24sIGJpdHdpc2VDb25kaXRpb24sIGJyYWNrZXRlZENvbmRpdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICAgIHRoaXMuYml0d2lzZUNvbmRpdGlvbiA9IGJpdHdpc2VDb25kaXRpb247XG4gICAgdGhpcy5icmFja2V0ZWRDb25kaXRpb24gPSBicmFja2V0ZWRDb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRCaXR3aXNlQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VDb25kaXRpb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgY29uZGl0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7Y29uZGl0aW9uU3RyaW5nfScgY29uZGl0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlVHlwZX0nIHR5cGUgb2YgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nYCxcbiAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29tcGFyaXNvbi5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJpdHdpc2VDb25kaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iaXR3aXNlQ29uZGl0aW9uLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke2NvbmRpdGlvblN0cmluZ30nIGNvbmRpdGlvbi5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24sIEJpdHdpc2VDb25kaXRpb24sIEJyYWNrZXRlZENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb25kaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGJpdHdpc2VDb25kaXRpb24gPSBCaXR3aXNlQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbmRpdGlvbiA9IEJyYWNrZXRlZENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb24gPSBuZXcgQ29uZGl0aW9uKHN0cmluZywgdmFsdWUsIGNvbXBhcmlzb24sIGJpdHdpc2VDb25kaXRpb24sIGJyYWNrZXRlZENvbmRpdGlvbik7XG5cbiAgICByZXR1cm4gY29uZGl0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25hbEJsb2NrTm9kZShjb25kaXRpb25hbEJsb2NrTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24sIEJpdHdpc2VDb25kaXRpb24sIEJyYWNrZXRlZENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgIG5vZGUgPSBjb25kaXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbXBhcmlzb24gPSBDb21wYXJpc29uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGJpdHdpc2VDb25kaXRpb24gPSBCaXR3aXNlQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbmRpdGlvbiA9IEJyYWNrZXRlZENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb24gPSBuZXcgQ29uZGl0aW9uKHN0cmluZywgdmFsdWUsIGNvbXBhcmlzb24sIGJpdHdpc2VDb25kaXRpb24sIGJyYWNrZXRlZENvbmRpdGlvbik7XG5cbiAgICByZXR1cm4gY29uZGl0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb25kaXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbmRpdGlvbiIsInN0cmluZyIsInZhbHVlIiwiY29tcGFyaXNvbiIsImJpdHdpc2VDb25kaXRpb24iLCJicmFja2V0ZWRDb25kaXRpb24iLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldENvbXBhcmlzb24iLCJnZXRCaXR3aXNlQ29uZGl0aW9uIiwiZ2V0QnJhY2tldGVkQ29uZGl0aW9uIiwicmVzb2x2ZSIsImNvbnRleHQiLCJjb25kaXRpb25TdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJCT09MRUFOX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJWYWx1ZSIsImRvbSIsIkNvbXBhcmlzb24iLCJCaXR3aXNlQ29uZGl0aW9uIiwiQnJhY2tldGVkQ29uZGl0aW9uIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbmRpdGlvbiIsImZyb21Db25kaXRpb25hbEJsb2NrTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO2dFQUNNO3FCQUVJO3FCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0I7Z0NBRDVDTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtB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
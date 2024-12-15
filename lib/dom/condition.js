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
                if (this.negatedCondition !== null) {
                    value = this.negatedCondition.resolve(context);
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
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, NegatedCondition = _dom.default.NegatedCondition, BracketedCondition = _dom.default.BracketedCondition, node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), negatedCondition = NegatedCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition);
                return condition;
            }
        },
        {
            key: "fromConditionalBlocksNode",
            value: function fromConditionalBlocksNode(conditionalBlocksNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, NegatedCondition = _dom.default.NegatedCondition, BracketedCondition = _dom.default.BracketedCondition, conditionNode = conditionNodeQuery(conditionalBlocksNode), node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), negatedCondition = NegatedCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9ja3MvY29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25kaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBuZWdhdGVkQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgICB0aGlzLmJpdHdpc2VDb25kaXRpb24gPSBiaXR3aXNlQ29uZGl0aW9uO1xuICAgIHRoaXMubmVnYXRlZENvbmRpdGlvbiA9IG5lZ2F0ZWRDb25kaXRpb247XG4gICAgdGhpcy5icmFja2V0ZWRDb25kaXRpb24gPSBicmFja2V0ZWRDb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRCaXR3aXNlQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VDb25kaXRpb247XG4gIH1cblxuICBnZXROZWdhdGVkQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRDb25kaXRpb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgY29uZGl0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7Y29uZGl0aW9uU3RyaW5nfScgY29uZGl0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlVHlwZX0nIHR5cGUgb2YgdGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nYCxcbiAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29tcGFyaXNvbi5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJpdHdpc2VDb25kaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5iaXR3aXNlQ29uZGl0aW9uLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmVnYXRlZENvbmRpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLm5lZ2F0ZWRDb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icmFja2V0ZWRDb25kaXRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5icmFja2V0ZWRDb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29uZGl0aW9uU3RyaW5nfScgY29uZGl0aW9uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYWx1ZSwgQ29tcGFyaXNvbiwgQml0d2lzZUNvbmRpdGlvbiwgTmVnYXRlZENvbmRpdGlvbiwgQnJhY2tldGVkQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbmRpdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbmVnYXRlZENvbmRpdGlvbiA9IE5lZ2F0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24oc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgbmVnYXRlZENvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKTtcblxuICAgIHJldHVybiBjb25kaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZShjb25kaXRpb25hbEJsb2Nrc05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhbHVlLCBDb21wYXJpc29uLCBCaXR3aXNlQ29uZGl0aW9uLCBOZWdhdGVkQ29uZGl0aW9uLCBCcmFja2V0ZWRDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tzTm9kZSksXG4gICAgICAgICAgbm9kZSA9IGNvbmRpdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbmVnYXRlZENvbmRpdGlvbiA9IE5lZ2F0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24oc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgbmVnYXRlZENvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKTtcblxuICAgIHJldHVybiBjb25kaXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvbmRpdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uZGl0aW9uIiwic3RyaW5nIiwidmFsdWUiLCJjb21wYXJpc29uIiwiYml0d2lzZUNvbmRpdGlvbiIsIm5lZ2F0ZWRDb25kaXRpb24iLCJicmFja2V0ZWRDb25kaXRpb24iLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldENvbXBhcmlzb24iLCJnZXRCaXR3aXNlQ29uZGl0aW9uIiwiZ2V0TmVnYXRlZENvbmRpdGlvbiIsImdldEJyYWNrZXRlZENvbmRpdGlvbiIsInJlc29sdmUiLCJjb250ZXh0IiwiY29uZGl0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiQk9PTEVBTl9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiZnJvbUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwiVmFsdWUiLCJkb20iLCJDb21wYXJpc29uIiwiQml0d2lzZUNvbmRpdGlvbiIsIk5lZ2F0ZWRDb25kaXRpb24iLCJCcmFja2V0ZWRDb25kaXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiY29uZGl0aW9uIiwiZnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtnRUFDTTtxQkFFSTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGtCQUFrQjtnQ0FEOUROO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixLQUFLO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixVQUFVO1lBQ3hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixnQkFBZ0I7WUFDOUI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLGdCQUFnQjtZQUM5Qjs7O1lB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
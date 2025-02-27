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
var _Ternary;
var ifValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[0]"), ternaryNodeQuery = (0, _query.nodeQuery)("/value/ternary"), conditionNodeQuery = (0, _query.nodeQuery)("/ternary/condition"), elseValueNodeQuery = (0, _query.nodeQuery)("/ternary/value[1]");
var _default = (0, _dom.domAssigned)((_Ternary = /*#__PURE__*/ function() {
    function Ternary(string, condition, ifValue, elseValue) {
        _class_call_check(this, Ternary);
        this.string = string;
        this.condition = condition;
        this.ifValue = ifValue;
        this.elseValue = elseValue;
    }
    _create_class(Ternary, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
            }
        },
        {
            key: "getConditionBlock",
            value: function getConditionBlock() {
                return this.ifValue;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseValue;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var ternaryString = this.string; ///
                context.trace("Evaluating the '".concat(ternaryString, "' ternary..."));
                value = this.condition.evaluate(context);
                var boolean = value.getBoolean();
                value = boolean ? this.ifValue.evaluate(context) : this.elseValue.evaluate(context);
                context.debug("...evaluated the '".concat(ternaryString, "' ternary."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var ternary = null;
                var ternaryNode = ternaryNodeQuery(valueNode);
                if (ternaryNode !== null) {
                    var Value = _dom.default.Value, Condition = _dom.default.Condition, string = stringFromTernaryNode(ternaryNode, context), ifValueNode = ifValueNodeQuery(ternaryNode), elseValueNode = elseValueNodeQuery(ternaryNode), condition = Condition.fromTernaryNode(ternaryNode, context), ifValue = Value.fromValueNode(ifValueNode, context), elseValue = Value.fromValueNode(elseValueNode, context);
                    ternary = new Ternary(string, condition, ifValue, elseValue);
                }
                return ternary;
            }
        }
    ]);
    return Ternary;
}(), _define_property(_Ternary, "name", "Ternary"), _Ternary));
function stringFromTernaryNode(ternaryNode, context) {
    var string;
    var ifValueNode = ifValueNodeQuery(ternaryNode), elseValueNode = elseValueNodeQuery(ternaryNode), conditionNode = conditionNodeQuery(ternaryNode), ifValueString = context.nodeAsString(ifValueNode), elseValueString = context.nodeAsString(elseValueNode), conditionString = context.nodeAsString(conditionNode);
    string = "If (".concat(conditionString, ") ").concat(ifValueString, " ").concat(elseValueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdGVybmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBpZlZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVbMF1cIiksXG4gICAgICB0ZXJuYXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL3Rlcm5hcnlcIiksXG4gICAgICBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS9jb25kaXRpb25cIiksXG4gICAgICBlbHNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybmFyeS92YWx1ZVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVGVybmFyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uLCBpZlZhbHVlLCBlbHNlVmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICB0aGlzLmlmVmFsdWUgPSBpZlZhbHVlO1xuICAgIHRoaXMuZWxzZVZhbHVlID0gZWxzZVZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZlZhbHVlO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VWYWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB0ZXJuYXJ5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dGVybmFyeVN0cmluZ30nIHRlcm5hcnkuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy5jb25kaXRpb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgdmFsdWUgPSBib29sZWFuID9cbiAgICAgIHRoaXMuaWZWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KSA6XG4gICAgICAgIHRoaXMuZWxzZVZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt0ZXJuYXJ5U3RyaW5nfScgdGVybmFyeS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJuYXJ5XCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm5hcnkgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybmFyeU5vZGUgPSB0ZXJuYXJ5Tm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodGVybmFyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUsIENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlmVmFsdWVOb2RlID0gaWZWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgICAgICBlbHNlVmFsdWVOb2RlID0gZWxzZVZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IENvbmRpdGlvbi5mcm9tVGVybmFyeU5vZGUodGVybmFyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgaWZWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUoaWZWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZWxzZVZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShlbHNlVmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdGVybmFyeSA9IG5ldyBUZXJuYXJ5KHN0cmluZywgY29uZGl0aW9uLCBpZlZhbHVlLCBlbHNlVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJuYXJ5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm5hcnlOb2RlKHRlcm5hcnlOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgaWZWYWx1ZU5vZGUgPSBpZlZhbHVlTm9kZVF1ZXJ5KHRlcm5hcnlOb2RlKSxcbiAgICAgICAgZWxzZVZhbHVlTm9kZSA9IGVsc2VWYWx1ZU5vZGVRdWVyeSh0ZXJuYXJ5Tm9kZSksXG4gICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICBpZlZhbHVlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoaWZWYWx1ZU5vZGUpLFxuICAgICAgICBlbHNlVmFsdWVTdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhlbHNlVmFsdWVOb2RlKSxcbiAgICAgICAgY29uZGl0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29uZGl0aW9uTm9kZSk7XG5cbiAgc3RyaW5nID0gYElmICgke2NvbmRpdGlvblN0cmluZ30pICR7aWZWYWx1ZVN0cmluZ30gJHtlbHNlVmFsdWVTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImlmVmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJuYXJ5Tm9kZVF1ZXJ5IiwiY29uZGl0aW9uTm9kZVF1ZXJ5IiwiZWxzZVZhbHVlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJUZXJuYXJ5Iiwic3RyaW5nIiwiY29uZGl0aW9uIiwiaWZWYWx1ZSIsImVsc2VWYWx1ZSIsImdldFN0cmluZyIsImdldENvbmRpdGlvbiIsImdldENvbmRpdGlvbkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWUiLCJ0ZXJuYXJ5U3RyaW5nIiwidHJhY2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsInRlcm5hcnkiLCJ0ZXJuYXJ5Tm9kZSIsIlZhbHVlIiwiZG9tIiwiQ29uZGl0aW9uIiwic3RyaW5nRnJvbVRlcm5hcnlOb2RlIiwiaWZWYWx1ZU5vZGUiLCJlbHNlVmFsdWVOb2RlIiwiZnJvbVRlcm5hcnlOb2RlIiwibmFtZSIsImNvbmRpdGlvbk5vZGUiLCJpZlZhbHVlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZWxzZVZhbHVlU3RyaW5nIiwiY29uZGl0aW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxtQkFBbUJDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzdCQyxtQkFBbUJELElBQUFBLGdCQUFTLEVBQUMsbUJBQzdCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsdUJBQy9CRyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUksSUFBQUEsZ0JBQVcsNEJBQUM7YUFBTUMsUUFDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRGxCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDWCxNQUFNLEVBQUUsR0FBRztnQkFFdENTLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUFnQyxPQUFkRCxlQUFjO2dCQUUvQ0QsUUFBUSxJQUFJLENBQUNULFNBQVMsQ0FBQ08sUUFBUSxDQUFDQztnQkFFaEMsSUFBTUksVUFBVUgsTUFBTUksVUFBVTtnQkFFaENKLFFBQVFHLFVBQ04sSUFBSSxDQUFDWCxPQUFPLENBQUNNLFFBQVEsQ0FBQ0MsV0FDcEIsSUFBSSxDQUFDTixTQUFTLENBQUNLLFFBQVEsQ0FBQ0M7Z0JBRTVCQSxRQUFRTSxLQUFLLENBQUMsQUFBQyxxQkFBa0MsT0FBZEosZUFBYztnQkFFakQsT0FBT0Q7WUFDVDs7OztZQUlPTSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVSLE9BQU87Z0JBQ3JDLElBQUlTLFVBQVU7Z0JBRWQsSUFBTUMsY0FBY3hCLGlCQUFpQnNCO2dCQUVyQyxJQUFJRSxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBUUMsUUFBcUJDLFlBQUcsQ0FBeEJELE9BQU9FLFlBQWNELFlBQUcsQ0FBakJDLFdBQ1R0QixTQUFTdUIsc0JBQXNCSixhQUFhVixVQUM1Q2UsY0FBYy9CLGlCQUFpQjBCLGNBQy9CTSxnQkFBZ0I1QixtQkFBbUJzQixjQUNuQ2xCLFlBQVlxQixVQUFVSSxlQUFlLENBQUNQLGFBQWFWLFVBQ25EUCxVQUFVa0IsTUFBTUosYUFBYSxDQUFDUSxhQUFhZixVQUMzQ04sWUFBWWlCLE1BQU1KLGFBQWEsQ0FBQ1MsZUFBZWhCO29CQUVyRFMsVUFBVSxJQUFJbkIsUUFBUUMsUUFBUUMsV0FBV0MsU0FBU0M7Z0JBQ3BEO2dCQUVBLE9BQU9lO1lBQ1Q7Ozs7S0FwQkEsMkJBQU9TLFFBQU87QUF1QmhCLFNBQVNKLHNCQUFzQkosV0FBVyxFQUFFVixPQUFPO0lBQ2pELElBQUlUO0lBRUosSUFBTXdCLGNBQWMvQixpQkFBaUIwQixjQUMvQk0sZ0JBQWdCNUIsbUJBQW1Cc0IsY0FDbkNTLGdCQUFnQmhDLG1CQUFtQnVCLGNBQ25DVSxnQkFBZ0JwQixRQUFRcUIsWUFBWSxDQUFDTixjQUNyQ08sa0JBQWtCdEIsUUFBUXFCLFlBQVksQ0FBQ0wsZ0JBQ3ZDTyxrQkFBa0J2QixRQUFRcUIsWUFBWSxDQUFDRjtJQUU3QzVCLFNBQVMsQUFBQyxPQUEwQjZCLE9BQXBCRyxpQkFBZ0IsTUFBcUJELE9BQWpCRixlQUFjLEtBQW1CLE9BQWhCRTtJQUVyRCxPQUFPL0I7QUFDVCJ9
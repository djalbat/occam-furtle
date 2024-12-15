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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
var _constants = require("../../constants");
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
var _BitwiseCondition;
var terminalNodeQuery = (0, _query.nodeQuery)("/bitwiseCondition/@*"), leftConditionNodeQuery = (0, _query.nodeQuery)("/bitwiseCondition/condition[0]"), rightConditionNodeQuery = (0, _query.nodeQuery)("/bitwiseCondition/condition[1]"), bitwiseConditionNodeQuery = (0, _query.nodeQuery)("/condition/bitwiseCondition");
var _default = (0, _dom.domAssigned)((_BitwiseCondition = /*#__PURE__*/ function() {
    function BitwiseCondition(string, disjoint, leftCondition, rightCondition) {
        _class_call_check(this, BitwiseCondition);
        this.string = string;
        this.disjoint = disjoint;
        this.leftCondition = leftCondition;
        this.rightCondition = rightCondition;
    }
    _create_class(BitwiseCondition, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "isDisjoint",
            value: function isDisjoint() {
                return this.disjoint;
            }
        },
        {
            key: "getLeftCondition",
            value: function getLeftCondition() {
                return this.leftCondition;
            }
        },
        {
            key: "getRightCondition",
            value: function getRightCondition() {
                return this.rightCondition;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value;
                var bitwiseConditionString = this.string; ///
                context.trace("Resolving the '".concat(bitwiseConditionString, "' bitwise condition..."));
                var Value = _dom.default.Value, leftValue = this.leftCondition.resolve(context), rightValue = this.rightCondition.resolve(context), leftValueBoolean = leftValue.getBoolean(), rightValueBoolean = rightValue.getBoolean(), boolean = this.disjoint ? leftValueBoolean || rightValueBoolean : leftValueBoolean && rightValueBoolean;
                value = Value.fromBoolean(boolean, context); ///
                context.debug("...resolved the '".concat(bitwiseConditionString, "' bitwise condition."));
                return value;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var bitwiseCondition = null;
                var bitwiseConditionNode = bitwiseConditionNodeQuery(conditionNode);
                if (bitwiseConditionNode !== null) {
                    var Condition = _dom.default.Condition, node = bitwiseConditionNode, string = context.nodeAsString(node), leftConditionNode = leftConditionNodeQuery(bitwiseConditionNode), rightConditionNode = rightConditionNodeQuery(bitwiseConditionNode), disjoint = disjointFromBitwiseConditionNode(bitwiseConditionNode, context), leftCondition = Condition.fromConditionNode(leftConditionNode, context), rightCondition = Condition.fromConditionNode(rightConditionNode, context);
                    bitwiseCondition = new BitwiseCondition(string, disjoint, leftCondition, rightCondition);
                }
                return bitwiseCondition;
            }
        }
    ]);
    return BitwiseCondition;
}(), _define_property(_BitwiseCondition, "name", "BitwiseCondition"), _BitwiseCondition));
function disjointFromBitwiseConditionNode(bitwiseConditionNode, context) {
    var terminalNode = terminalNodeQuery(bitwiseConditionNode), terminalNodeContent = terminalNode.getContent(), disjoint = terminalNodeContent === _constants.DISJUNCTION;
    return disjoint;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uZGl0aW9uL2JpdHdpc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IERJU0pVTkNUSU9OIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9iaXR3aXNlQ29uZGl0aW9uL0AqXCIpLFxuICAgICAgbGVmdENvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9iaXR3aXNlQ29uZGl0aW9uL2NvbmRpdGlvblswXVwiKSxcbiAgICAgIHJpZ2h0Q29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vY29uZGl0aW9uWzFdXCIpLFxuICAgICAgYml0d2lzZUNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vYml0d2lzZUNvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQml0d2lzZUNvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgZGlzam9pbnQsIGxlZnRDb25kaXRpb24sIHJpZ2h0Q29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5kaXNqb2ludCA9IGRpc2pvaW50O1xuICAgIHRoaXMubGVmdENvbmRpdGlvbiA9IGxlZnRDb25kaXRpb247XG4gICAgdGhpcy5yaWdodENvbmRpdGlvbiA9IHJpZ2h0Q29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBpc0Rpc2pvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmRpc2pvaW50O1xuICB9XG5cbiAgZ2V0TGVmdENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0Q29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRDb25kaXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBiaXR3aXNlQ29uZGl0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtiaXR3aXNlQ29uZGl0aW9uU3RyaW5nfScgYml0d2lzZSBjb25kaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICBsZWZ0VmFsdWUgPSB0aGlzLmxlZnRDb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodENvbmRpdGlvbi5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYWx1ZUJvb2xlYW4gPSBsZWZ0VmFsdWUuZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIHJpZ2h0VmFsdWVCb29sZWFuID0gcmlnaHRWYWx1ZS5nZXRCb29sZWFuKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzam9pbnQgP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0VmFsdWVCb29sZWFuIHx8IHJpZ2h0VmFsdWVCb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdFZhbHVlQm9vbGVhbiAmJiByaWdodFZhbHVlQm9vbGVhbik7XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Yml0d2lzZUNvbmRpdGlvblN0cmluZ30nIGJpdHdpc2UgY29uZGl0aW9uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJpdHdpc2VDb25kaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBiaXR3aXNlQ29uZGl0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGJpdHdpc2VDb25kaXRpb25Ob2RlID0gYml0d2lzZUNvbmRpdGlvbk5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChiaXR3aXNlQ29uZGl0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBiaXR3aXNlQ29uZGl0aW9uTm9kZSwgIC8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGxlZnRDb25kaXRpb25Ob2RlID0gbGVmdENvbmRpdGlvbk5vZGVRdWVyeShiaXR3aXNlQ29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICByaWdodENvbmRpdGlvbk5vZGUgPSByaWdodENvbmRpdGlvbk5vZGVRdWVyeShiaXR3aXNlQ29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICBkaXNqb2ludCA9IGRpc2pvaW50RnJvbUJpdHdpc2VDb25kaXRpb25Ob2RlKGJpdHdpc2VDb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxlZnRDb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUobGVmdENvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRDb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUocmlnaHRDb25kaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IG5ldyBCaXR3aXNlQ29uZGl0aW9uKHN0cmluZywgZGlzam9pbnQsIGxlZnRDb25kaXRpb24sIHJpZ2h0Q29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYml0d2lzZUNvbmRpdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGRpc2pvaW50RnJvbUJpdHdpc2VDb25kaXRpb25Ob2RlKGJpdHdpc2VDb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGJpdHdpc2VDb25kaXRpb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGRpc2pvaW50ID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IERJU0pVTkNUSU9OKTtcblxuICByZXR1cm4gZGlzam9pbnQ7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0Q29uZGl0aW9uTm9kZVF1ZXJ5IiwicmlnaHRDb25kaXRpb25Ob2RlUXVlcnkiLCJiaXR3aXNlQ29uZGl0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJCaXR3aXNlQ29uZGl0aW9uIiwic3RyaW5nIiwiZGlzam9pbnQiLCJsZWZ0Q29uZGl0aW9uIiwicmlnaHRDb25kaXRpb24iLCJnZXRTdHJpbmciLCJpc0Rpc2pvaW50IiwiZ2V0TGVmdENvbmRpdGlvbiIsImdldFJpZ2h0Q29uZGl0aW9uIiwicmVzb2x2ZSIsImNvbnRleHQiLCJ2YWx1ZSIsImJpdHdpc2VDb25kaXRpb25TdHJpbmciLCJ0cmFjZSIsIlZhbHVlIiwiZG9tIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImxlZnRWYWx1ZUJvb2xlYW4iLCJnZXRCb29sZWFuIiwicmlnaHRWYWx1ZUJvb2xlYW4iLCJib29sZWFuIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImJpdHdpc2VDb25kaXRpb24iLCJiaXR3aXNlQ29uZGl0aW9uTm9kZSIsIkNvbmRpdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJsZWZ0Q29uZGl0aW9uTm9kZSIsInJpZ2h0Q29uZGl0aW9uTm9kZSIsImRpc2pvaW50RnJvbUJpdHdpc2VDb25kaXRpb25Ob2RlIiwibmFtZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRElTSlVOQ1RJT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtxQkFFVTt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJDLHlCQUF5QkQsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDbkNFLDBCQUEwQkYsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDcENHLDRCQUE0QkgsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlSSxJQUFBQSxnQkFBVyxxQ0FBQzthQUFNQyxpQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLGNBQWM7Z0NBRDVCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7OztZQUd4QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osYUFBYTtZQUMzQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QixJQUFJLENBQUNYLE1BQU0sRUFBRSxHQUFHO2dCQUUvQ1MsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQXdDLE9BQXZCRCx3QkFBdUI7Z0JBRXZELElBQU0sQUFBRUUsUUFBVUMsWUFBRyxDQUFiRCxPQUNGRSxZQUFZLElBQUksQ0FBQ2IsYUFBYSxDQUFDTSxPQUFPLENBQUNDLFVBQ3ZDTyxhQUFhLElBQUksQ0FBQ2IsY0FBYyxDQUFDSyxPQUFPLENBQUNDLFVBQ3pDUSxtQkFBbUJGLFVBQVVHLFVBQVUsSUFDdkNDLG9CQUFvQkgsV0FBV0UsVUFBVSxJQUN6Q0UsVUFBVSxJQUFJLENBQUNuQixRQUFRLEdBQ1ZnQixvQkFBb0JFLG9CQUNsQkYsb0JBQW9CRTtnQkFFekNULFFBQVFHLE1BQU1RLFdBQVcsQ0FBQ0QsU0FBU1gsVUFBVyxHQUFHO2dCQUVqREEsUUFBUWEsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCWCx3QkFBdUI7Z0JBRXpELE9BQU9EO1lBQ1Q7Ozs7WUFJT2EsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVmLE9BQU87Z0JBQzdDLElBQUlnQixtQkFBbUI7Z0JBRXZCLElBQU1DLHVCQUF1QjdCLDBCQUEwQjJCO2dCQUV2RCxJQUFJRSx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTSxBQUFFQyxZQUFjYixZQUFHLENBQWpCYSxXQUNGQyxPQUFPRixzQkFDUDFCLFNBQVNTLFFBQVFvQixZQUFZLENBQUNELE9BQzlCRSxvQkFBb0JuQyx1QkFBdUIrQix1QkFDM0NLLHFCQUFxQm5DLHdCQUF3QjhCLHVCQUM3Q3pCLFdBQVcrQixpQ0FBaUNOLHNCQUFzQmpCLFVBQ2xFUCxnQkFBZ0J5QixVQUFVSixpQkFBaUIsQ0FBQ08sbUJBQW1CckIsVUFDL0ROLGlCQUFpQndCLFVBQVVKLGlCQUFpQixDQUFDUSxvQkFBb0J0QjtvQkFFdkVnQixtQkFBbUIsSUFBSTFCLGlCQUFpQkMsUUFBUUMsVUFBVUMsZUFBZUM7Z0JBQzNFO2dCQUVBLE9BQU9zQjtZQUNUOzs7O0tBckJBLG9DQUFPUSxRQUFPO0FBd0JoQixTQUFTRCxpQ0FBaUNOLG9CQUFvQixFQUFFakIsT0FBTztJQUNyRSxJQUFNeUIsZUFBZXpDLGtCQUFrQmlDLHVCQUNqQ1Msc0JBQXNCRCxhQUFhRSxVQUFVLElBQzdDbkMsV0FBWWtDLHdCQUF3QkUsc0JBQVc7SUFFckQsT0FBT3BDO0FBQ1QifQ==
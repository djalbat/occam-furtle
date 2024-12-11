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
var _constants = require("../constants");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYml0d2lzZUNvbmRpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRElTSlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vQCpcIiksXG4gICAgICBsZWZ0Q29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vY29uZGl0aW9uWzBdXCIpLFxuICAgICAgcmlnaHRDb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZUNvbmRpdGlvbi9jb25kaXRpb25bMV1cIiksXG4gICAgICBiaXR3aXNlQ29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi9iaXR3aXNlQ29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCaXR3aXNlQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBkaXNqb2ludCwgbGVmdENvbmRpdGlvbiwgcmlnaHRDb25kaXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmRpc2pvaW50ID0gZGlzam9pbnQ7XG4gICAgdGhpcy5sZWZ0Q29uZGl0aW9uID0gbGVmdENvbmRpdGlvbjtcbiAgICB0aGlzLnJpZ2h0Q29uZGl0aW9uID0gcmlnaHRDb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGlzRGlzam9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzam9pbnQ7XG4gIH1cblxuICBnZXRMZWZ0Q29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRDb25kaXRpb247XG4gIH1cblxuICBnZXRSaWdodENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodENvbmRpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCaXR3aXNlQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYml0d2lzZUNvbmRpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBiaXR3aXNlQ29uZGl0aW9uTm9kZSA9IGJpdHdpc2VDb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoYml0d2lzZUNvbmRpdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gYml0d2lzZUNvbmRpdGlvbk5vZGUsICAvL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBsZWZ0Q29uZGl0aW9uTm9kZSA9IGxlZnRDb25kaXRpb25Ob2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRDb25kaXRpb25Ob2RlID0gcmlnaHRDb25kaXRpb25Ob2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgZGlzam9pbnQgPSBkaXNqb2ludEZyb21CaXR3aXNlQ29uZGl0aW9uTm9kZShiaXR3aXNlQ29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBsZWZ0Q29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGxlZnRDb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0Q29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKHJpZ2h0Q29uZGl0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGJpdHdpc2VDb25kaXRpb24gPSBuZXcgQml0d2lzZUNvbmRpdGlvbihzdHJpbmcsIGRpc2pvaW50LCBsZWZ0Q29uZGl0aW9uLCByaWdodENvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpdHdpc2VDb25kaXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkaXNqb2ludEZyb21CaXR3aXNlQ29uZGl0aW9uTm9kZShiaXR3aXNlQ29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0ZXJtaW5hbE5vZGVRdWVyeShiaXR3aXNlQ29uZGl0aW9uTm9kZSksXG4gICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkaXNqb2ludCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBESVNKVU5DVElPTik7XG5cbiAgcmV0dXJuIGRpc2pvaW50O1xufVxuIl0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdENvbmRpdGlvbk5vZGVRdWVyeSIsInJpZ2h0Q29uZGl0aW9uTm9kZVF1ZXJ5IiwiYml0d2lzZUNvbmRpdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQml0d2lzZUNvbmRpdGlvbiIsInN0cmluZyIsImRpc2pvaW50IiwibGVmdENvbmRpdGlvbiIsInJpZ2h0Q29uZGl0aW9uIiwiZ2V0U3RyaW5nIiwiaXNEaXNqb2ludCIsImdldExlZnRDb25kaXRpb24iLCJnZXRSaWdodENvbmRpdGlvbiIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbnRleHQiLCJiaXR3aXNlQ29uZGl0aW9uIiwiYml0d2lzZUNvbmRpdGlvbk5vZGUiLCJDb25kaXRpb24iLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibGVmdENvbmRpdGlvbk5vZGUiLCJyaWdodENvbmRpdGlvbk5vZGUiLCJkaXNqb2ludEZyb21CaXR3aXNlQ29uZGl0aW9uTm9kZSIsIm5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkRJU0pVTkNUSU9OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7cUJBRVU7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUMsbUNBQ25DRSwwQkFBMEJGLElBQUFBLGdCQUFTLEVBQUMsbUNBQ3BDRyw0QkFBNEJILElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUksSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxjQUFjO2dDQUQ1Qko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7Ozs7WUFHeEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGFBQWE7WUFDM0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGNBQWM7WUFDNUI7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCZiwwQkFBMEJZO2dCQUV2RCxJQUFJRyx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxPQUFPSCxzQkFDUFosU0FBU1UsUUFBUU0sWUFBWSxDQUFDRCxPQUM5QkUsb0JBQW9CdEIsdUJBQXVCaUIsdUJBQzNDTSxxQkFBcUJ0Qix3QkFBd0JnQix1QkFDN0NYLFdBQVdrQixpQ0FBaUNQLHNCQUFzQkYsVUFDbEVSLGdCQUFnQlcsVUFBVUwsaUJBQWlCLENBQUNTLG1CQUFtQlAsVUFDL0RQLGlCQUFpQlUsVUFBVUwsaUJBQWlCLENBQUNVLG9CQUFvQlI7b0JBRXZFQyxtQkFBbUIsSUFBSVosaUJBQWlCQyxRQUFRQyxVQUFVQyxlQUFlQztnQkFDM0U7Z0JBRUEsT0FBT1E7WUFDVDs7OztLQXJCQSxvQ0FBT1MsUUFBTztBQXdCaEIsU0FBU0QsaUNBQWlDUCxvQkFBb0IsRUFBRUYsT0FBTztJQUNyRSxJQUFNVyxlQUFlNUIsa0JBQWtCbUIsdUJBQ2pDVSxzQkFBc0JELGFBQWFFLFVBQVUsSUFDN0N0QixXQUFZcUIsd0JBQXdCRSxzQkFBVztJQUVyRCxPQUFPdkI7QUFDVCJ9
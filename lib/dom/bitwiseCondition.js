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
            value: function fromConditionNode(conditionNode) {
                var bitwiseCondition = null;
                var bitwiseConditionNode = bitwiseConditionNodeQuery(conditionNode);
                if (bitwiseConditionNode !== null) {
                    var Condition = _dom.default.Condition, leftConditionNode = leftConditionNodeQuery(bitwiseConditionNode), rightConditionNode = rightConditionNodeQuery(bitwiseConditionNode), disjoint = disjointFromBitwiseConditionNode(bitwiseConditionNode), leftCondition = Condition.fromConditionNode(leftConditionNode), rightCondition = Condition.fromConditionNode(rightConditionNode), string = null;
                    bitwiseCondition = new BitwiseCondition(string, disjoint, leftCondition, rightCondition);
                }
                return bitwiseCondition;
            }
        }
    ]);
    return BitwiseCondition;
}(), _define_property(_BitwiseCondition, "name", "BitwiseCondition"), _BitwiseCondition));
function disjointFromBitwiseConditionNode(bitwiseConditionNode) {
    var terminalNode = terminalNodeQuery(bitwiseConditionNode), terminalNodeContent = terminalNode.getContent(), disjoint = terminalNodeContent === _constants.DISJUNCTION;
    return disjoint;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYml0d2lzZUNvbmRpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRElTSlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vQCpcIiksXG4gICAgICBsZWZ0Q29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vY29uZGl0aW9uWzBdXCIpLFxuICAgICAgcmlnaHRDb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZUNvbmRpdGlvbi9jb25kaXRpb25bMV1cIiksXG4gICAgICBiaXR3aXNlQ29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi9iaXR3aXNlQ29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCaXR3aXNlQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBkaXNqb2ludCwgbGVmdENvbmRpdGlvbiwgcmlnaHRDb25kaXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmRpc2pvaW50ID0gZGlzam9pbnQ7XG4gICAgdGhpcy5sZWZ0Q29uZGl0aW9uID0gbGVmdENvbmRpdGlvbjtcbiAgICB0aGlzLnJpZ2h0Q29uZGl0aW9uID0gcmlnaHRDb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGlzRGlzam9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzam9pbnQ7XG4gIH1cblxuICBnZXRMZWZ0Q29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRDb25kaXRpb247XG4gIH1cblxuICBnZXRSaWdodENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodENvbmRpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCaXR3aXNlQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUpIHtcbiAgICBsZXQgYml0d2lzZUNvbmRpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBiaXR3aXNlQ29uZGl0aW9uTm9kZSA9IGJpdHdpc2VDb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoYml0d2lzZUNvbmRpdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBsZWZ0Q29uZGl0aW9uTm9kZSA9IGxlZnRDb25kaXRpb25Ob2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRDb25kaXRpb25Ob2RlID0gcmlnaHRDb25kaXRpb25Ob2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgZGlzam9pbnQgPSBkaXNqb2ludEZyb21CaXR3aXNlQ29uZGl0aW9uTm9kZShiaXR3aXNlQ29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICBsZWZ0Q29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGxlZnRDb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICAgIHJpZ2h0Q29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKHJpZ2h0Q29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsO1xuXG4gICAgICBiaXR3aXNlQ29uZGl0aW9uID0gbmV3IEJpdHdpc2VDb25kaXRpb24oc3RyaW5nLCBkaXNqb2ludCwgbGVmdENvbmRpdGlvbiwgcmlnaHRDb25kaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBiaXR3aXNlQ29uZGl0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGlzam9pbnRGcm9tQml0d2lzZUNvbmRpdGlvbk5vZGUoYml0d2lzZUNvbmRpdGlvbk5vZGUpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgZGlzam9pbnQgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gRElTSlVOQ1RJT04pO1xuXG4gIHJldHVybiBkaXNqb2ludDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRDb25kaXRpb25Ob2RlUXVlcnkiLCJyaWdodENvbmRpdGlvbk5vZGVRdWVyeSIsImJpdHdpc2VDb25kaXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJpdHdpc2VDb25kaXRpb24iLCJzdHJpbmciLCJkaXNqb2ludCIsImxlZnRDb25kaXRpb24iLCJyaWdodENvbmRpdGlvbiIsImdldFN0cmluZyIsImlzRGlzam9pbnQiLCJnZXRMZWZ0Q29uZGl0aW9uIiwiZ2V0UmlnaHRDb25kaXRpb24iLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJiaXR3aXNlQ29uZGl0aW9uIiwiYml0d2lzZUNvbmRpdGlvbk5vZGUiLCJDb25kaXRpb24iLCJkb20iLCJsZWZ0Q29uZGl0aW9uTm9kZSIsInJpZ2h0Q29uZGl0aW9uTm9kZSIsImRpc2pvaW50RnJvbUJpdHdpc2VDb25kaXRpb25Ob2RlIiwibmFtZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRElTSlVOQ1RJT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtxQkFFVTt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJDLHlCQUF5QkQsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDbkNFLDBCQUEwQkYsSUFBQUEsZ0JBQVMsRUFBQyxtQ0FDcENHLDRCQUE0QkgsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlSSxJQUFBQSxnQkFBVyxxQ0FBQzthQUFNQyxpQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLGNBQWM7Z0NBRDVCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7OztZQUd4QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osYUFBYTtZQUMzQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWE7Z0JBQ3BDLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCZCwwQkFBMEJZO2dCQUV2RCxJQUFJRSx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxvQkFBb0JuQix1QkFBdUJnQix1QkFDM0NJLHFCQUFxQm5CLHdCQUF3QmUsdUJBQzdDVixXQUFXZSxpQ0FBaUNMLHVCQUM1Q1QsZ0JBQWdCVSxVQUFVSixpQkFBaUIsQ0FBQ00sb0JBQzVDWCxpQkFBaUJTLFVBQVVKLGlCQUFpQixDQUFDTyxxQkFDN0NmLFNBQVM7b0JBRWZVLG1CQUFtQixJQUFJWCxpQkFBaUJDLFFBQVFDLFVBQVVDLGVBQWVDO2dCQUMzRTtnQkFFQSxPQUFPTztZQUNUOzs7O0tBcEJBLG9DQUFPTyxRQUFPO0FBdUJoQixTQUFTRCxpQ0FBaUNMLG9CQUFvQjtJQUM1RCxJQUFNTyxlQUFlekIsa0JBQWtCa0IsdUJBQ2pDUSxzQkFBc0JELGFBQWFFLFVBQVUsSUFDN0NuQixXQUFZa0Isd0JBQXdCRSxzQkFBVztJQUVyRCxPQUFPcEI7QUFDVCJ9
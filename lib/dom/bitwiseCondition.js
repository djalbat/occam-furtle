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
    function BitwiseCondition(disjoined, leftCondition, rightCondition) {
        _class_call_check(this, BitwiseCondition);
        this.disjoined = disjoined;
        this.leftCondition = leftCondition;
        this.rightCondition = rightCondition;
    }
    _create_class(BitwiseCondition, [
        {
            key: "isDisjoined",
            value: function isDisjoined() {
                return this.disjoined;
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
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var bitwiseCondition = null;
                var bitwiseConditionNode = bitwiseConditionNodeQuery(conditionNode);
                if (bitwiseConditionNode !== null) {
                    var Condition = _dom.default.Condition, leftConditionNode = leftConditionNodeQuery(bitwiseConditionNode), rightConditionNode = rightConditionNodeQuery(bitwiseConditionNode), disjoined = disjoinedFromBitwiseConditionNode(bitwiseConditionNode), leftCondition = Condition.fromConditionNode(leftConditionNode), rightCondition = Condition.fromConditionNode(rightConditionNode);
                    bitwiseCondition = new BitwiseCondition(disjoined, leftCondition, rightCondition);
                }
                return bitwiseCondition;
            }
        }
    ]);
    return BitwiseCondition;
}(), _define_property(_BitwiseCondition, "name", "BitwiseCondition"), _BitwiseCondition));
function disjoinedFromBitwiseConditionNode(bitwiseConditionNode) {
    var terminalNode = terminalNodeQuery(bitwiseConditionNode), terminalNodeContent = terminalNode.getContent(), disjoined = terminalNodeContent === _constants.DISJUNCTION;
    return disjoined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYml0d2lzZUNvbmRpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRElTSlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vQCpcIiksXG4gICAgICBsZWZ0Q29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VDb25kaXRpb24vY29uZGl0aW9uWzBdXCIpLFxuICAgICAgcmlnaHRDb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZUNvbmRpdGlvbi9jb25kaXRpb25bMV1cIiksXG4gICAgICBiaXR3aXNlQ29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi9iaXR3aXNlQ29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCaXR3aXNlQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3IoZGlzam9pbmVkLCBsZWZ0Q29uZGl0aW9uLCByaWdodENvbmRpdGlvbikge1xuICAgIHRoaXMuZGlzam9pbmVkID0gZGlzam9pbmVkO1xuICAgIHRoaXMubGVmdENvbmRpdGlvbiA9IGxlZnRDb25kaXRpb247XG4gICAgdGhpcy5yaWdodENvbmRpdGlvbiA9IHJpZ2h0Q29uZGl0aW9uO1xuICB9XG5cbiAgaXNEaXNqb2luZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzam9pbmVkO1xuICB9XG5cbiAgZ2V0TGVmdENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0Q29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRDb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCaXR3aXNlQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYml0d2lzZUNvbmRpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBiaXR3aXNlQ29uZGl0aW9uTm9kZSA9IGJpdHdpc2VDb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoYml0d2lzZUNvbmRpdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBsZWZ0Q29uZGl0aW9uTm9kZSA9IGxlZnRDb25kaXRpb25Ob2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRDb25kaXRpb25Ob2RlID0gcmlnaHRDb25kaXRpb25Ob2RlUXVlcnkoYml0d2lzZUNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgZGlzam9pbmVkID0gZGlzam9pbmVkRnJvbUJpdHdpc2VDb25kaXRpb25Ob2RlKGJpdHdpc2VDb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRDb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUobGVmdENvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRDb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUocmlnaHRDb25kaXRpb25Ob2RlKTtcblxuICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IG5ldyBCaXR3aXNlQ29uZGl0aW9uKGRpc2pvaW5lZCwgbGVmdENvbmRpdGlvbiwgcmlnaHRDb25kaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBiaXR3aXNlQ29uZGl0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGlzam9pbmVkRnJvbUJpdHdpc2VDb25kaXRpb25Ob2RlKGJpdHdpc2VDb25kaXRpb25Ob2RlKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGJpdHdpc2VDb25kaXRpb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGRpc2pvaW5lZCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBESVNKVU5DVElPTik7XG5cbiAgcmV0dXJuIGRpc2pvaW5lZDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRDb25kaXRpb25Ob2RlUXVlcnkiLCJyaWdodENvbmRpdGlvbk5vZGVRdWVyeSIsImJpdHdpc2VDb25kaXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJpdHdpc2VDb25kaXRpb24iLCJkaXNqb2luZWQiLCJsZWZ0Q29uZGl0aW9uIiwicmlnaHRDb25kaXRpb24iLCJpc0Rpc2pvaW5lZCIsImdldExlZnRDb25kaXRpb24iLCJnZXRSaWdodENvbmRpdGlvbiIsImdldFN0cmluZyIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbnRleHQiLCJiaXR3aXNlQ29uZGl0aW9uIiwiYml0d2lzZUNvbmRpdGlvbk5vZGUiLCJDb25kaXRpb24iLCJkb20iLCJsZWZ0Q29uZGl0aW9uTm9kZSIsInJpZ2h0Q29uZGl0aW9uTm9kZSIsImRpc2pvaW5lZEZyb21CaXR3aXNlQ29uZGl0aW9uTm9kZSIsIm5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkRJU0pVTkNUSU9OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7cUJBRVU7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyx5QkFBeUJELElBQUFBLGdCQUFTLEVBQUMsbUNBQ25DRSwwQkFBMEJGLElBQUFBLGdCQUFTLEVBQUMsbUNBQ3BDRyw0QkFBNEJILElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUksSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsY0FBYztnQ0FEckJIO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOzs7O1lBR3hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGFBQWE7WUFDM0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGNBQWM7WUFDNUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM3QyxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLHVCQUF1QmQsMEJBQTBCVztnQkFFdkQsSUFBSUcseUJBQXlCLE1BQU07b0JBQ2pDLElBQU0sQUFBRUMsWUFBY0MsWUFBRyxDQUFqQkQsV0FDRkUsb0JBQW9CbkIsdUJBQXVCZ0IsdUJBQzNDSSxxQkFBcUJuQix3QkFBd0JlLHVCQUM3Q1gsWUFBWWdCLGtDQUFrQ0wsdUJBQzlDVixnQkFBZ0JXLFVBQVVMLGlCQUFpQixDQUFDTyxvQkFDNUNaLGlCQUFpQlUsVUFBVUwsaUJBQWlCLENBQUNRO29CQUVuREwsbUJBQW1CLElBQUlYLGlCQUFpQkMsV0FBV0MsZUFBZUM7Z0JBQ3BFO2dCQUVBLE9BQU9RO1lBQ1Q7Ozs7S0FuQkEsb0NBQU9PLFFBQU87QUFzQmhCLFNBQVNELGtDQUFrQ0wsb0JBQW9CO0lBQzdELElBQU1PLGVBQWV6QixrQkFBa0JrQix1QkFDakNRLHNCQUFzQkQsYUFBYUUsVUFBVSxJQUM3Q3BCLFlBQWFtQix3QkFBd0JFLHNCQUFXO0lBRXRELE9BQU9yQjtBQUNUIn0=
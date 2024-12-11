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
var _Assignment;
var _default = (0, _dom.domAssigned)((_Assignment = /*#__PURE__*/ function() {
    function Assignment(string, value, nodeQuery, nodesQuery, procedureCall) {
        _class_call_check(this, Assignment);
        this.string = string;
        this.value = value;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.procedureCall = procedureCall;
    }
    _create_class(Assignment, [
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
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var Value = _dom.default.Value, value = Value.fromNode(node, context), string = stringFromValue(value), nodeQuery = null, nodesQuery = null, procedureCall = null, assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        },
        {
            key: "fromValue",
            value: function fromValue(value, context) {
                var nodeQuery = null, nodesQuery = null, procedureCall = null, string = stringFromValue(value), assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var Value = _dom.default.Value, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, ProcedureCall = _dom.default.ProcedureCall, node = assigmentNode, string = context.nodeAsString(node), value = Value.fromAssignmentNode(assigmentNode, context), nodeQuery = NodeQuery.fromAssignmentNode(assigmentNode, context), nodesQuery = NodesQuery.fromAssignmentNode(assigmentNode, context), procedureCall = ProcedureCall.fromAssignmentNode(assigmentNode, context), assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        }
    ]);
    return Assignment;
}(), _define_property(_Assignment, "name", "Assignment"), _Assignment));
function stringFromValue(value) {
    var valueString = value.getString(), string = "= ".concat(valueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlKSxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG5ldyBBc3NpZ25tZW50KHN0cmluZywgdmFsdWUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gYXNzaWdtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlKSxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBuZXcgQXNzaWdubWVudChzdHJpbmcsIHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIGFzc2lnbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUsIE5vZGVRdWVyeSwgTm9kZXNRdWVyeSwgUHJvY2VkdXJlQ2FsbCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBhc3NpZ21lbnROb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBOb2Rlc1F1ZXJ5LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBhc3NpZ21lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWUodmFsdWUpIHtcbiAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYD0gJHt2YWx1ZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJBc3NpZ25tZW50Iiwic3RyaW5nIiwidmFsdWUiLCJub2RlUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvY2VkdXJlQ2FsbCIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZ2V0Tm9kZVF1ZXJ5IiwiZ2V0Tm9kZXNRdWVyeSIsImZyb21Ob2RlIiwibm9kZSIsImNvbnRleHQiLCJWYWx1ZSIsImRvbSIsInN0cmluZ0Zyb21WYWx1ZSIsImFzc2lnbWVudCIsImZyb21WYWx1ZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJOb2RlUXVlcnkiLCJOb2Rlc1F1ZXJ5IiwiUHJvY2VkdXJlQ2FsbCIsIm5vZGVBc1N0cmluZyIsIm5hbWUiLCJ2YWx1ZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsYUFBYTtnQ0FEaENMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFNBQVM7WUFDdkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7Ozs7WUFJT00sS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFQyxPQUFPO2dCQUMzQixJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRlgsUUFBUVcsTUFBTUgsUUFBUSxDQUFDQyxNQUFNQyxVQUM3QlgsU0FBU2MsZ0JBQWdCYixRQUN6QkMsWUFBWSxNQUNaQyxhQUFhLE1BQ2JDLGdCQUFnQixNQUNoQlcsWUFBWSxJQUFJaEIsV0FBV0MsUUFBUUMsT0FBT0MsV0FBV0MsWUFBWUM7Z0JBRXZFLE9BQU9XO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVZixLQUFLLEVBQUVVLE9BQU87Z0JBQzdCLElBQU1ULFlBQVksTUFDWkMsYUFBYSxNQUNiQyxnQkFBZ0IsTUFDaEJKLFNBQVNjLGdCQUFnQmIsUUFDekJjLFlBQVksSUFBSWhCLFdBQVdDLFFBQVFDLE9BQU9DLFdBQVdDLFlBQVlDO2dCQUV2RSxPQUFPVztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxhQUFhLEVBQUVQLE9BQU87Z0JBQzlDLElBQVFDLFFBQWdEQyxZQUFHLENBQW5ERCxPQUFPTyxZQUF5Q04sWUFBRyxDQUE1Q00sV0FBV0MsYUFBOEJQLFlBQUcsQ0FBakNPLFlBQVlDLGdCQUFrQlIsWUFBRyxDQUFyQlEsZUFDaENYLE9BQU9RLGVBQ1BsQixTQUFTVyxRQUFRVyxZQUFZLENBQUNaLE9BQzlCVCxRQUFRVyxNQUFNSyxrQkFBa0IsQ0FBQ0MsZUFBZVAsVUFDaERULFlBQVlpQixVQUFVRixrQkFBa0IsQ0FBQ0MsZUFBZVAsVUFDeERSLGFBQWFpQixXQUFXSCxrQkFBa0IsQ0FBQ0MsZUFBZVAsVUFDMURQLGdCQUFnQmlCLGNBQWNKLGtCQUFrQixDQUFDQyxlQUFlUCxVQUNoRUksWUFBWSxJQUFJaEIsV0FBV0MsUUFBUUMsT0FBT0MsV0FBV0MsWUFBWUM7Z0JBRXZFLE9BQU9XO1lBQ1Q7Ozs7S0FuQ0EsOEJBQU9RLFFBQU87QUFzQ2hCLFNBQVNULGdCQUFnQmIsS0FBSztJQUM1QixJQUFNdUIsY0FBY3ZCLE1BQU1JLFNBQVMsSUFDN0JMLFNBQVMsQUFBQyxLQUFnQixPQUFad0I7SUFFcEIsT0FBT3hCO0FBQ1QifQ==
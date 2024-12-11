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
var _ProcedureCall;
var valueNodesQuery = (0, _query.nodesQuery)("/assignment/procedureCall/value"), procedureCallNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, values) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.values = values;
    }
    _create_class(ProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getValues",
            value: function getValues() {
                return this.values;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var procedureCall = null;
                var procedureCallNode = procedureCallNodeQuery(assigmentNode);
                if (procedureCallNode !== null) {
                    var Reference = _dom.default.Reference, node = procedureCallNode, string = context.nodeAsString(node), reference = Reference.fromAssignmentNode(assigmentNode, context), values = valuesFromAssignmentNode(assigmentNode, context);
                    procedureCall = new ProcedureCall(string, reference, values);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function valuesFromAssignmentNode(assigmentNode, context) {
    var Value = _dom.default.Value, valueNodes = valueNodesQuery(assigmentNode), values = valueNodes.map(function(valueNode) {
        var value = Value.fromValueNode(valueNode, context);
        return value;
    });
    return values;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YWx1ZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Fzc2lnbm1lbnQvcHJvY2VkdXJlQ2FsbC92YWx1ZVwiKSxcbiAgICAgIHByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHZhbHVlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb2NlZHVyZUNhbGxcIjtcblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsTm9kZSA9IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBwcm9jZWR1cmVDYWxsID0gbmV3IFByb2NlZHVyZUNhbGwoc3RyaW5nLCByZWZlcmVuY2UsIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWx1ZXNGcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkoYXNzaWdtZW50Tm9kZSksXG4gICAgICAgIHZhbHVlcyA9IHZhbHVlTm9kZXMubWFwKCh2YWx1ZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlQ2FsbCIsInN0cmluZyIsInJlZmVyZW5jZSIsInZhbHVlcyIsImdldFN0cmluZyIsImdldFJlZmVyZW5jZSIsImdldFZhbHVlcyIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJjb250ZXh0IiwicHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInZhbHVlc0Zyb21Bc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYWx1ZSIsInZhbHVlTm9kZXMiLCJtYXAiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZSIsImZyb21WYWx1ZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsb0NBQzdCQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFekMsV0FBZUMsSUFBQUEsZ0JBQVcsa0NBQUM7YUFBTUMsY0FDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxNQUFNO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7Ozs7WUFJT0ksS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzlDLElBQUlDLGdCQUFnQjtnQkFFcEIsSUFBTUMsb0JBQW9CZCx1QkFBdUJXO2dCQUVqRCxJQUFJRyxzQkFBc0IsTUFBTTtvQkFDOUIsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxPQUFPSCxtQkFDUFYsU0FBU1EsUUFBUU0sWUFBWSxDQUFDRCxPQUM5QlosWUFBWVUsVUFBVUwsa0JBQWtCLENBQUNDLGVBQWVDLFVBQ3hETixTQUFTYSx5QkFBeUJSLGVBQWVDO29CQUV2REMsZ0JBQWdCLElBQUlWLGNBQWNDLFFBQVFDLFdBQVdDO2dCQUN2RDtnQkFFQSxPQUFPTztZQUNUOzs7O0tBbEJBLGlDQUFPTyxRQUFPO0FBcUJoQixTQUFTRCx5QkFBeUJSLGFBQWEsRUFBRUMsT0FBTztJQUN0RCxJQUFNLEFBQUVTLFFBQVVMLFlBQUcsQ0FBYkssT0FDRkMsYUFBYXhCLGdCQUFnQmEsZ0JBQzdCTCxTQUFTZ0IsV0FBV0MsR0FBRyxDQUFDLFNBQUNDO1FBQ3ZCLElBQU1DLFFBQVFKLE1BQU1LLGFBQWEsQ0FBQ0YsV0FBV1o7UUFFN0MsT0FBT2E7SUFDVDtJQUVOLE9BQU9uQjtBQUNUIn0=
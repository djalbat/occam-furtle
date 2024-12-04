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
    function ProcedureCall(reference, values) {
        _class_call_check(this, ProcedureCall);
        this.reference = reference;
        this.values = values;
    }
    _create_class(ProcedureCall, [
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
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var procedureCall = null;
                var procedureCallNode = procedureCallNodeQuery(assigmentNode);
                if (procedureCallNode !== null) {
                    var Reference = _dom.default.Reference, reference = Reference.fromAssignmentNode(assigmentNode, context), values = valuesFromAssignmentNode(assigmentNode, context);
                    procedureCall = new ProcedureCall(reference, values);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function valuesFromAssignmentNode(assigmentNode, context) {
    var Value = _dom.default.Value, valueNodes = valueNodesQuery(assigmentNode), values = valueNodes.map(function(valueNode) {
        var value = Value.fromValueNode(valueNode);
        return value;
    });
    return values;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YWx1ZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Fzc2lnbm1lbnQvcHJvY2VkdXJlQ2FsbC92YWx1ZVwiKSxcbiAgICAgIHByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB2YWx1ZXMpIHtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvY2VkdXJlQ2FsbFwiO1xuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsID0gbnVsbDtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxOb2RlID0gcHJvY2VkdXJlQ2FsbE5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IFJlZmVyZW5jZS5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChyZWZlcmVuY2UsIHZhbHVlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWx1ZXNGcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkoYXNzaWdtZW50Tm9kZSksXG4gICAgICAgIHZhbHVlcyA9IHZhbHVlTm9kZXMubWFwKCh2YWx1ZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlKTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvY2VkdXJlQ2FsbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvY2VkdXJlQ2FsbCIsInJlZmVyZW5jZSIsInZhbHVlcyIsImdldFJlZmVyZW5jZSIsImdldFZhbHVlcyIsImdldFN0cmluZyIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJjb250ZXh0IiwicHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxOb2RlIiwiUmVmZXJlbmNlIiwiZG9tIiwidmFsdWVzRnJvbUFzc2lnbm1lbnROb2RlIiwibmFtZSIsIlZhbHVlIiwidmFsdWVOb2RlcyIsIm1hcCIsInZhbHVlTm9kZSIsInZhbHVlIiwiZnJvbVZhbHVlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxvQ0FDN0JDLHlCQUF5QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV6QyxXQUFlQyxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsU0FBUyxFQUFFQyxNQUFNO2dDQURFRjtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM5QyxJQUFJQyxnQkFBZ0I7Z0JBRXBCLElBQU1DLG9CQUFvQmIsdUJBQXVCVTtnQkFFakQsSUFBSUcsc0JBQXNCLE1BQU07b0JBQzlCLElBQU0sQUFBRUMsWUFBY0MsWUFBRyxDQUFqQkQsV0FDRlYsWUFBWVUsVUFBVUwsa0JBQWtCLENBQUNDLGVBQWVDLFVBQ3hETixTQUFTVyx5QkFBeUJOLGVBQWVDO29CQUV2REMsZ0JBQWdCLElBQUlULGNBQWNDLFdBQVdDO2dCQUMvQztnQkFFQSxPQUFPTztZQUNUOzs7O0tBaEJBLGlDQUFPSyxRQUFPO0FBbUJoQixTQUFTRCx5QkFBeUJOLGFBQWEsRUFBRUMsT0FBTztJQUN0RCxJQUFNLEFBQUVPLFFBQVVILFlBQUcsQ0FBYkcsT0FDRkMsYUFBYXJCLGdCQUFnQlksZ0JBQzdCTCxTQUFTYyxXQUFXQyxHQUFHLENBQUMsU0FBQ0M7UUFDdkIsSUFBTUMsUUFBUUosTUFBTUssYUFBYSxDQUFDRjtRQUVsQyxPQUFPQztJQUNUO0lBRU4sT0FBT2pCO0FBQ1QifQ==
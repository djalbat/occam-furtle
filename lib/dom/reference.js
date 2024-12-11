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
var _query = require("../utilities/query");
var _dom = require("../dom");
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
var _Reference;
var referenceNameTerminalNodeQuery = (0, _query.nodeQuery)("/reference/@name"), assignmentProcedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall/reference");
var _default = (0, _dom.domAssigned)((_Reference = /*#__PURE__*/ function() {
    function Reference(string, name) {
        _class_call_check(this, Reference);
        this.string = string;
        this.name = name;
    }
    _create_class(Reference, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        }
    ], [
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, context) {
                var node = referenceNode, string = context.nodeAsString(node), name = nameFromReferenceNode(referenceNode, context), reference = new Reference(string, name);
                return reference;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assignmentNode, context) {
                var assignmentProcedureCallReferenceNod = assignmentProcedureCallReferenceNodeQuery(assignmentNode), referenceNode = assignmentProcedureCallReferenceNod, node = referenceNode, string = context.nodeAsString(node), name = nameFromReferenceNode(referenceNode, context), reference = new Reference(string, name);
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));
function nameFromReferenceNode(referenceNode, context) {
    var referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode), referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(), name = referenceNameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZS9AbmFtZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvcHJvY2VkdXJlQ2FsbC9yZWZlcmVuY2VcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50UHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCA9IGFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5KGFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QsXG4gICAgICAgICAgbm9kZSA9IHJlZmVyZW5jZU5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZmVyZW5jZSIsInN0cmluZyIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiY29udGV4dCIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2UiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7cUJBTjBCO21CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLGlDQUFpQ0MsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDM0NDLDRDQUE0Q0QsSUFBQUEsZ0JBQVMsRUFBQztJQUU1RCxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJO2dDQURPRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM3QyxJQUFNQyxPQUFPRixlQUNQTCxTQUFTTSxRQUFRRSxZQUFZLENBQUNELE9BQzlCTixPQUFPUSxzQkFBc0JKLGVBQWVDLFVBQzVDSSxZQUFZLElBQUlYLFVBQVVDLFFBQVFDO2dCQUV4QyxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUVOLE9BQU87Z0JBQy9DLElBQU1PLHNDQUFzQ2hCLDBDQUEwQ2UsaUJBQ2hGUCxnQkFBZ0JRLHFDQUNoQk4sT0FBT0YsZUFDUEwsU0FBU00sUUFBUUUsWUFBWSxDQUFDRCxPQUM5Qk4sT0FBT1Esc0JBQXNCSixlQUFlQyxVQUM1Q0ksWUFBWSxJQUFJWCxVQUFVQyxRQUFRQztnQkFFeEMsT0FBT1M7WUFDVDs7OztLQXBCQSw2QkFBT1QsUUFBTztBQXVCaEIsU0FBU1Esc0JBQXNCSixhQUFhLEVBQUVDLE9BQU87SUFDbkQsSUFBTVEsNEJBQTRCbkIsK0JBQStCVSxnQkFDM0RVLG1DQUFtQ0QsMEJBQTBCRSxVQUFVLElBQ3ZFZixPQUFPYyxrQ0FBa0MsR0FBRztJQUVsRCxPQUFPZDtBQUNUIn0=
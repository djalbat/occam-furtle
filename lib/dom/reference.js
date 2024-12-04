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
    function Reference(name) {
        _class_call_check(this, Reference);
        this.name = name;
    }
    _create_class(Reference, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.name; ///
                return string;
            }
        }
    ], [
        {
            key: "fromReferenceNode",
            value: function fromReferenceNode(referenceNode, context) {
                var name = nameFromReferenceNode(referenceNode), reference = new Reference(name);
                return reference;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assignmentNode, context) {
                var assignmentProcedureCallReferenceNod = assignmentProcedureCallReferenceNodeQuery(assignmentNode), referenceNode = assignmentProcedureCallReferenceNod, name = nameFromReferenceNode(referenceNode), reference = new Reference(name);
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));
function nameFromReferenceNode(referenceNode) {
    var referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode), referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(), name = referenceNameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZS9AbmFtZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvcHJvY2VkdXJlQ2FsbC9yZWZlcmVuY2VcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50UHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCA9IGFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5KGFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZmVyZW5jZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiY29udGV4dCIsIm5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QiLCJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztxQkFOMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMzQ0MsNENBQTRDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRTVELFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxJQUFJO2dDQURlRDtRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSCxJQUFJLEVBQUUsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDN0MsSUFBTU4sT0FBT08sc0JBQXNCRixnQkFDN0JHLFlBQVksSUFBSVQsVUFBVUM7Z0JBRWhDLE9BQU9RO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRUosT0FBTztnQkFDL0MsSUFBTUssc0NBQXNDZCwwQ0FBMENhLGlCQUNoRkwsZ0JBQWdCTSxxQ0FDaEJYLE9BQU9PLHNCQUFzQkYsZ0JBQzdCRyxZQUFZLElBQUlULFVBQVVDO2dCQUVoQyxPQUFPUTtZQUNUOzs7O0tBaEJBLDZCQUFPUixRQUFPO0FBbUJoQixTQUFTTyxzQkFBc0JGLGFBQWE7SUFDMUMsSUFBTU8sNEJBQTRCakIsK0JBQStCVSxnQkFDM0RRLG1DQUFtQ0QsMEJBQTBCRSxVQUFVLElBQ3ZFZCxPQUFPYSxrQ0FBa0MsR0FBRztJQUVsRCxPQUFPYjtBQUNUIn0=
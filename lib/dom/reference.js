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
            value: function fromReferenceNode(referenceNode) {
                var name = nameFromReferenceNode(referenceNode), reference = new Reference(name);
                return reference;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assignmentNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZS9AbmFtZVwiKSxcbiAgICAgIGFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvcHJvY2VkdXJlQ2FsbC9yZWZlcmVuY2VcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJlZmVyZW5jZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50UHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCA9IGFzc2lnbm1lbnRQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5KGFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VOb2RlID0gYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QsXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG4iXSwibmFtZXMiOlsicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYXNzaWdubWVudFByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlJlZmVyZW5jZSIsIm5hbWUiLCJnZXROYW1lIiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwiZnJvbVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwibmFtZUZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50UHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUiLCJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O3FCQU4wQjttQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMscUJBQzNDQyw0Q0FBNENELElBQUFBLGdCQUFTLEVBQUM7SUFFNUQsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLElBQUk7Z0NBRGVEO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNILElBQUksRUFBRSxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYTtnQkFDcEMsSUFBTUwsT0FBT00sc0JBQXNCRCxnQkFDN0JFLFlBQVksSUFBSVIsVUFBVUM7Z0JBRWhDLE9BQU9PO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWM7Z0JBQ3RDLElBQU1DLHNDQUFzQ2IsMENBQTBDWSxpQkFDaEZKLGdCQUFnQksscUNBQ2hCVixPQUFPTSxzQkFBc0JELGdCQUM3QkUsWUFBWSxJQUFJUixVQUFVQztnQkFFaEMsT0FBT087WUFDVDs7OztLQWhCQSw2QkFBT1AsUUFBTztBQW1CaEIsU0FBU00sc0JBQXNCRCxhQUFhO0lBQzFDLElBQU1NLDRCQUE0QmhCLCtCQUErQlUsZ0JBQzNETyxtQ0FBbUNELDBCQUEwQkUsVUFBVSxJQUN2RWIsT0FBT1ksa0NBQWtDLEdBQUc7SUFFbEQsT0FBT1o7QUFDVCJ9
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
var referenceNameTerminalNodeQuery = (0, _query.nodeQuery)("/reference/@name"), valueProcedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/value/procedureCall/reference");
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
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var valueProcedureCallReferenceNod = valueProcedureCallReferenceNodeQuery(valueNode), referenceNode = valueProcedureCallReferenceNod, name = nameFromReferenceNode(referenceNode, context), string = stringFromName(name, context), reference = new Reference(string, name);
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));
function stringFromName(name, context) {
    var nameString = name, string = nameString; ///
    return string;
}
function nameFromReferenceNode(referenceNode, context) {
    var referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode), referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(), name = referenceNameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZS9AbmFtZVwiKSxcbiAgICAgIHZhbHVlUHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9wcm9jZWR1cmVDYWxsL3JlZmVyZW5jZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gcmVmZXJlbmNlTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kID0gdmFsdWVQcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5KHZhbHVlTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHZhbHVlUHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc3RyaW5nLCBuYW1lKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVTdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG5hbWVTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHJlZmVyZW5jZU5vZGUpLFxuICAgICAgICByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudCA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuIl0sIm5hbWVzIjpbInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlUHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmVmZXJlbmNlIiwic3RyaW5nIiwibmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJjb250ZXh0Iiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZVByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QiLCJzdHJpbmdGcm9tTmFtZSIsIm5hbWVTdHJpbmciLCJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztxQkFOMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLHFCQUMzQ0MsdUNBQXVDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXZELFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE9GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQU1DLE9BQU9GLGVBQ1BMLFNBQVNNLFFBQVFFLFlBQVksQ0FBQ0QsT0FDOUJOLE9BQU9RLHNCQUFzQkosZUFBZUMsVUFDNUNJLFlBQVksSUFBSVgsVUFBVUMsUUFBUUM7Z0JBRXhDLE9BQU9TO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVOLE9BQU87Z0JBQ3JDLElBQU1PLGlDQUFpQ2hCLHFDQUFxQ2UsWUFDdEVQLGdCQUFnQlEsZ0NBQ2hCWixPQUFPUSxzQkFBc0JKLGVBQWVDLFVBQzVDTixTQUFTYyxlQUFlYixNQUFNSyxVQUM5QkksWUFBWSxJQUFJWCxVQUFVQyxRQUFRQztnQkFFeEMsT0FBT1M7WUFDVDs7OztLQW5CQSw2QkFBT1QsUUFBTztBQXNCaEIsU0FBU2EsZUFBZWIsSUFBSSxFQUFFSyxPQUFPO0lBQ25DLElBQU1TLGFBQWFkLE1BQ2JELFNBQVNlLFlBQWEsR0FBRztJQUUvQixPQUFPZjtBQUNUO0FBRUEsU0FBU1Msc0JBQXNCSixhQUFhLEVBQUVDLE9BQU87SUFDbkQsSUFBTVUsNEJBQTRCckIsK0JBQStCVSxnQkFDM0RZLG1DQUFtQ0QsMEJBQTBCRSxVQUFVLElBQ3ZFakIsT0FBT2dCLGtDQUFrQyxHQUFHO0lBRWxELE9BQU9oQjtBQUNUIn0=
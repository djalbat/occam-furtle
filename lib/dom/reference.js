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
var _Reference;
var procedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/procedureCall/reference!"), referenceNameTerminalNodeQuery = (0, _query.nodeQuery)("/reference/@name");
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
                var reference = referenceFromReferenceNode(referenceNode, context);
                return reference;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, context) {
                var procedureCallReferenceNod = procedureCallReferenceNodeQuery(procedureCallNode), referenceNode = procedureCallReferenceNod, reference = referenceFromReferenceNode(referenceNode, context);
                return reference;
            }
        }
    ]);
    return Reference;
}(), _define_property(_Reference, "name", "Reference"), _Reference));
function referenceFromReferenceNode(referenceNode, context) {
    var Reference = _dom.default.Reference, name = nameFromReferenceNode(referenceNode, context), string = stringFromName(name, context), reference = new Reference(string, name);
    return reference;
}
function nameFromReferenceNode(referenceNode, context) {
    var referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode), referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(), name = referenceNameTerminalNodeContent; ///
    return name;
}
function stringFromName(name, context) {
    var nameString = name, string = nameString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC9yZWZlcmVuY2UhXCIpLFxuICAgICAgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JlZmVyZW5jZS9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCA9IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzdHJpbmcsIG5hbWUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkocmVmZXJlbmNlTm9kZSksXG4gICAgICAgIHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbmFtZVN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsicHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmVmZXJlbmNlIiwic3RyaW5nIiwibmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJjb250ZXh0IiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QiLCJkb20iLCJuYW1lRnJvbVJlZmVyZW5jZU5vZGUiLCJzdHJpbmdGcm9tTmFtZSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGUiLCJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJuYW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxrQ0FBa0NDLElBQUFBLGdCQUFTLEVBQUMsOEJBQzVDQyxpQ0FBaUNELElBQUFBLGdCQUFTLEVBQUM7SUFFakQsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsSUFBSTtnQ0FET0Y7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDN0MsSUFBTUMsWUFBWUMsMkJBQTJCSCxlQUFlQztnQkFFNUQsT0FBT0M7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCLEVBQUVKLE9BQU87Z0JBQ3JELElBQU1LLDRCQUE0QmhCLGdDQUFnQ2Usb0JBQzVETCxnQkFBZ0JNLDJCQUNoQkosWUFBWUMsMkJBQTJCSCxlQUFlQztnQkFFNUQsT0FBT0M7WUFDVDs7OztLQWRBLDZCQUFPTixRQUFPO0FBaUJoQixTQUFTTywyQkFBMkJILGFBQWEsRUFBRUMsT0FBTztJQUN4RCxJQUFNLEFBQUVQLFlBQWNhLFlBQUcsQ0FBakJiLFdBQ0ZFLE9BQU9ZLHNCQUFzQlIsZUFBZUMsVUFDNUNOLFNBQVNjLGVBQWViLE1BQU1LLFVBQzlCQyxZQUFZLElBQUlSLFVBQVVDLFFBQVFDO0lBRXhDLE9BQU9NO0FBQ1Q7QUFFQSxTQUFTTSxzQkFBc0JSLGFBQWEsRUFBRUMsT0FBTztJQUNuRCxJQUFNUyw0QkFBNEJsQiwrQkFBK0JRLGdCQUMzRFcsbUNBQW1DRCwwQkFBMEJFLFVBQVUsSUFDdkVoQixPQUFPZSxrQ0FBa0MsR0FBRztJQUVsRCxPQUFPZjtBQUNUO0FBRUEsU0FBU2EsZUFBZWIsSUFBSSxFQUFFSyxPQUFPO0lBQ25DLElBQU1ZLGFBQWFqQixNQUNiRCxTQUFTa0IsWUFBYSxHQUFHO0lBRS9CLE9BQU9sQjtBQUNUIn0=
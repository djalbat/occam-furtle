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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
var _default = (0, _elements.define)((_Reference = /*#__PURE__*/ function() {
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
    var Reference = _elements.default.Reference, name = nameFromReferenceNode(referenceNode, context), string = stringFromName(name, context), reference = new Reference(string, name);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVDYWxsL3JlZmVyZW5jZSFcIiksXG4gICAgICByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZUNhbGxOb2RlKHByb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCA9IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2RlUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lU3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBuYW1lU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiUmVmZXJlbmNlIiwic3RyaW5nIiwibmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJmcm9tUmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJjb250ZXh0IiwicmVmZXJlbmNlIiwicmVmZXJlbmNlRnJvbVJlZmVyZW5jZU5vZGUiLCJmcm9tUHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QiLCJlbGVtZW50cyIsIm5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInN0cmluZ0Zyb21OYW1lIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5hbWVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dFQVJxQjtxQkFHSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGtDQUFrQ0MsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDNUNDLGlDQUFpQ0QsSUFBQUEsZ0JBQVMsRUFBQztJQUVqRCxXQUFlRSxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxNQUFNLEVBQUVDLElBQUk7Z0NBREVGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQU1DLFlBQVlDLDJCQUEyQkgsZUFBZUM7Z0JBRTVELE9BQU9DO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0JDLGlCQUFpQixFQUFFSixPQUFPO2dCQUNyRCxJQUFNSyw0QkFBNEJoQixnQ0FBZ0NlLG9CQUM1REwsZ0JBQWdCTSwyQkFDaEJKLFlBQVlDLDJCQUEyQkgsZUFBZUM7Z0JBRTVELE9BQU9DO1lBQ1Q7Ozs7S0FkQSw2QkFBT04sUUFBTztBQWlCaEIsU0FBU08sMkJBQTJCSCxhQUFhLEVBQUVDLE9BQU87SUFDeEQsSUFBTSxBQUFFUCxZQUFjYSxpQkFBUSxDQUF0QmIsV0FDRkUsT0FBT1ksc0JBQXNCUixlQUFlQyxVQUM1Q04sU0FBU2MsZUFBZWIsTUFBTUssVUFDOUJDLFlBQVksSUFBSVIsVUFBVUMsUUFBUUM7SUFFeEMsT0FBT007QUFDVDtBQUVBLFNBQVNNLHNCQUFzQlIsYUFBYSxFQUFFQyxPQUFPO0lBQ25ELElBQU1TLDRCQUE0QmxCLCtCQUErQlEsZ0JBQzNEVyxtQ0FBbUNELDBCQUEwQkUsVUFBVSxJQUN2RWhCLE9BQU9lLGtDQUFrQyxHQUFHO0lBRWxELE9BQU9mO0FBQ1Q7QUFFQSxTQUFTYSxlQUFlYixJQUFJLEVBQUVLLE9BQU87SUFDbkMsSUFBTVksYUFBYWpCLE1BQ2JELFNBQVNrQixZQUFhLEdBQUc7SUFFL0IsT0FBT2xCO0FBQ1QifQ==
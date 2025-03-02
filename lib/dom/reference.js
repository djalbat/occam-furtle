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
var referenceNameTerminalNodeQuery = (0, _query.nodeQuery)("/reference/@name"), procedureCallReferenceNodeQuery = (0, _query.nodeQuery)("/procedureCall/reference");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmVmZXJlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9yZWZlcmVuY2UvQG5hbWVcIiksXG4gICAgICBwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZUNhbGwvcmVmZXJlbmNlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kID0gcHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZGVRdWVyeShwcm9jZWR1cmVDYWxsTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHByb2NlZHVyZUNhbGxSZWZlcmVuY2VOb2QsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gbmFtZUZyb21SZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVRdWVyeShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgcmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSByZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IHJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lU3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBuYW1lU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJyZWZlcmVuY2VOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9jZWR1cmVDYWxsUmVmZXJlbmNlTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZWZlcmVuY2UiLCJzdHJpbmciLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImZyb21SZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImNvbnRleHQiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VGcm9tUmVmZXJlbmNlTm9kZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbFJlZmVyZW5jZU5vZCIsImRvbSIsIm5hbWVGcm9tUmVmZXJlbmNlTm9kZSIsInN0cmluZ0Zyb21OYW1lIiwicmVmZXJlbmNlTmFtZVRlcm1pbmFsTm9kZSIsInJlZmVyZW5jZU5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5hbWVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLGlDQUFpQ0MsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDM0NDLGtDQUFrQ0QsSUFBQUEsZ0JBQVMsRUFBQztJQUVsRCxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJO2dDQURPRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM3QyxJQUFNQyxZQUFZQywyQkFBMkJILGVBQWVDO2dCQUU1RCxPQUFPQztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRUosT0FBTztnQkFDckQsSUFBTUssNEJBQTRCZCxnQ0FBZ0NhLG9CQUM1REwsZ0JBQWdCTSwyQkFDaEJKLFlBQVlDLDJCQUEyQkgsZUFBZUM7Z0JBRTVELE9BQU9DO1lBQ1Q7Ozs7S0FkQSw2QkFBT04sUUFBTztBQWlCaEIsU0FBU08sMkJBQTJCSCxhQUFhLEVBQUVDLE9BQU87SUFDeEQsSUFBTSxBQUFFUCxZQUFjYSxZQUFHLENBQWpCYixXQUNGRSxPQUFPWSxzQkFBc0JSLGVBQWVDLFVBQzVDTixTQUFTYyxlQUFlYixNQUFNSyxVQUM5QkMsWUFBWSxJQUFJUixVQUFVQyxRQUFRQztJQUV4QyxPQUFPTTtBQUNUO0FBRUEsU0FBU00sc0JBQXNCUixhQUFhLEVBQUVDLE9BQU87SUFDbkQsSUFBTVMsNEJBQTRCcEIsK0JBQStCVSxnQkFDM0RXLG1DQUFtQ0QsMEJBQTBCRSxVQUFVLElBQ3ZFaEIsT0FBT2Usa0NBQWtDLEdBQUc7SUFFbEQsT0FBT2Y7QUFDVDtBQUVBLFNBQVNhLGVBQWViLElBQUksRUFBRUssT0FBTztJQUNuQyxJQUFNWSxhQUFhakIsTUFDYkQsU0FBU2tCLFlBQWEsR0FBRztJQUUvQixPQUFPbEI7QUFDVCJ9
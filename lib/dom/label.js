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
var _Label;
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/label/@name"), procedureDeclarationLabelNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/label");
var _default = (0, _dom.domAssigned)((_Label = /*#__PURE__*/ function() {
    function Label(string, name) {
        _class_call_check(this, Label);
        this.string = string;
        this.name = name;
    }
    _create_class(Label, [
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
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = name === this.name;
                return nameMatches;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclarationLabelNode = procedureDeclarationLabelNodeQuery(procedureDeclarationNode), labelNode = procedureDeclarationLabelNode, label = labelFromLabelNode(labelNode, context);
                return label;
            }
        }
    ]);
    return Label;
}(), _define_property(_Label, "name", "Label"), _Label));
function labelFromLabelNode(labelNode, context) {
    var Label = _dom.default.Label, name = nameFromLabelNode(labelNode, context), string = stringFromName(name, context), label = new Label(string, name);
    return label;
}
function nameFromLabelNode(labelNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(labelNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function stringFromName(name, context) {
    var nameString = name, string = nameString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xhYmVsL0BuYW1lXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25MYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAobmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uTGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25MYWJlbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTGFiZWxOb2RlLCAgLy8vXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWUobmFtZSwgY29udGV4dCksXG4gICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShsYWJlbE5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVTdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG5hbWVTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25MYWJlbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTGFiZWwiLCJzdHJpbmciLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImNvbnRleHQiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkxhYmVsTm9kZSIsImxhYmVsTm9kZSIsImxhYmVsIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwiZG9tIiwibmFtZUZyb21MYWJlbE5vZGUiLCJzdHJpbmdGcm9tTmFtZSIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJuYW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsaUJBQ2xDQyxxQ0FBcUNELElBQUFBLGdCQUFTLEVBQUM7SUFFckQsV0FBZUUsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLE1BQU0sRUFBRUMsSUFBSTtnQ0FET0Y7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSCxJQUFJO2dCQUNaLElBQU1JLGNBQWVKLFNBQVMsSUFBSSxDQUFDQSxJQUFJO2dCQUV2QyxPQUFPSTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVDLE9BQU87Z0JBQ25FLElBQU1DLGdDQUFnQ1osbUNBQW1DVSwyQkFDbkVHLFlBQVlELCtCQUNaRSxRQUFRQyxtQkFBbUJGLFdBQVdGO2dCQUU1QyxPQUFPRztZQUNUOzs7O0tBUkEseUJBQU9WLFFBQU87QUFXaEIsU0FBU1csbUJBQW1CRixTQUFTLEVBQUVGLE9BQU87SUFDNUMsSUFBTSxBQUFFVCxRQUFVYyxZQUFHLENBQWJkLE9BQ0ZFLE9BQU9hLGtCQUFrQkosV0FBV0YsVUFDcENSLFNBQVNlLGVBQWVkLE1BQU1PLFVBQzlCRyxRQUFRLElBQUlaLE1BQU1DLFFBQVFDO0lBRWhDLE9BQU9VO0FBQ1Q7QUFFQSxTQUFTRyxrQkFBa0JKLFNBQVMsRUFBRUYsT0FBTztJQUMzQyxJQUFNUSxtQkFBbUJyQixzQkFBc0JlLFlBQ3pDTywwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRGpCLE9BQU9nQix5QkFBeUIsR0FBRztJQUV6QyxPQUFPaEI7QUFDVDtBQUVBLFNBQVNjLGVBQWVkLElBQUksRUFBRU8sT0FBTztJQUNuQyxJQUFNVyxhQUFhbEIsTUFDYkQsU0FBU21CLFlBQWEsR0FBRztJQUUvQixPQUFPbkI7QUFDVCJ9
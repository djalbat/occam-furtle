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
var _Label;
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/label/@name"), procedureDeclarationLabelNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/label");
var _default = (0, _elements.define)((_Label = /*#__PURE__*/ function() {
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
    var Label = _elements.default.Label, name = nameFromLabelNode(labelNode, context), string = stringFromName(name, context), label = new Label(string, name);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGFiZWwvQG5hbWVcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbkxhYmVsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL2xhYmVsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAobmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uTGFiZWxOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25MYWJlbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTGFiZWxOb2RlLCAgLy8vXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZShuYW1lLCBjb250ZXh0KSxcbiAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBuYW1lKTtcblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KGxhYmVsTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lKG5hbWUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbmFtZVN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkxhYmVsTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiTGFiZWwiLCJzdHJpbmciLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImNvbnRleHQiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkxhYmVsTm9kZSIsImxhYmVsTm9kZSIsImxhYmVsIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwiZWxlbWVudHMiLCJuYW1lRnJvbUxhYmVsTm9kZSIsInN0cmluZ0Zyb21OYW1lIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5hbWVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dFQVJxQjtxQkFHSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxpQkFDbENDLHFDQUFxQ0QsSUFBQUEsZ0JBQVMsRUFBQztJQUVyRCxXQUFlRSxJQUFBQSxnQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxNQUFNLEVBQUVDLElBQUk7Z0NBREVGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUgsSUFBSTtnQkFDWixJQUFNSSxjQUFlSixTQUFTLElBQUksQ0FBQ0EsSUFBSTtnQkFFdkMsT0FBT0k7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFQyxPQUFPO2dCQUNuRSxJQUFNQyxnQ0FBZ0NaLG1DQUFtQ1UsMkJBQ25FRyxZQUFZRCwrQkFDWkUsUUFBUUMsbUJBQW1CRixXQUFXRjtnQkFFNUMsT0FBT0c7WUFDVDs7OztLQVJBLHlCQUFPVixRQUFPO0FBV2hCLFNBQVNXLG1CQUFtQkYsU0FBUyxFQUFFRixPQUFPO0lBQzVDLElBQU0sQUFBRVQsUUFBVWMsaUJBQVEsQ0FBbEJkLE9BQ0ZFLE9BQU9hLGtCQUFrQkosV0FBV0YsVUFDcENSLFNBQVNlLGVBQWVkLE1BQU1PLFVBQzlCRyxRQUFRLElBQUlaLE1BQU1DLFFBQVFDO0lBRWhDLE9BQU9VO0FBQ1Q7QUFFQSxTQUFTRyxrQkFBa0JKLFNBQVMsRUFBRUYsT0FBTztJQUMzQyxJQUFNUSxtQkFBbUJyQixzQkFBc0JlLFlBQ3pDTywwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRGpCLE9BQU9nQix5QkFBeUIsR0FBRztJQUV6QyxPQUFPaEI7QUFDVDtBQUVBLFNBQVNjLGVBQWVkLElBQUksRUFBRU8sT0FBTztJQUNuQyxJQUFNVyxhQUFhbEIsTUFDYkQsU0FBU21CLFlBQWEsR0FBRztJQUUvQixPQUFPbkI7QUFDVCJ9
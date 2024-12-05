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
var _ForEachLoop;
var forEachLoopNodeQuery = (0, _query.nodeQuery)("/step/forEachLoop");
var _default = (0, _dom.domAssigned)((_ForEachLoop = /*#__PURE__*/ function() {
    function ForEachLoop(variable, anonymousProcedure) {
        _class_call_check(this, ForEachLoop);
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(ForEachLoop, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
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
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var forEachLoop = null;
                var forEachLoopNode = forEachLoopNodeQuery(stepNode);
                if (forEachLoopNode !== null) {
                    var Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, variable = Variable.fromForEachLoopNode(forEachLoopNode, context), anonymousProcedure = AnonymousProcedure.fromForEachLoopNode(forEachLoopNode, context);
                    forEachLoop = new ForEachLoop(variable, anonymousProcedure);
                }
                return forEachLoop;
            }
        }
    ]);
    return ForEachLoop;
}(), _define_property(_ForEachLoop, "name", "ForEachLoop"), _ForEachLoop));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZm9yRWFjaExvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgZm9yRWFjaExvb3BOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9mb3JFYWNoTG9vcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRm9yRWFjaExvb3Age1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRm9yRWFjaExvb3BcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvckVhY2hMb29wID0gbnVsbDtcblxuICAgIGNvbnN0IGZvckVhY2hMb29wTm9kZSA9IGZvckVhY2hMb29wTm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChmb3JFYWNoTG9vcE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIEFub255bW91c1Byb2NlZHVyZSB9ID0gZG9tLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhbm9ueW1vdXNQcm9jZWR1cmUgPSBBbm9ueW1vdXNQcm9jZWR1cmUuZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBmb3JFYWNoTG9vcCA9IG5ldyBGb3JFYWNoTG9vcCh2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9yRWFjaExvb3A7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZvckVhY2hMb29wTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJGb3JFYWNoTG9vcCIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRTdHJpbmciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJmb3JFYWNoTG9vcCIsImZvckVhY2hMb29wTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV2QyxXQUFlQyxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsUUFBUSxFQUFFQyxrQkFBa0I7Z0NBRFRGO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7WUFDaEM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsa0JBQWtCYixxQkFBcUJVO2dCQUU3QyxJQUFJRyxvQkFBb0IsTUFBTTtvQkFDNUIsSUFBUUMsV0FBaUNDLFlBQUcsQ0FBcENELFVBQVVFLHFCQUF1QkQsWUFBRyxDQUExQkMsb0JBQ1paLFdBQVdVLFNBQVNHLG1CQUFtQixDQUFDSixpQkFBaUJGLFVBQ3pETixxQkFBcUJXLG1CQUFtQkMsbUJBQW1CLENBQUNKLGlCQUFpQkY7b0JBRW5GQyxjQUFjLElBQUlULFlBQVlDLFVBQVVDO2dCQUMxQztnQkFFQSxPQUFPTztZQUNUOzs7O0tBaEJBLCtCQUFPTSxRQUFPIn0=
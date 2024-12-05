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
    function ForEachLoop(variable, anonymousFunction) {
        _class_call_check(this, ForEachLoop);
        this.variable = variable;
        this.anonymousFunction = anonymousFunction;
    }
    _create_class(ForEachLoop, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getAnonymousFunction",
            value: function getAnonymousFunction() {
                return this.anonymousFunction;
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
                    var Variable = _dom.default.Variable, AnonymousFunction = _dom.default.AnonymousFunction, variable = Variable.fromForEachLoopNode(forEachLoopNode, context), anonymousFunction = AnonymousFunction.fromForEachLoopNode(forEachLoopNode, context);
                    forEachLoop = new ForEachLoop(variable, anonymousFunction);
                }
                return forEachLoop;
            }
        }
    ]);
    return ForEachLoop;
}(), _define_property(_ForEachLoop, "name", "ForEachLoop"), _ForEachLoop));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZm9yRWFjaExvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgZm9yRWFjaExvb3BOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9mb3JFYWNoTG9vcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRm9yRWFjaExvb3Age1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZSwgYW5vbnltb3VzRnVuY3Rpb24pIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNGdW5jdGlvbiA9IGFub255bW91c0Z1bmN0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNGdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNGdW5jdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZvckVhY2hMb29wXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb3JFYWNoTG9vcCA9IG51bGw7XG5cbiAgICBjb25zdCBmb3JFYWNoTG9vcE5vZGUgPSBmb3JFYWNoTG9vcE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoZm9yRWFjaExvb3BOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBBbm9ueW1vdXNGdW5jdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tRm9yRWFjaExvb3BOb2RlKGZvckVhY2hMb29wTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhbm9ueW1vdXNGdW5jdGlvbiA9IEFub255bW91c0Z1bmN0aW9uLmZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KTtcblxuICAgICAgZm9yRWFjaExvb3AgPSBuZXcgRm9yRWFjaExvb3AodmFyaWFibGUsIGFub255bW91c0Z1bmN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9yRWFjaExvb3A7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZvckVhY2hMb29wTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJGb3JFYWNoTG9vcCIsInZhcmlhYmxlIiwiYW5vbnltb3VzRnVuY3Rpb24iLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c0Z1bmN0aW9uIiwiZ2V0U3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiZm9yRWFjaExvb3AiLCJmb3JFYWNoTG9vcE5vZGUiLCJWYXJpYWJsZSIsImRvbSIsIkFub255bW91c0Z1bmN0aW9uIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHVCQUF1QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV2QyxXQUFlQyxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsUUFBUSxFQUFFQyxpQkFBaUI7Z0NBRFJGO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7OztZQUczQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixpQkFBaUI7WUFDL0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsa0JBQWtCYixxQkFBcUJVO2dCQUU3QyxJQUFJRyxvQkFBb0IsTUFBTTtvQkFDNUIsSUFBUUMsV0FBZ0NDLFlBQUcsQ0FBbkNELFVBQVVFLG9CQUFzQkQsWUFBRyxDQUF6QkMsbUJBQ1paLFdBQVdVLFNBQVNHLG1CQUFtQixDQUFDSixpQkFBaUJGLFVBQ3pETixvQkFBb0JXLGtCQUFrQkMsbUJBQW1CLENBQUNKLGlCQUFpQkY7b0JBRWpGQyxjQUFjLElBQUlULFlBQVlDLFVBQVVDO2dCQUMxQztnQkFFQSxPQUFPTztZQUNUOzs7O0tBaEJBLCtCQUFPTSxRQUFPIn0=
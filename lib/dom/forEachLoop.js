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
    function ForEachLoop(string, variable, anonymousProcedure) {
        _class_call_check(this, ForEachLoop);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(ForEachLoop, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var forEachLoop = null;
                var forEachLoopNode = forEachLoopNodeQuery(stepNode);
                if (forEachLoopNode !== null) {
                    var Variable = _dom.default.Variable, AnonymousProcedure = _dom.default.AnonymousProcedure, node = forEachLoopNode, string = context.nodeAsString(node), variable = Variable.fromForEachLoopNode(forEachLoopNode, context), anonymousProcedure = AnonymousProcedure.fromForEachLoopNode(forEachLoopNode, context);
                    forEachLoop = new ForEachLoop(string, variable, anonymousProcedure);
                }
                return forEachLoop;
            }
        }
    ]);
    return ForEachLoop;
}(), _define_property(_ForEachLoop, "name", "ForEachLoop"), _ForEachLoop));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZm9yRWFjaExvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgZm9yRWFjaExvb3BOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9mb3JFYWNoTG9vcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRm9yRWFjaExvb3Age1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZvckVhY2hMb29wXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb3JFYWNoTG9vcCA9IG51bGw7XG5cbiAgICBjb25zdCBmb3JFYWNoTG9vcE5vZGUgPSBmb3JFYWNoTG9vcE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoZm9yRWFjaExvb3BOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBBbm9ueW1vdXNQcm9jZWR1cmUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBmb3JFYWNoTG9vcE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgYW5vbnltb3VzUHJvY2VkdXJlID0gQW5vbnltb3VzUHJvY2VkdXJlLmZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KTtcblxuICAgICAgZm9yRWFjaExvb3AgPSBuZXcgRm9yRWFjaExvb3Aoc3RyaW5nLCB2YXJpYWJsZSwgYW5vbnltb3VzUHJvY2VkdXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9yRWFjaExvb3A7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZvckVhY2hMb29wTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJGb3JFYWNoTG9vcCIsInN0cmluZyIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJmb3JFYWNoTG9vcCIsImZvckVhY2hMb29wTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiQW5vbnltb3VzUHJvY2VkdXJlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFdkMsV0FBZUMsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUMsWUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0I7Z0NBRGpCSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsa0JBQWtCO1lBQ2hDOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsa0JBQWtCZCxxQkFBcUJXO2dCQUU3QyxJQUFJRyxvQkFBb0IsTUFBTTtvQkFDNUIsSUFBUUMsV0FBaUNDLFlBQUcsQ0FBcENELFVBQVVFLHFCQUF1QkQsWUFBRyxDQUExQkMsb0JBQ1pDLE9BQU9KLGlCQUNQVixTQUFTUSxRQUFRTyxZQUFZLENBQUNELE9BQzlCYixXQUFXVSxTQUFTSyxtQkFBbUIsQ0FBQ04saUJBQWlCRixVQUN6RE4scUJBQXFCVyxtQkFBbUJHLG1CQUFtQixDQUFDTixpQkFBaUJGO29CQUVuRkMsY0FBYyxJQUFJVixZQUFZQyxRQUFRQyxVQUFVQztnQkFDbEQ7Z0JBRUEsT0FBT087WUFDVDs7OztLQWxCQSwrQkFBT1EsUUFBTyJ9
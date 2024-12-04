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
var _ForEachLoop;
var forEachLoopNodeQuery = (0, _query.nodeQuery)("/step/forEachLoop");
var _default = (0, _dom.domAssigned)((_ForEachLoop = /*#__PURE__*/ function() {
    function ForEachLoop() {
        _class_call_check(this, ForEachLoop);
    }
    _create_class(ForEachLoop, [
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
                    debugger;
                }
                return forEachLoop;
            }
        }
    ]);
    return ForEachLoop;
}(), _define_property(_ForEachLoop, "name", "ForEachLoop"), _ForEachLoop));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZm9yRWFjaExvb3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBmb3JFYWNoTG9vcE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2ZvckVhY2hMb29wXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBGb3JFYWNoTG9vcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRm9yRWFjaExvb3BcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvckVhY2hMb29wID0gbnVsbDtcblxuICAgIGNvbnN0IGZvckVhY2hMb29wTm9kZSA9IGZvckVhY2hMb29wTm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChmb3JFYWNoTG9vcE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGZvckVhY2hMb29wO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmb3JFYWNoTG9vcE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiRm9yRWFjaExvb3AiLCJnZXRTdHJpbmciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJmb3JFYWNoTG9vcCIsImZvckVhY2hMb29wTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O3FCQUwwQjttQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSx1QkFBdUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFdkMsV0FBZUMsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUM7Z0NBQUFBOzs7O1lBSS9CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsY0FBYztnQkFFbEIsSUFBTUMsa0JBQWtCVCxxQkFBcUJNO2dCQUU3QyxJQUFJRyxvQkFBb0IsTUFBTTtvQkFDNUIsUUFBUTtnQkFDVjtnQkFFQSxPQUFPRDtZQUNUOzs7O0tBWkEsK0JBQU9FLFFBQU8ifQ==
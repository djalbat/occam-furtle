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
var NullNode = /*#__PURE__*/ function() {
    function NullNode() {
        _class_call_check(this, NullNode);
    }
    _create_class(NullNode, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nullNode = new NullNode();
                return nullNode;
            }
        }
    ]);
    return NullNode;
}();
var nullNode = NullNode.fromNothing();
var _default = nullNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9udWxsTm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgTnVsbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbnVsbE5vZGUgPSBuZXcgTnVsbE5vZGUoKTtcblxuICAgIHJldHVybiBudWxsTm9kZTtcbiAgfVxufVxuXG5jb25zdCBudWxsTm9kZSA9IE51bGxOb2RlLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG51bGxOb2RlO1xuIl0sIm5hbWVzIjpbIk51bGxOb2RlIiwiZnJvbU5vdGhpbmciLCJudWxsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVkEsSUFBQSxBQUFNQSx5QkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsV0FBVyxJQUZmRjtnQkFJRixPQUFPRTtZQUNUOzs7V0FMSUY7O0FBUU4sSUFBTUUsV0FBV0YsU0FBU0MsV0FBVztJQUVyQyxXQUFlQyJ9
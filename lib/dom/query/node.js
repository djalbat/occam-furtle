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
var _query = require("../../utilities/query");
var _dom = require("../../dom");
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
var _NodeQuery;
var nodeQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodeQuery");
var _default = (0, _dom.domAssigned)((_NodeQuery = /*#__PURE__*/ function() {
    function NodeQuery() {
        _class_call_check(this, NodeQuery);
    }
    _create_class(NodeQuery, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var _$nodeQuery = null;
                var nodeQueryNode = nodeQueryNodeQuery(assigmentNode);
                if (nodeQueryNode !== null) {
                    debugger;
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IG5vZGVRdWVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L25vZGVRdWVyeVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZVF1ZXJ5IHtcbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZVF1ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlUXVlcnlOb2RlID0gbm9kZVF1ZXJ5Tm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVRdWVyeTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibm9kZVF1ZXJ5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOb2RlUXVlcnkiLCJnZXRTdHJpbmciLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiY29udGV4dCIsIm5vZGVRdWVyeU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztxQkFMMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DO2dDQUFBQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWEsRUFBRUMsT0FBTztnQkFDOUMsSUFBSU4sY0FBWTtnQkFFaEIsSUFBTU8sZ0JBQWdCUixtQkFBbUJNO2dCQUV6QyxJQUFJRSxrQkFBa0IsTUFBTTtvQkFDMUIsUUFBUTtnQkFDVjtnQkFFQSxPQUFPUDtZQUNUOzs7O0tBWkEsNkJBQU9RLFFBQU8ifQ==
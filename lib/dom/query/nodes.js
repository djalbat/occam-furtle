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
var _NodesQuery;
var nodesQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodesQuery");
var _default = (0, _dom.domAssigned)((_NodesQuery = /*#__PURE__*/ function() {
    function NodesQuery() {
        _class_call_check(this, NodesQuery);
    }
    _create_class(NodesQuery, [
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
                var nodesQuery = null;
                var nodesQueryNode = nodesQueryNodeQuery(assigmentNode);
                if (nodesQueryNode !== null) {
                    debugger;
                }
                return nodesQuery;
            }
        }
    ]);
    return NodesQuery;
}(), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBub2Rlc1F1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvbm9kZXNRdWVyeVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZXNRdWVyeSB7XG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVzUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IG5vZGVzUXVlcnlOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAobm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzUXVlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm5vZGVzUXVlcnlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5vZGVzUXVlcnkiLCJnZXRTdHJpbmciLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiY29udGV4dCIsIm5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7O3FCQUwwQjttQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUMsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUM7Z0NBQUFBOzs7O1lBQy9CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM5QyxJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxpQkFBaUJULG9CQUFvQk07Z0JBRTNDLElBQUlHLG1CQUFtQixNQUFNO29CQUMzQixRQUFRO2dCQUNWO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7S0FaQSw4QkFBT0UsUUFBTyJ9
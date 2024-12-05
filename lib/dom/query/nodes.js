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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
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
var _NodesQuery;
var nodesQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodesQuery");
var _default = (0, _dom.domAssigned)((_NodesQuery = /*#__PURE__*/ function() {
    function NodesQuery() {
        _class_call_check(this, NodesQuery);
    }
    _create_class(NodesQuery, [
        {
            key: "getString",
            value: function getString(variable, expression) {
                this.variable = variable;
                this.expression = expression;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var nodesQuery = null;
                var nodesQueryNode = nodesQueryNodeQuery(assigmentNode);
                if (nodesQueryNode !== null) {
                    var Variable = _dom.default.Variable, Expression = _dom.default.Expression, variable = Variable.fromNodesQueryNode(nodesQueryNode, context), expression = Expression.fromNodesQueryNode(nodesQueryNode, context);
                    nodesQuery = new NodesQuery(variable, expression);
                }
                return nodesQuery;
            }
        }
    ]);
    return NodesQuery;
}(), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3Qgbm9kZXNRdWVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L25vZGVzUXVlcnlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5vZGVzUXVlcnkge1xuICBnZXRTdHJpbmcodmFyaWFibGUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVzUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IG5vZGVzUXVlcnlOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAobm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIEV4cHJlc3Npb24gfSA9IGRvbSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeSh2YXJpYWJsZSwgZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzUXVlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm5vZGVzUXVlcnlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5vZGVzUXVlcnkiLCJnZXRTdHJpbmciLCJ2YXJpYWJsZSIsImV4cHJlc3Npb24iLCJnZXRWYXJpYWJsZSIsImdldEV4cHJlc3Npb24iLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwiY29udGV4dCIsIm5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Tm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiRXhwcmVzc2lvbiIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlQyxJQUFBQSxnQkFBVywrQkFBQzthQUFNQztnQ0FBQUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRLEVBQUVDLFVBQVU7Z0JBQzVCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQTtnQkFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1lBQ3BCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM5QyxJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxpQkFBaUJiLG9CQUFvQlU7Z0JBRTNDLElBQUlHLG1CQUFtQixNQUFNO29CQUMzQixJQUFRQyxXQUF5QkMsWUFBRyxDQUE1QkQsVUFBVUUsYUFBZUQsWUFBRyxDQUFsQkMsWUFDWlgsV0FBV1MsU0FBU0csa0JBQWtCLENBQUNKLGdCQUFnQkYsVUFDdkRMLGFBQWFVLFdBQVdDLGtCQUFrQixDQUFDSixnQkFBZ0JGO29CQUVqRUMsYUFBYSxJQUFJVCxXQUFXRSxVQUFVQztnQkFDeEM7Z0JBRUEsT0FBT007WUFDVDs7OztLQWhCQSw4QkFBT00sUUFBTyJ9
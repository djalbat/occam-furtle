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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
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
var _NodeQuery;
var nodeQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodeQuery");
var _default = (0, _dom.domAssigned)((_NodeQuery = /*#__PURE__*/ function() {
    function NodeQuery() {
        _class_call_check(this, NodeQuery);
    }
    _create_class(NodeQuery, [
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
                var _$nodeQuery = null;
                var nodeQueryNode = nodeQueryNodeQuery(assigmentNode);
                if (nodeQueryNode !== null) {
                    var Variable = _dom.default.Variable, Expression = _dom.default.Expression, variable = Variable.fromNodeQueryNode(nodeQueryNode, context), expression = Expression.fromNodeQueryNode(nodeQueryNode, context);
                    _$nodeQuery = new NodeQuery(variable, expression);
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IGRvbSwgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3Qgbm9kZVF1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvbm9kZVF1ZXJ5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOb2RlUXVlcnkge1xuICBnZXRTdHJpbmcodmFyaWFibGUsIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVRdWVyeVwiO1xuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IG5vZGVRdWVyeU5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkodmFyaWFibGUsIGV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm5vZGVRdWVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTm9kZVF1ZXJ5IiwiZ2V0U3RyaW5nIiwidmFyaWFibGUiLCJleHByZXNzaW9uIiwiZ2V0VmFyaWFibGUiLCJnZXRFeHByZXNzaW9uIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsImNvbnRleHQiLCJub2RlUXVlcnlOb2RlIiwiVmFyaWFibGUiLCJkb20iLCJFeHByZXNzaW9uIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztxQkFMMEI7MkRBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUMsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUM7Z0NBQUFBOzs7O1lBQy9CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUSxFQUFFQyxVQUFVO2dCQUM1QixJQUFJLENBQUNELFFBQVEsR0FBR0E7Z0JBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWEsRUFBRUMsT0FBTztnQkFDOUMsSUFBSVYsY0FBWTtnQkFFaEIsSUFBTVcsZ0JBQWdCWixtQkFBbUJVO2dCQUV6QyxJQUFJRSxrQkFBa0IsTUFBTTtvQkFDMUIsSUFBUUMsV0FBeUJDLFlBQUcsQ0FBNUJELFVBQVVFLGFBQWVELFlBQUcsQ0FBbEJDLFlBQ1pWLFdBQVdRLFNBQVNHLGlCQUFpQixDQUFDSixlQUFlRCxVQUNyREwsYUFBYVMsV0FBV0MsaUJBQWlCLENBQUNKLGVBQWVEO29CQUUvRFYsY0FBWSxJQUFJRSxVQUFVRSxVQUFVQztnQkFDdEM7Z0JBRUEsT0FBT0w7WUFDVDs7OztLQWhCQSw2QkFBT2dCLFFBQU8ifQ==
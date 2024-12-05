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
var _occamquery = require("occam-query");
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
var nodesQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodesQuery"), expressionNodeQuery = (0, _query.nodeQuery)("/nodesQuery/expression");
var _default = (0, _dom.domAssigned)((_NodesQuery = /*#__PURE__*/ function() {
    function NodesQuery() {
        _class_call_check(this, NodesQuery);
    }
    _create_class(NodesQuery, [
        {
            key: "getString",
            value: function getString(variable, query) {
                this.variable = variable;
                this.query = query;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getQuery",
            value: function getQuery() {
                return this.query;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var nodesQuery = null;
                var nodesQueryNode = nodesQueryNodeQuery(assigmentNode);
                if (nodesQueryNode !== null) {
                    var Variable = _dom.default.Variable, expressionNode = expressionNodeQuery(nodesQueryNode), expression = _occamquery.Expression.fromExpressionNode(expressionNode), variable = Variable.fromNodesQueryNode(nodesQueryNode, context), query = _occamquery.Query.fromExpression(expression);
                    nodesQuery = new NodesQuery(variable, query);
                }
                return nodesQuery;
            }
        }
    ]);
    return NodesQuery;
}(), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5LCBFeHByZXNzaW9uIH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3Qgbm9kZXNRdWVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L25vZGVzUXVlcnlcIiksXG4gICAgICBleHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZXNRdWVyeSB7XG4gIGdldFN0cmluZyh2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2Rlc1F1ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeSh2YXJpYWJsZSwgcXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2Rlc1F1ZXJ5O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJub2Rlc1F1ZXJ5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXhwcmVzc2lvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTm9kZXNRdWVyeSIsImdldFN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsImNvbnRleHQiLCJub2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeU5vZGUiLCJWYXJpYWJsZSIsImRvbSIsImV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbiIsIkV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJmcm9tTm9kZXNRdWVyeU5vZGUiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MEJBVmtDOzJEQUVsQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQywyQkFDaENDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlRSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQztnQ0FBQUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRLEVBQUVDLEtBQUs7Z0JBQ3ZCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQTtnQkFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzlDLElBQUlDLGFBQWE7Z0JBRWpCLElBQU1DLGlCQUFpQmQsb0JBQW9CVztnQkFFM0MsSUFBSUcsbUJBQW1CLE1BQU07b0JBQzNCLElBQU0sQUFBRUMsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkUsaUJBQWlCZixvQkFBb0JZLGlCQUNyQ0ksYUFBYUMsc0JBQVUsQ0FBQ0Msa0JBQWtCLENBQUNILGlCQUMzQ1gsV0FBV1MsU0FBU00sa0JBQWtCLENBQUNQLGdCQUFnQkYsVUFDdkRMLFFBQVFlLGlCQUFLLENBQUNDLGNBQWMsQ0FBQ0w7b0JBRW5DTCxhQUFhLElBQUlULFdBQVdFLFVBQVVDO2dCQUN4QztnQkFFQSxPQUFPTTtZQUNUOzs7O0tBbEJBLDhCQUFPVyxRQUFPIn0=
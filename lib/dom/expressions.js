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
var _Expressions;
var expressionNodesQuery = (0, _query.nodesQuery)("/expressions/expression"), procedureCallExpressionsNodeQuery = (0, _query.nodeQuery)("/procedureCall/expressions");
var _default = (0, _dom.domAssigned)((_Expressions = /*#__PURE__*/ function() {
    function Expressions(string, array) {
        _class_call_check(this, Expressions);
        this.string = string;
        this.array = array;
    }
    _create_class(Expressions, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getExpression",
            value: function getExpression(index) {
                var expression = this.array[index] || null; ///
                return expression;
            }
        },
        {
            key: "addExpression",
            value: function addExpression(expression) {
                this.array.push(expression);
            }
        },
        {
            key: "mapExpression",
            value: function mapExpression(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachExpression",
            value: function forEachExpression(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var array = this.mapExpression(function(expression) {
                    expression = expression.evaluate(context);
                    return expression;
                }), expressions = Expressions.fromArray(array, context); ///
                return expressions;
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var array = arrayFromNodes(nodes, context), string = stringFromArray(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromArray",
            value: function fromArray(array, context) {
                var string = stringFromArray(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromExpression",
            value: function fromExpression(expression, context) {
                var array = [
                    expression
                ], string = stringFromArray(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, context) {
                var procedureCallExpressionsNode = procedureCallExpressionsNodeQuery(procedureCallNode), expressionsNode = procedureCallExpressionsNode, expressions = expressionsFromExpressionsNode(expressionsNode, context);
                return expressions;
            }
        }
    ]);
    return Expressions;
}(), _define_property(_Expressions, "name", "Expressions"), _Expressions));
function arrayFromNodes(nodes, context) {
    var Expression = _dom.default.Expression, array = nodes.map(function(node) {
        var expression = Expression.fromNode(node, context);
        return expression;
    });
    return array;
}
function stringFromArray(array, context) {
    var expressionsString = array.reduce(function(expressionsString, expression) {
        var expressionString = expression.asString(context);
        expressionsString = expressionsString === null ? expressionString : "".concat(expressionsString, ", ").concat(expressionString);
        return expressionsString;
    }, null), string = expressionsString; ///
    return string;
}
function arrayFromExpressionNodes(expressionNodes, context) {
    var Expression = _dom.default.Expression, array = expressionNodes.map(function(expressionNode) {
        var expression = Expression.fromExpressionNode(expressionNode, context);
        return expression;
    });
    return array;
}
function expressionsFromExpressionsNode(expressionsNode, context) {
    var Expressions = _dom.default.Expressions, node = expressionsNode, string = context.nodeAsString(node), expressionNodes = expressionNodesQuery(expressionsNode), array = arrayFromExpressionNodes(expressionNodes, context), expressions = new Expressions(string, array);
    return expressions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXhwcmVzc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgZXhwcmVzc2lvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2V4cHJlc3Npb25zL2V4cHJlc3Npb25cIiksXG4gICAgICBwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC9leHByZXNzaW9uc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRXhwcmVzc2lvbnMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oaW5kZXgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBhZGRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZXhwcmVzc2lvbik7XG4gIH1cblxuICBtYXBFeHByZXNzaW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXhwcmVzc2lvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBFeHByZXNzaW9uKChleHByZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBFeHByZXNzaW9ucy5mcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZXhwcmVzc2lvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlID0gcHJvY2VkdXJlQ2FsbEV4cHJlc3Npb25zTm9kZVF1ZXJ5KHByb2NlZHVyZUNhbGxOb2RlKSxcbiAgICAgICAgICBleHByZXNzaW9uc05vZGUgPSBwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zU3RyaW5nID0gYXJyYXkucmVkdWNlKChleHByZXNzaW9uc1N0cmluZywgZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgICAgICAgZXhwcmVzc2lvbnNTdHJpbmcgPSAoZXhwcmVzc2lvbnNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb25TdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2V4cHJlc3Npb25zU3RyaW5nfSwgJHtleHByZXNzaW9uU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSBleHByZXNzaW9uc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyhleHByZXNzaW9uTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gZXhwcmVzc2lvbk5vZGVzLm1hcCgoZXhwcmVzc2lvbk5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9ucyB9ID0gZG9tLFxuICAgICAgICBub2RlID0gZXhwcmVzc2lvbnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IGV4cHJlc3Npb25Ob2Rlc1F1ZXJ5KGV4cHJlc3Npb25zTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkV4cHJlc3Npb25zIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEV4cHJlc3Npb24iLCJpbmRleCIsImV4cHJlc3Npb24iLCJhZGRFeHByZXNzaW9uIiwicHVzaCIsIm1hcEV4cHJlc3Npb24iLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hFeHByZXNzaW9uIiwiZm9yRWFjaCIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb25zIiwiZnJvbUFycmF5IiwiZnJvbU5vZGVzIiwibm9kZXMiLCJhcnJheUZyb21Ob2RlcyIsInN0cmluZ0Zyb21BcnJheSIsImZyb21FeHByZXNzaW9uIiwiZnJvbVByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlIiwiZXhwcmVzc2lvbnNOb2RlIiwiZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlIiwibmFtZSIsIkV4cHJlc3Npb24iLCJkb20iLCJub2RlIiwiZnJvbU5vZGUiLCJleHByZXNzaW9uc1N0cmluZyIsInJlZHVjZSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsImFycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25Ob2RlIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsdUJBQXVCQyxJQUFBQSxpQkFBVSxFQUFDLDRCQUNsQ0Msb0NBQW9DQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXBELFdBQWVDLElBQUFBLGdCQUFXLGdDQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksTUFBTTtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxLQUFLO2dCQUNqQixJQUFNQyxhQUFhLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNLElBQUksTUFBTyxHQUFHO2dCQUVsRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNELFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ1AsS0FBSyxDQUFDUyxJQUFJLENBQUNGO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksR0FBRyxDQUFDRDtZQUFXOzs7WUFFM0RF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
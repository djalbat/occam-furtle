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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _element = require("../utilities/element");
var _string = require("../utilities/string");
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
var _default = (0, _elements.define)((_Expressions = /*#__PURE__*/ function() {
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
                var array = arrayFromNodes(nodes, context), string = (0, _string.expressionsStringFromExpressionsArray)(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromArray",
            value: function fromArray(array, context) {
                var string = (0, _string.expressionsStringFromExpressionsArray)(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromExpression",
            value: function fromExpression(expression, context) {
                var array = [
                    expression
                ], string = (0, _string.expressionsStringFromExpressionsArray)(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        }
    ]);
    return Expressions;
}(), _define_property(_Expressions, "name", "Expressions"), _Expressions));
function arrayFromNodes(nodes, context) {
    var Expression = _elements.default.Expression, array = nodes.map(function(node) {
        var expression = Expression.fromNode(node, context);
        return expression;
    });
    return array;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZXhwcmVzc2lvbnNGcm9tRXhwcmVzc2lvbnNOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBleHByZXNzaW9uc1N0cmluZ0Zyb21FeHByZXNzaW9uc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEV4cHJlc3Npb25zIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKGluZGV4KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgYWRkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgbWFwRXhwcmVzc2lvbihjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaEV4cHJlc3Npb24oY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMubWFwRXhwcmVzc2lvbigoZXhwcmVzc2lvbikgPT4ge1xuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gRXhwcmVzc2lvbnMuZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXhwcmVzc2lvbnNcIjtcblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZXhwcmVzc2lvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXhwcmVzc2lvbnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RXhwcmVzc2lvbiIsImluZGV4IiwiZXhwcmVzc2lvbiIsImFkZEV4cHJlc3Npb24iLCJwdXNoIiwibWFwRXhwcmVzc2lvbiIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaEV4cHJlc3Npb24iLCJmb3JFYWNoIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbnMiLCJmcm9tQXJyYXkiLCJmcm9tTm9kZXMiLCJub2RlcyIsImFycmF5RnJvbU5vZGVzIiwiZXhwcmVzc2lvbnNTdHJpbmdGcm9tRXhwcmVzc2lvbnNBcnJheSIsImZyb21FeHByZXNzaW9uIiwibmFtZSIsIkV4cHJlc3Npb24iLCJlbGVtZW50cyIsIm5vZGUiLCJmcm9tTm9kZSJdLCJtYXBw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
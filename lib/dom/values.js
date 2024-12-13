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
var _Values;
var valuesNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall/values"), valueNodesQuery = (0, _query.nodesQuery)("/values/value");
var _default = (0, _dom.domAssigned)((_Values = /*#__PURE__*/ function() {
    function Values(string, array) {
        _class_call_check(this, Values);
        this.string = string;
        this.array = array;
    }
    _create_class(Values, [
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
            key: "getValue",
            value: function getValue(index) {
                var value = this.array[index] || null; ///
                return value;
            }
        },
        {
            key: "mapValue",
            value: function mapValue(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var array = this.mapValue(function(value) {
                    value = value.resolve(context);
                    return value;
                }), values = Values.fromArray(array); ///
                return values;
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var array = arrayFromNodes(nodes, context), string = stringFromArray(array, context), values = new Values(string, array);
                return values;
            }
        },
        {
            key: "fromArray",
            value: function fromArray(array, context) {
                var string = stringFromArray(array, context), values = new Values(string, array);
                return values;
            }
        },
        {
            key: "fromValuesNode",
            value: function fromValuesNode(valuesNode, context) {
                var values = null;
                if (valuesNode !== null) {
                    values = valuesFromValuesNode(valuesNode, context);
                }
                return values;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assignmentNode, context) {
                var values = null;
                var valuesNode = valuesNodeQuery(assignmentNode);
                if (valuesNode !== null) {
                    values = valuesFromValuesNode(valuesNode, context);
                }
                return values;
            }
        }
    ]);
    return Values;
}(), _define_property(_Values, "name", "Values"), _Values));
function arrayFromNodes(nodes, context) {
    var Value = _dom.default.Value, array = nodes.map(function(node) {
        var value = Value.fromNode(node, context);
        return value;
    });
    return array;
}
function stringFromArray(array, context) {
    var valuesString = array.reduce(function(valuesString, value) {
        var valueString = value.getString();
        valuesString = valuesString === null ? valueString : "".concat(valuesString, ", ").concat(valueString);
        return valuesString;
    }, null), string = valuesString; ///
    return string;
}
function arrayFromValueNodes(valueNodes, context) {
    var Value = _dom.default.Value, array = valueNodes.map(function(valueNode) {
        var value = Value.fromValueNode(valueNode, context);
        return value;
    });
    return array;
}
function valuesFromValuesNode(valuesNode, context) {
    var Values = _dom.default.Values, node = valuesNode, string = context.nodeAsString(node), valueNodes = valueNodesQuery(valuesNode), array = arrayFromValueNodes(valueNodes, context), values = new Values(string, array);
    return values;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3Byb2NlZHVyZUNhbGwvdmFsdWVzXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YWx1ZXMvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1hcFZhbHVlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMubWFwVmFsdWUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbUFycmF5KGFycmF5KTsgLy8vXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZXMgPSBudWxsO1xuXG4gICAgaWYgKHZhbHVlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZXNOb2RlID0gdmFsdWVzTm9kZVF1ZXJ5KGFzc2lnbm1lbnROb2RlKTtcblxuICAgIGlmICh2YWx1ZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZXNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHZhbHVlc1N0cmluZywgdmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgdmFsdWVzU3RyaW5nID0gKHZhbHVlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ZhbHVlc1N0cmluZ30sICR7dmFsdWVTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSB2YWx1ZXNTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IHZhbHVlTm9kZXMubWFwKCh2YWx1ZU5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlcyB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZU5vZGVzID0gdmFsdWVOb2Rlc1F1ZXJ5KHZhbHVlc05vZGUpLFxuICAgICAgICBhcnJheSA9IGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCksXG4gICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZXNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYWx1ZXMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VmFsdWUiLCJpbmRleCIsInZhbHVlIiwibWFwVmFsdWUiLCJjYWxsYmFjayIsIm1hcCIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWVzIiwiZnJvbUFycmF5IiwiZnJvbU5vZGVzIiwibm9kZXMiLCJhcnJheUZyb21Ob2RlcyIsInN0cmluZ0Zyb21BcnJheSIsImZyb21WYWx1ZXNOb2RlIiwidmFsdWVzTm9kZSIsInZhbHVlc0Zyb21WYWx1ZXNOb2RlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJuYW1lIiwiVmFsdWUiLCJkb20iLCJub2RlIiwiZnJvbU5vZGUiLCJ2YWx1ZXNTdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZVN0cmluZyIsImFycmF5RnJvbVZhbHVlTm9kZXMiLCJ2YWx1ZU5vZGVzIiwidmFsdWVOb2RlIiwiZnJvbVZhbHVlTm9kZSIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGtCQUFrQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQ0FDNUJDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQztJQUVuQyxXQUFlQyxJQUFBQSxnQkFBVywyQkFBQzthQUFNQyxPQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSixLQUFLLENBQUNJLE1BQU07Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSztnQkFDWixJQUFNQyxRQUFRLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNLElBQUksTUFBTyxHQUFHO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsR0FBRyxDQUFDRDtZ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
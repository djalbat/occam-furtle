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
            key: "forEachValue",
            value: function forEachValue(callback) {
                this.array.forEach(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3Byb2NlZHVyZUNhbGwvdmFsdWVzXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YWx1ZXMvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1hcFZhbHVlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVmFsdWUoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBWYWx1ZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IFZhbHVlcy5mcm9tQXJyYXkoYXJyYXkpOyAvLy9cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVzXCI7XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBpZiAodmFsdWVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlc05vZGUgPSB2YWx1ZXNOb2RlUXVlcnkoYXNzaWdubWVudE5vZGUpO1xuXG4gICAgaWYgKHZhbHVlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlc1N0cmluZyA9IGFycmF5LnJlZHVjZSgodmFsdWVzU3RyaW5nLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB2YWx1ZXNTdHJpbmcgPSAodmFsdWVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFsdWVzU3RyaW5nfSwgJHt2YWx1ZVN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHZhbHVlc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gdmFsdWVOb2Rlcy5tYXAoKHZhbHVlTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWVzIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YWx1ZXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkodmFsdWVzTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFsdWVzO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRWYWx1ZSIsImluZGV4IiwidmFsdWUiLCJtYXBWYWx1ZSIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaFZhbHVlIiwiZm9yRWFjaCIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWVzIiwiZnJvbUFycmF5IiwiZnJvbU5vZGVzIiwibm9kZXMiLCJhcnJheUZyb21Ob2RlcyIsInN0cmluZ0Zyb21BcnJheSIsImZyb21WYWx1ZXNOb2RlIiwidmFsdWVzTm9kZSIsInZhbHVlc0Zyb21WYWx1ZXNOb2RlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJuYW1lIiwiVmFsdWUiLCJkb20iLCJub2RlIiwiZnJvbU5vZGUiLCJ2YWx1ZXNTdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZVN0cmluZyIsImFycmF5RnJvbVZhbHVlTm9kZXMiLCJ2YWx1ZU5vZGVzIiwidmFsdWVOb2RlIiwiZnJvbVZhbHVlTm9kZSIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGtCQUFrQkMsSUFBQUEsZ0JBQVMsRUFBQyxxQ0FDNUJDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQztJQUVuQyxXQUFlQyxJQUFBQSxnQkFBVywyQkFBQzthQUFNQyxPQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSixLQUFLLENBQUNJLE1BQU07Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSztnQkFDWixJQUFNQyxRQUFRLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNLElBQUksTUFBTyxHQUFHO2dCQUU3QyxPQUFPQztZ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
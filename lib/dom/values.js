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
var valuesNodeQuery = (0, _query.nodeQuery)("/value/procedureCall/values"), valueNodesQuery = (0, _query.nodesQuery)("/values/value"), anonymousProcedureCallValuesNodeQuery = (0, _query.nodeQuery)("/anonymousProcedureCall/values");
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
            key: "evaluate",
            value: function evaluate(context) {
                var array = this.mapValue(function(value) {
                    value = value.evaluate(context);
                    return value;
                }), values = Values.fromArray(array, context); ///
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
            key: "fromValue",
            value: function fromValue(value, context) {
                var array = [
                    value
                ], string = stringFromArray(array, context), values = new Values(string, array);
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
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var values = null;
                var valuesNode = valuesNodeQuery(valueNode);
                if (valuesNode !== null) {
                    values = valuesFromValuesNode(valuesNode, context);
                }
                return values;
            }
        },
        {
            key: "fromAnonymousProcedureCallNode",
            value: function fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context) {
                var anonymousProcedureCallValuesNode = anonymousProcedureCallValuesNodeQuery(anonymousProcedureCallNode), valuesNode = anonymousProcedureCallValuesNode, values = valuesFromValuesNode(valuesNode, context);
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
        var valueString = value.asString(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9wcm9jZWR1cmVDYWxsL3ZhbHVlc1wiKSxcbiAgICAgIHZhbHVlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFsdWVzL3ZhbHVlXCIpLFxuICAgICAgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbFZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmVDYWxsL3ZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWVzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRWYWx1ZShpbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbWFwVmFsdWUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hWYWx1ZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBWYWx1ZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBpZiAodmFsdWVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVzTm9kZSA9IHZhbHVlc05vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlKGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlQ2FsbFZhbHVlc05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVDYWxsVmFsdWVzTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlKSxcbiAgICAgICAgICB2YWx1ZXNOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlQ2FsbFZhbHVlc05vZGUsICAvLy9cbiAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlc1N0cmluZyA9IGFycmF5LnJlZHVjZSgodmFsdWVzU3RyaW5nLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICAgICAgICB2YWx1ZXNTdHJpbmcgPSAodmFsdWVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFsdWVzU3RyaW5nfSwgJHt2YWx1ZVN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHZhbHVlc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gdmFsdWVOb2Rlcy5tYXAoKHZhbHVlTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWVzIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YWx1ZXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkodmFsdWVzTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFsdWVzO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsVmFsdWVzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYWx1ZXMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VmFsdWUiLCJpbmRleCIsInZhbHVlIiwibWFwVmFsdWUiLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hWYWx1ZSIsImZvckVhY2giLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZXMiLCJmcm9tQXJyYXkiLCJmcm9tTm9kZXMiLCJub2RlcyIsImFycmF5RnJvbU5vZGVzIiwic3RyaW5nRnJvbUFycmF5IiwiZnJvbVZhbHVlIiwiZnJvbVZhbHVlc05vZGUiLCJ2YWx1ZXNOb2RlIiwidmFsdWVzRnJvbVZhbHVlc05vZGUiLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZUNhbGxOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlQ2FsbE5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVDYWxsVmFsdWVzTm9kZSIsIm5hbWUiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJmcm9tTm9kZSIsInZhbHVlc1N0cmluZyIsInJlZHVjZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheUZyb21WYWx1ZU5vZGVzIiwidmFsdWVOb2RlcyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGtCQUFrQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDNUJDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxrQkFDN0JDLHdDQUF3Q0gsSUFBQUEsZ0JBQVMsRUFBQztJQUV4RCxXQUFlSSxJQUFBQSxnQkFBVywyQkFBQzthQUFNQyxPQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSixLQUFLLENBQUNJLE1BQU07Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsS0FBSztnQkFDWixJQUFNQyxRQUFRLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxNQUFNLElBQUksTUFBTyxHQUFHO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNULEtBQUssQ0FBQ1UsR0FBRyxDQUFD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
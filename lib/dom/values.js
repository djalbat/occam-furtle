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
var valuesNodeQuery = (0, _query.nodeQuery)("/value/procedureCall/values"), valueNodesQuery = (0, _query.nodesQuery)("/values/value");
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
            key: "addValue",
            value: function addValue(value) {
                this.array.push(value);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9wcm9jZWR1cmVDYWxsL3ZhbHVlc1wiKSxcbiAgICAgIHZhbHVlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvdmFsdWVzL3ZhbHVlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYWx1ZXMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFZhbHVlKGluZGV4KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmFycmF5W2luZGV4XSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBhZGRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXJyYXkucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBtYXBWYWx1ZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5hcnJheS5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaFZhbHVlKGNhbGxiYWNrKSB7IHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLm1hcFZhbHVlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IFZhbHVlcy5mcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVzXCI7XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcblxuICAgIGlmICh2YWx1ZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZXNOb2RlID0gdmFsdWVzTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzU3RyaW5nID0gYXJyYXkucmVkdWNlKCh2YWx1ZXNTdHJpbmcsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgICAgICAgIHZhbHVlc1N0cmluZyA9ICh2YWx1ZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt2YWx1ZXNTdHJpbmd9LCAke3ZhbHVlU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWVzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZU5vZGVzLm1hcCgodmFsdWVOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZXMgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhbHVlc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFsdWVOb2RlcyA9IHZhbHVlTm9kZXNRdWVyeSh2YWx1ZXNOb2RlKSxcbiAgICAgICAgYXJyYXkgPSBhcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YWx1ZXM7XG59XG4iXSwibmFtZXMiOlsidmFsdWVzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWVzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFZhbHVlIiwiaW5kZXgiLCJ2YWx1ZSIsImFkZFZhbHVlIiwicHVzaCIsIm1hcFZhbHVlIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoVmFsdWUiLCJmb3JFYWNoIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWVzIiwiZnJvbUFycmF5IiwiZnJvbU5vZGVzIiwibm9kZXMiLCJhcnJheUZyb21Ob2RlcyIsInN0cmluZ0Zyb21BcnJheSIsImZyb21WYWx1ZSIsImZyb21WYWx1ZXNOb2RlIiwidmFsdWVzTm9kZSIsInZhbHVlc0Zyb21WYWx1ZXNOb2RlIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVlTm9kZSIsIm5hbWUiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJmcm9tTm9kZSIsInZhbHVlc1N0cmluZyIsInJlZHVjZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheUZyb21WYWx1ZU5vZGVzIiwidmFsdWVOb2RlcyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGtCQUFrQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDNUJDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQztJQUVuQyxXQUFlQyxJQUFBQSxnQkFBVywyQkFBQzthQUFNQyxPQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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
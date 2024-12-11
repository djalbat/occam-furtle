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
var _ProcedureCall;
var valueNodesQuery = (0, _query.nodesQuery)("/assignment/procedureCall/value"), procedureCallNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, values) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.values = values;
    }
    _create_class(ProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getValues",
            value: function getValues() {
                return this.values;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode) {
                var procedureCall = null;
                var procedureCallNode = procedureCallNodeQuery(assigmentNode);
                if (procedureCallNode !== null) {
                    var Reference = _dom.default.Reference, reference = Reference.fromAssignmentNode(assigmentNode), values = valuesFromAssignmentNode(assigmentNode), string = null;
                    procedureCall = new ProcedureCall(string, reference, values);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));
function valuesFromAssignmentNode(assigmentNode) {
    var Value = _dom.default.Value, valueNodes = valueNodesQuery(assigmentNode), values = valueNodes.map(function(valueNode) {
        var value = Value.fromValueNode(valueNode);
        return value;
    });
    return values;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YWx1ZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Fzc2lnbm1lbnQvcHJvY2VkdXJlQ2FsbC92YWx1ZVwiKSxcbiAgICAgIHByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHZhbHVlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gZG9tLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSxcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGw7XG5cbiAgICAgIHByb2NlZHVyZUNhbGwgPSBuZXcgUHJvY2VkdXJlQ2FsbChzdHJpbmcsIHJlZmVyZW5jZSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbHVlc0Zyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgdmFsdWVOb2RlcyA9IHZhbHVlTm9kZXNRdWVyeShhc3NpZ21lbnROb2RlKSxcbiAgICAgICAgdmFsdWVzID0gdmFsdWVOb2Rlcy5tYXAoKHZhbHVlTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFsdWVzO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwidmFsdWVzIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0VmFsdWVzIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsInByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsTm9kZSIsIlJlZmVyZW5jZSIsImRvbSIsInZhbHVlc0Zyb21Bc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYWx1ZSIsInZhbHVlTm9kZXMiLCJtYXAiLCJ2YWx1ZU5vZGUiLCJ2YWx1ZSIsImZyb21WYWx1ZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsb0NBQzdCQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFekMsV0FBZUMsSUFBQUEsZ0JBQVcsa0NBQUM7YUFBTUMsY0FDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxNQUFNO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYTtnQkFDckMsSUFBSUMsZ0JBQWdCO2dCQUVwQixJQUFNQyxvQkFBb0JiLHVCQUF1Qlc7Z0JBRWpELElBQUlFLHNCQUFzQixNQUFNO29CQUM5QixJQUFNLEFBQUVDLFlBQWNDLFlBQUcsQ0FBakJELFdBQ0ZULFlBQVlTLFVBQVVKLGtCQUFrQixDQUFDQyxnQkFDekNMLFNBQVNVLHlCQUF5QkwsZ0JBQ2xDUCxTQUFTO29CQUVmUSxnQkFBZ0IsSUFBSVQsY0FBY0MsUUFBUUMsV0FBV0M7Z0JBQ3ZEO2dCQUVBLE9BQU9NO1lBQ1Q7Ozs7S0FqQkEsaUNBQU9LLFFBQU87QUFvQmhCLFNBQVNELHlCQUF5QkwsYUFBYTtJQUM3QyxJQUFNLEFBQUVPLFFBQVVILFlBQUcsQ0FBYkcsT0FDRkMsYUFBYXJCLGdCQUFnQmEsZ0JBQzdCTCxTQUFTYSxXQUFXQyxHQUFHLENBQUMsU0FBQ0M7UUFDdkIsSUFBTUMsUUFBUUosTUFBTUssYUFBYSxDQUFDRjtRQUVsQyxPQUFPQztJQUNUO0lBRU4sT0FBT2hCO0FBQ1QifQ==
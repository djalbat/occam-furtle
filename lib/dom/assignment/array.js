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
var _ArrayAssigment;
var arrayAssignmentNodeQuery = (0, _query.nodeQuery)("/step/arrayAssignment");
var _default = (0, _dom.domAssigned)((_ArrayAssigment = /*#__PURE__*/ function() {
    function ArrayAssigment(string, parameters) {
        _class_call_check(this, ArrayAssigment);
        this.string = string;
        this.parameters = parameters;
    }
    _create_class(ArrayAssigment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.parameters;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var arrayAssignment = null;
                var arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);
                if (arrayAssignmentNode !== null) {
                    var Parameters = _dom.default.Parameters, node = arrayAssignmentNode, string = context.nodeAsString(node), parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context);
                    arrayAssignment = new ArrayAssigment(string, parameters);
                }
                return arrayAssignment;
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBhcnJheUFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9hcnJheUFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFycmF5QXNzaWdtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcnJheUFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGFycmF5QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnROb2RlID0gYXJyYXlBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChhcnJheUFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ21lbnQoc3RyaW5nLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlBc3NpZ25tZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJhcnJheUFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFycmF5QXNzaWdtZW50Iiwic3RyaW5nIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlcyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsImFycmF5QXNzaWdubWVudCIsImFycmF5QXNzaWdubWVudE5vZGUiLCJQYXJhbWV0ZXJzIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsMkJBQTJCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTNDLFdBQWVDLElBQUFBLGdCQUFXLG1DQUFDO2FBQU1DLGVBQ25CQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRENGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsa0JBQWtCO2dCQUV0QixJQUFNQyxzQkFBc0JaLHlCQUF5QlM7Z0JBRXJELElBQUlHLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNLEFBQUVDLGFBQWVDLFlBQUcsQ0FBbEJELFlBQ0ZFLE9BQU9ILHFCQUNQUixTQUFTTSxRQUFRTSxZQUFZLENBQUNELE9BQzlCVixhQUFhUSxXQUFXSSx1QkFBdUIsQ0FBQ0wscUJBQXFCRjtvQkFFM0VDLGtCQUFrQixJQUFJUixlQUFlQyxRQUFRQztnQkFDL0M7Z0JBRUEsT0FBT007WUFDVDs7OztLQWpCQSxrQ0FBT08sUUFBTyJ9
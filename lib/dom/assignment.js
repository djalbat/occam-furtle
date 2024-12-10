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
var _Assignment;
var _default = (0, _dom.domAssigned)((_Assignment = /*#__PURE__*/ function() {
    function Assignment(value, nodeQuery, nodesQuery, procedureCall) {
        _class_call_check(this, Assignment);
        this.value = value;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.procedureCall = procedureCall;
    }
    _create_class(Assignment, [
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string;
                if (false) {
                ///
                } else if (this.value !== null) {
                    var valueString = this.value.getString();
                    string = valueString; ///
                } else if (this.nodeQuery !== null) {
                    var nodeQueryString = this.nodeQuery.getString();
                    string = nodeQueryString; ///
                } else if (this.nodesQuery !== null) {
                    var nodesQueryString = this.nodesQuery.getString();
                    string = nodesQueryString; ///
                } else if (this.procedureCall !== null) {
                    var procedureCallString = this.procedureCall.getString();
                    string = procedureCallString; ///
                }
                return string;
            }
        }
    ], [
        {
            key: "fromValue",
            value: function fromValue(value) {
                var nodeQuery = null, nodesQuery = null, procedureCall = null, assigment = new Assignment(value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var Value = _dom.default.Value, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, ProcedureCall = _dom.default.ProcedureCall, value = Value.fromAssignmentNode(assigmentNode, context), nodeQuery = NodeQuery.fromAssignmentNode(assigmentNode, context), nodesQuery = NodesQuery.fromAssignmentNode(assigmentNode, context), procedureCall = ProcedureCall.fromAssignmentNode(assigmentNode, context), assigment = new Assignment(value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        }
    ]);
    return Assignment;
}(), _define_property(_Assignment, "name", "Assignment"), _Assignment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3IodmFsdWUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5vZGVRdWVyeSA9IG5vZGVRdWVyeTtcbiAgICB0aGlzLm5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5O1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHRoaXMudmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IHZhbHVlU3RyaW5nOyAvLy9cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMubm9kZVF1ZXJ5LmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBub2RlUXVlcnlTdHJpbmc7IC8vL1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm5vZGVzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzUXVlcnlTdHJpbmcgPSB0aGlzLm5vZGVzUXVlcnkuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IG5vZGVzUXVlcnlTdHJpbmc7ICAvLy9cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBwcm9jZWR1cmVDYWxsU3RyaW5nOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhc3NpZ21lbnQgPSBuZXcgQXNzaWdubWVudCh2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBhc3NpZ21lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhbHVlLCBOb2RlUXVlcnksIE5vZGVzUXVlcnksIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlUXVlcnkgPSBOb2RlUXVlcnkuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBOb2Rlc1F1ZXJ5LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbmV3IEFzc2lnbm1lbnQodmFsdWUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gYXNzaWdtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkFzc2lnbm1lbnQiLCJ2YWx1ZSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0VmFsdWUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0U3RyaW5nIiwic3RyaW5nIiwidmFsdWVTdHJpbmciLCJub2RlUXVlcnlTdHJpbmciLCJub2Rlc1F1ZXJ5U3RyaW5nIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsImZyb21WYWx1ZSIsImFzc2lnbWVudCIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJjb250ZXh0IiwiVmFsdWUiLCJkb20iLCJOb2RlUXVlcnkiLCJOb2Rlc1F1ZXJ5IiwiUHJvY2VkdXJlQ2FsbCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLCtCQUFDO2FBQU1DLFdBQ25CQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhO2dDQUR4Qko7UUFFN0IsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osU0FBUztZQUN2Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDUixLQUFLLEtBQUssTUFBTTtvQkFDOUIsSUFBTVMsY0FBYyxJQUFJLENBQUNULEtBQUssQ0FBQ08sU0FBUztvQkFFeENDLFNBQVNDLGFBQWEsR0FBRztnQkFDM0IsT0FDSyxJQUFJLElBQUksQ0FBQ1IsU0FBUyxLQUFLLE1BQU07b0JBQ2hDLElBQU1TLGtCQUFrQixJQUFJLENBQUNULFNBQVMsQ0FBQ00sU0FBUztvQkFFaERDLFNBQVNFLGlCQUFpQixHQUFHO2dCQUMvQixPQUNLLElBQUksSUFBSSxDQUFDUixVQUFVLEtBQUssTUFBTTtvQkFDakMsSUFBTVMsbUJBQW1CLElBQUksQ0FBQ1QsVUFBVSxDQUFDSyxTQUFTO29CQUVsREMsU0FBU0csa0JBQW1CLEdBQUc7Z0JBQ2pDLE9BQ0ssSUFBSSxJQUFJLENBQUNSLGFBQWEsS0FBSyxNQUFNO29CQUNwQyxJQUFNUyxzQkFBc0IsSUFBSSxDQUFDVCxhQUFhLENBQUNJLFNBQVM7b0JBRXhEQyxTQUFTSSxxQkFBcUIsR0FBRztnQkFDbkM7Z0JBRUEsT0FBT0o7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVYixLQUFLO2dCQUNwQixJQUFNQyxZQUFZLE1BQ1pDLGFBQWEsTUFDYkMsZ0JBQWdCLE1BQ2hCVyxZQUFZLElBQUlmLFdBQVdDLE9BQU9DLFdBQVdDLFlBQVlDO2dCQUUvRCxPQUFPVztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzlDLElBQVFDLFFBQWdEQyxZQUFHLENBQW5ERCxPQUFPRSxZQUF5Q0QsWUFBRyxDQUE1Q0MsV0FBV0MsYUFBOEJGLFlBQUcsQ0FBakNFLFlBQVlDLGdCQUFrQkgsWUFBRyxDQUFyQkcsZUFDaEN0QixRQUFRa0IsTUFBTUgsa0JBQWtCLENBQUNDLGVBQWVDLFVBQ2hEaEIsWUFBWW1CLFVBQVVMLGtCQUFrQixDQUFDQyxlQUFlQyxVQUN4RGYsYUFBYW1CLFdBQVdOLGtCQUFrQixDQUFDQyxlQUFlQyxVQUMxRGQsZ0JBQWdCbUIsY0FBY1Asa0JBQWtCLENBQUNDLGVBQWVDLFVBQ2hFSCxZQUFZLElBQUlmLFdBQVdDLE9BQU9DLFdBQVdDLFlBQVlDO2dCQUUvRCxPQUFPVztZQUNUOzs7O0tBcEJBLDhCQUFPUyxRQUFPIn0=
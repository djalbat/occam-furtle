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
var _VariableAssignment;
var variableAssignmentNodeQuery = (0, _query.nodeQuery)("/step/variableAssignment");
var _default = (0, _dom.domAssigned)((_VariableAssignment = /*#__PURE__*/ function() {
    function VariableAssignment(string, variable) {
        _class_call_check(this, VariableAssignment);
        this.string = string;
        this.variable = variable;
    }
    _create_class(VariableAssignment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(variableAssignmentString, "' variable assignment..."));
                this.variable.assign(context);
                context.debug("...evaluated the '".concat(variableAssignmentString, "' variable assignment."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var variableAssignment = null;
                var variableAssignmentNode = variableAssignmentNodeQuery(stepNode);
                if (variableAssignmentNode !== null) {
                    var Variable = _dom.default.Variable, node = variableAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromVariableAssignmentNode(variableAssignmentNode, context);
                    variableAssignment = new VariableAssignment(string, variable);
                }
                return variableAssignment;
            }
        }
    ]);
    return VariableAssignment;
}(), _define_property(_VariableAssignment, "name", "VariableAssignment"), _VariableAssignment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC92YXJpYWJsZUFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVBc3NpZ25tZW50U3RyaW5nfScgdmFyaWFibGUgYXNzaWdubWVudC4uLmApO1xuXG4gICAgdGhpcy52YXJpYWJsZS5hc3NpZ24oY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGVBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInZhcmlhYmxlQXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVBc3NpZ25tZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwiYXNzaWduIiwiZGVidWciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJWYXJpYWJsZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLDhCQUE4QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU5QyxXQUFlQyxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsUUFBUTtnQ0FER0Y7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOzs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFNQywyQkFBMkIsSUFBSSxDQUFDTixNQUFNLEVBQUUsR0FBRztnQkFFakRLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUEyQyxPQUF6QkQsMEJBQXlCO2dCQUUxRCxJQUFJLENBQUNMLFFBQVEsQ0FBQ08sTUFBTSxDQUFDSDtnQkFFckJBLFFBQVFJLEtBQUssQ0FBQyxBQUFDLHFCQUE2QyxPQUF6QkgsMEJBQXlCO1lBQzlEOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRU4sT0FBTztnQkFDbkMsSUFBSU8scUJBQXFCO2dCQUV6QixJQUFNQyx5QkFBeUJqQiw0QkFBNEJlO2dCQUUzRCxJQUFJRSwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTSxBQUFFQyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSxPQUFPSCx3QkFDUGIsU0FBU0ssUUFBUVksWUFBWSxDQUFDRCxPQUM5QmYsV0FBV2EsU0FBU0ksMEJBQTBCLENBQUNMLHdCQUF3QlI7b0JBRTdFTyxxQkFBcUIsSUFBSWIsbUJBQW1CQyxRQUFRQztnQkFDdEQ7Z0JBRUEsT0FBT1c7WUFDVDs7OztLQWpCQSxzQ0FBT08sUUFBTyJ9
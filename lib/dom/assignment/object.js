"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    typesFromTypeTerminalNodes: function() {
        return typesFromTypeTerminalNodes;
    },
    variablesFromVariableNodesAndTypes: function() {
        return variablesFromVariableNodesAndTypes;
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
var _ObjectAssigment;
var variableNodesQuery = (0, _query.nodesQuery)("/objectAssignment/variable"), typeTerminalNodesQuery = (0, _query.nodesQuery)("/objectAssignment/@type"), objectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
var _default = (0, _dom.domAssigned)((_ObjectAssigment = /*#__PURE__*/ function() {
    function ObjectAssigment(string, variables) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
        this.variables = variables;
    }
    _create_class(ObjectAssigment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "call",
            value: function call(context) {}
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var objectAssignment = null;
                var objectAssignmentNode = objectAssignmentNodeQuery(stepNode);
                if (objectAssignmentNode !== null) {
                    var typeTerminalNodes = typeTerminalNodesQuery(objectAssignmentNode), variableNodes = variableNodesQuery(objectAssignmentNode), types = typesFromTypeTerminalNodes(typeTerminalNodes, context), node = objectAssignmentNode, string = context.nodeAsString(node), variables = variablesFromVariableNodesAndTypes(variableNodes, types, context);
                    objectAssignment = new ObjectAssigment(string, variables);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));
function typesFromTypeTerminalNodes(typeTerminalNodes, context) {
    var types = typeTerminalNodes.map(function(typeTerminalNode) {
        var typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
        return type;
    });
    return types;
}
function variablesFromVariableNodesAndTypes(variableNodes, types, context) {
    var Variable = _dom.default.Variable, variables = variableNodes.map(function(variableNode, index) {
        var type = types[index], variable = Variable.fromVariableNodeAndType(variableNode, type, context);
        return variable;
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgdHlwZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC9AdHlwZVwiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBjYWxsKGNvbnRleHQpIHtcblxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlVGVybWluYWxOb2RlcyA9IHR5cGVUZXJtaW5hbE5vZGVzUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVR5cGVUZXJtaW5hbE5vZGVzKHR5cGVUZXJtaW5hbE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzKHZhcmlhYmxlTm9kZXMsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xuICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVzRnJvbVR5cGVUZXJtaW5hbE5vZGVzKHR5cGVUZXJtaW5hbE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVzID0gdHlwZVRlcm1pbmFsTm9kZXMubWFwKCh0eXBlVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0eXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlc0Zyb21WYXJpYWJsZU5vZGVzQW5kVHlwZXModmFyaWFibGVOb2RlcywgdHlwZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZU5vZGVzLm1hcCgodmFyaWFibGVOb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmFyaWFibGVzO1xufVxuIl0sIm5hbWVzIjpbInR5cGVzRnJvbVR5cGVUZXJtaW5hbE5vZGVzIiwidmFyaWFibGVzRnJvbVZhcmlhYmxlTm9kZXNBbmRUeXBlcyIsInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJ0eXBlVGVybWluYWxOb2Rlc1F1ZXJ5Iiwib2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiT2JqZWN0QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGVzIiwiY2FsbCIsImNvbnRleHQiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIm9iamVjdEFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsInR5cGVUZXJtaW5hbE5vZGVzIiwidmFyaWFibGVOb2RlcyIsInR5cGVzIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiLCJtYXAiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZSIsIlZhcmlhYmxlIiwiZG9tIiwidmFyaWFibGVOb2RlIiwiaW5kZXgiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFXQSxPQXNDRztlQXRDSDs7SUF3Q2dCQSwwQkFBMEI7ZUFBMUJBOztJQVdBQyxrQ0FBa0M7ZUFBbENBOzs7MkRBNURBO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQywrQkFDaENDLHlCQUF5QkQsSUFBQUEsaUJBQVUsRUFBQyw0QkFDcENFLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsU0FBUztnQ0FERUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS0MsT0FBTyxHQUVaOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUYsT0FBTztnQkFDbkMsSUFBSUcsbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUJiLDBCQUEwQlc7Z0JBRXZELElBQUlFLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNQyxvQkFBb0JmLHVCQUF1QmMsdUJBQzNDRSxnQkFBZ0JsQixtQkFBbUJnQix1QkFDbkNHLFFBQVFyQiwyQkFBMkJtQixtQkFBbUJMLFVBQ3REUSxPQUFPSixzQkFDUFQsU0FBU0ssUUFBUVMsWUFBWSxDQUFDRCxPQUM5QlosWUFBWVQsbUNBQW1DbUIsZUFBZUMsT0FBT1A7b0JBRTNFRyxtQkFBbUIsSUFBSVQsZ0JBQWdCQyxRQUFRQztnQkFDakQ7Z0JBRUEsT0FBT087WUFDVDs7OztLQW5CQSxtQ0FBT08sUUFBTztBQXNCVCxTQUFTeEIsMkJBQTJCbUIsaUJBQWlCLEVBQUVMLE9BQU87SUFDbkUsSUFBTU8sUUFBUUYsa0JBQWtCTSxHQUFHLENBQUMsU0FBQ0M7UUFDN0IsSUFBTUMsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRDLE9BQU9GLHlCQUF5QixHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFTixPQUFPUjtBQUNUO0FBRU8sU0FBU3BCLG1DQUFtQ21CLGFBQWEsRUFBRUMsS0FBSyxFQUFFUCxPQUFPO0lBQzlFLElBQU0sQUFBRWdCLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZwQixZQUFZVSxjQUFjSyxHQUFHLENBQUMsU0FBQ08sY0FBY0M7UUFDM0MsSUFBTUosT0FBT1IsS0FBSyxDQUFDWSxNQUFNLEVBQ25CQyxXQUFXSixTQUFTSyx1QkFBdUIsQ0FBQ0gsY0FBY0gsTUFBTWY7UUFFdEUsT0FBT29CO0lBQ1Q7SUFFTixPQUFPeEI7QUFDVCJ9
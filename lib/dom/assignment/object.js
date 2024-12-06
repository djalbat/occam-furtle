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
    function ObjectAssigment(variables) {
        _class_call_check(this, ObjectAssigment);
        this.variables = variables;
    }
    _create_class(ObjectAssigment, [
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var objectAssignment = null;
                var objectAssignmentNode = objectAssignmentNodeQuery(stepNode);
                if (objectAssignmentNode !== null) {
                    var typeTerminalNodes = typeTerminalNodesQuery(objectAssignmentNode), variableNodes = variableNodesQuery(objectAssignmentNode), types = typesFromTypeTerminalNodes(typeTerminalNodes), variables = variablesFromVariableNodesAndTypes(variableNodes, types);
                    objectAssignment = new ObjectAssigment(variables);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));
function typesFromTypeTerminalNodes(typeTerminalNodes) {
    var types = typeTerminalNodes.map(function(typeTerminalNode) {
        var typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
        return type;
    });
    return types;
}
function variablesFromVariableNodesAndTypes(variableNodes, types) {
    var Variable = _dom.default.Variable, variables = variableNodes.map(function(variableNode, index) {
        var type = types[index], variable = Variable.fromVariableNodeAndType(variableNode, type);
        return variable;
    });
    return variables;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgdHlwZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC9AdHlwZVwiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZXMgPSB0eXBlVGVybWluYWxOb2Rlc1F1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkob2JqZWN0QXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21UeXBlVGVybWluYWxOb2Rlcyh0eXBlVGVybWluYWxOb2RlcyksXG4gICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzKHZhcmlhYmxlTm9kZXMsIHR5cGVzKTtcblxuICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQodmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlc0Zyb21UeXBlVGVybWluYWxOb2Rlcyh0eXBlVGVybWluYWxOb2Rlcykge1xuICBjb25zdCB0eXBlcyA9IHR5cGVUZXJtaW5hbE5vZGVzLm1hcCgodHlwZVRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzKHZhcmlhYmxlTm9kZXMsIHR5cGVzKSB7XG4gIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVOb2Rlcy5tYXAoKHZhcmlhYmxlTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcblxuICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlcztcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlc0Zyb21UeXBlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlc0Zyb21WYXJpYWJsZU5vZGVzQW5kVHlwZXMiLCJ2YXJpYWJsZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwidHlwZVRlcm1pbmFsTm9kZXNRdWVyeSIsIm9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsImdldFN0cmluZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsInR5cGVUZXJtaW5hbE5vZGVzIiwidmFyaWFibGVOb2RlcyIsInR5cGVzIiwibmFtZSIsIm1hcCIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0eXBlIiwiVmFyaWFibGUiLCJkb20iLCJ2YXJpYWJsZU5vZGUiLCJpbmRleCIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVdBLE9BK0JHO2VBL0JIOztJQWlDZ0JBLDBCQUEwQjtlQUExQkE7O0lBV0FDLGtDQUFrQztlQUFsQ0E7OzsyREFyREE7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDLCtCQUNoQ0MseUJBQXlCRCxJQUFBQSxpQkFBVSxFQUFDLDRCQUNwQ0UsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVDLElBQUFBLGdCQUFXLG9DQUFDO2FBQU1DLGdCQUNuQkMsU0FBUztnQ0FEVUQ7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUJYLDBCQUEwQlE7Z0JBRXZELElBQUlHLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNQyxvQkFBb0JiLHVCQUF1QlksdUJBQzNDRSxnQkFBZ0JoQixtQkFBbUJjLHVCQUNuQ0csUUFBUW5CLDJCQUEyQmlCLG9CQUNuQ1IsWUFBWVIsbUNBQW1DaUIsZUFBZUM7b0JBRXBFSixtQkFBbUIsSUFBSVAsZ0JBQWdCQztnQkFDekM7Z0JBRUEsT0FBT007WUFDVDs7OztLQWpCQSxtQ0FBT0ssUUFBTztBQW9CVCxTQUFTcEIsMkJBQTJCaUIsaUJBQWlCO0lBQzFELElBQU1FLFFBQVFGLGtCQUFrQkksR0FBRyxDQUFDLFNBQUNDO1FBQzdCLElBQU1DLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEQyxPQUFPRix5QkFBeUIsR0FBRztRQUV6QyxPQUFPRTtJQUNUO0lBRU4sT0FBT047QUFDVDtBQUVPLFNBQVNsQixtQ0FBbUNpQixhQUFhLEVBQUVDLEtBQUs7SUFDckUsSUFBTSxBQUFFTyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGakIsWUFBWVMsY0FBY0csR0FBRyxDQUFDLFNBQUNPLGNBQWNDO1FBQzNDLElBQU1KLE9BQU9OLEtBQUssQ0FBQ1UsTUFBTSxFQUNuQkMsV0FBV0osU0FBU0ssdUJBQXVCLENBQUNILGNBQWNIO1FBRWhFLE9BQU9LO0lBQ1Q7SUFFTixPQUFPckI7QUFDVCJ9
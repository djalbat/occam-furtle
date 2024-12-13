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
            key: "resolve",
            value: function resolve(context) {
                var objectAssignmentString = this.string; ///
                context.trace("Resolving the '".concat(objectAssignmentString, "' object assignment..."));
                context.debug("...resolved the '".concat(objectAssignmentString, "' object assignment."));
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9vYmplY3RBc3NpZ25tZW50L3ZhcmlhYmxlXCIpLFxuICAgICAgdHlwZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvb2JqZWN0QXNzaWdubWVudC9AdHlwZVwiKSxcbiAgICAgIG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuXG5cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGVzID0gdHlwZVRlcm1pbmFsTm9kZXNRdWVyeShvYmplY3RBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGVzID0gdmFyaWFibGVOb2Rlc1F1ZXJ5KG9iamVjdEFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tVHlwZVRlcm1pbmFsTm9kZXModHlwZVRlcm1pbmFsTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYXJpYWJsZU5vZGVzQW5kVHlwZXModmFyaWFibGVOb2RlcywgdHlwZXMsIGNvbnRleHQpO1xuXG4gICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNGcm9tVHlwZVRlcm1pbmFsTm9kZXModHlwZVRlcm1pbmFsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZXMgPSB0eXBlVGVybWluYWxOb2Rlcy5tYXAoKHR5cGVUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVzRnJvbVZhcmlhYmxlTm9kZXNBbmRUeXBlcyh2YXJpYWJsZU5vZGVzLCB0eXBlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlTm9kZXMubWFwKCh2YXJpYWJsZU5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZXM7XG59XG4iXSwibmFtZXMiOlsidHlwZXNGcm9tVHlwZVRlcm1pbmFsTm9kZXMiLCJ2YXJpYWJsZXNGcm9tVmFyaWFibGVOb2Rlc0FuZFR5cGVzIiwidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVzUXVlcnkiLCJvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZXMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZXMiLCJyZXNvbHZlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlcyIsInZhcmlhYmxlTm9kZXMiLCJ0eXBlcyIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIiwibWFwIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInR5cGUiLCJWYXJpYWJsZSIsImRvbSIsInZhcmlhYmxlTm9kZSIsImluZGV4IiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBV0EsT0E2Q0c7ZUE3Q0g7O0lBK0NnQkEsMEJBQTBCO2VBQTFCQTs7SUFXQUMsa0NBQWtDO2VBQWxDQTs7OzJEQW5FQTtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUMsK0JBQ2hDQyx5QkFBeUJELElBQUFBLGlCQUFVLEVBQUMsNEJBQ3BDRSw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUMsSUFBQUEsZ0JBQVcsb0NBQUM7YUFBTUMsZ0JBQ25CQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREVGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMseUJBQXlCLElBQUksQ0FBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBRS9DSyxRQUFRRSxLQUFLLENBQUMsQUFBQyxrQkFBd0MsT0FBdkJELHdCQUF1QjtnQkFLdkRELFFBQVFHLEtBQUssQ0FBQyxBQUFDLG9CQUEwQyxPQUF2QkYsd0JBQXVCO1lBQzNEOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUwsT0FBTztnQkFDbkMsSUFBSU0sbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUJoQiwwQkFBMEJjO2dCQUV2RCxJQUFJRSx5QkFBeUIsTUFBTTtvQkFDakMsSUFBTUMsb0JBQW9CbEIsdUJBQXVCaUIsdUJBQzNDRSxnQkFBZ0JyQixtQkFBbUJtQix1QkFDbkNHLFFBQVF4QiwyQkFBMkJzQixtQkFBbUJSLFVBQ3REVyxPQUFPSixzQkFDUFosU0FBU0ssUUFBUVksWUFBWSxDQUFDRCxPQUM5QmYsWUFBWVQsbUNBQW1Dc0IsZUFBZUMsT0FBT1Y7b0JBRTNFTSxtQkFBbUIsSUFBSVosZ0JBQWdCQyxRQUFRQztnQkFDakQ7Z0JBRUEsT0FBT1U7WUFDVDs7OztLQW5CQSxtQ0FBT08sUUFBTztBQXNCVCxTQUFTM0IsMkJBQTJCc0IsaUJBQWlCLEVBQUVSLE9BQU87SUFDbkUsSUFBTVUsUUFBUUYsa0JBQWtCTSxHQUFHLENBQUMsU0FBQ0M7UUFDN0IsSUFBTUMsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRDLE9BQU9GLHlCQUF5QixHQUFHO1FBRXpDLE9BQU9FO0lBQ1Q7SUFFTixPQUFPUjtBQUNUO0FBRU8sU0FBU3ZCLG1DQUFtQ3NCLGFBQWEsRUFBRUMsS0FBSyxFQUFFVixPQUFPO0lBQzlFLElBQU0sQUFBRW1CLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0Z2QixZQUFZYSxjQUFjSyxHQUFHLENBQUMsU0FBQ08sY0FBY0M7UUFDM0MsSUFBTUosT0FBT1IsS0FBSyxDQUFDWSxNQUFNLEVBQ25CQyxXQUFXSixTQUFTSyx1QkFBdUIsQ0FBQ0gsY0FBY0gsTUFBTWxCO1FBRXRFLE9BQU91QjtJQUNUO0lBRU4sT0FBTzNCO0FBQ1QifQ==
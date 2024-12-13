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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _node = /*#__PURE__*/ _interop_require_default(require("../../parameters/node"));
var _query = require("../../utilities/query");
var _types = require("../../types");
var _parameterNames = require("../../parameterNames");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var objectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
var _default = (0, _dom.domAssigned)((_ObjectAssigment = /*#__PURE__*/ function() {
    function ObjectAssigment(string, variable, parameters) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
        this.variable = variable;
        this.parameters = parameters;
    }
    _create_class(ObjectAssigment, [
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
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var objectAssignmentString = this.string; ///
                context.trace("Resolving the '".concat(objectAssignmentString, "' object assignment..."));
                var value = this.variable.resolve(context), valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.getString(), message = "The '".concat(valueString, "' value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.parameters.forEachParameter(function(parameter) {
                    if (parameter !== null) {
                        _node.default.matchParameter(parameter, context);
                        var node = value.getNode(), name = parameter.getName();
                        switch(name){
                            case _parameterNames.CONTENT_PARAMETER_NAME:
                                {
                                    var type = parameter.getType();
                                    if (type !== _types.STRING_TYPE) {
                                        var parameterString = parameter.getString(), message = "The '".concat(parameterString, "' parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                                        throw exception;
                                    }
                                    var nodeTerminalNode = node.isTerminalNode();
                                    if (!nodeTerminalNode) {
                                        var valueString = value1.getString(), message1 = "The '".concat(valueString, "' value's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                                        throw exception1;
                                    }
                                    var Value = _dom.default.Value, Variable = _dom.default.Variable, terminalNode = node, content = terminalNode.getContent(), stringLiteral = content, value1 = Value.fromStringLiteral(stringLiteral, context), variable = Variable.fromValueAndParameter(value1, parameter);
                                    context.addVariable(variable);
                                    break;
                                }
                            default:
                                {
                                    debugger;
                                }
                        }
                    }
                });
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
                    var Variable = _dom.default.Variable, Parameters = _dom.default.Parameters, node = objectAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), parameters = Parameters.fromObjectAssignmentNode(objectAssignmentNode, context);
                    objectAssignment = new ObjectAssigment(string, variable, parameters);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVBhcmFtZXRlcnMgZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgU1RSSU5HX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLnJlc29sdmUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGVQYXJhbWV0ZXJzLm1hdGNoUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IFNUUklOR19UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgICAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IFZhbHVlLCBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICAgICAgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhbHVlQW5kUGFyYW1ldGVyKHZhbHVlLCBwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAob2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsib2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiT2JqZWN0QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJwYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRQYXJhbWV0ZXJzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJub2RlUGFyYW1ldGVycyIsIm1hdGNoUGFyYW1ldGVyIiwibm9kZSIsImdldE5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJwYXJhbWV0ZXJTdHJpbmciLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJWYWx1ZSIsImRvbSIsIlZhcmlhYmxlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzdHJpbmdMaXRlcmFsIiwiZnJvbVN0cmluZ0xpdGVyYWwiLCJmcm9tVmFsdWVBbmRQYXJhbWV0ZXIiLCJhZGRWYXJpYWJsZSIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJQYXJhbWV0ZXJzIiwibm9kZUFzU3RyaW5nIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7Z0VBQ007MkRBQ0s7cUJBRUQ7cUJBRWE7OEJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQU1BLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQURUSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFL0NPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkQsd0JBQXVCO2dCQUV2RCxJQUFNRSxRQUFRLElBQUksQ0FBQ1QsUUFBUSxDQUFDSyxPQUFPLENBQUNDLFVBQzlCSSxZQUFZRCxNQUFNRSxPQUFPO2dCQUUvQixJQUFJRCxjQUFjRSxnQkFBUyxFQUFFO29CQUMzQixJQUFNQyxjQUFjSixNQUFNUCxTQUFTLElBQzdCWSxVQUFVLEFBQUMsUUFBZ0NKLE9BQXpCRyxhQUFZLGVBQTJDRCxPQUE5QkYsV0FBVSxzQkFBOEIsT0FBVkUsZ0JBQVMsRUFBQyxPQUNuRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSSxDQUFDZCxVQUFVLENBQUNpQixnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDaEMsSUFBSUEsY0FBYyxNQUFNO3dCQUN0QkMsYUFBYyxDQUFDQyxjQUFjLENBQUNGLFdBQVdiO3dCQUV6QyxJQUFNZ0IsT0FBT2IsTUFBTWMsT0FBTyxJQUNwQkMsT0FBT0wsVUFBVU0sT0FBTzt3QkFFOUIsT0FBUUQ7NEJBQ04sS0FBS0Usc0NBQXNCO2dDQUFFO29DQUMzQixJQUFNQyxPQUFPUixVQUFVUixPQUFPO29DQUU5QixJQUFJZ0IsU0FBU0Msa0JBQVcsRUFBRTt3Q0FDeEIsSUFBTUMsa0JBQWtCVixVQUFVakIsU0FBUyxJQUNyQ1ksVUFBVSxBQUFDLFFBQXVEYyxPQUFoREMsaUJBQWdCLGtDQUE0QyxPQUFaRCxrQkFBVyxFQUFDLE9BQzlFYixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dDQUV4QyxNQUFNQztvQ0FDUjtvQ0FFQSxJQUFNZSxtQkFBbUJSLEtBQUtTLGNBQWM7b0NBRTVDLElBQUksQ0FBQ0Qsa0JBQWtCO3dDQUNyQixJQUFNakIsY0FBY0osT0FBTVAsU0FBUyxJQUM3QlksV0FBVSxBQUFDLFFBQW1CLE9BQVpELGFBQVkscUNBQzlCRSxhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dDQUV4QyxNQUFNQztvQ0FDUjtvQ0FFQSxJQUFRaUIsUUFBb0JDLFlBQUcsQ0FBdkJELE9BQU9FLFdBQWFELFlBQUcsQ0FBaEJDLFVBQ1RDLGVBQWViLE1BQ2ZjLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLGdCQUFnQkYsU0FDaEIzQixTQUFRdUIsTUFBTU8saUJBQWlCLENBQUNELGVBQWVoQyxVQUMvQ04sV0FBV2tDLFNBQVNNLHFCQUFxQixDQUFDL0IsUUFBT1U7b0NBRXZEYixRQUFRbUMsV0FBVyxDQUFDekM7b0NBRXBCO2dDQUNGOzRCQUVBO2dDQUFTO29DQUNQLFFBQVE7Z0NBQ1Y7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUFNLFFBQVFvQyxLQUFLLENBQUMsQUFBQyxvQkFBMEMsT0FBdkJuQyx3QkFBdUI7WUFDM0Q7Ozs7WUFJT29DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRXRDLE9BQU87Z0JBQ25DLElBQUl1QyxtQkFBbUI7Z0JBRXZCLElBQU1DLHVCQUF1Qm5ELDBCQUEwQmlEO2dCQUV2RCxJQUFJRSx5QkFBeUIsTUFBTTtvQkFDakMsSUFBUVosV0FBeUJELFlBQUcsQ0FBNUJDLFVBQVVhLGFBQWVkLFlBQUcsQ0FBbEJjLFlBQ1p6QixPQUFPd0Isc0JBQ1AvQyxTQUFTTyxRQUFRMEMsWUFBWSxDQUFDMUIsT0FDOUJ0QixXQUFXa0MsU0FBU2Usd0JBQXdCLENBQUNILHNCQUFzQnhDLFVBQ25FTCxhQUFhOEMsV0FBV0Usd0JBQXdCLENBQUNILHNCQUFzQnhDO29CQUU3RXVDLG1CQUFtQixJQUFJL0MsZ0JBQWdCQyxRQUFRQyxVQUFVQztnQkFDM0Q7Z0JBRUEsT0FBTzRDO1lBQ1Q7Ozs7S0FsQkEsbUNBQU9yQixRQUFPIn0=
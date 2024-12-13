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
var _ObjectAssigment;
var objectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
var _default = (0, _dom.domAssigned)((_ObjectAssigment = /*#__PURE__*/ function() {
    function ObjectAssigment(string, parameters) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
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
                    var Parameters = _dom.default.Parameters, node = objectAssignmentNode, string = context.nodeAsString(node), parameters = Parameters.fromObjectAssignmentNode(objectAssignmentNode, context);
                    objectAssignment = new ObjectAssigment(string, parameters);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgcGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50Li4uYCk7XG5cblxuXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFBhcmFtZXRlcnMsIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCBwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsib2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiT2JqZWN0QXNzaWdtZW50Iiwic3RyaW5nIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFBhcmFtZXRlcnMiLCJyZXNvbHZlIiwiY29udGV4dCIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJQYXJhbWV0ZXJzIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEQ0Y7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDTixNQUFNLEVBQUUsR0FBRztnQkFFL0NLLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkQsd0JBQXVCO2dCQUt2REQsUUFBUUcsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCRix3QkFBdUI7WUFDM0Q7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFTCxPQUFPO2dCQUNuQyxJQUFJTSxtQkFBbUI7Z0JBRXZCLElBQU1DLHVCQUF1QmhCLDBCQUEwQmM7Z0JBRXZELElBQUlFLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNLEFBQUVDLGFBQWdCQyxZQUFHLENBQW5CRCxZQUNGRSxPQUFPSCxzQkFDUFosU0FBU0ssUUFBUVcsWUFBWSxDQUFDRCxPQUM5QmQsYUFBYVksV0FBV0ksd0JBQXdCLENBQUNMLHNCQUFzQlA7b0JBRTdFTSxtQkFBbUIsSUFBSVosZ0JBQWdCQyxRQUFRQztnQkFDakQ7Z0JBRUEsT0FBT1U7WUFDVDs7OztLQWpCQSxtQ0FBT08sUUFBTyJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodeProperty;
    }
});
var _string = require("./utilities/string");
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
var NodeProperty = /*#__PURE__*/ function() {
    function NodeProperty(string, type, name) {
        _class_call_check(this, NodeProperty);
        this.string = string;
        this.type = type;
        this.name = name;
    }
    _create_class(NodeProperty, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var nodePropertyString = this.string, namedParameterString = namedParameter.getString();
                context.trace("Matching the '".concat(nodePropertyString, "' node property against the '").concat(namedParameterString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(nodePropertyString, "' node property against the '").concat(namedParameterString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ], [
        {
            key: "fromNameAndType",
            value: function fromNameAndType(name, type) {
                var nodePropertyString = (0, _string.nodePropertyStringFromNameAndType)(name, type), string = nodePropertyString, nodeProperty = new NodeProperty(string, type, name);
                return nodeProperty;
            }
        }
    ]);
    return NodeProperty;
}();
_define_property(NodeProperty, "name", "Parameter");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVByb3BlcnR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzO1xuXG4gICAgY29uc3Qgbm9kZVByb3BlcnR5U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7bm9kZVByb3BlcnR5U3RyaW5nfScgbm9kZSBwcm9wZXJ0eSBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke25vZGVQcm9wZXJ0eVN0cmluZ30nIG5vZGUgcHJvcGVydHkgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpIHtcbiAgICBjb25zdCBub2RlUHJvcGVydHlTdHJpbmcgPSBub2RlUHJvcGVydHlTdHJpbmdGcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSksXG4gICAgICAgICAgc3RyaW5nID0gbm9kZVByb3BlcnR5U3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZVByb3BlcnR5ID0gbmV3IE5vZGVQcm9wZXJ0eShzdHJpbmcsIHR5cGUsIG5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVQcm9wZXJ0eTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJOb2RlUHJvcGVydHkiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwibWF0Y2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiY29udGV4dCIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5vZGVQcm9wZXJ0eVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21OYW1lQW5kVHlwZSIsIm5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZSIsIm5vZGVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7c0JBRjZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEWEg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFKS0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjLEVBQUVDLE9BQU87Z0JBQ3pDLElBQUlDO2dCQUVKLElBQU1DLHFCQUFxQixJQUFJLENBQUNWLE1BQU0sRUFDaENXLHVCQUF1QkosZUFBZUosU0FBUztnQkFFckRLLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFrRUQsT0FBbERELG9CQUFtQixpQ0FBb0QsT0FBckJDLHNCQUFxQjtnQkFFdEcsSUFBTVQsT0FBT0ssZUFBZUYsT0FBTyxJQUM3QkosT0FBT00sZUFBZUgsT0FBTztnQkFFbkNLLHdCQUF5QixBQUFDLElBQUksQ0FBQ1AsSUFBSSxLQUFLQSxRQUFVLElBQUksQ0FBQ0QsSUFBSSxLQUFLQTtnQkFFaEUsSUFBSVEsdUJBQXVCO29CQUN6QkQsUUFBUUssS0FBSyxDQUFDLEFBQUMsbUJBQW9FRixPQUFsREQsb0JBQW1CLGlDQUFvRCxPQUFyQkMsc0JBQXFCO2dCQUMxRztnQkFFQSxPQUFPRjtZQUNUOzs7O1lBSU9LLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQlosSUFBSSxFQUFFRCxJQUFJO2dCQUMvQixJQUFNUyxxQkFBcUJLLElBQUFBLHlDQUFpQyxFQUFDYixNQUFNRCxPQUM3REQsU0FBU1Usb0JBQ1RNLGVBQWUsSUE1Q0pqQixhQTRDcUJDLFFBQVFDLE1BQU1DO2dCQUVwRCxPQUFPYztZQUNUOzs7V0EvQ21CakI7O0FBdUNuQixpQkF2Q21CQSxjQXVDWkcsUUFBTyJ9
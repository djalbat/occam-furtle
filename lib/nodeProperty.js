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
            key: "compareNamedParameter",
            value: function compareNamedParameter(namedParameter, context) {
                var namedParameterCompares;
                var nodePropertyString = this.string, namedParameterString = namedParameter.getString();
                context.trace("Comparing the '".concat(nodePropertyString, "' node property with the '").concat(namedParameterString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterCompares = this.name === name && this.type === type;
                if (namedParameterCompares) {
                    context.debug("...compared the '".concat(nodePropertyString, "' node property with the '").concat(namedParameterString, "' named parameter."));
                }
                return namedParameterCompares;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVByb3BlcnR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGxldCBuYW1lZFBhcmFtZXRlckNvbXBhcmVzO1xuXG4gICAgY29uc3Qgbm9kZVByb3BlcnR5U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke25vZGVQcm9wZXJ0eVN0cmluZ30nIG5vZGUgcHJvcGVydHkgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMgPSAoKHRoaXMubmFtZSA9PT0gbmFtZSkgJiYgKHRoaXMudHlwZSA9PT0gdHlwZSkpO1xuXG4gICAgaWYgKG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtub2RlUHJvcGVydHlTdHJpbmd9JyBub2RlIHByb3BlcnR5IHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlckNvbXBhcmVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVQcm9wZXJ0eVN0cmluZyA9IG5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlUHJvcGVydHlTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlUHJvcGVydHkgPSBuZXcgTm9kZVByb3BlcnR5KHN0cmluZywgdHlwZSwgbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZVByb3BlcnR5O1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk5vZGVQcm9wZXJ0eSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJjb21wYXJlTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImNvbnRleHQiLCJuYW1lZFBhcmFtZXRlckNvbXBhcmVzIiwibm9kZVByb3BlcnR5U3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbU5hbWVBbmRUeXBlIiwibm9kZVByb3BlcnR5U3RyaW5nRnJvbU5hbWVBbmRUeXBlIiwibm9kZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztzQkFGNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURYSDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUpLSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGNBQWMsRUFBRUMsT0FBTztnQkFDM0MsSUFBSUM7Z0JBRUosSUFBTUMscUJBQXFCLElBQUksQ0FBQ1YsTUFBTSxFQUNoQ1csdUJBQXVCSixlQUFlSixTQUFTO2dCQUVyREssUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQWdFRCxPQUEvQ0Qsb0JBQW1CLDhCQUFpRCxPQUFyQkMsc0JBQXFCO2dCQUVwRyxJQUFNVCxPQUFPSyxlQUFlRixPQUFPLElBQzdCSixPQUFPTSxlQUFlSCxPQUFPO2dCQUVuQ0sseUJBQTBCLEFBQUMsSUFBSSxDQUFDUCxJQUFJLEtBQUtBLFFBQVUsSUFBSSxDQUFDRCxJQUFJLEtBQUtBO2dCQUVqRSxJQUFJUSx3QkFBd0I7b0JBQzFCRCxRQUFRSyxLQUFLLENBQUMsQUFBQyxvQkFBa0VGLE9BQS9DRCxvQkFBbUIsOEJBQWlELE9BQXJCQyxzQkFBcUI7Z0JBQ3hHO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCWixJQUFJLEVBQUVELElBQUk7Z0JBQy9CLElBQU1TLHFCQUFxQkssSUFBQUEseUNBQWlDLEVBQUNiLE1BQU1ELE9BQzdERCxTQUFTVSxvQkFDVE0sZUFBZSxJQTVDSmpCLGFBNENxQkMsUUFBUUMsTUFBTUM7Z0JBRXBELE9BQU9jO1lBQ1Q7OztXQS9DbUJqQjs7QUF1Q25CLGlCQXZDbUJBLGNBdUNaRyxRQUFPIn0=
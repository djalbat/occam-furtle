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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
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
var _Parameter;
var terminalNodesQuery = (0, _query.nodesQuery)("/parameter/@*"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@name"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@type");
var _default = (0, _dom.domAssigned)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(string, type, name) {
        _class_call_check(this, Parameter);
        this.string = string;
        this.type = type;
        this.name = name;
    }
    _create_class(Parameter, [
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
            key: "matchValue",
            value: function matchValue(value, context) {
                var valueString = value.asString(context), parameterString = this.string; ///
                context.trace("Matching the ".concat(valueString, " value against the '").concat(parameterString, "' parameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The ".concat(valueString, " value's '").concat(valueType, "' type  and '").concat(parameterString, "' parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(valueString, " value against the '").concat(parameterString, "' parameter."));
            }
        }
    ], [
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameter = null;
                var terminalNodes = terminalNodesQuery(parameterNode), terminalNodesLength = terminalNodes.length;
                if (terminalNodesLength === 2) {
                    parameter = parameterFromParameterNode(parameterNode, context);
                }
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));
function parameterFromParameterNode(parameterNode, context) {
    var Parameter = _dom.default.Parameter, name = nameFromParameterNode(parameterNode, context), type = typeFromParameterNode(parameterNode, context), string = stringFromNameAndType(name, type, context), parameter = new Parameter(string, type, name);
    return parameter;
}
function stringFromNameAndType(name, type, context) {
    var nameString = name, typeString = type, string = "".concat(typeString, " ").concat(nameString);
    return string;
}
function nameFromParameterNode(parameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(parameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wYXJhbWV0ZXIvQCpcIiksXG4gICAgICBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcGFyYW1ldGVyL0BuYW1lXCIpLFxuICAgICAgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSAgYW5kICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcGFyYW1ldGVyID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVzUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgICAgdGVybWluYWxOb2Rlc0xlbmd0aCA9IHRlcm1pbmFsTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKHRlcm1pbmFsTm9kZXNMZW5ndGggPT09IDIpIHtcbiAgICAgIHBhcmFtZXRlciA9IHBhcmFtZXRlckZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUpO1xuXG4gIHJldHVybiBwYXJhbWV0ZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVTdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9ICR7bmFtZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGUgPSBuYW1lVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSB0eXBlVGVybWluYWxOb2RlUXVlcnkocGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVyIiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsIm1hdGNoVmFsdWUiLCJ2YWx1ZSIsImNvbnRleHQiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwicGFyYW1ldGVyU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsInRlcm1pbmFsTm9kZXMiLCJ0ZXJtaW5hbE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJkb20iLCJuYW1lRnJvbVBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbVBhcmFtZXRlck5vZGUiLCJzdHJpbmdGcm9tTmFtZUFuZFR5cGUiLCJuYW1lU3RyaW5nIiwidHlwZVN0cmluZyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtnRUFD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
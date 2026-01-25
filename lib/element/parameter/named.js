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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
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
var _NamedParameter;
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@type"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@name[0]"), asNameTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@name[1]");
var _default = (0, _elements.define)((_NamedParameter = /*#__PURE__*/ function() {
    function NamedParameter(string, type, name, asName) {
        _class_call_check(this, NamedParameter);
        this.string = string;
        this.type = type;
        this.name = name;
        this.asName = asName;
    }
    _create_class(NamedParameter, [
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
            key: "getAsName",
            value: function getAsName() {
                return this.asName;
            }
        },
        {
            key: "matchExpression",
            value: function matchExpression(expression, context) {
                var expressionString = expression.asString(context), namedParameterString = this.string; ///
                context.trace("Matching the ".concat(expressionString, " expression against the '").concat(namedParameterString, "' named parameter..."));
                var expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type  and '").concat(namedParameterString, "' named parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(expressionString, " expression against the '").concat(namedParameterString, "' named parameter."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var namedParameterA = this, namedParameterB = namedParameter; ///
                var namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
                context.trace("Matching the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ], [
        {
            key: "fromNamedParameterNode",
            value: function fromNamedParameterNode(namedParameterNode, context) {
                var namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);
                return namedParameter;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    var NamedParameter = _elements.default.NamedParameter, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), asName = asNameFromNamedParameterNode(namedParameterNode, context), string = stringFromTypeNameAndAsName(type, name, asName, context), namedParameter = new NamedParameter(string, type, name, asName);
    return namedParameter;
}
function stringFromTypeNameAndAsName(type, name, asName, context) {
    var string;
    var typeString = type, nameString = name; ///
    string = "".concat(typeString, " ").concat(nameString);
    if (asName !== null) {
        var asNameString = asName; ///
        string = "".concat(string, " As ").concat(asNameString);
    }
    return string;
}
function typeFromNamedParameterNode(namedParameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(namedParameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function nameFromNamedParameterNode(namedParameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(namedParameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function asNameFromNamedParameterNode(namedParameterNode, context) {
    var asName = null;
    var asNameTerminalNode = asNameTerminalNodeQuery(namedParameterNode);
    if (asNameTerminalNode !== null) {
        var asNameTerminalNodeContent = asNameTerminalNode.getContent();
        asName = asNameTerminalNodeContent; ///
    }
    return asName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQHR5cGVcIiksXG4gICAgICBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQG5hbWVbMF1cIiksXG4gICAgICBhc05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9uYW1lZFBhcmFtZXRlci9AbmFtZVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCBhc05hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hc05hbWUgPSBhc05hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QXNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFzTmFtZTtcbiAgfVxuXG4gIG1hdGNoRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IGV4cHJlc3Npb25UeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgIGFuZCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBlbGVtZW50cyxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc05hbWUgPSBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzTmFtZSh0eXBlLCBuYW1lLCBhc05hbWUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFzTmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVBbmRBc05hbWUodHlwZSwgbmFtZSwgYXNOYW1lLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUsICAvLy9cbiAgICAgICAgbmFtZVN0cmluZyA9IG5hbWU7ICAvLy9cblxuICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAke25hbWVTdHJpbmd9YDtcblxuICBpZiAoYXNOYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXNOYW1lU3RyaW5nID0gYXNOYW1lOyAgLy8vXG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9IEFzICR7YXNOYW1lU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIGFzTmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhc05hbWUgPSBudWxsO1xuXG4gIGNvbnN0IGFzTmFtZVRlcm1pbmFsTm9kZSA9IGFzTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSk7XG5cbiAgaWYgKGFzTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBhc05hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgYXNOYW1lID0gYXNOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gYXNOYW1lO1xufVxuIl0sIm5hbWVzIjpbInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImFzTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXIiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImFzTmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0QXNOYW1lIiwibWF0Y2hFeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsImNvbnRleHQiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyIsImZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJlbGVtZW50cyIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwic3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNOYW1lIiwidHlwZVN0cmluZyIsIm5hbWVTdHJpbmciLCJhc05hbWVTdHJpbmciLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiYXNOYW1l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
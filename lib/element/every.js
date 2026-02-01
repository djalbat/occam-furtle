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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _types = require("../types");
var _term = require("../utilities/term");
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
var _Every;
var _default = (0, _elements.define)((_Every = /*#__PURE__*/ function() {
    function Every(string, variable, anonymousProcedure) {
        _class_call_check(this, Every);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Every, [
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
            key: "getAnonymousProcedure",
            value: function getAnonymousProcedure() {
                return this.anonymousProcedure;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var term;
                var everyString = this.getString();
                context.trace("Evaluating the '".concat(everyString, "' every..."));
                term = this.variable.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.NODES_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = term.getNodes(), boolean = nodes.every(function(node) {
                    var term;
                    var Terms = _elements.default.Terms;
                    term = (0, _term.termFromNode)(node, context);
                    var terms = Terms.fromTerm(term, context);
                    term = _this.anonymousProcedure.call(terms, context);
                    var termType = term.getType();
                    if (termType !== _types.BOOLEAN_TYPE) {
                        var termString = term.getString(), message = "The '".concat(termString, "' term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                    var boolean = term.getBoolean();
                    return boolean;
                });
                term = (0, _term.termFromBoolean)(boolean, context);
                context.trace("...evaluated the '".concat(everyString, "' every."));
                return term;
            }
        }
    ]);
    return Every;
}(), _define_property(_Every, "name", "Every"), _Every));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSwgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFdmVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCBldmVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0ZXJtLmdldE5vZGVzKCksXG4gICAgICAgICAgYm9vbGVhbiA9IG5vZGVzLmV2ZXJ5KChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgICAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1zID0gVGVybXMuZnJvbVRlcm0odGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRlcm0gPSB0aGlzLmFub255bW91c1Byb2NlZHVyZS5jYWxsKHRlcm1zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYm9vbGVhbiA9IHRlcm0uZ2V0Qm9vbGVhbigpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbjtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke2V2ZXJ5U3RyaW5nfScgZXZlcnkuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFdmVyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXZlcnkiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsImV2ZXJ5U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJib29sZWFuIiwiZXZlcnkiLCJub2RlIiwiVGVybXMiLCJlbGVtZW50cyIsInRlcm1Gcm9tTm9kZSIsInRlcm1zIiwiZnJvbVRlcm0iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dFQVBxQjtnRUFDQztxQkFHbUI7b0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDO2FBQU1DLE1BQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0I7Z0NBRHRCSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7Ozs7WUFHNUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsa0JBQWtCO1lBQ2hDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87O2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLGNBQWMsSUFBSSxDQUFDTixTQUFTO2dCQUVsQ0ksUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQThCLE9BQVpELGFBQVk7Z0JBRTdDRCxPQUFPLElBQUksQ0FBQ1AsUUFBUSxDQUFDSyxRQUFRLENBQUNDO2dCQUU5QixJQUFNSSxXQUFXSCxLQUFLSSxPQUFPO2dCQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO29CQUMzQixJQUFNQyxhQUFhTixLQUFLTCxTQUFTLElBQzNCWSxVQUFVLEFBQUMsUUFBOEJKLE9BQXZCRyxZQUFXLGNBQXlDRCxPQUE3QkYsVUFBUyxzQkFBK0IsT0FBWEUsaUJBQVUsRUFBQyxPQUNqRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsUUFBUVgsS0FBS1ksUUFBUSxJQUNyQkMsVUFBVUYsTUFBTUcsS0FBSyxDQUFDLFNBQUNDO29CQUNyQixJQUFJZjtvQkFFSixJQUFNLEFBQUVnQixRQUFVQyxpQkFBUSxDQUFsQkQ7b0JBRVJoQixPQUFPa0IsSUFBQUEsa0JBQVksRUFBQ0gsTUFBTWhCO29CQUUxQixJQUFNb0IsUUFBUUgsTUFBTUksUUFBUSxDQUFDcEIsTUFBTUQ7b0JBRW5DQyxPQUFPLE1BQUtOLGtCQUFrQixDQUFDMkIsSUFBSSxDQUFDRixPQUFPcEI7b0JBRTNDLElBQU1JLFdBQVdILEtBQUtJLE9BQU87b0JBRTdCLElBQUlELGFBQWFtQixtQkFBWSxFQUFFO3dCQUM3QixJQUFNaEIsYUFBYU4sS0FBS0wsU0FBUyxJQUMzQlksVUFBVSxBQUFDLFFBQXNDSixPQUEvQkcsWUFBVyxzQkFBNERnQixPQUF4Q25CLFVBQVMsaUNBQTRDLE9BQWJtQixtQkFBWSxFQUFDLE9BQ3RHZCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dCQUV4QyxNQUFNQztvQkFDUjtvQkFFQSxJQUFNSyxVQUFVYixLQUFLdUIsVUFBVTtvQkFFL0IsT0FBT1Y7Z0JBQ1Q7Z0JBRU5iLE9BQU93QixJQUFBQSxxQkFBZSxFQUFDWCxTQUFTZDtnQkFFaENBLFFBQVFHLEtBQUssQ0FBQyxBQUFDLHFCQUFnQyxPQUFaRCxhQUFZO2dCQUUvQyxPQUFPRDtZQUNUOzs7O0tBRUEseUJBQU95QixRQUFPIn0=
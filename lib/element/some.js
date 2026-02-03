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
var _Some;
var _default = (0, _elements.define)((_Some = /*#__PURE__*/ function() {
    function Some(string, variable, anonymousProcedure) {
        _class_call_check(this, Some);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    _create_class(Some, [
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
                var someString = this.getString();
                context.trace("Evaluating the '".concat(someString, "' some..."));
                term = this.variable.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.NODES_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = term.getNodes(), boolean = nodes.some(function(node) {
                    var term;
                    term = (0, _term.termFromNode)(node, context);
                    var Terms = _elements.default.Terms, terms = Terms.fromTerm(term, context);
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
                context.trace("...evaluated the '".concat(someString, "' some."));
                return term;
            }
        }
    ]);
    return Some;
}(), _define_property(_Some, "name", "Some"), _Some));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlLCB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFNvbWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3Qgc29tZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGVybS5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBub2Rlcy5zb21lKChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICB0ZXJtcyA9IFRlcm1zLmZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB0ZXJtID0gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlNvbWUiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsInNvbWVTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsImJvb2xlYW4iLCJzb21lIiwibm9kZSIsInRlcm1Gcm9tTm9kZSIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtcyIsImZyb21UZXJtIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnRUFQcUI7Z0VBQ0M7cUJBR21CO29CQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU5QyxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCO2dDQUR0Qkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFJQztnQkFFSixJQUFNQyxhQUFhLElBQUksQ0FBQ04sU0FBUztnQkFFakNJLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYRCxZQUFXO2dCQUU1Q0QsT0FBTyxJQUFJLENBQUNQLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQztnQkFFOUIsSUFBTUksV0FBV0gsS0FBS0ksT0FBTztnQkFFN0IsSUFBSUQsYUFBYUUsaUJBQVUsRUFBRTtvQkFDM0IsSUFBTUMsYUFBYU4sS0FBS0wsU0FBUyxJQUMzQlksVUFBVSxBQUFDLFFBQThCSixPQUF2QkcsWUFBVyxjQUF5Q0QsT0FBN0JGLFVBQVMsc0JBQStCLE9BQVhFLGlCQUFVLEVBQUMsT0FDakZHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLFFBQVFYLEtBQUtZLFFBQVEsSUFDckJDLFVBQVVGLE1BQU1HLElBQUksQ0FBQyxTQUFDQztvQkFDcEIsSUFBSWY7b0JBRUpBLE9BQU9nQixJQUFBQSxrQkFBWSxFQUFDRCxNQUFNaEI7b0JBRTFCLElBQU0sQUFBRWtCLFFBQVVDLGlCQUFRLENBQWxCRCxPQUNGRSxRQUFRRixNQUFNRyxRQUFRLENBQUNwQixNQUFNRDtvQkFFbkNDLE9BQU8sTUFBS04sa0JBQWtCLENBQUMyQixJQUFJLENBQUNGLE9BQU9wQjtvQkFFM0MsSUFBTUksV0FBV0gsS0FBS0ksT0FBTztvQkFFN0IsSUFBSUQsYUFBYW1CLG1CQUFZLEVBQUU7d0JBQzdCLElBQU1oQixhQUFhTixLQUFLTCxTQUFTLElBQzNCWSxVQUFVLEFBQUMsUUFBc0NKLE9BQS9CRyxZQUFXLHNCQUE0RGdCLE9BQXhDbkIsVUFBUyxpQ0FBNEMsT0FBYm1CLG1CQUFZLEVBQUMsT0FDdEdkLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7d0JBRXhDLE1BQU1DO29CQUNSO29CQUVBLElBQU1LLFVBQVViLEtBQUt1QixVQUFVO29CQUUvQixPQUFPVjtnQkFDVDtnQkFFTmIsT0FBT3dCLElBQUFBLHFCQUFlLEVBQUNYLFNBQVNkO2dCQUVoQ0EsUUFBUUcsS0FBSyxDQUFDLEFBQUMscUJBQStCLE9BQVhELFlBQVc7Z0JBRTlDLE9BQU9EO1lBQ1Q7Ozs7S0FFQSx3QkFBT3lCLFFBQU8ifQ==
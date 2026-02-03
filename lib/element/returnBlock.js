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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _block = /*#__PURE__*/ _interop_require_default(require("../context/block"));
var _elements = require("../elements");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _ReturnBlock;
var _default = (0, _elements.define)((_ReturnBlock = /*#__PURE__*/ function(Element) {
    _inherits(ReturnBlock, Element);
    function ReturnBlock(context, string, node, steps, nonsensical, returnStatement) {
        _class_call_check(this, ReturnBlock);
        var _this;
        _this = _call_super(this, ReturnBlock, [
            context,
            string,
            node
        ]);
        _this.steps = steps;
        _this.nonsensical = nonsensical;
        _this.returnStatement = returnStatement;
        return _this;
    }
    _create_class(ReturnBlock, [
        {
            key: "getSteps",
            value: function getSteps() {
                return this.steps;
            }
        },
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                return this.nonsensical;
            }
        },
        {
            key: "getReturnStatement",
            value: function getReturnStatement() {
                return this.returnStatement;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(variables, context) {
                if (context === undefined) {
                    context = variables; ///
                    variables = [];
                }
                var returnBlockString = this.getString(); ///
                context.trace("Evaluating the '".concat(returnBlockString, "' return block..."));
                if (this.nonsensical) {
                    var message = "The return block is nonsensical.", exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                this.steps.forEach(function(step) {
                    step.evaluate(context);
                });
                var term = this.returnStatement.evaluate(context), termString = term.getString();
                context.debug("Evaluated... the '".concat(returnBlockString, "' return block as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return ReturnBlock;
}(_wrap_native_super(_element.default)), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgQmxvY2tDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2Jsb2NrXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuQmxvY2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5yZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHZhcmlhYmxlczsgIC8vL1xuXG4gICAgICB2YXJpYWJsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5CbG9ja1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmV0dXJuQmxvY2tTdHJpbmd9JyByZXR1cm4gYmxvY2suLi5gKTtcblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSByZXR1cm4gYmxvY2sgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgc3RlcC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYEV2YWx1YXRlZC4uLiB0aGUgJyR7cmV0dXJuQmxvY2tTdHJpbmd9JyByZXR1cm4gYmxvY2sgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuQmxvY2tcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJldHVybkJsb2NrIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RlcHMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJ1bmRlZmluZWQiLCJyZXR1cm5CbG9ja1N0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImZvckVhY2giLCJzdGVwIiwidGVybSIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7Ozs4REFOb0I7Z0VBQ0U7NERBQ0c7d0JBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7O2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQUQ1Q047O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsZUFBZSxHQUFHQTs7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZUFBZTtZQUM3Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUVWLE9BQU87Z0JBQ3pCLElBQUlBLFlBQVlXLFdBQVc7b0JBQ3pCWCxVQUFVVSxXQUFZLEdBQUc7b0JBRXpCQSxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUVBLElBQU1FLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUUvQ2IsUUFBUWMsS0FBSyxDQUFDLEFBQUMsbUJBQW9DLE9BQWxCRixtQkFBa0I7Z0JBRW5ELElBQUksSUFBSSxDQUFDUixXQUFXLEVBQUU7b0JBQ3BCLElBQU1XLFVBQVUsb0NBQ1ZDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDWCxXQUFXVjtnQkFFM0RBLFVBQVVtQixjQUFjLEdBQUc7Z0JBRTNCLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ21CLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLEtBQUtkLFFBQVEsQ0FBQ1Q7Z0JBQ2hCO2dCQUVBLElBQU13QixPQUFPLElBQUksQ0FBQ25CLGVBQWUsQ0FBQ0ksUUFBUSxDQUFDVCxVQUNyQ3lCLGFBQWFELEtBQUtYLFNBQVM7Z0JBRWpDYixRQUFRMEIsS0FBSyxDQUFDLEFBQUMscUJBQTJERCxPQUF2Q2IsbUJBQWtCLHVCQUFnQyxPQUFYYSxZQUFXO2dCQUVyRixPQUFPRDtZQUNUOzs7O3FCQXJEOENHLGdCQUFPLElBdURyRCwrQkFBT0MsUUFBTyJ9
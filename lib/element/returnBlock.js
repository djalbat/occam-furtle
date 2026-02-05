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
var _asynchronous = require("../utilities/asynchronous");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
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
                return _async_to_generator(function() {
                    var returnBlockString, message, exception, blockContext, term, termString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (context === undefined) {
                                    context = variables; ///
                                    variables = [];
                                }
                                returnBlockString = this.getString(); ///
                                context.trace("Evaluating the '".concat(returnBlockString, "' return block..."));
                                if (this.nonsensical) {
                                    message = "The return block is nonsensical.", exception = _exception.default.fromMessage(message);
                                    throw exception;
                                }
                                blockContext = _block.default.fromVariables(variables, context);
                                context = blockContext; ///
                                return [
                                    4,
                                    (0, _asynchronous.asyncForEach)(this.steps, function(step) {
                                        return _async_to_generator(function() {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            step.evaluate(context)
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        })();
                                    })
                                ];
                            case 1:
                                _state.sent();
                                term = this.returnStatement.evaluate(context), termString = term.getString();
                                context.debug("Evaluated... the '".concat(returnBlockString, "' return block as '").concat(termString, "'."));
                                return [
                                    2,
                                    term
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return ReturnBlock;
}(_wrap_native_super(_element.default)), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgQmxvY2tDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2Jsb2NrXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNGb3JFYWNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVybkJsb2NrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0UmV0dXJuU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB2YXJpYWJsZXM7ICAvLy9cblxuICAgICAgdmFyaWFibGVzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcmV0dXJuQmxvY2tTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3JldHVybkJsb2NrU3RyaW5nfScgcmV0dXJuIGJsb2NrLi4uYCk7XG5cbiAgICBpZiAodGhpcy5ub25zZW5zaWNhbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgcmV0dXJuIGJsb2NrIGlzIG5vbnNlbnNpY2FsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICBhd2FpdCBhc3luY0ZvckVhY2godGhpcy5zdGVwcywgYXN5bmMgKHN0ZXApID0+IHtcbiAgICAgIGF3YWl0IHN0ZXAuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy5yZXR1cm5TdGF0ZW1lbnQuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGBFdmFsdWF0ZWQuLi4gdGhlICcke3JldHVybkJsb2NrU3RyaW5nfScgcmV0dXJuIGJsb2NrIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVybkJsb2NrXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZXR1cm5CbG9jayIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsImdldFN0ZXBzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVyblN0YXRlbWVudCIsImV2YWx1YXRlIiwidmFyaWFibGVzIiwicmV0dXJuQmxvY2tTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiYmxvY2tDb250ZXh0IiwidGVybSIsInRlcm1TdHJpbmciLCJ1bmRlZmluZWQiLCJnZXRTdHJpbmciLCJ0cmFjZSIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImFzeW5jRm9yRWFjaCIsInN0ZXAiLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4REFQb0I7Z0VBQ0U7NERBQ0c7d0JBRUY7NEJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7O2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQUQ1Q047O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsZUFBZSxHQUFHQTs7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZUFBZTtZQUM3Qjs7O1lBRU1JLEtBQUFBO21CQUFOLFNBQU1BLFNBQVNDLFNBQVMsRUFBRVYsT0FBTzs7d0JBT3pCVyxtQkFLRUMsU0FDQUMsV0FLRkMsY0FRQUMsTUFDQUM7Ozs7Z0NBMUJOLElBQUloQixZQUFZaUIsV0FBVztvQ0FDekJqQixVQUFVVSxXQUFZLEdBQUc7b0NBRXpCQTtnQ0FDRjtnQ0FFTUMsb0JBQW9CLElBQUksQ0FBQ08sU0FBUyxJQUFJLEdBQUc7Z0NBRS9DbEIsUUFBUW1CLEtBQUssQ0FBQyxBQUFDLG1CQUFvQyxPQUFsQlIsbUJBQWtCO2dDQUVuRCxJQUFJLElBQUksQ0FBQ1AsV0FBVyxFQUFFO29DQUNkUSxVQUFVLG9DQUNWQyxZQUFZTyxrQkFBUyxDQUFDQyxXQUFXLENBQUNUO29DQUV4QyxNQUFNQztnQ0FDUjtnQ0FFTUMsZUFBZVEsY0FBWSxDQUFDQyxhQUFhLENBQUNiLFdBQVdWO2dDQUUzREEsVUFBVWMsY0FBYyxHQUFHO2dDQUUzQjs7b0NBQU1VLElBQUFBLDBCQUFZLEVBQUMsSUFBSSxDQUFDckIsS0FBSyxFQUFFLFNBQU9zQjs7Ozs7d0RBQ3BDOzs0REFBTUEsS0FBS2hCLFFBQVEsQ0FBQ1Q7Ozt3REFBcEI7Ozs7Ozt3Q0FDRjs7OztnQ0FGQTtnQ0FJTWUsT0FBTyxJQUFJLENBQUNWLGVBQWUsQ0FBQ0ksUUFBUSxDQUFDVCxVQUNyQ2dCLGFBQWFELEtBQUtHLFNBQVM7Z0NBRWpDbEIsUUFBUTBCLEtBQUssQ0FBQyxBQUFDLHFCQUEyRFYsT0FBdkNMLG1CQUFrQix1QkFBZ0MsT0FBWEssWUFBVztnQ0FFckY7O29DQUFPRDs7OztnQkFDVDs7Ozs7cUJBckQ4Q1ksZ0JBQU8sSUF1RHJELCtCQUFPQyxRQUFPIn0=
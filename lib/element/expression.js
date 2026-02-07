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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
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
var _Expression;
var _default = (0, _elements.define)((_Expression = /*#__PURE__*/ function(Element) {
    _inherits(Expression, Element);
    function Expression(context, string, node, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall) {
        _class_call_check(this, Expression);
        var _this;
        _this = _call_super(this, Expression, [
            context,
            string,
            node
        ]);
        _this.term = term;
        _this.some = some;
        _this.every = every;
        _this.reduce = reduce;
        _this.ternary = ternary;
        _this.nodeQuery = nodeQuery;
        _this.nodesQuery = nodesQuery;
        _this.returnBlock = returnBlock;
        _this.procedureCall = procedureCall;
        return _this;
    }
    _create_class(Expression, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getSome",
            value: function getSome() {
                return this.some;
            }
        },
        {
            key: "getEvery",
            value: function getEvery() {
                return this.every;
            }
        },
        {
            key: "getReduce",
            value: function getReduce() {
                return this.reduce;
            }
        },
        {
            key: "getTernary",
            value: function getTernary() {
                return this.ternay;
            }
        },
        {
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.term !== null) {
                    type = this.term.getType();
                } else if (this.some !== null) {
                    type = this.some.getType();
                } else if (this.every !== null) {
                    type = this.every.getType();
                } else if (this.reduce !== null) {
                    type = this.reduce.getType();
                } else if (this.ternary !== null) {
                    type = this.ternary.getType();
                } else if (this.nodeQuery !== null) {
                    type = this.nodeQuery.getType();
                } else if (this.nodesQuery !== null) {
                    type = this.nodesQuery.getType();
                } else if (this.returnBlock !== null) {
                    type = this.returnBlock.getType();
                } else if (this.procedureCall !== null) {
                    type = this.procedureCall.getType();
                }
                return type;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                return _async_to_generator(function() {
                    var term;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!false) return [
                                    3,
                                    1
                                ];
                                return [
                                    3,
                                    16
                                ];
                            case 1:
                                if (!(this.term !== null)) return [
                                    3,
                                    2
                                ];
                                term = this.term.evaluate(context);
                                return [
                                    3,
                                    16
                                ];
                            case 2:
                                if (!(this.nodeQuery !== null)) return [
                                    3,
                                    3
                                ];
                                term = this.nodeQuery.evaluate(context);
                                return [
                                    3,
                                    16
                                ];
                            case 3:
                                if (!(this.nodesQuery !== null)) return [
                                    3,
                                    4
                                ];
                                term = this.nodesQuery.evaluate(context);
                                return [
                                    3,
                                    16
                                ];
                            case 4:
                                if (!(this.some !== null)) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    this.some.evaluate(context)
                                ];
                            case 5:
                                term = _state.sent();
                                return [
                                    3,
                                    16
                                ];
                            case 6:
                                if (!(this.every !== null)) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    this.every.evaluate(context)
                                ];
                            case 7:
                                term = _state.sent();
                                return [
                                    3,
                                    16
                                ];
                            case 8:
                                if (!(this.reduce !== null)) return [
                                    3,
                                    10
                                ];
                                return [
                                    4,
                                    this.reduce.evaluate(context)
                                ];
                            case 9:
                                term = _state.sent();
                                return [
                                    3,
                                    16
                                ];
                            case 10:
                                if (!(this.ternary !== null)) return [
                                    3,
                                    12
                                ];
                                return [
                                    4,
                                    this.ternary.evaluate(context)
                                ];
                            case 11:
                                term = _state.sent();
                                return [
                                    3,
                                    16
                                ];
                            case 12:
                                if (!(this.returnBlock !== null)) return [
                                    3,
                                    14
                                ];
                                return [
                                    4,
                                    this.returnBlock.evaluate(context)
                                ];
                            case 13:
                                term = _state.sent();
                                return [
                                    3,
                                    16
                                ];
                            case 14:
                                if (!(this.procedureCall !== null)) return [
                                    3,
                                    16
                                ];
                                return [
                                    4,
                                    this.procedureCall.evaluate(context)
                                ];
                            case 15:
                                term = _state.sent();
                                _state.label = 16;
                            case 16:
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
    return Expression;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Expression, "name", "Expression"), _Expression));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcmV0dXJuQmxvY2ssIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5ldmVyeSA9IGV2ZXJ5O1xuICAgIHRoaXMucmVkdWNlID0gcmVkdWNlO1xuICAgIHRoaXMudGVybmFyeSA9IHRlcm5hcnk7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLnJldHVybkJsb2NrID0gcmV0dXJuQmxvY2s7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldEV2ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5O1xuICB9XG5cbiAgZ2V0UmVkdWNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmV0dXJuQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnJldHVybkJsb2NrLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLm5vZGVRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCAgdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZWR1Y2UuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRlcm5hcnkgIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSBhd2FpdCB0aGlzLnRlcm5hcnkuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy5yZXR1cm5CbG9jay5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IGF3YWl0IHRoaXMucHJvY2VkdXJlQ2FsbC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFeHByZXNzaW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsIm5vZGVRdWVyeSIsIm5vZGVzUXVlcnkiLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJnZXRUZXJtIiwiZ2V0U29tZSIsImdldEV2ZXJ5IiwiZ2V0UmVkdWNlIiwiZ2V0VGVybmFyeSIsInRlcm5heSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJnZXRSZXR1cm5CbG9jayIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRUeXBlIiwidHlwZSIsImV2YWx1YXRlIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzhCQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FB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
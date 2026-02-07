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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _types = require("../types");
var _asynchronous = require("../utilities/asynchronous");
var _term = require("../utilities/term");
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
var _Reduce;
var _default = (0, _elements.define)((_Reduce = /*#__PURE__*/ function(Element) {
    _inherits(Reduce, Element);
    function Reduce(context, string, node, variable, initialExpression, anonymousProcedure) {
        _class_call_check(this, Reduce);
        var _this;
        _this = _call_super(this, Reduce, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        _this.initialExpression = initialExpression;
        _this.anonymousProcedure = anonymousProcedure;
        return _this;
    }
    _create_class(Reduce, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getInitialExpression",
            value: function getInitialExpression() {
                return this.initialExpression;
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
                return _async_to_generator(function() {
                    var _this, term, reduceString, termType, termString, message, exception, nodes, initialExpression, termString1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                return [
                                    4,
                                    this.break
                                ];
                            case 1:
                                _state.sent();
                                reduceString = this.getString();
                                context.trace("Evaluating the '".concat(reduceString, "' reduce..."));
                                term = this.variable.evaluate(context);
                                termType = term.getType();
                                if (termType !== _types.NODES_TYPE) {
                                    termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                                    throw exception;
                                }
                                nodes = term.getNodes();
                                return [
                                    4,
                                    this.initialExpression.evaluate(context)
                                ];
                            case 2:
                                initialExpression = _state.sent();
                                return [
                                    4,
                                    (0, _asynchronous.asyncReduce)(nodes, function(currentExpression, node) {
                                        return _async_to_generator(function() {
                                            var term, Terms, terms;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        Terms = _elements.default.Terms;
                                                        term = currentTerm; ///
                                                        terms = Terms.fromTerm(term, context);
                                                        term = (0, _term.termFromNode)(node, context);
                                                        terms.addTerm(term);
                                                        return [
                                                            4,
                                                            this.anonymousProcedure.call(terms, context)
                                                        ];
                                                    case 1:
                                                        term = _state.sent();
                                                        return [
                                                            2,
                                                            term
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, initialExpression)
                                ];
                            case 3:
                                term = _state.sent();
                                termString1 = term.getString();
                                context.trace("...evaluated the '".concat(reduceString, "' reduce as '").concat(termString1, "'."));
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
    return Reduce;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Reduce, "name", "Reduce"), _Reduce));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgYXN5bmNSZWR1Y2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWR1Y2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgaW5pdGlhbEV4cHJlc3Npb24sIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLmluaXRpYWxFeHByZXNzaW9uID0gaW5pdGlhbEV4cHJlc3Npb247XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEluaXRpYWxFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0QW5vbnltb3VzUHJvY2VkdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGFzeW5jIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWs7XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0ZXJtLmdldE5vZGVzKCksXG4gICAgICAgICAgaW5pdGlhbEV4cHJlc3Npb24gPSBhd2FpdCB0aGlzLmluaXRpYWxFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdGVybSA9IGF3YWl0IGFzeW5jUmVkdWNlKG5vZGVzLCBhc3luYyAoY3VycmVudEV4cHJlc3Npb24sIG5vZGUpID0+IHtcbiAgICAgIGxldCB0ZXJtO1xuXG4gICAgICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cztcblxuICAgICAgdGVybSA9IGN1cnJlbnRUZXJtOyAvLy9cblxuICAgICAgY29uc3QgdGVybXMgPSBUZXJtcy5mcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgdGVybXMuYWRkVGVybSh0ZXJtKTtcblxuICAgICAgdGVybSA9IGF3YWl0IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdGVybTtcbiAgICB9LCBpbml0aWFsRXhwcmVzc2lvbik7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZHVjZVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVkdWNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsImluaXRpYWxFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsRXhwcmVzc2lvbiIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidGVybSIsInJlZHVjZVN0cmluZyIsInRlcm1UeXBlIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJub2RlcyIsImJyZWFrIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZ2V0Tm9kZXMiLCJhc3luY1JlZHVjZSIsImN1cnJlbnRFeHByZXNzaW9uIiwiVGVybXMiLCJ0ZXJtcyIsImVsZW1lbnRzIiwiY3VycmVudFRlcm0iLCJmcm9tVGVybSIsInRlcm1Gcm9tTm9kZSIsImFkZFRlcm0iLCJjYWxsIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlB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
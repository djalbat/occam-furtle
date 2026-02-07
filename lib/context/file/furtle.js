"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FurtleFileContext;
    }
});
var _necessary = require("necessary");
var _occamlanguages = require("occam-languages");
var _verify = require("../../process/verify");
var _furtle = require("../../utilities/furtle");
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
var push = _necessary.arrayUtilities.push, chainContext = _occamlanguages.contextUtilities.chainContext;
var FurtleFileContext = /*#__PURE__*/ function(FileContext) {
    _inherits(FurtleFileContext, FileContext);
    function FurtleFileContext(context, filePath, tokens, node, procedures) {
        _class_call_check(this, FurtleFileContext);
        var _this;
        _this = _call_super(this, FurtleFileContext, [
            context,
            filePath,
            tokens,
            node
        ]);
        _this.procedures = procedures;
        return _possible_constructor_return(_this, chainContext(_this));
    }
    _create_class(FurtleFileContext, [
        {
            key: "getProcedures",
            value: function getProcedures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var procedures = [];
                push(procedures, this.procedures);
                if (includeRelease) {
                    var releaseContextProcedures = this.context.getProcedures();
                    push(procedures, releaseContextProcedures);
                }
                return procedures;
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                var lexer = _furtle.furtleLexer; ///
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var parser = _furtle.furtleParser; ///
                return parser;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                return theorems;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                return combinators;
            }
        },
        {
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = [];
                return typePrefixes;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                return metatheorems;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                return variables;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = [];
                return metavariables;
            }
        },
        {
            key: "addProcedure",
            value: function addProcedure(procedure) {
                var procedureString = procedure.getString();
                this.procedures.push(procedure);
                this.debug("Added the '".concat(procedureString, "' procedure to the context."));
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.procedures = [];
            }
        },
        {
            key: "complete",
            value: function complete() {
            ///
            }
        },
        {
            key: "verifyFile",
            value: function verifyFile() {
                return _async_to_generator(function() {
                    var node, context, fileNode, fileVerifies;
                    return _ts_generator(this, function(_state) {
                        node = this.getNode(), context = this, fileNode = node, fileVerifies = (0, _verify.verifyFile)(fileNode, context);
                        return [
                            2,
                            fileVerifies
                        ];
                    });
                }).call(this);
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, context) {
                var procedures = [], furtleFileContext = _occamlanguages.FileContext.fromFile(FurtleFileContext, file, procedures, context);
                return furtleFileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath, context) {
                var procedures = null, furtleFileContext = ileContext.fromFilePath(FurtleFileContext, filePath, procedures, context);
                return furtleFileContext;
            }
        }
    ]);
    return FurtleFileContext;
}(_occamlanguages.FileContext);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEZpbGVDb250ZXh0LCBjb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBmdXJ0bGVMZXhlciwgZnVydGxlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mdXJ0bGVcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2hhaW5Db250ZXh0IH0gPSBjb250ZXh0VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXJ0bGVGaWxlQ29udGV4dCBleHRlbmRzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgcHJvY2VkdXJlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVzID0gcHJvY2VkdXJlcztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHB1c2gocHJvY2VkdXJlcywgdGhpcy5wcm9jZWR1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gdGhpcy5jb250ZXh0LmdldFByb2NlZHVyZXMoKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIGNvbnN0IHBhcnNlciA9IGZ1cnRsZVBhcnNlcjsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBhZGRQcm9jZWR1cmUocHJvY2VkdXJlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVzLnB1c2gocHJvY2VkdXJlKTtcblxuICAgIHRoaXMuZGVidWcoYEFkZGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgdG8gdGhlIGNvbnRleHQuYCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RmlsZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVWZXJpZmllcyA9IHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoRnVydGxlRmlsZUNvbnRleHQsIGZpbGUsIHByb2NlZHVyZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBudWxsLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gaWxlQ29udGV4dC5mcm9tRmlsZVBhdGgoRnVydGxlRmlsZUNvbnRleHQsIGZpbGVQYXRoLCBwcm9jZWR1cmVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZ1cnRsZUZpbGVDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJwcm9jZWR1cmVzIiwiZ2V0UHJvY2VkdXJlcyIsImluY2x1ZGVSZWxlYXNlIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImZ1cnRsZUxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZnVydGxlUGFyc2VyIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiYWRkUHJvY2VkdXJlIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZGVidWciLCJjbGVhciIsImNvbXBsZXRlIiwidmVyaWZ5RmlsZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiZ2V0Tm9kZSIsImZyb21GaWxlIiwiZmlsZSIsImZ1cnRsZUZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGgiLCJpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTs4QkFDZTtzQkFFbkI7c0JBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsZUFBaUJDLGdDQUFnQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ILGtDQUFOO2NBQU1BO2FBQUFBLGtCQUNQSyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVU7Z0NBRHBDVDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEs7WUFBU0M7WUFBVUM7WUFBUUM7O1FBRWpDLE1BQUtDLFVBQVUsR0FBR0E7UUFFbEIsMkNBQU9OOztrQkFOVUg7O1lBU25CVSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWNDLGlCQUFBQSxpRUFBaUI7Z0JBQzdCLElBQU1GLGFBQWEsRUFBRTtnQkFFckJSLEtBQUtRLFlBQVksSUFBSSxDQUFDQSxVQUFVO2dCQUVoQyxJQUFJRSxnQkFBZ0I7b0JBQ2xCLElBQU1DLDJCQUEyQixJQUFJLENBQUNQLE9BQU8sQ0FBQ0ssYUFBYTtvQkFFM0RULEtBQUtRLFlBQVlHO2dCQUNuQjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVFDLG1CQUFXLEVBQUcsR0FBRztnQkFFL0IsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTQyxvQkFBWSxFQUFHLEdBQUc7Z0JBRWpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVSLGlCQUFBQSxpRUFBaUI7Z0JBQ3pCLElBQU1TLFNBQVMsRUFBRTtnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBU1YsaUJBQUFBLGlFQUFpQjtnQkFDeEIsSUFBTVcsUUFBUSxFQUFFO2dCQUVoQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFTWixpQkFBQUEsaUVBQWlCO2dCQUN4QixJQUFNYSxRQUFRLEVBQUU7Z0JBRWhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVkLGlCQUFBQSxpRUFBaUI7Z0JBQ3pCLElBQU1lLFNBQVMsRUFBRTtnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVWhCLGlCQUFBQSxpRUFBaUI7Z0JBQ3pCLElBQU1pQixTQUFTLEVBQUU7Z0JBRWpCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVlsQixpQkFBQUEsaUVBQWlCO2dCQUMzQixJQUFNbUIsV0FBVyxFQUFFO2dCQUVuQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFjcEIsaUJBQUFBLGlFQUFpQjtnQkFDN0IsSUFBTXFCLGFBQWEsRUFBRTtnQkFFckIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZXRCLGlCQUFBQSxpRUFBaUI7Z0JBQzlCLElBQU11QixjQUFjLEVBQUU7Z0JBRXRCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWV4QixpQkFBQUEsaUVBQWlCO2dCQUM5QixJQUFNeUIsY0FBYyxFQUFFO2dCQUV0QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFnQjFCLGlCQUFBQSxpRUFBaUI7Z0JBQy9CLElBQU0yQixlQUFlLEVBQUU7Z0JBRXZCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWdCNUIsaUJBQUFBLGlFQUFpQjtnQkFDL0IsSUFBTTZCLGVBQWUsRUFBRTtnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZ0I5QixpQkFBQUEsaUVBQWlCO2dCQUMvQixJQUFNK0IsZUFBZSxFQUFFO2dCQUV2QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksRUFBRTtnQkFFcEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsRUFBRTtnQkFFeEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTO2dCQUNwQixJQUFNQyxrQkFBa0JELFVBQVVFLFNBQVM7Z0JBRTNDLElBQUksQ0FBQ3pDLFVBQVUsQ0FBQ1IsSUFBSSxDQUFDK0M7Z0JBRXJCLElBQUksQ0FBQ0csS0FBSyxDQUFDLEFBQUMsY0FBNkIsT0FBaEJGLGlCQUFnQjtZQUMzQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUMzQyxVQUFVLEdBQUcsRUFBRTtZQUN0Qjs7O1lBRUE0QyxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztZQUVNQyxLQUFBQTttQkFBTixTQUFNQTs7d0JBQ0U5QyxNQUNBSCxTQUNBa0QsVUFDQUM7O3dCQUhBaEQsT0FBTyxJQUFJLENBQUNpRCxPQUFPLElBQ25CcEQsVUFBVSxJQUFJLEVBQ2RrRCxXQUFXL0MsTUFDWGdELGVBQWVGLElBQUFBLGtCQUFVLEVBQUNDLFVBQVVsRDt3QkFFMUM7OzRCQUFPbUQ7OztnQkFDVDs7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFdEQsT0FBTztnQkFDM0IsSUFBTUksYUFBYSxFQUFFLEVBQ2ZtRCxvQkFBb0JDLDJCQUFXLENBQUNILFFBQVEsQ0FsSjdCMUQsbUJBa0ppRDJELE1BQU1sRCxZQUFZSjtnQkFFcEYsT0FBT3VEO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxhQUFheEQsUUFBUSxFQUFFRCxPQUFPO2dCQUNuQyxJQUFNSSxhQUFhLE1BQ2JtRCxvQkFBb0JHLFdBQVdELFlBQVksQ0F6SmhDOUQsbUJBeUpvRE0sVUFBVUcsWUFBWUo7Z0JBRTNGLE9BQU91RDtZQUNUOzs7V0E1Sm1CNUQ7RUFBMEI2RCwyQkFBVyJ9
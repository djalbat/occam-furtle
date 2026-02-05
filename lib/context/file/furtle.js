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
var _file = /*#__PURE__*/ _interop_require_default(require("../../context/file"));
var _verify = require("../../process/verify");
var _context = require("../../utilities/context");
var _furtle = require("../../utilities/furtle");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var push = _necessary.arrayUtilities.push;
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
        return _possible_constructor_return(_this, (0, _context.chainContext)(_this));
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
            key: "verifyFile",
            value: function verifyFile() {
                var node = this.getNode(), context = this, fileNode = node, fileVerifies = (0, _verify.verifyFile)(fileNode, context);
                return fileVerifies;
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
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, context) {
                var procedures = [], furtleFileContext = _file.default.fromFile(FurtleFileContext, file, procedures, context);
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
}(_file.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2ZpbGVcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgY2hhaW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBmdXJ0bGVMZXhlciwgZnVydGxlUGFyc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mdXJ0bGVcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVydGxlRmlsZUNvbnRleHQgZXh0ZW5kcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHByb2NlZHVyZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcyA9IHByb2NlZHVyZXM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICBwdXNoKHByb2NlZHVyZXMsIHRoaXMucHJvY2VkdXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIGNvbnN0IGxleGVyID0gZnVydGxlTGV4ZXI7ICAvLy9cblxuICAgIHJldHVybiBsZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBmdXJ0bGVQYXJzZXI7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkUHJvY2VkdXJlKHByb2NlZHVyZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG5cbiAgICB0aGlzLmRlYnVnKGBBZGRlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlIHRvIHRoZSBjb250ZXh0LmApO1xuICB9XG5cbiAgdmVyaWZ5RmlsZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVWZXJpZmllcyA9IHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVWZXJpZmllcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucHJvY2VkdXJlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlLCBwcm9jZWR1cmVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gbnVsbCxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IGlsZUNvbnRleHQuZnJvbUZpbGVQYXRoKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlUGF0aCwgcHJvY2VkdXJlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnVydGxlRmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVGaWxlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJwcm9jZWR1cmVzIiwiY2hhaW5Db250ZXh0IiwiZ2V0UHJvY2VkdXJlcyIsImluY2x1ZGVSZWxlYXNlIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImZ1cnRsZUxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZnVydGxlUGFyc2VyIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiYWRkUHJvY2VkdXJlIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZGVidWciLCJ2ZXJpZnlGaWxlIiwiZ2V0Tm9kZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiY2xlYXIiLCJjb21wbGV0ZSIsImZyb21GaWxlIiwiZmlsZSIsImZ1cnRsZUZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGgiLCJpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsyREFFUDtzQkFFRzt1QkFDRTtzQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsa0NBQU47Y0FBTUE7YUFBQUEsa0JBQ1BHLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxNQUFN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
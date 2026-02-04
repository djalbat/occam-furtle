"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
var _lineIndex = require("../utilities/lineIndex");
var _node = require("../utilities/node");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FileContext = /*#__PURE__*/ function(Context) {
    _inherits(FileContext, Context);
    function FileContext(context, filePath, tokens, node) {
        _class_call_check(this, FileContext);
        var _this;
        _this = _call_super(this, FileContext, [
            context
        ]);
        _this.filePath = filePath;
        _this.tokens = tokens;
        _this.node = node;
        return _this;
    }
    _create_class(FileContext, [
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "break",
            value: function _break(node) {
                var lineIndex = (0, _lineIndex.lineIndexFromNodeAndTokens)(node, this.tokens);
                this.context.break(this.filePath, lineIndex);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message) {
                this.context.writeToLog(level, message, this.filePath);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(nodes) {
                var string = (0, _node.nodesAsString)(nodes, this.tokens);
                return string;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                this.prepare();
                if (this.node === null) {
                    this.warning("Unable to verify the '".concat(this.filePath, "' file because it cannot be parsed."));
                } else {
                    this.debug("Verifying the '".concat(this.filePath, "' file..."));
                    var verifyFile = this.constrcutor.verifyFile, context = this, fileNode = this.node; ///
                    verifies = verifyFile(fileNode, context);
                    verifies ? this.complete() : this.clear();
                    if (verifies) {
                        this.info("...verified the '".concat(this.filePath, "' file."));
                    }
                }
                return verifies;
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                if (this.tokens !== null) {
                    return;
                }
                var _this_constructor = this.constructor, lexer = _this_constructor.lexer, parser = _this_constructor.parser, file = this.findFile(this.filePath), content = file.getContent();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
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
            key: "initialise",
            value: function initialise(json) {
                var content = json.content, lexer = this.getLexer(), parser = this.getParser();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
                this.clear();
                this.addProcedures();
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var file = this.findFile(this.filePath), filePath = this.filePath, content = file.getContent(), json = {
                    filePath: filePath,
                    content: content
                };
                return json;
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(Class, file) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var filePath = file.getPath(), tokens = null, node = null, context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(Class, filePath) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var tokens = null, node = null, context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        },
        {
            key: "fromFilePathTokensAndNode",
            value: function fromFilePathTokensAndNode(Class, filePath, tokens, node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                var context = remainingArguments.pop(), fileContext = _construct(Class, [
                    context,
                    filePath,
                    tokens,
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                return fileContext;
            }
        }
    ]);
    return FileContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBicmVhayhub2RlKSB7XG4gICAgY29uc3QgbGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jb250ZXh0LmJyZWFrKHRoaXMuZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5jb250ZXh0LndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCB7IHZlcmlmeUZpbGUgfSA9IHRoaXMuY29uc3RyY3V0b3IsXG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBmaWxlTm9kZSA9IHRoaXMubm9kZTsgLy8vXG5cbiAgICAgIHZlcmlmaWVzID0gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbGV4ZXIsIHBhcnNlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucHJvY2VkdXJlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShDbGFzcywgZmlsZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKENsYXNzLCBmaWxlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aFRva2Vuc0FuZE5vZGUoQ2xhc3MsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJicmVhayIsImxpbmVJbmRleCIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwid3JpdGVUb0xvZyIsImxldmVsIiwibWVzc2FnZSIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJlcGFyZSIsIndhcm5pbmciLCJkZWJ1ZyIsInZlcmlmeUZpbGUiLCJjb25zdHJjdXRvciIsImZpbGVOb2RlIiwiY29tcGxldGUiLCJjbGVhciIsImluZm8iLCJsZXhlciIsInBhcnNlciIsImZpbGUiLCJmaW5kRmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInByb2NlZHVyZXMiLCJpbml0aWFsaXNlIiwianNvbiIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiYWRkUHJvY2VkdXJlcyIsInRvSlNPTiIsImZyb21GaWxlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGgiLCJmcm9tRmlsZVBhdGhUb2tlbnNBbmROb2RlIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7OERBTEQ7eUJBRXVCO29CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUEsWUFDUEMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEeEJKOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxJ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
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
                var context = this.getContext(), lineIndex = (0, _lineIndex.lineIndexFromNodeAndTokens)(node, this.tokens);
                context.break(this.filePath, lineIndex);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message) {
                var context = this.getContext();
                context.writeToLog(level, message, this.filePath);
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
                var file = this.findFile(this.filePath), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbGluZUluZGV4XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBicmVhayhub2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnRleHQuYnJlYWsodGhpcy5maWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgICBjb25zdCB7IHZlcmlmeUZpbGUgfSA9IHRoaXMuY29uc3RyY3V0b3IsXG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBmaWxlTm9kZSA9IHRoaXMubm9kZTsgLy8vXG5cbiAgICAgIHZlcmlmaWVzID0gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVzID9cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpIDpcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShDbGFzcywgZmlsZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKENsYXNzLCBmaWxlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBDbGFzcyhjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aFRva2Vuc0FuZE5vZGUoQ2xhc3MsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCksIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IENsYXNzKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJicmVhayIsImdldENvbnRleHQiLCJsaW5lSW5kZXgiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsIndyaXRlVG9Mb2ciLCJsZXZlbCIsIm1lc3NhZ2UiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByZXBhcmUiLCJ3YXJuaW5nIiwiZGVidWciLCJ2ZXJpZnlGaWxlIiwiY29uc3RyY3V0b3IiLCJmaWxlTm9kZSIsImNvbXBsZXRlIiwiY2xlYXIiLCJpbmZvIiwiZmlsZSIsImZpbmRGaWxlIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwiYWRkUHJvY2VkdXJlcyIsInRvSlNPTiIsImZyb21GaWxlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJnZXRQYXRoIiwicG9wIiwiZmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGgiLCJmcm9tRmlsZVBhdGhUb2tlbnNBbmROb2RlIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7OERBTEQ7eUJBRXVCO29CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUEsWUFDUEMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQ0FEeEJKOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxJQUFJLEdBQUdBOzs7a0JBTktKOztZQVNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU1KLElBQUk7Z0JBQ1IsSUFBTUgsVUFBVSxJQUFJLENBQUNRLFVBQVUsSUFDekJDLFlBQVlDLElBQUFBLHFDQUEwQixFQUFDUCxNQUFNLElBQUksQ0FBQ0QsTUFBTTtnQkFFOURGLFFBQVFPLEtBQUssQ0FBQyxJQUFJLENBQUNOLFFBQVEsRUFBRVE7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxPQUFPO2dCQUN2QixJQUFNYixVQUFVLElBQUksQ0FBQ1EsVUFBVTtnQkFFL0JSLFFBQVFXLFVBQVUsQ0FBQ0MsT0FBT0MsU0FBUyxJQUFJLENBQUNaLFFBQVE7WUFDbEQ7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYVgsSUFBSTtnQkFDZixJQUFNWSxTQUFTRCxJQUFBQSxrQkFBWSxFQUFDWCxNQUFNLElBQUksQ0FBQ0QsTUFBTTtnQkFFN0MsT0FBT2E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxLQUFLO2dCQUNqQixJQUFNRixTQUFTQyxJQUFBQSxtQkFBYSxFQUFDQyxPQUFPLElBQUksQ0FBQ2YsTUFBTTtnQkFFL0MsT0FBT2E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQUksQ0FBQ0MsT0FBTztnQkFFWixJQUFJLElBQUksQ0FBQ2pCLElBQUksS0FBSyxNQUFNO29CQUN0QixJQUFJLENBQUNrQixPQUFPLENBQUMsQUFBQyx5QkFBc0MsT0FBZCxJQUFJLENBQUNwQixRQUFRLEVBQUM7Z0JBQ3RELE9BQU87b0JBQ0wsSUFBSSxDQUFDcUIsS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWQsSUFBSSxDQUFDckIsUUFBUSxFQUFDO29CQUUzQyxJQUFNLEFBQUVzQixhQUFlLElBQUksQ0FBQ0MsV0FBVyxDQUEvQkQsWUFDRnZCLFVBQVUsSUFBSSxFQUNkeUIsV0FBVyxJQUFJLENBQUN0QixJQUFJLEVBQUUsR0FBRztvQkFFL0JnQixXQUFXSSxXQUFXRSxVQUFVekI7b0JBRWhDbUIsV0FDRSxJQUFJLENBQUNPLFFBQVEsS0FDWCxJQUFJLENBQUNDLEtBQUs7b0JBRWQsSUFBSVIsVUFBVTt3QkFDWixJQUFJLENBQUNTLElBQUksQ0FBQyxBQUFDLG9CQUFpQyxPQUFkLElBQUksQ0FBQzNCLFFBQVEsRUFBQztvQkFDOUM7Z0JBQ0Y7Z0JBRUEsT0FBT2tCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxJQUFJLENBQUNsQixNQUFNLEtBQUssTUFBTTtvQkFDeEI7Z0JBQ0Y7Z0JBRUEsSUFBTTJCLE9BQU8sSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDN0IsUUFBUSxHQUNsQzhCLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxTQUFTLElBQUksQ0FBQ0MsU0FBUyxJQUN2QkMsVUFBVU4sS0FBS08sVUFBVTtnQkFFL0IsSUFBSSxDQUFDbEMsTUFBTSxHQUFHNkIsTUFBTU0sUUFBUSxDQUFDRjtnQkFFN0IsSUFBSSxDQUFDaEMsSUFBSSxHQUFHOEIsT0FBT0ssS0FBSyxDQUFDLElBQUksQ0FBQ3BDLE1BQU07WUFDdEM7OztZQUVBcUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLElBQUk7Z0JBQ2IsSUFBTSxBQUFFTCxVQUFZSyxLQUFaTCxTQUNGSixRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsU0FBUyxJQUFJLENBQUNDLFNBQVM7Z0JBRTdCLElBQUksQ0FBQ2hDLE1BQU0sR0FBRzZCLE1BQU1NLFFBQVEsQ0FBQ0Y7Z0JBRTdCLElBQUksQ0FBQ2hDLElBQUksR0FBRzhCLE9BQU9LLEtBQUssQ0FBQyxJQUFJLENBQUNwQyxNQUFNO2dCQUVwQyxJQUFJLENBQUN5QixLQUFLO2dCQUVWLElBQUksQ0FBQ2MsYUFBYTtZQUNwQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNYixPQUFPLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQzdCLFFBQVEsR0FDbENBLFdBQVcsSUFBSSxDQUFDQSxRQUFRLEVBQ3hCa0MsVUFBVU4sS0FBS08sVUFBVSxJQUN6QkksT0FBTztvQkFDTHZDLFVBQUFBO29CQUNBa0MsU0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0s7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxLQUFLLEVBQUVmLElBQUk7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdnQixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQ2hELElBQU01QyxXQUFXNEIsS0FBS2lCLE9BQU8sSUFDdkI1QyxTQUFTLE1BQ1RDLE9BQU8sTUFDUEgsVUFBVTZDLG1CQUFtQkUsR0FBRyxJQUNoQ0MsY0FBYyxXQUFJSixPQUFKO29CQUFVNUM7b0JBQVNDO29CQUFVQztvQkFBUUM7aUJBQTRCLENBQWpFLE9BQTJDLHFCQUFHMEM7Z0JBRWxFLE9BQU9HO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhTCxLQUFLLEVBQUUzQyxRQUFRO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHNEMscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O2dCQUN4RCxJQUFNM0MsU0FBUyxNQUNUQyxPQUFPLE1BQ1BILFVBQVU2QyxtQkFBbUJFLEdBQUcsSUFDaENDLGNBQWMsV0FBSUosT0FBSjtvQkFBVTVDO29CQUFTQztvQkFBVUM7b0JBQVFDO2lCQUE0QixDQUFqRSxPQUEyQyxxQkFBRzBDO2dCQUVsRSxPQUFPRztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCTixLQUFLLEVBQUUzQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBRzBDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDbkYsSUFBTTdDLFVBQVU2QyxtQkFBbUJFLEdBQUcsSUFDaENDLGNBQWMsV0FBSUosT0FBSjtvQkFBVTVDO29CQUFTQztvQkFBVUM7b0JBQVFDO2lCQUE0QixDQUFqRSxPQUEyQyxxQkFBRzBDO2dCQUVsRSxPQUFPRztZQUNUOzs7V0EzSW1CakQ7RUFBb0JvRCxnQkFBTyJ9
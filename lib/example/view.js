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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamlexers = require("occam-lexers");
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("./view/input/ruleName"));
var _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries, lexerFromRules = _occamlexers.lexerUtilities.lexerFromRules, rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRulesAndStartRuleName = _occamparsers.parserUtilities.parserFromRulesAndStartRuleName;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            _this.clearTokens();
            _this.clearParseTree();
            var tokens = _this.getTokens(), parseTree = _this.getParseTree(tokens);
            _this.setTokens(tokens);
            _this.setParseTree(parseTree);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "getTokens",
            value: function getTokens() {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_index.FurtleLexer, rules), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
                return tokens;
            }
        },
        {
            key: "getParseTree",
            value: function getParseTree(tokens) {
                var parseTree = null;
                var bnf = this.getBNF();
                var rules;
                rules = rulesFromBNF(bnf);
                rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
                var ruleName = this.getRuleName(), startRuleName = ruleName, furtleParser = parserFromRulesAndStartRuleName(_index.FurtleParser, rules, startRuleName), parser = furtleParser, node = parser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var bnf = _index.FurtleParser.bnf, entries = _index.FurtleLexer.entries, initialContent = this.constructor.initialContent, content = initialContent, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialContent", 'Node* termNode, statementNode; Boolean* bound = false;\n  \nString variableName = variableNameFromTermNode(termNode);\n\nIf (variableName == null) {\n  Break;\n}\n\nNodes statementNodes = nodesQuery(statementNode, //statement);\n\nForEach(statementNodes, (Node statementNode) {\n  String boundVariableName = boundVariableNameFromStatementNode(statementNode); \n  \n  If (boundVariableName == variableName) {\n    bound = true;\n    \n    Break;\n  }\n});\n  \n  \nString variableNameFromTermNode(Node termNode) {\n  String variableName = null;\n  \n  Node variableNameTerminalNode = nodeQuery(termNode, /term/variable/@name);\n  \n  If (variableNameTerminalNode != null) {\n    String content;\n    \n    { content } = variableNameTerminalNode;\n    \n    variableName = content;\n  }\n  \n  Return variableName;\n}\n\nString boundVariableNameFromStatementNode(Node statementNode) {\n  String boundVariableName = null;\n  \n  Nodes childNodes;\n  \n  { childNodes } = statementNode;\n  \n  Node firstChildNode;\n\n  [ firstChildNode ] = childNodes;\n  \n  Boolean firstChildNodeTerminalNode = isTerminalNode(firstChildNode);\n  \n  If (firstChildNodeTerminalNode) {\n    Node terminalNode = firstChildNode;\n    \n    String content;\n    \n    { content } = firstChildNode;\n    \n    If ((content == "∀") || (content == "∃")) {\n      Node secondChildNode;\n      \n      [ _, secondChildNode ] = childNodes;\n      \n      Node argumentNode = secondChildNode;\n      \n      Node boundVariableNameTerminalNode = nodeQuery(argumentNode, /argument/term/variable/@name);\n      \n      If (boundVariableNameTerminalNode != null) {\n        { content } = boundVariableNameTerminalNode;\n        \n        boundVariableName = content;\n      }\n    }\n  }\n    \n  Return boundVariableName;\n}\n');
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbGV4ZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgRnVydGxlTGV4ZXIsIEZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgUnVsZU5hbWVJbnB1dCBmcm9tIFwiLi92aWV3L2lucHV0L3J1bGVOYW1lXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21FbnRyaWVzLCBsZXhlckZyb21SdWxlcyB9ID0gbGV4ZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcblxuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGZ1cnRsZUxleGVyID0gbGV4ZXJGcm9tUnVsZXMoRnVydGxlTGV4ZXIsIHJ1bGVzKSxcbiAgICAgICAgICBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCk7XG5cbiAgICBsZXQgcnVsZXM7XG5cbiAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKEZ1cnRsZVBhcnNlciwgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgLy8vXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgYm5mIH0gPSBGdXJ0bGVQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBGdXJ0bGVMZXhlcixcbiAgICAgICAgICB7IGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgTm9kZSogdGVybU5vZGUsIHN0YXRlbWVudE5vZGU7IEJvb2xlYW4qIGJvdW5kID0gZmFsc2U7XG4gIFxuU3RyaW5nIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbklmICh2YXJpYWJsZU5hbWUgPT0gbnVsbCkge1xuICBCcmVhaztcbn1cblxuTm9kZXMgc3RhdGVtZW50Tm9kZXMgPSBub2Rlc1F1ZXJ5KHN0YXRlbWVudE5vZGUsIC8vc3RhdGVtZW50KTtcblxuRm9yRWFjaChzdGF0ZW1lbnROb2RlcywgKE5vZGUgc3RhdGVtZW50Tm9kZSkge1xuICBTdHJpbmcgYm91bmRWYXJpYWJsZU5hbWUgPSBib3VuZFZhcmlhYmxlTmFtZUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyBcbiAgXG4gIElmIChib3VuZFZhcmlhYmxlTmFtZSA9PSB2YXJpYWJsZU5hbWUpIHtcbiAgICBib3VuZCA9IHRydWU7XG4gICAgXG4gICAgQnJlYWs7XG4gIH1cbn0pO1xuICBcbiAgXG5TdHJpbmcgdmFyaWFibGVOYW1lRnJvbVRlcm1Ob2RlKE5vZGUgdGVybU5vZGUpIHtcbiAgU3RyaW5nIHZhcmlhYmxlTmFtZSA9IG51bGw7XG4gIFxuICBOb2RlIHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IG5vZGVRdWVyeSh0ZXJtTm9kZSwgL3Rlcm0vdmFyaWFibGUvQG5hbWUpO1xuICBcbiAgSWYgKHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSAhPSBudWxsKSB7XG4gICAgU3RyaW5nIGNvbnRlbnQ7XG4gICAgXG4gICAgeyBjb250ZW50IH0gPSB2YXJpYWJsZU5hbWVUZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgdmFyaWFibGVOYW1lID0gY29udGVudDtcbiAgfVxuICBcbiAgUmV0dXJuIHZhcmlhYmxlTmFtZTtcbn1cblxuU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lRnJvbVN0YXRlbWVudE5vZGUoTm9kZSBzdGF0ZW1lbnROb2RlKSB7XG4gIFN0cmluZyBib3VuZFZhcmlhYmxlTmFtZSA9IG51bGw7XG4gIFxuICBOb2RlcyBjaGlsZE5vZGVzO1xuICBcbiAgeyBjaGlsZE5vZGVzIH0gPSBzdGF0ZW1lbnROb2RlO1xuICBcbiAgTm9kZSBmaXJzdENoaWxkTm9kZTtcblxuICBbIGZpcnN0Q2hpbGROb2RlIF0gPSBjaGlsZE5vZGVzO1xuICBcbiAgQm9vbGVhbiBmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IGlzVGVybWluYWxOb2RlKGZpcnN0Q2hpbGROb2RlKTtcbiAgXG4gIElmIChmaXJzdENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIE5vZGUgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGU7XG4gICAgXG4gICAgU3RyaW5nIGNvbnRlbnQ7XG4gICAgXG4gICAgeyBjb250ZW50IH0gPSBmaXJzdENoaWxkTm9kZTtcbiAgICBcbiAgICBJZiAoKGNvbnRlbnQgPT0gXCLiiIBcIikgfHwgKGNvbnRlbnQgPT0gXCLiiINcIikpIHtcbiAgICAgIE5vZGUgc2Vjb25kQ2hpbGROb2RlO1xuICAgICAgXG4gICAgICBbIF8sIHNlY29uZENoaWxkTm9kZSBdID0gY2hpbGROb2RlcztcbiAgICAgIFxuICAgICAgTm9kZSBhcmd1bWVudE5vZGUgPSBzZWNvbmRDaGlsZE5vZGU7XG4gICAgICBcbiAgICAgIE5vZGUgYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGUgPSBub2RlUXVlcnkoYXJndW1lbnROb2RlLCAvYXJndW1lbnQvdGVybS92YXJpYWJsZS9AbmFtZSk7XG4gICAgICBcbiAgICAgIElmIChib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHsgY29udGVudCB9ID0gYm91bmRWYXJpYWJsZU5hbWVUZXJtaW5hbE5vZGU7XG4gICAgICAgIFxuICAgICAgICBib3VuZFZhcmlhYmxlTmFtZSA9IGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICAgXG4gIFJldHVybiBib3VuZFZhcmlhYmxlTmFtZTtcbn1cbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21FbnRyaWVzIiwibGV4ZXJVdGlsaXRpZXMiLCJsZXhlckZyb21SdWxlcyIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2xlYXJUb2tlbnMiLCJjbGVhclBhcnNlVHJlZSIsInRva2VucyIsImdldFRva2VucyIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwicnVsZXMiLCJmdXJ0bGVMZXhlciIsIkZ1cnRsZUxleGVyIiwibGV4ZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwiYm5mIiwiZ2V0Qk5GIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzdGFydFJ1bGVOYW1lIiwiZnVydGxlUGFyc2VyIiwiRnVydGxlUGFyc2VyIiwicGFyc2VyIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJSdWxlTmFtZUlucHV0Iiwib25LZXlVcCIsIkNvbnRlbnRUZXh0YXJlYSIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNvbnN0cnVjdG9yIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBME5BOzs7ZUFBQTs7O29FQXhOc0I7b0JBRUU7MkJBQ087NEJBQ0M7cUNBQ087cUJBQ0c7MEJBQzBCO2lFQUU3QzsrREFDQzswREFDQTsrREFDRTs2REFDQzs4REFDQztnRUFDRTtxRUFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQSxtQkFBcUNDLDJCQUFjLENBQW5ERCxrQkFBa0JFLGlCQUFtQkQsMkJBQWMsQ0FBakNDLGdCQUNsQkMsZUFBa0RDLDZCQUFlLENBQWpFRCxjQUFjRSxrQ0FBb0NELDZCQUFlLENBQW5EQztBQUV0QixJQUFBLEFBQU1DLHFCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLGtCQUNKQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FB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
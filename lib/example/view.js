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
var _occamgrammars = require("occam-grammars");
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
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, rules = rulesFromEntries(entries), furtleLexer = lexerFromRules(_occamgrammars.FurtleLexer, rules), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
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
                var ruleName = this.getRuleName(), startRuleName = ruleName, furtleParser = parserFromRulesAndStartRuleName(_occamgrammars.FurtleParser, rules, startRuleName), parser = furtleParser, node = parser.parse(tokens);
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
                var bnf = _occamgrammars.FurtleParser.bnf, entries = _occamgrammars.FurtleLexer.entries, initialContent = this.constructor.initialContent, content = initialContent, lexicalEntries = entries; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbGV4ZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgRnVydGxlTGV4ZXIsIEZ1cnRsZVBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvcnVsZU5hbWVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUVudHJpZXMsIGxleGVyRnJvbVJ1bGVzIH0gPSBsZXhlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgZnVydGxlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhGdXJ0bGVMZXhlciwgcnVsZXMpLFxuICAgICAgICAgIGxleGVyID0gZnVydGxlTGV4ZXIsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKTtcblxuICAgIGxldCBydWxlcztcblxuICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gcnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGZ1cnRsZVBhcnNlciA9IHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUoRnVydGxlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBibmYgfSA9IEZ1cnRsZVBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IEZ1cnRsZUxleGVyLFxuICAgICAgICAgIHsgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBOb2RlKiB0ZXJtTm9kZSwgc3RhdGVtZW50Tm9kZTsgQm9vbGVhbiogYm91bmQgPSBmYWxzZTtcbiAgXG5TdHJpbmcgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuSWYgKHZhcmlhYmxlTmFtZSA9PSBudWxsKSB7XG4gIEJyZWFrO1xufVxuXG5Ob2RlcyBzdGF0ZW1lbnROb2RlcyA9IG5vZGVzUXVlcnkoc3RhdGVtZW50Tm9kZSwgLy9zdGF0ZW1lbnQpO1xuXG5Gb3JFYWNoKHN0YXRlbWVudE5vZGVzLCAoTm9kZSBzdGF0ZW1lbnROb2RlKSB7XG4gIFN0cmluZyBib3VuZFZhcmlhYmxlTmFtZSA9IGJvdW5kVmFyaWFibGVOYW1lRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IFxuICBcbiAgSWYgKGJvdW5kVmFyaWFibGVOYW1lID09IHZhcmlhYmxlTmFtZSkge1xuICAgIGJvdW5kID0gdHJ1ZTtcbiAgICBcbiAgICBCcmVhaztcbiAgfVxufSk7XG4gIFxuICBcblN0cmluZyB2YXJpYWJsZU5hbWVGcm9tVGVybU5vZGUoTm9kZSB0ZXJtTm9kZSkge1xuICBTdHJpbmcgdmFyaWFibGVOYW1lID0gbnVsbDtcbiAgXG4gIE5vZGUgdmFyaWFibGVOYW1lVGVybWluYWxOb2RlID0gbm9kZVF1ZXJ5KHRlcm1Ob2RlLCAvdGVybS92YXJpYWJsZS9AbmFtZSk7XG4gIFxuICBJZiAodmFyaWFibGVOYW1lVGVybWluYWxOb2RlICE9IG51bGwpIHtcbiAgICBTdHJpbmcgY29udGVudDtcbiAgICBcbiAgICB7IGNvbnRlbnQgfSA9IHZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICB2YXJpYWJsZU5hbWUgPSBjb250ZW50O1xuICB9XG4gIFxuICBSZXR1cm4gdmFyaWFibGVOYW1lO1xufVxuXG5TdHJpbmcgYm91bmRWYXJpYWJsZU5hbWVGcm9tU3RhdGVtZW50Tm9kZShOb2RlIHN0YXRlbWVudE5vZGUpIHtcbiAgU3RyaW5nIGJvdW5kVmFyaWFibGVOYW1lID0gbnVsbDtcbiAgXG4gIE5vZGVzIGNoaWxkTm9kZXM7XG4gIFxuICB7IGNoaWxkTm9kZXMgfSA9IHN0YXRlbWVudE5vZGU7XG4gIFxuICBOb2RlIGZpcnN0Q2hpbGROb2RlO1xuXG4gIFsgZmlyc3RDaGlsZE5vZGUgXSA9IGNoaWxkTm9kZXM7XG4gIFxuICBCb29sZWFuIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gaXNUZXJtaW5hbE5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuICBcbiAgSWYgKGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlKSB7XG4gICAgTm9kZSB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZTtcbiAgICBcbiAgICBTdHJpbmcgY29udGVudDtcbiAgICBcbiAgICB7IGNvbnRlbnQgfSA9IGZpcnN0Q2hpbGROb2RlO1xuICAgIFxuICAgIElmICgoY29udGVudCA9PSBcIuKIgFwiKSB8fCAoY29udGVudCA9PSBcIuKIg1wiKSkge1xuICAgICAgTm9kZSBzZWNvbmRDaGlsZE5vZGU7XG4gICAgICBcbiAgICAgIFsgXywgc2Vjb25kQ2hpbGROb2RlIF0gPSBjaGlsZE5vZGVzO1xuICAgICAgXG4gICAgICBOb2RlIGFyZ3VtZW50Tm9kZSA9IHNlY29uZENoaWxkTm9kZTtcbiAgICAgIFxuICAgICAgTm9kZSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZSA9IG5vZGVRdWVyeShhcmd1bWVudE5vZGUsIC9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlL0BuYW1lKTtcbiAgICAgIFxuICAgICAgSWYgKGJvdW5kVmFyaWFibGVOYW1lVGVybWluYWxOb2RlICE9IG51bGwpIHtcbiAgICAgICAgeyBjb250ZW50IH0gPSBib3VuZFZhcmlhYmxlTmFtZVRlcm1pbmFsTm9kZTtcbiAgICAgICAgXG4gICAgICAgIGJvdW5kVmFyaWFibGVOYW1lID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgICBcbiAgUmV0dXJuIGJvdW5kVmFyaWFibGVOYW1lO1xufVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gXG5gO1xuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlclV0aWxpdGllcyIsImxleGVyRnJvbVJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJydWxlcyIsImZ1cnRsZUxleGVyIiwiRnVydGxlTGV4ZXIiLCJsZXhlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJibmYiLCJnZXRCTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInN0YXJ0UnVsZU5hbWUiLCJmdXJ0bGVQYXJzZXIiLCJGdXJ0bGVQYXJzZXIiLCJwYXJzZXIiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIlJ1bGVOYW1lSW5wdXQiLCJvbktleVVwIiwiQ29udGVudFRleHRhcmVhIiwiVG9rZW5zVGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiQk5GVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiY29uc3RydWN0b3IiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwTkE7OztlQUFBOzs7b0VBeE5zQjtvQkFFRTsyQkFDTzs0QkFDQztxQ0FDTzs2QkFDRzswQkFDMEI7aUVBRTdDOytEQUNDOzBEQUNBOytEQUNFOzZEQUNDOzhEQUNDO2dFQUNFO3FFQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFBLG1CQUFxQ0MsMkJBQWMsQ0FBbkRELGtCQUFrQkUsaUJBQW1CRCwyQkFBYyxDQUFqQ0MsZ0JBQ2xCQyxlQUFrREMsNkJBQWUsQ0FBakVELGNBQWNFLGtDQUFvQ0QsNkJBQWUsQ0FBbkRDO0FBRXRCLElBQUEsQUFBTUMscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSxnQkFBZSxTQUFDQyxP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
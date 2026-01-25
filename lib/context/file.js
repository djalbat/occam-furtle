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
var _necessary = require("necessary");
var _constants = require("../constants");
var _verify = require("../process/verify");
var _furtle = require("../utilities/furtle");
var _node = require("../utilities/node");
var _context = require("../utilities/context");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var push = _necessary.arrayUtilities.push, _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var FileContext = /*#__PURE__*/ function() {
    function FileContext(context, filePath, lineIndex, node, tokens, procedures) {
        _class_call_check(this, FileContext);
        this.context = context;
        this.filePath = filePath;
        this.lineIndex = lineIndex;
        this.node = node;
        this.tokens = tokens;
        this.procedures = procedures;
        return (0, _context.chainContext)(this);
    }
    _create_class(FileContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getLineIndex",
            value: function getLineIndex() {
                return this.lineIndex;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
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
            key: "getMetavariables",
            value: function getMetavariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
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
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                return variables;
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
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = TRACE_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = DEBUG_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = INFO_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = WARNING_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = ERROR_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message, node) {
                var lineIndex = (0, _context.lineIndexFromNodeAndTokens)(node, this.tokens, this.lineIndex), filePath = lineIndex === null ? this.filePath : null;
                this.context.writeToLog(level, message, filePath, lineIndex);
                this.lineIndex = lineIndex;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this; ///
                return fileContext;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
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
                    var context = this, fileNode = this.node; ///
                    verifies = (0, _verify.verifyFile)(fileNode, context);
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
            key: "clear",
            value: function clear() {
                this.lineIndex = null;
                this.procedures = [];
            }
        },
        {
            key: "complete",
            value: function complete() {
                this.lineIndex = null;
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
            value: function fromFile(file, context) {
                var filePath = file.getPath(), lineIndex = null, tokens = null, node = null, procedures = [], fileContext = new FileContext(context, filePath, lineIndex, node, tokens, procedures);
                return fileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath, context) {
                var lineIndex = null, tokens = null, node = null, procedures = null, fileContext = new FileContext(context, filePath, lineIndex, node, tokens, procedures);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBMRVZFTFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBmdXJ0bGVMZXhlciwgZnVydGxlUGFyc2VyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mdXJ0bGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuaW1wb3J0IHsgY2hhaW5Db250ZXh0LCBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgWyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMIF0gPSBMRVZFTFM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCwgbm9kZSwgdG9rZW5zLCBwcm9jZWR1cmVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0TGluZUluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxpbmVJbmRleDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHB1c2gocHJvY2VkdXJlcywgdGhpcy5wcm9jZWR1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gdGhpcy5jb250ZXh0LmdldFByb2NlZHVyZXMoKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGFkZFByb2NlZHVyZShwcm9jZWR1cmUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUpO1xuXG4gICAgdGhpcy5kZWJ1ZyhgQWRkZWQgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZSB0byB0aGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIG5vZGUpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBub2RlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IElORk9fTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIG5vZGUpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgbm9kZSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIG5vZGUpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgbm9kZSkge1xuICAgIGNvbnN0IGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCksXG4gICAgICAgICAgZmlsZVBhdGggPSAobGluZUluZGV4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZVBhdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICB0aGlzLmNvbnRleHQud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBsZXQgZGVwdGggPSB0aGlzLmNvbnRleHQuZ2V0RGVwdGgoKTtcblxuICAgIGRlcHRoKys7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGZpbGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgP1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCkgOlxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMucHJvY2VkdXJlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBudWxsO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuYWRkUHJvY2VkdXJlcygpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCBub2RlLCB0b2tlbnMsIHByb2NlZHVyZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgY29udGV4dCkge1xuICAgIGNvbnN0IGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVzID0gbnVsbCxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCBub2RlLCB0b2tlbnMsIHByb2NlZHVyZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJMRVZFTFMiLCJUUkFDRV9MRVZFTCIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsImNvbnRleHQiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9jZWR1cmVzIiwiY2hhaW5Db250ZXh0IiwiZ2V0Q29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0TGluZUluZGV4IiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldExleGVyIiwibGV4ZXIiLCJmdXJ0bGVMZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImZ1cnRsZVBhcnNlciIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImFkZFByb2NlZHVyZSIsInByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsImRlYnVnIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVzIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJ3cml0ZVRvTG9nIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByZXBhcmUiLCJmaWxlTm9kZSIsInZlcmlmeUZpbGUiLCJjb21wbGV0ZSIsImNsZWFyIiwiZmlsZSIsImZpbmRGaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJhZGRQcm9jZWR1cmVzIiwidG9KU09OIiwiZnJvbUZpbGUiLCJnZXRQYXRoIiwiZnJvbUZpbGVQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTt5QkFFUjtzQkFDSTtzQkFDZTtvQkFDRTt1QkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ3FFRSwyQkFBQUEsaUJBQU0sTUFBM0VDLGNBQXFFRCxZQUF4REUsY0FBd0RGLFlBQTNDRyxhQUEyQ0gsWUFBL0JJLGdCQUErQkosWUFBaEJLLGNBQWdCTDtBQUU5RCxJQUFBLEFBQU1ILDRCQUFOO2FBQU1BLFlBQ1BTLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxVQUFVO2dDQUQvQ2Q7UUFFakIsSUFBSSxDQUFDUyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFFbEIsT0FBT0MsSUFBQUEscUJBQVksRUFBQyxJQUFJOztrQkFUUGY7O1lBWW5CZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxPQUFPO1lBQ3JCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxRQUFRO1lBQ3RCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxTQUFTO1lBQ3ZCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxJQUFJO1lBQ2xCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVFDLG1CQUFXLEVBQUcsR0FBRztnQkFFL0IsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTQyxvQkFBWSxFQUFHLEdBQUc7Z0JBRWpDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVDLGlCQUFBQSxpRUFBaUI7Z0JBQ3pCLElBQU1DLFNBQVMsRUFBRTtnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBU0YsaUJBQUFBLGlFQUFpQjtnQkFDeEIsSUFBTUcsUUFBUSxFQUFFO2dCQUVoQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFTSixpQkFBQUEsaUVBQWlCO2dCQUN4QixJQUFNSyxRQUFRLEVBQUU7Z0JBRWhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVOLGlCQUFBQSxpRUFBaUI7Z0JBQ3pCLElBQU1PLFNBQVMsRUFBRTtnQkFFakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBVVIsaUJBQUFBLGlFQUFpQjtnQkFDekIsSUFBTVMsU0FBUyxFQUFFO2dCQUVqQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFZVixpQkFBQUEsaUVBQWlCO2dCQUMzQixJQUFNVyxXQUFXLEVBQUU7Z0JBRW5CLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWNaLGlCQUFBQSxpRUFBaUI7Z0JBQzdCLElBQU1kLGFBQWEsRUFBRTtnQkFFckJiLEtBQUthLFlBQVksSUFBSSxDQUFDQSxVQUFVO2dCQUVoQyxJQUFJYyxnQkFBZ0I7b0JBQ2xCLElBQU1hLDJCQUEyQixJQUFJLENBQUNoQyxPQUFPLENBQUMrQixhQUFhO29CQUUzRHZDLEtBQUthLFlBQVkyQjtnQkFDbkI7Z0JBRUEsT0FBTzNCO1lBQ1Q7OztZQUVBNEIsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFjZCxpQkFBQUEsaUVBQWlCO2dCQUM3QixJQUFNZSxhQUFhLEVBQUU7Z0JBRXJCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWVoQixpQkFBQUEsaUVBQWlCO2dCQUM5QixJQUFNaUIsY0FBYyxFQUFFO2dCQUV0QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFlbEIsaUJBQUFBLGlFQUFpQjtnQkFDOUIsSUFBTW1CLGNBQWMsRUFBRTtnQkFFdEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZ0JwQixpQkFBQUEsaUVBQWlCO2dCQUMvQixJQUFNcUIsZUFBZSxFQUFFO2dCQUV2QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFnQnRCLGlCQUFBQSxpRUFBaUI7Z0JBQy9CLElBQU11QixlQUFlLEVBQUU7Z0JBRXZCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWdCeEIsaUJBQUFBLGlFQUFpQjtnQkFDL0IsSUFBTXlCLGVBQWUsRUFBRTtnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBaUIxQixpQkFBQUEsaUVBQWlCO2dCQUNoQyxJQUFNMkIsZ0JBQWdCLEVBQUU7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsa0JBQWtCRCxVQUFVRSxTQUFTO2dCQUUzQyxJQUFJLENBQUM3QyxVQUFVLENBQUNiLElBQUksQ0FBQ3dEO2dCQUVyQixJQUFJLENBQUNHLEtBQUssQ0FBQyxBQUFDLGNBQTZCLE9BQWhCRixpQkFBZ0I7WUFDM0M7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxFQUFFO2dCQUVwQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFuRCxJQUFJO2dCQUNmLElBQU1vRCxTQUFTRCxJQUFBQSxrQkFBWSxFQUFDbkQsTUFBTSxJQUFJLENBQUNDLE1BQU07Z0JBRTdDLE9BQU9tRDtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLEtBQUs7Z0JBQ2pCLElBQU1GLFNBQVNDLElBQUFBLG1CQUFhLEVBQUNDLE9BQU8sSUFBSSxDQUFDckQsTUFBTTtnQkFFL0MsT0FBT21EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsT0FBTztvQkFBRXhELE9BQUFBLGlFQUFPO2dCQUNwQixJQUFNeUQsUUFBUWpFO2dCQUVkLElBQUksQ0FBQ2tFLFVBQVUsQ0FBQ0QsT0FBT0QsU0FBU3hEO1lBQ2xDOzs7WUFFQWdELEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNUSxPQUFPO29CQUFFeEQsT0FBQUEsaUVBQU87Z0JBQ3BCLElBQU15RCxRQUFRaEU7Z0JBRWQsSUFBSSxDQUFDaUUsVUFBVSxDQUFDRCxPQUFPRCxTQUFTeEQ7WUFDbEM7OztZQUVBMkQsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtILE9BQU87b0JBQUV4RCxPQUFBQSxpRUFBTztnQkFDbkIsSUFBTXlELFFBQVEvRDtnQkFFZCxJQUFJLENBQUNnRSxVQUFVLENBQUNELE9BQU9ELFNBQVN4RDtZQUNsQzs7O1lBRUE0RCxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUosT0FBTztvQkFBRXhELE9BQUFBLGlFQUFPO2dCQUN0QixJQUFNeUQsUUFBUTlEO2dCQUVkLElBQUksQ0FBQytELFVBQVUsQ0FBQ0QsT0FBT0QsU0FBU3hEO1lBQ2xDOzs7WUFFQTZELEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNTCxPQUFPO29CQUFFeEQsT0FBQUEsaUVBQU87Z0JBQ3BCLElBQU15RCxRQUFRN0Q7Z0JBRWQsSUFBSSxDQUFDOEQsVUFBVSxDQUFDRCxPQUFPRCxTQUFTeEQ7WUFDbEM7OztZQUVBMEQsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdELEtBQUssRUFBRUQsT0FBTyxFQUFFeEQsSUFBSTtnQkFDN0IsSUFBTUQsWUFBWStELElBQUFBLG1DQUEwQixFQUFDOUQsTUFBTSxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJLENBQUNGLFNBQVMsR0FDeEVELFdBQVcsQUFBQ0MsY0FBYyxPQUNiLElBQUksQ0FBQ0QsUUFBUSxHQUNYO2dCQUVyQixJQUFJLENBQUNELE9BQU8sQ0FBQzZELFVBQVUsQ0FBQ0QsT0FBT0QsU0FBUzFELFVBQVVDO2dCQUVsRCxJQUFJLENBQUNBLFNBQVMsR0FBR0E7WUFDbkI7OztZQUVBZ0UsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxFQUFFLEdBQUc7Z0JBRTdCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsUUFBUSxJQUFJLENBQUNyRSxPQUFPLENBQUNvRSxRQUFRO2dCQUVqQ0M7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQUksQ0FBQ0MsT0FBTztnQkFFWixJQUFJLElBQUksQ0FBQ3JFLElBQUksS0FBSyxNQUFNO29CQUN0QixJQUFJLENBQUM0RCxPQUFPLENBQUMsQUFBQyx5QkFBc0MsT0FBZCxJQUFJLENBQUM5RCxRQUFRLEVBQUM7Z0JBQ3RELE9BQU87b0JBQ0wsSUFBSSxDQUFDa0QsS0FBSyxDQUFDLEFBQUMsa0JBQStCLE9BQWQsSUFBSSxDQUFDbEQsUUFBUSxFQUFDO29CQUUzQyxJQUFNRCxVQUFVLElBQUksRUFDZHlFLFdBQVcsSUFBSSxDQUFDdEUsSUFBSSxFQUFFLEdBQUc7b0JBRS9Cb0UsV0FBV0csSUFBQUEsa0JBQVUsRUFBQ0QsVUFBVXpFO29CQUVoQ3VFLFdBQ0UsSUFBSSxDQUFDSSxRQUFRLEtBQ1gsSUFBSSxDQUFDQyxLQUFLO29CQUVkLElBQUlMLFVBQVU7d0JBQ1osSUFBSSxDQUFDVCxJQUFJLENBQUMsQUFBQyxvQkFBaUMsT0FBZCxJQUFJLENBQUM3RCxRQUFRLEVBQUM7b0JBQzlDO2dCQUNGO2dCQUVBLE9BQU9zRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFBSSxDQUFDcEUsTUFBTSxLQUFLLE1BQU07b0JBQ3hCO2dCQUNGO2dCQUVBLElBQU15RSxPQUFPLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQzdFLFFBQVEsR0FDbENZLFFBQVEsSUFBSSxDQUFDRCxRQUFRLElBQ3JCSSxTQUFTLElBQUksQ0FBQ0QsU0FBUyxJQUN2QmdFLFVBQVVGLEtBQUtHLFVBQVU7Z0JBRS9CLElBQUksQ0FBQzVFLE1BQU0sR0FBR1MsTUFBTW9FLFFBQVEsQ0FBQ0Y7Z0JBRTdCLElBQUksQ0FBQzVFLElBQUksR0FBR2EsT0FBT2tFLEtBQUssQ0FBQyxJQUFJLENBQUM5RSxNQUFNO1lBQ3RDOzs7WUFFQXdFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUMxRSxTQUFTLEdBQUc7Z0JBRWpCLElBQUksQ0FBQ0csVUFBVSxHQUFHLEVBQUU7WUFDdEI7OztZQUVBc0UsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ3pFLFNBQVMsR0FBRztZQUNuQjs7O1lBRUFpRixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFNLEFBQUVMLFVBQVlLLEtBQVpMLFNBQ0ZsRSxRQUFRLElBQUksQ0FBQ0QsUUFBUSxJQUNyQkksU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUksQ0FBQ1gsTUFBTSxHQUFHUyxNQUFNb0UsUUFBUSxDQUFDRjtnQkFFN0IsSUFBSSxDQUFDNUUsSUFBSSxHQUFHYSxPQUFPa0UsS0FBSyxDQUFDLElBQUksQ0FBQzlFLE1BQU07Z0JBRXBDLElBQUksQ0FBQ3dFLEtBQUs7Z0JBRVYsSUFBSSxDQUFDUyxhQUFhO1lBQ3BCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULE9BQU8sSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDN0UsUUFBUSxHQUNsQ0EsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEI4RSxVQUFVRixLQUFLRyxVQUFVLElBQ3pCSSxPQUFPO29CQUNMbkYsVUFBQUE7b0JBQ0E4RSxTQUFBQTtnQkFDRjtnQkFFTixPQUFPSztZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNWLElBQUksRUFBRTdFLE9BQU87Z0JBQzNCLElBQU1DLFdBQVc0RSxLQUFLVyxPQUFPLElBQ3ZCdEYsWUFBWSxNQUNaRSxTQUFTLE1BQ1RELE9BQU8sTUFDUEUsYUFBYSxFQUFFLEVBQ2Y4RCxjQUFjLElBN1NINUUsWUE2U21CUyxTQUFTQyxVQUFVQyxXQUFXQyxNQUFNQyxRQUFRQztnQkFFaEYsT0FBTzhEO1lBQ1Q7OztZQUVPc0IsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYXhGLFFBQVEsRUFBRUQsT0FBTztnQkFDbkMsSUFBTUUsWUFBWSxNQUNaRSxTQUFTLE1BQ1RELE9BQU8sTUFDUEUsYUFBYSxNQUNiOEQsY0FBYyxJQXZUSDVFLFlBdVRtQlMsU0FBU0MsVUFBVUMsV0FBV0MsTUFBTUMsUUFBUUM7Z0JBRWhGLE9BQU84RDtZQUNUOzs7V0ExVG1CNUUifQ==
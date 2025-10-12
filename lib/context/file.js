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
var _occamgrammars = require("occam-grammars");
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _query = require("../utilities/query");
var _string = require("../utilities/string");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push, furtleLexerFromNothing = _occamgrammars.lexersUtilities.furtleLexerFromNothing, furtleParserFromNothing = _occamgrammars.parsersUtilities.furtleParserFromNothing;
var furtleLexer = furtleLexerFromNothing(), furtleParser = furtleParserFromNothing();
var errorNodesQuery = (0, _query.nodesQuery)("/document/error"), procedureDeclarationNodesQuery = (0, _query.nodesQuery)("/document/procedureDeclaration");
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, node, tokens, procedures) {
        _class_call_check(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.node = node;
        this.tokens = tokens;
        this.procedures = procedures;
    }
    _create_class(FileContext, [
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.releaseContext;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
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
                var lexer = furtleLexer; ///
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var parser = furtleParser; ///
                return parser;
            }
        },
        {
            key: "getMetaTypes",
            value: function getMetaTypes() {
                return this.releaseContext.getMetaTypes();
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
                    var releaseContextProcedures = this.releaseContext.getProcedures();
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
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                return variables;
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                return this.releaseContext.findFile(filePath);
            }
        },
        {
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                return this.releaseContext.findProcedureByReference(reference);
            }
        },
        {
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                return this.releaseContext.isProcedurePresentByReference(reference);
            }
        },
        {
            key: "addProcedures",
            value: function addProcedures() {
                var _this = this;
                var context = this; ///
                var ProcedureDeclaration = _dom.default.ProcedureDeclaration, procedureDeclarationNodes = procedureDeclarationNodesQuery(this.node);
                procedureDeclarationNodes.forEach(function(procedureDeclarationNode) {
                    var procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedure = procedureDeclaration.getProcedure(), procedureString = procedure.getString();
                    _this.debug("Adding the '".concat(procedureString, "' procedure."));
                    _this.procedures.push(procedure);
                });
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _string.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(nodes) {
                var string = (0, _string.nodesAsString)(nodes, this.tokens);
                return string;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.releaseContext.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.releaseContext.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.releaseContext.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.releaseContext.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.releaseContext.error(message, this.filePath);
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                this.debug("Verifying the '".concat(this.filePath, "' file..."));
                this.prepare();
                if (this.node === null) {
                    this.warning("Unable to verify the '".concat(this.filePath, "' file because it cannot be parsed."));
                } else {
                    var errorNodes = errorNodesQuery(this.node), errorNodesLength = errorNodes.length;
                    if (errorNodesLength === 0) {
                        this.addProcedures();
                        verified = true;
                    } else {
                        this.warning("The '".concat(this.filePath, "' file cannot be verified because there are errors."));
                        this.clear();
                    }
                }
                if (verified) {
                    this.info("...verified the '".concat(this.filePath, "' file."));
                }
                return verified;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.procedures = [];
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
            value: function fromFile(file, releaseContext) {
                var filePath = file.getPath(), tokens = null, node = null, procedures = [], fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndJSON",
            value: function fromFilePathAndJSON(filePath, json, releaseContext) {
                var tokens = null, node = null, procedures = null, fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);
                fileContext.initialise(json);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhVHlwZXMoKTsgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICBwdXNoKHByb2NlZHVyZXMsIHRoaXMucHJvY2VkdXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcygpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmZpbmRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGFkZFByb2NlZHVyZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkodGhpcy5ub2RlKTtcblxuICAgIHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMuZm9yRWFjaCgocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IFByb2NlZHVyZURlY2xhcmF0aW9uLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uLmdldFByb2NlZHVyZSgpLFxuICAgICAgICAgICAgcHJvY2VkdXJlU3RyaW5nID0gcHJvY2VkdXJlLmdldFN0cmluZygpO1xuXG4gICAgICB0aGlzLmRlYnVnKGBBZGRpbmcgdGhlICcke3Byb2NlZHVyZVN0cmluZ30nIHByb2NlZHVyZS5gKTtcblxuICAgICAgdGhpcy5wcm9jZWR1cmVzLnB1c2gocHJvY2VkdXJlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBpZiAodGhpcy5ub2RlID09PSBudWxsKSB7XG4gICAgICB0aGlzLndhcm5pbmcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGJlY2F1c2UgaXQgY2Fubm90IGJlIHBhcnNlZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JOb2RlcyA9IGVycm9yTm9kZXNRdWVyeSh0aGlzLm5vZGUpLFxuICAgICAgICAgICAgZXJyb3JOb2Rlc0xlbmd0aCA9IGVycm9yTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZXJyb3JOb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmFkZFByb2NlZHVyZXMoKTtcblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndhcm5pbmcoYFRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBjYW5ub3QgYmUgdmVyaWZpZWQgYmVjYXVzZSB0aGVyZSBhcmUgZXJyb3JzLmApO1xuXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucHJvY2VkdXJlcyA9IFtdO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBqc29uLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuYWRkUHJvY2VkdXJlcygpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbm9kZSwgdG9rZW5zLCBwcm9jZWR1cmVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRKU09OKGZpbGVQYXRoLCBqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBub2RlLCB0b2tlbnMsIHByb2NlZHVyZXMpO1xuXG4gICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZnVydGxlTGV4ZXJGcm9tTm90aGluZyIsImxleGVyc1V0aWxpdGllcyIsImZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIiwicGFyc2Vyc1V0aWxpdGllcyIsImZ1cnRsZUxleGVyIiwiZnVydGxlUGFyc2VyIiwiZXJyb3JOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXNRdWVyeSIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJub2RlIiwidG9rZW5zIiwicHJvY2VkdXJlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldE1ldGFUeXBlcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImZpbmRGaWxlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJhZGRQcm9jZWR1cmVzIiwiY29udGV4dCIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwiZG9tIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyIsImZvckVhY2giLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmUiLCJnZXRQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJkZWJ1ZyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsInRyYWNlIiwibWVzc2FnZSIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInByZXBhcmUiLCJlcnJvck5vZGVzIiwiZXJyb3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNsZWFyIiwiZmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwidG9KU09OIiwiZnJvbUZpbGUiLCJnZXRQYXRoIiwiZmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGhBbmRKU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7eUJBbEJVOzZCQUNtQjswREFFbEM7cUJBRVc7c0JBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUseUJBQTJCQyw4QkFBZSxDQUExQ0Qsd0JBQ0YsQUFBRUUsMEJBQTRCQywrQkFBZ0IsQ0FBNUNEO0FBRVIsSUFBTUUsY0FBY0osMEJBQ2RLLGVBQWVIO0FBRXJCLElBQU1JLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxvQkFDN0JDLGlDQUFpQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVuQyxJQUFBLEFBQU1WLDRCQUFOO2FBQU1BLFlBQ1BZLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEM0NoQjtRQUVqQixJQUFJLENBQUNZLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTkRoQjs7WUFTbkJpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGNBQWM7WUFDNUI7OztZQUVBTSxLQUFBQTtt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
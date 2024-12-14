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
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this;
                return fileContext;
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
            value: function addProcedures(node) {
                var _this = this;
                var context = this; ///
                var ProcedureDeclaration = _dom.default.ProcedureDeclaration, procedureDeclarationNodes = procedureDeclarationNodesQuery(node);
                procedureDeclarationNodes.forEach(function(procedureDeclarationNode) {
                    var procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, context), procedure = procedureDeclaration.getProcedure();
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
                        this.addProcedures(this.node);
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
                var content = json.content, lexer = this.getLexer(), parser = this.getParser(), tokens = lexer.tokenise(content), node = parser.parse(tokens);
                this.clear();
                this.addProcedures(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhVHlwZXMoKTsgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICBwdXNoKHByb2NlZHVyZXMsIHRoaXMucHJvY2VkdXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcygpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgYWRkUHJvY2VkdXJlcyhub2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkobm9kZSk7XG5cbiAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzLmZvckVhY2goKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBQcm9jZWR1cmVEZWNsYXJhdGlvbi5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbi5nZXRQcm9jZWR1cmUoKTtcblxuICAgICAgdGhpcy5wcm9jZWR1cmVzLnB1c2gocHJvY2VkdXJlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTm9kZXMgPSBlcnJvck5vZGVzUXVlcnkodGhpcy5ub2RlKSxcbiAgICAgICAgICAgIGVycm9yTm9kZXNMZW5ndGggPSBlcnJvck5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGVycm9yTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRQcm9jZWR1cmVzKHRoaXMubm9kZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53YXJuaW5nKGBUaGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgdGhlcmUgYXJlIGVycm9ycy5gKTtcblxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0ganNvbixcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIHRoaXMuY2xlYXIoKTtcblxuICAgIHRoaXMuYWRkUHJvY2VkdXJlcyhub2RlKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoQW5kSlNPTihmaWxlUGF0aCwganNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZXMgPSBudWxsLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbm9kZSwgdG9rZW5zLCBwcm9jZWR1cmVzKTtcblxuICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJmdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlciIsImVycm9yTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwibm9kZSIsInRva2VucyIsInByb2NlZHVyZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldExleGVyIiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRNZXRhVHlwZXMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImdldFByb2NlZHVyZXMiLCJyZWxlYXNlQ29udGV4dFByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJnZXRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZmluZEZpbGUiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImFkZFByb2NlZHVyZXMiLCJjb250ZXh0IiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJkb20iLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzIiwiZm9yRWFjaCIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZSIsImdldFByb2NlZHVyZSIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsInZlcmlmeSIsInZlcmlmaWVkIiwicHJlcGFyZSIsImVycm9yTm9kZXMiLCJlcnJvck5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2xlYXIiLCJmaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJ0b0pTT04iLCJmcm9tRmlsZSIsImdldFBhdGgiLCJmcm9tRmlsZVBhdGhBbmRKU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7eUJBbEJVOzZC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
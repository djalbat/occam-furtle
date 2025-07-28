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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhVHlwZXMoKTsgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICBwdXNoKHByb2NlZHVyZXMsIHRoaXMucHJvY2VkdXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcygpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgYWRkUHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlcy5mb3JFYWNoKChwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uID0gUHJvY2VkdXJlRGVjbGFyYXRpb24uZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRGVjbGFyYXRpb24uZ2V0UHJvY2VkdXJlKCksXG4gICAgICAgICAgICBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuZGVidWcoYEFkZGluZyB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlLmApO1xuXG4gICAgICB0aGlzLnByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUpO1xuICAgIH0pO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgICBlcnJvck5vZGVzTGVuZ3RoID0gZXJyb3JOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChlcnJvck5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvY2VkdXJlcygpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2FybmluZyhgVGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIHRoZXJlIGFyZSBlcnJvcnMuYCk7XG5cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wcm9jZWR1cmVzID0gW107XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdGhpcy5hZGRQcm9jZWR1cmVzKCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBub2RlLCB0b2tlbnMsIHByb2NlZHVyZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZEpTT04oZmlsZVBhdGgsIGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVzID0gbnVsbCxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcyk7XG5cbiAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwiZnVydGxlUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwiZnVydGxlTGV4ZXIiLCJmdXJ0bGVQYXJzZXIiLCJlcnJvck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9jZWR1cmVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZpbmRGaWxlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJhZGRQcm9jZWR1cmVzIiwiY29udGV4dCIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwiZG9tIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyIsImZvckVhY2giLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmUiLCJnZXRQcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJkZWJ1ZyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlcyIsInRyYWNlIiwibWVzc2FnZSIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInByZXBhcmUiLCJlcnJvck5vZGVzIiwiZXJyb3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNsZWFyIiwiZmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwidG9KU09OIiwiZnJvbUZpbGUiLCJnZXRQYXRoIiwiZnJvbUZpbGVQYXRoQW5kSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTs2QkFDbUI7MERBRWxDO3FCQUVXO3NCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLHlCQUEyQkMsOEJBQWUsQ0FBMUNELHdCQUNGLEFBQUVFLDBCQUE0QkMsK0JBQWdCLENBQTVDRDtBQUVSLElBQU1FLGNBQWNKLDBCQUNkSyxlQUFlSDtBQUVyQixJQUFNSSxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsb0JBQzdCQyxpQ0FBaUNELElBQUFBLGlCQUFVLEVBQUM7QUFFbkMsSUFBQSxBQUFNViw0QkFBTjthQUFNQSxZQUNQWSxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRDNDaEI7UUFFakIsSUFBSSxDQUFDWSxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQU5EaEI7O1lBU25CaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxjQUFjO1lBQzVCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxRQUFR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
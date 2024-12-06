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
var furtleLexerFromNothing = _occamgrammars.lexersUtilities.furtleLexerFromNothing, furtleParserFromNothing = _occamgrammars.parsersUtilities.furtleParserFromNothing;
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
            key: "getProcedures",
            value: function getProcedures() {
                return this.procedures;
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
            key: "getVariables",
            value: function getVariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var variables = [];
                return variables;
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
            key: "addProcedure",
            value: function addProcedure(procedure) {
                this.procedures.push(procedure);
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
                var _this = this;
                var verified = false;
                this.debug("Verifying the '".concat(this.filePath, "' file..."));
                var fileContext = this, errorNodes = errorNodesQuery(this.node), errorNodesLength = errorNodes.length;
                if (errorNodesLength > 1) {
                    var Error = _dom.default.Error;
                    this.warning("The '".concat(this.filePath, "' file cannot be verified because there are errors."));
                    errorNodes.forEach(function(errorNode) {
                        var error = Error.fromErrorNode(errorNode, fileContext), errorString = error.getString();
                        _this.warning(errorString);
                    });
                } else {
                    addProcedures(fileContext);
                    verified = true;
                }
                if (verified) {
                    this.info("...verified the '".concat(this.filePath, "' file."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, releaseContext) {
                var filePath = file.getPath(), fileContent = file.getContent(), content = fileContent, tokens = furtleLexer.tokenise(content), node = furtleParser.parse(tokens), procedures = [], fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndJSON",
            value: function fromFilePathAndJSON(filePath, json, releaseContext) {
                var content = {
                    json: json
                }, tokens = furtleLexer.tokenise(content), node = furtleParser.parse(tokens), procedures = [], fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);
                addProcedures(fileContext);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();
function addProcedures(fileContext) {
    var ProcedureDeclaration = _dom.default.ProcedureDeclaration, node = fileContext.getNode(), procedureDeclarationNodes = procedureDeclarationNodesQuery(node);
    procedureDeclarationNodes.forEach(function(procedureDeclarationNode) {
        var procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, fileContext), procedure = procedureDeclaration.getProcedure();
        fileContext.addProcedure(procedure);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhVHlwZXMoKTsgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGFkZFByb2NlZHVyZShwcm9jZWR1cmUpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUpO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgZXJyb3JOb2Rlc0xlbmd0aCA9IGVycm9yTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGVycm9yTm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCB7IEVycm9yIH0gPSBkb207XG5cbiAgICAgIHRoaXMud2FybmluZyhgVGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIHRoZXJlIGFyZSBlcnJvcnMuYClcblxuICAgICAgZXJyb3JOb2Rlcy5mb3JFYWNoKChlcnJvck5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclN0cmluZyA9IGVycm9yLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMud2FybmluZyhlcnJvclN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkUHJvY2VkdXJlcyhmaWxlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZUNvbnRlbnQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBmdXJ0bGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gZnVydGxlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbm9kZSwgdG9rZW5zLCBwcm9jZWR1cmVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRKU09OKGZpbGVQYXRoLCBqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB7IGpzb24gfSxcbiAgICAgICAgICB0b2tlbnMgPSBmdXJ0bGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gZnVydGxlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbm9kZSwgdG9rZW5zLCBwcm9jZWR1cmVzKTtcblxuICAgIGFkZFByb2NlZHVyZXMoZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2NlZHVyZXMoZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9jZWR1cmVEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICBub2RlID0gZmlsZUNvbnRleHQuZ2V0Tm9kZSgpLFxuICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpO1xuXG4gIHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMuZm9yRWFjaCgocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBQcm9jZWR1cmVEZWNsYXJhdGlvbi5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uLmdldFByb2NlZHVyZSgpO1xuXG4gICAgZmlsZUNvbnRleHQuYWRkUHJvY2VkdXJlKHByb2NlZHVyZSk7XG4gIH0pO1xufSJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJmdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlciIsImVycm9yTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwibm9kZSIsInRva2VucyIsInByb2NlZHVyZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFByb2NlZHVyZXMiLCJnZXRMZXhlciIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJhZGRQcm9jZWR1cmUiLCJwcm9jZWR1cmUiLCJwdXNoIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJmaWxlQ29udGV4dCIsImVycm9yTm9kZXMiLCJlcnJvck5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiRXJyb3IiLCJkb20iLCJmb3JFYWNoIiwiZXJyb3JOb2RlIiwiZnJvbUVycm9yTm9kZSIsImVycm9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiYWRkUHJvY2VkdXJlcyIsImZyb21GaWxlIiwiZmlsZSIsImdldFBhdGgiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlUGF0aEFuZEpTT04iLCJqc29uIiwiUHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiZ2V0UHJvY2VkdXJlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWtCcUJBOzs7NkJBaEI2QjswREFFbEM7cUJBRVc7c0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyx5QkFBMkJDLDhCQUFlLENBQTFDRCx3QkFDRixBQUFFRSwwQkFBNEJDLCtCQUFnQixDQUE1Q0Q7QUFFUixJQUFNRSxjQUFjSiwwQkFDZEssZUFBZUg7QUFFckIsSUFBTUksa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLG9CQUM3QkMsaUNBQWlDRCxJQUFBQSxpQkFBVSxFQUFDO0FBRW5DLElBQUEsQUFBTVIsNEJBQU47YUFBTUEsWUFDUFUsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxVQUFVO2dDQUQzQ2Q7UUFFakIsSUFBSSxDQUFDVSxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQU5EZDs7WUFTbkJlLEtB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
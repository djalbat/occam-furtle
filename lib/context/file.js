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
                }
                if (verified) {
                    this.info("...verified the '".concat(this.filePath, "' file."));
                }
                addProcedures(fileContext);
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
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, releaseContext) {
                var filePath = file.getPath(), fileContent = file.getContent(), content = fileContent, tokens = furtleLexer.tokenise(content), node = furtleParser.parse(tokens), procedures = [], fileContext = new FileContext(releaseContext, filePath, node, tokens, procedures);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhVHlwZXMoKTsgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGFkZFByb2NlZHVyZShwcm9jZWR1cmUpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUpO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS4uLmApO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgZXJyb3JOb2Rlc0xlbmd0aCA9IGVycm9yTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGVycm9yTm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCB7IEVycm9yIH0gPSBkb207XG5cbiAgICAgIHRoaXMud2FybmluZyhgVGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlIGNhbm5vdCBiZSB2ZXJpZmllZCBiZWNhdXNlIHRoZXJlIGFyZSBlcnJvcnMuYClcblxuICAgICAgZXJyb3JOb2Rlcy5mb3JFYWNoKChlcnJvck5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBFcnJvci5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclN0cmluZyA9IGVycm9yLmdldFN0cmluZygpO1xuXG4gICAgICAgIHRoaXMud2FybmluZyhlcnJvclN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgIH1cblxuICAgIGFkZFByb2NlZHVyZXMoZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGZ1cnRsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmdXJ0bGVQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBwcm9jZWR1cmVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBub2RlLCB0b2tlbnMsIHByb2NlZHVyZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZnJvbUZpbGVQYXRoQW5kSlNPTihmaWxlUGF0aCwganNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZW50ID0geyBqc29uIH0sXG4gICAgICAgICAgdG9rZW5zID0gZnVydGxlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGZ1cnRsZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcyk7XG5cbiAgICBhZGRQcm9jZWR1cmVzKGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9jZWR1cmVzKGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvY2VkdXJlRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IGZpbGVDb250ZXh0LmdldE5vZGUoKSxcbiAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXNRdWVyeShub2RlKTtcblxuICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzLmZvckVhY2goKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uID0gUHJvY2VkdXJlRGVjbGFyYXRpb24uZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbi5nZXRQcm9jZWR1cmUoKTtcblxuICAgIGZpbGVDb250ZXh0LmFkZFByb2NlZHVyZShwcm9jZWR1cmUpO1xuICB9KTtcbn0iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwiZnVydGxlUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwiZnVydGxlTGV4ZXIiLCJmdXJ0bGVQYXJzZXIiLCJlcnJvck5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9jZWR1cmVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRQcm9jZWR1cmVzIiwiZ2V0TGV4ZXIiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldE1ldGFUeXBlcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiYWRkUHJvY2VkdXJlIiwicHJvY2VkdXJlIiwicHVzaCIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsInZlcmlmeSIsInZlcmlmaWVkIiwiZmlsZUNvbnRleHQiLCJlcnJvck5vZGVzIiwiZXJyb3JOb2Rlc0xlbmd0aCIsImxlbmd0aCIsIkVycm9yIiwiZG9tIiwiZm9yRWFjaCIsImVycm9yTm9kZSIsImZyb21FcnJvck5vZGUiLCJlcnJvclN0cmluZyIsImdldFN0cmluZyIsImFkZFByb2NlZHVyZXMiLCJmcm9tRmlsZVBhdGhBbmRKU09OIiwianNvbiIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiZnJvbUZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZpbGVDb250ZW50IiwiZ2V0Q29udGVudCIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsImdldFByb2NlZHVyZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFrQnFCQTs7OzZCQWhCNkI7MERBRWxDO3FCQUVXO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMseUJBQTJCQyw4QkFBZSxDQUExQ0Qsd0JBQ0YsQUFBRUUsMEJBQTRCQywrQkFBZ0IsQ0FBNUNEO0FBRVIsSUFBTUUsY0FBY0osMEJBQ2RLLGVBQWVIO0FBRXJCLElBQU1JLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxvQkFDN0JDLGlDQUFpQ0QsSUFBQUEsaUJBQVUsRUFBQztBQUVuQyxJQUFBLEFBQU1SLDRCQUFOO2FBQU1BLFlBQ1BVLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEM0NkO1FBRWpCLElBQUksQ0FBQ1UsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFORGQ7O1lBU25CZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGNBQWM7WUFDNUI7OztZQUVBTSxLQUFBQTttQkFBQUEs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
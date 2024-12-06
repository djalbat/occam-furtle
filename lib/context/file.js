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
            key: "initialise",
            value: function initialise() {
                var _this = this;
                var Error = _dom.default.Error, ProcedureDeclaration = _dom.default.ProcedureDeclaration, fileContext = this, errorNodes = errorNodesQuery(this.node), procedureDeclarationNodes = procedureDeclarationNodesQuery(this.node);
                errorNodes.forEach(function(errorNode) {
                    var error = Error.fromErrorNode(errorNode, fileContext), errorString = error.getString();
                    _this.warning(errorString);
                });
                procedureDeclarationNodes.forEach(function(procedureDeclarationNode) {
                    var procedureDeclaration = ProcedureDeclaration.fromProcedureDeclarationNode(procedureDeclarationNode, fileContext), procedure = procedureDeclaration.getProcedure();
                    _this.procedures.push(procedure);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHsgRXJyb3IsIFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgZXJyb3JOb2Rlcy5mb3JFYWNoKChlcnJvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGVycm9yU3RyaW5nID0gZXJyb3IuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMud2FybmluZyhlcnJvclN0cmluZyk7XG4gICAgfSk7XG5cbiAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzLmZvckVhY2goKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBQcm9jZWR1cmVEZWNsYXJhdGlvbi5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRGVjbGFyYXRpb24uZ2V0UHJvY2VkdXJlKCk7XG5cbiAgICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGVDb250ZW50LCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gZnVydGxlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGZ1cnRsZVBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJmdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlciIsImVycm9yTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwibm9kZSIsInRva2VucyIsInByb2NlZHVyZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFByb2NlZHVyZXMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJkb20iLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0IiwiZXJyb3JOb2RlcyIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiZXJyb3JOb2RlIiwiZnJvbUVycm9yTm9kZSIsImVycm9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlIiwiZ2V0UHJvY2VkdXJlIiwicHVzaCIsImZyb21GaWxlIiwiZmlsZSIsImdldFBhdGgiLCJmaWxlQ29udGVudCIsImdldENv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
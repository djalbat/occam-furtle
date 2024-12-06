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
var readFile = _necessary.fileSystemUtilities.readFile, furtleLexerFromNothing = _occamgrammars.lexersUtilities.furtleLexerFromNothing, furtleParserFromNothing = _occamgrammars.parsersUtilities.furtleParserFromNothing;
var furtleLexer = furtleLexerFromNothing(), furtleParser = furtleParserFromNothing();
var errorNodesQuery = (0, _query.nodesQuery)("/document/error"), procedureDeclarationNodesQuery = (0, _query.nodesQuery)("/document/procedureDeclaration");
var FileContext = /*#__PURE__*/ function() {
    function FileContext(log, node, tokens, filePath, procedures) {
        _class_call_check(this, FileContext);
        this.log = log;
        this.node = node;
        this.tokens = tokens;
        this.filePath = filePath;
        this.procedures = procedures;
    }
    _create_class(FileContext, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
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
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
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
                this.log.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.log.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.log.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.log.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.log.error(message, this.filePath);
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
            key: "fromLogAndFilePath",
            value: function fromLogAndFilePath(log, filePath) {
                var fileContent = readFile(filePath), content = fileContent, tokens = furtleLexer.tokenise(content), node = furtleParser.parse(tokens), procedures = [], fileContext = new FileContext(log, node, tokens, filePath, procedures);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IHJlYWRGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jb25zdCBmdXJ0bGVMZXhlciA9IGZ1cnRsZUxleGVyRnJvbU5vdGhpbmcoKSxcbiAgICAgIGZ1cnRsZVBhcnNlciA9IGZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IGVycm9yTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZG9jdW1lbnQvZXJyb3JcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L3Byb2NlZHVyZURlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCwgcHJvY2VkdXJlcykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMucHJvY2VkdXJlcyA9IHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHsgRXJyb3IsIFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcnJvck5vZGVzID0gZXJyb3JOb2Rlc1F1ZXJ5KHRoaXMubm9kZSksXG4gICAgICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgZXJyb3JOb2Rlcy5mb3JFYWNoKChlcnJvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGVycm9yU3RyaW5nID0gZXJyb3IuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMud2FybmluZyhlcnJvclN0cmluZyk7XG4gICAgfSk7XG5cbiAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzLmZvckVhY2goKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb24gPSBQcm9jZWR1cmVEZWNsYXJhdGlvbi5mcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRGVjbGFyYXRpb24uZ2V0UHJvY2VkdXJlKCk7XG5cbiAgICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ0FuZEZpbGVQYXRoKGxvZywgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IHJlYWRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZUNvbnRlbnQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBmdXJ0bGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gZnVydGxlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KGxvZywgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCwgcHJvY2VkdXJlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImZ1cnRsZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJmdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlciIsImVycm9yTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkiLCJsb2ciLCJub2RlIiwidG9rZW5zIiwiZmlsZVBhdGgiLCJwcm9jZWR1cmVzIiwiZ2V0TG9nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldEZpbGVQYXRoIiwiZ2V0UHJvY2VkdXJlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImluaXRpYWxpc2UiLCJFcnJvciIsImRvbSIsIlByb2NlZHVyZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJlcnJvck5vZGVzIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlcyIsImZvckVhY2giLCJlcnJvck5vZGUiLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JTdHJpbmciLCJnZXRTdHJpbmciLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmUiLCJnZXRQcm9jZWR1cmUiLCJwdXNoIiwiZnJvbUxvZ0FuZEZpbGVQYXRoIiwiZmlsZUNvbnRlbnQiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7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
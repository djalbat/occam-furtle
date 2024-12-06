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
                debugger;
                var Error = _dom.default.Error, fileContext = this, errorNodes = errorNodesQuery(this.node);
                errorNodes.forEach(function(errorNode) {
                    var error = Error.fromErrorNode(errorNode, fileContext), errorString = error.getString();
                    _this.warning(errorString);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZnVydGxlTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21Ob3RoaW5nKCksXG4gICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tTm90aGluZygpO1xuXG5jb25zdCBlcnJvck5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2RvY3VtZW50L2Vycm9yXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9kb2N1bWVudC9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIG5vZGUsIHRva2VucywgcHJvY2VkdXJlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZXM7XG4gIH1cblxuICBhZGRQcm9jZWR1cmUocHJvY2VkdXJlKSB7XG4gICAgdGhpcy5wcm9jZWR1cmVzLnB1c2gocHJvY2VkdXJlKTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgY29uc3QgeyBFcnJvciB9ID0gZG9tLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXJyb3JOb2RlcyA9IGVycm9yTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgZXJyb3JOb2Rlcy5mb3JFYWNoKChlcnJvck5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yID0gRXJyb3IuZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGVycm9yU3RyaW5nID0gZXJyb3IuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMud2FybmluZyhlcnJvclN0cmluZyk7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9jZWR1cmVzKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZUNvbnRlbnQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBmdXJ0bGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gZnVydGxlUGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbm9kZSwgdG9rZW5zLCBwcm9jZWR1cmVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGZyb21GaWxlUGF0aEFuZEpTT04oZmlsZVBhdGgsIGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGVudCA9IHsganNvbiB9LFxuICAgICAgICAgIHRva2VucyA9IGZ1cnRsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBmdXJ0bGVQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICBwcm9jZWR1cmVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBub2RlLCB0b2tlbnMsIHByb2NlZHVyZXMpO1xuXG4gICAgYWRkUHJvY2VkdXJlcyhmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUHJvY2VkdXJlcyhmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFByb2NlZHVyZURlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBmaWxlQ29udGV4dC5nZXROb2RlKCksXG4gICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVzUXVlcnkobm9kZSk7XG5cbiAgcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2Rlcy5mb3JFYWNoKChwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IFByb2NlZHVyZURlY2xhcmF0aW9uLmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlRGVjbGFyYXRpb24uZ2V0UHJvY2VkdXJlKCk7XG5cbiAgICBmaWxlQ29udGV4dC5hZGRQcm9jZWR1cmUocHJvY2VkdXJlKTtcbiAgfSk7XG59Il0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiZnVydGxlTGV4ZXJGcm9tTm90aGluZyIsImxleGVyc1V0aWxpdGllcyIsImZ1cnRsZVBhcnNlckZyb21Ob3RoaW5nIiwicGFyc2Vyc1V0aWxpdGllcyIsImZ1cnRsZUxleGVyIiwiZnVydGxlUGFyc2VyIiwiZXJyb3JOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXNRdWVyeSIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJub2RlIiwidG9rZW5zIiwicHJvY2VkdXJlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0UHJvY2VkdXJlcyIsImFkZFByb2NlZHVyZSIsInByb2NlZHVyZSIsInB1c2giLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJ2ZXJpZnkiLCJFcnJvciIsImRvbSIsImZpbGVDb250ZXh0IiwiZXJyb3JOb2RlcyIsImZvckVhY2giLCJlcnJvck5vZGUiLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JTdHJpbmciLCJnZXRTdHJpbmciLCJhZGRQcm9jZWR1cmVzIiwiZnJvbUZpbGVQYXRoQW5kSlNPTiIsImpzb24iLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlIiwiZmlsZSIsImdldFBhdGgiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJQcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZXMiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJnZXRQcm9jZWR1cmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0JxQkE7Ozs2QkFoQjZCOzBEQUVsQztxQkFFVztzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLHlCQUEyQkMsOEJBQWUsQ0FBMUNELHdCQUNGLEFBQUVFLDBCQUE0QkMsK0JBQWdCLENBQTVDRDtBQUVSLElBQU1FLGNBQWNKLDBCQUNkSyxlQUFlSDtBQUVyQixJQUFNSSxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMs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
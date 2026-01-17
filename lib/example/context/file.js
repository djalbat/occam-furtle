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
var _index = require("../../index");
var _context = require("../../utilities/context");
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
var nodeAsString = _index.stringUtilities.nodeAsString, nodesAsString = _index.stringUtilities.nodesAsString;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(context, node, tokens) {
        _class_call_check(this, FileContext);
        this.context = context;
        this.node = node;
        this.tokens = tokens;
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
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                return variables;
            }
        },
        {
            key: "getProcedures",
            value: function getProcedures() {
                var procedures = [];
                return procedures;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString1(node) {
                var string = nodeAsString(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString1(nodes) {
                var string = nodesAsString(nodes, this.tokens);
                return string;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.context.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.context.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.context.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.context.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.context.error(message, this.filePath);
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens, context) {
                var fileContext = new FileContext(context, node, tokens);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NvbnRleHQvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgY2hhaW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmNvbnN0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgdG9rZW5zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcygpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGVzKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlcywgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChjb250ZXh0LCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJzdHJpbmdVdGlsaXRpZXMiLCJub2Rlc0FzU3RyaW5nIiwiY29udGV4dCIsIm5vZGUiLCJ0b2tlbnMiLCJjaGFpbkNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwic3RyaW5nIiwibm9kZXMiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJmaWxlUGF0aCIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Ob2RlQW5kVG9rZW5zIiwi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
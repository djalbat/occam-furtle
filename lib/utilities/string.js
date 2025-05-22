"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get nodeAsString () {
        return nodeAsString;
    },
    get nodesAsString () {
        return nodesAsString;
    }
});
var _constants = require("../constants");
function nodeAsString(node, tokens) {
    var string;
    tokens = nodeAsTokens(node, tokens); ///
    string = tokensAsString(tokens);
    string = trimString(string); ///
    return string;
}
function nodesAsString(nodes, tokens) {
    var string = nodes.reduce(function(string, node) {
        var nodeString = nodeAsString(node, tokens);
        string = string === _constants.EMPTY_STRING ? nodeString : "".concat(string, ",").concat(nodeString);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
var _default = {
    nodeAsString: nodeAsString,
    nodesAsString: nodesAsString
};
function tokensAsString(tokens) {
    var string = tokens.reduce(function(string, token) {
        var content = token.getContent();
        string = "".concat(string).concat(content);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
function nodeAsTokens(node, tokens) {
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        tokens = terminalNodeAsTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        tokens = nonTerminalNodeAsTokens(nonTerminalNode, tokens);
    }
    return tokens;
}
function trimString(string) {
    string = string.replace(/\s+$/, _constants.EMPTY_STRING); ///
    return string;
}
function terminalNodeAsTokens(terminalNode, tokens) {
    var significantToken = terminalNode.getSignificantToken(), token = significantToken; ///
    tokens = [
        token
    ];
    return tokens;
}
function nonTerminalNodeAsTokens(nonTerminalNode, tokens) {
    var lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), start = firstSignificantTokenIndex, end = lastSignificantTokenIndex + 1;
    tokens = tokens.slice(start, end); ///
    return tokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30sJHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZUFzU3RyaW5nLFxuICBub2Rlc0FzU3RyaW5nXG59O1xuXG5mdW5jdGlvbiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gdG9rZW5zLnJlZHVjZSgoc3RyaW5nLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9JHtjb250ZW50fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMrJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICB0b2tlbnMgPSBbICAvLy9cbiAgICB0b2tlblxuICBdO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZSIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwidHJpbVN0cmluZyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkVNUFRZX1NUUklORyIsInRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBc1Rva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUFzVG9rZW5zIiwicmVwbGFjZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic3RhcnQiLCJlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBOEJBO2VBQUE7O1FBMUJnQkE7ZUFBQUE7O1FBWUFDO2VBQUFBOzs7eUJBZGE7QUFFdEIsU0FBU0QsYUFBYUUsSUFBSSxFQUFFQyxNQUFNO0lBQ3ZDLElBQUlDO0lBRUpELFNBQVNFLGFBQWFILE1BQU1DLFNBQVUsR0FBRztJQUV6Q0MsU0FBU0UsZUFBZUg7SUFFeEJDLFNBQVNHLFdBQVdILFNBQVUsR0FBRztJQUVqQyxPQUFPQTtBQUNUO0FBRU8sU0FBU0gsY0FBY08sS0FBSyxFQUFFTCxNQUFNO0lBQ3pDLElBQU1DLFNBQVNJLE1BQU1DLE1BQU0sQ0FBQyxTQUFDTCxRQUFRRjtRQUNuQyxJQUFNUSxhQUFhVixhQUFhRSxNQUFNQztRQUV0Q0MsU0FBUyxBQUFDQSxXQUFXTyx1QkFBWSxHQUN0QkQsYUFDQyxBQUFDLEdBQVlBLE9BQVZOLFFBQU8sS0FBYyxPQUFYTTtRQUV6QixPQUFPTjtJQUNULEdBQUdPLHVCQUFZO0lBRWYsT0FBT1A7QUFDVDtJQUVBLFdBQWU7SUFDYkosY0FBQUE7SUFDQUMsZUFBQUE7QUFDRjtBQUVBLFNBQVNLLGVBQWVILE1BQU07SUFDNUIsSUFBTUMsU0FBU0QsT0FBT00sTUFBTSxDQUFDLFNBQUNMLFFBQVFRO1FBQ3BDLElBQU1DLFVBQVVELE1BQU1FLFVBQVU7UUFFaENWLFNBQVMsQUFBQyxHQUFXUyxPQUFUVCxRQUFpQixPQUFSUztRQUVyQixPQUFPVDtJQUNULEdBQUdPLHVCQUFZO0lBRWYsT0FBT1A7QUFDVDtBQUVBLFNBQVNDLGFBQWFILElBQUksRUFBRUMsTUFBTTtJQUNoQyxJQUFNWSxtQkFBbUJiLEtBQUtjLGNBQWM7SUFFNUMsSUFBSUQsa0JBQWtCO1FBQ3BCLElBQU1FLGVBQWVmLE1BQU8sR0FBRztRQUUvQkMsU0FBU2UscUJBQXFCRCxjQUFjZDtJQUM5QyxPQUFPO1FBQ0wsSUFBTWdCLGtCQUFrQmpCLE1BQU0sR0FBRztRQUVqQ0MsU0FBU2lCLHdCQUF3QkQsaUJBQWlCaEI7SUFDcEQ7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU0ksV0FBV0gsTUFBTTtJQUN4QkEsU0FBU0EsT0FBT2lCLE9BQU8sQ0FBQyxRQUFRVix1QkFBWSxHQUFJLEdBQUc7SUFFbkQsT0FBT1A7QUFDVDtBQUVBLFNBQVNjLHFCQUFxQkQsWUFBWSxFQUFFZCxNQUFNO0lBQ2hELElBQU1tQixtQkFBbUJMLGFBQWFNLG1CQUFtQixJQUNuRFgsUUFBUVUsa0JBQWtCLEdBQUc7SUFFbkNuQixTQUFTO1FBQ1BTO0tBQ0Q7SUFFRCxPQUFPVDtBQUNUO0FBRUEsU0FBU2lCLHdCQUF3QkQsZUFBZSxFQUFFaEIsTUFBTTtJQUN0RCxJQUFNcUIsNEJBQTRCTCxnQkFBZ0JNLDRCQUE0QixDQUFDdEIsU0FDekV1Qiw2QkFBNkJQLGdCQUFnQlEsNkJBQTZCLENBQUN4QixTQUMzRXlCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeENyQixTQUFTQSxPQUFPMkIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsT0FBTzFCO0FBQ1QifQ==
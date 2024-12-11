"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    nodeAsString: function() {
        return nodeAsString;
    },
    nodesAsString: function() {
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
        z;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICBzdHJpbmcgPSB0b2tlbnNBc1N0cmluZyh0b2tlbnMpO1xuXG4gIHN0cmluZyA9IHRyaW1TdHJpbmcoc3RyaW5nKTsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0b2tlbnMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbm9kZXMucmVkdWNlKChzdHJpbmcsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlU3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIG5vZGVTdHJpbmcgOlxuICAgICAgICAgICAgICAgIGAke3N0cmluZ30sJHtub2RlU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9kZUFzU3RyaW5nLFxuICBub2Rlc0FzU3RyaW5nXG59XG5cbmZ1bmN0aW9uIHRva2Vuc0FzU3RyaW5nKHRva2Vucykge1xuICBjb25zdCBzdHJpbmcgPSB0b2tlbnMucmVkdWNlKChzdHJpbmcsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2NvbnRlbnR9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7elxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRva2VucyA9IHRlcm1pbmFsTm9kZUFzVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRva2VucyA9IG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIHRyaW1TdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMrJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB0ZXJtaW5hbE5vZGVBc1Rva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBzaWduaWZpY2FudFRva2VuOyAvLy9cblxuICB0b2tlbnMgPSBbICAvLy9cbiAgICB0b2tlblxuICBdO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vblRlcm1pbmFsTm9kZUFzVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCAvLy9cbiAgICAgICAgZW5kID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCArIDE7XG5cbiAgdG9rZW5zID0gdG9rZW5zLnNsaWNlKHN0YXJ0LCBlbmQpOyAgLy8vXG5cbiAgcmV0dXJuIHRva2Vucztcbn1cbiJdLCJuYW1lcyI6WyJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZSIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwidHJpbVN0cmluZyIsIm5vZGVzIiwicmVkdWNlIiwibm9kZVN0cmluZyIsIkVNUFRZX1NUUklORyIsInRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ6IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQXNUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBc1Rva2VucyIsInJlcGxhY2UiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThCQSxPQUdDO2VBSEQ7O0lBMUJnQkEsWUFBWTtlQUFaQTs7SUFZQUMsYUFBYTtlQUFiQTs7O3lCQWRhO0FBRXRCLFNBQVNELGFBQWFFLElBQUksRUFBRUMsTUFBTTtJQUN2QyxJQUFJQztJQUVKRCxTQUFTRSxhQUFhSCxNQUFNQyxTQUFVLEdBQUc7SUFFekNDLFNBQVNFLGVBQWVIO0lBRXhCQyxTQUFTRyxXQUFXSCxTQUFVLEdBQUc7SUFFakMsT0FBT0E7QUFDVDtBQUVPLFNBQVNILGNBQWNPLEtBQUssRUFBRUwsTUFBTTtJQUN6QyxJQUFNQyxTQUFTSSxNQUFNQyxNQUFNLENBQUMsU0FBQ0wsUUFBUUY7UUFDbkMsSUFBTVEsYUFBYVYsYUFBYUUsTUFBTUM7UUFFdENDLFNBQVMsQUFBQ0EsV0FBV08sdUJBQVksR0FDdEJELGFBQ0MsQUFBQyxHQUFZQSxPQUFWTixRQUFPLEtBQWMsT0FBWE07UUFFekIsT0FBT047SUFDVCxHQUFHTyx1QkFBWTtJQUVmLE9BQU9QO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JKLGNBQUFBO0lBQ0FDLGVBQUFBO0FBQ0Y7QUFFQSxTQUFTSyxlQUFlSCxNQUFNO0lBQzVCLElBQU1DLFNBQVNELE9BQU9NLE1BQU0sQ0FBQyxTQUFDTCxRQUFRUTtRQUNwQyxJQUFNQyxVQUFVRCxNQUFNRSxVQUFVO1FBRWhDVixTQUFTLEFBQUMsR0FBV1MsT0FBVFQsUUFBaUIsT0FBUlM7UUFFckIsT0FBT1Q7SUFDVCxHQUFHTyx1QkFBWTtJQUVmLE9BQU9QO0FBQ1Q7QUFFQSxTQUFTQyxhQUFhSCxJQUFJLEVBQUVDLE1BQU07SUFDaEMsSUFBTVksbUJBQW1CYixLQUFLYyxjQUFjO0lBRTVDLElBQUlELGtCQUFrQjtRQUFDRTtRQUNyQixJQUFNQyxlQUFlaEIsTUFBTyxHQUFHO1FBRS9CQyxTQUFTZ0IscUJBQXFCRCxjQUFjZjtJQUM5QyxPQUFPO1FBQ0wsSUFBTWlCLGtCQUFrQmxCLE1BQU0sR0FBRztRQUVqQ0MsU0FBU2tCLHdCQUF3QkQsaUJBQWlCakI7SUFDcEQ7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU0ksV0FBV0gsTUFBTTtJQUN4QkEsU0FBU0EsT0FBT2tCLE9BQU8sQ0FBQyxRQUFRWCx1QkFBWSxHQUFJLEdBQUc7SUFFbkQsT0FBT1A7QUFDVDtBQUVBLFNBQVNlLHFCQUFxQkQsWUFBWSxFQUFFZixNQUFNO0lBQ2hELElBQU1vQixtQkFBbUJMLGFBQWFNLG1CQUFtQixJQUNuRFosUUFBUVcsa0JBQWtCLEdBQUc7SUFFbkNwQixTQUFTO1FBQ1BTO0tBQ0Q7SUFFRCxPQUFPVDtBQUNUO0FBRUEsU0FBU2tCLHdCQUF3QkQsZUFBZSxFQUFFakIsTUFBTTtJQUN0RCxJQUFNc0IsNEJBQTRCTCxnQkFBZ0JNLDRCQUE0QixDQUFDdkIsU0FDekV3Qiw2QkFBNkJQLGdCQUFnQlEsNkJBQTZCLENBQUN6QixTQUMzRTBCLFFBQVFGLDRCQUNSRyxNQUFNTCw0QkFBNEI7SUFFeEN0QixTQUFTQSxPQUFPNEIsS0FBSyxDQUFDRixPQUFPQyxNQUFPLEdBQUc7SUFFdkMsT0FBTzNCO0FBQ1QifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSiblingNode", {
    enumerable: true,
    get: function() {
        return findSiblingNode;
    }
});
function findSiblingNode(siblingNodes, childNode, parentNode) {
    var childNodes = parentNode.getChildNodes(), childNodeIndex = childNodes.indexOf(childNode), siblingNodeIndex = childNodeIndex + 1, siblingNode = siblingNodes.find(function(siblingNode) {
        var index = childNodes.indexOf(siblingNode);
        if (index === siblingNodeIndex) {
            return true;
        }
    }) || null;
    return siblingNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTaWJsaW5nTm9kZShzaWJsaW5nTm9kZXMsIGNoaWxkTm9kZSwgcGFyZW50Tm9kZSkge1xuICBjb25zdCBjaGlsZE5vZGVzID0gcGFyZW50Tm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZUluZGV4ID0gY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkTm9kZSksXG4gICAgICAgIHNpYmxpbmdOb2RlSW5kZXggPSBjaGlsZE5vZGVJbmRleCArIDEsXG4gICAgICAgIHNpYmxpbmdOb2RlID0gc2libGluZ05vZGVzLmZpbmQoKHNpYmxpbmdOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBjaGlsZE5vZGVzLmluZGV4T2Yoc2libGluZ05vZGUpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBzaWJsaW5nTm9kZUluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIHNpYmxpbmdOb2RlO1xufVxuIl0sIm5hbWVzIjpbImZpbmRTaWJsaW5nTm9kZSIsInNpYmxpbmdOb2RlcyIsImNoaWxkTm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZUluZGV4IiwiaW5kZXhPZiIsInNpYmxpbmdOb2RlSW5kZXgiLCJzaWJsaW5nTm9kZSIsImZpbmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxnQkFBZ0JDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxVQUFVO0lBQ2pFLElBQU1DLGFBQWFELFdBQVdFLGFBQWEsSUFDckNDLGlCQUFpQkYsV0FBV0csT0FBTyxDQUFDTCxZQUNwQ00sbUJBQW1CRixpQkFBaUIsR0FDcENHLGNBQWNSLGFBQWFTLElBQUksQ0FBQyxTQUFDRDtRQUMvQixJQUFNRSxRQUFRUCxXQUFXRyxPQUFPLENBQUNFO1FBRWpDLElBQUlFLFVBQVVILGtCQUFrQjtZQUM5QixPQUFPO1FBQ1Q7SUFDRixNQUFNO0lBRVosT0FBT0M7QUFDVCJ9
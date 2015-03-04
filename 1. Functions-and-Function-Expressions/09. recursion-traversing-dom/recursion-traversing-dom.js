function traverse(node) {
	traverseNode(node, '');
	
	function traverseNode(node, spacing) {
		spacing = spacing || '  ';
		console.log(spacing + node.nodeName);
		for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
			var child = node.childNodes[i];
			if (child.nodeType === document.ELEMENT_NODE) {
				traverseNode(child, spacing + '  ');
			}
		}
		console.log(spacing + '/' + node.nodeName);
	}
}

traverse(document.documentElement);

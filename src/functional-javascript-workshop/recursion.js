function getDependencies(tree, name, result = []) {
    if (tree) {
        if (name) {
            let dep = name + '@' + tree.version;
            
            if (!result.includes(dep)) {
                result.push(dep);
            }
        }
        
        if (tree.dependencies) {
            Object.keys(tree.dependencies).forEach((key) => {
                getDependencies(tree.dependencies[key], key, result);
            });
        }
    }

    return result.sort();
}

module.exports = getDependencies;

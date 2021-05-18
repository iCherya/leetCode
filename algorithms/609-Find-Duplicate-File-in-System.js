/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = (paths) => {
    const map = {};

    paths.forEach((folder) => {
        const [path, ...files] = folder.split(' ');

        files.forEach((file) => {
            const [fileName, fileContent] = file.split('(');

            if (!map[fileContent]) map[fileContent] = [];
            map[fileContent].push(`${path}/${fileName}`);
        });
    });

    return Object.values(map).filter((items) => items.length > 1);
};

import fs from "fs";

export const getRoutePaths = async () => {
  let componentDirs: Array<string> = [];
  let routeDirs: Array<string> = [];
  let routes: Array<Object> = [];
  await fs.readdirSync("src/components").map((itemName) => {
    let itemPath: string = `src/components/${itemName}`;
    new Promise((resolve, reject) => {
      let isDirectory: boolean = fs.lstatSync(itemPath).isDirectory();
      resolve();
      if (isDirectory) componentDirs.push(`components/${itemName}`);
    });
  });

  await componentDirs.forEach((dir) => {
    let isDirEmpty: boolean = true;
    let routesDirExists: boolean = false;
    let dirLength: number = fs.readdirSync("src/" + dir).length;
    if (dirLength > 0) {
      isDirEmpty = false;
    }

    fs.readdirSync("src/" + dir).map((itemName) => {
      if (itemName === "routes") routesDirExists = true;
    });

    if (!isDirEmpty && routesDirExists) {
      routeDirs.push(dir + "/routes");
    }
  });

  await routeDirs.forEach((routeDir) => {
    fs.readdirSync("src/" + routeDir).map((file) => {
      let fileName = file.substr(0, file.indexOf("."));
      let extension = file.substr(file.indexOf("."), file.length);
      if (extension === ".ts") {
        let path = `${routeDir}/${fileName}`;
        routes.push(path);
      }
    });
  });
  return routes;
};

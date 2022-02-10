import { Tree, formatFiles, installPackagesTask, readProjectConfiguration, generateFiles, joinPathFragments, names } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  console.log(schema)
  //await libraryGenerator(tree, schema);
  // await formatFiles(tree);
  // return () => {
  //   installPackagesTask(tree);
  // };
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
   const interfaceNames = names(schema.name);

  const substitutions = {
    // remove __tmpl__ from file endings
    tmpl: '',
    // make the different name variants available as substitutions
    ...interfaceNames,
    ...schema
  };
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates

    libraryRoot, // destination path of the files
    schema   
     // config object to replace variable in file templates
  );
}

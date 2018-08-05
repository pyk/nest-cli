import { join } from "path";
import { AbstractRunner } from "./abstract.runner";
import { existsSync } from "fs";

export class SchematicRunner extends AbstractRunner {
  constructor() {
    const globalSchematicsPath = `"${join(
      __dirname,
      "../..",
      "node_modules/.bin/schematics"
    )}"`;
    // To handle nest-cli as devDependencies
    const localSchematicPath = "node_modules/.bin/schematics";
    if (existsSync(globalSchematicsPath)) {
      super(globalSchematicsPath);
    } else {
      super(localSchematicPath);
    }
  }
}

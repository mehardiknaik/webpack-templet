import path from "path";
import fs from "fs/promises";
import { Compiler, WebpackPluginInstance } from "webpack";
import { RawSource } from "webpack-sources";

interface EmitRawConfigPluginOptions {
  input: string; // relative path to your source file, e.g. 'src/config.js'
  output: string; // name of output file, e.g. 'config.js'
}

class EmitRawConfigPlugin implements WebpackPluginInstance {
  private input: string;
  private output: string;

  constructor(options: EmitRawConfigPluginOptions) {
    this.input = options.input;
    this.output = options.output;
  }

  apply(compiler: Compiler): void {
    compiler.hooks.thisCompilation.tap("EmitRawConfigPlugin", (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: "EmitRawConfigPlugin",
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        async () => {
          const inputPath = path.resolve(compiler.context, this.input);
          try {
            const content = await fs.readFile(inputPath, "utf-8");
            compilation.emitAsset(this.output, new RawSource(content) as any);
            console.log(
              `EmitRawConfigPlugin: Successfully emitted \x1b[32m"${this.output}"\x1b[0m from \x1b[36m"${this.input}"\x1b[0m`
            );
          } catch (error) {
            compilation.errors.push(
              new Error(
                `EmitRawConfigPlugin: Failed to read file "${this.input}": ${error}`
              )
            );
          }
        }
      );
    });
  }
}

export default EmitRawConfigPlugin;

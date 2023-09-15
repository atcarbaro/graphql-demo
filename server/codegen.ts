
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../schema.graphql",
  generates: {
    "./src/resolvers-types.ts": {
      config: {
        useIndexSignature: true,
      },
      plugins: ['typescript', 'typescript-resolvers']
    }
  }
};

export default config;

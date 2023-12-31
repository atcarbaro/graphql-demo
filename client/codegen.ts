
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../schema.graphql",
  documents: "src/**/*.tsx",
  generates: {
    "src/generated/graphql.tsx/": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"]
    }
  }
};

export default config;

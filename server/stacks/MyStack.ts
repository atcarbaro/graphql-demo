import { Function } from 'sst/constructs';

export function MyStack({ stack }: any) {
  new Function(stack, 'MyFunction', {
    copyFiles: [
      {
        from: "./schema.graphql",
        to: "./schema.graphql"
      },
      {
        from: "./src/db.json",
        to: "./src/db.json"
      }
    ],
    nodejs: {
      esbuild: {
        tsconfig: './tsconfig.json',
        resolveExtensions: [".ts", ".mjs", ".js"],
      },
    },
    handler: 'src/index.handler',
    url: {
      cors: false
    },
    
  });
}

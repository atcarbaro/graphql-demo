import { StackContext, StaticSite } from 'sst/constructs';

export function MyStack({ stack }: any) {
    new StaticSite(stack, 'react', {
    path: './',
    buildOutput: "dist",
    buildCommand: "npm run build",
  });
}

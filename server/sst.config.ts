import { SSTConfig } from "sst";
import { MyStack } from "./stacks/MyStack";
export default {
  config (_input) {
    return {
    name: "graphql-demo-api",
    region: "us-east-1",
    };
},
  stacks (app) {
    app.stack(MyStack, { id: "graphql-demo-api" });
  }
} satisfies SSTConfig;

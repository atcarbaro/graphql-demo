import { MyStack } from "./MyStack";

export default function main(app) {
  app.stack(MyStack, { id: "graphql-demo" });
}
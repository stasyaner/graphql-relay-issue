module.exports = {
  src: "./src",
  exclude: ["**/node_modules/**", "**/__generated__/**"],
  schema: "./schema.graphql",
  extensions: ["ts", "tsx"],
  language: "typescript",
  artifactDirectory: "./src/__generated__",
};

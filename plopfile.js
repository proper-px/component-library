export default function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What's the name of this component",
      },
      {
        type: "list",
        choices: ["button", "div"],
        name: "element",
        message: "What's the name of this component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/Components/{{componentName}}/index.tsx",
        templateFile: ".plop-templates/Component.hbs",
      },
      {
        type: "add",
        path: "src/Components/{{componentName}}/{{componentName}}.stories.tsx",
        templateFile: ".plop-templates/Story.hbs",
      },
    ],
  });
}

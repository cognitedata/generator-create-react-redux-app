const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Class',
      choices: () => ['Stateless Function', 'Class', 'Pure Class'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    let componentTemplate;

    switch (data.type) {
      case 'Class': {
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'Pure Class': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const testTemplate = './component/spec.js.hbs';
    const indexTemplate = './component/index.js.hbs';
    const storyTemplate = './component/story.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../src/components/{{properCase name}}/{{properCase name}}.spec.js',
        templateFile: testTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.js',
        templateFile: indexTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../src/components/{{properCase name}}/{{properCase name}}.stories.js',
        templateFile: storyTemplate,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

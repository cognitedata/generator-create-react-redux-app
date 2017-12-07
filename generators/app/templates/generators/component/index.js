const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function (Pure)',
        'Stateless Function',
        'ES6 Class (Pure)',
        'ES6 Class',
      ],
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
      case 'ES6 Class': {
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      case 'Stateless Function (Pure)': {
        componentTemplate = './component/stateless.pure.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const testTemplate = './component/spec.js.hbs';
    const indexTemplate = './component/index.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../src/components/{{camelCase name}}/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../src/components/{{camelCase name}}/{{properCase name}}.spec.js',
        templateFile: testTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{camelCase name}}/index.js',
        templateFile: indexTemplate,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

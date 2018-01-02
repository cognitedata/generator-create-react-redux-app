const containerExists = require('../utils/containerExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'FormContainer',
      validate: value => {
        if (/.+/.test(value)) {
          return containerExists(value)
            ? 'A container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'component',
      message: 'Select a base component:',
      default: 'PureComponent',
      choices: () => ['PureComponent', 'Component'],
    },
    {
      type: 'confirm',
      name: 'addRedux',
      default: true,
      message: 'Do you want to add Redux tho this container ?',
    },
    {
      type: 'input',
      name: 'actionsFile',
      message: 'What is the name of the module where actions are located?',
      default: 'FormActions',
      when: value => value.addRedux,
    },
    {
      type: 'confirm',
      name: 'addSelectors',
      message: 'Do you want to include Reselect library to add Selectors ?',
      default: false,
      when: value => value.addRedux,
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/containers/{{properCase name}}/{{properCase name}}.js',
        templateFile: './container/container.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path:
          '../src/containers/{{properCase name}}/{{properCase name}}.spec.js',
        templateFile: './container/spec.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

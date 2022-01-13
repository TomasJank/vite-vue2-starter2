

export function install(
  Vue,
  args = {}
) {
  if ((install ).installed) return;
  (install ).installed = true;

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];

    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (const componentName in components) {
        const component = components[componentName];
        if (component && !registerComponents(component.subcomponents)) {
          Vue.component(componentName, component);
        }
      }
      return true;
    }
    return false;
  })(components);
}

export const createHComponents = (
  options = {}
) => {
  const install = (app) => {
    const { components = {}, directives = {} } = options;

    for (const key in directives) {
      const directive = directives[key];

      app.directive(key, directive);
    }

    for (const key in components) {
      const component = components[key];

      app.component(key, component);
    }
  };

  return { install };
};
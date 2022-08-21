import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (htmlRoot) => {
  const app = createApp(Dashboard);
  app.mount(htmlRoot);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

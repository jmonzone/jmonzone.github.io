import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const aliasPath = p => path.resolve(path.join(__dirname, 'src', p));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 8080,
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      globalModulePaths: [aliasPath('styles')],
      generateScopedName(name, filename, css) {
        const i = css.indexOf(`.${name}`);
        const line = css.substring(0, i).split(/[\r\n]/).length;
        let folder = path.dirname(filename).split('/').pop();
        folder = folder[0].toLowerCase() + folder.slice(1);
        let fileName = path.basename(filename, '.module.scss');
        fileName = fileName[0].toLowerCase() + fileName.slice(1);
        const firstField = folder !== 'src' ? folder : fileName.split('.')[0];

        return `${firstField}-${name}__${line}`;
      },
    },
    devSourcemap: true,
  },
});

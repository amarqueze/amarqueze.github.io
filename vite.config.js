import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// La configuración de Vite define el directorio base y aplica el plugin de React.
// El valor base es "/" porque el blog se desplegará en la raíz de https://tuusuario.github.io.

export default defineConfig({
  base: '/',
  plugins: [react()],
});
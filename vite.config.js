import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  
  return {
    plugins: [react()],
    define: {
      'process.env': process.env
    } 
  }
})
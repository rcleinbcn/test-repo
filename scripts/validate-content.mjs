import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const requiredTerms = [
  'multiusuario',
  'multiidioma',
  'multipaís',
  'Registro de actividades',
  'DPIA',
  'Brechas de seguridad',
  'Proveedores',
  'Consentimientos',
  'Derechos de interesados',
];

const missing = requiredTerms.filter((term) => !app.includes(term));

if (missing.length > 0) {
  console.error(`Faltan contenidos clave: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Contenido RGPD SaaS validado correctamente.');

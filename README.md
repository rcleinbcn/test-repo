# EuroGDPR Hub

Aplicación web SaaS para ayudar a pymes europeas a gestionar el cumplimiento del RGPD de forma continua. Incluye una demo funcional multiusuario, multiidioma y multipaís con panel ejecutivo, selección de organización, adaptación por autoridad supervisora y módulos operativos.

## Funcionalidades incluidas

- **Multi-tenant / multiusuario:** selector de organización, roles y permisos para Owner, DPO, Legal, IT, usuarios de negocio y auditores externos.
- **Multiidioma:** textos principales disponibles en español, inglés y francés.
- **Multipaís:** configuración local para España, Francia, Alemania, Italia y Países Bajos, incluyendo autoridad supervisora y foco de cumplimiento.
- **Módulos RGPD:** ROPA, DPIA, riesgos, derechos de interesados, brechas de seguridad, proveedores/DPA, consentimientos y cookies.
- **Operativa SaaS:** hoja de ruta para separación de datos por tenant, workflows, API, integraciones, analítica y exportación de evidencias.

## Puesta en marcha

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: arranca el servidor de desarrollo estático incluido.
- `npm run build`: genera la versión de producción.
- `npm run preview`: genera la build y la sirve localmente.
- `npm test`: valida que la demo contiene los elementos RGPD y SaaS principales.

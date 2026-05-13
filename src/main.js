const translations = {
  es: {
    badge: 'Plataforma SaaS RGPD para pymes europeas',
    title: 'Cumplimiento RGPD operativo, colaborativo y preparado para cada país.',
    subtitle: 'Centraliza registros de tratamiento, riesgos, consentimientos, proveedores, solicitudes de derechos y evidencias en una plataforma multiusuario, multiidioma y multipaís.',
    ctaPrimary: 'Ver demo funcional', ctaSecondary: 'Plan de implantación', country: 'País operativo', language: 'Idioma', tenant: 'Organización', score: 'Puntuación RGPD', evidence: 'Evidencias listas', openRisks: 'Riesgos abiertos', overdue: 'Tareas vencidas', dashboard: 'Panel de cumplimiento', modules: 'Módulos incluidos', roleMatrix: 'Roles y permisos', roadmap: 'Hoja de ruta SaaS', documents: 'Documentos automatizados', activity: 'Actividad reciente',
  },
  en: {
    badge: 'GDPR SaaS platform for European SMEs',
    title: 'Operational GDPR compliance, collaborative and country-ready.',
    subtitle: 'Centralise processing records, risks, consents, vendors, data-subject requests and evidence in a multi-user, multilingual and multi-country platform.',
    ctaPrimary: 'View working demo', ctaSecondary: 'Implementation plan', country: 'Operating country', language: 'Language', tenant: 'Organisation', score: 'GDPR score', evidence: 'Evidence ready', openRisks: 'Open risks', overdue: 'Overdue tasks', dashboard: 'Compliance dashboard', modules: 'Included modules', roleMatrix: 'Roles and permissions', roadmap: 'SaaS roadmap', documents: 'Automated documents', activity: 'Recent activity',
  },
  fr: {
    badge: 'Plateforme SaaS RGPD pour PME européennes',
    title: 'Conformité RGPD opérationnelle, collaborative et adaptée à chaque pays.',
    subtitle: 'Centralisez registres de traitement, risques, consentements, fournisseurs, demandes de droits et preuves dans une plateforme multi-utilisateur, multilingue et multipays.',
    ctaPrimary: 'Voir la démo', ctaSecondary: 'Plan de mise en œuvre', country: 'Pays opérationnel', language: 'Langue', tenant: 'Organisation', score: 'Score RGPD', evidence: 'Preuves prêtes', openRisks: 'Risques ouverts', overdue: 'Tâches en retard', dashboard: 'Tableau de conformité', modules: 'Modules inclus', roleMatrix: 'Rôles et permissions', roadmap: 'Feuille de route SaaS', documents: 'Documents automatisés', activity: 'Activité récente',
  },
};

const countries = {
  ES: { name: 'España', authority: 'AEPD', localFocus: 'Canal de derechos, análisis de riesgos y contratos con encargados.', retention: 'Bloques de conservación por finalidad y base jurídica.' },
  FR: { name: 'France', authority: 'CNIL', localFocus: 'Registre, minimisation, cookies y evaluaciones de impacto.', retention: 'Políticas de duración configurable por tratamiento.' },
  DE: { name: 'Deutschland', authority: 'BfDI / autoridades regionales', localFocus: 'Gobernanza descentralizada, DPO y proveedores críticos.', retention: 'Retención y borrado verificable por unidad de negocio.' },
  IT: { name: 'Italia', authority: 'Garante per la protezione dei dati personali', localFocus: 'Consentimientos, vídeos, marketing y transferencias internacionales.', retention: 'Calendarios de eliminación con evidencias auditables.' },
  NL: { name: 'Nederland', authority: 'Autoriteit Persoonsgegevens', localFocus: 'Notificación de brechas, acuerdos de proceso y privacidad por diseño.', retention: 'Controles de ciclo de vida para datos de clientes y empleados.' },
};

const tenants = [
  { id: 'acme', name: 'ACME Manufacturing', plan: 'Scale', users: 42, country: 'ES' },
  { id: 'health', name: 'NordCare Clinics', plan: 'Pro', users: 18, country: 'DE' },
  { id: 'retail', name: 'Maison Retail', plan: 'Starter', users: 9, country: 'FR' },
];

const modules = [
  { icon: '📋', title: 'Registro de actividades (ROPA)', text: 'Inventario guiado por finalidad, categoría de datos, base jurídica, destinatarios, transferencias y plazos.', progress: 88 },
  { icon: '🛡️', title: 'Riesgos, DPIA y controles', text: 'Matrices de riesgo, evaluaciones de impacto, controles recomendados y seguimiento de mitigaciones.', progress: 73 },
  { icon: '👥', title: 'Derechos de interesados', text: 'SLA para acceso, rectificación, supresión, oposición, portabilidad y limitación con trazabilidad completa.', progress: 92 },
  { icon: '🔐', title: 'Brechas de seguridad', text: 'Flujo de clasificación, reloj de 72 horas, comunicación a autoridad y afectados, y lecciones aprendidas.', progress: 64 },
  { icon: '🏢', title: 'Proveedores y DPA', text: 'Due diligence, contratos de encargado, subencargados, transferencias internacionales y revisiones periódicas.', progress: 81 },
  { icon: '🔔', title: 'Consentimientos y cookies', text: 'Biblioteca de finalidades, versiones, prueba del consentimiento y conexión con CMP externas.', progress: 69 },
];

const roles = [
  { role: 'Owner', scope: 'Facturación, tenants, políticas globales', access: 'Total' },
  { role: 'DPO / Delegado', scope: 'DPIA, brechas, auditorías, informes', access: 'Aprobador' },
  { role: 'Legal', scope: 'Bases jurídicas, contratos, plantillas', access: 'Editor' },
  { role: 'IT & Security', scope: 'Medidas técnicas, incidentes, evidencias', access: 'Editor' },
  { role: 'Business user', scope: 'Tratamientos de su área y tareas asignadas', access: 'Limitado' },
  { role: 'Auditor externo', scope: 'Evidencias y reportes seleccionados', access: 'Solo lectura' },
];

const roadmap = [
  'Arquitectura multi-tenant con separación lógica de datos y auditoría por organización.',
  'Internacionalización completa: ES, EN, FR inicialmente; lista para DE, IT, NL y PT.',
  'Catálogo de requisitos por país, autoridad supervisora y sector de actividad.',
  'Motor de workflows para tareas, aprobaciones, vencimientos, recordatorios y escalados.',
  'API e integraciones con HRIS, CRM, ticketing, IAM/SSO, CMP y almacenamiento documental.',
  'Analítica ejecutiva, exportación para auditorías y centro de confianza para clientes.',
];

const documents = ['Política de privacidad web', 'Registro de actividades de tratamiento', 'Contrato de encargado del tratamiento', 'Evaluación de impacto (DPIA)', 'Procedimiento de respuesta a brechas', 'Plantillas de respuesta a derechos ARSOPL'];
const activities = ['Marketing actualizó la base jurídica de newsletter B2B.', 'IT subió evidencia de cifrado para portátiles corporativos.', 'Legal aprobó un nuevo DPA con proveedor cloud.', 'DPO solicitó DPIA para analítica de empleados.'];
const state = { language: 'es', country: 'ES', tenantId: 'acme' };
const icon = (symbol) => `<span class="emoji-icon" aria-hidden="true">${symbol}</span>`;

function optionList(items, selected) {
  return Object.entries(items).map(([value, item]) => `<option value="${value}" ${value === selected ? 'selected' : ''}>${item.name ?? item}</option>`).join('');
}

function tenantOptions() {
  return tenants.map((item) => `<option value="${item.id}" ${item.id === state.tenantId ? 'selected' : ''}>${item.name}</option>`).join('');
}

function render() {
  const t = translations[state.language];
  const tenant = tenants.find((item) => item.id === state.tenantId);
  const countryConfig = countries[state.country];
  const base = modules.reduce((sum, module) => sum + module.progress, 0) / modules.length;
  const score = Math.round(base + (tenant.users > 20 ? 3 : 0) - (state.country === 'DE' ? 2 : 0));

  document.documentElement.lang = state.language;
  document.querySelector('#root').innerHTML = `
    <main>
      <section class="hero section-shell">
        <nav class="topbar" aria-label="Selector de contexto SaaS">
          <div class="brand">${icon('🛡️')} EuroGDPR Hub</div>
          <div class="selectors">
            <label>${icon('🏢')} ${t.tenant}<select data-bind="tenantId">${tenantOptions()}</select></label>
            <label>${icon('📍')} ${t.country}<select data-bind="country">${optionList(countries, state.country)}</select></label>
            <label>${icon('🌐')} ${t.language}<select data-bind="language"><option value="es" ${state.language === 'es' ? 'selected' : ''}>Español</option><option value="en" ${state.language === 'en' ? 'selected' : ''}>English</option><option value="fr" ${state.language === 'fr' ? 'selected' : ''}>Français</option></select></label>
          </div>
        </nav>
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="badge">${icon('✨')} ${t.badge}</div>
            <h1>${t.title}</h1>
            <p>${t.subtitle}</p>
            <div class="hero-actions"><a href="#dashboard" class="button primary">${t.ctaPrimary} ›</a><a href="#roadmap" class="button secondary">${t.ctaSecondary}</a></div>
          </div>
          <aside class="country-card" aria-label="Configuración local">
            <div class="country-globe">🌍</div><span>${countryConfig.authority}</span><h2>${countryConfig.name}</h2><p>${countryConfig.localFocus}</p><small>${countryConfig.retention}</small>
          </aside>
        </div>
      </section>
      <section id="dashboard" class="section-shell dashboard-grid">
        <div class="section-heading"><span>${icon('📈')} ${t.dashboard}</span><h2>${tenant.name} · Plan ${tenant.plan}</h2></div>
        <div class="stats">
          ${statCard('✅', t.score, `${score}%`, 'green')}${statCard('📚', t.evidence, '126', 'blue')}${statCard('🛡️', t.openRisks, '14', 'amber')}${statCard('🔔', t.overdue, '3', 'red')}
        </div>
      </section>
      <section class="section-shell" id="modules">
        <div class="section-heading"><span>${icon('📋')} ${t.modules}</span><h2>Funcionalidades clave para pasar de hojas de cálculo a cumplimiento continuo.</h2></div>
        <div class="module-grid">${modules.map(moduleCard).join('')}</div>
      </section>
      <section class="section-shell split-grid">
        <div class="panel"><div class="section-heading compact"><span>${icon('👥')} ${t.roleMatrix}</span></div><div class="role-table">${roles.map(roleRow).join('')}</div></div>
        <div class="panel"><div class="section-heading compact"><span>${icon('📄')} ${t.documents}</span></div><ul class="check-list">${documents.map((item) => `<li>${icon('✅')} ${item}</li>`).join('')}</ul><div class="activity-box"><h3>${t.activity}</h3>${activities.map((item) => `<p>${item}</p>`).join('')}</div></div>
      </section>
      <section class="section-shell roadmap" id="roadmap">
        <div class="section-heading"><span>${icon('✨')} ${t.roadmap}</span><h2>Base preparada para evolucionar hacia producto SaaS real.</h2></div>
        <div class="roadmap-list">${roadmap.map((item, index) => `<article><b>0${index + 1}</b><p>${item}</p></article>`).join('')}</div>
      </section>
    </main>`;

  document.querySelectorAll('select[data-bind]').forEach((select) => {
    select.addEventListener('change', (event) => {
      state[event.target.dataset.bind] = event.target.value;
      render();
    });
  });
}

function statCard(symbol, label, value, tone) {
  return `<article class="stat-card ${tone}"><div class="stat-icon">${symbol}</div><span>${label}</span><strong>${value}</strong></article>`;
}
function moduleCard(item) {
  return `<article class="module-card"><div class="module-symbol">${item.icon}</div><h3>${item.title}</h3><p>${item.text}</p><div class="progress" aria-label="${item.title}: ${item.progress}%"><span style="width: ${item.progress}%"></span></div></article>`;
}
function roleRow(item) {
  return `<div class="role-row"><strong>${item.role}</strong><span>${item.scope}</span><em>${item.access}</em></div>`;
}

render();

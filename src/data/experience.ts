export type Experience = {
  role: string
  company: string
  period: string
  detail: string
  /** Párrafos. El texto entre **dobles asteriscos** se resalta con el color de acento. */
  paragraphs: string[]
}

export const experience: Experience[] = [
  {
    role: 'Desarrollador y QA Tester',
    company: 'SUNAT',
    period: 'Abril 2024 — Diciembre 2025',
    detail: 'Practicante pre-profesional · Sección de Auditoría · Chimbote',
    paragraphs: [
      'Desarrollé **automatizaciones en Python** para agilizar procesos internos de auditoría y participé en el **mantenimiento de aplicaciones web** hechas en JavaScript y PHP.',
      'Diseñé y ejecuté pruebas funcionales, de UI/UX y de regresión, y documenté defectos críticos de autenticación, tokens y encriptación que no volvieron a aparecer tras su corrección.',
      'Diseñé escenarios de prueba para el enrutamiento a puertos de respaldo, lo que mejoró la **tolerancia a fallos** del sistema y lo mantuvo disponible ante caídas.',
      'Trabajé en un equipo **Agile/Scrum** con seguimiento de defectos en JIRA, cuidando la confidencialidad de los datos sensibles en cada ciclo de pruebas.',
    ],
  },
]

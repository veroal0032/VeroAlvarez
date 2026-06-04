export interface ProjectSection {
  id: string
  title: string
  content: string
  images?: string[]
}

export interface Project {
  slug: string
  title: string
  accentLetter: string
  accentLetterIndex: number
  accentColor: string
  heroBg: string
  description: string
  category: string
  role: string
  tools: string
  year: string
  context: string
  sections: ProjectSection[]
  prevProject?: string
  nextProject?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'cosechar',
    title: 'Cosechar',
    accentLetter: 'a',
    accentLetterIndex: 7,
    accentColor: '#7EC8E3',
    heroBg: '#FDE8E4',
    description:
      'A web app that tells you which fruits and vegetables are in season in Argentina right now.',
    category: 'VIBE CODING · 2026',
    role: 'UX/UI · Development',
    tools: 'Next.js · Claude · Vercel',
    year: '2026',
    context: 'Personal project',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          'Arriving in a new country means learning everything from scratch, even the seasons. In Argentina, summer is in December and winter is in July. For visitors and immigrants, understanding what\'s in season — and why it matters — isn\'t obvious. Buying out of season means paying more for less flavor, without realizing there\'s an alternative.',
      },
      {
        id: 'problema',
        title: 'El problema',
        content:
          '0 local apps that solve this using official Argentine data in a simple way.',
      },
      {
        id: 'decisiones',
        title: 'Decisiones de diseño',
        content:
          'La interfaz tenía que ser instantánea: el usuario abre la app y en menos de 3 segundos ya sabe qué está en temporada hoy. Sin onboarding, sin configuración. Un filtro por mes, categoría (frutas / verduras) y región. Paleta de colores derivada de los propios productos: verdes, amarillos, rojizos. Tipografía generosa para que sea usable en el mercado con sol.',
      },
      {
        id: 'proceso',
        title: 'Proceso técnico',
        content:
          'Built with Next.js, deployed on Vercel. Data from official Argentine seasonal produce sources. Vibe-coded con Claude: definí la lógica y la estructura de datos en lenguaje natural, iterar rápido sobre UI sin escribir boilerplate.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          'Live at cosechar.vercel.app — carga en &lt;1s, 100% estático, funciona offline con PWA. Primera versión en 4 días de trabajo.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'El vibe coding no elimina el pensamiento de diseño — lo amplifica. Cuanto más claro es el brief, mejor el resultado. La decisión de usar datos estáticos en vez de una API en tiempo real fue clave para la velocidad y simplicidad del proyecto.',
      },
    ],
    prevProject: 'playground',
    nextProject: 'matcha-cha',
  },
  {
    slug: 'edvance',
    title: 'Edvance',
    accentLetter: 'v',
    accentLetterIndex: 2,
    accentColor: '#7B5CF6',
    heroBg: '#EDE8FF',
    description:
      'Sistema de diseño multibrand para el ecosistema EdTech. 4 marcas, 14 component sets, 94 variantes.',
    category: 'DESIGN SYSTEMS · 2026',
    role: 'Design Systems · UX/UI',
    tools: 'Figma · Tokens Studio · WCAG 2.1',
    year: '2026',
    context: 'No Country S03-26',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          '4 productos EdTech distintos, cada equipo diseñando por su cuenta. La misma UI con 4 versiones diferentes, retrabajo constante, imposible de escalar.',
      },
      {
        id: 'problema',
        title: 'El problema',
        content:
          'Fragmentación visual, retrabajo constante y dificultad para escalar. Sin una base común, incorporar una nueva marca significaba empezar desde cero.',
      },
      {
        id: 'arquitectura',
        title: 'Arquitectura de tokens',
        content:
          '3 capas: Primitivos (25 tokens base), Semánticos (103 tokens con rol funcional que cambian por marca), Componentes (vinculados a semánticos). Esta arquitectura garantiza que cambiar una marca no requiere tocar ningún componente.',
      },
      {
        id: 'marcas',
        title: 'Las 4 marcas',
        content:
          'Edvance (portal central, Montserrat), Kira (profesionales, Plus Jakarta Sans), Blink (adolescentes, Nunito), Nubi (niños, Fredoka One). Cada una con tokens semánticos propios y componentes compartidos.',
      },
      {
        id: 'componentes',
        title: 'Biblioteca de componentes',
        content:
          '14 component sets, 94 variantes totales. Button, Input, Navbar, Checkbox, Toggle, Course Card, Alert, Toast, Badge, Progress Bar, Tabs, Footer. Todos con documentación de cuándo usar, Do\'s &amp; Don\'ts, tokens semánticos y WCAG.',
      },
      {
        id: 'accesibilidad',
        title: 'Accesibilidad WCAG 2.1 AA',
        content:
          '23 criterios cumplidos, 4 parciales, 2 pendientes para Fase 2. Nunca depende solo del color para comunicar estados — ícono + texto + forma siempre refuerzan el mensaje. Contraste mínimo 4.5:1 en todos los componentes de texto.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          'Sistema live en Figma, entregado con documentación completa. El equipo pasó de 0 consistencia entre productos a poder onboardear un nuevo diseñador en 1 día con las guías del sistema.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'Los design systems no son librería de componentes — son decisiones de arquitectura. La capa de tokens semánticos es lo que hace que un sistema realmente escale. La documentación no es un extra: es parte del componente.',
      },
    ],
    prevProject: 'cosechar',
    nextProject: 'matcha-cha',
  },
  {
    slug: 'matcha-cha',
    title: 'Matcha Chá',
    accentLetter: 'h',
    accentLetterIndex: 6,
    accentColor: '#4CAF50',
    heroBg: '#E8F5E9',
    description:
      'Brand identity and digital experience for a specialty matcha café concept, combining UI design with AI-assisted development.',
    category: 'UX/UI · VIBE CODING · AI',
    role: 'UX/UI · Branding · Development',
    tools: 'Figma · Next.js · Claude',
    year: '2025',
    context: 'Personal project',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          'Una cafetería especializada en matcha que quería diferenciarse de la estética japonesa tradicional — buscaba algo más contemporáneo, editorial, con personalidad propia.',
      },
      {
        id: 'problema',
        title: 'El problema',
        content:
          'La mayoría de las marcas de matcha en LATAM copia la estética japonesa de forma literal, sin adaptarla al contexto local. El resultado es genérico e intercambiable.',
      },
      {
        id: 'decisiones',
        title: 'Decisiones de diseño',
        content:
          'Paleta derivada del propio producto: verde matcha (#4CAF50) como protagonista, cremas y blancos rotos para los fondos. Tipografía editorial con contraste entre serif fino y grotesca pesada. Layout asimétrico para romper con la rigidez del sector.',
      },
      {
        id: 'proceso',
        title: 'Proceso técnico',
        content:
          'Landing page construida con vibe coding: briefeé el diseño en Figma, Claude generó el esqueleto en Next.js, yo refiné la interactividad y las animaciones. Total: 2 días de trabajo.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          'Brand identity completa: logo, paleta, sistema tipográfico, packaging mockups y landing page funcional. El cliente usó los assets para lanzar su cuenta de Instagram.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'El flujo diseño → vibe coding es más fluido cuando el Figma está bien organizado con componentes y tokens. El tiempo ahorrado en desarrollo se reinvirtió en pulir la identidad visual.',
      },
    ],
    prevProject: 'edvance',
    nextProject: 'petlink',
  },
  {
    slug: 'petlink',
    title: 'Petlink',
    accentLetter: 'i',
    accentLetterIndex: 3,
    accentColor: '#F5A623',
    heroBg: '#FFF3E0',
    description:
      'Mobile app connecting pet owners with local services and adoption networks.',
    category: 'UX/UI · MOBILE APP',
    role: 'UX/UI Design',
    tools: 'Figma · Maze · FigJam',
    year: '2025',
    context: 'Bootcamp project',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          'Tener una mascota implica coordinar múltiples servicios — vet, grooming, paseadores, guardería — cada uno con su propia app o número de WhatsApp. No hay un lugar centralizado.',
      },
      {
        id: 'problema',
        title: 'El problema',
        content:
          'La fragmentación del ecosistema de mascotas genera fricción en cada interacción. Los dueños pierden tiempo buscando y coordinando, y los proveedores de servicios no tienen visibilidad.',
      },
      {
        id: 'research',
        title: 'Research',
        content:
          '12 entrevistas con dueños de mascotas en Buenos Aires. Pain point principal: "no sé a quién llamar cuando mi vet no puede". El 83% busca recomendaciones por Instagram o grupos de WhatsApp.',
      },
      {
        id: 'decisiones',
        title: 'Decisiones de diseño',
        content:
          'Arquitectura centrada en el perfil de la mascota como elemento pivote — todos los servicios se conectan desde ahí. Navegación por tabs con acceso directo a búsqueda de servicios, historial veterinario y adopción.',
      },
      {
        id: 'proceso',
        title: 'Proceso',
        content:
          'Wireframes de baja fidelidad → testing con 5 usuarios → iteración → prototipo de alta fidelidad. 3 rondas de pruebas de usabilidad. La función de adopción fue agregada en la segunda iteración por demanda de los testers.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          'Prototipo funcional en Figma con 47 pantallas. Flujos completos: registro, búsqueda de servicios, reserva, historial médico y adopción. Task success rate: 91% en la última ronda de testing.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'El perfil de mascota como elemento central fue un insight que salió del research, no del brief. Escuchar los workarounds que la gente ya usa es más valioso que preguntar qué quieren.',
      },
    ],
    prevProject: 'matcha-cha',
    nextProject: 'compani',
  },
  {
    slug: 'compani',
    title: 'Compani',
    accentLetter: 'o',
    accentLetterIndex: 1,
    accentColor: '#E91E8C',
    heroBg: '#FCE4F3',
    description:
      'Brand identity system for a creative studio — from visual language to full guidelines.',
    category: 'BRANDING · GRAPHIC DESIGN',
    role: 'Brand Designer',
    tools: 'Illustrator · Figma · Photoshop',
    year: '2025',
    context: 'Client project',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          'Compani es un estudio creativo que trabaja con marcas emergentes en LATAM. Necesitaban una identidad que transmitiera rigor creativo sin perder calidez.',
      },
      {
        id: 'problema',
        title: 'El problema',
        content:
          'Sin identidad visual consistente, el estudio dependía de la presentación verbal para comunicar su diferencial. Cada propuesta a clientes empezaba desde cero visualmente.',
      },
      {
        id: 'decisiones',
        title: 'Decisiones de diseño',
        content:
          'Logo modular basado en la "C" como contenedor de ideas. El sistema de color usa un primario fuerte (magenta) con neutros cálidos para balance. Tipografía: Söhne para display, iA Writer Quattro para texto largo — contraste entre lo contemporáneo y lo editorial.',
      },
      {
        id: 'proceso',
        title: 'Proceso',
        content:
          'Moodboard → 3 territorios visuales → selección → desarrollo de sistema completo. El territorio elegido fue "riguroso pero vivo" — no minimalismo frío ni maximalismoexcesivo.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          'Brand guidelines completas: logo y variantes, paleta, tipografía, iconografía, papelería, plantillas de presentación y social media. Entregado en Figma + PDF.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'Los sistemas de marca más robustos tienen pocas reglas pero muy bien definidas. La tentación es siempre agregar más — el trabajo de diseño es editar hasta que lo que queda sea inevitable.',
      },
    ],
    prevProject: 'petlink',
    nextProject: 'palmira',
  },
  {
    slug: 'palmira',
    title: 'Palmira',
    accentLetter: 'l',
    accentLetterIndex: 2,
    accentColor: '#D4A843',
    heroBg: '#FDF6E3',
    description:
      'Artisanal food brand identity rooted in warmth, craft, and Latin American culture.',
    category: 'BRANDING · GRAPHIC DESIGN',
    role: 'Brand Designer',
    tools: 'Illustrator · Figma',
    year: '2024',
    context: 'Client project',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          'Palmira es una marca de conservas y productos artesanales inspirada en recetas familiares venezolanas. El nombre viene de la abuela de la fundadora.',
      },
      {
        id: 'problema',
        title: 'El problema',
        content:
          'Productos de altísima calidad con una presentación que no los representaba. El packaging genérico hacía invisible el trabajo artesanal detrás de cada producto.',
      },
      {
        id: 'decisiones',
        title: 'Decisiones de diseño',
        content:
          'Ilustración botánica como lenguaje central — cada producto tiene su propio detalle ilustrado de los ingredientes. Paleta tierra: mostaza, terracota, verde oliva, crema. Tipografía Playfair Display para el nombre, Cormorant para textos complementarios — evoca lo clásico sin ser anticuado.',
      },
      {
        id: 'proceso',
        title: 'Proceso',
        content:
          'El proceso empezó con un taller de valores con la fundadora. Las palabras clave: herencia, autenticidad, cuidado, sabor. Cada decisión visual se ancló a esas palabras.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          'Sistema de packaging para 6 productos, etiquetas, bolsas, stickers y presencia digital. Las ventas en ferias aumentaron un 40% después del rebrand según la fundadora.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'El diseño de packaging tiene una restricción única: en góndola, tienes menos de 3 segundos para comunicar. Esa restricción obliga a priorizar de una forma que otros formatos no exigen.',
      },
    ],
    prevProject: 'compani',
    nextProject: 'playground',
  },
  {
    slug: 'playground',
    title: 'Playground',
    accentLetter: 'g',
    accentLetterIndex: 4,
    accentColor: '#FF6B6B',
    heroBg: '#FFF0F0',
    description:
      'A curated collection of Daily UI challenges and experimental interface explorations.',
    category: 'DAILY UI · EXPLORATIONS',
    role: 'UI Design',
    tools: 'Figma · Rive · Spline',
    year: '2024–2025',
    context: 'Personal / Daily UI',
    sections: [
      {
        id: 'start-point',
        title: 'Start Point',
        content:
          'El Playground es un espacio de práctica deliberada. Sin cliente, sin briefing, sin restricciones — solo una pantalla en blanco y un prompt del Daily UI Challenge.',
      },
      {
        id: 'exploración',
        title: 'Exploración',
        content:
          'Cada pieza resuelve un challenge específico: signup screens, music players, dashboards, landing pages, onboarding flows. La restricción es la libertad: un prompt, una hora, publicar igual.',
      },
      {
        id: 'decisiones',
        title: 'Decisiones de diseño',
        content:
          'El criterio de cada exploración es: ¿estoy aprendiendo algo? No se trata de hacer algo bonito sino de probar una interacción que no hice antes, una estructura que me incomoda, un estilo que nunca usaría con un cliente.',
      },
      {
        id: 'proceso',
        title: 'Proceso',
        content:
          'Timer de 60 minutos. Sin referencias abiertas durante el diseño — solo el prompt. Al terminar: documentar qué funcionó, qué forzaría en otro contexto, qué descartaría.',
      },
      {
        id: 'resultado',
        title: 'Resultado final',
        content:
          '+40 screens publicadas en Dribbble y Behance. 3 exploraciones derivaron en proyectos reales con clientes. El Playground sigue activo — cada semana hay una nueva.',
      },
      {
        id: 'aprendizajes',
        title: 'Aprendizajes',
        content:
          'La práctica deliberada es diferente a la práctica repetitiva. No se trata de hacer más pantallas — se trata de hacer pantallas que te fuercen fuera de tu zona de confort cada vez.',
      },
    ],
    prevProject: 'palmira',
    nextProject: 'cosechar',
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined
  next: Project | undefined
} {
  const project = getProject(slug)
  return {
    prev: project?.prevProject ? getProject(project.prevProject) : undefined,
    next: project?.nextProject ? getProject(project.nextProject) : undefined,
  }
}

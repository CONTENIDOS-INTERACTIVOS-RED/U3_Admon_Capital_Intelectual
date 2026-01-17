export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Gestión estratégica y transformación del capital humano',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Alineación estratégica del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Rol del capital humano en la estrategia organizacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diagnóstico y mapeo de capacidades organizacionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Planificación estratégica del talento',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión del cambio organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios y modelos de gestión del cambio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cultura organizacional y resistencia al cambio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Comunicación y liderazgo en procesos de cambio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Innovación y liderazgo para la transformación del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tendencias en la innovación de la gestión del talento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Liderazgo transformacional y desarrollo de competencias',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Indicadores y evaluación de la transformación del capital humano',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Liaudat, S. (2021). <em>Stevia: conocimiento, propiedad intelectual y acumulación de capital</em>. Prometeo Libros.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/189040',
    },
    {
      referencia:
        'Hidalgo Gallardo, A. & Hidalgo Gallardo, R. L. (2019). <em>Comercio, medio ambiente y capital intelectual verde, una acción trifásica para México: Caso Hidalgo</em>. Plaza y Valdés.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129833',
    },
    {
      referencia:
        'Prieto Moreno, B. & Borrás Atiénzar, F. (2020). <em>Modelos para el análisis, medición y evaluación del capital intelectual en las universidades: 12do. Congreso Internacional de Educación Superior</em>. Editorial Universitaria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127967',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (Coord.). (2019). <em>Prevención del blanqueo de capitales y de la financiación del terrorismo</em>. Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/227240',
    },
    {
      referencia:
        'Serrano Junco, C. L. & Borda Fernández, O. A. (2020). <em>Gestión del conocimiento y administración sostenible en las empresas del sector de Curtiembre</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/149768',
    },
    {
      referencia:
        'Belly, P. (2019). <em>Así se gestiona el conocimiento: experiencias, testimonios y casos prácticos de implementación en empresas iberoamericanas</em>. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/121002',
    },
    {
      referencia:
        'García Lirios, C., Bermúdez Ruíz, G. & Correón Guillén, J. (2023). <em>Gobernanza corporativa: identidad, reputación e imagen en torno a la formación del capital intelectual</em>. Revista Colombiana de Ciencias Administrativas, 5(1), 2.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/234903',
    },
    {
      referencia:
        'Ortiz Isaza, L. & Perdomo González, L. (2020). <em>Factores destacados en la gestión del talento humano para conseguir los objetivos estratégicos de la empresa S&G Administración PH SAS</em>. Revista Colombiana de Ciencias Administrativas, 2(2), 59-77. Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/187928',
    },
    {
      referencia:
        'Cubillos Calderón, C. H., Cáceres Mayorga, J. X. & Montealegre González, J. V. (2022). <em>Prácticas de talento humano en pequeñas organizaciones</em>. Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228400',
    },
    {
      referencia:
        'Ariza Aguilera, D. A. (2019). <em>El talento humano como factor clave en el éxito de los proyectos</em>. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250972',
    },
    {
      referencia:
        'García Rubiano, M., Montenegro Timón, J. D. & Babativa Novoa, A. (2024). <em>Horizontes laborales: exploración de estrategias innovadoras en la gestión de talento humano</em>. Universidad Católica de Colombia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279552',
    },
    {
      referencia:
        'Castillo C., K. A., Córdova T., N. J. & Jaramillo Q., P. A. (2024). <em>Impacto de la responsabilidad laboral en la gestión del talento humano para incrementar la productividad en los trabajadores de una organización</em>. Instituto Superior Tecnológico Sudamericano - Loja (ISTS).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279457',
    },
    {
      referencia:
        'Manzano Díaz, A. G. (2024). <em>Formación de competencias en la educación superior y el perfil profesional en el área de talento humano</em>. Revista Colombiana de Ciencias Administrativas, 6(1), 1.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280129',
    },
    {
      referencia:
        'Rodríguez Jover, A. (2022). <em>Aplicaciones informáticas de administración de Recursos Humanos. ADGD0208</em>. IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226725',
    },
    {
      referencia:
        'Peña Lapeira, C. J. & Rey Romero, M. R. (2021). <em>Las competencias blandas en el emprendimiento</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231775',
    },
    {
      referencia:
        'De Arco Paternina, L. K., Santana Galindo, P. V. & Gómez, Y. V. (2022). <em>Habilidades blandas para el profesional del siglo XXI (Soft skills)</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232097',
    },
    {
      referencia:
        'González Molina, M. G. & Calixto Sandoval, N. P. (2024). <em>Desarrolla tus habilidades y potencia tu vida</em>. Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279920',
    },
    {
      referencia:
        'Autor de MAEP. (2021). <em>Propuesta de un nuevo modelo de alineamiento estratégico personal para profesionales de recursos humanos en posiciones estratégicas</em>. Visión de Futuro, 27(1).',
      link:
        'https://www.researchgate.net/publication/364401404_Propuesta_de_un_nuevo_modelo_de_alineamiento_estrategico_personal_para_profesionales_de_recursos_humanos_en_posiciones_estrategicos',
    },
    {
      referencia:
        'Ford Foundation. (2023). <em>Herramienta de mapeo organizacional (OMT)</em>.',
      link:
        'https://www.fordfoundation.org/wp-content/uploads/2018/11/spanish-omt__v5_march_2023.pdf',
    },
    {
      referencia:
        'González-Liedes, M. (2024). <em>Capacidades dinámicas de la organización: revisión de literatura</em>. Redalyc.',
      link:
        'https://www.redalyc.org/journal/4560/456054552003/456054552003.pdf',
    },
    {
      referencia:
        'Villalobos, J. (2024). <em>El mapa de capacidades de negocio. Lecturas para Arquitectos de Negocio</em>.',
      link:
        'https://www.researchgate.net/publication/331608341_El_Mapa_de_Capacidades_de_Negocio_-_Lecturas_para_Arquitectos_de_Negocio',
    },
    {
      referencia:
        'Bravo Rojas, L. M., Egusquiza Rodríguez, M. J. & Paz Campaña, A. E. (2020). <em>Cambio cultural y resistencias en entornos organizativos</em>. Repositorio UPN.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/8890527.pdf',
    },
    {
      referencia:
        'Delgado, D. & Rendón, J. (2020). <em>La cultura organizacional como motor de crecimiento empresarial</em>. Dialnet.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/9863197.pdf',
    },
    {
      referencia:
        'Cornerstone Perú. (2023). <em>Tendencias de talento humano 2023</em>.',
      link:
        'https://cornerstone.com.pe/wp-content/uploads/2023/01/Cornerstone-Tendencias-de-Talento-Humano-2023.pdf',
    },
    {
      referencia:
        'AWS. (2023). <em>Tendencias de Recursos Humanos en 2023</em>.',
      link:
        'https://occ-marketing.s3.amazonaws.com/2023/rp/Estudio%20Tendencias%20RRHH%202023%20VF%20%281%29.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de una persona u organización para ajustarse a cambios y nuevas condiciones.',
    },
    {
      termino: 'Aprendizaje organizacional',
      significado:
        'Proceso mediante el cual una organización mejora y adapta su comportamiento a partir de la experiencia.',
    },
    {
      termino: 'Cambio organizacional',
      significado:
        'Transformación de estructuras, procesos o cultura dentro de una organización.',
    },
    {
      termino: 'Capital humano',
      significado:
        'Conjunto de conocimientos, habilidades y competencias que poseen los empleados.',
    },
    {
      termino: 'Clima laboral',
      significado:
        'Percepción general de los trabajadores sobre su ambiente de trabajo.',
    },
    {
      termino: 'Competencias',
      significado:
        'Conjunto de conocimientos, habilidades y actitudes necesarias para desempeñar un rol laboral.',
    },
    {
      termino: 'Comunicación organizacional',
      significado:
        'Flujo de información dentro de una organización que permite coordinar y tomar decisiones.',
    },
    {
      termino: 'Desempeño',
      significado:
        'Grado de cumplimiento de objetivos por parte de un individuo o equipo.',
    },
    {
      termino: 'Evaluación del desempeño',
      significado:
        'Proceso sistemático para valorar el rendimiento de los empleados.',
    },
    {
      termino: 'Gestión del talento',
      significado:
        'Estrategia para atraer, desarrollar y retener a los empleados más capacitados.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida cuantitativa o cualitativa usada para evaluar el progreso de una actividad.',
    },
    {
      termino: 'Innovación',
      significado:
        'Aplicación de ideas nuevas para mejorar procesos, productos o servicios.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de influir y guiar a personas o grupos hacia el logro de objetivos.',
    },
    {
      termino: 'Mentoría',
      significado:
        'Relación de apoyo donde una persona con experiencia guía a otra en su desarrollo.',
    },
    {
      termino: 'Objetivo estratégico',
      significado:
        'Meta a largo plazo alineada con la visión de la organización.',
    },
    {
      termino: 'Productividad',
      significado:
        'Relación entre la producción obtenida y los recursos utilizados.',
    },
    {
      termino: 'Resiliencia',
      significado: 'Capacidad de afrontar y superar situaciones adversas.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Proceso de proporcionar información sobre el rendimiento o conducta de una persona.',
    },
    {
      termino: 'Satisfacción laboral',
      significado:
        'Grado de conformidad de un empleado con su trabajo y entorno.',
    },
    {
      termino: 'Visión organizacional',
      significado: 'Imagen del futuro deseado por una organización.',
    },
  ],
}

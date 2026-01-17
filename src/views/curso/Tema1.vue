<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Alineación estratégica del talento humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La alineación estratégica del talento humano, consiste en integrar las capacidades, valores y objetivos del personal con la misión y visión institucional, garantizando que cada colaborador contribuya eficazmente, al logro de las metas organizacionales. La literatura reciente señala que, implementar un plan estratégico de talento humano, promueve la claridad estratégica, reduce costos asociados a errores de selección y mejora el desempeño en función de los objetivos corporativos. Dicha integración se logra mediante herramientas como diagnósticos de competencias, planificación de vacantes y sistemas de evaluación continua.
        p(data-aos="fade-left") Asimismo, se enfatiza que la alineación estratégica repercute positivamente en el uso de recursos organizacionales como tecnologías de información, cultura y liderazgo, fortaleciendo así el rendimiento global de la empresa. Este enfoque, basado en la teoría de la contingencia, destaca la relación entre entorno, recursos internos y estrategia, señalando que una alineación efectiva es condición previa para alcanzar eficacia en la ejecución estratégica.
    
    .bg-color-1.p-4.mb-3.brd(data-aos="fade-left")
      p.mb-0 Otro aspecto imprescindible de este enfoque, es el modelo de alineamiento estratégico personal (MAEP), que propone que el trabajador incorpore sus valores, propósito y competencias profesionales a la estrategia organizacional, impulsando un mayor compromiso y sentido de pertenencia (Autor de MAEP, 2021).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Rol del capital humano en la estrategia organizacional
    
    p.mb-5 El capital humano representa uno de los activos más valiosos para las organizaciones, pues agrupa no solo habilidades y conocimientos, sino también valores, creatividad y compromiso. En los entornos empresariales actuales, dinámicos y altamente competitivos, situar al personal en el centro de la estrategia organizacional permite convertir el talento en un diferencial competitivo. Por ello, se destaca la importancia de desarrollar competencias laborales alineadas con los objetivos organizacionales, capaces de adaptarse tanto a cambios internos como externos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p La inversión en el capital intelectual a través de la administración del saber, potencia la productividad, la competitividad y la habilidad de toda la entidad. Este enfoque impulsa una cultura de aprendizaje continuo, donde cada colaborador contribuye activamente a la mejora de procesos, a la innovación y al desempeño colectivo. Además, identificar los factores como la comunicación, el liderazgo y la seguridad social fortalecen la gestión humana estratégica y repercuten positivamente en los resultados organizacionales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p En cuanto a la planificación estratégica del talento, debería ser considerada como un proceso constante, que engloba el diagnóstico de habilidades, la evaluación del rendimiento y la formación continua, con el fin de asegurar que el talento se encuentre en roles que optimicen su contribución a la misión institucional. Esta alineación favorece la creación de soluciones innovadoras y mejora la capacidad de adaptación al cambio.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Además de competencias técnicas, el desarrollo de habilidades blandas como comunicación, resiliencia, trabajo en equipo y liderazgo es esencial para que los estudiantes entrenan su capacidad de relacionarse, negociar y afrontar incertidumbre. Por ejemplo, diseñar un proyecto donde el líder promueva la creatividad del equipo permitirá no solo fortalecer habilidades blandas, sino también experimentar cómo el capital humano impacta directamente en el logro de objetivos.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Diagnóstico y mapeo de capacidades organizacionales
    
    .bg-color-6.mb-5.brd-1
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8.p-4(data-aos="fade-left").order-lg-2
                p.mb-0 El diagnóstico y mapeo de capacidades organizacionales, permite identificar las fortalezas y brechas en el talento humano y otros recursos críticos, facilitando la toma de decisiones alineadas con la estrategia institucional. Se trata de un proceso sistemático que inicia con la recolección de información mediante herramientas participativas, seguido del análisis de capacidades actuales y las requeridas para alcanzar los objetivos estratégicos (Ford Foundation, 2023).

              .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0.order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Capacidades" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Capacidades 
            p Según Villalobos (2024), el mapa de capacidades de negocio representa gráficamente las competencias principales de la organización, sirviendo como columna vertebral para conectar la intención estratégica con la operación efectiva. Esta representación facilita que equipos multidisciplinarios utilicen un vocabulario común y aceleren el diseño de soluciones transversales. Este enfoque promueve además el desarrollo de habilidades blandas como comunicación y colaboración, al involucrar a diferentes actores en sesiones de diagnóstico.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Caso práctico" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Caso práctico
            p Un caso práctico de aplicación, se observa en organizaciones sociales que implementan la Herramienta de Mapeo Organizacional (OMT), donde el equipo reflexiona colectivamente sobre fortalezas y áreas de mejora, definiendo acciones prioritarias a través del consenso (Ford Foundation, 2023). Este tipo de ejercicios fomenta la empatía, la escucha activa y el trabajo en equipo entre los participantes.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7b.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Capacidades dinámicas" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Capacidades dinámicas
            p En esta fase, el objetivo es generar una amplia gama de ideas creativas que puedan resolver el problema definido. El equipo utiliza técnicas de creatividad, como el brainstorming y el método SCAMPER, para explorar diversas soluciones sin restricciones. Durante esta etapa, es fundamental fomentar un ambiente abierto donde se compartan ideas sin juzgar, permitiendo que la creatividad fluya sin limitaciones.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7c.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Ejemplo de diagnóstico y mapeo de capacidades organizacionales
    p.mb-5 organizacionales Diagnóstico de capacidades organizacionales – Caso: Empresa de Servicios Educativos “EducaMás”

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Contexto general")
            p La empresa EducaMás se dedica a ofrecer formación continua a profesionales del área administrativa. Cuenta con un equipo interdisciplinario, presencia digital y alianzas estratégicas con universidades. Sin embargo, ha experimentado una disminución en la tasa de retención de estudiantes y dificultades para adaptar su oferta a las nuevas tendencias digitales.
    
          .div(titulo="Objetivo del diagnóstico")
            p Identificar las capacidades organizacionales actuales y requeridas que inciden en la sostenibilidad y crecimiento de EducaMás, con el fin de proponer acciones estratégicas que fortalezcan el talento humano y mejoren su desempeño organizacional.
    
          .div(titulo="Metodología")
            p Se aplicaron encuestas internas al personal, entrevistas semiestructuradas con líderes de área y un taller participativo usando la herramienta de Mapeo Organizacional (OMT).
          
          .div(titulo="Resultados del diagnóstico")
            h5 a. Capacidades identificadas:
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Fortalezas</b>. Cultura de trabajo colaborativo, compromiso del personal, reputación académica.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Debilidades</b>. Limitado manejo de herramientas tecnológicas, escasa innovación en metodologías de enseñanza, procesos administrativos poco automatizados.
            h5 b. Capacidades requeridas:
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Gestión de plataformas LMS.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Competencias digitales avanzadas en el equipo docente.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Diseño instruccional para ambientes virtuales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Automatización de procesos académicos y administrativos.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Mapa de capacidades (resumen)")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Capacidades estratégicas</b>. Diseño curricular adaptado al mercado, liderazgo participativo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Capacidades operativas</b>. Implementación tecnológica, soporte técnico continuo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Capacidades adaptativas</b>. Formación continua del personal, cultura de innovación.
    
          .div(titulo="Análisis e interpretación")
            p El diagnóstico revela un desbalance entre las capacidades actuales y las requeridas para responder al entorno digital. Si bien existe capital humano comprometido, se requiere una inversión significativa en formación y tecnologías.
    
          .div(titulo="Recomendaciones")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Diseñar un plan de formación docente en competencias digitales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Crear una unidad de innovación pedagógica.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Automatizar procesos claves con apoyo de herramientas tecnológicas.>
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 ●	Fortalecer la comunicación interna para facilitar la gestión del cambio.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Planificación estratégica del talento
    
    p.mb-5 La planificación estratégica del talento humano es un componente esencial para garantizar que las organizaciones cuenten con el personal idóneo, alineado con sus metas y desafíos futuros.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Planificación estratégica del talento
            p.mb-4(data-aos="fade-right") En el PDF <b>Planificación estratégica del talento</b>, se presenta un enfoque práctico y progresivo que aborda desde el diagnóstico de competencias hasta la evaluación de resultados, incluyendo un caso aplicado. Este material permite comprender cómo integrar capacidades técnicas y habilidades blandas en un plan coherente, sostenible y adaptado a entornos cambiantes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Planificación estratégica del talento.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://doi.org/10.46652/rgn.v9i39.1170" target="_blank" rel="noopener noreferrer") Noriega Niño de Guzmán, C. A., & Farfán Pimentel, J. F. (2024). Planeación estratégica en la gestión del talento humano en una organización empresarial: un estudio de caso. Revista RELIGACIÓN, 9(39), e2401170.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://doi.org/10.32645/13906852.1062" target="_blank" rel="noopener noreferrer") Vega, P. (2021). La alineación estratégica: revisión de literatura. Visión Empresarial, 11, 80–96. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://riico.net/index.php/riico/article/download/1383/1053" target="_blank" rel="noopener noreferrer") Flores Galavíz, J. L., & Chavarría López, L. R. (2022). La gestión del capital humano como estrategia para mejorar el desempeño organizacional de las empresas en México [Artículo]. Red Internacional de Investigadores en Competitividad. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.30554/lumina.v23.n1.4081.2022" target="_blank" rel="noopener noreferrer") Ramírez-Torres, W. E. (2022). Gestión del capital humano por competencias laborales en el contexto empresarial: una revisión de literatura. Lúmina, 23(1), E0019. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://hospitalgirardota.gov.co/wp-content/uploads/2022/02/PL-TH-05-PLAN-ESTRATEGICO-DE-TALENTO-HUMANO-VERSION-2.pdf" target="_blank" rel="noopener noreferrer") E.S.E. Hospital San Rafael de Girardota. (2022). Plan estratégico del talento humano [Documento institucional]. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://doi.org/10.46652/rgn.v9i39.1170" target="_blank" rel="noopener noreferrer") Noriega Niño de Guzmán, C. A., & Farfán Pimentel, J. F. (2024). Planeación estratégica en la gestión del talento humano en una organización empresarial: un estudio de caso. Revista RELIGACIÓN, 9(39), e2401170. 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=KHCz_fzsvxk" target="_blank" rel="noopener noreferrer") Ortega, R. (2021, 19 de abril). GDTH Planeación del talento humano en la organización. [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

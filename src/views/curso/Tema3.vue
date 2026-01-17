<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Innovación y liderazgo para la transformación del talento humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La innovación y el liderazgo actúan como motores esenciales para la transformación del talento humano, especialmente en contextos organizacionales actuales, marcados por entornos digitales, globalización y competitividad. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/1.png")
            .col-lg-7
              h5 Liderazgo innovador
              p Conlleva la promoción de una cultura en la que los individuos generen ideas, experimenten libertad para proponer y perciban su labor valorada. Este estilo promueve no solo el desarrollo de competencias técnicas, sino también habilidades blandas como creatividad, colaboración y apertura al riesgo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7
              h5 Modelos de gestión de talento humano orientados a la innovación
              p Destacan la importancia de diseñar procesos internos que conecten directamente con la estrategia institucional, donde la alineación entre innovación y procesos fortalece el compromiso del personal y su contribución al valor organización. Esta aproximación integral permite que los estudiantes comprendan el valor de liderar con propósito, integrando metodologías participativas y pensamiento sistémico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7
              h5 Liderazgo inclusivo y diverso
              p Este concepto ha emergido como una estrategia innovadora que impulsa la creatividad y el sentido de pertenencia en equipos heterogéneos. Esto implica aprovechar las distintas perspectivas como fuentes de innovación y resiliencia organizacional.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tendencias en la innovación de la gestión del talento
    
    p.mb-5 La gestión del talento humano se está transformando profundamente mediante la adopción de tendencias que combinan tecnología, cultura organizacional y enfoque en el bienestar de las personas. Estas tendencias deben integrarse de manera estratégica para que los futuros profesionales puedan diseñar iniciativas con impacto real y desarrollo de habilidades blandas.

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="34%" y="62.5%" numero="+")
                h5 Experiencia del empleado y flexibilidad laboral
                p Cada vez más organizaciones priorizan la experiencia del empleado, ofreciendo modelos de trabajo híbrido, beneficios personalizados y ambientes de aprendizaje continuo. Esto favorece que los estudiantes aprendan a diseñar propuestas centradas en el talento, desarrollando competencias como empatía, adaptabilidad y gestión del cambio.
    
              .bg-color-white.box-shadow.p-3(x="76%" y="89%" numero="+")
                h5 Analítica de datos e inteligencia artificial
                p La incorporación de inteligencia artificial y analítica predictiva, permite anticipar necesidades de talento, identificar competencias emergentes y personalizar planes formativos. Según datos de AWS (2023), más del 60 % de las empresas buscan “automatizar procesos de RRHH” y usar IA para selección. Esto exige que los estudiantes desarrollen pensamiento crítico y ético en el uso de datos y comprensión técnica para evaluar soluciones innovadoras.
    
              .bg-color-white.box-shadow.p-3(x="79%" y="38.5%" numero="+")
                h5 Diversidad, equidad e inclusión (DEI)
                p La DEI se consolida como una estrategia esencial en la gestión del talento. Algunas encuestas indican que más del 80 % de las organizaciones considera la diversidad y el propósito corporativo como tendencias claves. Los CIO deberán atender habilidades como comunicación intercultural, respeto y liderazgo inclusivos para implementar estos enfoques de forma efectiva.
    
              .bg-color-white.box-shadow.p-3(x="26%" y="38%" numero="+")
                h5 Resiliencia organizacional y bienestar integral
                p La resiliencia organizacional, impulsada por prácticas que fortalecen la salud mental y el compromiso, es otra tendencia en auge. El informe de AWS (2023) refleja que los candidatos priorizan “capacitación en habilidades digitales” y “resiliencia organizacional” como factores decisivos en su integración. Esto promueve que los estudiantes valoren el desarrollo de habilidades blandas como comunicación empática y liderazgo colaborativo.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1 
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          p <b>Ejemplo aplicado</b>. Un proyecto en curso para una pyme tecnológica, consiste en implementar un programa de mentoría inversa donde jóvenes con experiencia digital guían a mandos intermedios. Esto mejora la experiencia del empleado, fortalece el aprendizaje bidireccional y promueve una cultura inclusiva, al tiempo que utiliza herramientas digitales para seguimiento y evaluación. Este enfoque refuerza habilidades blandas como colaboración intergeneracional, comunicación y adaptabilidad.
          p.mb-0 Las tendencias actuales en la gestión innovadora del talento humano centradas en la experiencia, tecnología, diversidad y bienestar demandan que los futuros profesionales diseñen estrategias integrales y humanizadas. 
        p Comprender y aplicar estas tendencias permitirá a los estudiantes desarrollar habilidades técnicas y blandas como liderazgo inclusivo, pensamiento analítico y empatía, preparándolos para enfrentar y liderar entornos laborales dinámicos y complejos.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Liderazgo transformacional y desarrollo de competencias
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/6.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") El liderazgo transformacional empodera a las personas al inspirar una visión compartida, estimular la innovación y cultivar un propósito elevado. En ámbitos como las pequeñas y medianas empresas y entidades educativas, se ha determinado que este enfoque fomenta un incremento en la motivación, dedicación y transmisión de saberes, con efectos notablemente beneficiosos para el desempeño en el trabajo.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tipo de liderazgo se fundamenta en cuatro elementos fundamentales: una visión inspiradora, una influencia idealizada, una estimulación intelectual y una consideración personalizada. Cada uno potencia tanto destrezas técnicas como socioemocionales: capacidad de análisis crítico, capacidad de adaptación, comunicación empática y liderazgo moral.
    
        p(data-aos="fade-left") Un estudio en instituciones educativas demostró que el liderazgo transformacional mejora la calidad educativa al incrementar la participación del equipo y el rendimiento académico. Esto refuerza la idea de que este enfoque fortalece hábitos de aprendizaje, construcción colectiva y habilidades blandas.
    
    .bg-color-1.mb-5.brd
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9.p-4(data-aos="fade-left").order-2
                p <b>Ejemplo aplicado</b>. Imaginemos una pyme que adopta un nuevo sistema ERP. El gerente, actuando como líder transformacional, comparte una visión inspiradora del cambio; motiva al equipo a proponer mejoras; fomenta debates durante las capacitaciones, y reconoce públicamente los logros. Como resultado, el personal gana confianza, mejora su desempeño y desarrolla competencias claves como resolución de problemas, colaboración y adaptabilidad.
                p.mb-0 El liderazgo transformacional no solo impulsa la ejecución eficiente de procesos, sino que también promueve el desarrollo integral de competencias técnicas y socioemocionales. Este estilo de liderazgo forma profesionales capaces de generar impacto, liderar equipos con empatía y adaptarse a entornos dinámicos y complejos.

              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema3/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Cuadro comparativo: liderazgo transformacional vs. otros estilos de liderazgo
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Aspecto
            th.bg-color-2.text-center Liderazgo transformacional
            th.bg-color-2.text-center Liderazgo tradicional / Autoritario
        tbody
          tr
            td Visión y propósito
            td El líder inspira con una visión clara del futuro. Ejemplo: un gerente que motiva al equipo a digitalizar procesos para mejorar la atención al cliente.
            td El líder impone metas sin consultar. Ejemplo: un jefe que ordena tareas sin explicar el propósito general.
          tr.bg-color-sintesis
            td Relación con el equipo
            td Estrecha, basada en la confianza y el acompañamiento. Ejemplo: se hacen reuniones de retroalimentación participativa.
            td Distante y jerárquica. Ejemplo: solo se comunica por correos con órdenes directas.
          tr
            td Innovación
            td Fomenta la creatividad y la mejora continua. Ejemplo: invita a los colaboradores a proponer nuevas ideas.
            td Se siguen rutinas establecidas. Ejemplo: se rechazan cambios por considerarlos riesgosos.
          tr.bg-color-sintesis
            td Desarrollo de competencias
            td Promueve el aprendizaje y el crecimiento. Ejemplo: ofrece capacitaciones adaptadas al potencial del personal.
            td Se enfoca en mantener el statu quo. Ejemplo: capacita solo cuando es obligatorio.
          tr
            td Motivación
            td Basada en valores, inspiración y reconocimiento. Ejemplo: celebra públicamente logros individuales y grupales.
            td Basada en el miedo o la obligación. Ejemplo: amenaza con sanciones si no se cumplen los objetivos.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Indicadores y evaluación de la transformación del capital humano
    
    p.mb-5 La gestión efectiva del capital humano transformado, requiere indicadores claves y procesos de evaluación que permitan medir su impacto real en la organización. La selección de indicadores (KPI) debe responder a los objetivos estratégicos y al desarrollo de competencias, tanto técnicas como humanas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Principales categorías de indicadores
              p Los indicadores de RR. HH. pueden clasificarse en diez KPI esenciales: tasa de contratación, rotación, ausentismo, tiempo de contratación, nivel de satisfacción, entre otros. Estos permiten evaluar áreas críticas como la retención del talento, la agilidad del reclutamiento y el clima laboral.
              p Asimismo, se recomienda medir horas de formación por empleado, tasas de promoción interna y tiempo de cobertura de vacantes. Estos indicadores reflejan la inversión en desarrollo humano, reconocimiento de progresión y capacidad de respuesta organizacional al cambio.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Evaluación del desempeño
              p La evaluación del desempeño, apoyada en instrumentos como feedback 360° o evaluaciones semestrales, aporta una mirada cualitativa que complementa los KPI cuantitativos. Un estudio en el sector público ecuatoriano mostró cómo estas evaluaciones permiten ajustar metas, fortalecer habilidades y promover una cultura de mejora continua.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Medición del bienestar y clima organizacional
              p Indicadores cualitativos como la satisfacción laboral, el involucramiento o el clima son esenciales para comprender la experiencia del empleado. Herramientas como encuestas periódicas o grupos focales permiten medir la percepción del equipo y generar acciones para fortalecer la cohesión, empatía y comunicación interna.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Ejemplo práctico.
        p Una consultora mid-size implementó estos KPI:

        .titulo-figura.mb-4
          h5 Tabla 3.
          span KPI
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.p-3.bg-color-2.text-center Indicador
                th.p-3.bg-color-2.text-center Antes
                th.p-3.bg-color-2.text-center Después
            tbody
              tr
                td.p-2 Retención
                td.p-2 75 %
                td.p-2 85 %
              tr.bg-color-sintesis
                td.p-2 Horas de formación/empleado
                td.p-2 8 h
                td.p-2 12 h
              tr
                td.p-2 Ausentismo
                td.p-2 5 %
                td.p-2 3 %
              tr.bg-color-sintesis
                td.p-2 Satisfacción laboral (escala 1-5)
                td.p-2 3.8
                td.p-2 4.3

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-5.p-5.mb-3(data-aos="fade-left")
          p.mb-5 Tras seis meses, se fortalecieron habilidades blandas claves: empatía, resiliencia y comunicación eficaz. Además, se creó un tablero de seguimiento compartido, lo que requirió habilidades de liderazgo colaborativo, análisis de datos y storytelling para presentar resultados.
          p.mb-0 Un sistema robusto de indicadores combinado con evaluaciones cualitativas, permite medir con precisión la transformación del capital humano. Este abordaje capacita al estudiante para desarrollar competencias analíticas, de comunicación, liderazgo y desarrollo humano, esencial para liderar en entornos organizacionales contemporáneos.

    h2(data-aos="fade-left") Estudio de caso. Evaluación de la transformación del capital humano
    p.mb-5 Este estudio de caso presenta la experiencia de una empresa del sector tecnológico, llamada InnoTech S.A.S., que decidió transformar su modelo de gestión del talento humano para mejorar la productividad, el clima laboral y la retención de talento.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Contexto organizacional")
            p InnoTech S.A.S. contaba con una alta rotación de personal (30 %), bajo compromiso laboral (índice de 3.2 sobre 5) y una limitada inversión en capacitación. La gerencia decidió implementar un plan de transformación del capital humano basado en liderazgo transformacional, capacitación continua y cultura de reconocimiento.
    
          .div(titulo="Indicadores establecidos")
            p Certificaciones HACCP y NSF para garantizar la seguridad y calidad de los productos.
            .row.justify-content-center
              .col-lg-11
                .tabla-a.color-acento-botones
                  table
                    thead
                      tr
                        th.bg-color-2.text-center Indicador
                        th.bg-color-2.text-center Objetivo
                    tbody.bg-color-white
                      tr
                        td Índice de rotación
                        td Reducir al 15 % en 12 meses
                      tr.bg-color-sintesis
                        td Índice de compromiso
                        td Aumentar a 4.0 sobre 5
                      tr
                        td Horas de capacitación por empleado
                        td Incrementar de 6 a 12 horas al semestre
                      tr.bg-color-sintesis
                        td Satisfacción laboral
                        td Mejorar en 20 % en encuestas internas
                      tr
                        td Tasa de promociones internas
                        td Alcanzar un 30 % del total de vacantes

    
          .div(titulo="Evaluación de resultados")
            p Después de un año de ejecución del plan, se observaron mejoras significativas:
            .row.justify-content-center
              .col-lg-11
                .tabla-a.color-acento-botones

    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Análisis y relevancia
        p.mb-5(data-aos="fade-left") El éxito de la estrategia se sustentó en el uso sistemático de indicadores y en la evaluación periódica. Esta medición permitió tomar decisiones informadas, ajustar acciones y fomentar una cultura de mejora continua. La implementación no solo mejoró el clima organizacional, sino que también fortaleció competencias como el trabajo en equipo, liderazgo, comunicación efectiva y compromiso profesional.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La evaluación mediante indicadores en procesos de transformación del capital humano permite monitorear avances y evidenciar resultados tangibles. Este enfoque favorece el desarrollo de habilidades blandas, refuerza el sentido de pertenencia y mejora el desempeño general de la organización.
    
        


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ccl.org/wp-content/uploads/2017/06/Innovation-Leadership-Castilian-Spanish.pdf" target="_blank" rel="noopener noreferrer") enter for Creative Leadership. (2009). Liderazgo para la innovación [PDF]. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/909/90900107.pdf " target="_blank" rel="noopener noreferrer") Redalyc. (2020). Liderazgo transformacional: dimensiones e impacto. Redalyc. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/10051247.pdf" target="_blank" rel="noopener noreferrer") Cedeño Rodríguez, L. J., & Murillo Mora, M. K. (2025). Liderazgo transformacional en la mejora de la calidad educativa en la Educación Básica. Reincisol, 4(7), 1534–1561. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/9378092.pdf" target="_blank" rel="noopener noreferrer") Ormaza Cevallos, M. G., Lozano Jaramillo, G. A., Chávez Franco, J. A., & Andrade Vera, S. A. (2023). Liderazgo transformacional: un enfoque efectivo para el rendimiento laboral de las pymes ecuatorianas. Revista Venezolana de Gerencia, 28(Especial 10), 1678–1692. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/9535919.pdf" target="_blank" rel="noopener noreferrer") Vaca-Zambrano, F., Loor-Carvajal, G., & Sánchez-Briones, Y. (2024). Evaluación del desempeño como parte de la gestión de recursos humanos en Gobiernos municipales de la Provincia de Manabí. 593 Digital Publisher CEIT, 9(3), 474–494. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.reincisol.com/ojs/index.php/reincisol/article/download/806/1750/2969" target="_blank" rel="noopener noreferrer") Modelo de gestión de talento humano orientados a la innovación: caso de estudio Super-Colchón. (2025). Reincisol. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rADZAdGDJMM    " target="_blank" rel="noopener noreferrer") Instituto de altos estudios nacionales (2022, 3 de agosto). Innovación en gestión del talento humano. [Vídeo] YouTube.         



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes elementos es clave para evaluar la transformación del capital humano en una organización?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Incremento de productos en stock.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Nivel de satisfacción laboral.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducción de costos de producción.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Número de proveedores internacionales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué indicador permite medir la inversión en desarrollo profesional de los empleados?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Nivel de rotación de personal.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Cantidad de licencias médicas.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Horas de capacitación por empleado.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Número de reuniones directivas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el objetivo principal del liderazgo transformacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Asegurar el cumplimiento estricto de normas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Inspirar y motivar al equipo para alcanzar objetivos superiores.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Limitar la autonomía de los empleados.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Priorizar los resultados financieros sobre el bienestar.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué concepto se refiere a la capacidad de una persona u organización para ajustarse al cambio?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Adaptabilidad.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Productividad.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Delegación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Supervisión.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué acción fomenta el desarrollo de habilidades blandas en un entorno organizacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Asignar tareas repetitivas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Establecer programas de mentoría y liderazgo colaborativo.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminar retroalimentación continua.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir la comunicación entre áreas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>

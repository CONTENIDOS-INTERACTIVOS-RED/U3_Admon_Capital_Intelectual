<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Gestión del cambio organizacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La gestión del cambio organizacional es un proceso deliberado que permite a las organizaciones adaptarse a nuevas condiciones, tecnologías y exigencias del entorno. Se fundamenta en entender tanto los elementos técnicos como las respuestas humanas frente a la transformación, garantizando que los empleados participen de manera activa y comprometida.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Resistencia al cambio
              p Uno de los mayores desafíos es gestionar la resistencia al cambio, un fenómeno humano natural que puede frenar los procesos transformacionales. La resistencia aparece por hábitos establecidos, miedo a lo que no se conoce o falta de involucramiento. En este contexto, la literatura subraya que el desconocimiento de la resistencia al cambio puede ocasionar una reducción en la productividad y un aumento en la ausencia.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estrategias de habilitación
              p Comprenden una comunicación nítida y constante, una educación apropiada y un liderazgo colaborativo, fortalecidos por procesos que consolidan las transformaciones hasta su institucionalización. Estas prácticas ayudan a construir un entorno donde el cambio es percibido como un avance compartido y no una amenaza.
          
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Modelos de liderazgo transformacional
              p En los que los líderes generen visiones motivadoras y promuevan la motivación, la confianza y el empoderamiento de los trabajadores. Así, el cambio se convierte en una oportunidad de mejora colectiva y desarrollo organizacional.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Principios y modelos de gestión del cambio
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La gestión del cambio se basa en principios esenciales que garantizan la efectividad de las transformaciones organizacionales. Primero, sobresale la comunicación clara y constante, la cual facilita la creación de conciencia sobre la importancia del cambio y disminuye la incertidumbre entre los empleados. 
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, es esencial fomentar la implicación activa, dado que esto potencia el compromiso personal y disminuye la resistencia. Adicionalmente, es necesario instaurar sistemas de respaldo emocional y capacitación para simplificar la adaptación y el proceso de aprendizaje.
        p En cuanto a los modelos estructurados de cambio, se destacan tres enfoques ampliamente validados:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Modelo de Kurt Lewin")
            p Este modelo propone tres fases interrelacionadas: “descongelamiento”, “cambio” y “recongelamiento”. Durante el descongelamiento se genera un sentido de urgencia; en la fase de cambio se implementan nuevas prácticas, y el recongelamiento asegura que los nuevos comportamientos se consoliden en la cultura organizacional.
    
          .div(titulo="Modelo ADKAR (Prosci).")
            p Se centra en cinco etapas relacionadas con la experiencia individual. Awareness, Desire, Knowledge, Ability y Reinforcement (Conciencia, Deseo, Conocimiento, Habilidad y Refuerzo). Su enfoque, paso a paso, permite diseñar intervenciones claras que acompañan a la persona en su proceso de cambio.
    
          .div(titulo="Pensamiento Lean aplicado al cambio")
            p Propone integrar principios de mejora continua, eliminación de desperdicios y enfoque al cliente dentro de los procesos de transformación organizacional.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8.p-4(data-aos="fade-left").order-lg-2
                p Ejemplo aplicado. En un proyecto de transformación digital para una pyme, se empleó el modelo de Lewin para introducir una nueva plataforma de gestión de proyectos.
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Descongelamiento</b>: se realizaron talleres participativos para sensibilizar sobre los beneficios de la nueva herramienta.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Cambio</b>: se capacitó a los equipos, se realizaron pilotos y se ajustaron procesos con base en feedback.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Recongelamiento</b>: se institucionalizó el uso mediante manuales, políticas internas y facilitadores internos (mentores), promoviendo la adopción sostenida.

              .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0.order-lg-1
                img.img-fluid(src='@/assets/curso/tema2/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-12.p-4.mb-3(data-aos="fade-left")
      p.mb-0 Este proceso también incluyó sesiones de seguimiento, refuerzos positivos y canales de comunicación abiertos, alineados con los principios ADKAR.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Cuadro comparativo: principios vs. modelos de gestión del cambio organizacional
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Elemento
            th.bg-color-2.text-center Principios de gestión del cambio
            th.bg-color-2.text-center Modelos de gestión del cambio
        tbody
          tr.bg-color-sintesis
            td Definición
            td Lineamientos generales que guían cómo debe gestionarse el cambio, centrados en el comportamiento humano y la cultura organizacional
            td Estructuras teóricas o prácticas que describen etapas o pasos específicos para implementar el cambio
          tr
            td Enfoque
            td Comunicación, participación, liderazgo, formación y refuerzo positivo
            td Etapas secuenciales como las del modelo Lewin (descongelar, cambiar, recongelar) o ADKAR (conciencia, deseo, conocimiento, habilidad, refuerzo)
          tr.bg-color-sintesis
            td Ejemplo práctico
            td En un cambio de plataforma, se fomenta la participación del equipo, se comunica el motivo y se refuerza el aprendizaje
            td Se aplica el modelo Lewin para estructurar el cambio: primero sensibilización, luego implementación y finalmente consolidación
          tr
            td Resultado esperado
            td Compromiso de los colaboradores y menor resistencia al cambio
            td Ejecución estructurada y medible del proceso de cambio
          tr.bg-color-sintesis
            td Aplicabilidad
            td Transversal a cualquier organización o tipo de cambio
            td Depende del tipo de cambio, del contexto y de los objetivos específicos

    
    

    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        #t_2_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 2.2] Cultura organizacional y resistencia al cambio

        .row.justify-content-center.align-items-center
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 Para estudiar esta temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Cultura organizacional y resistencia al cambio"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Comunicación y liderazgo en procesos de cambio
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4(data-aos="fade-left") La comunicación efectiva y el liderazgo adecuado, son piezas claves para el éxito de cualquier proceso de cambio organizacional. Una comunicación precisa, a tiempo y de doble vía, ayuda a crear confianza, disminuir la incertidumbre y promover la implicación activa de los empleados. En cambio, un liderazgo cercano y empático potencia las relaciones personales, promueve el aprendizaje grupal y simplifica la adaptación a las modificaciones.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El liderazgo transformacional se menciona frecuentemente como un estilo eficaz para guiar los procesos de cambio. Esta perspectiva fomenta que los líderes fomenten una visión conjunta, incentiven conductas innovadoras y fortalezcan a los individuos. En este contexto, la fusión de una comunicación continua con estilos de liderazgo adaptativo favorece que el equipo se mantenga comprometido y resiliente ante nuevas circunstancias.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1    
        .bg-color-3.text-white.p-5.mb-3(data-aos="fade-left")
          p.mb-0 <b>Ejemplo práctico</b>. En una institución universitaria que implemente un sistema de gestión académica electrónica, un buen liderazgo y comunicación involucra al equipo docente desde las primeras fases del cambio. Envíos de boletines semanales, espacios virtuales de aclaración y talleres de equipo facilitan el entendimiento y reducen la resistencia. Adicionalmente, los líderes deben escuchar activamente, reconocer avances y brindar acompañamiento continuo para fortalecer el aprendizaje y el sentido de pertenencia.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ciat.org/resistencia-al-cambio-organizacional-algunas-causas-y-propuestas-para-manejarla/" target="_blank" rel="noopener noreferrer") Centro Internacional de Agricultura Tropical (CIAT). (2024). Resistencia al cambio organizacional: algunas causas y propuestas para manejarla. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cebma.org/assets/Uploads/Reyes-Madrid-2022.pdf " target="_blank" rel="noopener noreferrer") Reyes-Madrid, J. (2022). Prácticas habilitadoras del cambio organizacional. Édición especial gestión del cambio. CEBMA. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.prosci.com/adkar-model-free-download" target="_blank" rel="noopener noreferrer") Prosci. (2020). ADKAR: A model for change in business, government and our community. Prosci Learning Center. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.22201/fca.24488410e.2022.2912" target="_blank" rel="noopener noreferrer") Zambrano Cancañón, C. E., Lao León, Y. O., & Moreno Pino, M. R. (2021). Modelo de gestión del cambio organizacional con pensamiento lean en servicios turísticos. Contaduría y Administración, 67(1), 23-46.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Cambio_organizacional" target="_blank" rel="noopener noreferrer") Wikipedia. (2023, agosto 15). Gestión del cambio organizacional. En Wikipedia, La enciclopedia libre. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/363158790_CULTURA_ORGANIZACIONAL_Y_GESTION_DEL_CAMBIO_EN_INSTITUCIONES_EDUCATIVAS_AYACUCHO_2020" target="_blank" rel="noopener noreferrer") Poma Solier, T., Zenobio, E., & Yarasca, H. (2020). Cultura organizacional y gestión del cambio en instituciones educativas [Artículo]. ResearchGate. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/371451078_El_liderazgo_y_el_coaching_en_el_cambio_organizacional_Una_perspectiva_desde_el_factor_humano" target="_blank" rel="noopener noreferrer") Guadarrama Varón, I. Y., Gómora Miranda, Y. Y., & Caballero Santín, M. (2022). El liderazgo y el coaching en el cambio organizacional: una perspectiva desde el factor humano. ResearchGate. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/782/78212103.pdf" target="_blank" rel="noopener noreferrer") Redacción académica. (2005). La comunicación como herramienta de gestión organizacional [Artículo]. Redalyc. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.59282/reincisol.V3(6)4125-4145" target="_blank" rel="noopener noreferrer") Toro, V., & Núñez, F. (2024). Estrategias de liderazgo en la gestión del cambio organizacional en la Dirección Distrital Guaranda-Salud. Reincisol, 3(6), 4125–4145. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/353497273_El_cambio_y_su_impacto_en_las_organizaciones" target="_blank" rel="noopener noreferrer") Gómez, L. (2021). El cambio y su impacto en las organizaciones. ResearchGate. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Od7kKG3DJGs             " target="_blank" rel="noopener noreferrer") Universidad Continental. (2024, 5 de diciembre). Liderazgo y gestión del cambio. [Vídeo] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
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
              '¿Cuál de las siguientes acciones es más efectiva para aumentar el sentido de pertenencia en los colaboradores?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Establecer metas de producción mensuales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Incrementar el número de reuniones técnicas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Reconocer públicamente los logros individuales y colectivos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Implementar más tareas administrativas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué elemento <strong>NO</strong> forma parte del concepto de salario emocional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Bonificación económica anual',
                esCorrecta: true,
              },
              { id: 'b', texto: 'Flexibilidad de horario', esCorrecta: false },
              {
                id: 'c',
                texto: 'Reconocimiento del esfuerzo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Posibilidades de desarrollo profesional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el objetivo principal de una estrategia de fidelización del talento humano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumentar el número de empleados en la organización',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Establecer turnos rotativos obligatorios',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Disminuir la cantidad de descansos en la jornada',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Retener a los colaboradores valiosos y comprometidos',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué estrategia ayuda directamente a fortalecer el bienestar emocional de los trabajadores?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumento en la carga de trabajo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Eliminación de pausas activas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Implementación de vigilancia estricta',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Programas de manejo del estrés y salud mental',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes indicadores podría utilizarse para evaluar el éxito de una estrategia de bienestar organizacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Número de informes contables entregados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Cantidad de productos defectuosos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Nivel de satisfacción laboral medido por encuestas',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Total de reuniones realizadas en el mes',
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

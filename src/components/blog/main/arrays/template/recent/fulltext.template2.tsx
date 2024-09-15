import React from 'react';

const ProcessStagesTemplate = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="font-bold text-2xl border-b-2 border-gray-300 pb-2">Etapas del Proceso Administrativo</h1>
      <p>
        Las etapas del proceso administrativo son el conjunto de funciones que, ejecutadas de manera eficiente y efectiva, garantizan el buen uso de los recursos, favorecen una acertada toma de decisiones y facilitan el logro de los objetivos institucionales. Este proceso es crucial para <span className="font-semibold">direccionar a la empresa</span> tanto en el <span className="italic">corto</span> como en el <span className="italic">largo plazo</span>, garantizando así el crecimiento de sus operaciones.
      </p>

      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">1. Planificación</h2>
      <p>
        La <span className="font-semibold">planificación</span> es la primera etapa del proceso administrativo y busca anticipar el escenario que se enfrentará, definiendo el <span className="font-semibold">rumbo y los objetivos</span> de la organización. Incluye prever las acciones necesarias, asignar recursos y establecer estrategias para alcanzar las metas. La planificación responde a preguntas como: <em>¿Qué se quiere lograr?</em> y <em>¿Cómo y cuándo se hará?</em>
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Definición de objetivos:</strong> Claros y alcanzables.</li>
        <li><strong>Estrategias:</strong> Identificar los pasos para alcanzar los objetivos.</li>
        <li><strong>Recursos:</strong> Determinar qué recursos (humanos, financieros, tecnológicos) se requieren.</li>
      </ul>

      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">2. Organización</h2>
      <p>
        La <span className="font-semibold">organización</span> es la etapa en la que se estructura la empresa para alcanzar los objetivos definidos en la planificación. Esto implica <span className="italic">disponer</span> y <span className="italic">estructurar</span> las funciones de los empleados y los recursos necesarios para ejecutar los planes.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>División del trabajo:</strong> Determinar qué tareas se realizarán y quién las hará.</li>
        <li><strong>Departamentalización:</strong> Agrupar actividades similares en áreas o departamentos.</li>
        <li><strong>Jerarquía:</strong> Establecer las líneas de autoridad y los canales de comunicación.</li>
      </ul>

      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">3. Dirección</h2>
      <p>
        La <span className="font-semibold">dirección</span> busca influir positivamente en las personas que integran la organización para lograr los objetivos grupales. Esto incluye <span className="italic">motivar</span> a los empleados, resolver conflictos, y elegir los canales de comunicación más efectivos.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Liderazgo:</strong> Guiar a los empleados hacia los objetivos.</li>
        <li><strong>Motivación:</strong> Incentivar a los trabajadores para mejorar su desempeño.</li>
        <li><strong>Comunicación:</strong> Asegurar un flujo eficiente de información.</li>
        <li><strong>Toma de decisiones:</strong> Resolver problemas y ajustar acciones en el proceso.</li>
      </ul>

      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">4. Control</h2>
      <p>
        El <span className="font-semibold">control</span> es la etapa final donde se monitorea y evalúa el desempeño para asegurar que los objetivos se están cumpliendo. Se compara lo planificado con los resultados obtenidos y se corrigen desviaciones si es necesario.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Evaluación:</strong> Comparar resultados con los objetivos.</li>
        <li><strong>Medición:</strong> Utilizar indicadores de desempeño.</li>
        <li><strong>Corrección:</strong> Ajustar acciones para mejorar resultados futuros.</li>
      </ul>
      
      <p>
        Este ciclo es <span className="font-semibold">continuo</span>: una vez finalizado el control, los resultados alimentan la próxima fase de planificación, mejorando constantemente el proceso administrativo.
      </p>

      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">Ejemplos Específicos</h2>
      
      <h3 className="font-semibold text-lg">1. Planificación</h3>
      <p><strong>Ejemplo:</strong> Empresa de moda que lanza una nueva colección de ropa sostenible.</p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Definición de objetivos:</strong> Lanzar una colección de ropa ecológica en tres meses, con un aumento del 15% en las ventas de su tienda en línea.</li>
        <li><strong>Estrategias:</strong> Utilizar materiales reciclados, colaborar con influencers de moda sostenible, y desarrollar una campaña de marketing digital.</li>
        <li><strong>Recursos:</strong> Presupuesto de $100,000 para producción, publicidad y logística, y un equipo especial para supervisar el proyecto.</li>
      </ul>

      <h3 className="font-semibold text-lg">2. Organización</h3>
      <p><strong>Ejemplo:</strong> Empresa de servicios financieros que mejora sus procesos de atención al cliente.</p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>División del trabajo:</strong> El equipo de tecnología desarrolla un nuevo sistema de atención automatizada, el equipo de recursos humanos capacita al personal, y el departamento de marketing informa a los clientes.</li>
        <li><strong>Departamentalización:</strong> Tres equipos: desarrollo tecnológico, capacitación y comunicación, coordinan entre sí.</li>
        <li><strong>Jerarquía:</strong> El director de operaciones coordina y supervisa a todos los departamentos.</li>
      </ul>

      <h3 className="font-semibold text-lg">3. Dirección</h3>
      <p><strong>Ejemplo:</strong> Empresa de alimentos que implementa un nuevo sistema de gestión de inventario.</p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Liderazgo:</strong> El gerente de operaciones motiva a los empleados de bodega para adoptar el nuevo sistema de escaneo digital.</li>
        <li><strong>Motivación:</strong> Incentivos para empleados que aprendan el nuevo sistema y reduzcan las pérdidas por inventario.</li>
        <li><strong>Comunicación:</strong> Reuniones semanales y plataforma interna de comunicación para mantener a todos informados.</li>
        <li><strong>Toma de decisiones:</strong> Ajustes en los turnos del personal y nuevas políticas de gestión de inventarios.</li>
      </ul>

      <h3 className="font-semibold text-lg">4. Control</h3>
      <p><strong>Ejemplo:</strong> Empresa de software que monitorea el lanzamiento de una nueva aplicación móvil.</p>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Evaluación:</strong> Comparar descargas, tasa de retención y comentarios con los objetivos establecidos.</li>
        <li><strong>Medición:</strong> Métricas como descargas diarias, comentarios positivos y tasa de errores.</li>
        <li><strong>Corrección:</strong> Lanzar una actualización para mejorar la experiencia del usuario basada en los comentarios recibidos.</li>
      </ul>
    </div>
  );
};

export default ProcessStagesTemplate;

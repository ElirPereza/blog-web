import React from 'react';

const FulltextTemplate = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">Análisis del entorno interno</h2>
      <p>
        Este análisis se centra en los factores que están bajo el <span className="font-semibold">control de la organización</span>, como los <em>recursos</em>, <em>capacidades</em> y <em>estructuras</em>.
      </p>

      <h3 className="font-semibold text-lg">Fortalezas</h3>
      <p>
        Son aquellos <span className="font-semibold">puntos positivos</span> que diferencian a las organizaciones de la competencia, como un <span className="italic">personal altamente capacitado</span>, <span className="italic">recursos financieros</span> o <span className="italic">tecnológicos</span>, y <span className="italic">procesos eficientes</span>.
      </p>
      <p>
        <strong>Ejemplo:</strong> Una empresa de tecnología con un equipo de ingenieros innovadores y procesos productivos eficientes.
      </p>

      <h3 className="font-semibold text-lg">Debilidades</h3>
      <p>
        Son los <span className="font-semibold">puntos débiles</span> que limitan el crecimiento de la organización, como la <span className="italic">falta de recursos</span>, una <span className="italic">estructura organizacional ineficaz</span>, <span className="italic">tecnología obsoleta</span> o <span className="italic">problemas de liderazgo</span>.
      </p>

      <h2 className="font-bold text-xl border-b-2 border-gray-300 pb-2">Análisis del entorno externo</h2>
      <p>
        El entorno externo incluye factores que no están bajo el <span className="font-semibold">control de la organización</span>, pero que pueden influir significativamente en su <span className="font-semibold">éxito</span> o <span className="font-semibold">fracaso</span>. Aquí se puede utilizar el análisis <span className="font-semibold">PESTEL</span>:
      </p>

      <h3 className="font-semibold text-lg">Político</h3>
      <p>
        Factores relacionados con el <span className="font-semibold">gobierno</span>, <span className="font-semibold">legislación</span> y <span className="font-semibold">políticas públicas</span> que pueden impactar a la empresa. <em>Ejemplo:</em> cambios en las leyes laborales o políticas fiscales.
      </p>

      <h3 className="font-semibold text-lg">Económico</h3>
      <p>
        Factores económicos que afectan a la organización, como <span className="italic">tasas de interés</span>, <span className="italic">inflación</span>, <span className="italic">desempleo</span> y el <span className="italic">ciclo económico</span>. <em>Ejemplo:</em> una recesión puede disminuir la demanda de productos o servicios.
      </p>

      <h3 className="font-semibold text-lg">Social</h3>
      <p>
        Cambios en las <span className="font-semibold">preferencias de los consumidores</span>, <span className="font-semibold">demografía</span> o <span className="font-semibold">cultura</span> que pueden influir en la demanda de productos o servicios. <em>Ejemplo:</em> un aumento en la conciencia ambiental puede influir en la demanda de productos sostenibles.
      </p>

      <h3 className="font-semibold text-lg">Tecnológico</h3>
      <p>
        Avances <span className="font-semibold">tecnológicos</span> que pueden afectar a la industria. <em>Ejemplo:</em> la automatización de procesos puede reducir costos o mejorar la eficiencia, pero también requerir una inversión inicial significativa.
      </p>

      <h3 className="font-semibold text-lg">Ecológico</h3>
      <p>
        Factores <span className="font-semibold">ambientales</span> y de <span className="font-semibold">sostenibilidad</span>. <em>Ejemplo:</em> el cambio climático o las regulaciones ambientales pueden obligar a las empresas a adaptarse a prácticas más sostenibles.
      </p>

      <h3 className="font-semibold text-lg">Legal</h3>
      <p>
        Cambios en las <span className="font-semibold">leyes</span> y <span className="font-semibold">regulaciones</span> que afecten a la empresa, como <span className="italic">leyes de protección de datos</span> o <span className="italic">regulaciones sanitarias</span>. <em>Ejemplo:</em> una nueva ley que imponga restricciones a productos nocivos para el ambiente.
      </p>
    </div>
  );
};

export default FulltextTemplate;

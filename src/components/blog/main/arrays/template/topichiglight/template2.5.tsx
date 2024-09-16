import React from "react";

const BusinessTypesTemplate = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Tipos de Empresas según Tamaño, Actividad Económica y Forma Jurídica
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Según el Tamaño:
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          <strong>Microempresas:</strong> Hasta 10 trabajadores y un volumen de
          negocio pequeño.
        </li>
        <li>
          <strong>Pequeñas empresas:</strong> De 11 a 50 empleados y una
          facturación limitada.
        </li>
        <li>
          <strong>Medianas empresas:</strong> De 51 a 250 empleados con un
          mayor volumen de ingresos.
        </li>
        <li>
          <strong>Grandes empresas:</strong> Más de 250 empleados y alto volumen
          de ventas.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Según la Actividad Económica:
      </h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>
          <strong>Primario:</strong> Actividades como la agricultura, pesca y
          minería.
        </li>
        <li>
          <strong>Secundario:</strong> Industria manufacturera y construcción.
        </li>
        <li>
          <strong>Terciario:</strong> Servicios como transporte, educación y
          turismo.
        </li>
        <li>
          <strong>Cuaternario:</strong> Investigación y desarrollo tecnológico.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Según la Forma Jurídica:
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Empresa individual:</strong> Propiedad de una sola persona que
          asume toda la responsabilidad.
        </li>
        <li>
          <strong>Sociedad anónima:</strong> Propiedad dividida en acciones,
          donde los accionistas no son responsables de las deudas.
        </li>
        <li>
          <strong>Sociedad de responsabilidad limitada:</strong> Los socios
          tienen responsabilidad limitada a sus aportaciones de capital.
        </li>
        <li>
          <strong>Sociedad cooperativa:</strong> Propiedad de empleados o
          miembros, que gestionan y distribuyen los beneficios equitativamente.
        </li>
        <li>
          <strong>Sociedad comanditaria:</strong> Socios con responsabilidad
          ilimitada y otros con responsabilidad limitada.
        </li>
      </ul>
    </div>
  );
};

export default BusinessTypesTemplate;

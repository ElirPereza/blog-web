import React from "react";

const BusinessConceptTemplate = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Concepto de Empresa y Clasificación de las Organizaciones
      </h1>
      <p className="text-gray-700 mb-4">
        La <strong>empresa</strong> es una entidad organizada que ejerce
        actividades económicas, comerciales o productivas con el objetivo de
        ofrecer bienes o servicios en el mercado. Las empresas buscan obtener
        beneficios y generar valor tanto para sus propietarios como para la
        sociedad. Se caracterizan por tener una estructura administrativa y
        operativa que les permite gestionar recursos de manera eficiente.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Clasificación:
      </h2>
      <p className="text-gray-700 mb-4">
        <strong>Sin fines de lucro:</strong> Son organizaciones que suelen
        utilizar donaciones públicas o privadas para promover una causa social
        o proporcionar un beneficio público. Estas no tienen como finalidad
        generar ganancias, sino más bien cumplir una misión social, cultural o
        educativa. Los ingresos que se obtienen, si es que los hay, se
        reinvierten en otras actividades de la organización. Ejemplos: ONGs,
        fundaciones, asociaciones civiles, instituciones benéficas, etc.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Con fines de lucro:</strong> Estas organizaciones buscan
        generar ingresos económicos para sus propietarios o accionistas, y
        están generalmente asociadas a la venta de bienes y servicios. Pueden
        adoptar distintas formas como negocios, sociedades y empresas
        individuales. Estas empresas son importantes porque generan empleos,
        estimulan el crecimiento económico y financian servicios públicos
        mediante impuestos.
      </p>
    </div>
  );
};

export default BusinessConceptTemplate;

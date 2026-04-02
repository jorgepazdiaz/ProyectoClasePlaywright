Feature: Formulario de Novus Technology

  @formulario
  Scenario: Cuando ingreso todos los campos del formulario
    Given ingreso a la página de Novus Technology
    And mis datos personales con el nombre "Jorge" y el apellido "Paz"
    And ingreso mi correo electrónico "jorgepaz@test.con" y mi número de teléfono "1234567890"
    And selecciono el pasatiempo
    And selecciono el género
    And selecciono el lugar el departamento "LIMA" y la ciudad "LIMA"
    And selecciono un comando
    And cargo un documento
    Then visualizo un mensaje con el nombre y el apellido
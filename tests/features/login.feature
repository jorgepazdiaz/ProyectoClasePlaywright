Feature: Login

  Scenario: Login básico
    Given ingreso a la página
    When hago login con usuario "standard_user" y password "secret_sauce"
    Then debería ver el dashboard

Scenario: realizo una compra
    Given ingreso a la página
    When hago login con usuario "standard_user" y password "secret_sauce"
    And agrego un producto al carrito
    And voy al carrito
    And realizo el checkout
    Then debería ver la confirmación de compra

    Scenario Outline: Login básico
    Given ingreso a la página
    When hago login con usuario "<username>" y password "<password>"
    Then debería ver el dashboard

    Examples:
      | username       | password     |
      | standard_user  | secret_sauce |
      | locked_out_user| secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user     | secret_sauce |
      | visual_user    | secret_sauce |

      




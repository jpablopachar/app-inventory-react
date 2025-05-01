import styled from 'styled-components'

/**
 * Contenedor estilizado para el componente Donut.
 *
 * Este componente utiliza estilos personalizados con styled-components para crear
 * un contenedor flexible que organiza el gráfico de dona y la lista de datos en
 * una disposición horizontal o vertical dependiendo del espacio disponible.
 *
 * @component
 */
export const DonutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
`

/**
 * Contenedor estilizado para cada tarjeta de datos dentro del componente Donut.
 *
 * Este componente utiliza flexbox para mostrar el elemento descriptivo (que incluye
 * un ícono y texto) a la izquierda y el valor total a la derecha.
 *
 * @component
 */
export const DonutContentCards = styled.div`
  display: flex;
  justify-content: space-between;

  .contentDescripcion {
    display: flex;
    gap: 10px;
  }
`

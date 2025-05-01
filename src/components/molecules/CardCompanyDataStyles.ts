import styled from 'styled-components'

/**
 * Contenedor estilizado para mostrar los datos de la empresa en una tarjeta.
 *
 * Este componente utiliza estilos personalizados para presentar la información de la empresa,
 * incluyendo el nombre del plan, el valor del precio, notas y una lista de características.
 *
 * Estructura de clases internas:
 * - `.card`: Define el estilo principal de la tarjeta, incluyendo fondo, bordes y sombra.
 * - `.pricing-block-content`: Organiza el contenido de la tarjeta en una columna con separación.
 * - `.pricing-plan`: Estilo para el nombre del plan o título.
 * - `.price-value`: Muestra el valor del precio, centrado y con posible imagen.
 * - `.pricing-note`: Nota adicional con opacidad reducida.
 * - `.check-list`: Lista de características o beneficios del plan.
 * - `.check-list-item`: Elemento individual de la lista, alineado con íconos o texto.
 *
 * @constant
 */
export const CardCompanyDataContainer = styled.div`
  z-index: 1;
  .card {
    width: 190px;
    background: #fffefe;
    padding: 1rem;
    border-radius: 1rem;
    border: 0.5vmin solid #05060f;
    box-shadow: 0.4rem 0.4rem #05060f;
    overflow: hidden;
    color: black;
  }

  .pricing-block-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 0.5rem;
  }

  .pricing-plan {
    color: #05060f;
    font-size: 1.3rem;
    line-height: 1.25;
    font-weight: 700;
  }

  .price-value {
    display: flex;
    color: #05060f;
    font-size: 1.8rem;
    line-height: 1.25;
    font-weight: 700;
    justify-content: center;

    img {
      width: 50px;
    }
  }

  .pricing-note {
    opacity: 0.8;
  }

  .check-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .check-list-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

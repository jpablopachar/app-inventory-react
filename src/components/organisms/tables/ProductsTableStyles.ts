import styled from 'styled-components'

import { Device, iconsAndVars } from '@/styles'

/**
 * Propiedades para los estilos de la tabla de productos.
 * 
 * @property theme Objeto que contiene los colores de fondo y texto utilizados en la tabla.
 * @property theme.bgTotal Color de fondo total de la tabla.
 * @property theme.text Color del texto en la tabla.
 */
interface ProductsTableStylesProps {
  theme: {
    bgTotal: string
    text: string
  }
}

/**
 * Contenedor estilizado para la tabla de productos utilizando styled-components.
 * 
 * Este componente aplica estilos responsivos a una tabla, adaptando su diseño y espaciado
 * según diferentes puntos de quiebre definidos en `iconsAndVars`. Incluye reglas específicas
 * para la visualización en dispositivos móviles y de escritorio,
 * ocultando el encabezado de la tabla
 * en pantallas pequeñas y mostrando un diseño de tabla tradicional en pantallas grandes.
 * 
 * Características principales:
 * - Margen adaptable según el tamaño de pantalla.
 * - Estilos responsivos para la tabla y sus celdas.
 * - Encabezado oculto en móviles y visible en escritorio.
 * - Alternancia de color de fondo en filas pares.
 * - Soporte para mostrar títulos de columna como etiquetas en celdas en móviles.
 * - Personalización de colores basada en las props y el tema.
 * 
 * @component
 * @param {ProductsTableStylesProps} props - Propiedades para
 * personalizar el color de las categorías y el tema.
 */
export const ProductsTableContainer = styled.div<ProductsTableStylesProps>`
  position: relative;
  margin: 5% 3%;

  @media (min-width: ${iconsAndVars.bpBart}) {
    margin: 2%;
  }

  @media (min-width: ${iconsAndVars.bpHomer}) {
    margin: 2em auto;
  }

  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;

    @media (min-width: ${iconsAndVars.bpBart}) {
      font-size: 0.9em;
    }

    @media (min-width: ${iconsAndVars.bpMarge}) {
      font-size: 1em;
    }

    thead {
      position: absolute;
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;

      @media (min-width: ${iconsAndVars.bpBart}) {
        position: relative;
        height: auto;
        width: auto;
        overflow: auto;
      }

      th {
        border-bottom: 2px solid rgba(115, 115, 115, 0.32);
        font-weight: normal;
        text-align: center;
        color: ${({ theme }) => theme.text};

        &:first-of-type {
          text-align: center;
        }
      }
    }

    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }

    tr {
      @media (min-width: ${iconsAndVars.bpBart}) {
        display: table-row;
      }
    }

    th,
    td {
      padding: 0.5em;
      vertical-align: middle;

      @media (min-width: ${iconsAndVars.bpLisa}) {
        padding: 0.75em 0.5em;
      }

      @media (min-width: ${iconsAndVars.bpBart}) {
        display: table-cell;
        padding: 0.5em;
      }

      @media (min-width: ${iconsAndVars.bpMarge}) {
        padding: 0.75em 0.5em;
      }

      @media (min-width: ${iconsAndVars.bpHomer}) {
        padding: 0.75em;
      }
    }

    tbody {
      @media (min-width: ${iconsAndVars.bpBart}) {
        display: table-row-group;
      }

      tr {
        margin-bottom: 1em;

        @media (min-width: ${iconsAndVars.bpBart}) {
          display: table-row;
          border-width: 1px;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        &:nth-of-type(even) {
          @media (min-width: ${iconsAndVars.bpBart}) {
            background-color: rgba(78, 78, 78, 0.12);
          }
        }
      }

      th[scope='row'] {
        @media (min-width: ${iconsAndVars.bpLisa}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
        }

        @media (min-width: ${iconsAndVars.bpBart}) {
          background-color: transparent;
          text-align: center;
          color: ${({ theme }) => theme.text};
        }
      }

      .contentCell {
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid rgba(161, 161, 161, 0.32);

        @media (min-width: ${iconsAndVars.bpBart}) {
          justify-content: center;
          border-bottom: none;
        }

        .contentCategory {
          color: ${(props) => props.color};
          background-color: ${(props) => props.color};
        }
      }

      td {
        text-align: right;

        @media (min-width: ${iconsAndVars.bpBart}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
          text-align: center;
        }
      }

      td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: 0.8em;

        @media (min-width: ${iconsAndVars.bpLisa}) {
          font-size: 0.9em;
        }

        @media (min-width: ${iconsAndVars.bpBart}) {
          content: none;
        }
      }
    }
  }
`

/**
 * Propiedades para el componente que representa el contenido de color en la tabla de productos.
 *
 * @property {string} color - El valor del color que se mostrará o utilizará en el componente.
 */
interface ProductsTableColorContentProps {
  color: string
}

/**
 * Componente estilizado para mostrar contenido de color en la tabla de productos.
 *
 * @remarks
 * Este componente utiliza estilos dinámicos basados en la propiedad `color` recibida.
 * Presenta un borde punteado y un color de texto acorde al color especificado.
 * Además, ajusta su ancho al 100% en dispositivos tipo tablet para mejorar la responsividad.
 *
 * @param props.color - Color utilizado para el texto y el borde del componente.
 */
export const ProductsTableColorContent = styled.div<ProductsTableColorContentProps>`
  color: ${(props) => props.color};
  border-radius: 8px;
  border: 1px dashed ${(props) => props.color};
  text-align: center;
  padding: 3px;
  width: 70%;

  @media ${Device.tablet} {
    width: 100%;
  }
`

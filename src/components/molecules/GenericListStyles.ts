import styled from 'styled-components'

import { Device } from '@/styles/breakpoints'

/**
 * Propiedades para los estilos del contenedor de lista genérica.
 *
 * @property theme - Objeto que contiene las propiedades del tema.
 * @property theme.body - Color de fondo del contenedor.
 * @property theme.text - Color del texto.
 * @property $bottom - Posición desde la parte inferior.
 * @property scroll - Tipo de scroll para el contenido.
 */
interface GenericListStylesProps {
  theme: {
    body: string
    text: string
  }
  $bottom: string
  scroll: string
}

/**
 * Propiedades para los estilos del contenedor de item.
 *
 * @property theme - Objeto que contiene las propiedades del tema.
 * @property theme.bgTotal - Color de fondo al hacer hover.
 */
interface ItemStylesProps {
  theme: {
    bgTotal: string
  }
}

/**
 * Contenedor estilizado para una lista genérica.
 *
 * Este componente utiliza estilos personalizados para crear un contenedor
 * de lista con posición absoluta y estilos responsive. Incluye una zona de
 * contenido con scroll configurable y aplica colores de tema para fondo y texto.
 *
 * @component
 * @param {GenericListStylesProps} props - Propiedades para personalizar los estilos de la lista.
 * @param {string} props.$bottom - Distancia desde la parte inferior.
 * @param {string} props.scroll - Configuración del scroll vertical en contentItems.
 */
export const GenericListContainer = styled.div<GenericListStylesProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  bottom: ${(props) => props.$bottom};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  height: 230px;

  @media ${() => Device.tablet} {
    width: 400px;
  }

  .contentItems {
    overflow-y: ${(props) => props.scroll};
  }
`

/**
 * Contenedor estilizado para un elemento individual dentro de la lista genérica.
 *
 * Este componente aplica estilos para crear un elemento interactivo con efecto
 * hover, usando colores de tema para los estados de interacción.
 *
 * @component
 * @param {ItemStylesProps} props - Propiedades para personalizar los estilos del elemento.
 */
export const ItemContainer = styled.div<ItemStylesProps>`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgTotal};
  }
`

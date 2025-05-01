import styled from 'styled-components'

/**
 * Propiedades para los estilos de la página de bloqueo.
 *
 * @property theme Objeto que contiene las propiedades de tema.
 * @property theme.text Color del texto utilizado en la página de bloqueo.
 */
interface BlockingPageStylesProps {
  theme: {
    text: string
  }
}

/**
 * Contenedor estilizado para la página de bloqueo.
 *
 * Este componente utiliza estilos CSS para superponer una capa sobre el contenido,
 * bloqueando la interacción del usuario. Se posiciona de forma absoluta, cubriendo
 * toda el área disponible, con un fondo semitransparente y un borde rojo translúcido.
 *
 * Propiedades:
 * - Usa flexbox para centrar su contenido tanto vertical como horizontalmente.
 * - Permite personalizar el color del texto a través del tema.
 * - Incluye un espacio para un ícono destacado.
 *
 * @component
 * @param {BlockingPageStylesProps} props - Propiedades de estilo para el contenedor.
 */
export const BlockingPageContainer = styled.div<BlockingPageStylesProps>`
  position: absolute;
  z-index: 10;
  background: rgba(26, 9, 9, 0.9);
  border: 1px solid rgba(248, 42, 45, 0.5);
  padding: 15px;
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 1;
  color: ${(props) => props.theme.text};
  .icono {
    font-size: 30px;
  }
`

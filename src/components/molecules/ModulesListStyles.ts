import styled from 'styled-components'

/**
 * Contenedor estilizado para la lista de módulos.
 *
 * Este componente utiliza estilos personalizados para crear un contenedor
 * de lista de módulos con borde discontinuo, esquinas redondeadas y
 * disposición en columna. Incluye estilos específicos para elementos internos
 * como el contenido y los checkboxes con efectos visuales avanzados.
 *
 * @remarks
 * - La clase `.content` define la disposición de los elementos de contenido
 * - La clase `.checkbox` implementa un diseño personalizado para los elementos de selección
 * con animación, degradados y efectos de sombra cuando están seleccionados
 *
 * @component
 */
export const ModulesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed #414244;
  border-radius: 15px;
  padding: 20px;
  gap: 15px;

  .content {
    display: flex;
    gap: 20px;
  }

  .checkbox {
    appearance: none;
    overflow: hidden;
    min-width: 30px;
    aspect-ratio: 1/1;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    border: 2px solid rgb(255, 102, 0);
    position: relative;
    transition: all 0.2s ease-in-out;

    &::before {
      position: absolute;
      inset: 0;
      content: '';
      font-size: 35px;
      transition: all 0.2s ease-in-out;
    }

    &:checked {
      border: 2px solid rgb(255, 212, 59);
      background: linear-gradient(
        135deg,
        rgb(255, 212, 59) 0%,
        rgb(255, 102, 0) 100%
      );
      box-shadow: -5px -5px 30px rgba(255, 212, 59, 1),
        5px 5px 30px rgba(255, 102, 0, 1);

      &::before {
        background: linear-gradient(
          135deg,
          rgb(255, 212, 59) 0%,
          rgb(255, 102, 0) 100%
        );
      }
    }
  }
`

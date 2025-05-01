import styled from 'styled-components'

/**
 * Propiedades para los estilos del componente InputNumber.
 *
 * @property theme - Objeto que contiene los estilos relacionados con el tema.
 * @property theme.text - Color del texto del componente.
 * @property theme.bgTotal - Color de fondo del componente.
 */
interface InputNumberStylesProps {
  theme: {
    text: string
    bgTotal: string
  }
}

/**
 * Contenedor estilizado para el componente InputNumber.
 *
 * Este componente utiliza estilos personalizados con styled-components para crear
 * un campo numérico con validación y presentación de mensajes de error.
 *
 * @component
 * @param {InputNumberStylesProps} props - Propiedades para personalizar el estilo
 */
export const InputNumberContainer = styled.div<InputNumberStylesProps>`
  position: relative;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;

  input {
    background: ${({ theme }) => theme.bgTotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;

    &:focus {
      border-bottom: none;
      border-image: linear-gradient(to right, #ec580e, #f23505);
      border-image-slice: 1;
    }

    &::placeholder {
      color: #c8c8c8;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  p {
    color: #ff6d00;
    font-size: 12px;
    margin-top: 4px;
  }
`

/**
 * Contenedor estilizado para el icono y el campo de entrada.
 *
 * Este componente organiza el icono y el campo de entrada en una disposición horizontal.
 *
 * @component
 */
export const TextIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 100%;
`

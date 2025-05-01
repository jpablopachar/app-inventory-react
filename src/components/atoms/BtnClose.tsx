import { ReactElement } from 'react'

import styled from 'styled-components'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente BtnClose.
 *
 * @property task - Función que se ejecuta al hacer clic en el botón de cerrar.
 */
interface BtnCloseProps {
  task: () => void
}

/**
 * Componente estilizado que representa un contenedor tipo <span> para un botón de cierre.
 *
 * @remarks
 * Este componente utiliza estilos personalizados para mostrar un cursor de puntero,
 * un tamaño de fuente de 25px y una transición suave en todas las propiedades.
 * Al pasar el mouse por encima, cambia el color utilizando la variable `selectorColor`
 * definida en `iconsAndVars`.
 */
const Container = styled.span`
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    color: ${() => iconsAndVars.selectorColor};
  }
`

/**
 * Botón de cierre reutilizable.
 *
 * @component
 * @param {BtnCloseProps} props - Propiedades del componente.
 * @param {() => void} props.task - Función que se ejecuta al hacer clic en el botón.
 * @returns {ReactElement} Elemento JSX que representa un botón de cierre con un ícono.
 */
const BtnClose: React.FC<BtnCloseProps> = ({ task }): ReactElement => {
  return <Container onClick={task}>{<iconsAndVars.closeIcon />}</Container>
}

export default BtnClose

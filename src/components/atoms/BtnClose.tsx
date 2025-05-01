import { ReactElement } from 'react'

import { ContainerStyles } from './BtnCloseStyles'

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
 * Botón de cierre reutilizable.
 *
 * @component
 * @param {BtnCloseProps} props - Propiedades del componente.
 * @param {() => void} props.task - Función que se ejecuta al hacer clic en el botón.
 * @returns {ReactElement} Elemento JSX que representa un botón de cierre con un ícono.
 */
const BtnClose: React.FC<BtnCloseProps> = ({ task }): ReactElement => {
  return (
    <ContainerStyles onClick={task}>
      {<iconsAndVars.closeIcon />}
    </ContainerStyles>
  )
}

export default BtnClose

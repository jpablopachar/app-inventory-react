/* eslint-disable react/jsx-no-target-blank */

import { JSX } from 'react'

import { BtnSaveContainer } from './BtnSaveStyles'

import { IconStyles } from '../atoms'

/**
 * Propiedades para el componente BtnSave.
 *
 * @property task Función que se ejecuta al hacer clic en el botón.
 * @property title Texto que se muestra en el botón.
 * @property bgColor Color de fondo del botón.
 * @property icon Elemento JSX que representa el icono a mostrar en el botón.
 * @property url URL asociada al botón, utilizada para redireccionar o identificar la acción.
 */
interface BtnSaveProps {
  task?: () => void
  title: string
  bgColor: string
  icon?: JSX.Element
  url?: string
}

/**
 * Componente de botón personalizado para guardar información.
 *
 * @component
 * @param {BtnSaveProps} props - Propiedades del componente.
 * @param {() => void} props.task - Función que se ejecuta al hacer clic en el botón.
 * @param {string} props.title - Texto que se muestra en el botón.
 * @param {string} props.bgColor - Color de fondo del botón.
 * @param {React.ReactNode} props.icon - Icono que se muestra junto al texto.
 * @param {string} props.url - URL a la que se redirige al hacer clic en el enlace.
 *
 * @returns {JSX.Element} Elemento JSX que representa el botón de guardar.
 */
const BtnSave: React.FC<BtnSaveProps> = ({
  task,
  title,
  bgColor,
  icon,
  url,
}) => {
  return (
    <BtnSaveContainer type="submit" $bgColor={bgColor}>
      <IconStyles>{icon}</IconStyles>
      <span className="btn" onClick={task}>
        <a href={url} target="_blank">
          {title}
        </a>
      </span>
    </BtnSaveContainer>
  )
}

export default BtnSave

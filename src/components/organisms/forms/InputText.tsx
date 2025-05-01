import { ReactNode } from 'react'

import { InputTextContainer } from './InputTextStyles'

/**
 * Propiedades para el componente InputText.
 *
 * @property {ReactNode} children - Contenido del campo de texto (generalmente un input)
 * @property {ReactNode} icon - Icono que se mostrará al lado del campo de texto
 */
interface IInputTextProps {
  children: ReactNode
  icon: ReactNode
}

/**
 * Componente que renderiza un campo de texto personalizado con un icono opcional.
 *
 * Este componente envuelve campos de entrada de texto con un diseño personalizado
 * que incluye un ícono, etiqueta flotante y efectos visuales en el enfoque.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {ReactNode} props.children - Elemento hijo que representa el campo de entrada
 * @param {ReactNode} [props.icon] - Icono que se muestra junto al campo (opcional)
 *
 * @returns {JSX.Element} Componente de entrada de texto estilizado
 */
const InputText: React.FC<IInputTextProps> = ({ children, icon }) => {
  return (
    <InputTextContainer>
      <span>{icon}</span>
      <div className="form__group field">{children}</div>
    </InputTextContainer>
  )
}

export default InputText

import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import { InputNumberContainer, TextIconContainer } from './InputNumberStyles'

/**
 * Propiedades para el componente InputNumber.
 *
 * @property {ReactNode} icon - Icono que se mostrará al lado del campo numérico
 * @property {Function} onChange - Función que se ejecuta cuando cambia el valor del campo
 * @property {number|string} defaultValue - Valor por defecto del campo
 * @property {string} placeholder - Texto de marcador de posición para el campo
 * @property {Object} register - Objeto de registro de React Hook Form
 * @property {Object} errors - Objeto de errores de validación de React Hook Form
 * @property {Object} style - Estilos adicionales para el campo de entrada
 */
interface IInputNumberProps {
  icon: ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue: number | string
  placeholder: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  errors: {
    value?: FieldError
    amount?: FieldError
    [key: string]: FieldError | undefined
  }
  style?: React.CSSProperties
}

/**
 * Componente que renderiza un campo de entrada numérico con validación.
 *
 * Este componente proporciona un campo de entrada para números con iconos opcionales,
 * validación de formularios y mensajes de error personalizados.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {ReactNode} [props.icon] - Icono que se muestra junto al campo
 * @param {Function} [props.onChange] - Manejador de cambios en el valor del campo
 * @param {number|string} [props.defaultValue] - Valor inicial del campo
 * @param {string} [props.placeholder] - Texto de marcador de posición
 * @param {Object} props.register - Objeto de registro de React Hook Form
 * @param {Object} props.errors - Objeto de errores de validación
 * @param {Object} [props.style] - Estilos personalizados para el campo
 *
 * @returns {JSX.Element} Componente de entrada numérica estilizado con validación
 */
const InputNumber: React.FC<IInputNumberProps> = ({
  icon,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,
  style,
}) => {
  return (
    <InputNumberContainer>
      <TextIconContainer>
        <span>{icon}</span>
        <input
          step="0.01"
          style={style}
          onChange={onChange}
          type="number"
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register('amount', { required: true, Number: true })}
        />
      </TextIconContainer>
      {errors.value?.type === 'required' && <p>Campo requerido</p>}
      {errors.value?.type === 'Number' && <p>Ingrese un número válido</p>}
    </InputNumberContainer>
  )
}

export default InputNumber

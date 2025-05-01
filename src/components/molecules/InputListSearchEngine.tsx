import { ChangeEvent } from 'react'

import { InputListSearchEngineContainer } from './InputListSearchEngineStyles'

/**
 * Propiedades para el componente InputListSearchEngine.
 *
 * @property {(event: ChangeEvent<HTMLInputElement>) => void}onChange
 * - Función que se ejecuta cuando cambia el valor del input.
 * @property {string} placeholder - Texto que se muestra como
 * placeholder dentro del campo de búsqueda.
 */
interface IInputListSearchEngineProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

/**
 * Componente de búsqueda para listas que permite filtrar elementos.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} props.onChange
 * - Función que se ejecuta cuando el usuario escribe en el campo
 * @param {string} props.placeholder - Texto indicativo que se muestra cuando el campo está vacío
 *
 * @returns {JSX.Element} Un campo de entrada para búsqueda estilizado
 */
const InputListSearchEngine: React.FC<IInputListSearchEngineProps> = ({
  onChange,
  placeholder,
}) => {
  return (
    <InputListSearchEngineContainer>
      <input onChange={onChange} placeholder={placeholder} type="text" />
    </InputListSearchEngineContainer>
  )
}

export default InputListSearchEngine

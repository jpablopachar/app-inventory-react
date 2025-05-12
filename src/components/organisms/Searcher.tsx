import { ChangeEvent } from 'react'

import { FaSearch } from 'react-icons/fa'

import { SearcherContainer } from './SearcherStyles'

/**
 * Propiedades para el componente Searcher.
 *
 * @property setSearcher - Función que actualiza el valor del buscador con el texto ingresado.
 * @property onFocus - (Opcional) Función que se ejecuta cuando el buscador recibe foco.
 * @property task - (Opcional) Función adicional que puede ejecutarse en el componente.
 */
interface SearcherProps {
  setSearcher: (value: string) => void
  onFocus?: () => void
  task?: () => void
}

/**
 * Componente funcional que representa un buscador.
 *
 * Renderiza un campo de entrada de texto acompañado de un icono de búsqueda.
 * Permite actualizar el estado del buscador al escribir en el input y ejecutar
 * una función opcional al hacer clic en el contenedor principal.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {(value: string) => void} props.setSearcher - Función
 * para actualizar el estado del buscador con el valor ingresado.
 * @param {() => void} [props.onFocus] - Función opcional que se
 * ejecuta cuando el input recibe el foco.
 * @param {() => void} [props.task] - Función opcional que se
 * ejecuta al hacer clic en el contenedor principal.
 */
const Searcher: React.FC<SearcherProps> = ({ setSearcher, onFocus, task }) => {
  /**
   * Maneja el evento de cambio en un campo de entrada de texto.
   * Actualiza el estado del buscador con el valor actual del input.
   *
   * @param event - Evento de cambio proveniente de un elemento input de HTML.
   */
  const search = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearcher(event.target.value)
  }

  /**
   * Ejecuta la función almacenada en la variable `task` si está definida.
   *
   * @remarks
   * Esta función verifica si la variable `task` contiene una
   * función y, en caso afirmativo, la ejecuta.
   *
   * @returns {void} No retorna ningún valor.
   */
  const executeFunction = (): void => {
    if (task) {
      task()
    }
  }

  return (
    <SearcherContainer onClick={executeFunction}>
      <article className="content">
        <FaSearch className="icono" />
        <input onFocus={onFocus} onChange={search} placeholder="...buscar" />
      </article>
    </SearcherContainer>
  )
}

export default Searcher

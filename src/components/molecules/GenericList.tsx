/* eslint-disable @typescript-eslint/no-explicit-any */

import { GenericListContainer, ItemContainer } from './GenericListStyles'

import BtnClose from '../atoms/BtnClose'

/**
 * Propiedades para el componente GenericList.
 *
 * @property {any[]} data - Arreglo de elementos que se mostrarán en la lista.
 * @property {() => void} setState - Función para actualizar el
 * estado del componente padre o realizar alguna acción relacionada.
 * @property {(item: any) => void} task - Función que se ejecuta
 * al interactuar con un elemento de la lista, recibiendo el elemento como argumento.
 * @property {string} scroll - Valor que define el comportamiento o estilo del scroll en la lista.
 * @property {string} bottom - Valor que define el espacio o
 * estilo en la parte inferior de la lista.
 */
interface GenericListProps {
  data: any[]
  setState: () => void
  task: (item: any) => void
  scroll: string
  bottom: string
}

/**
 * Componente de lista genérica reutilizable.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array<any>} props.data - Arreglo de elementos a mostrar en la lista.
 * @param {() => void} props.setState - Función para actualizar el estado o cerrar la lista.
 * @param {(item: any) => void} props.task - Función que se ejecuta al seleccionar un elemento.
 * @param {boolean} [props.scroll] - Indica si la lista debe ser desplazable.
 * @param {boolean} [props.bottom] - Indica si la lista debe posicionarse en la parte inferior.
 *
 * @description
 * Renderiza una lista de elementos genéricos con un botón de cierre. Al hacer clic en un elemento,
 * se ejecuta la función `task` pasando el elemento seleccionado y luego se llama a `setState`.
 */
const GenericList: React.FC<GenericListProps> = ({
  data,
  setState,
  task,
  scroll,
  bottom,
}) => {
  const select = (item: any): void => {
    task(item)
    setState()
  }

  return (
    <GenericListContainer scroll={scroll} $bottom={bottom}>
      <section className="contentClose">
        <BtnClose task={setState} />
      </section>
      <section className="contentItems">
        {data?.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => select(item)}>
              <span>💎</span>
              <span>{item.description}</span>
            </ItemContainer>
          )
        })}
      </section>
    </GenericListContainer>
  )
}

export default GenericList

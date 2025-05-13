import { useState } from 'react'

import { CategoryProTemplateContainer, ContentFilter } from './CategoryProTemplateStyles'

import vacio from '../../assets/vacio.json'
import { TitleStyles } from '../atoms'
import { AnimationLottie, BtnFilter } from '../molecules'
import { CategoriesTable, Header, RegisterCategory, Searcher } from '../organisms'

import { Category } from '@/interfaces'
import { useCategoryStore } from '@/store'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente CategoryProTemplate.
 *
 * @property {Category[] | null} data - Lista de categorías a mostrar.
 * Puede ser un arreglo de objetos Category o null si no hay datos disponibles.
 */
interface CategoryProTemplateProps {
  data: Category[] | null
}

/**
 * Componente de plantilla para la gestión de categorías.
 *
 * Este componente organiza la estructura principal de la vista de categorías,
 * incluyendo el encabezado, filtros, buscador, tabla de categorías y el formulario
 * para registrar o editar categorías. Permite abrir el formulario de registro de
 * nuevas categorías, filtrar y buscar categorías existentes, y visualizar la lista de
 * categorías en una tabla.
 *
 * @component
 * @param {CategoryProTemplateProps} props - Propiedades del componente.
 * @param {Array<any>} props.data - Lista de categorías a mostrar en la tabla.
 *
 * @returns {JSX.Element} Elemento JSX que representa la plantilla de categorías.
 */
const CategoryProTemplate: React.FC<CategoryProTemplateProps> = ({ data }) => {
  const { setSearcher } = useCategoryStore()

  const [state, setState] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [action, setAction] = useState('')
  const [dataSelect, setDataSelect] = useState<Category | null>(null)

  /**
   * Abre o cierra el formulario de registro de una nueva categoría.
   * Cambia el estado de visibilidad del formulario, establece la acción como 'New'
   * y limpia los datos seleccionados.
   *
   * @returns {void} No retorna ningún valor.
   */
  const newRegister = (): void => {
    setOpenRegister(!openRegister)
    setAction('New')
    setDataSelect(null)
  }

  return (
    <CategoryProTemplateContainer>
      {openRegister && (
        <RegisterCategory
          dataSelect={dataSelect}
          onClose={() => setOpenRegister(!openRegister)}
          action={action}
        />
      )}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFilter>
          <TitleStyles>Categorías</TitleStyles>
          <BtnFilter
            task={newRegister}
            textColor="#353535"
            icon={<iconsAndVars.addIcon />}
          />
        </ContentFilter>
      </section>
      <section className="area2">
        <Searcher setSearcher={setSearcher} />
      </section>
      <section className="main">
        {data!.length == 0 && (
          <AnimationLottie height="300" width="300" animation={vacio} />
        )}
        <CategoriesTable
          categories={data}
          setOpenRegister={setOpenRegister}
          setDataSelect={setDataSelect}
          setAction={setAction}
        />
      </section>
    </CategoryProTemplateContainer>
  )
}

export default CategoryProTemplate

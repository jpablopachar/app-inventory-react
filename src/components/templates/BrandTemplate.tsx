import { useState } from 'react'

import { BrandTemplateContainer, ContentFilter } from './BrandTemplateStyles'

import vacio from '../../assets/vacio.json'
import { TitleStyles } from '../atoms'
import { AnimationLottie, BtnFilter } from '../molecules'
import { BrandsTable, Header, RegisterBrand, Searcher } from '../organisms'

import { Brand } from '@/interfaces'
import { useBrandStore } from '@/store'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente BrandTemplate.
 *
 * @property {Brand[] | null} data - Lista de marcas a mostrar.
 * Puede ser un arreglo de objetos Brand o null si no hay datos disponibles.
 */
interface BrandTemplateProps {
  data: Brand[] | null
}

/**
 * Componente de plantilla para la gestión de marcas.
 *
 * Este componente organiza la estructura principal de la vista de marcas,
 * incluyendo el encabezado, filtros, buscador, tabla de marcas y el formulario
 * para registrar o editar marcas. Permite abrir el formulario de registro de
 * nuevas marcas, filtrar y buscar marcas existentes, y visualizar la lista de
 * marcas en una tabla.
 *
 * @component
 * @param {BrandTemplateProps} props - Propiedades del componente.
 * @param {Array<any>} props.data - Lista de marcas a mostrar en la tabla.
 *
 * @returns {JSX.Element} Elemento JSX que representa la plantilla de marcas.
 */
const BrandTemplate: React.FC<BrandTemplateProps> = ({ data }) => {
  const { setSearcher } = useBrandStore()

  const [state, setState] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [action, setAction] = useState('')
  const [dataSelect, setDataSelect] = useState<Brand | null>(null)

  /**
   * Abre o cierra el formulario de registro de una nueva marca.
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
    <BrandTemplateContainer>
      {openRegister && (
        <RegisterBrand
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
          <TitleStyles>Marcas</TitleStyles>
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
        <BrandsTable
          data={data}
          setOpenRegister={setOpenRegister}
          setDataSelect={setDataSelect}
          setAction={setAction}
        />
      </section>
    </BrandTemplateContainer>
  )
}

export default BrandTemplate

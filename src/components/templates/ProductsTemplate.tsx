import { useState } from 'react'


import { ContentFilter, TemplateContainer } from './TemplateStyles'

import vacio from '../../assets/vacio.json'
import { TitleStyles } from '../atoms'
import { AnimationLottie, BtnFilter } from '../molecules'
import { Header, ProductsTable, Searcher } from '../organisms'

import { Product } from '@/interfaces'
import { useProductStore } from '@/store'

import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente ProductsTemplate.
 *
 * @property {Product[] | null} data - Lista de productos a
 * mostrar. Puede ser un arreglo de objetos Product o null si no hay datos disponibles.
 */
interface ProductsTemplateProps {
  data: Product[] | null
}

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({ data }) => {
  const { setSearcher } = useProductStore()
  
  const [state, setState] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [action, setAction] = useState('')
  const [dataSelect, setDataSelect] = useState<Product | null>(null)

  /**
   * Abre o cierra el formulario de registro de un nuevo producto.
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
    <TemplateContainer>
      {/* {openRegister && (
        <RegisterCategory
          dataSelect={dataSelect}
          onClose={() => setOpenRegister(!openRegister)}
          action={action}
        />
      )} */}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFilter>
          <TitleStyles>Productos</TitleStyles>
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
        <ProductsTable
          products={data}
          setOpenRegister={setOpenRegister}
          setDataSelect={setDataSelect}
          setAction={setAction}
        />
      </section>
    </TemplateContainer>
  )
}

export default ProductsTemplate

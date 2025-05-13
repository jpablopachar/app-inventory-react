/* eslint-disable camelcase */

import { useQuery } from '@tanstack/react-query'

import { ProductsTemplate, SpinnerLoader } from '@/components'
import {
  seekProducts,
  showBrand,
  showCategories,
  showProducts,
} from '@/services'
import {
  useBrandStore,
  useCategoryStore,
  useCompanyStore,
  useProductStore,
} from '@/store'

/**
 * Componente principal para la gestión y visualización de productos.
 *
 * Este componente se encarga de obtener y mostrar la lista de productos de una compañía,
 * así como sus marcas y categorías asociadas. Utiliza varios hooks personalizados para
 * interactuar con el estado global y react-query para la obtención de datos asíncronos.
 *
 * Funcionalidades principales:
 * - Obtiene los productos de la compañía seleccionada.
 * - Permite la búsqueda de productos mediante un buscador.
 * - Obtiene las marcas y categorías asociadas a la compañía.
 * - Muestra un loader mientras se cargan los datos y un mensaje de error si ocurre algún problema.
 *
 * @component
 * @returns {JSX.Element} El template de productos, un loader o un mensaje de error.
 */
const Products: React.FC = () => {
  const { productsData, searcher, getProducts, searchProduct } =
    useProductStore()

  const { getCategories } = useCategoryStore()

  const { getBrands } = useBrandStore()

  const { companyData } = useCompanyStore()

  const { isLoading, error } = useQuery({
    queryKey: ['showProducts', companyData?.id],
    queryFn: async () => {
      const res = await showProducts(companyData?.id as number)

      getProducts({ _company_id: companyData?.id }, res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['searchProducts', searcher],
    queryFn: async () => {
      const res = await seekProducts({
        _company_id: companyData?.id,
        _searcher: searcher,
      })

      searchProduct(res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['showBrands', companyData?.id],
    queryFn: async () => {
      const res = await showBrand(companyData?.id as number)

      getBrands({ companyId: companyData?.id }, res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['showCategories', companyData?.id],
    queryFn: async () => {
      const res = await showCategories(companyData?.id as number)

      getCategories({ companyId: companyData?.id }, res)

      return res
    },
    enabled: !!companyData?.id,
  })

  if (isLoading) {
    return <SpinnerLoader />
  }

  if (error) {
    return <div>Error...</div>
  }

  return <ProductsTemplate data={productsData} />
}

export default Products

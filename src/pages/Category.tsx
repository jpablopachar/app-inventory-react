import { useQuery } from '@tanstack/react-query'

import { CategoryProTemplate, SpinnerLoader } from '@/components'
import { seekCategories, showCategories } from '@/services'
import { useCategoryStore, useCompanyStore } from '@/store'

/**
 * Componente de React para la gestión y visualización de categorías.
 *
 * Este componente obtiene y muestra la información de las categorías asociadas a una empresa.
 * Utiliza dos consultas:
 * - Una para obtener todas las categorías de la empresa seleccionada.
 * - Otra para buscar categorías según el término de búsqueda ingresado.
 *
 * Muestra un loader mientras se cargan los datos y un mensaje de error si ocurre algún problema.
 * Finalmente, renderiza el componente `CategoryProTemplate` con los datos de las categorías.
 *
 * @component
 */
const Category: React.FC = () => {
  const { categoriesData, searcher, getCategories, searchCategory } = useCategoryStore()

  const { companyData } = useCompanyStore()

  const { isLoading, error } = useQuery({
    queryKey: ['showCategories', companyData?.id],
    queryFn: async () => {
      const res = await showCategories(companyData?.id as number)

      getCategories({ companyId: companyData?.id }, res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['searchCategories', searcher],
    queryFn: async () => {
      const res = await seekCategories({
        description: searcher,
        companyId: companyData?.id,
      })

      searchCategory(res)

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

  return <CategoryProTemplate data={categoriesData} />
}

export default Category

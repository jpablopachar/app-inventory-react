import { useQuery } from '@tanstack/react-query'

import { BrandTemplate, SpinnerLoader } from '@/components'
import { seekBrand, showBrand } from '@/services'
import { useBrandStore, useCompanyStore } from '@/store'

/**
 * Componente de React para la gestión y visualización de marcas.
 *
 * Este componente obtiene y muestra la información de las marcas asociadas a una empresa.
 * Utiliza dos consultas:
 * - Una para obtener todas las marcas de la empresa seleccionada.
 * - Otra para buscar marcas según el término de búsqueda ingresado.
 *
 * Muestra un loader mientras se cargan los datos y un mensaje de error si ocurre algún problema.
 * Finalmente, renderiza el componente `BrandTemplate` con los datos de las marcas.
 *
 * @component
 */
const Brand: React.FC = () => {
  const { brandData, searcher, getBrand, searchBrand } = useBrandStore()

  const { companyData } = useCompanyStore()

  const { isLoading, error } = useQuery({
    queryKey: ['showBrands', companyData?.id],
    queryFn: async () => {
      const res = await showBrand(companyData?.id)

      getBrand({ companyId: companyData?.id }, res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['searchBrands', searcher],
    queryFn: async () => {
      const res = await seekBrand({
        description: searcher,
        companyId: companyData?.id,
      })

      searchBrand(res)

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

  return <BrandTemplate data={brandData} />
}

export default Brand

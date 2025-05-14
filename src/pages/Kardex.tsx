/* eslint-disable camelcase */

import { useQuery } from '@tanstack/react-query'

import { BlockingPage, KardexTemplate, SpinnerLoader } from '@/components'
import { seekKardex, seekProducts, showKardex, showProducts } from '@/services'
import {
  useCompanyStore,
  useKardexStore,
  usePermissionsStore,
  useProductStore
} from '@/store'

/**
 * Componente principal para la visualización y gestión del módulo "Kardex".
 *
 * Este componente se encarga de:
 * - Consultar y mostrar los productos y el kardex asociados a la empresa seleccionada.
 * - Permitir la búsqueda de productos y registros de kardex mediante los
 * buscadores correspondientes.
 * - Validar si el usuario tiene permisos para acceder al módulo "Kardex" y
 * mostrar una página de bloqueo en caso contrario.
 * - Mostrar un loader mientras se cargan los datos y un mensaje de error si
 * ocurre algún problema en la consulta.
 *
 * @component
 * @returns {JSX.Element} El contenido renderizado del módulo Kardex, o una página
 * de bloqueo/carga/error según corresponda.
 */
const Kardex: React.FC = () => {
  const { permissionsData } = usePermissionsStore()

  const { productsData, searcher, getProducts, searchProduct } =
    useProductStore()

  const { searcher: kardexSearcher, getKardex, searchKardex } = useKardexStore()

  const { companyData } = useCompanyStore()

  useQuery({
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

  const { isLoading, error } = useQuery({
    queryKey: ['showKardex', companyData?.id],
    queryFn: async () => {
      const res = await showKardex(companyData?.id as number)

      getKardex({ _company_id: companyData?.id }, res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['searchKardex', kardexSearcher],
    queryFn: async () => {
      const res = await seekKardex({
        companyId: companyData?.id as number,
        searcher,
      })

      searchKardex(res)

      return res
    },
    enabled: !!companyData?.id,
  })

  /**
   * Indica si el usuario tiene permisos para acceder al módulo "Kardex".
   *
   * Recorre la lista de permisos (`permissionsData`) y verifica si alguno de los módulos asociados
   * contiene el nombre "Kardex". Retorna `true` si existe al menos un permiso con dicho módulo,
   * de lo contrario retorna `false`.
   */
  const permissionState = permissionsData.some((currentPermission) =>
    currentPermission.modules.name.includes('Kardex'),
  )

  if (!permissionState) {
    return <BlockingPage state={permissionState} />
  }

  if (isLoading) {
    return <SpinnerLoader />
  }

  if (error) {
    return <div>Error...</div>
  }

  return <KardexTemplate data={productsData} />
}

export default Kardex

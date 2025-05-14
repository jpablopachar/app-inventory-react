import { useQuery } from '@tanstack/react-query'

import { BlockingPage, PersonalTemplate, SpinnerLoader } from '@/components'
import { showAllUsers, showModules } from '@/services'
import {
  useCompanyStore,
  useGlobalStore,
  usePermissionsStore,
  useUserStore
} from '@/store'

/**
 * Componente principal para la gestión del personal.
 *
 * Este componente se encarga de:
 * - Consultar y mostrar la lista de todos los usuarios asociados a la empresa seleccionada.
 * - Consultar los módulos disponibles y almacenarlos en el estado global.
 * - Verificar si el usuario tiene permisos para acceder al módulo "Personal".
 * - Mostrar una página de bloqueo si el usuario no tiene permisos.
 * - Mostrar un loader mientras se cargan los datos.
 * - Mostrar un mensaje de error si ocurre algún problema durante la consulta.
 * - Renderizar el template principal de personal con los datos obtenidos.
 *
 * @component
 */
const Personal: React.FC = () => {
  const { permissionsData } = usePermissionsStore()

  const { companyData } = useCompanyStore()

  const { getModules } = useGlobalStore()

  const { usersAllData, showUsersAll } = useUserStore()

  const { isLoading, error } = useQuery({
    queryKey: ['showAllUsers', companyData?.id],
    queryFn: async () => {
      const res = await showAllUsers(companyData?.id as number)

      showUsersAll(res)

      return res
    },
    enabled: !!companyData?.id,
  })

  useQuery({
    queryKey: ['showModules'],
    queryFn: async () => {
      const res = await showModules()

      getModules(res)

      return res
    },
  })

  /**
   * Indica si el usuario tiene permisos para el módulo "Personal".
   *
   * Recorre el arreglo `permissionsData` y verifica si alguno de los elementos
   * contiene el nombre "Personal" dentro de la propiedad `modules.name`.
   *
   * @type {boolean}
   */
  const permissionState = permissionsData.some((item) =>
    item.modules.name.includes('Personal'),
  )

  if (permissionState) {
    return <BlockingPage state={permissionState} />
  }

  if (isLoading) {
    return <SpinnerLoader />
  }

  if (error) {
    return <div>Error...</div>
  }

  return <PersonalTemplate data={usersAllData} />
}

export default Personal

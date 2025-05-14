/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, useEffect, useState } from 'react'

import { ModulesListContainer } from './ModulesListStyles'

import { useGlobalStore, usePermissionsStore } from '@/store'

/**
 * Propiedades para el componente ModulesList.
 *
 * @property setCheckboxs - Función para actualizar el estado de los checkboxs.
 * @property checkboxs - Estado actual de los checkboxs.
 * @property action - Acción que se está realizando (por ejemplo, 'agregar', 'editar', etc.).
 */
interface ModulesListProps {
  setCheckboxs: (checkboxs: any) => void
  checkboxs: any
  action: string
}

/**
 * Lista de módulos con checkboxes para seleccionar permisos.
 *
 * Este componente muestra una lista de módulos, cada uno con un
 * checkbox que permite seleccionar o deseleccionar el módulo.
 * Es utilizado principalmente para la gestión de permisos,
 * permitiendo editar o visualizar los módulos seleccionados.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.setCheckboxs - Función para actualizar el
 * estado de los checkboxes seleccionados.
 * @param {Array<any>} props.checkboxs - Estado actual de los módulos y su selección.
 * @param {string} props.action - Acción actual, puede ser 'Edit'
 * para modo edición o cualquier otro valor para modo visualización.
 *
 * @example
 * <ModulesList
 *   setCheckboxs={setCheckboxs}
 *   checkboxs={checkboxs}
 *   action="Edit"
 * />
 *
 * @returns {JSX.Element} Lista de módulos con checkboxes.
 */
const ModulesList: React.FC<ModulesListProps> = ({
  setCheckboxs,
  checkboxs,
  action,
}) => {
  const { modulesData } = useGlobalStore()

  const { permissionsEditData } = usePermissionsStore()

  const [, setIsChecked] = useState(false)

  const handleCheckbox = (id: number): void => {
    setCheckboxs((prev: any) => {
      return prev.map((item: any) => {
        if (item.id === id) {
          return { ...item, check: !item.check }
        }

        return item
      })
    })
  }

  const choose = (event: ChangeEvent<HTMLInputElement>): void => {
    const check = event.target.checked

    setIsChecked(check)
  }

  useEffect(() => {
    if (action === 'Edit') {
      const allDocs: any[] = []

      modulesData?.forEach((currentModule): void => {
        const permissionState = permissionsEditData?.some((permission) =>
          permission.modules.name.includes(currentModule.name),
        )

        if (permissionState) {
          allDocs.push({ ...currentModule, check: true })
        } else {
          allDocs.push({ ...currentModule, check: false })
        }
      })

      setCheckboxs(allDocs)
    } else {
      setCheckboxs(modulesData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissionsEditData])

  return (
    <ModulesListContainer>
      {checkboxs?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="content"
            onClick={() => handleCheckbox(item.id)}
          >
            <input
              onChange={(event) => choose(event)}
              id={item.id}
              type="checkbox"
              className="checkbox"
              checked={item.check}
            />
            <span>{item.name}</span>
          </div>
        )
      })}
    </ModulesListContainer>
  )
}

export default ModulesList

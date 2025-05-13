import { useEffect, useState } from 'react'
import { CirclePicker, ColorResult } from 'react-color'
import { FieldValues, useForm } from 'react-hook-form'

import InputText from './InputText'
import {
  RegisterCategoryContainer,
  RegisterCategoryContentTitle,
} from './RegisterCategoryStyles'

import { BtnSave, Spinner } from '@/components/molecules'
import { Category } from '@/interfaces'
import { addCategory, showCategories, updateCategory } from '@/services'
import { useCategoryStore, useCompanyStore } from '@/store'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente RegisterCategory.
 *
 * @property {Category | null} dataSelect - Categoría seleccionada para
 * editar o null si se está creando una nueva.
 * @property {() => void} onClose - Función que se llama al cerrar el formulario.
 * @property {string} action - Acción a realizar, por ejemplo "crear" o "editar".
 */
interface RegisterCategoryProps {
  dataSelect: Category | null
  onClose: () => void
  action: string
}

/**
 * Componente de formulario para registrar o editar una categoría.
 *
 * Este componente muestra un formulario que permite al usuario registrar una nueva categoría
 * o editar una categoría existente, dependiendo de la acción seleccionada. Utiliza react-hook-form
 * para la gestión del formulario y validación de campos. Al enviar el formulario, ejecuta la acción
 * correspondiente (crear o actualizar) y cierra el formulario al finalizar.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.dataSelect - Datos de la categoría seleccionada para editar (opcional).
 * @param {() => void} props.onClose - Función de callback para cerrar el formulario.
 * @param {'Edit' | string} props.action - Acción a realizar:
 * `Edit` para editar, cualquier otro valor para registrar.
 */
const RegisterCategory: React.FC<RegisterCategoryProps> = ({
  dataSelect,
  onClose,
  action,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { insertCategory, editCategory } = useCategoryStore()

  const { companyData } = useCompanyStore()

  const [currentColor, setCurrentColor] = useState('#F44336')
  const [stateOfProcess, setStateOfProcess] = useState(false)

  /**
   * Cambia el color actual del formulario.
   *
   * @param {string} color - El nuevo color a establecer.
   * @returns {void} No retorna ningún valor.
   */
  const chooseColor = (color: ColorResult): void => {
    setCurrentColor(color.hex)
  }

  /**
   * Inserta o actualiza una categoría según la acción seleccionada.
   *
   * @async
   * @function
   * @param {FieldValues} data - Los valores del formulario, incluyendo el nombre y el
   * color de la categoría.
   * @returns {Promise<void>} No retorna ningún valor.
   *
   * @description
   * Si la acción es 'Edit', actualiza la categoría existente
   * utilizando el identificador, descripción y color.
   * Si la acción es diferente, crea una nueva categoría asociada a la compañía actual.
   * Después de la operación, ejecuta las funciones de callback
   * correspondientes y cierra el formulario.
   */
  const insert = async (data: FieldValues): Promise<void> => {
    if (action === 'Edit') {
      const category = {
        id: dataSelect?.id,
        description: data.description,
        color: currentColor,
        companyId: companyData?.id,
      }

      setStateOfProcess(true)

      await updateCategory(category)

      const categories = await showCategories(companyData?.id as number)

      editCategory(categories)

      setStateOfProcess(false)

      onClose()
    } else {
      const category = {
        _companyid: companyData?.id,
        _description: data.description,
        _color: currentColor,
      }

      setStateOfProcess(true)

      await addCategory(category)

      const categories = await showCategories(companyData?.id as number)

      insertCategory(categories)

      setStateOfProcess(false)

      onClose()
    }
  }

  useEffect(() => {
    if (action === 'Edit') {
      setCurrentColor(dataSelect?.color ?? '#6366F1')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <RegisterCategoryContainer>
      {stateOfProcess && <Spinner />}
      <div className="sub-container">
        <div className="headers">
          <section>
            <h1>
              {action == 'Edit'
                ? 'Editar categoría'
                : 'Registrar nueva categoría'}
            </h1>
          </section>
          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>
        <form className="form" onSubmit={handleSubmit(insert)}>
          <section>
            <article>
              <InputText icon={<iconsAndVars.rightArrowIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.description}
                  type="text"
                  placeholder="Categoría"
                  {...register('description', {
                    required: true,
                  })}
                />
                <label className="form__label">categoría</label>
                {errors.description?.type === 'required' && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>
            <div className="colorContainer">
              <RegisterCategoryContentTitle>
                {<iconsAndVars.colorPaletteIcon />}
                <span>Color</span>
              </RegisterCategoryContentTitle>
              <div className="colorPickerContent">
                <CirclePicker onChange={chooseColor} color={currentColor} />
              </div>
            </div>
            <div className="btnSaveContent">
              <BtnSave
                icon={<iconsAndVars.saveIcon />}
                title={action == 'Edit' ? 'Editar' : 'Guardar'}
                bgColor="#dac1ff"
              />
            </div>
          </section>
        </form>
      </div>
    </RegisterCategoryContainer>
  )
}

export default RegisterCategory

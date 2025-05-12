import { FieldValues, useForm } from 'react-hook-form'

import InputText from './InputText'
import { RegisterBrandContainer } from './RegisterBrandStyles'

import { BtnSave } from '@/components/molecules'
import { Brand } from '@/interfaces'
import { addBrand, updateBrand } from '@/services'
import { useBrandStore, useCompanyStore } from '@/store'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente RegisterBrand.
 *
 * @property {Brand | null} dataSelect - Marca seleccionada para
 * editar o null si se está creando una nueva.
 * @property {() => void} onClose - Función que se llama al cerrar el formulario.
 * @property {string} action - Acción a realizar, por ejemplo "crear" o "editar".
 */
interface RegisterBrandProps {
  dataSelect: Brand | null
  onClose: () => void
  action: string
}

/**
 * Componente de formulario para registrar o editar una marca.
 *
 * Este componente muestra un formulario que permite al usuario registrar una nueva marca
 * o editar una marca existente, dependiendo de la acción seleccionada. Utiliza react-hook-form
 * para la gestión del formulario y validación de campos. Al enviar el formulario, ejecuta la acción
 * correspondiente (crear o actualizar) y cierra el formulario al finalizar.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {any} props.dataSelect - Datos de la marca seleccionada para editar (opcional).
 * @param {() => void} props.onClose - Función de callback para cerrar el formulario.
 * @param {'Edit' | string} props.action - Acción a realizar:
 * `Edit` para editar, cualquier otro valor para registrar.
 */
const RegisterBrand: React.FC<RegisterBrandProps> = ({
  dataSelect,
  onClose,
  action,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { insertBrand, editBrand } = useBrandStore()

  const { companyData } = useCompanyStore()

  /**
   * Inserta o actualiza una marca según la acción seleccionada.
   *
   * @async
   * @function
   * @param {FieldValues} data - Los valores del formulario, incluyendo el nombre de la marca.
   * @returns {Promise<void>} No retorna ningún valor.
   *
   * @description
   * Si la acción es 'Edit', actualiza la marca existente
   * utilizando el identificador y el nuevo nombre.
   * Si la acción es diferente, crea una nueva marca asociada a la compañía actual.
   * Después de la operación, ejecuta las funciones de callback
   * correspondientes y cierra el formulario.
   */
  const insert = async (data: FieldValues): Promise<void> => {
    if (action === 'Edit') {
      const brand = {
        id: dataSelect?.id,
        _description: data.name,
      }

      await updateBrand(brand)

      editBrand()

      onClose()
    } else {
      const brand = {
        _description: data.name,
        _companyId: companyData?.id,
      }

      await addBrand(brand)

      insertBrand()

      onClose()
    }
  }

  return (
    <RegisterBrandContainer>
      <div className="sub-container">
        <div className="headers">
          <section>
            <h1>
              {action == 'Edit' ? 'Editar marca' : 'Registrar nueva marca'}
            </h1>
          </section>

          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>
        <form className="form" onSubmit={handleSubmit(insert)}>
          <section>
            <article>
              <InputText icon={<iconsAndVars.brandIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.description}
                  type="text"
                  placeholder=""
                  {...register('name', {
                    required: true,
                  })}
                />
                <label className="form__label">marca</label>
                {errors.name?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <div className="btnSaveContent">
              <BtnSave
                icon={<iconsAndVars.saveIcon />}
                title={action == 'Edit' ? 'Editar' : 'Guardar'}
                bgColor="#ef552b"
              />
            </div>
          </section>
        </form>
      </div>
    </RegisterBrandContainer>
  )
}

export default RegisterBrand

import { useMutation } from '@tanstack/react-query'
import { FieldValues, useForm } from 'react-hook-form'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import InputText from './InputText'
import { ContentClose, RegisterAdminContainer } from './RegisterAdminStyle'

import { BtnSave } from '@/components/molecules'
import { addUser } from '@/services'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente RegisterAdmin.
 *
 * @property {boolean} state - Estado booleano que indica si el formulario está activo o visible.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setState
 * - Función para actualizar el estado del formulario.
 */
interface RegisterAdminProps {
  state?: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Componente de formulario para registrar un nuevo usuario administrador (superAdmin).
 *
 * Este componente muestra un formulario que permite ingresar un correo electrónico y una contraseña
 * para crear un nuevo usuario con privilegios de super administrador. Utiliza
 * React Hook Form para la
 * gestión y validación de los campos del formulario, y react-query para manejar
 * la mutación de registro.
 *
 * Al enviar el formulario, se ejecuta la función de mutación para registrar el
 * usuario y, en caso de éxito,
 * se alterna el estado y se navega a la página principal. También permite cerrar
 * el formulario mediante un botón.
 *
 * @component
 * @param {RegisterAdminProps} props - Propiedades del componente.
 * @param {boolean} props.state - Estado actual de visibilidad o alternancia del formulario.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setState - Función
 * para actualizar el estado.
 * @returns {JSX.Element} El formulario de registro de administrador.
 */
const RegisterAdmin: React.FC<RegisterAdminProps> = ({ state, setState }) => {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      setState(!state)
      navigate('/')
    },
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  /**
   * Maneja el envío del formulario de registro de administrador.
   *
   * @async
   * @function
   * @param {FieldValues} data - Los valores del formulario ingresados por el usuario.
   * @returns {Promise<void>} No retorna ningún valor.
   * @description
   * Extrae el correo electrónico y la contraseña de los datos del formulario,
   * crea un objeto de credenciales con el tipo de usuario 'superAdmin' y ejecuta la mutación
   * para registrar al nuevo administrador.
   */
  const onHandleSubmit = async (data: FieldValues): Promise<void> => {
    const credentials = {
      email: data.email,
      password: data.password,
      userType: 'superAdmin',
    }

    mutation.mutate(credentials)
  }

  /**
   * Maneja el evento de clic para alternar el estado.
   * Invierte el valor actual de `state` utilizando la función `setState`.
   * 
   * @returns {void} No retorna ningún valor.
   */
  const onHandleClick = (): void => {
    setState(!state)
  }

  return (
    <RegisterAdminContainer>
      <ContentClose>
        <span onClick={onHandleClick}>x</span>
      </ContentClose>
      <div className="subContainer">
        <div className="headers">
          <section>
            <h1>Registrar Usuario</h1>
          </section>
        </div>
        <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
          <section>
            <article>
              <InputText icon={<MdAlternateEmail />}>
                <input
                  type="text"
                  className="form__field"
                  style={{ textTransform: 'lowercase' }}
                  placeholder="Email"
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                <label className="form__label">email</label>
                {errors.email?.type === 'pattern' && (
                  <p>El formato del email es incorrecto</p>
                )}
                {errors.email?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icon={<RiLockPasswordLine />}>
                <input
                  type="password"
                  className="form__field"
                  placeholder="Contraseña"
                  {...register('password', { required: true })}
                />
                <label className="form__label">Contraseña</label>
                {errors.password?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <div className="btnSaveContent">
              <BtnSave
                icon={<iconsAndVars.saveIcon />}
                title="Guardar"
                bgColor="#ff7556"
              />
            </div>
          </section>
        </form>
      </div>
    </RegisterAdminContainer>
  )
}

export default RegisterAdmin

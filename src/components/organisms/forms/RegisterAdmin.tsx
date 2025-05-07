import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { MdAlternateEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import InputText from './InputText'
import { ContentClose, RegisterAdminContainer } from './RegisterAdminStyle'

import { BtnSave } from '@/components/molecules'
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

const RegisterAdmin: React.FC<RegisterAdminProps> = ({ state, setState }) => {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log('data', data)
    },
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <RegisterAdminContainer>
      <ContentClose>
        <span onClick={setState}>x</span>
      </ContentClose>
      <div className="subContainer">
        <div className="headers">
          <section>
            <h1>Registrar Usuario</h1>
          </section>
        </div>
        <form className="form" onSubmit={handleSubmit(mutation.mutateAsync)}>
          <section>
            <article>
              <InputText icon={<MdAlternateEmail />}>
                <input
                  type="text"
                  className="form__field"
                  style={{ textTransform: 'lowercase' }}
                  placeholder="Email"
                  {...register('correo', {
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
                {errors.password?.type === 'pattern' && (
                  <p>El formato del email es incorrecto</p>
                )}
                {errors.email?.type === 'required' && <p>Campo requerido</p>}
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

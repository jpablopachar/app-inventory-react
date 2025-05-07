import { useMutation } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { MdOutlineInfo } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import {
  ContainerBtn,
  InitialStateText,
  LoginTemplateContainer,
  Title,
} from './LoginTemplateStyles'

import carrito from '../../assets/carrito.svg'
import logo from '../../assets/inventariosLogo.png'
import { BtnSave } from '../molecules'
import { FooterLogin, InputText, RegisterAdmin } from '../organisms'

import { ThemeContext } from '@/context'
import { loginUser } from '@/services'
import { iconsAndVars } from '@/styles'

const LoginTemplate: React.FC = () => {
  const navigate = useNavigate()

  const themeContext = useContext(ThemeContext)

  const { setThemeUse } = themeContext!

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      setInitialState(false)
      navigate('/')
    },
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const [state, setState] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [initialState, setInitialState] = useState(false)

  const onHandleSubmit = async (data: FieldValues): Promise<void> => {
    if (state) {
      const credentials = {
        email: data.email,
        password: data.password,
      }

      mutation.mutate(credentials)
    }
  }

  useEffect(() => {
    setThemeUse('light')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LoginTemplateContainer>
      <div className="contentLogo">
        <img src={logo} alt="Logo" />
        <span>StockPRO</span>
      </div>
      <div className="lateralBanner">
        <img src={carrito} alt="Imagen carrito" />
      </div>
      <div className="contentCard">
        <div className="card">
          {state && <RegisterAdmin setState={() => setState(!state)} />}
          <Title>StockPRO</Title>
          {initialState && (
            <InitialStateText>datos incorrectos</InitialStateText>
          )}
          <div className="help">
            Puedes crear una cuenta nueva ó 
            {' '}
            <br></br>
            solicitar a tu empleador una. 
            {' '}
            <MdOutlineInfo />
          </div>
          <p className="phrase">Controla tu inventario.</p>
          <form onSubmit={handleSubmit(onHandleSubmit)}>
            <InputText icon={<iconsAndVars.emailIcon />}>
              <input
                type="text"
                className="form__field"
                placeholder="Email"
                {...register('email', { required: true })}
              />
              <label className="form__label">Email</label>
              {errors.email?.type === 'required' && <p>Campo requerido</p>}
            </InputText>
            <InputText icon={<iconsAndVars.passwordIcon />}>
              <input
                type="password"
                className="form__field"
                placeholder="Contraseña"
                {...register('password', { required: true })}
              />
              <label className="form__label">Contraseña</label>
              {errors.password?.type === 'required' && <p>Campo requerido</p>}
            </InputText>
            <ContainerBtn>
              <BtnSave title="Iniciar" bgColor="#fc6b32" />
              <BtnSave
                title="Crear Cuenta"
                bgColor="#ffffff"
                task={() => setState(!state)}
              />
            </ContainerBtn>
          </form>
        </div>
        <FooterLogin />
      </div>
    </LoginTemplateContainer>
  )
}

export default LoginTemplate

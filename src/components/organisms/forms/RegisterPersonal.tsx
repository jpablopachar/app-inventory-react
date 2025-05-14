import { SignUpWithPasswordCredentials } from '@supabase/supabase-js'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { FormsContainer, FormsStylesContainerSelector } from './FormsStyles'

import InputText from './InputText'

import Selector from '../Selector'

import { BtnSave, GenericList, SpinnerLoader } from '@/components/molecules'
import { Personal } from '@/interfaces'
import {
  addAssignments,
  addUser,
  checkPermissions,
  closeSession,
  registerUser,
  removePermissions,
  showAllUsers,
  showPermissions,
  updateUser,
} from '@/services'
import {
  useCompanyStore,
  useGlobalStore,
  usePermissionsStore,
  useUserStore,
} from '@/store'

import { iconsAndVars } from '@/styles'
import { DocType, UserType } from '@/utils'

interface RegisterPersonalProps {
  dataSelect: Personal | null
  onClose: () => void
  action: string
}

const RegisterPersonal: React.FC<RegisterPersonalProps> = ({
  dataSelect,
  onClose,
  action,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { showUsersAll } = useUserStore()

  const { companyData } = useCompanyStore()

  const { modulesData } = useGlobalStore()

  const { permissionsEditData, getPermissionsEdit } = usePermissionsStore()

  const [brandState, setBrandState] = useState(false)
  const [categoryState, setCategoryState] = useState(false)
  const [openRegisterBrand, setOpenRegisterBrand] = useState(false)
  const [openRegisterCategory, setOpenRegisterCategory] = useState(false)
  const [subAction, setSubAction] = useState('')
  const [checkboxs, setCheckboxs] = useState<any[]>([])
  const [userType, setUserType] = useState<{
    icon: string
    description: string
  }>({
    icon: '',
    description: 'empleado',
  })
  const [docType, setDocType] = useState<{ icon: string; description: string }>(
    {
      icon: '',
      description: 'dni',
    },
  )

  const { isLoading } = useQuery({
    queryKey: ['permissionsEditData', { userId: dataSelect?.id }],
    queryFn: async () => {
      const res = await showPermissions(dataSelect?.id as number)

      getPermissionsEdit(res)
    },
    enabled: !!dataSelect?.id,
  })

  /**
   * Inserta o actualiza un usuario en el sistema, dependiendo de la
   * acción seleccionada ('Edit' o no).
   *
   * @async
   * @function
   * @param {FieldValues} data - Los datos del formulario proporcionados por el usuario.
   * @returns {Promise<void>} No retorna ningún valor.
   *
   * @description
   * Si la acción es 'Edit', actualiza la información del usuario
   * existente, elimina y reasigna los permisos,
   * actualiza la lista de usuarios y cierra el formulario.
   * Si la acción no es 'Edit', registra un nuevo usuario con las
   * credenciales proporcionadas, crea el usuario,
   * asigna la relación con la empresa, asigna los permisos, cierra
   * la sesión actual y cierra el formulario.
   */
  const insert = async (data: FieldValues): Promise<void> => {
    if (action === 'Edit') {
      const user = {
        id: dataSelect?.id,
        fullname: data.fullname,
        numDoc: data.numDoc,
        phone: data.phone,
        address: data.address,
        status: 'activo',
        userType: userType.description,
        docType: docType.description,
      }

      await updateUser(user)

      await removePermissions(user.id as number)

      checkPermissions(user.id as number, checkboxs)

      const res = await showAllUsers(companyData?.id as number)

      showUsersAll(res)

      onClose()
    } else {
      const credentials: SignUpWithPasswordCredentials = {
        email: data.email,
        password: data.password,
      }

      const res = await registerUser(credentials)

      if (res) {
        const user = {
          fullname: data.fullname,
          numDoc: data.numDoc,
          phone: data.phone,
          address: data.address,
          registrationDate: new Date(),
          status: 'activo',
          authId: res.id,
          userType: userType.description,
          docType: docType.description,
        }

        const response = await addUser(user)

        await addAssignments({
          companyId: companyData?.id,
          userId: response.id,
        })

        checkPermissions(response.id, checkboxs)

        await closeSession()

        onClose()
      }
    }
  }

  useEffect(() => {
    if (action === 'Edit') {
      setDocType({ icon: '', description: dataSelect?.docType as string })
      setUserType({ icon: '', description: dataSelect?.userType as string })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <SpinnerLoader />
  }

  return (
    <FormsContainer>
      <div className="sub-container">
        <div className="headers">
          <section>
            <h1>
              {action == 'Edit' ? 'Editar personal' : 'Registrar personal'}
            </h1>
          </section>
          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>
        <form className="formulario" onSubmit={handleSubmit(insert)}>
          <section className="section1">
            <article>
              <InputText icon={<iconsAndVars.nameIcon />}>
                <input
                  disabled={action === 'Edit' ? true : false}
                  className={
                    action === 'Edit' ? 'form__field disabled' : 'form__field'
                  }
                  defaultValue={dataSelect?.email}
                  type="text"
                  placeholder=""
                  {...register('email', {
                    required: action === 'Edit' ? false : true,
                  })}
                />
                <label className="form__label">Correo</label>
                {errors.email?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            {action !== 'Edit' ? (
              <article>
                <InputText icon={<iconsAndVars.passwordIcon />}>
                  <input
                    className="form__field"
                    defaultValue={dataSelect?.password}
                    type="text"
                    placeholder=""
                    {...register('password', {
                      required: true,
                    })}
                  />
                  <label className="form__label">Password</label>

                  {errors.password?.type === 'required' && (
                    <p>Campo requerido</p>
                  )}
                </InputText>
              </article>
            ) : null}

            <article>
              <InputText icon={<iconsAndVars.nameIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.fullname}
                  type="text"
                  placeholder=""
                  {...register('fullname', {
                    required: true,
                  })}
                />
                <label className="form__label">Nombres</label>
                {errors.fullname?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <FormsStylesContainerSelector>
              <label>Tipo doc: </label>
              <Selector
                state={brandState}
                color="#fc6027"
                text1="🎴"
                text2={docType.description}
                task={() => setBrandState(!brandState)}
              />
              {brandState && (
                <GenericList
                  bottom="-260px"
                  scroll="scroll"
                  setState={() => setBrandState(!brandState)}
                  data={DocType}
                  task={(p) => setDocType(p)}
                />
              )}
              {subAction}
            </FormsStylesContainerSelector>
            <article>
              <InputText icon={<iconsAndVars.stockIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.numDoc}
                  type="number"
                  placeholder=""
                  {...register('numDoc', {
                    required: true,
                  })}
                />
                <label className="form__label">Nro. doc</label>
                {errors.numDoc?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icon={<iconsAndVars.minimumStockIcon />}>
                <input
                  step="0.01"
                  className="form__field"
                  defaultValue={dataSelect?.phone}
                  type="text"
                  placeholder=""
                  {...register('phone', {
                    required: true,
                  })}
                />
                <label className="form__label">Telefono</label>
                {errors.phone?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icon={<iconsAndVars.barcodeIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.address}
                  type="text"
                  placeholder=""
                  {...register('address', {
                    required: true,
                  })}
                />
                <label className="form__label">Dirección</label>
                {errors.address?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
          </section>
          <section className="section2">
            <FormsStylesContainerSelector>
              <label>Tipo: </label>
              <Selector
                state={categoryState}
                color="#fc6027"
                text1="👷‍♂️"
                text2={userType.description}
                task={() => setCategoryState(!categoryState)}
              />
              {categoryState && (
                <GenericList
                  bottom="-150px"
                  scroll="scroll"
                  setState={() => setCategoryState(!categoryState)}
                  data={UserType}
                  task={(p) => setUserType(p)}
                />
              )}
            </FormsStylesContainerSelector>
            PERMISOS:🔑
            {/* <ModulesList
              accion={accion}
              setCheckboxs={setCheckboxs}
              checkboxs={checkboxs}
              tipouser={tipouser}
            /> */}
          </section>
          <div className="btnSaveContent">
            <BtnSave
              icon={<iconsAndVars.saveIcon />}
              title="Guardar"
              bgColor="#EF552B"
            />
          </div>
        </form>
      </div>
    </FormsContainer>
  )
}

export default RegisterPersonal

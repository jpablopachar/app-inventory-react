/* eslint-disable camelcase */
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { FormsContainer, FormsStylesContainerSelector } from './FormsStyles'
import InputText from './InputText'

import RegisterBrand from './RegisterBrand'

import RegisterCategory from './RegisterCategory'

import Selector from '../Selector'

import {
  BtnFilter,
  BtnSave,
  GenericList,
  Spinner,
} from '@/components/molecules'

import { Product } from '@/interfaces'
import { addProduct, showProducts, updateProduct } from '@/services'
import {
  useBrandStore,
  useCategoryStore,
  useCompanyStore,
  useProductStore,
} from '@/store'
import { iconsAndVars } from '@/styles'

/**
 * Propiedades para el componente RegisterProduct.
 *
 * @property {Product | null} dataSelect - El producto seleccionado
 * para registrar o editar. Puede ser nulo si no hay producto seleccionado.
 * @property {() => void} onClose - Función que se llama cuando se cierra el formulario.
 * @property {string} action - Acción que se está realizando, por ejemplo, "crear" o "editar".
 */
interface RegisterProductProps {
  dataSelect: Product | null
  onClose: () => void
  action: string
}

/**
 * Componente de formulario para registrar o editar productos en el sistema.
 *
 * Este componente permite al usuario registrar un nuevo producto o editar uno existente,
 * gestionando la selección de marca y categoría, así como la creación de nuevas marcas o categorías
 * desde el mismo formulario. Utiliza formularios controlados con validación y muestra un spinner
 * durante los procesos de guardado.
 *
 * @component
 * @param {RegisterProductProps} props - Propiedades del componente.
 * @param {any} props.dataSelect - Datos del producto seleccionado para edición (opcional).
 * @param {() => void} props.onClose - Función para cerrar el formulario.
 * @param {'Edit' | string} props.action - Acción a realizar: 'Edit'
 * para editar, cualquier otro valor para registrar.
 *
 * @returns {JSX.Element} El formulario de registro o edición de productos.
 */
const RegisterProduct: React.FC<RegisterProductProps> = ({
  dataSelect,
  onClose,
  action,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const { insertProduct, editProduct } = useProductStore()

  const { brandsData, brandItemSelect, selectBrand } = useBrandStore()

  const { categoriesData, categoryItemSelect, selectCategory } =
    useCategoryStore()

  const { companyData } = useCompanyStore()

  const [brandState, setBrandState] = useState(false)
  const [categoryState, setCategoryState] = useState(false)
  const [openRegisterBrand, setOpenRegisterBrand] = useState(false)
  const [openRegisterCategory, setOpenRegisterCategory] = useState(false)
  const [stateOfProcess, setStateOfProcess] = useState(false)
  const [subAction, setSubAction] = useState('')

  /**
   * Abre o cierra el formulario para registrar una nueva marca y establece la subacción como 'New'.
   *
   * Esta función alterna el estado `openRegisterBrand` para mostrar
   * u ocultar el formulario de registro de marca.
   * Además, actualiza el estado `subAction` a 'New' para indicar
   * que se está realizando una nueva acción de registro.
   */
  const newRegisterBrand = (): void => {
    setOpenRegisterBrand(!openRegisterBrand)
    setSubAction('New')
  }

  /**
   * Alterna el estado de apertura del formulario para registrar una nueva categoría.
   * Además, establece la subacción como 'New' para indicar que se está creando una nueva categoría.
   *
   * @returns {void} No retorna ningún valor.
   */
  const newRegisterCategory = (): void => {
    setOpenRegisterCategory(!openRegisterCategory)
    setSubAction('New')
  }

  /**
   * Inserta o actualiza un producto en el sistema según la acción seleccionada.
   *
   * @async
   * @function
   * @param {FieldValues} data - Los valores del formulario para el producto.
   * @returns {Promise<void>} No retorna ningún valor.
   *
   * @description
   * Si la acción es 'Edit', actualiza un producto existente utilizando los datos proporcionados,
   * actualiza la lista de productos y cierra el formulario. Si la
   * acción es diferente, registra un nuevo producto,
   * actualiza la lista de productos y cierra el formulario.
   *
   * @remarks
   * - Utiliza los estados locales para indicar el proceso en curso.
   * - Llama a funciones externas para agregar, actualizar y mostrar productos.
   * - Los campos del producto varían según si es una edición o una inserción.
   */
  const insert = async (data: FieldValues): Promise<void> => {
    if (action === 'Edit') {
      const product = {
        id: dataSelect?.id,
        description: data.description,
        brandId: brandItemSelect?.id,
        stock: parseFloat(data.stock),
        minStock: parseFloat(data.minStock),
        barCode: data.barCode,
        internalCode: data.internalCode,
        salePrice: parseFloat(data.salePrice),
        purchasePrice: parseFloat(data.purchasePrice),
        categoryId: categoryItemSelect?.id,
        companyId: companyData?.id,
      }

      setStateOfProcess(true)

      await updateProduct(product)

      const products = await showProducts(companyData?.id as number)

      editProduct(products)

      setStateOfProcess(false)

      onClose()
    } else {
      const product = {
        _description: data.description,
        _brand_id: brandItemSelect?.id,
        _stock: parseFloat(data.stock),
        _min_stock: parseFloat(data.minStock),
        _bar_code: parseFloat(data.barCode),
        _internal_code: data.internalCode,
        _sale_price: parseFloat(data.salePrice),
        _purchase_price: parseFloat(data.purchasePrice),
        _category_id: categoryItemSelect?.id,
        _company_id: companyData?.id,
      }

      setStateOfProcess(true)

      await addProduct(product)

      const products = await showProducts(companyData?.id as number)

      insertProduct(products)

      setStateOfProcess(false)

      onClose()
    }
  }

  return (
    <FormsContainer>
      {stateOfProcess && <Spinner />}
      <div className="sub-container">
        <div className="headers">
          <section>
            <h1>
              {action == 'Edit'
                ? 'Editar producto'
                : 'Registrar nuevo producto'}
            </h1>
          </section>
          <section>
            <span onClick={onClose}>x</span>
          </section>
        </div>
        <form className="form" onSubmit={handleSubmit(insert)}>
          <section className="section1">
            <article>
              <InputText icon={<iconsAndVars.nameIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.description}
                  type="text"
                  placeholder=""
                  {...register('description', {
                    required: true,
                  })}
                />
                <label className="form__label">Nombre</label>
                {errors.description?.type === 'required' && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>
            <FormsStylesContainerSelector>
              <label>Marca: </label>
              <Selector
                state={brandState}
                color="#fc6027"
                text1="🍿"
                text2={brandItemSelect?.description as string}
                task={() => setBrandState(!brandState)}
              />
              <BtnFilter
                task={newRegisterBrand}
                textColor="#353535"
                icon={<iconsAndVars.addIcon />}
              />
              {brandState && (
                <GenericList
                  bottom="-260px"
                  scroll="scroll"
                  setState={() => setBrandState(!brandState)}
                  data={brandsData}
                  task={selectBrand}
                />
              )}
              {subAction}
            </FormsStylesContainerSelector>
            <article>
              <InputText icon={<iconsAndVars.stockIcon />}>
                <input
                  step="0.01"
                  className="form__field"
                  defaultValue={dataSelect?.stock}
                  type="number"
                  placeholder=""
                  {...register('stock', {
                    required: true,
                  })}
                />
                <label className="form__label">Stock</label>
                {errors.stock?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icon={<iconsAndVars.minimumStockIcon />}>
                <input
                  step="0.01"
                  className="form__field"
                  defaultValue={dataSelect?.minStock}
                  type="number"
                  placeholder=""
                  {...register('minStock', {
                    required: true,
                  })}
                />
                <label className="form__label">Stock minimo</label>
                {errors.minStock?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <FormsStylesContainerSelector>
              <label>Categoría: </label>
              <Selector
                state={categoryState}
                color="#fc6027"
                text1="🍿"
                text2={categoryItemSelect?.description as string}
                task={() => setCategoryState(!categoryState)}
              />
              <BtnFilter
                task={newRegisterCategory}
                textColor="#353535"
                icon={<iconsAndVars.addIcon />}
              />
              {categoryState && (
                <GenericList
                  bottom="50px"
                  scroll="scroll"
                  setState={() => setCategoryState(!categoryState)}
                  data={categoriesData}
                  task={selectCategory}
                />
              )}
            </FormsStylesContainerSelector>
          </section>
          <section className="section2">
            <article>
              <InputText icon={<iconsAndVars.barcodeIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.barCode}
                  type="number"
                  placeholder=""
                  {...register('barCode', {
                    required: true,
                  })}
                />
                <label className="form__label">Codigo de barras</label>
                {errors.barCode?.type === 'required' && <p>Campo requerido</p>}
              </InputText>
            </article>
            <article>
              <InputText icon={<iconsAndVars.internalCodeIcon />}>
                <input
                  className="form__field"
                  defaultValue={dataSelect?.internalCode}
                  type="text"
                  placeholder=""
                  {...register('internalCode', {
                    required: true,
                  })}
                />
                <label className="form__label">Codigo interno</label>
                {errors.internalCode?.type === 'required' && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>
            <article>
              <InputText icon={<iconsAndVars.sellingPriceIcon />}>
                <input
                  step="0.01"
                  className="form__field"
                  defaultValue={dataSelect?.salePrice}
                  type="number"
                  placeholder=""
                  {...register('salePrice', {
                    required: true,
                  })}
                />
                <label className="form__label">Precio de venta</label>
                {errors.salePrice?.type === 'required' && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>
            <article>
              <InputText icon={<iconsAndVars.purchasePriceIcon />}>
                <input
                  step="0.01"
                  className="form__field"
                  defaultValue={dataSelect?.purchasePrice}
                  type="number"
                  placeholder=""
                  {...register('purchasePrice', {
                    required: true,
                  })}
                />
                <label className="form__label">Precio de compra</label>
                {errors.purchasePrice?.type === 'required' && (
                  <p>Campo requerido</p>
                )}
              </InputText>
            </article>
          </section>
          <div className="btnSaveContent">
            <BtnSave
              icon={<iconsAndVars.saveIcon />}
              title="Guardar"
              bgColor="#EF552B"
            />
          </div>
        </form>
        {openRegisterBrand && (
          <RegisterBrand
            dataSelect={dataSelect}
            onClose={() => setOpenRegisterBrand(!openRegisterBrand)}
            action={subAction}
          />
        )}
        {openRegisterCategory && (
          <RegisterCategory
            dataSelect={dataSelect}
            onClose={() => setOpenRegisterCategory(!openRegisterCategory)}
            action={subAction}
          />
        )}
      </div>
    </FormsContainer>
  )
}

export default RegisterProduct

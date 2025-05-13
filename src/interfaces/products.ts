/**
 * Representa un producto en el inventario.
 *
 * @property {number} id - Identificador único del producto.
 * @property {string} description - Descripción del producto.
 * @property {number} brandId - Identificador de la marca asociada.
 * @property {number} stock - Cantidad actual en inventario.
 * @property {number} minStock - Stock mínimo permitido antes de requerir reposición.
 * @property {string} barCode - Código de barras del producto.
 * @property {string} internalCode - Código interno del producto.
 * @property {number} salePrice - Precio de venta del producto.
 * @property {number} purchasePrice - Precio de compra del producto.
 * @property {number} categoryId - Identificador de la categoría asociada.
 * @property {number} companyId - Identificador de la empresa propietaria del producto.
 * @property {string} brand - Nombre de la marca del producto.
 * @property {string} category - Nombre de la categoría del producto.
 * @property {string} color - Color del producto.
 */
export interface Product {
  id: number
  description: string
  brandId: number
  stock: number
  minStock: number
  barCode: string
  internalCode: string
  salePrice: number
  purchasePrice: number
  categoryId: number
  companyId: number
  brand: string
  category: string
  color: string
}

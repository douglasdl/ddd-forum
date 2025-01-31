# Entidades (Entities):

## Product 
  - id
  - size
  - color

## Inventory
  - ProductId
  - minQty
  - currentQty
 
## SalesHistory
  - soldQty
  - saleDate
  - profit

## PurchaseOrder
  - productId
  - supplierId
  - date
  - qty

## Supplier
  - id

## Alert
  - productId

# Casos de Uso (Use Cases):
  - TrackProductUseCase()
  - SendLowStockAlert()  
    - e-mail
    - system-notification
  - PurchaseItem
    - create-purchase-order
    - view-purchase-orders
    - supplier delivery date
  - ViewSalesInventoryHistory
    - sales-quantity-by-period
    - profits-by-product
    - best-sellers-by-period
    - inventory-qty-trends
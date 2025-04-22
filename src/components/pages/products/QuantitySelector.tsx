interface QuantitySelectorProps {
  quantity: number;
  basePrice: number;
  optionPrice: number;
  onQuantityChange: (newQuantity: number) => void;
}

export default function QuantitySelector({
  quantity,
  basePrice,
  optionPrice,
  onQuantityChange,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onQuantityChange(quantity - 1)}
          className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
        >
          -
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
        >
          +
        </button>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500">개당 가격</div>
        <div className="text-lg font-semibold">
          {(basePrice + optionPrice).toLocaleString()}원
        </div>
      </div>
    </div>
  );
}

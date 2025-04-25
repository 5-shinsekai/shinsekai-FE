import { ProductOptionType } from '@/types/ProductDataTypes';

interface OptionSelectorProps {
  selectedColor: number | null;
  selectedSize: number | null;
  productOption: ProductOptionType[];
  colorNames: { [key: number]: string };
  sizeNames: { [key: number]: string };
  onColorChange: (colorId: number) => void;
  onSizeChange: (sizeId: number) => void;
}
export default function OptionSelector({
  selectedColor,
  selectedSize,
  productOption,
  colorNames,
  sizeNames,
  onColorChange,
  onSizeChange,
}: OptionSelectorProps) {
  const uniqueColors = Array.from(
    new Set(productOption.map((option) => option.colorId))
  );

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">색상</label>
        <select
          className="w-full p-2 border rounded-lg"
          value={selectedColor || ''}
          onChange={(e) => onColorChange(Number(e.target.value))}
        >
          <option value="">색상을 선택하세요</option>
          {uniqueColors.map((color) => (
            <option key={color} value={color}>
              {colorNames[color] || `색상 ${color}`}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2 group">
        <label className="block text-sm font-medium text-gray-700 group-has-disabled:opacity-50">
          사이즈
        </label>
        <select
          className="w-full p-2 border rounded-lg disabled:opacity-50"
          value={selectedSize || ''}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          disabled={!selectedColor}
        >
          <option value="">사이즈를 선택하세요</option>
          {selectedColor &&
            productOption
              .filter((option) => option.colorId === selectedColor)
              .map((option) => (
                <option key={option.sizeId} value={option.sizeId}>
                  {sizeNames[option.sizeId] || `사이즈 ${option.sizeId}`}( +
                  {option.optionPrice.toLocaleString()}원 ){option.stockCount}개
                  남음
                </option>
              ))}
        </select>
      </div>
    </div>
  );
}

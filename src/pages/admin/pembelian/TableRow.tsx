import React from "react";

interface PembelianItem {
  tanggal: string;
  namaProduk: string;
  qty: number;
  hargaBeli: number;
  total: number;
}

interface Props {
  item: PembelianItem;
  index: number;
  returnQty: number;
  onReturnQtyChange: (index: number, value: number) => void;
  onReturn: (item: PembelianItem, index: number) => void;
}

const TableRow: React.FC<Props> = ({ item, index, returnQty, onReturnQtyChange, onReturn }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.tanggal}</td>
    <td className="px-6 py-4 text-sm text-gray-900">{item.namaProduk}</td>
    <td className="px-6 py-4 text-sm text-center text-gray-700">{item.qty}</td>
    <td className="px-6 py-4 text-sm text-center text-gray-700">Rp {item.hargaBeli.toLocaleString()}</td>
    <td className="px-6 py-4 text-sm text-right text-gray-700">Rp {item.total.toLocaleString()}</td>
    <td className="px-6 py-4 text-sm text-center">
      <input
        type="number"
        min={1}
        max={item.qty}
        value={returnQty || ""}
        onChange={(e) => onReturnQtyChange(index, parseInt(e.target.value, 10) || 0)}
        className="w-16 text-sm border rounded px-2 py-1"
      />
      <button
        onClick={() => onReturn(item, index)}
        className="ml-2 px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white rounded"
      >
        Retur
      </button>
    </td>
  </tr>
);

export default TableRow;

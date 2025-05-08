import React, { useState } from "react";
import SearchBar from "../Search";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface PembelianItem {
  tanggal: string;
  namaProduk: string;
  qty: number;
  hargaBeli: number;
  total: number;
}

interface Props {
  data: PembelianItem[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [returnQty, setReturnQty] = useState<{ [index: number]: number }>({});

  const handleReturn = (item: PembelianItem, index: number) => {
    const qty = returnQty[index] || 0;
    if (qty <= 0) return alert("Jumlah retur harus lebih dari 0.");
    if (qty > item.qty) return alert("Jumlah retur tidak boleh lebih besar dari qty pembelian.");

    console.log("Returning", {
      tanggal: new Date().toISOString().split("T")[0],
      namaProduk: item.namaProduk,
      qty,
      hargaBeli: item.hargaBeli,
      total: qty * item.hargaBeli,
      status: "retur_buy"
    });

    alert(`Retur untuk ${item.namaProduk} sebanyak ${qty} berhasil disiapkan.`);
    setReturnQty((prev) => ({ ...prev, [index]: 0 }));
  };

  const filteredData = data.filter((item) =>
    item.namaProduk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />

      <div className="overflow-x-auto mx-auto max-w-xs sm:max-w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <TableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 py-4">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <TableRow
                  key={index}
                  item={item}
                  index={index}
                  returnQty={returnQty[index] || 0}
                  onReturnQtyChange={(idx, val) => setReturnQty((prev) => ({ ...prev, [idx]: val }))}
                  onReturn={handleReturn}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

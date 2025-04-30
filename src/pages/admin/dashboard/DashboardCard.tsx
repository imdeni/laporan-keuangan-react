import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  color?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon: Icon, color = "bg-white" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let targetValue = 0;

    if (typeof value === "string" && value.includes("Rp")) {
      targetValue = parseInt(value.replace(/[^\d]/g, ""), 10);
    } else if (typeof value === "number") {
      targetValue = value;
    }

    let currentValue = 0;

    const incrementValue = () => {
      if (currentValue < targetValue) {
        currentValue += Math.ceil(targetValue / 100);
        setDisplayValue(currentValue);
        requestAnimationFrame(incrementValue);
      } else {
        setDisplayValue(targetValue);
      }
    };

    incrementValue();
  }, [value]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const formattedValue =
    typeof value === "number" ? displayValue : formatCurrency(displayValue);

  return (
    <div className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 ${color}`}>
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-gray-800 text-white">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-500">{title}</h3>
          <p className="text-lg font-semibold text-gray-900">{formattedValue}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

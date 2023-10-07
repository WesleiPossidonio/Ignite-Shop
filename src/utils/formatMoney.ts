'use client';
export const FormatMoney = (value: number) => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }
  
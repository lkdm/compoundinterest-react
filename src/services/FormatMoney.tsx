
const formatMoney = (money: number): string => {

  if (money >= 1_000_000)
    return String((money/1_000_000).toFixed(2))+"M"

  if (money >= 10000)
    return String((money/1000).toFixed(0))+"k"
  
  return String(money.toFixed(2))
}

export default formatMoney
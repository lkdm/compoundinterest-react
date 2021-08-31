import { Result, Money } from '../../store/types';
import formatMoney from '../../services/FormatMoney'

interface Props {
  data: Result,
  initialDeposit: Money
}

const ResultsText: React.FC<Props> = ({data, initialDeposit}) => {

  // Guard
  if (data === undefined) return null

  // Get last year result
  const result = data[data.length - 1]

  // Definitions
  const initial = initialDeposit/100
  const deposits = result.cumulativeRegularDeposits
  const interest = result.cumulativeInterest
  const total = result.cumulativeTotal

  return (
    <div className="resultsTest">
        <dl className="row">
          <dt className="col-6">Initial deposit:</dt>
          <dd className="col-6">{formatMoney(initial)}</dd>
        </dl>
        <dl className="row">
          <dt className="col-6">Regular deposits:</dt>
          <dd className="col-6">{formatMoney(deposits)}</dd>
        </dl>
        <dl className="row">
          <dt className="col-6">Total interest:</dt>
          <dd className="col-6">{formatMoney(interest)}</dd>
        </dl>
        <dl className="row">
          <dt className="col-6">Total savings:</dt>
          <dd className="col-6">
            { formatMoney(total) }
          </dd>
        </dl>    
      </div>
  )
}

export default ResultsText

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { YearResult, Result, Money } from '../../store/types';
import formatMoney from '../../services/FormatMoney'

interface Props {
  data: Result,
  initialDeposit: Money
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>): any => {
  if (active && payload && payload.length) {
    const inital = Number(payload[0].value)
    const deposits = Number(payload[1].value)
    const interest = Number(payload[2].value)

    const total = inital + deposits + interest

    return (
      <div className="custom-tooltip">
        <dl className="row">
          <dt className="col-sm-6">Initial</dt>
          <dd className="col-sm-6">{formatMoney(inital)}</dd>
        </dl>
        <dl className="row">
          <dt className="col-sm-6">Deposits</dt>
          <dd className="col-sm-6">{formatMoney(deposits)}</dd>
        </dl>
        <dl className="row">
          <dt className="col-sm-6">Interest</dt>
          <dd className="col-sm-6">{formatMoney(interest)}</dd>
        </dl>
        
        <dl className="row">
          <dt className="col-sm-6">Total</dt>
          <dd className="col-sm-6">
            { formatMoney(total) }
          </dd>
        </dl>    
      </div>
    )
  } else {
    return (
      <>Nothing to render</>
    )
  }
}

const ResultChart: React.FC<Props> = ({data, initialDeposit}) => {

  // Guard
  if (data == undefined) return null

  return (
    <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="yearNumber" />
          <YAxis />
          <Tooltip content={<CustomTooltip />}/>
          <Legend />
          <Bar name="Initial deposit" dataKey="initialDeposit" stackId="a" fill="#1c4d78" />
          <Bar name="Regular deposits" dataKey="cumulativeRegularDeposits" stackId="a" fill="#3c83c2" />
          <Bar name="Interest" dataKey="cumulativeInterest" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default ResultChart
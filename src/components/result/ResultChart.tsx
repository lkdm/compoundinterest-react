import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { YearResult, Result, Money } from '../../store/types';

interface Props {
  data: Result,
  initialDeposit: Money
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>): any => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <dl className="row">
          <dt className="col-sm-6">Initial</dt>
          <dd className="col-sm-6">{`${payload[0].value?.toFixed(2)}`}</dd>
        </dl>
        <dl className="row">
          <dt className="col-sm-6">Deposits</dt>
          <dd className="col-sm-6">{`${payload[1].value?.toFixed(2)}`}</dd>
        </dl>
        <dl className="row">
          <dt className="col-sm-6">Interest</dt>
          <dd className="col-sm-6">{`${payload[2].value?.toFixed(2)}`}</dd>
        </dl>
        <dl className="row">
          <dt className="col-sm-6">Total</dt>
          <dd className="col-sm-6">{`${payload[3].value?.toFixed(2)}`}</dd>
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
          <Bar dataKey="cumulativeTotal" stackId="a" fill="#5dadf5" maxBarSize={0} />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default ResultChart
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { YearResult, Result, Money } from '../../store/types';

interface Props {
  data: Result,
  initialDeposit: Money
}

const ResultChart: React.FC<Props> = ({data, initialDeposit}) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="yearNumber" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="initialDeposit" stackId="a" fill="#000" />
          <Bar dataKey="cumulativeRegularDeposits" stackId="a" fill="#ccc" />
          <Bar dataKey="cumulativeTotal" stackId="a" fill="#82ca9d" />

        </BarChart>
      </ResponsiveContainer>
  )
}

export default ResultChart
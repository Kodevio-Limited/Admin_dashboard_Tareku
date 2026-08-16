'use client';
import { useState } from 'react';
import { TrendingUp, FileText, Percent, Target } from 'lucide-react';
import Card from '@/components/shared/Card';
import { BarChart, DonutChart } from '@/components/shared/Charts';

const reportCards = [
  { label: 'Total Transfer Volume', value: 128450, sub: '425 transactions', icon: TrendingUp, iconBg: 'bg-accentSoft text-accentStrong', prefix: '$' },
  { label: 'Total Transaction Fees', value: 12450, icon: FileText, iconBg: 'bg-graySoft text-navy', prefix: '$' },
  { label: 'Successful Transaction Rate', value: 91.4, icon: Percent, iconBg: 'bg-successSoft text-success', suffix: '%' },
  { label: 'Repayment Collection Rate', value: 86.2, icon: Target, iconBg: 'bg-warningSoft text-warning', suffix: '%' },
];

const volumeData = [
  { day: 'Mon', amount: 2400 },
  { day: 'Tue', amount: 3100 },
  { day: 'Wed', amount: 1750 },
  { day: 'Thu', amount: 4200 },
  { day: 'Fri', amount: 2900 },
  { day: 'Sat', amount: 1600 },
  { day: 'Sun', amount: 3500 },
];

const repaymentStatusData = [
  { label: 'Completed', value: 42, color: '#219A3B' },
  { label: 'Pending', value: 28, color: '#FFC107' },
  { label: 'Overdue', value: 12, color: '#DC2626' },
];

export default function ReportsPage() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-4">
        <p className="text-sm font-medium text-navy">Date Range</p>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-navy outline-none focus:border-accent"
        />
        <span className="text-xs text-textSecondary">to</span>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="h-10 rounded-lg border border-border bg-surface px-3 text-sm text-navy outline-none focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {reportCards.map((card) => (
          <Card key={card.label} className="flex flex-col">
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
              <div className={`rounded-lg p-2.5 ${card.iconBg}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-textSecondary">{card.label}</p>
                <p className="mt-2 text-2xl font-bold text-navy">
                  {card.prefix}
                  {card.value.toLocaleString()}
                  {card.suffix}
                </p>
                {card.sub && (
                  <p className="mt-1 text-xs font-medium text-textSecondary">{card.sub}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
        <Card
          title="Transfer Volume"
          subtitle="Money sent over the selected period"
          className="flex flex-col"
          bodyClassName="flex flex-1 items-center"
        >
          <BarChart data={volumeData} fill />
        </Card>
        <Card
          title="Repayment Status"
          subtitle="Distribution of repayment outcomes"
          className="flex flex-col"
          bodyClassName="flex flex-1 items-center justify-center"
        >
          <DonutChart segments={repaymentStatusData} />
        </Card>
      </div>
    </div>
  );
}
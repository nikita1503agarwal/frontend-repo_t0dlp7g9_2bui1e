import React from 'react';
import { Users, Wallet, Receipt, CheckCircle2 } from 'lucide-react';

function Stat({ icon: Icon, label, value, trend }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs text-slate-500">{label}</p>
          <p className="text-lg font-semibold text-slate-900">{value}</p>
        </div>
        {trend && (
          <span className="ml-auto text-xs font-medium text-emerald-600">{trend}</span>
        )}
      </div>
    </div>
  );
}

export default function StatCards({ role }) {
  const dataByRole = {
    admin: [
      { icon: Users, label: 'Total Employees', value: '128' },
      { icon: Wallet, label: 'Payroll (This Month)', value: '$182,450' },
      { icon: Receipt, label: 'Pending Approvals', value: '6' },
      { icon: CheckCircle2, label: 'Paid Payslips', value: '122' },
    ],
    manager: [
      { icon: Users, label: 'Team Members', value: '18' },
      { icon: Wallet, label: 'Team Payroll', value: '$24,800' },
      { icon: Receipt, label: 'Drafts', value: '3' },
      { icon: CheckCircle2, label: 'Approved', value: '15' },
    ],
    employee: [
      { icon: Wallet, label: 'Net Salary (Sep)', value: '$3,240' },
      { icon: Receipt, label: 'Payslips', value: '26' },
      { icon: CheckCircle2, label: 'Status', value: 'Paid' },
    ],
  };

  const items = dataByRole[role] || dataByRole.employee;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, idx) => (
        <Stat key={idx} {...s} />
      ))}
    </div>
  );
}

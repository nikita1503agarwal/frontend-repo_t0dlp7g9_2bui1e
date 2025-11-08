import React from 'react';
import { FileSpreadsheet, ArrowDownToLine, ArrowUpToLine, Check, Clock, SendHorizonal } from 'lucide-react';

const statusStyles = {
  Draft: 'bg-slate-100 text-slate-700',
  Submitted: 'bg-amber-100 text-amber-800',
  Approved: 'bg-blue-100 text-blue-800',
  Paid: 'bg-emerald-100 text-emerald-800',
};

const demoRows = [
  {
    id: 1,
    employee: 'Alice Johnson',
    department: 'Engineering',
    month: 'Sep',
    year: 2025,
    base: 3200,
    allowance: 200,
    deduction: 160,
    net: 3240,
    status: 'Paid',
  },
  {
    id: 2,
    employee: 'Bob Smith',
    department: 'Engineering',
    month: 'Sep',
    year: 2025,
    base: 2900,
    allowance: 150,
    deduction: 120,
    net: 2930,
    status: 'Approved',
  },
  {
    id: 3,
    employee: 'Carol Davis',
    department: 'Design',
    month: 'Sep',
    year: 2025,
    base: 2700,
    allowance: 180,
    deduction: 90,
    net: 2790,
    status: 'Submitted',
  },
  {
    id: 4,
    employee: 'Daniel Lee',
    department: 'Design',
    month: 'Sep',
    year: 2025,
    base: 2500,
    allowance: 120,
    deduction: 60,
    net: 2560,
    status: 'Draft',
  },
];

export default function PayrollTable({ role }) {
  const rows = demoRows;

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="text-blue-700" size={18} />
          <h3 className="text-sm font-semibold text-slate-900">{role === 'employee' ? 'My Payslips' : 'Monthly Payrolls'}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            <ArrowDownToLine size={14} /> PDF
          </button>
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
            <ArrowDownToLine size={14} /> Excel
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Employee</th>
              <th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">Period</th>
              <th className="px-4 py-3 font-medium text-right">Base</th>
              <th className="px-4 py-3 font-medium text-right">Allowance</th>
              <th className="px-4 py-3 font-medium text-right">Deduction</th>
              <th className="px-4 py-3 font-medium text-right">Net</th>
              <th className="px-4 py-3 font-medium">Status</th>
              {role !== 'employee' && <th className="px-4 py-3"></th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="px-4 py-3 text-slate-800">{r.employee}</td>
                <td className="px-4 py-3 text-slate-600">{r.department}</td>
                <td className="px-4 py-3 text-slate-600">{r.month} {r.year}</td>
                <td className="px-4 py-3 text-right tabular-nums">${r.base.toLocaleString()}</td>
                <td className="px-4 py-3 text-right tabular-nums text-emerald-700">+${r.allowance.toLocaleString()}</td>
                <td className="px-4 py-3 text-right tabular-nums text-rose-700">-${r.deduction.toLocaleString()}</td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums">${r.net.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[r.status]}`}>
                    {r.status === 'Paid' && <Check size={14} className="mr-1" />}
                    {r.status === 'Submitted' && <SendHorizonal size={14} className="mr-1" />}
                    {r.status === 'Draft' && <Clock size={14} className="mr-1" />}
                    {r.status}
                  </span>
                </td>
                {role !== 'employee' && (
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                        Edit
                      </button>
                      <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                        Approve
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from 'react';
import { Plus, Download, ShieldCheck, Users } from 'lucide-react';

export default function QuickActions({ role }) {
  const isAdmin = role === 'admin';
  const isManager = role === 'manager';

  const actions = [
    isAdmin && { icon: Users, label: 'Add Employee' },
    (isAdmin || isManager) && { icon: ShieldCheck, label: 'Approve Payroll' },
    (isAdmin || isManager) && { icon: Plus, label: 'Create Payroll' },
    { icon: Download, label: 'Export Reports' },
  ].filter(Boolean);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-sm font-semibold text-slate-900">Quick Actions</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {actions.map((a, idx) => (
          <button
            key={idx}
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <a.icon size={16} className="text-blue-700" />
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

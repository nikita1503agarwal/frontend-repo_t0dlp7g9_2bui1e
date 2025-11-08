import React from 'react';
import { Building2, ChevronDown, User2 } from 'lucide-react';

const roles = [
  { value: 'admin', label: 'Admin' },
  { value: 'manager', label: 'Manager' },
  { value: 'employee', label: 'Employee' },
];

export default function Header({ currentRole, onChangeRole }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight text-slate-900">Payroll Pro</h1>
            <p className="text-xs text-slate-500">Employee Payroll Management</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={currentRole}
              onChange={(e) => onChangeRole(e.target.value)}
              className="appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 pr-8 text-sm font-medium text-slate-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <User2 size={18} />
            </div>
            <div className="pr-1">
              <p className="text-xs font-semibold text-slate-800 capitalize">{currentRole}</p>
              <p className="text-[10px] text-slate-500">john.doe@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

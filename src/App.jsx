import React, { useState } from 'react';
import Header from './components/Header';
import StatCards from './components/StatCards';
import PayrollTable from './components/PayrollTable';
import QuickActions from './components/QuickActions';

export default function App() {
  const [role, setRole] = useState('admin');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header currentRole={role} onChangeRole={setRole} />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <section className="mb-6">
          <StatCards role={role} />
        </section>

        <section className="mb-6">
          <QuickActions role={role} />
        </section>

        <section>
          <PayrollTable role={role} />
        </section>

        <footer className="mt-10 border-t pt-6 text-center text-xs text-slate-500">
          <p>
            Demo UI for an Employee Payroll Management System — featuring Admin, Manager, and Employee views with role-based content.
          </p>
          <p className="mt-1">Branding: deep blue #0d47a1 and orange #ff9800 accents</p>
        </footer>
      </main>
    </div>
  );
}

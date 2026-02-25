"use client";

import Link from "next/link";
import { Home as HomeIcon, Mail, Phone, Search, Users, BarChart2, Settings, ChevronLeft, Upload, Download, Filter, Plus, Edit, Trash2, CheckCircle, XCircle, Clock } from "lucide-react";
import { useState } from 'react';
import ImportLeadsModal from '@/components/ImportLeadsModal';

export default function LeadsPage() {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [leads, setLeads] = useState<any[]>(Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    name: `John Smith ${index + 1}`,
    company: `Smith HVAC Services ${index + 1}`,
    email: `john${index + 1}@smithhvac.com`,
    phone: `(305) 555-${1000 + index}`,
    status: index % 3 === 0 ? 'Contacted' : index % 3 === 1 ? 'New' : 'Pending',
    interest: 'SEO Optimization',
    lastContact: 'Feb 15, 2026',
    location: 'Miami, FL'
  })));

  const exportLeads = () => {
    // Convert leads to CSV format
    const headers = ['ID', 'Name', 'Company', 'Email', 'Phone', 'Status', 'Interest', 'Last Contact', 'Location'];
    const csvRows = [];
    
    // Add headers
    csvRows.push(headers.join(','));
    
    // Add data rows
    leads.forEach(lead => {
      const row = [
        lead.id,
        `"${lead.name.replace(/\"/g, '""')}"`,
        `"${lead.company.replace(/\"/g, '""')}"`,
        lead.email,
        lead.phone,
        lead.status,
        lead.interest,
        lead.lastContact,
        lead.location
      ];
      csvRows.push(row.join(','));
    });
    
    // Create CSV content
    const csvContent = csvRows.join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HCP</span>
            </div>
            <div>
              <h1 className="font-semibold text-lg">Home Comfort Partners</h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Mission Control Dashboard</p>
            </div>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <HomeIcon className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/leads" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium">
                  <Users className="w-5 h-5" />
                  <span>Lead Management</span>
                </Link>
              </li>
              <li>
                <Link href="/email-campaigns" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Mail className="w-5 h-5" />
                  <span>Email Campaigns</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-assistant" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Phone className="w-5 h-5" />
                  <span>AI Assistant</span>
                </Link>
              </li>
              <li>
                <Link href="/seo-performance" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Search className="w-5 h-5" />
                  <span>SEO Performance</span>
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <BarChart2 className="w-5 h-5" />
                  <span>Analytics</span>
                </Link>
              </li>
              <li>
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
              <div>
                <p className="font-medium text-sm">Admin</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Super Admin</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3">
                <Link href="/" className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                  <ChevronLeft className="w-6 h-6" />
                </Link>
                Lead Management
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">Manage your 8,000 HVAC leads and track their progress</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsImportModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span>Import Leads</span>
              </button>
              <button
                onClick={exportLeads}
                className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Leads</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Lead</span>
              </button>
            </div>
          </header>
          
          {/* Lead Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Leads</h3>
                <Users className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-3xl font-bold">8,000</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">In database</p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Contacted</h3>
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold">2,400</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">30% contact rate</p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Pending</h3>
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold">5,600</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">70% in progress</p>
            </div>
          </div>
          
          {/* Lead Filters and Search */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search leads by name, email, or company..."
                  className="w-full pl-9 pr-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Interested</option>
                  <option>Not Interested</option>
                  <option>Closed Won</option>
                  <option>Closed Lost</option>
                </select>
                <select className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Products</option>
                  <option>SEO Optimization</option>
                  <option>AI Assistant</option>
                  <option>Both</option>
                </select>
                <button className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Lead Table */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      <input type="checkbox" className="rounded border-zinc-300 dark:border-zinc-600" />
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Company</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Interest</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Last Contact</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-zinc-500 dark:text-zinc-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {leads.slice(0, 10).map((lead, index) => (
                    <tr key={lead.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-zinc-300 dark:border-zinc-600" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                          <div>
                            <div className="font-medium">{lead.name}</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">HVAC Business Owner</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{lead.company}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{lead.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'Contacted' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                          lead.status === 'New' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                          'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm">{lead.interest}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.lastContact}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="p-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                            <Mail className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex justify-between items-center p-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Showing 1-10 of {leads.length} leads
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Previous
                </button>
                <button className="px-3 py-1 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Import Leads Modal */}
      <ImportLeadsModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImportSuccess={(newLeads) => {
          // Add the imported leads to the existing leads
          const leadsWithIds = newLeads.map((lead, index) => ({
            ...lead,
            id: leads.length + index + 1,
            status: lead.status || 'New',
            interest: lead.interest || 'SEO Optimization',
            lastContact: lead.lastContact || new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })
          }));
          setLeads([...leads, ...leadsWithIds]);
        }}
      />
      
    </div>
  );
}

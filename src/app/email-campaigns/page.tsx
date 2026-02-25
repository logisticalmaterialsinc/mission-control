"use client";

import Link from "next/link";
import { Home as HomeIcon, Mail, Phone, Search, Users, BarChart2, Settings, ChevronLeft, Send, Clock, CheckCircle, XCircle, Edit, Trash2, Plus, Calendar, RefreshCw } from "lucide-react";
import { useState } from 'react';
import EmailCampaignModal from '@/components/EmailCampaignModal';

export default function EmailCampaignsPage() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<'test' | 'edit' | 'schedule' | null>(null);
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
                <Link href="/leads" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Users className="w-5 h-5" />
                  <span>Lead Management</span>
                </Link>
              </li>
              <li>
                <Link href="/email-campaigns" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium">
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
                Email Campaigns
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">Manage your 3-email sequence for 8,000 HVAC leads</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <RefreshCw className="w-4 h-4" />
                <span>Sync Campaigns</span>
              </button>
              <button
                onClick={() => {
                  setActiveAction(null);
                  setIsCampaignModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>New Campaign</span>
              </button>
            </div>
          </header>
          
          {/* Campaign Overview */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-8">
            <h2 className="text-xl font-semibold mb-4">Current Email Sequence</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              3-email campaign sent over 3 days to all 8,000 leads
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="font-medium mb-2">Day 1: Introduction Email</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                  Initial contact introducing Home Comfort Partners and our services
                </p>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Sent:</span>
                    <span>8,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Opened:</span>
                    <span className="text-green-600 dark:text-green-400">2,400 (30%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Replied:</span>
                    <span className="text-blue-600 dark:text-blue-400">480 (6%)</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="font-medium mb-2">Day 2: Follow-up Email</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                  Follow-up with more details about SEO and AI Assistant services
                </p>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Sent:</span>
                    <span>8,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Opened:</span>
                    <span className="text-green-600 dark:text-green-400">1,800 (22.5%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Replied:</span>
                    <span className="text-blue-600 dark:text-blue-400">360 (4.5%)</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="font-medium mb-2">Day 3: Final Offer Email</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                  Final email with special offer and call-to-action
                </p>
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Sent:</span>
                    <span>8,000</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Opened:</span>
                    <span className="text-green-600 dark:text-green-400">1,600 (20%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500 dark:text-zinc-400">Replied:</span>
                    <span className="text-blue-600 dark:text-blue-400">280 (3.5%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Campaign Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold mb-4">Overall Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Total Emails Sent</span>
                    <span className="font-bold">24,000</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Average Open Rate</span>
                    <span className="font-bold text-green-600 dark:text-green-400">24.2%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "24.2%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Average Reply Rate</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">4.7%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "4.7%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-zinc-500 dark:text-zinc-400">Conversion to Calls</span>
                    <span className="font-bold text-yellow-600 dark:text-yellow-400">1.8%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "1.8%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold mb-4">Email Schedule</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  <Calendar className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <div className="font-medium">Day 1 Email - Introduction</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Sent immediately after lead import</div>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">8,000 sent</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  <Calendar className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <div className="font-medium">Day 2 Email - Follow-up</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Sent 24 hours after Day 1</div>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">8,000 sent</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  <Calendar className="w-5 h-5 text-zinc-400" />
                  <div className="flex-1">
                    <div className="font-medium">Day 3 Email - Final Offer</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Sent 48 hours after Day 1</div>
                  </div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">8,000 sent</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Campaign Actions */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Campaign Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  setActiveAction('test');
                  setIsCampaignModalOpen(true);
                }}
                className="flex flex-col items-center gap-3 px-4 py-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <Send className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                <span>Send Test Email</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Preview before sending</span>
              </button>
              <button
                onClick={() => {
                  setActiveAction('edit');
                  setIsCampaignModalOpen(true);
                }}
                className="flex flex-col items-center gap-3 px-4 py-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <Edit className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                <span>Edit Email Templates</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Customize content</span>
              </button>
              <button
                onClick={() => {
                  setActiveAction('schedule');
                  setIsCampaignModalOpen(true);
                }}
                className="flex flex-col items-center gap-3 px-4 py-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <Clock className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                <span>Schedule New Batch</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Plan next campaign</span>
              </button>
            </div>
          </div>
        </main>
      </div>
      
      {/* Email Campaign Modal */}
      <EmailCampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        onSendTest={() => {
          // Handle send test email
          alert('Test email sent successfully!');
        }}
        onEditTemplates={() => {
          // Handle edit templates
          alert('Template saved successfully!');
        }}
        onScheduleBatch={() => {
          // Handle schedule batch
          alert('Campaign scheduled successfully!');
        }}
      />
      
    </div>
  );
}

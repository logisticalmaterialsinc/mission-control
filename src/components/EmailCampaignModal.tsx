"use client";

import { useState } from 'react';
import { Send, X, Calendar, Edit, Clock, CheckCircle, Mail, User, Phone, MapPin } from 'lucide-react';

export default function EmailCampaignModal({
  isOpen,
  onClose,
  onSendTest,
  onEditTemplates,
  onScheduleBatch
}: {
  isOpen: boolean;
  onClose: () => void;
  onSendTest: () => void;
  onEditTemplates: () => void;
  onScheduleBatch: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'test' | 'edit' | 'schedule'>('test');
  const [testEmail, setTestEmail] = useState('');
  const [templateContent, setTemplateContent] = useState(`
Subject: Boost Your HVAC Business with Home Comfort Partners

Dear {FirstName},

I hope this email finds you well. I'm reaching out from Home Comfort Partners, where we specialize in helping HVAC businesses like yours dominate local search results and never miss another customer call.

We offer two powerful solutions:

1. SEO Optimization - Appear in the top 3 HVAC business results in local Google searches
2. AI Call Assistant - Never miss another call with our 24/7 AI-powered answering service

Many of our clients see a 300-500% increase in qualified leads within the first 3 months.

Would you be open to a quick 15-minute call to discuss how we can help grow your business?

Best regards,
The Home Comfort Partners Team
(305) 555-1234
www.homecomfortpartners.com
  `);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold">Email Campaign Manager</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b border-zinc-200 dark:border-zinc-800">
          <button
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'test' 
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
            }`}
            onClick={() => setActiveTab('test')}
          >
            <Send className="w-5 h-5 mx-auto mb-1" />
            Send Test Email
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'edit' 
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
            }`}
            onClick={() => setActiveTab('edit')}
          >
            <Edit className="w-5 h-5 mx-auto mb-1" />
            Edit Templates
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
              activeTab === 'schedule' 
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
            }`}
            onClick={() => setActiveTab('schedule')}
          >
            <Clock className="w-5 h-5 mx-auto mb-1" />
            Schedule Batch
          </button>
        </div>

        <div className="p-6 flex-1 overflow-auto">
          {activeTab === 'test' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Send Test Email</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Preview how your email will look by sending a test to any email address.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Recipient Email</label>
                <input
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="enter@email.com"
                  className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Template</label>
                <select className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Day 1: Introduction Email</option>
                  <option>Day 2: Follow-up Email</option>
                  <option>Day 3: Final Offer Email</option>
                </select>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Email Preview</h4>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Subject:</span>
                    <span>Boost Your HVAC Business with Home Comfort Partners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">From:</span>
                    <span>Home Comfort Partners &lt;contact@homecomfortpartners.com&gt;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">To:</span>
                    <span>{testEmail || 'recipient@email.com'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onSendTest();
                  onClose();
                }}
                disabled={!testEmail}
                className={`w-full py-2 rounded-lg transition-colors ${
                  testEmail 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 cursor-not-allowed'
                }`}
              >
                Send Test Email
              </button>
            </div>
          )}

          {activeTab === 'edit' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Edit Email Template</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Customize the content of your email campaigns. Use {`{FirstName}`}, {`{Company}`}, and other placeholders.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Template</label>
                <select className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
                  <option>Day 1: Introduction Email</option>
                  <option>Day 2: Follow-up Email</option>
                  <option>Day 3: Final Offer Email</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value="Boost Your HVAC Business with Home Comfort Partners"
                  className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Content</label>
                <textarea
                  value={templateContent}
                  onChange={(e) => setTemplateContent(e.target.value)}
                  className="w-full h-64 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                />
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Available Placeholders</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white dark:bg-zinc-700 px-2 py-1 rounded">{`{FirstName}`}</span>
                  <span className="bg-white dark:bg-zinc-700 px-2 py-1 rounded">{`{LastName}`}</span>
                  <span className="bg-white dark:bg-zinc-700 px-2 py-1 rounded">{`{Company}`}</span>
                  <span className="bg-white dark:bg-zinc-700 px-2 py-1 rounded">{`{Email}`}</span>
                  <span className="bg-white dark:bg-zinc-700 px-2 py-1 rounded">{`{Phone}`}</span>
                  <span className="bg-white dark:bg-zinc-700 px-2 py-1 rounded">{`{Location}`}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onEditTemplates();
                  onClose();
                }}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Template
              </button>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Schedule New Email Batch</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Plan when to send your next email campaign to leads.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    value={scheduleTime}
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Template</label>
                <select className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Day 1: Introduction Email</option>
                  <option>Day 2: Follow-up Email</option>
                  <option>Day 3: Final Offer Email</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Recipient Segment</label>
                <select className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Leads (8,000)</option>
                  <option>New Leads Only</option>
                  <option>Contacted Leads Only</option>
                  <option>Interested Leads Only</option>
                </select>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Scheduled Campaign Summary</h4>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  <div className="flex justify-between">
                    <span>Template:</span>
                    <span className="font-medium">Day 1: Introduction Email</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recipients:</span>
                    <span className="font-medium">8,000 leads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scheduled:</span>
                    <span className="font-medium">
                      {scheduleDate ? new Date(scheduleDate).toLocaleDateString() : 'Not set'}
                      {scheduleDate && scheduleTime ? ' at ' : ''}
                      {scheduleTime || ''}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onScheduleBatch();
                  onClose();
                }}
                disabled={!scheduleDate || !scheduleTime}
                className={`w-full py-2 rounded-lg transition-colors ${
                  scheduleDate && scheduleTime
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 cursor-not-allowed'
                }`}
              >
                Schedule Campaign
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
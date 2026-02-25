import Link from "next/link";
import { Home, Mail, Phone, Search, Users, BarChart2, Settings, ChevronLeft, User, Key, Bell, Moon, Sun, Database, LogOut } from "lucide-react";

export default function SettingsPage() {
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
                  <Home className="w-5 h-5" />
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
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium">
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
                Dashboard Settings
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">Configure your Mission Control dashboard</p>
            </div>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Account Settings */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@homecomfortpartners.com"
                    className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                      <Key className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Update Account
                </button>
              </div>
            </div>
            
            {/* Dashboard Settings */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold mb-6">Dashboard Preferences</h2>
              
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Enable dark theme for better night viewing</p>
                  </div>
                  <button className="w-12 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full relative transition-colors focus:outline-none">
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white dark:bg-zinc-900 rounded-full transition-transform"></span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Receive email alerts for important events</p>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm">
                    <Bell className="w-4 h-4" />
                    <span>Enabled</span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Refresh Rate</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">How often dashboard data updates</p>
                  </div>
                  <select className="px-3 py-1 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Real-time</option>
                    <option>Every 5 minutes</option>
                    <option>Every 15 minutes</option>
                    <option>Every hour</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* System Settings */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 mt-8">
            <h2 className="text-xl font-semibold mb-6">System Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Database Configuration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Database Status</span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      Connected
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Last Backup</span>
                    <span className="text-sm">Feb 16, 2026</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm">
                    <Database className="w-4 h-4" />
                    <span>Backup Now</span>
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">API Integrations</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Email Service</span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      Connected
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Payment Gateway</span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                      Connected
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CRM Integration</span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Danger Zone */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 mt-8">
            <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-6">Danger Zone</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-red-100 dark:border-red-900 rounded-lg">
                <div>
                  <h3 className="font-medium">Reset Dashboard Data</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">This will clear all dashboard data and settings</p>
                </div>
                <button className="px-4 py-2 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/50 transition-colors text-sm font-medium">
                  Reset Data
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-red-100 dark:border-red-900 rounded-lg">
                <div>
                  <h3 className="font-medium">Delete Account</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Permanently delete your account and all data</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                  <LogOut className="w-4 h-4 inline-block mr-1" />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

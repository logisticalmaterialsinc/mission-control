import Link from "next/link";
import { Home as HomeIcon, Mail, Phone, Search, Users, BarChart2, Settings, ChevronLeft } from "lucide-react";

export default function AIAssistantPage() {
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
                <Link href="/email-campaigns" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Mail className="w-5 h-5" />
                  <span>Email Campaigns</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-assistant" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium">
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
                AI Call Assistant
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">AI-powered assistant for handling missed calls and scheduling</p>
            </div>
          </header>
          
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">AI Assistant Overview</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              This feature will automatically answer missed calls, qualify leads, and schedule appointments for your HVAC clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-3">Features</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>24/7 call answering for HVAC businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>Intelligent lead qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>Automatic appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span>Integration with existing CRM systems</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Benefits</h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>Never miss a potential customer call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>Increase conversion rates by 15-25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>Reduce operational costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>Improve customer satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="font-medium mb-3">Implementation Status</h3>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">AI Assistant Setup</span>
                  <span className="text-sm font-medium">Planning Phase</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Home as HomeIcon, Mail, Phone, Search, Users, BarChart2, Settings, ChevronLeft, Target, TrendingUp, Globe, Award } from "lucide-react";

export default function SEOPerformancePage() {
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
                <Link href="/ai-assistant" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  <Phone className="w-5 h-5" />
                  <span>AI Assistant</span>
                </Link>
              </li>
              <li>
                <Link href="/seo-performance" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium">
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
                SEO Performance Tracking
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">Track SEO results for your HVAC clients</p>
            </div>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold">SEO Optimization Product</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Track the performance of your SEO service that helps HVAC businesses appear in the top 3 local Google search results.
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Current Clients</span>
                    <span className="font-bold">Loading...</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Average Ranking Improvement</span>
                    <span className="font-bold text-green-600 dark:text-green-400">+18 positions</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Clients in Top 3</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">75%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold">Performance Metrics</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Organic Traffic Increase</span>
                    <span className="font-bold">+120%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "120%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Lead Generation Increase</span>
                    <span className="font-bold">+85%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Conversion Rate Improvement</span>
                    <span className="font-bold">+42%</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">SEO Strategy Components</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Our comprehensive SEO approach for HVAC businesses includes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-medium">Local SEO Optimization</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Google My Business, local citations, and location-based keywords</p>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Search className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="font-medium">Keyword Research</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Targeted HVAC service keywords with high conversion potential</p>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="font-medium">Content Marketing</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Blog posts, service pages, and educational content</p>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-medium">Technical SEO</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Site speed, mobile optimization, and schema markup</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

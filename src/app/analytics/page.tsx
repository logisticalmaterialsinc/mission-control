import Link from "next/link";
import { Home, Mail, Phone, Search, Users, BarChart2, Settings, ChevronLeft, DollarSign, TrendingUp, TrendingDown, Users2, CreditCard } from "lucide-react";

export default function AnalyticsPage() {
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
                <Link href="/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium">
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
                Business Analytics
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">Comprehensive analytics for your HVAC digital marketing agency</p>
            </div>
          </header>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Revenue</h3>
                <DollarSign className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-3xl font-bold">$128,400</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Last 30 days</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600 dark:text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span>+18% vs last month</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">New Clients</h3>
                <Users2 className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-3xl font-bold">42</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Acquired this month</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600 dark:text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span>+25% conversion</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Avg. Deal Size</h3>
                <CreditCard className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-3xl font-bold">$3,057</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Per client</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-blue-600 dark:text-blue-400">
                <TrendingUp className="w-4 h-4" />
                <span>+8% vs last quarter</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Lead Conversion</h3>
                <TrendingUp className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="text-3xl font-bold">6.2%</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Email to client</p>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600 dark:text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span>Improving</span>
              </div>
            </div>
          </div>
          
          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold mb-4">Revenue by Product</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">SEO Optimization</span>
                    <span className="font-bold">$89,600</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">70% of total revenue</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">AI Assistant</span>
                    <span className="font-bold">$38,800</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">30% of total revenue</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-semibold mb-4">Client Acquisition Cost</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Email Campaign Cost</span>
                    <span className="font-medium">$1,200</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Leads Generated</span>
                    <span className="font-medium">8,000</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">Clients Acquired</span>
                    <span className="font-medium">42</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cost Per Client</span>
                    <span className="font-bold text-green-600 dark:text-green-400">$28.57</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Excellent ROI</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Performance Trends */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">Performance Trends</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Key performance indicators over the last 90 days
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Email Campaign Performance</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Open Rate</span>
                      <span className="font-medium">24.2%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mt-1">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "24.2%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Reply Rate</span>
                      <span className="font-medium">4.7%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "4.7%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Sales Conversion</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Lead to Call</span>
                      <span className="font-medium">1.8%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mt-1">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "1.8%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Call to Client</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mt-1">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Revenue Growth</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">MoM Growth</span>
                      <span className="font-medium text-green-600 dark:text-green-400">+18%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mt-1">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">QoQ Growth</span>
                      <span className="font-medium text-green-600 dark:text-green-400">+42%</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mt-1">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

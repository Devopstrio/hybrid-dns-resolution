import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Globe, 
  ShieldAlert, 
  Clock 
} from 'lucide-react';

const data = [
  { name: '00:00', queries: 4000, latency: 12 },
  { name: '04:00', queries: 3000, latency: 15 },
  { name: '08:00', queries: 2000, latency: 18 },
  { name: '12:00', queries: 2780, latency: 10 },
  { name: '16:00', queries: 1890, latency: 14 },
  { name: '20:00', queries: 2390, latency: 11 },
  { name: '23:59', queries: 3490, latency: 13 },
];

const COLORS = ['#0ea5e9', '#6366f1', '#a855f7', '#ec4899'];

const KPI_CARDS = [
  { title: 'Total Queries', value: '1.2M', trend: '+12.5%', color: 'sky', icon: Activity },
  { title: 'Active Zones', value: '458', trend: '+2', color: 'indigo', icon: Globe },
  { title: 'Security Alerts', value: '12', trend: '-18%', color: 'rose', icon: ShieldAlert },
  { title: 'Avg Latency', value: '12ms', trend: '-2.4%', color: 'emerald', icon: Clock },
];

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Executive DNS Overview</h1>
          <p className="text-slate-400">Global traffic and health metrics across all cloud regions.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Last 24 Hours
          </button>
          <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Download Report
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium ${card.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {card.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
            <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-${card.color}-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Resolution Traffic</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#0ea5e9' }}
                />
                <Area type="monotone" dataKey="queries" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorQueries)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Regional Latency (ms)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="latency" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;

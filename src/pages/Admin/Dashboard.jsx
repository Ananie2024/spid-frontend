import { LayoutDashboard, Users, FolderKanban, Briefcase } from "lucide-react";

export default function Dashboard() {
    const stats = [
        { name: 'Total Projects', value: '12', icon: FolderKanban, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Active Services', value: '6', icon: Briefcase, color: 'text-orange-600', bg: 'bg-orange-100' },
        { name: 'Recent Inquiries', value: '48', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center text-white">
                    <LayoutDashboard size={28} />
                </div>
                <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-0">Admin Dashboard</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {stats.map((stat) => (
                    <div key={stat.name} className="card flex items-center gap-6 py-8">
                        <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shrink-0`}>
                            <stat.icon size={32} />
                        </div>
                        <div>
                            <p className="text-[var(--text-light)] font-medium mb-1">{stat.name}</p>
                            <h3 className="text-3xl font-bold text-[var(--text-heading)] mb-0">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6 text-[var(--text-heading)]">Recent Activity</h2>
                <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-2xl">
                    <p className="text-[var(--text-light)] text-lg">Activity stream and analytics will appear here.</p>
                </div>
            </div>
        </div>
    );
}
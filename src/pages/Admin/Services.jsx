import { Briefcase, Plus } from "lucide-react";

export default function Services() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center text-white">
                        <Briefcase size={28} />
                    </div>
                    <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-0">Service Management</h1>
                </div>
                <button className="btn-primary">
                    <Plus size={20} /> Add New Service
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center py-24">
                <p className="text-xl text-[var(--text-light)]">Service list and management tools will appear here.</p>
            </div>
        </div>
    );
}
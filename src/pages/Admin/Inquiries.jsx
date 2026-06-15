import { MailSearch, Inbox } from "lucide-react";

export default function Inquiries() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center text-white">
                    <MailSearch size={28} />
                </div>
                <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-0">Customer Inquiries</h1>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-[var(--text-heading)] mb-0">Recent Submissions</h2>
                    <span className="bg-blue-50 text-[var(--primary)] px-4 py-1.5 rounded-full text-sm font-semibold">
                        0 New Today
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center py-32 bg-gray-50/50">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-6">
                        <Inbox size={40} />
                    </div>
                    <p className="text-xl font-medium text-gray-500">No inquiries found yet</p>
                    <p className="text-gray-400 mt-2">Incoming client requests will appear here as they arrive.</p>
                </div>
            </div>
        </div>
    );
}
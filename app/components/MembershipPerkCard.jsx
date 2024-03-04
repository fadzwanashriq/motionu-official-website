export default function MembershipPerkCard({ title, description }) {
  return (
    <div className="p-5 py-7 rounded-2xl shadow-xl shadow-sky-700 bg-white border-2 border-sky-900">
      <p className="text-xl font-bold text-sky-700">{title}</p>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

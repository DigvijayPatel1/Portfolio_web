import Navbar from '../components/Navbar.jsx'

function AppShell({ children }) {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 selection:bg-white/30 selection:text-white font-sans relative">
      <style>{`
        html { scroll-behavior: smooth; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default AppShell

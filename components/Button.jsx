// components/Button.jsx
export default function Button({ text, variant = "primary" }) {
  const styles = {
    primary: "bg-[#00064C] text-white border border-white/20 hover:bg-[#000975]",
    light: "bg-white text-[#00064C] hover:bg-slate-100",
    outline: "bg-transparent text-white border border-white hover:bg-white/10",
  };

  return (
    <button
      className={`px-5 py-2.5 rounded-md font-medium transition-colors cursor-pointer ${styles[variant]}`}
    >
      {text}
    </button>
  );
}

// Resume.js
export default function Resume() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <iframe
          src="/Resume.pdf"
          title="Resume"
          className="w-full h-[500px] rounded-xl border "
        ></iframe>
      </div>
    </div>
  );
}

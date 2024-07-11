import "@/shared/styles/loading.css";

export default function Loading() {
  return (
    <main className="div-body">
      <div className="block">
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <img
            src="/icon/spinner.svg"
            alt="Icon"
            width={26}
            height={20}
            className="h-[26px] w-[26px] animate-spin"
          />
          <span className="text-2xl font-medium text-[#1c284d]">
            Loading...
          </span>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import "@/shared/styles/not-found.css";

export default function NotFound() {
  return (
    <div className="div-body">
      <div>
        <h1 className="next-error-h1">404</h1>
        <div className="inline-block pt-1">
          <h2 className="text-[14px] font-normal m-0">
            This page could not be found.
          </h2>
          <h2 className="text-[14px] font-normal m-0">"go back"</h2>
        </div>
      </div>
    </div>
  );
}

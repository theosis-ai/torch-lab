import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-mono h-[80vh]">
      <Link
        href="https://github.com/theosis-ai/tune-lab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.gitHub className="h-8 w-8 mb-10" />
      </Link>
      <h1 className="text-4xl font-medium tracking-wider mb-2">Tune Lab</h1>
      <p className="font-sans tracking-wider mb-12">
        A Next.js application for Meta's TorchTune
      </p>
    </div>
  );
}

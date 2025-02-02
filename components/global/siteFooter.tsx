import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="ml-0 flex flex-col items-center gap-4 px-8 md:ml-[40%] md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Sardor. Hosted on{' '}
            <Link
              href="sardorsoftware.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

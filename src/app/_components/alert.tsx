import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";
import Link from 'next/link'
type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <Link
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </Link>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <Link
                href={`https://github.com/Alex-Der-coder/nextjs-mongodb-cloudinary-blog-starter`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </Link>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;

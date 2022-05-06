import Link from "next/link";
import React from "react";

type Props = {}

function assets({ }: Props) {
  return (
    <div className="m-10">
      <Link href="/assets/213424">
        <a className="underline">
          View an asset
        </a>
      </Link>
    </div>
  );
}

export default assets;
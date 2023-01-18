import { Suspense } from "react";

export default function PostingsList() {
  return (
    <Suspense fallback="Loading (client side)...">
      <main>
        <h1>Placeholder for Postings List</h1>
      </main>
    </Suspense>
  );
}

import { useState } from "react";

export function useExpandDescription(description: string) {
  const [expnded, setExpanded] = useState(false);
  return (
    <p>
      {description.substring(0, expnded ? description.length : 100) + "..."}
    </p>
  );
}

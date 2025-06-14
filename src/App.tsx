import { useState, useEffect } from 'react'

export function App() {
  const [shouldShowContent, setShouldShowContent] = useState(false);

  useEffect(
    () => {
      setTimeout(
        () => setShouldShowContent(true),
        1 * 1000
      );
    },
    []
  );

  return (
    <>
      {shouldShowContent && <p>Testing 123!</p>}
    </>
  )
}

import React, { useEffect, useRef } from 'react'

export function useAutoScrollTo<T extends HTMLElement>(deps: any[]): React.RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth', block:'start'})
    }
  }, deps);

  return ref;
}

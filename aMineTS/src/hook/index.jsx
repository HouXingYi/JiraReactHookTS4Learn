import { useState, useEffect } from 'react';

export function useRandom (count) {

  const [r, setr] = useState(0)

  console.log('count2', count)

  useEffect(() => {
    for(let i = 0; i < 3; i++) {
      console.log('count', count)
      setr(count + 1)
    }
  }, [count])

  return r
}
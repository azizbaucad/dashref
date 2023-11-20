import router from 'next/router';
import { Fragment, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    router.push('/dashboard');
    return () => {};
  }, []);
  return <Fragment></Fragment>;
}

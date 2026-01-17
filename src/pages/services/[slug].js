import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ServiceSlugPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to coming soon page
    router.push('/coming-soon');
  }, [router]);

  return null;
}

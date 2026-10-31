import { useEffect } from 'react';

export const usePageTitle = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | Savory` : 'Savory | Food photography and styling';
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
};

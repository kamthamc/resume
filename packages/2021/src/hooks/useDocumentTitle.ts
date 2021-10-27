import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    window.document.title = `Chaitanya's resume - ${title}`;
  }, [title]);
};

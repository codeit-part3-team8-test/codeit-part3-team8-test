import router from 'next/router';

export const redirectToPage = (path: string) => {
  return router.replace(path);
};

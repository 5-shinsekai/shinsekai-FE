'use server';

export const getMainCategoryList = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/category/main`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

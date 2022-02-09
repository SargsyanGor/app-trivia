export const getQuestions = async (categoryId) => {
  const apiUrl = "https://opentdb.com/api.php?amount=10&category=" + categoryId;

  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    return error;
  }
};

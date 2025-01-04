import { BASE_URL } from '@app/_components/_constants/fetch';
import { getCookie } from 'cookies-next';

export const UpdateFileMetadata = async (
  data,
  setLoading,
  setError,
  onSuccess,
  t,
  toast,
) => {
  let errorText;

  try {
    setLoading(true);
    setError(null);
    const token = getCookie('token');

    const response = await fetch(`${BASE_URL}/file-metadata`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('FILE_METADATA_UPDATE_ERROR');
    }

    const result = await response.json();
    await onSuccess();
    return result;
  } catch (error) {
    errorText = t(`files.errors.${error.message}`);
    toast.error(errorText);
    setError(errorText);
    throw error; // Optionally re-throw the error if you want to handle it further elsewhere
  } finally {
    setLoading(false);
  }
};

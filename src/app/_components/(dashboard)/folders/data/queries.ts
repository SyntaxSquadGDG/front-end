import { BASE_URL, SECOND_URL } from '@app/_constants/fetch';
import { fetchData, fetchData2 } from '@app/_utils/fetch';
import { getCookie } from 'cookies-next';

export const fetchAllFolders = async () => {
  return await fetchData(`/folders`);
};

export const fetchFolderPath = async (id) => {
  return await fetchData2(`/Folders/path?id=${id}`);
};

export const fetchFolderSectionName = async (id) => {
  const token = getCookie('token');
  const response = await fetch(
    `${SECOND_URL}/Folders/SectionNameForFolder?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // credentials: 'include', // Ensures cookies are sent
    },
  );

  if (!response.ok) {
    throw new Error('Error fetching section name');
  }

  const data = await response.json();
  return data;
};

export const fetchFolderFolders = async (id, page, limit) => {
  return await fetchData2(`/Folders/FoldersByParentId?id=${id}`);
};

export const fetchFolderFiles = async (id, page, limit) => {
  return await fetchData2(`/Folders/FoldersByParentId?id=${id}`);
};

export const fetchFolderSettings = async (id) => {
  return await fetchData(`/folder-settings/${id}`);
};

export const fetchFolderMetadata = async (id) => {
  return await fetchData(`/metadata/${id}`);
};

export const fetchFolderMoveAvailableStructure = async (id) => {
  return await fetchData(`/folder-structure/${id}`);
};


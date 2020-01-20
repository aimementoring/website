import request from '../utils/request';

export const uploadMentorEOI = async (data) => (
  request(`${process.env.REACT_APP_PORTAL_API}/api/upload-mentor-eoi`, {
    method: 'POST',
    body: data,
    hasAuthorization: true,
  })
);

export const uploadHoodedScholarEOI = async (data) => (
  request(`${process.env.REACT_APP_PORTAL_API}/api/upload-hooded-scholar-eoi`, {
    method: 'POST',
    body: data,
    hasAuthorization: true,
  })
);

export const uploadCustomEOI = async (data) => (
  request(`${process.env.REACT_APP_PORTAL_API}/api/upload-custom-eoi`, {
    method: 'POST',
    body: data,
    hasAuthorization: true,
  })
);

export const getUniversities = async () => (
  request(`${process.env.REACT_APP_PORTAL_API}/api/program-sites`, {
    method: 'GET',
    hasAuthorization: false,
  })
);

export const uploadImaginationDeclaration = async (data) => (
  request(`${process.env.REACT_APP_PORTAL_API}/api/imagination-declaration`, {
    method: 'POST',
    body: data,
  })
);

export const getImaginationDeclarationRecords = async () => (
  request(`${process.env.REACT_APP_PORTAL_API}/api/imagination-declaration`, {
    method: 'GET',
  })
);

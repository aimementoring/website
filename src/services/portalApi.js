import request from '../utils/request';

export async function uploadMentorEOI(data) {
  return request(`${process.env.REACT_APP_PORTAL_API}/api/upload-mentor-eoi`, {
    method: 'POST',
    body: data,
    hasAuthorization: true
  });
}

export async function getUniversities() {
  return request(`${process.env.REACT_APP_PORTAL_API}/api/program-sites`, {
    method: 'GET',
    hasAuthorization: false
  });
}

export async function uploadHoodedScholarEOI(data) {
  return request(
    `${process.env.REACT_APP_PORTAL_API}/api/upload-hooded-scholar-eoi`,
    {
      method: 'POST',
      body: data,
      hasAuthorization: true
    }
  );
}

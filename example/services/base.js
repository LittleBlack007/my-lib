export async function apiGetVersion(){
  return fetch(`/version.json?t=${new Date().getTime()}`,{ method: 'GET' });
}
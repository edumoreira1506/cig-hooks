export default function isJson(str: string) {
  try {
    const parsedJson = JSON.parse(str);

    return typeof parsedJson === 'object';
  } catch (e) {
    return false;
  }

  return true;
}

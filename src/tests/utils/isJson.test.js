import isJson from '../../utils/isJson';

describe('isJson', () => {
  const validJsonStrings = ['{}', '[]', '["fooo"]', '{ "key": "value" }'];

  validJsonStrings.forEach((validJsonString) => {
    it(`returns truhty when is ${validJsonString}`, () => {
      expect(isJson(validJsonString)).toBeTruthy();
    });
  });

  const invalidJsonStrings = ['true', '', 'dsadsadasda', '12354'];

  invalidJsonStrings.forEach((invalidJsonString) => {
    it(`returns falsy when is ${invalidJsonString}`, () => {
      expect(isJson(invalidJsonString)).toBeFalsy();
    });
  });
});

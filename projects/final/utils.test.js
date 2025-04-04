import { generateRandomId } from './utils';

describe('utils', () => {
  describe('generateRandomId', () => {
    test('should generate a random ID with default length of 10', () => {
      const id = generateRandomId();
      expect(id).toHaveLength(10);
    })
  })
});

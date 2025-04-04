import { generateRandomId } from './utils';

describe('utils', () => {
  describe('generateRandomId', () => {
    test('should generate a random ID with default length of 10', () => {
      const id = generateRandomId();
      expect(id).toHaveLength(10);
    });

    test('should generate a random ID with specified length', () => {
      const id = generateRandomId(5);
      expect(id).toHaveLength(5);
    });

    test('should check if generated ID is a string', () => {
      const id = generateRandomId();
      expect(typeof id).toBe('string');
    });

    test('should check if generated ID is built only from numbers', () => {
      const id = generateRandomId();

      expect(Number.isNaN(+id)).toBe(false);
    });

    test('should check if generated IDs are unique', () => {
      const id1 = generateRandomId();
      const id2 = generateRandomId();
    
      expect(id1).not.toBe(id2);
    });
  })
});

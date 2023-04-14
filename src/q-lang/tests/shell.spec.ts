import { Shell } from '../directives/shell';

describe('Shell', () => {
  let shell: Shell;
  beforeEach(() => {
    shell = new Shell();
  });

  describe('execute', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];

      expect(
        await shell.execute({
          name: 'aaa',
          executer: 'shell',
          columns: [],
          config: {},
        }),
      ).toBe(result);
    });
  });
});

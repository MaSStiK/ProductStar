const fs = require('fs');
const { clearTodoItems } = require('./functions');

jest.mock('fs');
describe('clearTodoItems', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should clear the data in storage.json', async () => {
    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
      callback(null);
    });

    await clearTodoItems();

    expect(fs.writeFile).toHaveBeenCalledWith(
      './storage.json',
      '[]',
      'utf8',
      expect.any(Function)
    );
  });

  it('should log a message when data is cleared', async () => {
    console.log = jest.fn();

    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
      callback(null);
    });

    await clearTodoItems();
    expect(console.log).toHaveBeenCalledWith('Data cleared from storage.json');
  });

  it('should handle errors when writing to storage.json', async () => {
    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
      callback(new Error('Write error'));
    });

    await expect(clearTodoItems()).rejects.toThrow('Write error');
  });
});

// Add more tests for other functions if needed
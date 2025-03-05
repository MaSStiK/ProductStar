const fs = require('fs');

// Mocking the fs module
jest.mock('fs');

// Import the function to be tested
const { addTodoItem, clearTodoItems, deleteTodoItem } = require('./functions');

describe('addTodoItem', () => {
  it('should add a todo item to the storage file', () => {
    // Mock the data to be read from the storage file
    const existingData = JSON.stringify([{ id: 1, task: 'Complete assignment' }]);
    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(null, existingData);
    });

    // Mock the data to be written to the storage file
    const newData = [{ id: 1, task: 'Complete assignment' }, { id: 2, task: 'Buy groceries' }];
    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
      expect(path).toBe('./storage.json');
      expect(data).toBe(JSON.stringify(newData));
      expect(encoding).toBe('utf8');
      callback(null);
    });

    // Call the function to be tested
    addTodoItem({ id: 2, task: 'Buy groceries' });

    // Verify that the fs module functions were called as expected
    expect(fs.readFile).toHaveBeenCalledWith('./storage.json', 'utf8', expect.any(Function));
    expect(fs.writeFile).toHaveBeenCalledWith('./storage.json', JSON.stringify(newData), 'utf8', expect.any(Function));
  });
});
describe('clearTodoItems', () => {
  it('should clear the todo items in the storage file', () => {
    // Mock the data to be written to the storage file
    const newData = '[]';
    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
      expect(path).toBe('./storage.json');
      expect(data).toBe(newData);
      expect(encoding).toBe('utf8');
      callback(null);
    });

    // Call the function to be tested
    clearTodoItems();

    // Verify that the fs module function was called as expected
    expect(fs.writeFile).toHaveBeenCalledWith('./storage.json', newData, 'utf8', expect.any(Function));
  });
});
describe('deleteTodoItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete a todo item from the storage file', async () => {
    const mockData = JSON.stringify([
      { id: '1', task: 'Task 1' },
      { id: '2', task: 'Task 2' }
    ]);

    fs.readFile.mockImplementation((path, encoding, callback) => callback(null, mockData));
    fs.writeFile.mockImplementation((path, data, encoding, callback) => callback(null));

    await deleteTodoItem('2');

    expect(fs.readFile).toHaveBeenCalledWith('./storage.json', 'utf8', expect.any(Function));
    expect(fs.writeFile).toHaveBeenCalledWith(
      './storage.json',
      JSON.stringify([{ id: '1', task: 'Task 1' }]),
      'utf8',
      expect.any(Function)
    );
  });

  it('should handle errors', async () => {
    fs.readFile.mockImplementation((path, encoding, callback) => callback(new Error('Read error'), null));

    await expect(deleteTodoItem('1')).rejects.toThrow('Read error');
  });
});
const greetingName = (name) => `Hello ${name}`;

test('should return a name', () => {
    name = greetingName('Mike');
    expect(name).toBe('Hello Mike');
})
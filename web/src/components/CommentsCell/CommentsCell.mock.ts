// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      id: '20',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
      linkId: '42',
      author: {
        email: 'user0@test.co',
        displayName: null,
      },
    },
    {
      id: '21',
      body: 'Second comment',
      createdAt: '2020-05-24T12:34:56Z',
      linkId: '42',
      author: {
        email: 'user1@test.co',
        displayName: 'Linda',
      },
    },
  ],
})

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  user: {
    __typename: 'User' as const,
    id: 1,
    comments: [
      {
        __typename: 'Comment' as const,
        body: 'Come for the stellar job search tips, stay for the community roasting and pet pics!',
        createdAt: '2025-03-26T20:17:30.314Z',
        linkId: '489eaeae-2021-4516-910c-154d9b8fd901',
        link: {
          title: 'Join the Torc platform!',
        },
        id: '21',
        commentVotes: [
          {
            commentId: '200',
            userId: 1,
            id: '101',
          },
        ],
        author: {
          email: 'user1@test.co',
          displayName: null,
        },
      },
      {
        __typename: 'Comment' as const,
        body: 'What a cool dev, would be great to see someone hire her! ;)',
        createdAt: '2025-03-19T20:44:36.775Z',
        linkId: 'bca336d9-a16a-47b9-bd37-b7d0f3d31bea',
        link: {
          title: 'Super cool dev site!',
        },
        id: '22',
        commentVotes: [
          {
            commentId: '201',
            userId: 1,
            id: '102',
          },
        ],
        author: {
          email: 'user1@test.co',
          displayName: null,
        },
      },
    ],
  },
})

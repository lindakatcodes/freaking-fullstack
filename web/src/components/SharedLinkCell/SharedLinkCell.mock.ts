// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sharedLink: {
    __typename: 'SharedLink' as const,
    id: '42',
  },
})

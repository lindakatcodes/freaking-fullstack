// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  userLinks: [
    {
      __typename: 'UserLinks' as const,
      id: 42,
    },
    {
      __typename: 'UserLinks' as const,
      id: 43,
    },
    {
      __typename: 'UserLinks' as const,
      id: 44,
    },
  ],
})

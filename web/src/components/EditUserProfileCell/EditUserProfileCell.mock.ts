// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  editUserProfile: {
    __typename: 'editUserProfile' as const,
    id: 42,
  },
})

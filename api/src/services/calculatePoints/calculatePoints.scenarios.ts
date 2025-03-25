import type { Prisma, SharedLink } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SharedLinkCreateArgs>({
  sharedLink: {
    testLink: {
      data: {
        updatedAt: '2024-11-13T21:58:18.650Z',
        title: 'String',
        url: 'String',
        points: 0,
        submittedBy: {
          create: {
            email: 'String793099',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        linkVotes: {
          create: [
            {
              userId: 1,
            },
            {
              userId: 2,
            },
          ],
        },
        comments: {
          create: {
            body: 'Test comment',
            authorId: 1,
            commentVotes: {
              create: {
                userId: 1,
              },
            },
          },
        },
      },
    },
  },
})
export type StandardScenario = ScenarioData<SharedLink, 'sharedLink'>

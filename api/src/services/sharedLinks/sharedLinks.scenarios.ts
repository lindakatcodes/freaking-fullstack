import type { Prisma, SharedLink } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SharedLinkCreateArgs>({
  sharedLink: {
    one: {
      data: {
        updatedAt: '2024-11-13T21:58:18.650Z',
        title: 'String',
        url: 'String',
        submittedBy: {
          create: {
            email: 'String793099',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-11-13T21:58:18.650Z',
        title: 'String',
        url: 'String',
        submittedBy: {
          create: {
            email: 'String5005398',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<SharedLink, 'sharedLink'>

import type { Prisma, SharedLink } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SharedLinkCreateArgs>({
  sharedLink: {
    one: {
      data: {
        updatedAt: '2024-10-31T16:45:40.381Z',
        title: 'String',
        url: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2024-10-31T16:45:40.382Z',
        title: 'String',
        url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SharedLink, 'sharedLink'>

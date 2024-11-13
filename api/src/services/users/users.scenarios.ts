import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String4922626',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: { email: 'String568227', hashedPassword: 'String', salt: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

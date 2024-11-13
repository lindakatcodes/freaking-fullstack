import type { SharedLink } from '@prisma/client'

import {
  sharedLinks,
  sharedLink,
  createSharedLink,
  updateSharedLink,
  deleteSharedLink,
} from './sharedLinks'
import type { StandardScenario } from './sharedLinks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sharedLinks', () => {
  scenario('returns all sharedLinks', async (scenario: StandardScenario) => {
    const result = await sharedLinks()

    expect(result.length).toEqual(Object.keys(scenario.sharedLink).length)
  })

  scenario(
    'returns a single sharedLink',
    async (scenario: StandardScenario) => {
      const result = await sharedLink({ id: scenario.sharedLink.one.id })

      expect(result).toEqual(scenario.sharedLink.one)
    }
  )

  scenario('creates a sharedLink', async (scenario: StandardScenario) => {
    const result = await createSharedLink({
      input: {
        updatedAt: '2024-11-13T21:58:18.619Z',
        title: 'String',
        url: 'String',
        submittedById: scenario.sharedLink.two.submittedById,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-11-13T21:58:18.619Z'))
    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.submittedById).toEqual(scenario.sharedLink.two.submittedById)
  })

  scenario('updates a sharedLink', async (scenario: StandardScenario) => {
    const original = (await sharedLink({
      id: scenario.sharedLink.one.id,
    })) as SharedLink
    const result = await updateSharedLink({
      id: original.id,
      input: { updatedAt: '2024-11-14T21:58:18.619Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-11-14T21:58:18.619Z'))
  })

  scenario('deletes a sharedLink', async (scenario: StandardScenario) => {
    const original = (await deleteSharedLink({
      id: scenario.sharedLink.one.id,
    })) as SharedLink
    const result = await sharedLink({ id: original.id })

    expect(result).toEqual(null)
  })
})

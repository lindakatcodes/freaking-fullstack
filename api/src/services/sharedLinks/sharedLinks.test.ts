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
        title: 'String',
        url: 'https://example.com',
        submittedById: scenario.sharedLink.two.submittedById,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.url).toEqual('https://example.com')
    expect(result.submittedById).toEqual(scenario.sharedLink.two.submittedById)
  })

  scenario('updates a sharedLink', async (scenario: StandardScenario) => {
    const original = (await sharedLink({
      id: scenario.sharedLink.one.id,
    })) as SharedLink
    const result = await updateSharedLink({
      id: original.id,
      input: { title: 'now a different string' },
    })

    expect(result.title).toEqual('now a different string')
  })

  scenario('deletes a sharedLink', async (scenario: StandardScenario) => {
    const original = (await deleteSharedLink({
      id: scenario.sharedLink.one.id,
    })) as SharedLink
    const result = await sharedLink({ id: original.id })

    expect(result).toEqual(null)
  })
})

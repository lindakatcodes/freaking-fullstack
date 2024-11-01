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

  scenario('creates a sharedLink', async () => {
    const result = await createSharedLink({
      input: {
        updatedAt: '2024-10-31T16:45:40.271Z',
        title: 'String',
        url: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-10-31T16:45:40.271Z'))
    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a sharedLink', async (scenario: StandardScenario) => {
    const original = (await sharedLink({
      id: scenario.sharedLink.one.id,
    })) as SharedLink
    const result = await updateSharedLink({
      id: original.id,
      input: { updatedAt: '2024-11-01T16:45:40.271Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-11-01T16:45:40.271Z'))
  })

  scenario('deletes a sharedLink', async (scenario: StandardScenario) => {
    const original = (await deleteSharedLink({
      id: scenario.sharedLink.one.id,
    })) as SharedLink
    const result = await sharedLink({ id: original.id })

    expect(result).toEqual(null)
  })
})

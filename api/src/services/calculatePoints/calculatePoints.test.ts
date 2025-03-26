import { calculatePoints } from './calculatePoints'
import { StandardScenario } from './calculatePoints.scenarios'

describe('calculatePoints', () => {
  scenario(
    'correctly calculates the right amount of points for a link',
    async (scenario: StandardScenario) => {
      const testLink = await calculatePoints({
        linkId: scenario.sharedLink.testLink.id,
      })
      const expectedPoints = 4

      expect(testLink.points).toEqual(expectedPoints)
    }
  )

  scenario(
    'correctly calculates zero points',
    async (scenario: StandardScenario) => {
      const testLink = await calculatePoints({
        linkId: scenario.sharedLink.testLinkTwo.id,
      })
      const expectedPoints = 0

      expect(testLink.points).toEqual(expectedPoints)
    }
  )
})

import { calculatePoints } from './calculatePoints'
import { StandardScenario } from './calculatePoints.scenarios'

describe('calculatePoints', () => {
  scenario(
    'correctly calculates the right amount of points for a link',
    async (scenario: StandardScenario) => {
      const pointsResult = await calculatePoints({
        linkId: scenario.sharedLink.testLink.id,
      })
      const expectedPoints = 4

      expect(pointsResult).toEqual(expectedPoints)
    }
  )
})

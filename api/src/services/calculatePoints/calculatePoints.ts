import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const calculatePoints = async ({ linkId }) => {
  // Get the link and related data
  const link = await db.sharedLink.findUnique({
    where: { id: linkId },
    include: {
      linkVotes: true,
    },
  })

  const linkComments = await db.comment.findMany({
    where: { linkId },
    include: {
      commentVotes: true,
    },
  })

  logger.info(link)
  logger.info(linkComments)

  // Your algorithm logic here
  const currentPoints = link.points
  const linkUpvotes = link.linkVotes.length
  const commentCount = linkComments.length
  const commentVotes = linkComments
    .map((comment) => comment.commentVotes.length)
    .reduce((a, b) => a + b)

  const newPoints = currentPoints + linkUpvotes + commentCount + commentVotes

  // Update the database with the new point value
  return db.sharedLink.update({
    where: { id: linkId },
    data: { points: newPoints },
  })
}

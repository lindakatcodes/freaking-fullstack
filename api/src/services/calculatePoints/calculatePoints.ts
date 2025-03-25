import { db } from 'src/lib/db'

export const calculatePoints = async ({ linkId }) => {
  // get the requested link and related comment data
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

  // the actual calculation of points
  const linkUpvotes = link.linkVotes.length
  const commentCount = linkComments.length
  const commentVotes =
    commentCount <= 0
      ? 0
      : linkComments
          .map((comment) => comment.commentVotes.length)
          .reduce((a, b) => a + b)

  const newPoints = linkUpvotes + commentCount + commentVotes

  // update the database with the new point value
  return db.sharedLink.update({
    where: { id: linkId },
    data: { points: newPoints },
  })
}

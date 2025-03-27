import { db } from 'src/lib/db'

interface TimestampedItem {
  createdAt: string | Date
}

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

  const commentVotes = linkComments?.flatMap((comment) => comment.commentVotes)
  const linkDate = new Date(link.createdAt)

  // take each array we want to count and get the total points it should have
  const linkVoteCount = getPointCounts(2, linkDate, link.linkVotes ?? [])
  const commentCount = getPointCounts(2, linkDate, linkComments ?? [])
  const commentVoteCount = getPointCounts(1, linkDate, commentVotes ?? [])

  // add those actual points together
  const newPoints = linkVoteCount + commentCount + commentVoteCount

  // update the database with the new point value
  return db.sharedLink.update({
    where: { id: linkId },
    data: { points: newPoints },
  })
}

/*
  This function calculates the time difference in minutes from the link creation time and the list item's creation time, and applies a multiplier based on how long that time difference is. This way, faster interactions get more weight added than slower interactions.
*/
function getPointCounts<T extends TimestampedItem>(
  baseValue: number,
  initDate: Date,
  list: Array<T>
): number {
  let total = 0

  list?.forEach((item) => {
    const itemDate = new Date(item.createdAt)
    const timeDiff = Math.floor(
      (itemDate.getTime() - initDate.getTime()) / (1000 * 60)
    )

    let multiplier = 1
    if (timeDiff <= 2) {
      multiplier = 5
    } else if (timeDiff <= 5) {
      multiplier = 4
    } else if (timeDiff <= 10) {
      multiplier = 3
    } else if (timeDiff <= 30) {
      multiplier = 2
    } else {
      multiplier = 1
    }

    total += baseValue * multiplier
  })

  return total
}

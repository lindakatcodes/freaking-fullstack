import { db } from '../api/src/lib/db'

async function keepAliveOperations() {
  try {
    const userCount = await db.user.count()
    console.log(`Current user count: ${userCount}`)

    const linkCount = await db.sharedLink.count()
    console.log(`Current shared link count: ${linkCount}`)
  } catch (error) {
    console.error('Error performing database operations:', error)
    process.exit(1)
  } finally {
    await db.$disconnect()
  }
}

keepAliveOperations()

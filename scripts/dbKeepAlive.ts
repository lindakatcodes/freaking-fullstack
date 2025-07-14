import { db } from '../api/src/lib/db'

async function keepAliveOperations() {
  try {
    // Perform one of each CRUD operation to keep the database active
    // Create a temporary user
    const tempUser = await db.user.create({
      data: {
        email: `temp_${Date.now()}@keepalive.test`,
        hashedPassword: 'temporary',
        salt: 'temporary',
      },
    })
    console.log('Created temporary user')

    // Perform a query to fetch the user (aka read)
    const fetchedUser = await db.user.findUnique({
      where: { id: tempUser.id },
    })
    console.log(`Retrieved user data: ${fetchedUser.email}`)

    // Update the user
    const updatedUser = await db.user.update({
      where: { id: tempUser.id },
      data: { email: `updated_${Date.now()}@keepalive.test` },
    })
    console.log(`Updated user data: ${updatedUser.email}`)

    // Delete the temporary user
    await db.user.delete({
      where: { id: tempUser.id },
    })
    console.log('Cleaned up temporary user')
  } catch (error) {
    console.error('Error performing database operations:', error)
    process.exit(1)
  } finally {
    await db.$disconnect()
  }
}

keepAliveOperations()

async function getUserData(userId) {
  try {
    // Both queries run concurrently in parallel
    const [user, orders] = await Promise.all([
      User.findById(userId),
      Order.find({ userId })
    ]);

    if (!user) {
      throw new Error('User not found');
    }

    return { user, orders };
  } catch (error) {
    console.error('Failed to fetch user data:', error.message);
    throw error;
  }
}
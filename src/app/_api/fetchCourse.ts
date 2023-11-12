import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCourse(id: string) {
  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
    include: {
      reviews: true, // Include related reviews
    },
  });

  return course;
}

export default getCourse;
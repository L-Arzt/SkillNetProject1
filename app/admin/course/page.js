import React from 'react';

import RoomsAdmin from '@/app/components/admin/RoomsAdmin';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function getCourse() {
  return await client.course.findMany({
    select: {
      id: true,
      name: true,
      topic: true,
      description: true,
      author: true,
      peopleMax: true,
      price: true,
    },
  });
}

export default async function AdminPage() {
  const course = await getCourse();
  return (
    <div className="container p-[100px]">
      <RoomsAdmin course={course} />
    </div>
  );
}